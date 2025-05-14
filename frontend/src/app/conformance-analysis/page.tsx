"use client";

import React, { useState, useEffect } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import FilterBar from "../../components/FilterBar";
import ConformanceChecking from "../../components/ConformanceChecking";
import DeviatingFlows from "../../components/DeviatingFlows";
import UndesiredActivities from "../../components/UndesiredActivities";
import csvDataService from "../../lib/csvDataService";
import { ConformanceData } from "@/lib/types";
import { undesiredActivities } from "@/lib/mockData";
import Loader from "@/components/Loader";

export default function ConformanceAnalysisPage() {
  const [materialGroups, setMaterialGroups] = useState<string[]>([]);
  const [companies, setCompanies] = useState<string[]>([]);
  const [regions, setRegions] = useState<string[]>([]);
  const [filters, setFilters] = useState({});
  const [conformanceData, setConformanceData] = useState<ConformanceData>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);

        // Load filter options
        const materialGroupsData = await csvDataService.getMaterialGroups();
        const companiesData = await csvDataService.getCompanies();
        const regionsData = await csvDataService.getRegions();

        setMaterialGroups(materialGroupsData);
        setCompanies(companiesData);
        setRegions(regionsData);

        // Load conformance data
        const conformanceInfo = await csvDataService.getConformanceData();
        setConformanceData(conformanceInfo);

        setIsLoading(false);
      } catch (error) {
        console.error("Error loading conformance data:", error);
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Conformance Analysis</h1>
        <p className="text-gray-600">
          Analysis of process conformance, deviations, and undesired activities
          based on real event log data
        </p>
      </div>

      <FilterBar
        onFilterChange={setFilters}
        filters={filters}
        materialGroups={materialGroups}
        companies={companies}
        regions={regions}
      />

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <Loader />
        </div>
      ) : (
        <div className="space-y-6">
          <ConformanceChecking
            totalCases={conformanceData?.totalCases}
            conformantCases={conformanceData?.conformantCases}
            nonConformantCases={conformanceData?.nonConformantCases}
            conformanceRate={conformanceData?.conformanceRate}
            deviations={conformanceData?.deviations}
          />

          <DeviatingFlows deviatingFlows={conformanceData?.deviations} />

          <UndesiredActivities undesiredActivities={undesiredActivities} />
        </div>
      )}
    </DashboardLayout>
  );
}
