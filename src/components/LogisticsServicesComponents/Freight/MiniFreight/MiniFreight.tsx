import React from "react";
import TitleService from "../../TitleService/TitleService";
import img from "@/../public/assets/images/Ilustrations/Logistics-Services/ilustration-services-Freight.svg";
import Sections from "../../Sections/Sections";
import TriangleSection from "@/components/GeneralComponents/TriangleSection/TriangleSection";

export const MiniFreight: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 relative sm:w-[450px] sm:mx-auto md:w-[700px] lg:w-full">
      <TitleService
        title="Mini Fletes"
        img={img}
        description="En LA VUELTA, ofrecemos el servicio de mini fletes, pensado para aquellos traslados más pequeños pero igualmente importantes. Si necesitas enviar muebles, electrodomésticos o cualquier otro objeto voluminoso en un vehículo de menor capacidad, nuestro servicio de mini fletes es la opción perfecta. Con un enfoque personalizado y precios accesibles, nos aseguramos de que tu carga sea transportada de manera eficiente y segura."
      />
      <TriangleSection isClose={false} />
      <Sections id="miniFreight" />
    </div>
  );
};

export default MiniFreight;
