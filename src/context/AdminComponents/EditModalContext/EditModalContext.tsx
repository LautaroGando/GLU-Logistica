"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import IEditModalContextProps from "./types";
import { IPackage } from "@/interfaces/IParcel";

const EditModalContext = createContext<IEditModalContextProps | undefined>(undefined);

export const EditModalProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hideOverlay, setHideOverlay] = useState(false);
  const [packageData, setPackageData] = useState<IPackage | null>(null);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => {
    setHideOverlay(true);
    setIsModalOpen(false);
    setTimeout(() => setHideOverlay(false), 200);
  };

  return (
    <EditModalContext.Provider
      value={{ isModalOpen, openModal, closeModal, hideOverlay, setPackageData, packageData }}
    >
      {children}
    </EditModalContext.Provider>
  );
};

export const useEditModal = () => {
  const context = useContext(EditModalContext);
  if (!context) {
    throw new Error("useEditModal debe usarse dentro de EditModalProvider");
  }
  return context;
};
