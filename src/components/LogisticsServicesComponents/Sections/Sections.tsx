import Subtitle from "@/components/GeneralComponents/Subtitle/Subtitle";
import { textLogisticsServices } from "@/utils/texts-logistics-services";
import Image from "next/image";
import React from "react";
import { ISectionsProps } from "./types";
import TriangleSection from "@/components/GeneralComponents/TriangleSection/TriangleSection";
import { motion } from "framer-motion";

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const Sections: React.FC<ISectionsProps> = ({ id }: ISectionsProps) => {
  const filterSections = textLogisticsServices.filter((text) => text.id === id);

  return (
    <div className="flex flex-col gap-20 relative lg:pb-52">
      {filterSections.map((text, i) => (
        <motion.div
          key={i}
          className={`flex flex-col items-center gap-5 lg:flex-row lg:justify-between ${
            i % 2 === 0 ? "" : "lg:flex-row-reverse"
          }`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
          variants={slideUp}
        >
          <div className="flex flex-col items-center gap-10 lg:items-start lg:w-1/2 lg:gap-0">
            <Subtitle title={text.title} center />
            <div className="block lg:hidden">
              <Image
                className="w-[240px] sm:w-[300px] sm:mx-auto"
                src={text.img}
                alt="Imagen de sección"
                width={500}
                height={500}
                priority
              />
            </div>
            <p className="text-center text-sc text-sm sm:text-base md:text-lg lg:text-xl lg:w-full lg:text-left">
              {text.text}
            </p>
          </div>
          <div className="hidden lg:w-1/2 lg:flex lg:justify-center">
            <Image
              className="w-[240px] sm:w-[300px] lg:w-[350px]"
              src={text.img}
              alt="Imagen de sección"
              width={500}
              height={500}
              priority
            />
          </div>
        </motion.div>
      ))}
      <TriangleSection isClose />
    </div>
  );
};

export default Sections;
