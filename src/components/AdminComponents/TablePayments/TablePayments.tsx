"use client";
import { useEffect, useMemo, useState } from "react";
import { Filter } from "@/components/ui/AdminComponents/Filter/Filter";
import { Table } from "@/components/ui/AdminComponents/Table/Table";
import { tableData } from "@/data/adminData/tableData/tableData";
import { useAdminStore } from "@/store/adminStore/useAdminStore";
import { buildPaymentsTableAdmin } from "@/data/buildPaymentsTableAdmin";
import { IFilter } from "@/interfaces/IFilter";
import { IShipment } from "@/interfaces";
import { ITablePayments } from "@/data/adminData/tableData/types";
import { NotData } from "@/components/ui/AdminComponents/NotData/NotData";
import Loading from "@/components/ui/Loading/Loading";

export const TablePayments = () => {
  const { orders, getOrders, searchTerm } = useAdminStore();
  const [selectedFilter, setSelectedFilter] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await getOrders();
      setIsLoading(false);
    };

    fetchData();
  }, [getOrders]);

  const { rows } = buildPaymentsTableAdmin(orders as IShipment[]) as {
    rows: ITablePayments[];
  };

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

  const filteredRows = useMemo(() => {
    const sorted = [...rows].sort((a, b) => {
      const getDateFromWeek = (week: string) => {
        const [day, month, year] = week.split(" - ")[0].split("/").map(Number);
        return new Date(year, month - 1, day);
      };

      return (
        getDateFromWeek(b.week).getTime() - getDateFromWeek(a.week).getTime()
      );
    });

    return sorted.filter((row) => {
      const matchesCompany = selectedFilter
        ? row.company.toLowerCase().includes(selectedFilter)
        : true;

      const matchesSearch = searchTerm
        ? row.week.toLowerCase().includes(searchTerm)
        : true;

      return matchesCompany && matchesSearch;
    });
  }, [rows, selectedFilter, searchTerm]);

  return (
    <div className="w-full flex flex-col gap-5 p-3">
      <div className="flex flex-col gap-5 sm:flex-row sm:justify-between">
        <Filter
          filter={companyFilterOptions}
          onChange={(value) => setSelectedFilter(value)}
        />
      </div>
      <div className="w-full overflow-auto">
        {isLoading ? (
          <div className="min-h-[542px] max-h-[542px] flex items-center">
            <Loading mode="principal" hover />
          </div>
        ) : filteredRows.length ? (
          <Table
            tableHeadData={tableData[4].tableHeadData}
            tableBodyData={filteredRows}
          />
        ) : (
          <NotData />
        )}
      </div>
    </div>
  );
};
