"use client";

import Subtitle from "@/components/GeneralComponents/Subtitle/Subtitle";
import { useChangeService } from "@/context/ChangeServiceContext/ChangeServiceContext";
import React from "react";
import ChangeServiceFreight from "./ChangeServiceFreight/ChangeServiceFreight";
import MiniFreight from "./MiniFreight/MiniFreight";
import FreightSection from "./FreightSection/FreightSection";

export const Freight: React.FC = () => {
  const { idServiceFreight } = useChangeService();

  return (
    <div className="flex flex-col gap-5">
      <Subtitle title="Fletes" />
      <div className="flex">
        <ChangeServiceFreight
          id={1}
          service="Mini Fletes"
          isActive={idServiceFreight === 1}
        />
        <ChangeServiceFreight
          id={2}
          service="Fletes"
          isActive={idServiceFreight === 2}
        />
      </div>
      {idServiceFreight === 1 && <MiniFreight />}
      {idServiceFreight === 2 && <FreightSection />}
    </div>
  );
};

export default Freight;
