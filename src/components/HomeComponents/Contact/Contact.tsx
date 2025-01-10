"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import contactImg from "@/../public/assets/images/Ilustrations/Home/ilustration-contact.svg";
import Title from "@/components/GeneralComponents/Title/Title";
import ContactForm from "./ContactForm/ContactForm";

const Contact: React.FC = () => {
  return (
    <div>
      <motion.div
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 50, opacity: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Title label="CONTACTO" />
      </motion.div>

      <div className="md:max-w-[450px] mx-auto lg:max-w-[100%] lg:flex lg:justify-between">
        <motion.div
          className="w-[330px] mx-auto md:w-full lg:min-w-[430px]"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 50, opacity: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Image src={contactImg} width={500} height={500} alt="Imagen de contacto" />
        </motion.div>

        <motion.div
          className="lg:w-full"
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 50, opacity: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
