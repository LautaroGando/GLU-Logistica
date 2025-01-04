import React from "react";
import Title from "../GeneralComponents/Title/Title";
import Freight from "./Freight/Freight";
import MotorcycleCourier from "./MotorcycleCourier/MotorcycleCourier";
import ServiceDescription from "./ServiceDescription/ServiceDescription";
import FleetOptions from "./FleetOptions/FleetOptions";

const LogisticsServices = () => {
  return (
    <main className="text-sc">
      <Title label="SERVICIOS DE LOGÍSTICA" />

      <MotorcycleCourier />

      <ServiceDescription />

      <Freight />

      <FleetOptions />
    </main>
  );
};

export default LogisticsServices;
