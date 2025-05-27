import React, { useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
  Node,
  Edge,
} from "reactflow";
import "reactflow/dist/style.css";
import CustomNode from "@/components/CustomNode";
import NodeToolBar from "./NodeToolBar";
import { CardContent } from "./ui/card";

const nodeTypes = {
  customNode: CustomNode,
};
interface ProcessFlowProps {
  nodes: {
    data: {
      id: string;
      label: string;
      count: number;
      avgTime?: string;
      percentage?: number;
      isConformant?: boolean;
    };

    position: { x: number; y: number };
  }[];
  edges: {
    source: string;
    target: string;
    label?: string;
    value?: number;
  }[];
}

const ProcessFlow: React.FC<ProcessFlowProps> = ({ nodes, edges }) => {
  console.log("ProcessFlow nodes:", nodes);
  console.log("ProcessFlow edges:", edges);

  const formattedNodes: Node[] = nodes.map((node) => ({
    id: node.data.id,
    data: {
      label: (
        <div className="p-2 rounded-md bg-white shadow-md text-xs border border-gray-300 w-48">
          <div className="font-semibold">{node.data.label}</div>
          {node.data.avgTime && <div>Avg: {node.data.avgTime}</div>}
          {node.data.percentage !== undefined && (
            <div>{node.data.percentage}%</div>
          )}
        </div>
      ),
    },
    position: node.position,
    style: {
      border: node.data.isConformant ? "2px solid green" : "2px solid red",
    },
  }));

  const formattedEdges: Edge[] = edges.map((edge) => ({
    id: `${edge.source}-${edge.target}`,
    source: edge.source,
    target: edge.target,
    label: edge.label,
    animated: true,
    style: { stroke: "#f97316" },
    labelStyle: { fill: "#333", fontSize: 10 },
  }));

  const [nodesState] = useNodesState(formattedNodes);
  const [edgesState] = useEdgesState(formattedEdges);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const handleNodeClick = (_: React.MouseEvent, node: Node) => {
    setSelectedNode(node);
  };
  const handlePaneClick = () => {
    setSelectedNode(null);
  };
  return (
    <CardContent className="p-0">
      <div style={{ width: "100%", height: "300px", position: "relative" }}>
        <ReactFlow
          nodes={nodesState}
          edges={edgesState}
          fitView
          nodeTypes={nodeTypes}
          onNodeClick={handleNodeClick}
          onPaneClick={handlePaneClick}
        >
          <MiniMap />
          <Controls />
          <Background />
        </ReactFlow>
        {selectedNode && selectedNode.data && (
          <NodeToolBar
            data={selectedNode.data}
            onClose={() => setSelectedNode(null)}
          />
        )}
      </div>
    </CardContent>
  );
};

export default ProcessFlow;
