"use client"

import React, { createContext, useContext, useEffect, useState } from "react";
import { ITokenContextProps } from "./types";

const TokenContext = createContext<ITokenContextProps | undefined>(undefined);

export const TokenContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);
  
  useEffect(()=>{
    const storageToken = localStorage.getItem("token");
    if (storageToken) setToken(storageToken);
  },[])

  return <TokenContext.Provider value={{ token }}>{children}</TokenContext.Provider>;
};

export const useToken = () => {
  const context = useContext(TokenContext);
  if (!context)
    throw new Error("El TokenContext debe ser utilizado dentro del TokenContextProvider.");

  return context;
};
