"use client";

import React from "react";
import { motion } from "motion/react";
import { ILoadingProps } from "./types";

export const LoadingSpinner: React.FC<ILoadingProps> = ({ mode = "principal", hover }) => {
  const baseColor = mode === "principal" ? "border-pcPrincipal" : "border-pcSecondary";
  const hoverColor =
    mode === "principal"
      ? hover && "group-hover:border-pcSecondary"
      : hover && "group-hover:border-pcPrincipal";

  return (
    <div className="flex justify-center items-center h-[60vh] w-full group z-10">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className={`w-10 h-10 border-4 border-t-transparent rounded-full ${baseColor} ${hoverColor}`}
      />
    </div>
  );
};

export default LoadingSpinner;
