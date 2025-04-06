"use client";

import Logo from "@/components/HeaderComponents/Logo/Logo";
import useCurrentPath from "@/hooks/useCurrentPath";
import {
  faTruckFast,
  faUser,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const HeaderAdmin: React.FC = () => {
  const currentPath = useCurrentPath();

  const adminNavLinks: { name: string; path: string; icon: IconDefinition }[] =
    [
      { name: "Usuarios", path: "users", icon: faUser },
      { name: "Paquetería", path: "parcel", icon: faTruckFast },
    ];

  return (
    <div className="w-full bg-admin-primary shadow-lg pb-[14px] pt-[9px]">
      <div className="mx-auto px-3 sm:px-4 lg:max-w-[1400px]">
        <div className="w-max mb-[25px] lg:-[37px] xl:mb-[46px]">
          <Logo lightMode />
        </div>
        <div className="flex items-center justify-center gap-[26px] sm:justify-start lg:gap-[46px]">
          {adminNavLinks.map((item, i) => {
            const isSelected = currentPath.includes(item.path);
            return (
              <Link
                key={i}
                href={`/admin/${item.path}`}
                className={`flex gap-[7px] duration-200 transition-all ${
                  isSelected
                    ? "text-admin-green hover:text-admin-green/60"
                    : "text-admin-letterColor hover:text-admin-letterColor/60"
                }`}
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  aria-label={item.name}
                  className={`size-[18px] ${item.name === "Paquetería" ? "lg:size-[24px]" : "lg:size-[20px]"}`}
                />
                <p className="text-[16px] lg:text-[18px]">{item.name}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeaderAdmin;
