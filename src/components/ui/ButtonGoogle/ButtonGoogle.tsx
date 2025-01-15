import React from "react";
import { IButtonGoogleProps } from "./types";
import Image from "next/image";

export const ButtonGoogle: React.FC<IButtonGoogleProps> = ({ text }: IButtonGoogleProps) => {
  return (
    <button
      className="flex gap-3 h-[36px] w-full items-center justify-center border-[1px] border-tcSecondary text-sc transition-all duration-500 hover:border-transparent hover:shadow-md sm:h-[46px]"
      type="submit"
    >
      <Image
        className="w-[36px] h-[36px] sm:w-[45px] sm:h-[45px]"
        src="/assets/icons/google.svg"
        alt="Icono de google"
        width={200}
        height={200}
      />
      {text}
    </button>
  );
};

export default ButtonGoogle;
