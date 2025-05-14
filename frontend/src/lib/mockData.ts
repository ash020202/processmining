// Mock data for conformance demonstration
export const kpiData = [
  { title: "Total Cases", value: "5,000" },
  {
    title: "Conformant Cases",
    value: "3,452",
    trend: 5,
    trendLabel: "vs. last month",
  },
  {
    title: "Conformance Rate",
    value: "72%",
    trend: 3,
    trendLabel: "vs. last month",
  },
  {
    title: "Avg. Deviation Cost",
    value: "$245",
    trend: -8,
    trendLabel: "vs. last month",
  },
];

export const materialGroups = [
  "Power Tools",
  "Safety equipment",
  "Building Materials",
  "Fasteners",
  "Agriculture",
  "Fertilizers",
];
export const companies = [
  "Drystone Belgium NV",
  "Drystone Australia Ltd",
  "Drystone Mexico Inc",
  "Drystone UK Ltd",
];
export const regions = ["Europe", "Asia-Pacific", "Americas"];

// Mock conformance data by material group
export const conformanceByMaterialGroup = [
  { group: "Power Tools", conformant: 17760, total: 41302, percentage: 43 },
  {
    group: "Safety equipment",
    conformant: 13182,
    total: 29293,
    percentage: 45,
  },
  {
    group: "Building Materials",
    conformant: 9349,
    total: 30158,
    percentage: 31,
  },
  { group: "Fasteners", conformant: 8935, total: 15675, percentage: 57 },
  { group: "Agriculture", conformant: 8594, total: 25276, percentage: 34 },
];

// Mock deviating flows data
export const deviatingFlowsData = [
  {
    flow: "Create Invoice occurred directly after Create Invoice",
    percentage: "21.6%",
    duration: "-1.0 days",
    events: "0.7 events",
  },
  {
    flow: "Create Invoice occurred directly after Create Shipment",
    percentage: "7.2%",
    duration: "2.7 days",
    events: "-0.2 events",
  },
  {
    flow: "Clear Invoice is the starting event",
    percentage: "5.4%",
    duration: "189.5 days",
    events: "0.5 events",
  },
  {
    flow: "Create Shipment occurred directly after Create Sales Order",
    percentage: "1.0%",
    duration: "-4.7 days",
    events: "0.0 events",
  },
  {
    flow: "Create Delivery occurred directly after Create Invoice",
    percentage: "0.9%",
    duration: "-6.8 days",
    events: "4.0 events",
  },
  {
    flow: "Create Invoice occurred directly after Create Sales Order",
    percentage: "0.7%",
    duration: "-32.5 days",
    events: "1.3 events",
  },
  {
    flow: "Clear Invoice occurred directly after Clear Invoice",
    percentage: "0.6%",
    duration: "-14.5 days",
    events: "0.0 events",
  },
];

export const deviatingFlowsColumns = [
  { header: "Deviating Flow", accessor: "flow" },
  { header: "%", accessor: "percentage" },
  { header: "Duration", accessor: "duration" },
  { header: "Events", accessor: "events" },
];

// Mock undesired activities data
export const undesiredActivitiesData = [
  {
    activity: "Deactivate Billing Block",
    percentage: "8.3%",
    duration: "6.5 days",
    events: "1.9 events",
  },
  {
    activity: "Change Manual Price in Sales Order",
    percentage: "4.6%",
    duration: "-3.4 days",
    events: "2.7 events",
  },
  {
    activity: "Deactivate Delivery Block",
    percentage: "4.5%",
    duration: "18.1 days",
    events: "1.8 events",
  },
  {
    activity: "Change Material in Sales Order",
    percentage: "3.0%",
    duration: "9.3 days",
    events: "1.6 events",
  },
  {
    activity: "Reject Sales Order",
    percentage: "1.2%",
    duration: "17.7 days",
    events: "3.2 events",
  },
  {
    activity: "Cancel Sales Order Rejection",
    percentage: "1.0%",
    duration: "29.3 days",
    events: "3.8 events",
  },
];

export const undesiredActivitiesColumns = [
  { header: "Undesired Activity", accessor: "activity" },
  { header: "%", accessor: "percentage" },
  { header: "Duration", accessor: "duration" },
  { header: "Events", accessor: "events" },
];

