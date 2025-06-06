import { IShipment } from "@/interfaces";

export interface IShipmentState {
  shipments: IShipment[];
  deliveredShipments: IShipment[]
  isLoading: boolean;
  error: string | null;
  fetchShipments: (company: string) => Promise<void>;
  clear: () => void;
}