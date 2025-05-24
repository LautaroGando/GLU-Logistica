import { Status } from "@/enum/Status";
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
    tableBodyData: [{
      fullName: "Lautaro Gando",
      email: "lautarogandodev@gmail.com",
      dni: "43.171.024",
      address: "Av. Juan B. Justo 9100",
      phone: "11-3269-2245",
      birthdate: "22/05/2001",
      companyName: "Tu Cangu",
    }],
  },
  {
    table: "warehouse",
    tableHeadData: [
      "Identificador",
      "Producto",
      "Cantidad",
      "Empresa",
      "Acciones",
    ],
    tableBodyData: [{
      id: "324dsf-sdfsdf-56gff-df556v",
      product: "Cangu gris",
      quantity: 1,
      companyName: "Tu Cangu",
    }],
  },
  {
    table: "shipment",
    tableHeadData: [
      "Órden",
      "Producto/s",
      "Dirección",
      "Localidad",
      "Código postal",
      "Provincia",
      "Empresa",
      "Estado",
      "Acciones",
    ],
    tableBodyData: [{
      orderId: "#285",
      products: ["Cangu gris", "Cangu negro"],
      address: "Federico Cuvier 1116",
      locality: "Moreno",
      postalCode: "1744",
      province: "GBA",
      companyName: "Tu Cangu",
      status: Status.FOR_PACKAGING,
    }],
  },
];
