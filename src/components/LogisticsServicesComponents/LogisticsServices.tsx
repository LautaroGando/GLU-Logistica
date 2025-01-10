"use client";

import React from "react";
import Title from "../GeneralComponents/Title/Title";
import MotorcycleCourier from "./MotorcycleCourier/MotorcycleCourier";
import Freight from "./Freight/Freight";
import { motion } from "framer-motion";

const slideUp = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const LogisticsServices = () => {
  return (
    <div className="text-sc mb-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={slideUp}
      >
        <Title label="SERVICIOS DE LOGÍSTICA" />
      </motion.div>

      <div className="flex flex-col gap-20 md:gap-32">
        <MotorcycleCourier />
        <Freight />
      </div>
    </div>
  );
};

export default LogisticsServices;
