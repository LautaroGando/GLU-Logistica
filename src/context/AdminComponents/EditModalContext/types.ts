import { IPackage } from "@/interfaces/IParcel";

export interface IEditModalContextProps {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  setPackageData: (data: IPackage | null) => void;
  packageData: IPackage | null; 
  hideOverlay: boolean;
}

export default IEditModalContextProps;
