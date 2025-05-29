import { Status } from "@/enum/Status";
import {
  IFormDataClients,
  IFormDataShipments,
  IFormDataWarehouse,
} from "./types";

export const formDataClients: IFormDataClients = {
  fullName: "",
  email: "",
  dni: "",
  address: "",
  phone: "",
  birthdate: "",
  company: "",
};

export const formDataWarehouse: IFormDataWarehouse = {
  product: "",
  quantity: 1,
  company: "",
};

export const formDataShipments: IFormDataShipments = {
  customerId: "",
  orderId: "",
  products: [],
  address: "",
  locality: "",
  postalCode: "",
  province: "",
  company: "",
  status: Status.FOR_PACKAGING,
};
