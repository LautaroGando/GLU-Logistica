import { ITableBaseProps } from "@/components/ui/UserComponents/UserTableBase/types";
import { IProduct, IShipment } from "@/interfaces";

export interface IDepositState {
  products: IProduct[];
  shipments: IShipment[];
  table: ITableBaseProps | null;
  isLoading: boolean;
  error: string | null;
  fetchDepositData: (company: string) => Promise<void>;
  clear: () => void;
}
