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
    <div className="w-[120px] h-[90vh] bg-pcSecondary shadow-md rounded-tr-[30px] fixed bottom-0 left-0 py-5 flex flex-col justify-between">
      <div className="flex flex-col items-center gap-5">
        <Image src={isoLogo} alt="Logo" width={50} height={50} />
        <h3 className="font-semibold text-pcPrincipal">GLU Admin</h3>
        <div className="w-full h-[2px] bg-pcPrincipal"></div>
        <div className="w-full">
          {linksData.map((link: ILinkData, i: number) => (
            <Link
              key={i}
              className={clsx(
                "flex flex-col items-center gap-2 p-3 transition-all duration-300",
                pathname === link.href
                  ? "text-pcSecondary bg-pcPrincipal"
                  : "text-sc"
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
      <Link href="/" className="flex gap-2 items-center justify-center text-admin-red">
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
