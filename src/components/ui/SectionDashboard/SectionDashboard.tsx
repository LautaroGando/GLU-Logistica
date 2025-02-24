import React from "react";
import { ISectionDashboardProps } from "./types";

export const SectionDashboard: React.FC<ISectionDashboardProps> = ({
  label,
}: ISectionDashboardProps) => {
  return (
    <div className="flex gap-2">
      <h2 className="text-lg sm:text-xl">{label}</h2>
      <div
        className="
          w-0 h-0 border-y-[7px] border-y-transparent border-l-[9px] border-pcPrincipal mt-[8px]
          sm:border-y-[8px] sm:border-l-[10px] sm:mt-[6px]
        "
      ></div>
    </div>
  );
};

export default SectionDashboard;
