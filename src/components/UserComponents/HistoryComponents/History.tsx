import React from "react";
import { UserTitle, TableBase } from "@/components";
import { buildShipmentTable } from "@/data";
import { getOrders } from "@/services";

export const History = async () => {
  const { data } = await getOrders();
  const { headers, rows } = buildShipmentTable(data, { onlyDelivered: true });

  return (
    <section className="mt-6">
      <UserTitle text="Historial de envíos" />
      <TableBase headers={headers} rows={rows} rowHight="h-[56px]" />
    </section>
  );
};
