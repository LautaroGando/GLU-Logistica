"use client";

import React, { createContext, useContext, useState } from "react";
import { IMenuDashboardContextProps } from "./types";

const MenuDashboardContext = createContext<IMenuDashboardContextProps | null>(
  null
);

export const MenuDashboardProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [menuDashboard, setMenuDashboard] = useState<boolean>(false);

  const handleToggleMenuDashboard = () => setMenuDashboard(!menuDashboard);

  const handleCloseMenuDashboard = () => setMenuDashboard(false);

  return (
    <MenuDashboardContext.Provider
      value={{
        menuDashboard,
        handleToggleMenuDashboard,
        handleCloseMenuDashboard,
      }}
    >
      {children}
    </MenuDashboardContext.Provider>
  );
};

export const useMenuDashboard = () => {
  const context = useContext(MenuDashboardContext);

  if (context === null)
    throw new Error(
      "El MenuDashboardContext debe ser utilizado dentro del Provider."
    );

  return context;
};
