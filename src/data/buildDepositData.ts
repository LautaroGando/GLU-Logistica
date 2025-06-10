import { IDepositProduct } from "@/interfaces";
import { ITableShipments } from "./adminData/tableData/types";

export const buildDepositTable = (
  depositData: IDepositProduct[],
  shipmentsData: ITableShipments[],
  company: string
) => {
  const headers = [
    "Nombre del producto",
    "Cantidad solicitada",
    "Cantidad en depósito",
    "Faltantes",
  ];

  const totalByProduct: Record<string, number> = {};

  const filteredShipments =
    shipmentsData?.filter(
      (shipment) =>
        shipment.status === "POR EMPAQUETAR" && shipment.company === company
    ) || [];

  for (const shipment of filteredShipments) {
    for (const item of shipment.shipmentProducts) {
      if (!item.product || !item.product.product) {
        console.warn("shipmentProduct sin product cargado:", item);
        continue;
      }

      const productName = item.product.product;
      totalByProduct[productName] =
        (totalByProduct[productName] || 0) + item.quantity;
    }
  }

  const productNamesSet = new Set([
    ...depositData.map((d) => d.product),
    ...Object.keys(totalByProduct),
  ]);

  const rows = Array.from(productNamesSet).map((productName) => {
    const requestedQty = totalByProduct[productName] || 0;
    const depositItem = depositData.find((d) => d.product === productName);
    const depositQty = depositItem?.quantity || 0;
    const shortage = Math.max(requestedQty - depositQty, 0);

    return [
      productName,
      requestedQty.toString(),
      depositQty.toString(),
      shortage > 0 ? shortage.toString() : "-",
    ];
  });

  return { headers, rows };
};
