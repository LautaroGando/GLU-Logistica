import { Status } from "@/enum/Status";

export interface IFormDataClients {
  fullName: string;
  email: string;
  dni: string;
  address: string;
  phone: string;
  birthdate: string;
  company: string;
}

export interface IFormDataWarehouse {
  id: string;
  product: string;
  quantity: number;
  company: string;
}

export interface IFormDataShipments {
  orderId: string;
  products: string[];
  address: string;
  locality: string;
  postalCode: string;
  province: string;
  company: string;
  status: Status;
}
