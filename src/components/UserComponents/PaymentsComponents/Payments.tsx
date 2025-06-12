"use client";

import { useEffect } from "react";
import { useUserStore, useShipmentStore } from "@/store";
import { UserTitle, TableBase, UserTablesSearchInput } from "@/components";
import { buildPaymentsTable } from "@/data";

export const Payments = () => {
  const { user } = useUserStore();
  const { deliveredShipments, paymentSearchTerm, setPaymentSearchTerm, fetchShipments, isLoading } =
    useShipmentStore();

  useEffect(() => {
    if (user?.company) fetchShipments(user.company);
  }, [user?.company, fetchShipments]);

  const { headers, rows } = buildPaymentsTable(deliveredShipments);

  const filteredRows = rows.filter((row) =>
    row[0].toLowerCase().includes(paymentSearchTerm.toLowerCase())
  );

  return (
    <section className="mt-6 space-y-4">
      <UserTitle text="Pagos semanales" />

      <UserTablesSearchInput
        value={paymentSearchTerm}
        onChange={setPaymentSearchTerm}
        placeholder="Buscar por semana (ej: 03/06 o 08/06)"
      />

      <TableBase
        headers={headers}
        rows={filteredRows}
        rowHight="h-[56px]"
        isLoading={isLoading}
        emptyTitle="Sin pagos"
        emptyMessage="Todavía no se registraron entregas para calcular pagos."
      />
    </section>
  );
};
