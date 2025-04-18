"use client";

import { motion } from "framer-motion";
import Title from "@/components/ui/Title/Title";
import Image from "next/image";
import React from "react";
import Timeline from "./Timeline/Timeline";
import InfoHome from "@/components/ui/InfoHome/InfoHome";

const slideInFromBottom = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export const AboutUs: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 -mt-10 relative lg:flex-row lg:items-center">
      <div className="flex flex-col gap-5 lg:w-[50%]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
          variants={slideInFromBottom}
        >
          <Title label="¿Quiénes somos?" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
          variants={slideInFromBottom}
          className="w-[74px] h-[74px] bg-aboutUsGradientBorder absolute top-8 right-0 hidden md:block lg:w-[285px] lg:h-[285px]"
        ></motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
          variants={slideInFromBottom}
        >
          <InfoHome index={0} />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={slideInFromBottom}
          className="relative -z-10 mx-auto w-[200px] sm:w-[400px] lg:w-[528px] lg:mx-0 xl:w-[624px]"
        >
          <Image
            src="/assets/gif/truck.gif"
            alt="Imagen del about us"
            width={500}
            height={500}
            priority
          />
        </motion.div>
      </div>
      <Timeline />
    </div>
  );
};

export default AboutUs;
