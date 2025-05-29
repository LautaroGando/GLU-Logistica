import { IDepositProduct } from "@/interfaces";

export const buildDepositTable = (data: IDepositProduct[]) => {
  const headers = ["Nombre del Producto", "Cantidad"];
  const rows = data.map((product) => [product.product, product.quantity.toString()]);
  return { headers, rows };
};
