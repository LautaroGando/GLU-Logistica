"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ITableBaseProps } from "./types";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";
import { EmptyState } from "@/components";

const getColumnWidth = (header: string) => {
  switch (header) {
    case "Orden":
    case "CP":
      return "w-[90px] px-4 py-2";
    case "Cantidad":
      return "w-[30%] sm:w-[20%] lg:w-[15%] xl:w-[10%] p-2";
    case "Estado":
      return "w-[130px]";
    case "Fecha de entrega":
      return "w-[150px]";
    default:
      return "w-[110px] px-4 py-2";
  }
};

const rowVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05 },
  }),
};

export const TableBase: React.FC<ITableBaseProps> = ({
  headers,
  rows,
  rowHight = "h-[42px]",
  isLoading = false,
  emptyTitle = "Sin registros",
  emptyMessage = "No hay datos disponibles por el momento.",
}) => {
  const [isAnimating, setIsAnimating] = useState(true);

  if (isLoading) return <LoadingSpinner mode="principal" hover />;
  if (!rows || rows.length === 0) return <EmptyState title={emptyTitle} message={emptyMessage} />;

  return (
    <motion.div
      className="mt-4 border border-gray-200 rounded-md overflow-hidden"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      onAnimationComplete={() => setIsAnimating(false)}
    >
      <div
        className={`max-h-[400px] sm:max-h-[700px] overflow-x-auto ${
          isAnimating ? "overflow-y-hidden" : "overflow-y-auto"
        }`}
      >
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
              <motion.tr
                key={rowIdx}
                custom={rowIdx}
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                className="hover:bg-gray-50"
              >
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
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};
