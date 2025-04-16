"use client";
import React from "react";
import FilterSortBar from "./FilterSortBar/FilterSortBar";
import AdminTable from "./AdminTable/AdminTable";
import AdminSearchBar from "./AdminSearchBar/AdminSearchBar";
import RecordsCount from "./RecordsCount/RecordsCount";
import TableActions from "./TableActions/TableActions";

const Admin = () => {
  return (
    <div className="pt-[37px] text-admin-letterColor relative">
      <AdminSearchBar />

      <RecordsCount text="Usuarios registrados" number={512} />

      <FilterSortBar />
      <div className="min-h-[600px]">
        <AdminTable />

        <TableActions />
      </div>
    </div>
  );
};

export default Admin;
