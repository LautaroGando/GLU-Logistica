import React from "react";
import TitleService from "../../TitleService/TitleService";
import img from "@/../public/assets/images/Ilustrations/Logistics-Services/ilustration-services-Freight.svg";
import Sections from "../../Sections/Sections";
import TriangleSection from "@/components/ui/TriangleSection/TriangleSection";

export const FreightSection: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 relative sm:w-[450px] sm:mx-auto md:w-[700px] lg:w-full">
      <TitleService
        title="Fletes"
        img={img}
        description="En GLU, nos especializamos en ofrecer servicios de fletes para cubrir todas tus necesidades de transporte de mercancías. Ya sea que necesites mover productos de gran volumen o simplemente un traslado más grande, nuestro equipo se encarga de hacer el proceso fácil y seguro. Con una flota adaptada a diferentes cargas y tiempos de entrega flexibles, garantizamos que tu mercancía llegue a tiempo y en perfectas condiciones."
      />
      <TriangleSection isClose={false} />
      <Sections id="freight" />
    </div>
  );
};

export default FreightSection;
