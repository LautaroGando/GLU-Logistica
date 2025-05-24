import { Modal } from "@/enum/Modal";

export interface IAdminStoreProps {
  modal: Modal | null;
  toggleModal: (type: Modal) => void;
  closeModal: () => void;
}
