import React from "react";
import { motion } from "framer-motion";

export const BannerInfo: React.FC = () => {
  return (
    <div className="text-pcSecondary flex flex-col sm:gap-3 md:gap-5 lg:gap-10 lg:px-4 lg:w-[1200px] lg:mx-auto xl:px-0">
      <motion.h1
        className="font-bebasNeue text-[22px] sm:text-[32px] sm:text-4xl lg:text-6xl xl:text-[64px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Soluciones logísticas diseñadas
        <br /> para tu negocio.
      </motion.h1>
      <motion.ul
        className="text-xs list-disc pl-4 flex flex-col gap-1 font-light sm:text-lg sm:pl-5 md:text-2xl md:pl-6 lg:text-[28px] lg:pl-7 lg:gap-3 xl:text-[32px] xl:gap-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0 }}
      >
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          Cobertura confiable
        </motion.li>
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          Entregas rápidas y seguras
        </motion.li>
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
        >
          Adaptados a tus necesidades
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default BannerInfo;
