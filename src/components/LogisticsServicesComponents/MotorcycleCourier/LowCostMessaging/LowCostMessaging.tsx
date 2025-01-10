import React from "react";
import TitleService from "../../TitleService/TitleService";
import img from "@/../public/assets/images/Ilustrations/Logistics-Services/ilustration-services-MotorcycleCourier.svg";
import Sections from "../../Sections/Sections";
import TriangleSection from "@/components/GeneralComponents/TriangleSection/TriangleSection";

export const LowCostMessaging: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 relative sm:w-[450px] sm:mx-auto md:w-[700px] lg:w-full">
      <TitleService
        title="Mensajería Low Cost"
        img={img}
        description="En LA VUELTA, te ofrecemos soluciones de mensajería low cost para que puedas enviar documentos y paquetes sin gastar de más. Nuestro servicio está diseñado para brindar una opción económica, rápida y confiable, asegurando que tus envíos lleguen a su destino con la mejor relación calidad-precio. Ideal para quienes buscan eficiencia y ahorro en sus gestiones diarias."
      />
      <TriangleSection isClose={false} />
      <Sections id="lowCostMessaging" />
    </div>
  );
};

export default LowCostMessaging;
