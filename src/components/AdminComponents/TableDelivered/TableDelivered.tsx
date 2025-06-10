"use client";
import { useEffect, useMemo, useState } from "react";
import { Filter } from "@/components/ui/AdminComponents/Filter/Filter";
import Pagination from "@/components/ui/AdminComponents/Pagination/Pagination";
import { Table } from "@/components/ui/AdminComponents/Table/Table";
import { tableData } from "@/data/adminData/tableData/tableData";
import { useAdminStore } from "@/store/adminStore/useAdminStore";
import { ITableShipments } from "@/data/adminData/tableData/types";
import { IFilter } from "@/interfaces/IFilter";

export const TableDelivered = () => {
  const { orders, getOrders, searchTerm } = useAdminStore();
  const [filteredOrders, setFilteredOrders] = useState<ITableShipments[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string>("");

  useEffect(() => {
    getOrders();
  }, [getOrders]);

  useEffect(() => {
    if (!orders) {
      setFilteredOrders([]);
      return;
    }

    const result = orders
      .filter((order) => order.status === "ENTREGADO")
      .filter((order) => {
        const matchesCompany = selectedFilter
          ? order.company?.toLowerCase().includes(selectedFilter)
          : true;

        const matchesSearch = searchTerm
          ? order.company?.toLowerCase().includes(searchTerm) ||
            order.orderId?.toLowerCase().includes(searchTerm)
          : true;

        return matchesCompany && matchesSearch;
      });

    setFilteredOrders(result);
  }, [selectedFilter, orders, searchTerm]);

  const companyFilterOptions: IFilter[] = useMemo(() => {
    if (!orders) return [];
    const uniqueCompanies = Array.from(
      new Set(orders.map((o) => o.company).filter(Boolean))
    );
    return uniqueCompanies.map((company) => ({
      label: company!,
      value: company!.toLowerCase(),
    }));
  }, [orders]);

  const reorderedOrders = [...filteredOrders]
    .sort((a, b) => {
      const getNumber = (id: string) => Number(id.replace(/\D/g, ""));
      return getNumber(b.orderId) - getNumber(a.orderId);
    })
    .map((order) => {
      const {
        orderId,
        shipmentProducts,
        address,
        locality,
        postalCode,
        province,
        company,
        shipmentType,
        status,
        price,
        ...rest
      } = order;

      return {
        orderId,
        shipmentProducts,
        address,
        locality,
        postalCode,
        province,
        company,
        shipmentType,
        status,
        price,
        ...rest,
      };
    });

  return (
    <div className="w-full flex flex-col gap-5 p-3">
      <div className="flex flex-col gap-5 sm:flex-row sm:justify-between">
        <Filter
          filter={companyFilterOptions}
          onChange={(value) => setSelectedFilter(value)}
        />
        <Pagination table="shipments" />
      </div>
      <div className="w-full overflow-auto">
        <Table
          tableHeadData={tableData[3].tableHeadData}
          tableBodyData={reorderedOrders}
        />
      </div>
    </div>
  );
};
