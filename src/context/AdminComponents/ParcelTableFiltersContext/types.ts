import { IPackageDto } from "@/dto/IPackageDto";
import { IPackage } from "@/interfaces/IParcel";

export interface IParcelTableFiltersProps {
  loading: boolean;
  error: string | null;
  packages: IPackage[] | null;
  fetchAllPackages: () => void;
  setParcelFilter: (text: string) => void;
  setParcelOrder: (text: string) => void;
  setParcelSearchBar: (text: string) => void;
  handleCreatePackage: (values: IPackageDto) => void;
  handleDeletePackage: (packageId: string) => void;
  handleEditPackage: (packageId: string, value: IPackageDto) => void;
}

export default IParcelTableFiltersProps;
