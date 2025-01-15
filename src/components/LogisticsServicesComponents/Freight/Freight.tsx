"use client";

import Subtitle from "@/components/ui/Subtitle/Subtitle";
import { useChangeService } from "@/context/ChangeServiceContext/ChangeServiceContext";
import React from "react";
import ChangeServiceFreight from "./ChangeServiceFreight/ChangeServiceFreight";
import MiniFreight from "./MiniFreight/MiniFreight";
import FreightSection from "./FreightSection/FreightSection";
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

export const Freight: React.FC = () => {
  const { idServiceFreight } = useChangeService();

  return (
    <div className="flex flex-col gap-5">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={slideUp}
      >
        <Subtitle title="Fletes" />
      </motion.div>

      <motion.div
        className="flex"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={buttonAnimation}
      >
        <ChangeServiceFreight id={1} service="Mini Fletes" isActive={idServiceFreight === 1} />
        <ChangeServiceFreight id={2} service="Fletes" isActive={idServiceFreight === 2} />
      </motion.div>

      {idServiceFreight === 1 && <MiniFreight />}
      {idServiceFreight === 2 && <FreightSection />}
    </div>
  );
};

export default Freight;
