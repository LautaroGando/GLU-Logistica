"use client";

import { useEffect } from "react";
import { useUserStore } from "@/store";

import { TableBase, UserTablesSearchInput, UserTitle } from "@/components";
import { buildShipmentTable } from "@/data";
import { useShipmentStore } from "@/store/shipmentsStore/shipmentsStore";

export const Shipments = () => {
  const { user } = useUserStore();
  const { shipments, fetchShipments, isLoading, searchTerm, setSearchTerm } = useShipmentStore();

  useEffect(() => {
    if (user?.company) fetchShipments(user.company);
  }, [user?.company, fetchShipments]);

  const filteredShipments = shipments.filter((s) =>
    s.orderId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const { headers, rows } = buildShipmentTable(filteredShipments);

  return (
    <section className="mt-6 space-y-4">
      <UserTitle text="Envíos" />

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
        emptyTitle="Sin envíos"
        emptyMessage="Todavía no se han registrado envíos para esta empresa."
      />
    </section>
  );
};
