"use client";

import { useEffect } from "react";
import { useShipmentStore, useUserStore } from "@/store";
import { TableBase, UserTitle } from "@/components";
import { buildShipmentTable } from "@/data";

export const History = () => {
  const { user } = useUserStore();
  const { deliveredShipments, fetchShipments, isLoading } = useShipmentStore();
  console.log(deliveredShipments);
  

  useEffect(() => {
    if (user?.company) fetchShipments(user.company);
  }, [user?.company, fetchShipments]);

  const { headers, rows } = buildShipmentTable(deliveredShipments);

  return (
    <section className="mt-6">
      <UserTitle text="Historial de envíos" />
      <TableBase
        headers={headers}
        rows={rows}
        rowHight="h-[56px]"
        isLoading={isLoading}
        emptyTitle="Sin historial"
        emptyMessage="Todavía no se han registrado envíos entregados."
      />
    </section>
  );
};
