import { KPICardProps } from "@/lib/types";
import React from "react";

const KPICard: React.FC<KPICardProps> = ({
  title,
  value,
  trend,
  trendLabel,
  icon,
}) => {
  const getTrendClass = () => {
    if (!trend) return "neutral";
    return trend > 0 ? "positive" : "negative";
  };

  const getTrendIcon = () => {
    if (!trend) return null;
    return trend > 0 ? "↑" : "↓";
  };

  return (
    <div className={`kpi-card border-t-4 border-orange-500`}>
      <div className="flex justify-between items-center w-full bg-gray">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        {icon && (
          <div className="text-black p-1 rounded-full bg-gray-200 ">{icon}</div>
        )}
      </div>
      <div className="kpi-value">{value}</div>
      {trend && (
        <div className={`text-sm ${getTrendClass()}`}>
          {getTrendIcon()} {Math.abs(trend)}% {trendLabel}
        </div>
      )}
    </div>
  );
};

export default KPICard;
