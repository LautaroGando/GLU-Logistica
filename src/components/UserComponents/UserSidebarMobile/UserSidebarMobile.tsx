"use client";

import { userSidebarLinks } from "@/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const UserSidebarMobile = () => {
  const pathname = usePathname();

  return (
    <nav className="grid grid-cols-2 gap-3 pb-2 pt-6">
      <ul className="contents">
        {userSidebarLinks.map(({ href, icon, label }) => {
          const isActive = pathname === href;

          return (
            <li key={href}>
              <Link
                href={href}
                className={`flex flex-col items-center justify-center gap-2 p-3 sm:py-4 rounded-md text-sm font-medium transition-colors ${
                  isActive ? "bg-pcPrincipal text-white" : "bg-gray-200 text-sc hover:bg-gray-300"
                }`}
              >
                <FontAwesomeIcon icon={icon} className="size-5 sm:size-6" />
                <span className="text-[13px] sm:text-[16px]">{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
