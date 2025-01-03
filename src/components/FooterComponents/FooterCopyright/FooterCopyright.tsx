import React from "react";

const FooterCopyright = () => {
  const CurrentYear = new Date().getFullYear();
  return (
    <div className="flex flex-col justify-center items-center text-[14px] sm:text-[16px] lg:text-[20px] ">
      <a>© Todos los derechos reservados 2020-{CurrentYear}</a>
      <a>Diseñado por Código Total</a>
    </div>
  );
};

export default FooterCopyright;
