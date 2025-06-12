"use client";

import { useEffect } from "react";
import { TableBase, UserTitle } from "@/components/ui/UserComponents";
import { useUserStore, useDepositStore } from "@/store";
import { UserTablesSearchInput } from "../UserTablesSearchInput/UserTablesSearchInput";

export function Deposit() {
  const { user } = useUserStore();
  const { table, fetchDepositData, isLoading, searchProductTerm, setSearchProductTerm } =
    useDepositStore();

  useEffect(() => {
    if (user?.company) {
      fetchDepositData(user.company);
    }
  }, [user?.company, fetchDepositData]);

  const headers = table?.headers ?? [];
  const rows = table?.rows ?? [];

  const filteredRows = rows.filter((row) =>
    String(row[0]).toLowerCase().includes(searchProductTerm.toLowerCase())
  );

  return (
    <section className="mt-6 space-y-4">
      <UserTitle text="Depósito" />

      <UserTablesSearchInput
        value={searchProductTerm}
        onChange={setSearchProductTerm}
        placeholder="Buscar por número de orden"
      />

      <TableBase
        headers={headers}
        rows={filteredRows}
        isLoading={isLoading}
        emptyTitle="Depósito vacío"
        emptyMessage="Actualmente no hay productos disponibles en el depósito."
      />
    </section>
  );
}
