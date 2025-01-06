import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import footerMapImg from "@/../public/assets/images/Footer/map.svg";
import Image from "next/image";
import React from "react";
import { IFooterLocationProps } from "./type";

const FooterLocation: React.FC<IFooterLocationProps> = ({ isMobile }) => (
  <div className={`${isMobile ? "lg:hidden" : "hidden lg:flex lg:flex-col"}`}>
    <h4 className="text-[16px] font-bold sm:text-[20px] lg:text-[24px]">Localidad</h4>
    <div className="flex items-center gap-2 mb-4 lg:mb-0">
      <FontAwesomeIcon icon={faBuilding} className="text-[40px] size-[40px]" />
      <div className="flex flex-col text-[11px]">
        <a className="leading-[1.3]">Buenos Aires, Argentina</a>
        <a className="leading-[1.3]">Av. Juan B. Justo 9100 CP-1408</a>
        <a className="leading-[1.3]">Liniers, Barrio Kennedy</a>
      </div>
    </div>
    <a
      href="https://www.google.com/maps/place/Av.+Juan+Bautista+Justo+9100,+C1408AKT+Cdad.+Aut%C3%B3noma+de+Buenos+Aires/@-34.6342598,-58.5182322,17z/data=!4m6!3m5!1s0x95bcc8370e4efe09:0x5880e022332d1a76!8m2!3d-34.6342157!4d-58.5177172!16s%2Fg%2F11cs7j87dx?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
      target="_blank"
      title="Localidad de Logística"
      className="mt-2 w-[206px] sm:w-[276px] group"
    >
      <Image
        src={footerMapImg}
        width={500}
        height={500}
        alt="Imagen de mapa"
        className="w-[206px] sm:w-[276px] rounded-md transition-all duration-300 
        group-hover:scale-[1.015] group-hover:shadow-lg"
      />
    </a>
  </div>
);

export default FooterLocation;
