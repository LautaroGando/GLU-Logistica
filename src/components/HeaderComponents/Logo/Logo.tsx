import Image from "next/image";
import React from "react";
import Link from "next/link";
import { ILogoProps } from "./types";

export const Logo: React.FC<ILogoProps> = ({ lightMode }: ILogoProps) => {
  return (
    <Link
      href="/"
      className="flex gap-2 items-center transition-all duration-200 active:scale-[.9]"
    >
      <Image
        className="w-[80px] sm:w-[120px] md:w-[140px]"
        src={
          lightMode
            ? "/assets/images/Header/logoWhite.svg"
            : "/assets/images/Header/logo.svg"
        }
        alt="Logo del header"
        width={150}
        height={150}
        priority
      />
    </Link>
  );
};

export default Logo;
