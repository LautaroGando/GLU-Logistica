"use client";

import React from "react";
import FooterLogo from "./FooterLogo/FooterLogo";
import FooterLinksGrid from "./FooterLinksGrid/FooterLinksGrid";
import FooterLocation from "./FooterLocation/FooterLocation";
import FooterContact from "./FooterContact/FooterContact";
import FooterSocialMedia from "./FooterSocialMedia/FooterSocialMedia";
import FooterCopyright from "./FooterCopyright/FooterCopyright";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return;

  return (
    <footer className="text-pcSecondary bg-pcPrincipal px-3 pt-11 pb-6 sm:p-5 lg:py-10">
      <div className="lg:max-w-[1200px] lg:mx-auto">
        <FooterLogo />

        <div className="flex flex-col gap-4 mt-4 sm:mt-6 lg:mt-14">
          <FooterLinksGrid />

          <div className="sm:flex sm:justify-between sm:mt-10 md:justify-start md:gap-20">
            <FooterLocation isMobile={true} />
            <FooterContact isMobile={true} />
          </div>

          <FooterSocialMedia />

          <span className="h-[1px] w-[100%] bg-pcSecondary"></span>

          <FooterCopyright />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
