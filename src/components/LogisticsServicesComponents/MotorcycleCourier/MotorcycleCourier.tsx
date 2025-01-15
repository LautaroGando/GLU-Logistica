"use client";

import Subtitle from "@/components/ui/Subtitle/Subtitle";
import React from "react";
import { useChangeService } from "@/context/ChangeServiceContext/ChangeServiceContext";
import TraditionalMessaging from "./TraditionalMessaging/TraditionalMessaging";
import LowCostMessaging from "./LowCostMessaging/LowCostMessaging";
import ChangeServiceMotorcycle from "./ChangeServiceMotorcycle/ChangeServiceMotorcycle";
import { motion } from "framer-motion";

const slideUp = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const buttonAnimation = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const MotorcycleCourier: React.FC = () => {
  const { idServiceMotorcycle } = useChangeService();

  return (
    <div className="flex flex-col gap-5">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={slideUp}
      >
        <Subtitle title="Moto mensajería" />
      </motion.div>

      <motion.div
        className="flex"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={buttonAnimation}
      >
        <ChangeServiceMotorcycle
          id={1}
          service="Mensajería Tradicional"
          isActive={idServiceMotorcycle === 1}
        />
        <ChangeServiceMotorcycle
          id={2}
          service="Mensajería Low Cost"
          isActive={idServiceMotorcycle === 2}
        />
      </motion.div>

      {idServiceMotorcycle === 1 && <TraditionalMessaging />}
      {idServiceMotorcycle === 2 && <LowCostMessaging />}
    </div>
  );
};

export default MotorcycleCourier;
