export interface DashboardLayoutProps {
  children: React.ReactNode;
}

export interface FilterBarProps {
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

export interface KPICardProps {
  title: string;
  value: string | number;
  trend?: number;
  trendLabel?: string;
  trendDirection?: string;
  trendIsPositive?: boolean;
  icon?: React.ReactNode;
  color?: string;
}

export interface ProgressBarProps {
  value: number;
  total: number;
  successColor?: string;
  failureColor?: string;
  label?: string;
  showPercentage?: boolean;
}

export interface DataTableProps {
  headers?: string[];
  rows?: string[][];
  data?: any[];
  columns?: {
    header: string;
    accessor: string;
    cell?: (value: any, row: any) => React.ReactNode;
  }[];
  onRowClick?: (row: any) => void;
}

//conformance analysis types

export type Deviation = {
  type: string | undefined;
  count: number | undefined;
  percentage: number | undefined;
  impact: string | undefined;
};

export type ConformanceData = {
  totalCases: number | undefined;
  conformantCases: number | undefined;
  nonConformantCases: number | undefined;
  conformanceRate: number | undefined;
  deviations: Deviation[] | undefined;
};

export interface UndesiredActivitiesProps {
  undesiredActivities: {
    activity: string;
    frequency: string | number;
    caseCount: number;
    avgDuration: string;
    impact?: string;
  }[];
}

//process-flow page types

type edgeType = {
  source: string;
  target: string;
  count: number;
};
type nodeType = {
  id: string;
  label: string;
  count: number;
  type?: string;
};
export type processFlowDataType = {
  nodes: nodeType[];
  edges: edgeType[];
};
