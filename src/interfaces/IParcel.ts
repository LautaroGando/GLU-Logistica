import { IStatePackage } from "./IStatePackage";
import { IUser } from "./IUser";

export interface IPackage {
  id: string;
  packageNumber: string;
  clientName: string;
  companyName: string;
  receivedDate: string;
  emissionDate?: string;
  deliveryDate?: string;
  status: IStatePackage;
  updateStatus: () => void;
  role: "Cliente" | "Empresa";
  user: IUser | null;
}
