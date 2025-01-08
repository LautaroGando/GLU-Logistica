"use client";

import Image from "next/image";
import React from "react";
import contactImg from "@/../public/assets/images/Ilustrations/Home/ilustration-contact.svg";
import Title from "@/components/GeneralComponents/Title/Title";
import ContactForm from "./ContactForm/ContactForm";

const Contact: React.FC = () => {
  return (
    <div>
      <Title label="CONTACTO" />
      <div className="md:max-w-[450px] mx-auto lg:max-w-[100%] lg:flex lg:justify-between">
        <div className="w-[330px] mx-auto md:w-full lg:min-w-[430px]">
          <Image src={contactImg} width={500} height={500} alt="Imagen de contacto" />
        </div>
        <div className="lg:w-full">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
