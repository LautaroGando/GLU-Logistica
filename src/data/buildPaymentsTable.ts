import { IShipment } from "@/interfaces";

const PRICE_PER_UNIT = 100;

export const buildPaymentsTable = (shipments: IShipment[]) => {
  const DUMMY_LABEL = "Entregados 01/06 - 07/06";

  const totalAmount = shipments.reduce((sum, shipment) => {
    const quantity = shipment.shipmentProducts.reduce((acc, p) => acc + p.quantity, 0);
    return sum + quantity * PRICE_PER_UNIT;
  }, 0);

  return {
    headers: ["Semana", "Monto total"],
    rows: [[DUMMY_LABEL, `$${totalAmount.toLocaleString("es-AR")}`]],
  };
};
