"use client";

import { motion } from "framer-motion"; // Importar motion
import Image from "next/image";
import React from "react";
import Title from "../GeneralComponents/Title/Title";
import FormSignIn from "./FormSignIn/FormSignIn";
import ChangeLinkForm from "../GeneralComponents/ChangeLinkForm/ChangeLinkForm";
import ButtonGoogle from "../GeneralComponents/ButtonGoogle/ButtonGoogle";

export const SignIn: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 mx-auto max-w-[450px] lg:flex-row lg:mx-0 lg:max-w-full lg:justify-evenly">
      <motion.div
        className="flex justify-center" // Centra horizontalmente la imagen
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
        className="flex flex-col gap-5"
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
          <Title label="INICIAR SESIÓN" />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <FormSignIn />
        </motion.div>

        <motion.span
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex items-center justify-center gap-3 text-tcSecondary font-light before:content-[''] before:flex-1 before:h-[1px] before:bg-tcSecondary after:content-[''] after:flex-1 after:h-[1px] after:bg-tcSecondary"
        >
          o
        </motion.span>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <ButtonGoogle text="Iniciar sesión con google" />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <ChangeLinkForm text="¿No tenés una cuenta?" href="/sign-up" link="Registrate acá." />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SignIn;