// Mock process variants data
export const processVariantsData = [
  {
    variant:
      "Receive Purchase Order → Create Sales Order → Create Delivery → Create Shipment → Issue Goods → Create Invoice → Clear Invoice",
    cases: 3176,
    percentage: "63.5%",
    duration: "34 days",
  },
  {
    variant:
      "Receive Purchase Order → Create Sales Order → Create Delivery → Create Shipment → Issue Goods → Create Invoice → Clear Invoice",
    cases: 2533,
    percentage: "50.7%",
    duration: "91 days",
  },
  {
    variant:
      "Receive Purchase Order → Create Sales Order → Change Net Price in Sales Order → Create Delivery → Create Shipment → Issue Goods → Create Invoice → Clear Invoice",
    cases: 1450,
    percentage: "29.0%",
    duration: "81 days",
  },
  {
    variant:
      "Clear Invoice → Receive Purchase Order → Create Sales Order → Create Delivery → Create Shipment → Issue Goods → Create Invoice",
    cases: 1064,
    percentage: "21.3%",
    duration: "268 days",
  },
  {
    variant:
      "Clear Invoice → Receive Purchase Order → Create Sales Order → Create Delivery → Create Shipment → Issue Goods → Create Invoice",
    cases: 694,
    percentage: "13.9%",
    duration: "300 days",
  },
];

export const processVariantsColumns = [
  { header: "Process Variant", accessor: "variant" },
  { header: "Cases", accessor: "cases" },
  { header: "%", accessor: "percentage" },
  { header: "Avg. Duration", accessor: "duration" },
];

export const undesiredActivities = [
  {
    activity: "Create Invoice after Create Invoice",
    frequency: "8.3%",
    caseCount: 415,
    avgDuration: "6.5 days",
    impact: "High impact on process quality (23% higher rejection rate)",
  },
  {
    activity: "Deactivate Delivery Block",
    frequency: "4.5%",
    caseCount: 225,
    avgDuration: "18.1 days",
    impact: "Medium impact on process duration (+4.3 days)",
  },
  {
    activity: "Change Manual Price in Sales Order",
    frequency: "4.6%",
    caseCount: 230,
    avgDuration: "3.4 days",
    impact: "Medium impact on process cost (+$32 per case)",
  },
  {
    activity: "Deactivate Billing Block",
    frequency: "8.3%",
    caseCount: 415,
    avgDuration: "6.5 days",
    impact: "Medium impact on process duration (+2.8 days)",
  },
  {
    activity: "Change Material in Sales Order",
    frequency: "3.0%",
    caseCount: 150,
    avgDuration: "9.3 days",
    impact: "Medium impact on process duration (+2.3 days)",
  },
];

//enhanced-flow mock-data

// Process flow data
export const processNodes = [
  { id: "start", label: "Start", count: 91746, type: "start" },
  {
    id: "receive_po",
    label: "Receive Purchase Order",
    count: 91746,
    type: "activity",
    department: "Sales",
  },
  {
    id: "create_so",
    label: "Create Sales Order",
    count: 91746,
    type: "activity",
    department: "Order Management",
  },
  {
    id: "gateway1",
    label: "X",
    count: 91746,
    type: "gateway",
    department: "Order Management",
  },
  {
    id: "change_price",
    label: "Change Net Price in Sales Order",
    count: 15585,
    type: "activity",
    department: "Order Management",
  },
  {
    id: "gateway2",
    label: "X",
    count: 91746,
    type: "gateway",
    department: "Delivery",
  },
  {
    id: "create_delivery",
    label: "Create Delivery",
    count: 86704,
    type: "activity",
    department: "Delivery",
  },
  {
    id: "create_shipment",
    label: "Create Shipment",
    count: 85513,
    type: "activity",
    department: "Delivery",
  },
  {
    id: "issue_goods",
    label: "Issue Goods",
    count: 83137,
    type: "activity",
    department: "Delivery",
  },
  {
    id: "create_invoice",
    label: "Create Invoice",
    count: 81858,
    type: "activity",
    department: "Finance",
  },
  {
    id: "clear_invoice",
    label: "Clear Invoice",
    count: 68106,
    type: "activity",
    department: "Finance",
  },
  { id: "end", label: "End", count: 68106, type: "end" },
];

