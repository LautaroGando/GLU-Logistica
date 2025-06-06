import { Status } from "@/enum/Status";

export interface ITableClients {
  id: string;
  fullName: string;
  email: string;
  dni: string;
  address: string;
  phone: string;
  birthdate: string;
  company: string;
}

export interface ITableWarehouse {
  customerId: string;
  id: string;
  product: string;
  quantity: number;
  company: string;
}

export interface ITableShipments {
  id: string;
  orderId: string;
  customerId: string;
  shipmentProducts: {
    id: string;
    quantity: number;
    product: {
      id: string;
      product: string;
      quantity: number;
      company: string;
    };
  }[];
  products: [{ depositId: string; quantity: number }];
  address: string;
  locality: string;
  postalCode: string;
  province: string;
  company: string;
  shipmentType: "DOMICILIO" | "SUCURSAL";
  status: Status;
  customer: {
    id: string;
    fullName: string;
    email: string;
    dni: string;
    address: string;
    phone: string;
    birthdate: string;
    company: string;
    role: "CLIENTE";
  };
}

export interface ITableData {
  table: string;
  tableHeadData: string[];
}
