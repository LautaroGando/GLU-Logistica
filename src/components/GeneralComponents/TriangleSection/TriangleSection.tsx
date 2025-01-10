"use client";

import React from "react";
import { ITriangleSectionProps } from "./types";
import { motion } from "framer-motion";

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const slideUpClose = {
  hidden: { opacity: 0, y: 50, rotate: 180 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 180, // Solo rota si isClose es true
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const TriangleSection: React.FC<ITriangleSectionProps> = ({
  isClose,
}: ITriangleSectionProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={isClose ? slideUpClose : slideUp} // Elige la variante según isClose
      className={`w-[74px] h-[74px] bg-aboutUsGradientBorder absolute ${
        !isClose ? "top-0 right-0" : "left-0 -bottom-24"
      } hidden md:block lg:w-[285px] lg:h-[285px]`}
    ></motion.div>
  );
};

export default TriangleSection;
