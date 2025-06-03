import React from "react";
import { ITableBaseProps } from "./types";

const getColumnWidth = (header: string) => {
  switch (header) {
    case "Orden":
    case "CP":
      return "w-[90px] px-4 py-2";
    case "Cantidad":
      return "w-[30%] sm:w-[20%] lg:w-[15%] xl:w-[10%] p-2";
    case "Estado":
      return "w-[130px]";
    default:
      return "w-[110px] px-4 py-2";
  }
};

export const TableBase: React.FC<ITableBaseProps> = ({ headers, rows, rowHight = "h-[42px]" }) => {
  return (
    <div className="mt-4 border border-gray-200 rounded-md overflow-hidden">
      <div className={`overflow-x-auto max-h-[400px] sm:max-h-[700px]`}>
        <table className="min-w-[900px] table-fixed text-sm text-left text-sc w-full">
          <thead className="bg-gray-100 font-semibold sticky top-0 z-10">
            <tr>
              {headers.map((header, i) => (
                <th key={i} className={`border-b border-gray-300 ${getColumnWidth(header)}`}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIdx) => (
              <tr key={rowIdx} className="hover:bg-gray-50">
                {row.map((cell, cellIdx) => {
                  const header = headers[cellIdx];
                  return (
                    <td
                      key={cellIdx}
                      className={`border-b ${rowHight} border-gray-200 ${getColumnWidth(header)}`}
                    >
                      {cell}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
