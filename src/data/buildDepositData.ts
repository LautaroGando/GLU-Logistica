import { IDepositProduct } from "@/interfaces";

export const buildDepositTable = (data: IDepositProduct[]) => {
  const headers = ["Nombre del Producto", "Cantidad"];
  const rows = data
    .filter((product) => product.quantity !== 0)
    .map((product) => [product.product, product.quantity.toString()]);
  return { headers, rows };
};
