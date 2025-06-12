"use client";

import { useEffect } from "react";
import { useShipmentStore, useUserStore } from "@/store";
import { TableBase, UserTablesSearchInput, UserTitle } from "@/components";
import { buildShipmentTable } from "@/data";

export const History = () => {
  const { user } = useUserStore();
  const { deliveredShipments, fetchShipments, isLoading, searchTerm, setSearchTerm } =
    useShipmentStore();

  useEffect(() => {
    if (user?.company) fetchShipments(user.company);
  }, [user?.company, fetchShipments]);

  const filteredShipments = deliveredShipments.filter((s) =>
    s.orderId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log(deliveredShipments);

  const { headers, rows } = buildShipmentTable(filteredShipments, true);

  return (
    <section className="mt-6 space-y-4">
      <UserTitle text="Historial de envíos" />

      <UserTablesSearchInput
        value={searchTerm}
        onChange={setSearchTerm}
        placeholder="Buscar por número de orden"
      />

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
