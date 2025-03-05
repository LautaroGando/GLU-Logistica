"use client";
import React, { JSX } from "react";
import UsersTable from "./UsersTable/UsersTable";
import ParcelTable from "./ParcelTable/ParcelTable";
import useLastPath from "@/hooks/useLastPath";

const AdminTable: React.FC = () => {
  const lastPath = useLastPath();

  const tables: Record<string, JSX.Element> = {
    users: <UsersTable />,
    parcels: <ParcelTable />,
  };

  return tables[lastPath ?? "users"] || <ParcelTable />;
};

export default AdminTable;
