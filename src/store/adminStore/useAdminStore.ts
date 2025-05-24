import { create } from "zustand";
import { IAdminStoreProps } from "./types";
import { Modal } from "@/enum/Modal";

export const useAdminStore = create<IAdminStoreProps>((set) => ({
  /* MODAL */
  modal: null,
  toggleModal: (type: Modal) =>
    set((state) => (state.modal === null ? { modal: type } : { modal: null })),
  closeModal: () => set(() => ({ modal: null })),
}));
