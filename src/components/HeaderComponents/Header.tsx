"use client";
import React from "react";
import Logo from "./Logo/Logo";
import ResponsiveMenu from "./ResponsiveMenu/ResponsiveMenu";
import Links from "./Links/Links";
import Banner from "./Banner/Banner";
import { usePathname } from "next/navigation";

export const Header: React.FC = () => {
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) return;

  return (
    <>
      <div className="w-full h-[90px] flex justify-center shadow-sm sticky top-0 z-50 bg-pcSecondary shadow-tcExtra">
        <div className="w-full max-w-[1200px] h-full flex justify-between items-center px-2 sm:px-4 xl:w-[1200px] xl:p-0">
          <Logo />
          <ResponsiveMenu />
          <div className="hidden items-center gap-3 md:flex">
            <Links />
          </div>
        </div>
      </div>
      <Banner />
    </>
  );
};

export default Header;
