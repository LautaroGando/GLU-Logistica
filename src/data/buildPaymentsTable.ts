import { IShipment } from "@/interfaces";
import { format } from "date-fns";

export function buildPaymentsTable(shipments: IShipment[]) {
  if (!shipments?.length) return { headers: [], rows: [] };

  const weeksMap = new Map<string, number>();

  for (const shipment of shipments) {
    const date = new Date(shipment.deliveryDate);

    const day = date.getDay();
    const diffToMonday = day === 0 ? -6 : 1 - day;

    const monday = new Date(date);
    monday.setDate(date.getDate() + diffToMonday);

    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);

    const weekKey = `${format(monday, "dd/MM")} - ${format(sunday, "dd/MM")}`;

    const prev = weeksMap.get(weekKey) || 0;
    weeksMap.set(weekKey, prev + shipment.price);
  }

  const headers = ["Semana", "Monto total"];
  const rows = Array.from(weeksMap.entries())
    .sort(([a], [b]) => {
      const [startA] = a.split(" - ");
      const [startB] = b.split(" - ");
      const [dayA, monthA] = startA.split("/").map(Number);
      const [dayB, monthB] = startB.split("/").map(Number);
      return monthB !== monthA ? monthB - monthA : dayB - dayA;
    })
    .map(([week, total]) => [week, `$${total.toLocaleString("es-AR")}`]);

  return { headers, rows };
}
