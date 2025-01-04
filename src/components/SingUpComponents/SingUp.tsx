import Image from "next/image";
import React from "react";
import registerImg from "@/../public/assets/images/Ilustrations/Register/ilustration-register.svg";
import Title from "../GeneralComponents/Title/Title";
import FormSingUp from "./FormSingUp/FormSingUp";
import ButtonGoogle from "../GeneralComponents/ButtonGoogle/ButtonGoogle";
import ChangeLinkForm from "../GeneralComponents/ChangeLinkForm/ChangeLinkForm";

const SingUp = () => {
  return (
    <main>
      <div className="lg:flex items-center justify-between">
        <div
          className="
          w-[200px] mx-auto lg:mx-0
          sm:w-[320px]
          md:w-[450px]
          xl:w-[500px]
          "
        >
          <Image
            src={registerImg}
            width={500}
            height={500}
            alt="Imagen de Register"
            className="w-full"
          />
        </div>

        <div className="flex flex-col gap-5 lg:w-[510px] xl:w-[611px]">
          <Title label="REGISTRATE" />
          <FormSingUp />
          <span className="flex items-center justify-center gap-3 text-tcSecondary font-light before:content-[''] before:flex-1 before:h-[1px] before:bg-tcSecondary after:content-[''] after:flex-1 after:h-[1px] after:bg-tcSecondary">
            o
          </span>
          <ButtonGoogle text="Iniciar sesión con google" />
          <ChangeLinkForm
            text="¿Ya tienes una cuenta?"
            href="/sign-in"
            link="Inicia sesión aquí."
          />
        </div>
      </div>
    </main>
  );
};

export default SingUp;
