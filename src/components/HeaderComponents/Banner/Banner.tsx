import Image from "next/image";
import React from "react";
import BannerInfo from "./BannerInfo/BannerInfo";
import { usePathname } from "next/navigation";

export const Banner: React.FC = () => {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/" && (
        <div className="relative w-full h-[70vh] -z-10 select-none">
          <div className="w-full h-full absolute top-0 bg-transparentColor"></div>
          <div className="w-full h-full absolute top-0 bg-bannerGradientImage flex items-center px-3 sm:px-4">
            <BannerInfo />
          </div>
          <Image
            className="h-full object-cover"
            src="/assets/images/Home/banner.svg"
            alt="Banner"
            width={1920}
            height={1000}
            priority
          />
        </div>
      )}
    </>
  );
};

export default Banner;
