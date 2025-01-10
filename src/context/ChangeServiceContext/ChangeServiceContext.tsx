"use client";

import React, { createContext, useContext, useState } from "react";
import { IChangeServiceContextProps } from "./types";

const ChangeServiceContext = createContext<IChangeServiceContextProps | null>(
  null
);

export const ChangeServiceProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [idServiceMotorcycle, setIdServiceMotorcycle] = useState<number>(1);
  const [idServiceFreight, setIdServiceFreight] = useState<number>(1);

  const handleServiceMotorcycle = (id: number) => setIdServiceMotorcycle(id);
  const handleServiceFreight = (id: number) => setIdServiceFreight(id);

  return (
    <ChangeServiceContext.Provider
      value={{
        idServiceMotorcycle,
        handleServiceMotorcycle,
        idServiceFreight,
        handleServiceFreight,
      }}
    >
      {children}
    </ChangeServiceContext.Provider>
  );
};

export const useChangeService = () => {
  const context = useContext(ChangeServiceContext);

  if (context === null)
    throw new Error(
      "El ChangeServiceContext debe ser utilizado dentro del Provider."
    );

  return context;
};
