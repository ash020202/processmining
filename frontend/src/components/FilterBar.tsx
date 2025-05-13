import React from "react";

interface FilterBarProps {
  onFilterChange: (filters: any) => void;
  filters: {
    dateRange?: [Date, Date];
    materialGroup?: string;
    company?: string;
    region?: string;
  };
  materialGroups: string[];
  companies: string[];
  regions: string[];
}

const FilterBar: React.FC<FilterBarProps> = ({
  onFilterChange,
  filters,
  materialGroups,
  companies,
  regions,
}) => {
  const handleFilterChange = (key: string, value: any) => {
    onFilterChange({
      ...filters,
      [key]: value,
    });
  };

  return (
    <div className="md:self-center bg-white md:w-fit p-4 rounded shadow mb-6">
      {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-4"> */}
      <div className="flex md:justify-evenly flex-col items-start md:items-end md:flex-row gap-4">
        <div className="md:w-fit w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Material Group
          </label>
          <select
            className="w-full border border-gray-300 rounded-md p-2 text-sm"
            value={filters.materialGroup || ""}
            onChange={(e) =>
              handleFilterChange("materialGroup", e.target.value)
            }
            style={{ borderRadius: "4px" }}
          >
            <option value="">All Material Groups</option>
            {materialGroups.map((group) => (
              <option key={group} value={group}>
                {group}
              </option>
            ))}
          </select>
        </div>

        <div className="md:w-fit w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Company
          </label>
          <select
            className="w-full border border-gray-300 rounded-md p-2 text-sm"
            value={filters.company || ""}
            onChange={(e) => handleFilterChange("company", e.target.value)}
            style={{ borderRadius: "4px" }}
          >
            <option value="">All Companies</option>
            {companies.map((company) => (
              <option key={company} value={company}>
                {company}
              </option>
            ))}
          </select>
        </div>

        <div className="md:w-fit w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Region
          </label>
          <select
            className="w-full border border-gray-300 rounded-md p-2 text-sm"
            value={filters.region || ""}
            onChange={(e) => handleFilterChange("region", e.target.value)}
            style={{ borderRadius: "4px" }}
          >
            <option value="">All Regions</option>
            {regions.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-end">
          <button
            className="bg-orange-500 text-black px-4 py-2 rounded-lg text-sm hover:bg-orange-500 "
            onClick={() => onFilterChange({})}
            style={{ borderRadius: "4px" }}
          >
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
