import React from "react";
import { motion } from "framer-motion";
import TitleService from "../../TitleService/TitleService";
import img from "@/../public/assets/images/Ilustrations/Logistics-Services/ilustration-services-MotorcycleCourier.svg";
import Sections from "../../Sections/Sections";
import TriangleSection from "@/components/GeneralComponents/TriangleSection/TriangleSection";

export const TraditionalMessaging: React.FC = () => {
  const slideInFromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="flex flex-col gap-5 relative sm:w-[450px] sm:mx-auto md:w-[700px] lg:w-full">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={slideInFromBottom}
      >
        <TitleService
          title="Mensajería tradicional"
          img={img}
          description="En LA VUELTA, nos especializamos en ofrecer soluciones de mensajería confiables y eficientes para satisfacer todas tus necesidades de transporte y gestión de documentos. Nuestro servicio de mensajería tradicional está diseñado para facilitar tus trámites diarios y/o semanales."
        />
      </motion.div>
      <TriangleSection isClose={false} />
      <Sections id="traditionalMessaging" />
    </div>
  );
};

export default TraditionalMessaging;
