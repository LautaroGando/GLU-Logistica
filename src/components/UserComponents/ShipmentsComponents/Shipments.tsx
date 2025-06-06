"use client";

import { useEffect } from "react";
import { useUserStore } from "@/store";

import { TableBase, UserTitle } from "@/components";
import { buildShipmentTable } from "@/data";
import { useShipmentStore } from "@/store/shipmentsStore/shipmentsStore";

export const Shipments = () => {
  const { user } = useUserStore();
  const { shipments, fetchShipments, isLoading } = useShipmentStore();

  useEffect(() => {
    if (user?.company) fetchShipments(user.company);
  }, [user?.company, fetchShipments]);

  const { headers, rows } = buildShipmentTable(shipments || []);

  return (
    <section className="mt-6">
      <UserTitle text="Envíos" />
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
