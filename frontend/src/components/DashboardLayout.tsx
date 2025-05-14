import React from "react";
import Navbar from "../components/Navbar";
import { DashboardLayoutProps } from "@/lib/types";

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto py-6 px-4 flex flex-col">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
