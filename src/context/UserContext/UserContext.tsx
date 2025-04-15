"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { IUserContextProps } from "./types";
import { IUser } from "@/interfaces/IUser";
import { getAllUsers } from "@/services/users";

const UserContext = createContext<IUserContextProps | undefined>(undefined);

export const UserContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<IUser | null>(null);
  const [users, setUsers] = useState<IUser[] | null>(null);

  useEffect(() => {
    const handleFetchUsers = async () => {
      try {
        setLoading(true);
        const allUsers = await getAllUsers();
        setUsers(allUsers);
      } catch (err) {
        console.error("Error al obtener los usuarios:", err);
        setError("No se pudieron cargar los usuarios.");
      } finally {
        setLoading(false);
      }
    };

    const getUserFromStorage = () => {
      const userStorage = localStorage.getItem("user");
      if (userStorage) {
        try {
          const parsedUser: IUser = JSON.parse(userStorage);
          setUser(parsedUser);
        } catch (err) {
          console.log("Error al parsear el usuario desde localStorage", err);
          setUser(null);
        }
      }
    };

    handleFetchUsers();
    getUserFromStorage();
  }, []);

  return (
    <UserContext.Provider value={{ loading, error, user, users }}>{children}</UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context)
    throw new Error("El UserContext debe ser utilizado dentro del UserContextProvider.");

  return context;
};
