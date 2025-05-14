"use client";

import React, { useState, useEffect } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import FilterBar from "../../components/FilterBar";
import PerformanceMetrics from "../../components/PerformanceMetrics";
import BottleneckAnalysis from "../../components/BottleneckAnalysis";
import ActivityDurationAnalysis from "../../components/ActivityDurationAnalysis";
import CaseVariantAnalysis from "../../components/CaseVariantAnalysis";
import LeadTimeDistribution from "../../components/LeadTimeDistribution";
import BarChart from "../../components/BarChart";
import csvDataService from "../../lib/csvDataService";
import {
  activityDurationData,
  caseVariantData,
  leadTimeDistributionData,
} from "@/lib/mockData";
import Loader from "@/components/Loader";

export default function PerformanceAnalysis() {
  const [materialGroups, setMaterialGroups] = useState<string[]>([]);
  const [companies, setCompanies] = useState<string[]>([]);
  const [regions, setRegions] = useState<string[]>([]);
  const [filters, setFilters] = useState({});
  const [performanceMetricsData, setPerformanceMetricsData] = useState<any[]>(
    []
  );
  const [bottlenecksData, setBottlenecksData] = useState<any[]>([]);
  const [leadTimeByCompanyData, setLeadTimeByCompanyData] = useState<any[]>([]);
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

        // Load performance metrics
        const metrics = await csvDataService.getPerformanceMetrics();

        // Format performance metrics for the component
        const formattedMetrics = [
          {
            category: "Process Efficiency",
            metrics: [
              {
                name: "Average Lead Time",
                value: `${metrics.avgLeadTime} days`,
                trend: -2.5,
                status: "positive",
              },
              {
                name: "Median Lead Time",
                value: `${metrics.medianLeadTime} days`,
                trend: -1.8,
                status: "positive",
              },
              {
                name: "Straight-Through Processing",
                value: "57%",
                trend: 3,
                status: "positive",
              },
              {
                name: "Rework Rate",
                value: "8.3%",
                trend: -1.5,
                status: "positive",
              },
            ],
          },
          {
            category: "Process Volume",
            metrics: [
              {
                name: "Total Cases",
                value: metrics.caseCount.toLocaleString(),
              },
              {
                name: "Completed Cases",
                value: metrics.completedCases.toLocaleString(),
                trend: 2.3,
                status: "positive",
              },
              {
                name: "Active Cases",
                value: metrics.activeCases.toLocaleString(),
              },
              {
                name: "Cases per Day",
                value: "324",
                trend: 5.7,
                status: "positive",
              },
            ],
          },
          {
            category: "Process Quality",
            metrics: [
              {
                name: "On-Time Delivery Rate",
                value: `${metrics.onTimeDeliveryRate}%`,
                trend: 3.1,
                status: "positive",
              },
              {
                name: "First-Time-Right Rate",
                value: "81%",
                trend: 1.2,
                status: "positive",
              },
              {
                name: "Exception Rate",
                value: "12.4%",
                trend: -0.8,
                status: "positive",
              },
              {
                name: "SLA Compliance",
                value: "85.3%",
                trend: 2.5,
                status: "positive",
              },
            ],
          },
        ];

        setPerformanceMetricsData(formattedMetrics);

        // Load bottlenecks data
        const bottlenecks = await csvDataService.getBottlenecks();
        setBottlenecksData(bottlenecks);

        // Load lead time by company data
        const leadTimeByCompany = await csvDataService.getLeadTimeByCompany();
        setLeadTimeByCompanyData(leadTimeByCompany);

        setIsLoading(false);
      } catch (error) {
        console.error("Error loading performance analysis data:", error);
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Performance Analysis</h1>
        <p className="text-gray-600">
          Comprehensive analysis of process performance metrics, bottlenecks,
          and lead times
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
          <PerformanceMetrics metrics={performanceMetricsData} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <BarChart
              data={leadTimeByCompanyData}
              title="Lead Times by Company (days)"
              xAxisLabel="Company"
              yAxisLabel="Days"
              height={400}
            />

            <LeadTimeDistribution leadTimeData={leadTimeDistributionData} />
          </div>

          <BottleneckAnalysis bottlenecks={bottlenecksData} />

          <ActivityDurationAnalysis activities={activityDurationData} />

          <CaseVariantAnalysis variants={caseVariantData} />
        </div>
      )}
    </DashboardLayout>
  );
}
