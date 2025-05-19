"use client";

import { createContext, useContext, useState } from "react";
import { IUser } from "@/interfaces/IUser";

interface UsersSelectModalContextProps {
  isModalOpen: boolean;
  selectedUser: IUser | null;
  openModal: () => void;
  closeModal: () => void;
  selectUser: (user: IUser) => void;
}

const UsersSelectModalContext = createContext<UsersSelectModalContextProps | undefined>(undefined);

export const UsersSelectModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<IUser | null>(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const selectUser = (user: IUser) => setSelectedUser(user);

  return (
    <UsersSelectModalContext.Provider value={{ isModalOpen, selectedUser, openModal, closeModal, selectUser }}>
      {children}
    </UsersSelectModalContext.Provider>
  );
};

export const useUsersSelectModal = () => {
  const context = useContext(UsersSelectModalContext);
  if (!context) {
    throw new Error("useUsersSelectModal debe usarse dentro de UsersSelectModalProvider");
  }
  return context;
};
