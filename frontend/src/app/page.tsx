"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { parseCSV } from "@/lib/utils";
import {
  AlertCircle,
  CheckCircle2,
  FileSpreadsheet,
  HelpCircle,
  Upload,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HomePage() {
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const router = useRouter();

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a CSV file to upload");
      return;
    }

    setIsUploading(true);

    try {
      const data = await parseCSV(file);
      const header = Object.keys(data[0]);
      const requiredKeywords = ["case", "activity", "timestamp"];

      const isValidColumn = (column: string, keyword: string) =>
        column.toLowerCase().includes(keyword.toLowerCase());

      const validateCSVHeaders = (headers: string[]) =>
        requiredKeywords.every((keyword) =>
          headers.some((header) => isValidColumn(header, keyword))
        );

      if (!validateCSVHeaders(header)) {
        setError("Missing required columns: case, activity, timestamp");
        setIsUploading(false);
        return;
      }

      localStorage.setItem("columnMap", JSON.stringify(header));
      setIsUploading(false);
      router.push("/overview");
    } catch (error) {
      console.error("Error parsing CSV file:", error);
      setError("Failed to parse CSV file.");
      setIsUploading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 ">
      <div className="flex flex-col self-start sticky top-0 z-10 bg-black w-full backdrop-blur-sm p-1">
        <h1 className="pl-2 text-[18px] font-bold text-orange-500  ">
          Process Mining DashBoard
        </h1>
        <p className="text-[10px] text-white pl-2">
          By <b className="text-orange-500">Lumel</b>{" "}
        </p>
      </div>
      <p className="p-4 w-[400px] text-gray-600  capitalize text-center">
        Upload your event log CSV file to analyze{" "}
        <b>
          process flows, identify bottlenecks, and discover optimization
          opportunities.
        </b>
      </p>

      <Card className="w-[60%] shadow">
        <CardHeader className="space-y-1 border-b border-gray-100 pb-4">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-500">
            <FileSpreadsheet className="h-6 w-6" />
          </div>
          <CardTitle className="pt-2 text-center text-2xl font-bold">
            Upload Event Log CSV
          </CardTitle>
          <CardDescription className="text-center">
            We&apos;ll analyze your data and generate interactive visualizations
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 pt-6">
          {error && (
            <div className="animate-in fade-in slide-in-from-top-4 duration-300 ease-in-out">
              <div className="relative rounded-lg border border-orange-200 bg-orange-50 p-4">
                <div className="flex items-start">
                  <div className="mr-3 flex-shrink-0">
                    <AlertCircle className="h-5 w-5 text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-orange-800">
                      Validation Error
                    </h3>
                    <div className="mt-1 text-sm text-orange-700">{error}</div>

                    <div className="mt-3">
                      <h4 className="text-xs font-medium uppercase text-orange-800">
                        Suggestions:
                      </h4>
                      <ul className="mt-1 list-inside list-disc text-sm text-orange-700">
                        <li>
                          Check that your CSV file contains all required columns
                        </li>
                        <li>
                          Column names should be lowercase and match exactly
                        </li>
                        <li>
                          Download our{" "}
                          <a href="#" className="font-medium underline">
                            sample template
                          </a>{" "}
                          for reference
                        </li>
                      </ul>
                    </div>
                  </div>
                  <button
                    onClick={() => setError(null)}
                    className="ml-auto flex-shrink-0 rounded-full p-1 text-orange-500 hover:bg-orange-100"
                  >
                    <X className="h-4 w-4" />
                    <span className="sr-only">Dismiss</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="space-y-2">
            <label
              htmlFor="csv-upload"
              className="flex h-32 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-200 bg-white transition-colors hover:border-orange-300 hover:bg-gray-50"
            >
              <div className="flex flex-col items-center justify-center pb-6 pt-5">
                <Upload className="mb-2 h-8 w-8 text-orange-500" />
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500">.CSV files only</p>
              </div>
              <input
                id="csv-upload"
                type="file"
                accept=".csv,.xlxs"
                className="hidden"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
              />
            </label>

            {file && (
              <div className="mt-2 flex items-center rounded-md bg-green-50 px-3 py-2 text-sm text-green-700">
                <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                <span className="font-medium">{file.name}</span>
                <span className="ml-2 text-xs text-green-600">
                  ({(file.size / 1024).toFixed(1)} KB)
                </span>
                <button
                  onClick={() => setFile(null)}
                  className="ml-auto rounded-full p-1 text-green-500 hover:bg-green-100"
                >
                  <X className="h-3.5 w-3.5" />
                  <span className="sr-only">Remove file</span>
                </button>
              </div>
            )}

            <div className="mt-3 rounded-md bg-gray-50 p-3">
              <div className="flex items-center">
                <h4 className="text-xs font-medium uppercase text-gray-500">
                  Required Format
                </h4>
                <div className="relative ml-1 inline-block">
                  <button className="text-gray-400 hover:text-gray-500">
                    <HelpCircle className="h-3.5 w-3.5" />
                    <span className="sr-only">Help</span>
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Your CSV must include these columns:{" "}
                <span className="font-medium">
                  case_id, activity, timestamp
                </span>
              </p>
              <p className="mt-1 text-xs text-gray-500">
                After upload, you&apos;ll be taken to the dashboard to view your
                analysis results.
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="border-t border-gray-100 pt-4">
          <Button
            className="w-full bg-orange-500 text-white hover:bg-orange-600"
            onClick={handleUpload}
            disabled={isUploading}
          >
            {isUploading ? (
              <>
                <svg
                  className="mr-2 h-4 w-4 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Processing...
              </>
            ) : (
              "Upload and Continue"
            )}
          </Button>
        </CardFooter>
      </Card>

      <div className="mt-6 max-w-md text-center text-sm text-gray-500">
        <p>
          Need help with your CSV format?{" "}
          <a href="#" className="text-orange-500 hover:underline">
            View our guide
          </a>{" "}
          or
          <a href="#" className="ml-1 text-orange-500 hover:underline">
            download a sample file
          </a>
          .
        </p>
      </div>
    </div>
  );
}
