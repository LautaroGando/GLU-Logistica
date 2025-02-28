"use client";
import React, { JSX } from "react";
import UsersTable from "./UsersTable/UsersTable";
import ParcelTable from "./ParcelTable/ParcelTable";
import { usePathname } from "next/navigation";

const AdminTable: React.FC = () => {
  const pathname = usePathname();
  const lastPath = pathname.split("/").filter(Boolean).pop();

  const tables: Record<string, JSX.Element> = {
    users: <UsersTable />,
    parcels: <ParcelTable />,
  };

  return tables[lastPath ?? "users"] || <ParcelTable />;
};

export default AdminTable;
