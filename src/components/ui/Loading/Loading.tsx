"use client";

import React from "react";
import { motion } from "motion/react";
import { ILoadingProps } from "./types";

export const Loading: React.FC<ILoadingProps> = ({ mode, hover }: ILoadingProps) => {
  return (
    <div className="flex gap-2 w-full h-full justify-center items-center group z-10">
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, delay: i }}
          className={`w-3 h-3 rounded-full ${
            mode === "principal"
              ? `bg-pcPrincipal ${hover && 'group-hover:bg-pcSecondary'}`
              : `bg-pcSecondary ${hover && 'group-hover:bg-pcPrincipal'}`
          }`}
          key={i}
        ></motion.div>
      ))}
    </div>
  );
};

export default Loading;
