import { IShipment } from "@/interfaces";

export const buildShipmentTable = (shipments: IShipment[]) => {
  const headers = ["Orden", "Productos", "Dirección", "Localidad", "CP", "Provincia", "Estado"];

  const rows = shipments.map((shipment) => {
    const productNames = shipment.shipmentProducts
      .map((sp) => sp.product?.product)
      .filter(Boolean)
      .join(", ");

    const statusColor =
      shipment.status === "ENTREGADO"
        ? "text-green-600 border-green-500"
        : shipment.status === "EN CAMINO"
          ? "text-yellow-600 border-yellow-500"
          : "text-blue-600 border-blue-500";

    return [
      shipment.orderId,
      productNames,
      shipment.address,
      shipment.locality,
      shipment.postalCode,
      shipment.province,
      <span key={shipment.id} className={`px-2 py-2 text-xs rounded-md border font-semibold ${statusColor}`}>
        {shipment.status}
      </span>,
    ];
  });

  return { headers, rows };
};
