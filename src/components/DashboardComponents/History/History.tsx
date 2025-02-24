"use client";

import SectionDashboard from "@/components/ui/SectionDashboard/SectionDashboard";
import { histories } from "@/utils/history";
import { usePathname } from "next/navigation";
import React from "react";

export const History: React.FC = () => {
  const pathname = usePathname();

  if (pathname !== "/dashboard/history") return null;

  return (
    <div className="flex flex-col gap-5 w-full h-[500px] max-h-[500px] mb-10 sm:w-[80%] lg:mb-0">
      <SectionDashboard label="Historial" />
      <div className="overflow-x-scroll flex md:justify-center">
        <table>
          <thead>
            <tr className="text-tcSecondary sticky top-0 bg-pcSecondary">
              <th className="font-normal border-[1px] border-l-0 border-t-0 p-2 text-center min-w-[100px]">
                #
              </th>
              <th className="font-normal border-[1px] border-t-0 p-2 text-center min-w-[200px]">
                Detalle de los productos
              </th>
              <th className="font-normal border-[1px] border-t-0 p-2 text-center min-w-[50px]">
                Bultos
              </th>
              <th className="font-normal border-[1px] border-r-0 border-t-0 p-2 text-center min-w-[150px]">
                Estado
              </th>
            </tr>
          </thead>
          <tbody>
            {histories.map((item, i: number) => (
              <tr key={i}>
                <td className="p-3 text-center text-xs border-[1px] border-l-0 border-r-0 sm:text-sm">
                  {item.id}
                </td>
                <td className="p-3 text-center text-xs border-[1px] sm:text-sm">
                  {item.products.join(" ")}
                </td>
                <td className="p-3 text-center text-xs border-[1px] sm:text-sm">
                  {item.lumps}
                </td>
                <td className="p-3 text-center text-xs border-[1px] border-l-0 border-r-0 text-pcPrincipal font-semibold sm:text-sm">
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;
