import { ITableData } from "./types";

export const tableData: ITableData[] = [
  {
    table: "clients",
    tableHeadData: [
      "Nombre completo",
      "Correo electrónico",
      "Documento",
      "Dirección",
      "Teléfono",
      "Fecha de nacimiento",
      "Empresa",
      "Acciones",
    ],
  },
  {
    table: "warehouse",
    tableHeadData: ["Producto", "Cantidad", "Empresa", "Acciones"],
  },
  {
    table: "shipment",
    tableHeadData: [
      "N° de Órden",
      "Producto/s",
      "Dirección",
      "Localidad",
      "Código postal",
      "Provincia",
      "Empresa",
      "Estado",
      "Acciones",
    ],
  },
];