export const processEdges = [
  { source: "start", target: "receive_po", count: 91746 },
  { source: "receive_po", target: "create_so", count: 91746 },
  { source: "create_so", target: "gateway1", count: 91746 },
  { source: "gateway1", target: "change_price", count: 15585 },
  { source: "gateway1", target: "gateway2", count: 76161 },
  { source: "change_price", target: "gateway2", count: 15585 },
  { source: "gateway2", target: "create_delivery", count: 86704 },
  { source: "create_delivery", target: "create_shipment", count: 85513 },
  { source: "create_shipment", target: "issue_goods", count: 83137 },
  { source: "issue_goods", target: "create_invoice", count: 81858 },
  { source: "create_invoice", target: "clear_invoice", count: 68106 },
  { source: "clear_invoice", target: "end", count: 68106 },
];

// Variant statistics
export const variantStats = [
  {
    name: "Happy Path",
    description:
      "Receive PO → Create SO → Create Delivery → Create Shipment → Issue Goods → Create Invoice → Clear Invoice",
    count: 52341,
    percentage: 57.1,
  },
  {
    name: "Price Change Path",
    description:
      "Receive PO → Create SO → Change Net Price → Create Delivery → Create Shipment → Issue Goods → Create Invoice → Clear Invoice",
    count: 15585,
    percentage: 17.0,
  },
  {
    name: "Incomplete Cases",
    description: "Cases that started but did not reach Clear Invoice",
    count: 23640,
    percentage: 25.9,
  },
];

//performance page mock data

// Mock activity duration analysis data (to be replaced with real data)
export const activityDurationData = [
  {
    name: "Receive Purchase Order",
    avgDuration: "0.5 days",
    medianDuration: "0.4 days",
    minDuration: "0.1 days",
    maxDuration: "3.2 days",
    caseCount: 5000,
    trend: -5,
  },
  {
    name: "Create Sales Order",
    avgDuration: "1.2 days",
    medianDuration: "0.9 days",
    minDuration: "0.2 days",
    maxDuration: "7.5 days",
    caseCount: 5000,
    trend: 2,
  },
  {
    name: "Change Net Price in Sales Order",
    avgDuration: "0.7 days",
    medianDuration: "0.5 days",
    minDuration: "0.1 days",
    maxDuration: "4.3 days",
    caseCount: 850,
    trend: -3,
  },
  {
    name: "Create Delivery",
    avgDuration: "2.3 days",
    medianDuration: "1.8 days",
    minDuration: "0.3 days",
    maxDuration: "12.6 days",
    caseCount: 4800,
    trend: 8,
  },
  {
    name: "Create Shipment",
    avgDuration: "1.8 days",
    medianDuration: "1.5 days",
    minDuration: "0.2 days",
    maxDuration: "9.4 days",
    caseCount: 4750,
    trend: 4,
  },
  {
    name: "Issue Goods",
    avgDuration: "1.1 days",
    medianDuration: "0.8 days",
    minDuration: "0.1 days",
    maxDuration: "6.7 days",
    caseCount: 4700,
    trend: -2,
  },
  {
    name: "Create Invoice",
    avgDuration: "1.4 days",
    medianDuration: "1.1 days",
    minDuration: "0.2 days",
    maxDuration: "8.3 days",
    caseCount: 4650,
    trend: 1,
  },
  {
    name: "Clear Invoice",
    avgDuration: "5.2 days",
    medianDuration: "4.5 days",
    minDuration: "0.5 days",
    maxDuration: "32.8 days",
    caseCount: 4000,
    trend: 7,
  },
];

// Mock case variant analysis data (to be replaced with real data)
export const caseVariantData = [
  {
    id: "variant-1",
    path: "Receive Purchase Order → Create Sales Order → Create Delivery → Create Shipment → Issue Goods → Create Invoice → Clear Invoice",
    caseCount: 2855,
    percentage: 57.1,
    avgDuration: "10.2 days",
    conformant: true,
  },
  {
    id: "variant-2",
    path: "Receive Purchase Order → Create Sales Order → Change Net Price → Create Delivery → Create Shipment → Issue Goods → Create Invoice → Clear Invoice",
    caseCount: 850,
    percentage: 17.0,
    avgDuration: "12.8 days",
    conformant: true,
  },
  {
    id: "variant-3",
    path: "Receive Purchase Order → Create Sales Order → Create Invoice → Create Delivery → Create Shipment → Issue Goods → Clear Invoice",
    caseCount: 350,
    percentage: 7.0,
    avgDuration: "14.5 days",
    conformant: false,
  },
  {
    id: "variant-4",
    path: "Receive Purchase Order → Create Sales Order → Create Delivery → Create Shipment → Issue Goods → Create Invoice → Create Invoice → Clear Invoice",
    caseCount: 320,
    percentage: 6.4,
    avgDuration: "13.7 days",
    conformant: false,
  },
  {
    id: "variant-5",
    path: "Receive Purchase Order → Create Sales Order → Create Delivery → Create Shipment → Issue Goods",
    caseCount: 230,
    percentage: 4.6,
    avgDuration: "7.3 days",
    conformant: false,
  },
];

