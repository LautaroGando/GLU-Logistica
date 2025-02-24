"use client";

import { motion } from "framer-motion";
import Title from "@/components/ui/Title/Title";
import { ICoverageArea } from "@/interfaces/ICoverageArea";
import { coverageAreas } from "@/utils/coverage-areas";
import Image from "next/image";
import React from "react";

export const CoverageAreas: React.FC = () => {
  return (
    <div className="flex flex-col gap-5">
      <motion.div
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 50, opacity: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.7 }}
      >
        <Title label="ZONAS DE COBERTURA" />
      </motion.div>

      <div className="relative sm:flex">
        <motion.div
          className="hidden sm:inline-block sm:w-[500px] md:w-[600px]"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 50, opacity: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.7 }}
        >
          <Image
            src="/assets/images/Ilustrations/Home/ilustration-map.svg"
            alt="Vector del mapa"
            width={500}
            height={500}
            priority
          />
        </motion.div>

        <motion.div
          className="w-[320px] mx-auto sm:absolute sm:right-0 md:w-[423px] lg:w-[546px]"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 50, opacity: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.7 }}
        >
          <Image
            src="/assets/images/Ilustrations/Home/ilustration-CoverageAreas.svg"
            alt="Vector de zonas de cobertura"
            width={500}
            height={500}
            priority
          />
        </motion.div>
      </div>

      <div className="flex flex-col gap-5 sm:hidden">
        {coverageAreas.map((area: ICoverageArea, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.7 }}
          >
            <h3 className="text-sc">
              <strong className="text-xl text-pcPrincipal">{area.area} </strong>
              {`${area.locality.join(", ")}.`}
            </h3>
          </motion.div>
        ))}
      </div>

      <div className="gap-3 hidden sm:flex">
        <div className="w-[50px] h-[50px] bg-mapColorCABA relative after:content-['CABA'] after:absolute after:-bottom-6 after:text-center after:w-full after:text-sc after:text-sm"></div>
        <div className="w-[50px] h-[50px] bg-mapColorGBA1 relative after:content-['GBA1'] after:absolute after:-bottom-6 after:text-center after:w-full after:text-sc after:text-sm"></div>
        <div className="w-[50px] h-[50px] bg-mapColorGBA2 relative after:content-['GBA2'] after:absolute after:-bottom-6 after:text-center after:w-full after:text-sc after:text-sm"></div>
        <div className="w-[50px] h-[50px] bg-mapColorGBA3 relative after:content-['GBA3'] after:absolute after:-bottom-6 after:text-center after:w-full after:text-sc after:text-sm"></div>
      </div>
    </div>
  );
};

export default CoverageAreas;
