"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { IUserContextProps } from "./types";
import { IUser } from "@/interfaces/IUser";

const UserContext = createContext<IUserContextProps | undefined>(undefined);

export const UserContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
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
  }, []);

  return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context)
    throw new Error("El UserContext debe ser utilizado dentro del UserContextProvider.");

  return context;
};
