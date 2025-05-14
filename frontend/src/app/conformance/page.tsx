"use client";

import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import FilterBar from "../../components/FilterBar";
import KPICard from "../../components/KPICard";
import ProgressBar from "../../components/ProgressBar";
import DataTable from "../../components/DataTable";
import {
  companies,
  conformanceByMaterialGroup,
  deviatingFlowsColumns,
  deviatingFlowsData,
  kpiData,
  materialGroups,
  processVariantsColumns,
  processVariantsData,
  regions,
  undesiredActivitiesColumns,
  undesiredActivitiesData,
} from "@/lib/mockData";

export default function Conformance() {
  const [filters, setFilters] = React.useState({});

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Conformance Checking</h1>
        <p className="text-gray-600">
          Analyze how well your processes conform to the expected model
        </p>
      </div>

      <FilterBar
        onFilterChange={setFilters}
        filters={filters}
        materialGroups={materialGroups}
        companies={companies}
        regions={regions}
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {kpiData.map((kpi, index) => (
          <KPICard
            key={index}
            title={kpi.title}
            value={kpi.value}
            trend={kpi.trend}
            trendLabel={kpi.trendLabel}
          />
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h3 className="text-lg font-medium mb-4">Conformance Success</h3>
        <ProgressBar
          value={28525}
          total={66106}
          label="Overall Conformance"
          successColor="bg-green-500"
          failureColor="bg-red-500"
        />
      </div>

      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h3 className="text-lg font-medium mb-4">
          Conformance by Material Group
        </h3>
        <div className="space-y-4">
          {conformanceByMaterialGroup.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">{item.group}</span>
                <span className="text-sm text-gray-500">
                  {item.conformant} cases
                </span>
              </div>
              <ProgressBar
                value={item.conformant}
                total={item.total}
                showPercentage={false}
                successColor="bg-blue-500"
                failureColor="bg-gray-200"
              />
              <div className="flex justify-between text-xs mt-1">
                <span>{item.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-4">Deviating Flows</h3>
          <DataTable
            data={deviatingFlowsData}
            columns={deviatingFlowsColumns}
          />
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-4">Undesired Activities</h3>
          <DataTable
            data={undesiredActivitiesData}
            columns={undesiredActivitiesColumns}
          />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium mb-4">Process Variants</h3>
        <DataTable
          data={processVariantsData}
          columns={processVariantsColumns}
        />
      </div>
    </DashboardLayout>
  );
}
