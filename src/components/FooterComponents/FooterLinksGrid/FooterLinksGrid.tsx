import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import FooterLocation from "../FooterLocation/FooterLocation";
import FooterContact from "../FooterContact/FooterContact";

const FooterLinksGrid = () => {
  return (
    <div className="sm:flex sm:justify-between sm:items-start lg:items-start">
      <div className="flex flex-col gap-2 text-[14px] sm:text-[16px] lg:text-[20px]">
        <h4 className="text-[16px] font-bold sm:text-[20px] lg:text-[24px]">Servicios</h4>
        {[
          { href: "/warehouse", text: "Depósito" },
          { href: "/logistics-services", text: "Servicios de logística" },
          { href: "/payment-methods", text: "Pago" },
        ].map((item, index) => (
          <Link href={item.href} key={index} className="group relative w-fit">
            <div className="relative w-fit transition-colors">
              <span className="group-hover:text-pcPrimary hover:text-pcSecondary/80">
                {item.text}
              </span>
              <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-pcSecondary/80 transition-all group-hover:w-full"></span>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex flex-col gap-2 text-[14px] mt-4 sm:text-[16px] lg:text-[20px] sm:mt-0">
        <h4 className="text-[16px] font-bold sm:text-[20px] lg:text-[24px]">Información</h4>

        {["¿Quiénes somos?", "Presupuestos", "Zonas de cobertura", "Contacto"].map(
          (item, index) => (
            <a href="#" key={index} className="group">
              <div className="flex items-center gap-2 relative w-fit hover:text-pcPrimary transition-colors">
                <span className="group-hover:text-pcPrimary hover:text-pcSecondary/80">{item}</span>
                <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-pcSecondary/80 transition-all group-hover:w-full"></span>
              </div>
            </a>
          )
        )}
      </div>

      <div className="text-[14px] mt-4 sm:text-[16px] lg:text-[20px] sm:mt-0">
        <h4 className="text-[16px] font-bold sm:text-[20px] lg:text-[24px]">Soporte</h4>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 group">
            <FontAwesomeIcon icon={faWhatsapp} className="text-[16px]" />
            <p>+54 011 6860-5718</p>
          </div>

          <div className="flex items-center gap-2 group">
            <FontAwesomeIcon icon={faEnvelope} className="text-[16px]" />
            <p>lavueltalogistica@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="hidde lg:flex flex-col gap-10">
        <FooterContact isMobile={false} />
        <FooterLocation isMobile={false} />
      </div>
    </div>
  );
};

export default FooterLinksGrid;
