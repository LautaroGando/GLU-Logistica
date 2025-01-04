import React from "react";

const ServiceDescription = () => {
  return (
    <div
      className="
      flex flex-col justify-center items-center gap-4 text-[14px] my-[100px] w-[325px] mx-auto 
      sm:text-[16px] sm:w-[430px]
      md:text-[18px] md:w-[512px]
      xl:text-[20px] xl:w-[566px] xl:my-[150px]
      "
    >
      <p className="text-center">
        Mínimo de 25 envios semanales. Envíos dentro de las 24hs. Depósito disponible para almacenar
        tu mercadería.
      </p>
      <span
        className="
        h-[1px] w-[120px] bg-pcPrincipal
        sm:w-[168px]
        xl:w-[200px]
        "
      ></span>
    </div>
  );
};

export default ServiceDescription;
