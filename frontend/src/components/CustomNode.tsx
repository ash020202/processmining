import React from "react";
import { NodeProps } from "reactflow";

const CustomNode: React.FC<NodeProps> = ({ data }) => {
  return (
    <div
      style={{
        border: "2px solid red",
        padding: 10,
        borderRadius: 8,
        background: "#fff",
      }}
    >
      <strong>{data.label}</strong>
      <div>Count: {data.count}</div>
      <div>Avg Time: {data.avgTime}</div>
    </div>
  );
};

export default CustomNode;
