import { IShipment } from "@/interfaces";
import clsx from "clsx";

export const buildShipmentTable = (
  shipments: IShipment[],
  includeDeliveryDate: boolean = false
) => {
  const headers = [
    "Orden",
    "Productos",
    "Dirección",
    "Localidad",
    "CP",
    "Provincia",
    "Envío",
    "Estado",
  ];

  if (includeDeliveryDate) {
    headers.splice(7, 0, "Fecha de entrega");
  }

  const rows = shipments?.map((shipment) => {
    const productNames = shipment.shipmentProducts
      .map((sp) =>
        sp.product?.product && sp.quantity ? `${sp.product.product} x${sp.quantity}` : null
      )
      .filter(Boolean)
      .join(", ");

    const shipmentTypeClass = clsx(
      shipment.shipmentType === "DOMICILIO" && "font-bold",
      shipment.shipmentType === "SUCURSAL" && "text-admin-orange"
    );

    const statusClass = clsx(
      shipment.status === "POR EMPAQUETAR" && "text-admin-red border-admin-red",
      shipment.status === "EMPAQUETADO" && "text-admin-orange border-admin-orange",
      shipment.status === "EN CAMINO" && "text-admin-green border-admin-green",
      shipment.status === "DESPACHADO" && "text-pcPrincipal border-pcPrincipal",
      shipment.status === "ENTREGADO" && "text-pcPrincipal border-pcPrincipal",
      !["POR EMPAQUETAR", "EMPAQUETADO", "EN CAMINO", "DESPACHADO", "ENTREGADO"].includes(
        shipment.status
      ) && "text-gray-600 border-gray-300"
    );

    const row = [
      shipment.orderId,
      productNames,
      shipment.address,
      shipment.locality,
      shipment.postalCode,
      shipment.province,
      <span key={shipment.id + "-type"} className={clsx("text-xs", shipmentTypeClass)}>
        {shipment.shipmentType}
      </span>,
    ];

    if (includeDeliveryDate) {
      const delivery = new Date(shipment.deliveryDate);
      const formattedDate = delivery.toLocaleDateString("es-AR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
      
      row.splice(7, 0, formattedDate);
    }

    row.push(
      <span
        key={shipment.id + "-status"}
        className={clsx("px-2 py-2 text-xs rounded-md border font-semibold", statusClass)}
      >
        {shipment.status}
      </span>
    );

    return row;
  });

  return { headers, rows };
};
