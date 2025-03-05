"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import ICreateModalContextType from "./types";

const CreateModalContext = createContext<ICreateModalContextType | undefined>(undefined);

export const CreateModalProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hideOverlay, setHideOverlay] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => {
    setHideOverlay(true);
    setIsModalOpen(false);
    setTimeout(() => setHideOverlay(false), 200);
  };

  return (
    <CreateModalContext.Provider value={{ isModalOpen, openModal, closeModal, hideOverlay }}>
      {children}
    </CreateModalContext.Provider>
  );
};

export const useCreateModal = () => {
  const context = useContext(CreateModalContext);
  if (!context) {
    throw new Error("useCreateModal debe usarse dentro de CreateModalProvider");
  }
  return context;
};
