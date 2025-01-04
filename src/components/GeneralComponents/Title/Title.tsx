import React from "react";
import ITitleProps from "./types";

const Title: React.FC<ITitleProps> = ({ label }) => {
  return (
    <div
      className="
        flex gap-2 mt-8 mb-[30px]
        sm:gap-4 sm-[50px]
        md:gap-6
        xl:gap-7
      "
    >
      <h2
        className="
          font-bebasNeue text-pcPrincipal text-[30px] leading-[1]
          sm:text-[44px]
          md:text-[60px]
          xl:text-[64px]
        "
      >
        {label}
      </h2>
      <div
        className="
          w-0 h-0 border-y-[10px] border-y-transparent border-l-[12px] border-pcPrincipal mt-[4px]
          sm:border-y-[15px] sm:border-l-[18px] sm:mt-[6px]
          md:border-y-[20px] md:border-l-[26px] md:mt-[8px]
          xl:border-y-[21px] xl:border-l-[28px]
        "
      ></div>
    </div>
  );
};

export default Title;
