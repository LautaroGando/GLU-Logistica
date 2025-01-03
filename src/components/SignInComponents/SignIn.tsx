import Image from "next/image";
import React from "react";
import Title from "../GeneralComponents/Title/Title";
import FormSignIn from "./FormSignIn/FormSignIn";
import ChangeLinkForm from "../GeneralComponents/ChangeLinkForm/ChangeLinkForm";
import ButtonGoogle from "../GeneralComponents/ButtonGoogle/ButtonGoogle";

export const SignIn: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 mx-auto max-w-[450px] lg:flex-row lg:mx-0 lg:max-w-full lg:justify-evenly">
      <Image
        className="w-[200px] self-center sm:w-[320px] md:w-[450px] lg:w-[400px] xl:w-[500px]"
        src="/assets/images/Ilustrations/Login/ilustration-login.svg"
        alt="Vector del login"
        width={500}
        height={500}
        priority
      />
      <div className="flex flex-col gap-5">
        <Title label="INICIAR SESIÓN" />
        <FormSignIn />
        <span className="flex items-center justify-center gap-3 text-tcSecondary font-light before:content-[''] before:flex-1 before:h-[1px] before:bg-tcSecondary after:content-[''] after:flex-1 after:h-[1px] after:bg-tcSecondary">
          o
        </span>
        <ButtonGoogle text="Iniciar sesión con google" />
        <ChangeLinkForm
          text="¿No tenés una cuenta?"
          href="/sign-up"
          link="Registrate acá."
        />
      </div>
    </div>
  );
};

export default SignIn;
