import React from "react";
import { IChangeServiceProps } from "./types";
import { useChangeService } from "@/context/ChangeServiceContext/ChangeServiceContext";

export const ChangeServiceFreight: React.FC<IChangeServiceProps> = ({
  id,
  service,
  isActive,
}: IChangeServiceProps) => {
  const { handleServiceFreight } = useChangeService();

  return (
    <button
      onClick={() => handleServiceFreight(id)}
      className={`w-full h-9 border-[1px] text-xs ${
        isActive
          ? "bg-pcPrincipal text-pcSecondary font-bold"
          : "border-tcExtra/20"
      } sm:h-12 sm:text-sm lg:text-base`}
    >
      {service}
    </button>
  );
};

export default ChangeServiceFreight;
