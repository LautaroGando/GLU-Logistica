import Subtitle from "@/components/GeneralComponents/Subtitle/Subtitle";
import React from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
import img2 from "@/../public/assets/images/Ilustrations/Logistics-Services/ilustration-services-Freight.svg";

const Freight = () => {
  return (
    <div>
      <Subtitle title="Fletes" />
      <div className="md:flex md:items-start md:justify-between">
        <ServiceCard
          title="mini fletes"
          subtitle="Traslados de paquetería mediana y grande, muebles medianos, etc."
          img={img2}
          descriptions={[]}
          hasMarginTop={true}
        />

        <ServiceCard
          title="fletes"
          subtitle="Servicio de paquetería grande, mudanzas y ayudantes que se requieran."
          img={img2}
          descriptions={[]}
          hasMarginTop={true}
        />
      </div>
    </div>
  );
};

export default Freight;
