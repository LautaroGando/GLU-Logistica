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
  customerId: string;
  orderId: string;
  products: { depositId: string; quantity: number }[];
  address: string;
  locality: string;
  postalCode: string;
  province: string;
  company: string;
  shipmentType: string;
  status: Status;
}

export interface ITableData {
  table: string;
  tableHeadData: string[];
}
