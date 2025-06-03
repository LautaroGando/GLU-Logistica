import { IDepositProduct } from "@/interfaces";
import { ITableShipments } from "./adminData/tableData/types";

export const buildDepositTable = (
  depositData: IDepositProduct[],
  shipmentsData: ITableShipments[]
) => {
  const headers = [
    "Nombre del producto",
    "Cantidad solicitada",
    "Cantidad en depósito",
    "Faltantes",
  ];

  const totalSolicitadoPorProducto: Record<string, number> = {};

  const porEmpaquetar = shipmentsData.filter(
    (shipment) => shipment.status === "POR EMPAQUETAR"
  );

  for (const shipment of porEmpaquetar) {
    for (const item of shipment.shipmentProducts) {
      const productName = item.product.product;
      totalSolicitadoPorProducto[productName] =
        (totalSolicitadoPorProducto[productName] || 0) + item.quantity;
    }
  }

  const rows = Object.entries(totalSolicitadoPorProducto).map(
    ([productName, cantidadSolicitada]) => {
      const depositoItem = depositData.find((d) => d.product === productName);
      const cantidadEnDeposito = depositoItem?.quantity || 0;
      const faltantes = Math.max(cantidadSolicitada - cantidadEnDeposito, 0);

      return [
        productName,
        cantidadSolicitada.toString(),
        cantidadEnDeposito.toString(),
        faltantes > 0 ? faltantes.toString() : "-",
      ];
    }
  );

  return { headers, rows };
};
