import React from "react";

const FleetOptions = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center my-[100px] md:my-[150px]">
      <span
        className="
      h-[1px] w-[260px] bg-tcExtra
      sm:w-[360px]
      md:w-[420px]
      lg:w-[480px]
      xl:w-[640px]
      "
      ></span>

      <div
        className="
      flex flex-col items-center justify-center gap-2 mt-6
      sm:w-[360px]
      md:w-[420px]
      lg:w-[480px]
      xl:w-[640px]
      "
      >
        <h4
          className="
        text-[16px] text-pcPrincipal font-bold
        sm:text-[20px]
        md:text-[21px]
        lg:text-[22px]
        xl:text-[24px]
        "
        >
          FLOTAS A DISPOSICIÓN:
        </h4>
        <p
          className="
        text-[14px] 
        sm:text-[16px]
        md:text-[17px]
        lg:text-[18px]
        xl:text-[20px]
        "
        >
          MOTO - AUTO - CAMIONETA TIPO KANGOO (MINIFLETE) - CAMIONETA TIPO JUMPER/RODEO (FLETE)
        </p>
        <span
          className="
          w-[120px] h-[1px] bg-pcPrincipal mt-2
          sm:w-[140px]
          md:w-[150px]
          lg:w-[160px]
          xl:w-[200px]
          "
        ></span>
      </div>
    </div>
  );
};

export default FleetOptions;
