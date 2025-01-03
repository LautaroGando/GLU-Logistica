"use client";
import React from "react";
import Logo from "./Logo/Logo";
import ResponsiveMenu from "./ResponsiveMenu/ResponsiveMenu";
import Button from "./Button/Button";
import Links from "./Links/Links";
import Banner from "./Banner/Banner";

export const Header: React.FC = () => {
  return (
    <div className="w-full z-10 h-[50px] flex justify-center shadow-sm sticky top-0 bg-pcSecondary shadow-tcExtra sm:h-[62px] md:h-[89px]">
      <div className="w-full h-full flex justify-between items-center px-3 sm:px-4 xl:w-[1200px] xl:p-0">
        <Logo />
        {size && size < 1024 ? (
          <ResponsiveMenu />
          <div className="hidden items-center gap-3 lg:flex">
            <Links />
            <Button />
          </div>
        </div>
      </div>
      <Banner />
    </>
  );
};

export default Header;
