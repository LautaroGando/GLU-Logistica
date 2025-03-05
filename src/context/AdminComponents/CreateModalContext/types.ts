export interface ICreateModalContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  hideOverlay: boolean;
}

export default ICreateModalContextType;
