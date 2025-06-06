"use client";
import React, { useEffect, useState } from "react";
import Logo from "./Logo/Logo";
import ResponsiveMenu from "./ResponsiveMenu/ResponsiveMenu";
import Links from "./Links/Links";
import Banner from "./Banner/Banner";
import { usePathname } from "next/navigation";
import Button from "./Button/Button";
import UserDropdown from "./UserDropdown/UserDropdown";
import { useUserStore } from "@/store";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const { token, loadUserFromStorage } = useUserStore();
  const [showUI, setShowUI] = useState(false);

  useEffect(() => {
    loadUserFromStorage();

    const timeout = setTimeout(() => {
      setShowUI(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, [loadUserFromStorage]);

  if (pathname.startsWith("/admin")) return null;

  return (
    <>
      <div className="w-full h-[90px] flex justify-center shadow-sm sticky top-0 z-50 bg-pcSecondary shadow-tcExtra">
        <div className="w-full max-w-[1200px] h-full flex justify-between items-center px-2 sm:px-4 xl:w-[1200px] xl:p-0">
          <Logo />
          <ResponsiveMenu />
          <div className="hidden items-center gap-3 lg:flex">
            <Links />
            {showUI ? (
              token ? (
                <UserDropdown />
              ) : (
                <Button />
              )
            ) : (
              <div className="w-9 h-9 rounded-full bg-neutral-200 animate-pulse" />
            )}
          </div>
        </div>
      </div>
      <Banner />
    </>
  );
};

export default Header;
