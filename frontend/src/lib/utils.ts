import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import Papa from "papaparse";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Types for input data
interface RawNode {
  id: string;
  label: string;
  count: number;
  type?: string;
}

interface RawEdge {
  source: string;
  target: string;
  count: number;
}

// Types for React Flow nodes and edges
import { Node, Edge, MarkerType } from "reactflow";
interface CustomNodeData {
  label: string;
  count: number;
  avgTime: string;
  percentage: number;
  isConformant: boolean;
}

export function transformFlowData(
  rawNodes: RawNode[],
  rawEdges: RawEdge[]
): { nodes: Node<CustomNodeData>[]; edges: Edge[] } {
  const nodes: Node<CustomNodeData>[] = [];
  const edges: Edge[] = [];

  const idToNode: Record<string, RawNode> = {};
  rawNodes.forEach((node) => {
    idToNode[node.id] = node;
  });

  rawNodes.forEach((node, index) => {
    console.log(
      `Processing node: ${node.id}, label: ${node.label}, count: ${node.count}`
    );

    nodes.push({
      id: node.id,
      type: "customNode", // or "default" if you don't want a custom component
      position: { x: 300, y: index * 120 },
      data: {
        label: node?.label,
        count: node.count,
        avgTime: "–", // Placeholder
        percentage: 100,
        isConformant: true,
      },
      style: {
        backgroundColor: "#E0F7FA",
        padding: 10,
        borderRadius: 8,
      },
    });
  });

  rawEdges.forEach((edge) => {
    const sourceNode = idToNode[edge.source];
    const sourceCount = sourceNode?.count || 1;

    const percentage = (edge.count / sourceCount) * 100;

    edges.push({
      id: `${edge.source}->${edge.target}`,
      source: edge.source,
      target: edge.target,
      label: `${percentage.toFixed(1)}%`,
      animated: true,
      style: { stroke: "#1976D2" },
      labelBgStyle: { fill: "#fff", color: "#1976D2", fontWeight: 500 },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        width: 20,
        height: 20,
        color: "#1976D2",
      },
    });
  });

  return { nodes, edges };
}

interface CsvRow {
  case: string;
  activity: string;
  timestamp: string;
  // Add other optional columns here if needed
  [key: string]: string; // to allow extra columns, optional
}

export const parseCSV = (file: File): Promise<CsvRow[]> => {
  return new Promise((resolve, reject) => {
    Papa.parse<CsvRow>(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        resolve(results.data);
      },
      error: (err: string) => {
        reject(err);
      },
    });
  });
};
