"use client";

import { ISection } from "@/interfaces/ISection";
import { sections } from "@/utils/sections";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const slideUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const Sections: React.FC = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col items-center gap-10 sm:flex-row sm:justify-between">
        {sections.map((section: ISection, i: number) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={slideUp}
          >
            <Link
              className="w-[250px] h-[100px] flex flex-col text-sc justify-center items-center gap-2 border-[1px] border-transparentColor/10 rounded-lg transition-all duration-300 hover:bg-pcPrincipal hover:text-pcSecondary hover:shadow-md hover:shadow-transparentColor/20 sm:h-[150px] lg:h-[200px]"
              href={section.href}
            >
              <FontAwesomeIcon
                className="text-3xl max-w-[37px] sm:max-w-[45px] md:text-4xl lg:text-6xl xl:max-w-[75px]"
                icon={section.icon}
              />
              <h3 className="text-xs text-center md:text-sm lg:text-base">{section.name}</h3>
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="w-[70%] h-[1px] bg-tcExtra/20 mx-auto"></div>
    </div>
  );
};

export default Sections;
