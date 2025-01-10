import React from "react";
import { ITitleServiceProps } from "./types";
import Image from "next/image";

export const TitleService: React.FC<ITitleServiceProps> = ({
  title,
  img,
  description,
}: ITitleServiceProps) => {
  return (
    <div className="flex flex-col gap-5 items-center">
      <div
        className="min-w-[300px] h-[38px] text-pcSecondary bg-pcPrincipal text-[19px] font-bebasNeue flex items-center justify-center leading-[1] sm:h-[46px] sm:text-2xl md:min-w-[400px] md:h-14"
        style={{
          clipPath:
            "polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)",
        }}
      >
        <h3>{title}</h3>
      </div>
      <Image
        className="w-[240px] sm:w-[300px] lg:w-[400px]"
        src={img}
        alt="Ilustracion"
        width={500}
        height={500}
      />
      <p className="text-sm text-sc text-center sm:text-base md:text-lg lg:w-[800px]">{description}</p>
      <div className="w-[80%] h-[1px] bg-tcExtra/20"></div>
    </div>
  );
};

export default TitleService;
