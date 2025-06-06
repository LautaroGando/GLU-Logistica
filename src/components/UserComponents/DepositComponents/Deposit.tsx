"use client";

import { useEffect } from "react";

import { TableBase, UserTitle } from "@/components/ui/UserComponents";
import { useUserStore, useDepositStore } from "@/store";

export function Deposit() {
  const { user } = useUserStore();
  const { table, fetchDepositData, isLoading } = useDepositStore();

  useEffect(() => {
    if (user?.company) {
      fetchDepositData(user.company);
    }
  }, [user?.company, fetchDepositData]);

  return (
    <section className="mt-6">
      <UserTitle text="Depósito" />
      <TableBase
        headers={table?.headers || []}
        rows={table?.rows || []}
        isLoading={isLoading}
        emptyTitle="Depósito vacío"
        emptyMessage="Actualmente no hay productos disponibles en el depósito."
      />
    </section>
  );
}
