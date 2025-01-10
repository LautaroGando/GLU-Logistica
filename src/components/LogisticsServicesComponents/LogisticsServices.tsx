import React from "react";
import Title from "../GeneralComponents/Title/Title";
import MotorcycleCourier from "./MotorcycleCourier/MotorcycleCourier";
import Freight from "./Freight/Freight";

const LogisticsServices = () => {
  return (
    <div className="text-sc mb-20">
      <Title label="SERVICIOS DE LOGÍSTICA" />
      <div className="flex flex-col gap-20 md:gap-32">
        <MotorcycleCourier />
        <Freight />
      </div>
    </div>
  );
};

export default LogisticsServices;
