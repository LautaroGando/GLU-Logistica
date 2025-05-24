"use client";
import React from "react";
import { ITableProps } from "./types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered, faTrash } from "@fortawesome/free-solid-svg-icons";
import { ModalAdd } from "../ModalAdd/ModalAdd";
import { useAdminStore } from "@/store/adminStore/useAdminStore";

export const Table: React.FC<ITableProps> = ({
  tableHeadData,
  tableBodyData,
}: ITableProps) => {
  const { modal } = useAdminStore();

  return (
    <div>
      <table className="w-full">
        <thead>
          <tr className="h-[40px] border-b border-pcPrincipal">
            {tableHeadData.map((item, i) => (
              <th key={i} className="min-w-[200px]">
                {item}
              </th>
            ))}
          </tr>
        </thead>
        {Array.from({ length: 10 }).map((_, i) => (
          <tbody key={i}>
            {tableBodyData.map((row, i: number) => (
              <tr key={i} className="h-[50px] border-b">
                {Object.entries(row).map(([key, value], j) => (
                  <td key={j} className="min-w-[200px] text-center px-2">
                    {key === "quantity" && typeof value === "number" ? (
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => {}}
                          className="px-2 py-1 bg-gray-200 transition-all duration-300 hover:bg-pcPrincipal hover:text-pcSecondary rounded"
                        >
                          -
                        </button>
                        <span>{value}</span>
                        <button
                          onClick={() => {}}
                          className="px-2 py-1 bg-gray-200 transition-all duration-300 hover:bg-pcPrincipal hover:text-pcSecondary rounded"
                        >
                          +
                        </button>
                      </div>
                    ) : Array.isArray(value) ? (
                      value.join(", ")
                    ) : (
                      value
                    )}
                  </td>
                ))}
                <td className="min-w-[200px] text-center text-pcSecondary">
                  <div className="flex justify-center items-center w-full">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <div className="relative group">
                          <button className="w-8 h-8 flex items-center justify-center rounded bg-pcPrincipal hover:bg-pcPrincipal/80 transition-colors">
                            <FontAwesomeIcon
                              className="max-w-5 text-[20px]"
                              icon={faBarsStaggered}
                              width={20}
                              height={20}
                            />
                          </button>
                        </div>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align="end"
                        className="w-48 rounded-md shadow-lg border border-gray-200 bg-white"
                      >
                        <DropdownMenuItem className="text-inherit flex items-center gap-3 px-4 py-3 min-h-[48px] text-base sm:text-sm cursor-pointer text-admin-editColor data-[highlighted]:bg-admin-editColor/10 data-[highlighted]:text-admin-editColor rounded-md transition-colors duration-200">
                          <FontAwesomeIcon icon={faTrash} />
                          Editar
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-inherit flex items-center gap-3 px-4 py-3 min-h-[48px] text-base sm:text-sm cursor-pointer text-admin-deleteColor data-[highlighted]:bg-admin-deleteColor/10 data-[highlighted]:text-admin-deleteColor rounded-md transition-colors duration-200">
                          <FontAwesomeIcon icon={faTrash} />
                          Eliminar
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        ))}
      </table>
      {modal && <ModalAdd />}
    </div>
  );
};
