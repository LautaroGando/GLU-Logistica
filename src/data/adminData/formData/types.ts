import { Shipment } from "@/enum/Shipment";
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
  product: string;
  quantity: number;
  company: string;
}

export interface IFormDataShipments {
  customerId: string;
  orderId: string;
  products: { depositId: string; quantity: number }[];
  address: string;
  locality: string;
  postalCode: string;
  province: string;
  company: string;
  status: Status;
  deliveryDate?: string | null;
  shipmentType: Shipment | string;
  price: number;
}
