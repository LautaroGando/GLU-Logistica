import React from "react";
import { IChangeServiceProps } from "./types";
import { useChangeService } from "@/context/ChangeServiceContext/ChangeServiceContext";

export const ChangeServiceMotorcycle: React.FC<IChangeServiceProps> = ({
  id,
  service,
  isActive,
}: IChangeServiceProps) => {
  const { handleServiceMotorcycle } = useChangeService();

  return (
    <button
      onClick={() => handleServiceMotorcycle(id)}
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

export default ChangeServiceMotorcycle;
