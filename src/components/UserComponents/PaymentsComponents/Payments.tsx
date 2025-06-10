"use client";

import { useEffect } from "react";
import { useUserStore, useShipmentStore } from "@/store";
import { UserTitle, TableBase } from "@/components";
import { buildPaymentsTable } from "@/data";

export const Payments = () => {
  const { user } = useUserStore();
  const { deliveredShipments, fetchShipments, isLoading } = useShipmentStore();

  useEffect(() => {
    if (user?.company) fetchShipments(user.company);
  }, [user?.company, fetchShipments]);

  const { headers, rows } = buildPaymentsTable(deliveredShipments);

  return (
    <section className="mt-6">
      <UserTitle text="Pagos semanales" />
      <TableBase
        headers={headers}
        rows={rows}
        rowHight="h-[56px]"
        isLoading={isLoading}
        emptyTitle="Sin pagos"
        emptyMessage="Todavía no se registraron entregas para calcular pagos."
      />
    </section>
  );
};
