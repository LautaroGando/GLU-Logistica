"use client";

import Subtitle from "@/components/GeneralComponents/Subtitle/Subtitle";
import React from "react";
import { useChangeService } from "@/context/ChangeServiceContext/ChangeServiceContext";
import TraditionalMessaging from "./TraditionalMessaging/TraditionalMessaging";
import LowCostMessaging from "./LowCostMessaging/LowCostMessaging";
import ChangeServiceMotorcycle from "./ChangeServiceMotorcycle/ChangeServiceMotorcycle";

export const MotorcycleCourier: React.FC = () => {
  const { idServiceMotorcycle } = useChangeService();

  return (
    <div className="flex flex-col gap-5">
      <Subtitle title="Moto mensajería" />
      <div className="flex">
        <ChangeServiceMotorcycle
          id={1}
          service="Mensajería Tradicional"
          isActive={idServiceMotorcycle === 1}
        />
        <ChangeServiceMotorcycle
          id={2}
          service="Mensajería Low Cost"
          isActive={idServiceMotorcycle === 2}
        />
      </div>
      {idServiceMotorcycle === 1 && <TraditionalMessaging />}
      {idServiceMotorcycle === 2 && <LowCostMessaging />}
    </div>
  );
};

export default MotorcycleCourier;
