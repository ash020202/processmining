"use client";

import React, { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";
import FilterBar from "../../components/FilterBar";
import ProcessFlowVisualizer from "../../components/ProcessFlowVisualizer";
import {
  companies,
  materialGroups,
  processEdges,
  processNodes,
  regions,
  variantStats,
} from "@/lib/mockData";

export default function EnhancedProcessFlow() {
  const [filters, setFilters] = useState({});

  return (
    <DashboardLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">
          Enhanced Process Flow Visualization
        </h1>
        <p className="text-gray-600">
          Interactive visualization of process flows with case counts and
          performance metrics
        </p>
      </div>

      <FilterBar
        onFilterChange={setFilters}
        filters={filters}
        materialGroups={materialGroups}
        companies={companies}
        regions={regions}
      />

      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h3 className="text-lg font-medium mb-4">Order-to-Cash Process Flow</h3>
        <ProcessFlowVisualizer
          nodes={processNodes}
          edges={processEdges}
          width={1000}
          height={600}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-4">Process Variants</h3>
          <div className="space-y-4">
            {variantStats.map((variant, index) => (
              <div key={index} className="border-b pb-4 last:border-b-0">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{variant.name}</span>
                  <span className="text-gray-600">
                    {variant.count.toLocaleString()} cases ({variant.percentage}
                    %)
                  </span>
                </div>
                <p className="text-sm text-gray-600">{variant.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-4">Activity Performance</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4 text-sm font-medium text-gray-500 border-b pb-2">
              <div>Activity</div>
              <div>Average Duration</div>
              <div>Case Count</div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>Receive Purchase Order</div>
              <div>0.5 days</div>
              <div>91,746</div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>Create Sales Order</div>
              <div>1.2 days</div>
              <div>91,746</div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>Change Net Price in Sales Order</div>
              <div>0.7 days</div>
              <div>15,585</div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>Create Delivery</div>
              <div>2.3 days</div>
              <div>86,704</div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>Create Shipment</div>
              <div>1.8 days</div>
              <div>85,513</div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>Issue Goods</div>
              <div>1.1 days</div>
              <div>83,137</div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>Create Invoice</div>
              <div>1.4 days</div>
              <div>81,858</div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>Clear Invoice</div>
              <div>5.2 days</div>
              <div>68,106</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium mb-4">Process Insights</h3>
        <div className="prose max-w-none">
          <p>
            The order-to-cash process visualization reveals several key
            insights:
          </p>

          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              <span className="font-medium">Process Completion Rate:</span>{" "}
              74.2% of cases (68,106 out of 91,746) complete the entire process
              from Receive Purchase Order to Clear Invoice.
            </li>
            <li>
              <span className="font-medium">Price Change Frequency:</span> 17.0%
              of cases (15,585) involve a price change after the sales order is
              created, adding complexity to the process.
            </li>
            <li>
              <span className="font-medium">Process Bottlenecks:</span> The
              longest average activity duration is Clear Invoice (5.2 days),
              followed by Create Delivery (2.3 days), suggesting these are
              potential bottlenecks.
            </li>
            <li>
              <span className="font-medium">Process Leakage:</span> There is a
              gradual reduction in case counts through the process, with the
              most significant drop occurring between Create Invoice and Clear
              Invoice (13,752 cases), indicating potential process issues.
            </li>
          </ul>

          <p className="mt-4">
            <span className="font-medium">Recommendations:</span>
          </p>

          <ul className="list-disc pl-5 space-y-2">
            <li>
              Investigate the reasons for the high number of incomplete cases,
              particularly those that don't reach the Clear Invoice stage.
            </li>
            <li>
              Optimize the Clear Invoice process to reduce the average duration
              and improve overall process efficiency.
            </li>
            <li>
              Review pricing strategies to reduce the frequency of price changes
              after sales order creation.
            </li>
            <li>
              Implement automated notifications for cases that exceed expected
              durations at critical stages.
            </li>
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
}
