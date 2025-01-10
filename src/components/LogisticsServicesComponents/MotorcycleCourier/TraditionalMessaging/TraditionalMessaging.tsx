import React from "react";
import TitleService from "../../TitleService/TitleService";
import img from "@/../public/assets/images/Ilustrations/Logistics-Services/ilustration-services-MotorcycleCourier.svg";
import Sections from "../../Sections/Sections";
import TriangleSection from "@/components/GeneralComponents/TriangleSection/TriangleSection";

export const TraditionalMessaging: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 relative sm:w-[450px] sm:mx-auto md:w-[700px] lg:w-full">
      <TitleService
        title="Mensajería tradicional"
        img={img}
        description="En LA VUELTA, nos especializamos en ofrecer soluciones de mensajería confiables y eficientes para satisfacer todas tus necesidades de transporte y gestión de documentos. Nuestro servicio de mensajería tradicional está diseñado para facilitar tus trámites diarios y/o semanales."
      />
      <TriangleSection isClose={false} />
      <Sections id="traditionalMessaging" />
    </div>
  );
};

export default TraditionalMessaging;
