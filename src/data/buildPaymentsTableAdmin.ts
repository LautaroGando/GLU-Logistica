import { IShipment } from "@/interfaces";
import { format } from "date-fns";

export function buildPaymentsTableAdmin(shipments: IShipment[]) {
  if (!shipments?.length) return { rows: [] };

  const paymentsMap = new Map<string, number>();

  for (const shipment of shipments) {
    const date = new Date(shipment.deliveryDate);
    const day = date.getDay();
    const diffToMonday = day === 0 ? -6 : 1 - day;

    const monday = new Date(date);
    monday.setDate(date.getDate() + diffToMonday);

    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);

    const weekKey = `${format(monday, "dd/MM/yyyy")} - ${format(sunday, "dd/MM/yyyy")}`;

    const company = shipment.company || "Sin empresa";

    const compoundKey = `${weekKey}::${company}`;
    const prev = paymentsMap.get(compoundKey) || 0;
    paymentsMap.set(compoundKey, prev + shipment.price);
  }

  const rows = Array.from(paymentsMap.entries())
    .sort(([a], [b]) => {
      const [startA] = a.split("::")[0].split(" - ");
      const [startB] = b.split("::")[0].split(" - ");
      const [dayA, monthA] = startA.split("/").map(Number);
      const [dayB, monthB] = startB.split("/").map(Number);
      return monthB !== monthA ? monthB - monthA : dayB - dayA;
    })
    .map(([compoundKey, total], index) => {
      const [week, company] = compoundKey.split("::");
      return {
        id: index.toString(),
        company,
        week,
        total: `$${total.toLocaleString("es-AR")}`,
      };
    });

  return { rows };
}
