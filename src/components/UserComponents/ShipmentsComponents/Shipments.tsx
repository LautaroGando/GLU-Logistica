import { TableBase, UserTitle } from "@/components";
import { buildShipmentTable } from "@/data";
import { getOrders } from "@/services";

export const Shipments = async () => {
  const { data } = await getOrders();
  const { headers, rows } = buildShipmentTable(data);

  return (
    <section className="mt-6">
      <UserTitle text="Envíos" />
      <TableBase headers={headers} rows={rows} rowHight="h-[56px]" />
    </section>
  );
};
