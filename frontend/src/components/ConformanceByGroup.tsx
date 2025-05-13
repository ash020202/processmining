// import React from "react";

// export interface ConformanceByGroupProps {
//   title: string;
//   data: {
//     group: string;
//     total: number;
//     conformant: number;
//     rate: number;
//     impact: string;
//   }[];
// }

// const ConformanceByGroup: React.FC<ConformanceByGroupProps> = ({
//   title,
//   data,
// }) => {
//   return (
//     <div className="bg-white rounded-lg shadow overflow-hidden">
//       <div className="p-6">
//         <h3 className="text-lg font-medium mb-4">{title}</h3>
//         <div className="space-y-4">
//           {data.map((group, index) => (
//             <div key={index}>
//               <div className="flex justify-between mb-1">
//                 <span className="text-sm font-medium">{group.name}</span>
//                 <span className="text-sm text-gray-500">
//                   {group.conformant.toLocaleString()} cases
//                 </span>
//               </div>
//               <div className="w-full bg-gray-200 rounded-full h-2.5">
//                 <div
//                   className="bg-blue-500 h-2.5 rounded-full"
//                   style={{ width: `${group.percentage}%` }}
//                 ></div>
//               </div>
//               <div className="flex justify-between text-xs mt-1">
//                 <span>{group.percentage}%</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ConformanceByGroup;

import React from "react";

export interface ConformanceByGroupProps {
  title: string;
  data: {
    group: string;
    total: number;
    conformant: number;
    rate: number;
    impact: string;
  }[];
}

const ConformanceByGroup: React.FC<ConformanceByGroupProps> = ({
  title,
  data,
}) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="p-6">
        <h3 className="text-lg font-medium mb-4">{title}</h3>
        <div className="space-y-4">
          {data.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">{item.group}</span>
                <span className="text-sm text-gray-500">
                  {item.conformant.toLocaleString()} conformant /{" "}
                  {item.total.toLocaleString()} total
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className={`h-2.5 rounded-full ${
                    item.impact === "positive"
                      ? "bg-green-500"
                      : item.impact === "neutral"
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  }`}
                  style={{ width: `${item.rate}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-xs mt-1">
                <span>{item.rate}%</span>
                <span className="capitalize text-gray-500">
                  {item.impact} impact
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConformanceByGroup;
