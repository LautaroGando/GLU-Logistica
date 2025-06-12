import { IShipment } from "@/interfaces";

export interface IShipmentState {
  shipments: IShipment[];
  deliveredShipments: IShipment[];
  isLoading: boolean;
  error: string | null;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  paymentSearchTerm: string;
  setPaymentSearchTerm: (term: string) => void;
  fetchShipments: (company: string) => Promise<void>;
  clear: () => void;
}
