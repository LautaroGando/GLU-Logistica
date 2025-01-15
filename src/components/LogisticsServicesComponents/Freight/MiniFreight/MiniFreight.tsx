import React from "react";
import TitleService from "../../TitleService/TitleService";
import img from "@/../public/assets/images/Ilustrations/Logistics-Services/ilustration-services-Freight.svg";
import Sections from "../../Sections/Sections";
import TriangleSection from "@/components/ui/TriangleSection/TriangleSection";
import { motion } from "framer-motion";

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const MiniFreight: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 relative sm:w-[450px] sm:mx-auto md:w-[700px] lg:w-full">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={slideUp}
      >
        <TitleService
          title="Mini Fletes"
          img={img}
          description="En LA VUELTA, ofrecemos el servicio de mini fletes, pensado para aquellos traslados más pequeños pero igualmente importantes. Si necesitas enviar muebles, electrodomésticos o cualquier otro objeto voluminoso en un vehículo de menor capacidad, nuestro servicio de mini fletes es la opción perfecta. Con un enfoque personalizado y precios accesibles, nos aseguramos de que tu carga sea transportada de manera eficiente y segura."
        />
      </motion.div>
      <TriangleSection isClose={false} />
      <Sections id="miniFreight" />
    </div>
  );
};

export default MiniFreight;
