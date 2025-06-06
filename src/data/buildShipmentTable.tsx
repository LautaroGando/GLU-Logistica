import { IShipment } from "@/interfaces";
import clsx from "clsx";

export const buildShipmentTable = (shipments: IShipment[]) => {
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

  const rows = shipments.map((shipment) => {
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

    return [
      shipment.orderId,
      productNames,
      shipment.address,
      shipment.locality,
      shipment.postalCode,
      shipment.province,
      <span key={shipment.id + "-type"} className={clsx("text-xs", shipmentTypeClass)}>
        {shipment.shipmentType}
      </span>,
      <span
        key={shipment.id + "-status"}
        className={clsx("px-2 py-2 text-xs rounded-md border font-semibold", statusClass)}
      >
        {shipment.status}
      </span>,
    ];
  });

  return { headers, rows };
};
