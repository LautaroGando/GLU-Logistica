"use client";

import { useMenuDashboard } from "@/context/MenuDashboardContext/MenuDashboardContext";
import React from "react";
import InfoAndLinks from "./InfoAndLinks/InfoAndLinks";

export const MenuResponsiveDashboard: React.FC = () => {
  const { menuDashboard, handleToggleMenuDashboard } = useMenuDashboard();

  return (
    <div>
      <button
        onClick={() => handleToggleMenuDashboard()}
        className={`relative w-[24px] h-[24px] z-40 mb-8 sm:w-[30px] sm:h-[30px] lg:hidden`}
      >
        <span
          className={`absolute block w-full h-[2px] left-0 origin-center transition-all transform ${
            menuDashboard
              ? "rotate-45 translate-y-0 bg-sc"
              : "bg-sc -translate-y-[8px]"
          }`}
        ></span>
        <span
          className={`absolute block w-full h-[2px] bg-sc left-0 transition-all ${
            menuDashboard ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`absolute block w-full h-[2px] left-0 origin-center transition-all transform ${
            menuDashboard
              ? "-rotate-45 translate-y-0 bg-sc"
              : "bg-sc translate-y-[8px]"
          }`}
        ></span>
      </button>
      <InfoAndLinks />
    </div>
  );
};

export default MenuResponsiveDashboard;