// Mock lead time distribution data (to be replaced with real data)
export const leadTimeDistributionData = [
  {
    category: "Overall Lead Time Distribution",
    distribution: [
      { range: "0-5 days", count: 685, percentage: 13.7 },
      { range: "5-10 days", count: 1580, percentage: 31.6 },
      { range: "10-15 days", count: 1325, percentage: 26.5 },
      { range: "15-20 days", count: 790, percentage: 15.8 },
      { range: "20-30 days", count: 430, percentage: 8.6 },
      { range: "30+ days", count: 190, percentage: 3.8 },
    ],
  },
  {
    category: "Lead Time by Region",
    distribution: [
      { range: "Europe", count: 2320, percentage: 46.4 },
      { range: "Asia-Pacific", count: 1705, percentage: 34.1 },
      { range: "Americas", count: 975, percentage: 19.5 },
    ],
  },
];

//process-modeling mock-data

// Define the BPMN process model data
export const processModel = {
  lanes: [
    {
      id: "lane-sales",
      name: "Sales",
      activities: [
        {
          id: "start-event",
          name: "Start",
          type: "start",
          position: { x: 50, y: 60 },
        },
        {
          id: "receive-purchase-order",
          name: "Receive Purchase Order",
          type: "task",
          position: { x: 100, y: 40 },
          width: 150,
          height: 60,
        },
      ],
    },
    {
      id: "lane-order-management",
      name: "Order Management",
      activities: [
        {
          id: "create-sales-order",
          name: "Create Sales Order",
          type: "task",
          position: { x: 100, y: 40 },
          width: 150,
          height: 60,
        },
        {
          id: "gateway-1",
          name: "Gateway",
          type: "gateway",
          position: { x: 300, y: 55 },
        },
        {
          id: "change-net-price",
          name: "Change Net Price in Sales Order",
          type: "task",
          position: { x: 380, y: 40 },
          width: 150,
          height: 60,
        },
      ],
    },
    {
      id: "lane-delivery",
      name: "Delivery",
      activities: [
        {
          id: "gateway-2",
          name: "Gateway",
          type: "gateway",
          position: { x: 300, y: 55 },
        },
        {
          id: "create-delivery",
          name: "Create Delivery",
          type: "task",
          position: { x: 380, y: 40 },
          width: 150,
          height: 60,
        },
        {
          id: "create-shipment",
          name: "Create Shipment",
          type: "task",
          position: { x: 580, y: 40 },
          width: 150,
          height: 60,
        },
        {
          id: "issue-goods",
          name: "Issue Goods",
          type: "task",
          position: { x: 780, y: 40 },
          width: 150,
          height: 60,
        },
      ],
    },
    {
      id: "lane-finance",
      name: "Finance",
      activities: [
        {
          id: "create-invoice",
          name: "Create Invoice",
          type: "task",
          position: { x: 380, y: 40 },
          width: 150,
          height: 60,
        },
        {
          id: "clear-invoice",
          name: "Clear Invoice",
          type: "task",
          position: { x: 580, y: 40 },
          width: 150,
          height: 60,
        },
        {
          id: "end-event",
          name: "End",
          type: "end",
          position: { x: 780, y: 60 },
        },
      ],
    },
  ],
  connections: [
    { source: "start-event", target: "receive-purchase-order" },
    { source: "receive-purchase-order", target: "create-sales-order" },
    { source: "create-sales-order", target: "gateway-1" },
    { source: "gateway-1", target: "change-net-price" },
    { source: "gateway-1", target: "gateway-2" },
    { source: "change-net-price", target: "gateway-2" },
    { source: "gateway-2", target: "create-delivery" },
    { source: "create-delivery", target: "create-shipment" },
    { source: "create-shipment", target: "issue-goods" },
    { source: "issue-goods", target: "create-invoice" },
    { source: "create-invoice", target: "clear-invoice" },
    { source: "clear-invoice", target: "end-event" },
  ],
};
