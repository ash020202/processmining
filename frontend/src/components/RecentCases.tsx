"use client";

import { useState, useMemo } from "react";
import {
  Calendar,
  CheckCircle2,
  Clock,
  Copy,
  Download,
  Filter,
  Search,
  SortAsc,
  SortDesc,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  Eye,
  FileText,
  AlertCircle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface Case {
  id: string;
  startDate: string;
  endDate: string;
  duration: string;
  status: string;
  priority?: string;
  type?: string;
}

export default function RecentCases() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortField, setSortField] = useState<keyof Case>("startDate");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Sample data with additional fields
  const allCases: Case[] = [
    {
      id: "aa091dbf-1dc9-45cb-8362-4c825c59ed51",
      startDate: "2024-03-12",
      endDate: "2024-03-27",
      duration: "15.0 days",
      status: "Completed",
      priority: "Medium",
      type: "Standard",
    },
    {
      id: "9a576137-cb6e-4eba-b002-4253ea420f33",
      startDate: "2024-01-17",
      endDate: "2024-01-23",
      duration: "6.2 days",
      status: "Completed",
      priority: "High",
      type: "Price Change",
    },
    {
      id: "18a6cba8-a509-4895-9328-2d10f10f77f0",
      startDate: "2024-01-14",
      endDate: "2024-01-30",
      duration: "16.2 days",
      status: "Completed",
      priority: "Low",
      type: "Standard",
    },
    {
      id: "f4e6cdb4-e57d-4107-a859-8bd29a60ee55",
      startDate: "2024-10-28",
      endDate: "2024-11-07",
      duration: "10.1 days",
      status: "Completed",
      priority: "Medium",
      type: "Material Change",
    },
    {
      id: "a7517a13-c49d-4cce-8644-8fc8dadce7b2",
      startDate: "2024-03-22",
      endDate: "2024-04-01",
      duration: "10.8 days",
      status: "Completed",
      priority: "High",
      type: "Standard",
    },
    {
      id: "b8629a45-d7f1-4e3b-9c12-5a87b2e34f19",
      startDate: "2024-04-05",
      endDate: "2024-04-15",
      duration: "10.0 days",
      status: "Completed",
      priority: "Medium",
      type: "Price Change",
    },
    {
      id: "c9731b56-e8g2-5f4c-0d23-6b98c3f45g20",
      startDate: "2024-04-18",
      endDate: "2024-04-25",
      duration: "7.0 days",
      status: "Completed",
      priority: "Low",
      type: "Material Change",
    },
  ];

  // Filter and sort the data
  const filteredAndSortedCases = useMemo(() => {
    return allCases
      .filter(
        (caseItem) =>
          caseItem.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
          caseItem.type?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          caseItem.priority?.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .sort((a: any, b: any) => {
        if (sortField === "duration") {
          const aDuration = Number.parseFloat(a.duration.split(" ")[0]);
          const bDuration = Number.parseFloat(b.duration.split(" ")[0]);
          return sortDirection === "asc"
            ? aDuration - bDuration
            : bDuration - aDuration;
        } else {
          const aValue = a[sortField];
          const bValue = b[sortField];
          if (sortDirection === "asc") {
            return aValue?.localeCompare(bValue);
          } else {
            return bValue?.localeCompare(aValue);
          }
        }
      });
  }, [allCases, searchQuery, sortField, sortDirection]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedCases.length / itemsPerPage);
  const paginatedCases = filteredAndSortedCases.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle sorting
  const handleSort = (field: keyof Case) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  // Copy case ID to clipboard
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  // Format date to be more readable
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Get status badge color
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-green-100 text-green-800 hover:bg-green-200";
      case "in progress":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200";
      case "pending":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200";
    }
  };

  // Get priority badge color
  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case "high":
        return "bg-red-100 text-red-800 hover:bg-red-200";
      case "medium":
        return "bg-orange-100 text-orange-800 hover:bg-orange-200";
      case "low":
        return "bg-blue-100 text-blue-800 hover:bg-blue-200";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200";
    }
  };

  // Get type badge color
  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "standard":
        return "bg-violet-100 text-violet-800 border-violet-200";
      case "price change":
        return "bg-cyan-100 text-cyan-800 border-cyan-200";
      case "material change":
        return "bg-amber-100 text-amber-800 border-amber-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  // Format case ID for display
  const formatCaseId = (id: string) => {
    return id.substring(0, 8) + "..." + id.substring(id.length - 4);
  };

  return (
    <Card className="w-full shadow-sm border-gray-200">
      <CardHeader className="pb-2 bg-gray-50 rounded-t-lg">
        <CardTitle className="text-xl flex items-center justify-between">
          <div className="flex items-center gap-2 md:text-[16px] text-[12px] pr-1 whitespace-nowrap ">
            <span className="bg-white p-1.5 rounded-md shadow-sm">
              <FileText className="h-5 w-5 text-gray-700" />
            </span>
            <p className="">Recent Cases</p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="bg-white border-gray-200 shadow-sm"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="bg-white border-gray-200 shadow-sm"
            >
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="mb-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search by ID, type, or priority..."
              className="pl-8 border-gray-200 focus:border-gray-300 shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="rounded-md border border-gray-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-gray-50">
                <TableRow className="hover:bg-gray-50">
                  <TableHead className="w-[120px]   font-medium text-gray-700">
                    <div
                      className="  items-center cursor-pointer"
                      onClick={() => handleSort("id")}
                    >
                      Case ID
                      {sortField === "id" &&
                        (sortDirection === "asc" ? (
                          <SortAsc className="ml-1 h-4 w-4" />
                        ) : (
                          <SortDesc className="ml-1 h-4 w-4" />
                        ))}
                    </div>
                  </TableHead>
                  <TableHead className="font-medium md:table-cell hidden text-gray-700">
                    <div
                      className="flex items-center cursor-pointer"
                      onClick={() => handleSort("startDate")}
                    >
                      Start Date
                      {sortField === "startDate" &&
                        (sortDirection === "asc" ? (
                          <SortAsc className="ml-1 h-4 w-4" />
                        ) : (
                          <SortDesc className="ml-1 h-4 w-4" />
                        ))}
                    </div>
                  </TableHead>
                  <TableHead className="font-medium md:table-cell hidden text-gray-700">
                    <div
                      className="flex items-center cursor-pointer"
                      onClick={() => handleSort("endDate")}
                    >
                      End Date
                      {sortField === "endDate" &&
                        (sortDirection === "asc" ? (
                          <SortAsc className="ml-1 h-4 w-4" />
                        ) : (
                          <SortDesc className="ml-1 h-4 w-4" />
                        ))}
                    </div>
                  </TableHead>
                  <TableHead className="font-medium md:table-cell hidden text-gray-700">
                    <div
                      className="flex items-center cursor-pointer"
                      onClick={() => handleSort("duration")}
                    >
                      Duration
                      {sortField === "duration" &&
                        (sortDirection === "asc" ? (
                          <SortAsc className="ml-1 h-4 w-4" />
                        ) : (
                          <SortDesc className="ml-1 h-4 w-4" />
                        ))}
                    </div>
                  </TableHead>
                  <TableHead className="font-medium text-gray-700">
                    Type
                  </TableHead>
                  <TableHead className="font-medium text-gray-700">
                    Priority
                  </TableHead>
                  <TableHead className="font-medium text-gray-700">
                    Status
                  </TableHead>
                  <TableHead className="text-right font-medium text-gray-700">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedCases.length > 0 ? (
                  paginatedCases.map((caseItem) => (
                    <TableRow
                      key={caseItem.id}
                      className="hover:bg-gray-50 border-b border-gray-100"
                    >
                      <TableCell className="font-medium py-3 ">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div className="flex items-center">
                                <span className="text-xs font-mono bg-gray-100 py-1 px-2 rounded-md">
                                  {formatCaseId(caseItem.id)}
                                </span>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-6 w-6 ml-1"
                                  onClick={() => copyToClipboard(caseItem.id)}
                                >
                                  <Copy className="h-3 w-3" />
                                </Button>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="text-xs font-mono">{caseItem.id}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </TableCell>
                      <TableCell className="py-3 md:table-cell hidden">
                        <div className="flex items-center">
                          <div className="bg-orange-100 p-1 rounded-full mr-1.5">
                            <Calendar className="h-3.5 w-3.5 text-orange-500" />
                          </div>
                          {formatDate(caseItem.startDate)}
                        </div>
                      </TableCell>
                      <TableCell className="py-3 md:table-cell hidden">
                        <div className="flex items-center">
                          <div className="bg-orange-100 p-1 rounded-full mr-1.5">
                            <Calendar className="h-3.5 w-3.5 text-orange-500" />
                          </div>
                          {formatDate(caseItem.endDate)}
                        </div>
                      </TableCell>
                      <TableCell className="py-3 md:table-cell hidden">
                        <div className="flex items-center">
                          <div className="bg-orange-100 p-1 rounded-full mr-1.5">
                            <Clock className="h-3.5 w-3.5 text-orange-500" />
                          </div>
                          <span className="font-medium">
                            {caseItem.duration}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="py-3">
                        {caseItem.type && (
                          <Badge
                            variant="outline"
                            className={cn(
                              "font-normal border px-2 py-0.5",
                              getTypeColor(caseItem.type)
                            )}
                          >
                            {caseItem.type}
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell className="py-3">
                        {caseItem.priority && (
                          <Badge
                            className={cn(
                              "font-normal px-2 py-0.5",
                              getPriorityColor(caseItem.priority)
                            )}
                          >
                            {caseItem.priority}
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell className="py-3">
                        <Badge
                          className={cn(
                            "font-normal px-2 py-0.5",
                            getStatusColor(caseItem.status)
                          )}
                        >
                          <CheckCircle2 className="h-3 w-3 mr-1" />
                          {caseItem.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right py-3">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 rounded-full hover:bg-gray-100"
                            >
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent
                            align="end"
                            className="w-48 bg-white"
                          >
                            <DropdownMenuItem className="cursor-pointer">
                              <Eye className="h-4 w-4 mr-2" />
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">
                              <Download className="h-4 w-4 mr-2" />
                              Export Case
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">
                              <AlertCircle className="h-4 w-4 mr-2" />
                              Report Issue
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={8}
                      className="text-center py-8 text-gray-500"
                    >
                      <div className="flex flex-col items-center justify-center gap-2">
                        <Search className="h-8 w-8 text-gray-400" />
                        <p>No cases found matching your search criteria</p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-2"
                          onClick={() => setSearchQuery("")}
                        >
                          Clear Search
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between mt-4 bg-gray-50 p-2 rounded-md border border-gray-200">
            <div className="text-sm text-gray-500">
              Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
              {Math.min(
                currentPage * itemsPerPage,
                filteredAndSortedCases.length
              )}{" "}
              of {filteredAndSortedCases.length} cases
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="h-8 w-8 p-0 bg-white"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              {Array.from({ length: Math.min(totalPages, 5) }).map(
                (_, index) => {
                  // Show ellipsis for many pages
                  const pageNum =
                    totalPages <= 5
                      ? index + 1
                      : getPageNumber(index, currentPage, totalPages);
                  const isEllipsis = pageNum === -1;

                  return isEllipsis ? (
                    <span key={`ellipsis-${index}`} className="px-2">
                      ...
                    </span>
                  ) : (
                    <Button
                      key={index}
                      variant={currentPage === pageNum ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(pageNum)}
                      className={cn(
                        "h-8 w-8 p-0",
                        currentPage === pageNum
                          ? "bg-gray-900 text-white"
                          : "bg-white"
                      )}
                    >
                      {pageNum}
                    </Button>
                  );
                }
              )}
              <Button
                variant="outline"
                size="icon"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="h-8 w-8 p-0 bg-white"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// Helper function to determine which page numbers to show
function getPageNumber(
  index: number,
  currentPage: number,
  totalPages: number
): number {
  // Always show first page, last page, current page, and one page before and after current page
  if (index === 0) return 1;
  if (index === 4) return totalPages;

  // For the middle 3 slots
  if (currentPage <= 3) {
    // Near the start
    return index + 1;
  } else if (currentPage >= totalPages - 2) {
    // Near the end
    return totalPages - 4 + index;
  } else {
    // In the middle
    if (index === 1) return currentPage - 1;
    if (index === 2) return currentPage;
    if (index === 3) return currentPage + 1;
    return -1; // Ellipsis
  }
}
