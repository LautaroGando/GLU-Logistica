import Subtitle from "@/components/GeneralComponents/Subtitle/Subtitle";
import React from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import img1 from "@/../public/assets/images/Ilustrations/Logistics-Services/ilustration-services-MotorcycleCourier.svg";

const MotorcycleCourier = () => {
  return (
    <div>
      <Subtitle title="Moto mensajerÍa" />
      <div className="md:flex md:items-start md:justify-between">
        <ServiceCard
          title="Mensajería tradicional"
          subtitle="TRAMITES - GESTIONES ADMINISTRATIVAS - REPARTOS"
          img={img1}
          descriptions={[
            "Servicio de puerta a puerta, día y horario que necesites.",
            "Eventual o programado.",
          ]}
        />

        <ServiceCard
          title="Mensajería low cost"
          subtitle="LOGÍSTICA PARA TU E-COMMERCE"
          img={img1}
          descriptions={[]}
          hasMarginTop={true}
        />
      </div>
    </div>
  );
};

export default MotorcycleCourier;
