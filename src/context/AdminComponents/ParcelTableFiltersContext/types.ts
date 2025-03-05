import { IPackage } from "@/interfaces/IParcel";

export interface IParcelTableFiltersProps {
  packages: IPackage[];
  setParcelFilter: (text: string) => void;
  setParcelOrder: (text: string) => void;
  setParcelSearchBar: (text: string) => void;
}

export default IParcelTableFiltersProps;
