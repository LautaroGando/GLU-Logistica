"use client";
import Image from "next/image";
import React from "react";
import isoLogo from "../../../../public/assets/images/Header/IsoLogo.svg";
import { linksData } from "@/data/adminData/linksData/linksData";
import { ILinkData } from "@/data/adminData/linksData/types";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export const Menu = () => {
  const pathname = usePathname();

  return (
    <div className="w-full z-50 h-[80px] overflow-auto md:w-[120px] md:h-[90vh] bg-pcSecondary shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] md:shadow-md md:rounded-tr-[30px] fixed bottom-0 left-0 sm:px-5 md:px-0 md:pt-5 flex md:flex-col justify-between">
      <div className="flex md:flex-col items-center gap-5">
        <Image
          className="hidden sm:block"
          src={isoLogo}
          alt="Logo"
          width={50}
          height={50}
        />
        <h3 className="font-semibold text-pcPrincipal hidden sm:block">
          GLU Admin
        </h3>
        <div className="hidden sm:w-[3px] sm:h-full md:w-full md:h-[2px] sm:block bg-pcPrincipal"></div>
        <div className="w-full flex md:flex-col">
          {linksData.map((link: ILinkData, i: number) => (
            <Link
              key={i}
              className={clsx(
                "flex flex-col w-[80px] h-[80px] items-center gap-2 p-3 transition-all duration-300 md:w-full",
                pathname === link.href
                  ? "text-pcSecondary bg-pcPrincipal"
                  : "text-sc hover:bg-pcPrincipal/10"
              )}
              href={link.href}
            >
              <FontAwesomeIcon
                className="max-w-[30px] text-[30px]"
                icon={link.icon}
                width={30}
                height={30}
              />
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <Link
        href="/"
        className="flex gap-2 min-h-[80px] items-center justify-center text-admin-red px-5"
      >
        Salir
        <FontAwesomeIcon
          className="max-w-[18px] text-[18px]"
          icon={faArrowRightFromBracket}
          width={18}
          height={18}
        />
      </Link>
    </div>
  );
};
