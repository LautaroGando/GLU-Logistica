export interface IShipment {
  id: string;
  orderId: string;
  address: string;
  locality: string;
  postalCode: string;
  province: string;
  company: string;
  status: ShipmentStatus;
  customer: ICustomer;
  shipmentProducts: IShipmentProduct[];
}

export type ShipmentStatus =
  | "POR EMPAQUETAR"
  | "EMPAQUETADO"
  | "DESPACHADO"
  | "EN CAMINO"
  | "ENTREGADO";


export interface ICustomer {
  id: string;
  fullName: string;
  email: string;
  dni: string;
  address: string;
  phone: string;
  birthdate: string;
  company: string;
  role: "CLIENTE";
}

export interface IShipmentProduct {
  id: string;
  quantity: number;
  product: IProduct;
}

export interface IProduct {
  id: string;
  product: string;
  quantity: number;
  company: string;
}
