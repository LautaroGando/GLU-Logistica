import React from "react";
import { TableBase } from "@/components";
import { UserTitle } from "@/components";

export const History = () => {
  const headers = ["Orden", "Productos", "Dirección", "Localidad", "CP", "Provincia", "Estado"];

  const rows = Array.from({ length: 20 }, (_, i) => [
    "#426",
    "Tornillos, Tuercas, pizza",
    "Juan B Justo 9100",
    "CABA",
    "C1408",
    "Buenos Aires",
    <span
      key={`status-${i}`}
      className="px-2 py-1 text-xs rounded-md border border-green-500 text-green-600"
    >
      Entregado
    </span>,
  ]);

  return (
    <section className="mt-6">
      <UserTitle text="Envíos" />
      <TableBase headers={headers} rows={rows} />
    </section>
  );
};
