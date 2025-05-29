import React from "react";
import { buildDepositTable } from "@/data";
import { TableBase, UserTitle } from "@/components";
import { getProducts } from "@/services";

export const Deposit = async () => {
  const { data } = await getProducts();
  const { headers, rows } = buildDepositTable(data);

  return (
    <section className="mt-6">
      <UserTitle text="Depósito" />
      <TableBase headers={headers} rows={rows} />
    </section>
  );
};
