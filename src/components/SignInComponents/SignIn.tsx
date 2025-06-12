"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Title from "../ui/Title/Title";
import FormSignIn from "./FormSignIn/FormSignIn";

export const SignIn: React.FC = () => {
  return (
    <div className="py-10 flex flex-col gap-5 mx-auto max-w-[450px] lg:flex-row lg:mx-0 lg:max-w-full lg:justify-evenly">
      <motion.div
        className="flex justify-center"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          className="w-[200px] sm:w-[320px] md:w-[450px] lg:w-[400px] xl:w-[500px]"
          src="/assets/images/Ilustrations/Login/ilustration-login.svg"
          alt="Vector del login"
          width={500}
          height={500}
          priority
        />
      </motion.div>

      <motion.div
        className="flex flex-col justify-center gap-5"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 1 }}
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Title label="¿Ya sos cliente?" />
          <h3 className="font-semibold text-pcPrincipal md:text-xl">Inicia sesión:</h3>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <FormSignIn />
        </motion.div>
      </motion.div>
    </div>
  );
};
