"use client";

import InfoHome from "@/components/ui/InfoHome/InfoHome";
import Title from "@/components/ui/Title/Title";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const vectorAnimation = {
  hidden: { opacity: 0, y: 50, rotate: 180 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 180,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export const Budgest: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 relative lg:h-[600px] lg:flex-row-reverse">
      <div className="flex flex-col gap-5 lg:w-[50%]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
          }}
        >
          <Title label="PRESUPUESTOS" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.7 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
          }}
        >
          <InfoHome index={1} />
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
        }}
      >
        <Image
          className="hidden lg:inline-block xl:w-[526px]"
          src="/assets/images/Ilustrations/Home/ilustration-budgets.svg"
          alt="Vector de presupuestos"
          width={500}
          height={500}
          priority
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.7 }}
        variants={vectorAnimation}
        className="w-[74px] h-[74px] bg-aboutUsGradientBorder absolute -bottom-24 left-0 rotate-180 hidden md:block lg:w-[285px] lg:h-[285px]"
      ></motion.div>
    </div>
  );
};

export default Budgest;
