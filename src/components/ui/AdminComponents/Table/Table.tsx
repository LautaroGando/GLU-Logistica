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
import {
  faBarsStaggered,
  faDiagramProject,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { ModalAdd } from "../ModalAdd/ModalAdd";
import { useAdminStore } from "@/store/adminStore/useAdminStore";
import {
  decrementProduct,
  incrementProduct,
} from "@/services/Warehouse/Warehouse.service";
import { updateOrderStatus } from "@/services/Shipments/Shipments.service";
import clsx from "clsx";

export const Table: React.FC<ITableProps> = ({
  tableHeadData,
  tableBodyData,
}: ITableProps) => {
  const {
    modal,
    updateProductQuantity,
    getOrders,
    deleteUser,
    deleteProduct,
    deleteOrder,
  } = useAdminStore();

  const handleChangeOrderStatus = async (id: string, status: string) => {
    try {
      await updateOrderStatus(id, status);
      getOrders();
    } catch (error) {
      console.error("Error al cambiar estado:", error);
    }
  };

  const getNextStatusOptions = (currentStatus: string) => {
    switch (currentStatus) {
      case "POR EMPAQUETAR":
        return [{ label: "Empaquetado", value: "EMPAQUETADO" }];
      case "EMPAQUETADO":
        return [{ label: "En camino", value: "EN CAMINO" }];
      case "EN CAMINO":
        return [
          { label: "Despachado", value: "DESPACHADO" },
          { label: "Entregado", value: "ENTREGADO" },
        ];
      case "DESPACHADO":
        return [{ label: "Entregado", value: "ENTREGADO" }];
      default:
        return [];
    }
  };

  return (
    <div className="min-h-[542px] max-h-[542px]">
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
        <tbody>
          {tableBodyData?.map((row, i: number) => {
            return (
              <tr key={i} className="h-[50px] border-b">
                {Object.entries(row).map(([key, value], j) => {
                  if (
                    key === "id" ||
                    key === "role" ||
                    key === "customer" ||
                    key === "customerId" ||
                    key === "createdAt" ||
                    key === "newsletter"
                  )
                    return null;

                  return (
                    <td key={j} className="min-w-[200px] text-center px-2">
                      {key === "quantity" && typeof value === "number" ? (
                        <div className="flex items-center justify-center gap-2">
                          <button
                            disabled={value === 0}
                            onClick={async () => {
                              if ("product" in row) {
                                await decrementProduct(row.id);
                                updateProductQuantity(row.id, row.quantity - 1);
                              }
                            }}
                            className="px-2 py-1 bg-gray-200 transition-all duration-300 hover:bg-pcPrincipal hover:text-pcSecondary rounded disabled:bg-gray-400 disabled:hover:text-black"
                          >
                            -
                          </button>
                          <span>{value}</span>
                          <button
                            onClick={async () => {
                              if ("product" in row) {
                                await incrementProduct(row.id);
                                updateProductQuantity(row.id, row.quantity + 1);
                              }
                            }}
                            className="px-2 py-1 bg-gray-200 transition-all duration-300 hover:bg-pcPrincipal hover:text-pcSecondary rounded"
                          >
                            +
                          </button>
                        </div>
                      ) : key === "shipmentProducts" && Array.isArray(value) ? (
                        value
                          .map(
                            (item) =>
                              `${item.product.product} x${Math.abs(item.quantity)}`
                          )
                          .join(", ")
                      ) : key === "birthdate" && typeof value === "string" ? (
                        new Date(value).toLocaleString("es-AR", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                        })
                      ) : key === "status" ? (
                        <span
                          className={clsx(
                            "text-xs font-bold",
                            value === "POR EMPAQUETAR"
                              ? "text-admin-red"
                              : value === "EMPAQUETADO"
                                ? "text-admin-orange"
                                : value === "EN CAMINO"
                                  ? "text-admin-green"
                                  : value === "DESPACHADO"
                                    ? "text-pcPrincipal"
                                    : value === "ENTREGADO" &&
                                      "text-pcPrincipal"
                          )}
                        >
                          {value}
                        </span>
                      ) : key === "shipmentType" ? (
                        <span
                          className={clsx(
                            "text-xs font-bold",
                            value === "DOMICILIO"
                              ? "text-black"
                              : value === "SUCURSAL" && "text-admin-orange"
                          )}
                        >
                          {value}
                        </span>
                      ) : (
                        value
                      )}
                    </td>
                  );
                })}
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
                        {"orderId" in row &&
                          getNextStatusOptions(row.status).map((option) => (
                            <DropdownMenuItem
                              key={option.value}
                              onClick={() =>
                                handleChangeOrderStatus(row.id, option.value)
                              }
                              className="text-inherit flex items-center gap-3 px-4 py-3 min-h-[48px] text-base sm:text-sm cursor-pointer text-admin-primary data-[highlighted]:bg-admin-primary/10 data-[highlighted]:text-admin-primary rounded-md transition-colors duration-200"
                            >
                              <FontAwesomeIcon icon={faDiagramProject} />
                              {option.label}
                            </DropdownMenuItem>
                          ))}

                        <DropdownMenuItem
                          onClick={() => {
                            if ("fullName" in row) {
                              deleteUser(row.id);
                            } else if ("product" in row) {
                              deleteProduct(row.id);
                            } else if ("orderId" in row) {
                              deleteOrder(row.id);
                            }
                          }}
                          className="text-inherit flex items-center gap-3 px-4 py-3 min-h-[48px] text-base sm:text-sm cursor-pointer text-admin-deleteColor data-[highlighted]:bg-admin-deleteColor/10 data-[highlighted]:text-admin-deleteColor rounded-md transition-colors duration-200"
                        >
                          <FontAwesomeIcon icon={faTrash} />
                          Eliminar
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {modal && <ModalAdd />}
    </div>
  );
};
