"use client";

import React from "react";
import { userSidebarLinks } from "@/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export const UserSidebarNav = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex flex-col mt-6">
        {userSidebarLinks.map(({ href, icon, label }) => {
          const isActive = pathname === href;

          return (
            <li key={href} className="relative mt-4">
              <Link
                href={href}
                className={clsx(
                  "flex items-center h-[70px] px-4 rounded-l-[8px] transition-colors duration-200",
                  isActive
                    ? "bg-pcPrincipal/10 text-pcPrincipal cursor-default"
                    : "hover:bg-pcPrincipal/10"
                )}
              >
                <FontAwesomeIcon icon={icon} className="w-5 h-auto" />
                <span className="text-lg ml-3">{label}</span>
              </Link>

              {isActive && (
                <div className="absolute top-0 right-0 w-1 h-[70px] bg-pcPrincipal rounded-[8px]" />
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
