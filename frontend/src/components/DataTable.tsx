import { DataTableProps } from "@/lib/types";
import React from "react";

const DataTable: React.FC<DataTableProps> = ({ data, columns, onRowClick }) => {
  return (
    <div className="overflow-x-auto">
      <table className="data-table">
        <thead>
          <tr>
            {columns?.map((column, index) => (
              <th key={index}>{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              onClick={() => onRowClick && onRowClick(row)}
              className={onRowClick ? "cursor-pointer" : ""}
            >
              {columns?.map((column, colIndex) => (
                <td key={colIndex}>
                  {column.cell
                    ? column.cell(row[column.accessor], row)
                    : row[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
