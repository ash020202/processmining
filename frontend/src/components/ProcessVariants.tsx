"use client";

import type React from "react";

import { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  BarChart2,
  TrendingUp,
  Zap,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface ProcessStep {
  name: string;
  duration?: string;
}

interface ProcessPath {
  id: string;
  title: string;
  percentage: number;
  cases: number;
  steps: ProcessStep[];
  icon: React.ReactNode;
  color: string;
}

export default function ProcessVariants() {
  const [expandedPath, setExpandedPath] = useState<string | null>("standard");

  const processPaths: ProcessPath[] = [
    {
      id: "standard",
      title: "Standard Path",
      percentage: 57.1,
      cases: 52341,
      color: "bg-orange-300 text-emerald-700 border-orange-200",
      icon: <Zap className="h-5 w-5 text-orange-500" />,
      steps: [
        { name: "Receive PO", duration: "1.2 days" },
        { name: "Create SO", duration: "0.5 days" },
        { name: "Create Delivery", duration: "1.8 days" },
        { name: "Create Shipment", duration: "0.7 days" },
        { name: "Issue Goods", duration: "0.3 days" },
        { name: "Create Invoice", duration: "0.4 days" },
        { name: "Clear Invoice", duration: "2.1 days" },
      ],
    },
    {
      id: "price-change",
      title: "Price Change Path",
      percentage: 17.0,
      cases: 15585,
      color: "bg-orange-300 text-blue-700 border-orange-200",
      icon: <TrendingUp className="h-5 w-5 text-orange-500" />,
      steps: [
        { name: "Receive PO", duration: "1.2 days" },
        { name: "Create SO", duration: "0.5 days" },
        { name: "Change Net Price", duration: "1.3 days" },
        { name: "Create Delivery", duration: "1.8 days" },
        { name: "Create Shipment", duration: "0.7 days" },
        { name: "Issue Goods", duration: "0.3 days" },
        { name: "Create Invoice", duration: "0.4 days" },
        { name: "Clear Invoice", duration: "2.1 days" },
      ],
    },
    {
      id: "material-change",
      title: "Material Change Path",
      percentage: 12.4,
      cases: 11376,
      color: "bg-orange-300 text-purple-700 border-orange-200",
      icon: <BarChart2 className="h-5 w-5 text-orange-500" />,
      steps: [
        { name: "Receive PO", duration: "1.2 days" },
        { name: "Create SO", duration: "0.5 days" },
        { name: "Change Material", duration: "1.5 days" },
        { name: "Create Delivery", duration: "1.8 days" },
        { name: "Create Shipment", duration: "0.7 days" },
        { name: "Issue Goods", duration: "0.3 days" },
        { name: "Create Invoice", duration: "0.4 days" },
        { name: "Clear Invoice", duration: "2.1 days" },
      ],
    },
  ];

  const toggleExpand = (id: string) => {
    setExpandedPath(expandedPath === id ? null : id);
  };

  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl flex items-center gap-2">
          <span className="bg-gray-100 p-1.5 rounded-md">
            <BarChart2 className="h-5 w-5 text-gray-700" />
          </span>
          Process Variants
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="visual" className="w-full ">
          <TabsList className="mb-4" style={{ borderRadius: "4px" }}>
            <TabsTrigger value="visual" style={{ borderRadius: "4px" }}>
              Visual Flow
            </TabsTrigger>
            <TabsTrigger value="list" style={{ borderRadius: "4px" }}>
              List View
            </TabsTrigger>
            <TabsTrigger value="comparison" style={{ borderRadius: "4px" }}>
              Comparison
            </TabsTrigger>
          </TabsList>

          <TabsContent value="visual" className="space-y-4">
            {processPaths.map((path) => (
              <div
                key={path.id}
                className={cn(
                  "border rounded-lg overflow-hidden transition-all duration-300",
                  expandedPath === path.id ? "shadow-md" : "",
                  expandedPath === path.id ? path.color : "border-gray-200"
                )}
              >
                <div
                  className={cn(
                    "flex justify-between items-center p-4 cursor-pointer",
                    expandedPath === path.id ? "bg-white" : "bg-gray-50"
                  )}
                  onClick={() => toggleExpand(path.id)}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "p-2 rounded-full",
                        path.color.split(" ")[0]
                      )}
                    >
                      {path.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">{path.title}</h3>
                      <div className="text-sm text-gray-500 mt-1">
                        {expandedPath !== path.id && (
                          <div className="flex items-center gap-1.5 flex-wrap">
                            {path.steps.map((step, idx) => (
                              <span key={idx} className="flex items-center">
                                {idx > 0 && (
                                  <ArrowRight className="h-3 w-3 mx-1 text-gray-400" />
                                )}
                                <span className="text-gray-600">
                                  {step.name}
                                </span>
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <div className="font-medium text-lg">
                        {path.percentage}%
                      </div>
                      <div className="text-sm text-gray-500">
                        {path.cases.toLocaleString()} cases
                      </div>
                    </div>
                    {expandedPath === path.id ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </div>
                </div>

                {expandedPath === path.id && (
                  <div className="p-4 bg-white">
                    <div className="mb-3">
                      <Progress
                        value={path.percentage}
                        className="h-2 bg-gray-300"
                      />
                    </div>
                    <div className="flex flex-wrap items-center gap-y-4 mt-4">
                      {path.steps.map((step, idx) => (
                        <div key={idx} className="flex items-center">
                          {idx > 0 && (
                            <ArrowRight className="h-4 w-4 mx-2 text-gray-400" />
                          )}
                          <div className="bg-gray-100 rounded-lg p-2 relative group">
                            <span className="font-medium">{step.name}</span>
                            {step.duration && (
                              <Badge variant="outline" className="ml-2 text-xs">
                                {step.duration}
                              </Badge>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </TabsContent>

          <TabsContent value="list" className="space-y-4">
            <div className="grid gap-4">
              {processPaths.map((path) => (
                <Card key={path.id} className="overflow-hidden">
                  <div className={cn("h-1 w-full", path.color.split(" ")[0])} />
                  <CardContent className="pt-4">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-2">
                        <div
                          className={cn(
                            "p-1.5 rounded-md",
                            path.color.split(" ")[0]
                          )}
                        >
                          {path.icon}
                        </div>
                        <h3 className="font-medium">{path.title}</h3>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{path.percentage}%</div>
                        <div className="text-sm text-gray-500">
                          {path.cases.toLocaleString()} cases
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {path.steps.map((step, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs font-medium mr-2">
                            {idx + 1}
                          </div>
                          <div className="flex-1">
                            <div className="font-medium">{step.name}</div>
                            {step.duration && (
                              <div className="text-xs text-gray-500">
                                {step.duration}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="comparison" className="space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left p-2 bg-gray-50 border">
                      Process Step
                    </th>
                    {processPaths.map((path) => (
                      <th
                        key={path.id}
                        className="text-left p-2 bg-gray-50 border"
                      >
                        <div className="flex items-center gap-2">
                          <div
                            className={cn(
                              "size-3 rounded-full",
                              path.color.split(" ")[0]
                            )}
                          />
                          {path.title}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 8 }).map((_, stepIdx) => (
                    <tr
                      key={stepIdx}
                      className={stepIdx % 2 === 0 ? "bg-gray-50" : "bg-white"}
                    >
                      <td className="p-2 border font-medium">
                        Step {stepIdx + 1}
                      </td>
                      {processPaths.map((path) => {
                        const step = path.steps[stepIdx];
                        return (
                          <td
                            key={`${path.id}-${stepIdx}`}
                            className="p-2 border"
                          >
                            {step ? step.name : "—"}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                  <tr className="bg-gray-100">
                    <td className="p-2 border font-medium">Total Cases</td>
                    {processPaths.map((path) => (
                      <td
                        key={`${path.id}-cases`}
                        className="p-2 border font-medium"
                      >
                        {path.cases.toLocaleString()}
                      </td>
                    ))}
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="p-2 border font-medium">Percentage</td>
                    {processPaths.map((path) => (
                      <td
                        key={`${path.id}-percentage`}
                        className="p-2 border font-medium"
                      >
                        {path.percentage}%
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
