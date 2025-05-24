import { Status } from "@/enum/Status";

export interface ITableClients {
  fullName: string;
  email: string;
  dni: string;
  address: string;
  phone: string;
  birthdate: string;
  companyName: string;
}

export interface ITableWarehouse {
  id: string;
  product: string;
  quantity: number;
  companyName: string;
}

export interface ITableShipments {
  orderId: string;
  products: string[];
  address: string;
  locality: string;
  postalCode: string;
  province: string;
  companyName: string;
  status: Status;
}

export interface ITableData {
  table: string;
  tableHeadData: string[];
  tableBodyData: ITableClients[] | ITableWarehouse[] | ITableShipments[];
}
