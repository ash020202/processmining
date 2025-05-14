import { Deviation } from "@/lib/types";
import React from "react";

interface DeviatingFlowsProps {
  deviatingFlows: Deviation[] | undefined;
}

const DeviatingFlows: React.FC<DeviatingFlowsProps> = ({ deviatingFlows }) => {
  const getFirstWord = (impact: string): string => {
    const splitWord = impact.split(" ");
    console.log(splitWord[0]);
    return splitWord[0];
  };
  const getImpactColor = (impact?: "High" | "Medium" | "Low") => {
    switch (impact) {
      case "High":
        return "bg-red-100 text-red-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      case "Low":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="p-6">
        <h3 className="text-lg font-medium mb-4">Deviating Flows</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Deviating Flow
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  %
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Duration
                </th>
                {/* <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Events
                </th> */}
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Impact
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {deviatingFlows?.map((flow, index) => {
                const impactFirstWord = flow.impact
                  ? getFirstWord(flow.impact)
                  : undefined;

                return (
                  <tr key={index}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {flow.type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {flow.percentage}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {flow.count}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {impactFirstWord && (
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getImpactColor(
                            impactFirstWord as "High" | "Medium" | "Low"
                          )}`}
                        >
                          {impactFirstWord}
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DeviatingFlows;
