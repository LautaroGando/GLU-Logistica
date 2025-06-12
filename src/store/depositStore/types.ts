import { ITableBaseProps } from "@/components/ui/UserComponents/UserTableBase/types";
import { IProduct, IShipment } from "@/interfaces";

export interface IDepositState {
  products: IProduct[];
  shipments: IShipment[];
  table: ITableBaseProps | null;
  isLoading: boolean;
  error: string | null;
  searchProductTerm: string;
  setSearchProductTerm: (term: string) => void;
  fetchDepositData: (company: string) => Promise<void>;
  clear: () => void;
}
