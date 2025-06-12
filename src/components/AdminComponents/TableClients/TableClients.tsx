"use client";

import { useEffect, useState } from "react";
import { Filter } from "@/components/ui/AdminComponents/Filter/Filter";
import { Table } from "@/components/ui/AdminComponents/Table/Table";
import { ButtonAdd } from "@/components/ui/AdminComponents/ButtonAdd/ButtonAdd";
import { Modal } from "@/enum/Modal";
import { tableData } from "@/data/adminData/tableData/tableData";
import { ITableClients } from "@/data/adminData/tableData/types";
import { IFilter } from "@/interfaces/IFilter";
import { useAdminStore } from "@/store/adminStore/useAdminStore";

export const TableClients = () => {
  const { users, getUsers, searchTerm } = useAdminStore();
  const [filteredUsers, setFilteredUsers] = useState<ITableClients[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string>("");

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  useEffect(() => {
    if (!users) {
      setFilteredUsers([]);
      return;
    }

    const result = users.filter((user) => {
      const matchesCompany = selectedFilter
        ? user.company?.toLowerCase().includes(selectedFilter)
        : true;

      const matchesSearch = searchTerm
        ? user.fullName?.toLowerCase().includes(searchTerm) ||
          user.email?.toLowerCase().includes(searchTerm) ||
          user.company?.toLowerCase().includes(searchTerm)
        : true;

      return matchesCompany && matchesSearch;
    });

    setFilteredUsers(result);
  }, [selectedFilter, users, searchTerm]);

  const clientFilterOptions: IFilter[] = Array.from(
    new Set(users?.map((user) => user.company).filter(Boolean))
  ).map((company) => ({
    label: company,
    value: company.toLowerCase(),
  }));

  return (
    <div className="w-full flex flex-col gap-5 p-3">
      <div className="flex flex-col gap-5 sm:flex-row sm:justify-between">
        <Filter
          filter={clientFilterOptions}
          onChange={(value) => setSelectedFilter(value)}
        />
      </div>
      <div className="w-full overflow-auto">
        <Table
          tableHeadData={tableData[0].tableHeadData}
          tableBodyData={filteredUsers}
        />
      </div>
      <div className="w-full flex justify-end">
        <ButtonAdd label="Añadir cliente" modalType={Modal.CLIENT} />
      </div>
    </div>
  );
};
