import React from "react";
import { IFooterContactProps } from "./types";

const FooterContact: React.FC<IFooterContactProps> = ({ isMobile }) => {
  return (
    <div className={`text-[14px] ${isMobile ? "mt-6 sm:mt-0 lg:hidden" : "hidden lg:block"}`}>
      <h4 className="text-[16px] font-bold sm:text-[20px] lg:text-[24px]">Estar Conectados</h4>
      <div>
        <input
          type="text"
          placeholder="Correo electrónico..."
          className="p-1 outline-none text-sc  sm:text-[16px] sm:p-2 "
        />
        <input
          type="submit"
          value="Suscribirse"
          className="bg-sc p-1 transition-all duration-200 cursor-pointer hover:bg-tcSecondary sm:text-[16px] sm:p-2"
        />
      </div>
    </div>
  );
};

export default FooterContact;
