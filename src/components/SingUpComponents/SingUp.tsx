"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import registerImg from "@/../public/assets/images/Ilustrations/Register/ilustration-register.svg";
import Title from "../GeneralComponents/Title/Title";
import FormSingUp from "./FormSingUp/FormSingUp";
import ButtonGoogle from "../GeneralComponents/ButtonGoogle/ButtonGoogle";
import ChangeLinkForm from "../GeneralComponents/ChangeLinkForm/ChangeLinkForm";

const SingUp: React.FC = () => {
  return (
    <main>
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-evenly ">
        <motion.div
          className="w-[200px] mx-auto sm:w-[320px] md:w-[450px] lg:sticky lg:top-[100px] lg:mx-0 lg:mb-20 lg:mt-20 xl:w-[500px]"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={registerImg}
            width={500}
            height={500}
            alt="Imagen de Register"
            className="w-full"
          />
        </motion.div>

        <motion.div
          className="flex flex-col gap-5 mx-auto w-full max-w-[450px] lg:max-w-[320px] xl:max-w-[340px]"
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
            <Title label="REGISTRATE" />
          </motion.div>

          <FormSingUp />

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
            <ButtonGoogle text="Registrarse con google" />
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <ChangeLinkForm
              text="¿Ya tenés una cuenta?"
              href="/sign-in"
              link="Inicia sesión aquí."
            />
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
};

export default SingUp;
