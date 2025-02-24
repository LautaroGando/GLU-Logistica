import { useMenuDashboard } from "@/context/MenuDashboardContext/MenuDashboardContext";
import React from "react";
import Info from "./Info/Info";
import LinksDashboard from "./LinksDashboard/LinksDashboard";

export const InfoAndLinks: React.FC = () => {
  const { menuDashboard } = useMenuDashboard();

  return (
    <div
      className={`h-full flex justify-center items-center absolute transition-all duration-300 z-30 ease-in-out overflow-hidden bg-pcSecondary left-0 top-0 ${
        menuDashboard ? "w-full md:w-[370px] md:border-r-[1px] md:border-tcExtra/20" : "w-0"
      } lg:w-[370px] lg:relative lg:border-r-[1px] lg:border-tcExtra/20`}
    >
      <div className="flex flex-col gap-5 items-center">
        <Info />
        <div className="w-[120px] h-[1px] bg-pcPrincipal"></div>
        <LinksDashboard />
      </div>
    </div>
  );
};

export default InfoAndLinks;
