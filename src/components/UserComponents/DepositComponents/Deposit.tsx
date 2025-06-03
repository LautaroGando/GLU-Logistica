import React from "react";
import { buildDepositTable } from "@/data";
import { TableBase, UserTitle } from "@/components";
import { getOrders, getProducts } from "@/services";

export const Deposit = async () => {
  const { data: depositData } = await getProducts();
  const { data: shipmentsData } = await getOrders();
  const { headers, rows } = buildDepositTable(depositData, shipmentsData);

  return (
    <section className="mt-6">
      <UserTitle text="Depósito" />
      <TableBase headers={headers} rows={rows} />
    </section>
  );
};
