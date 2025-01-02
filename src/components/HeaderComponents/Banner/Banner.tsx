import Image from "next/image";
import React from "react";
import BannerInfo from "./BannerInfo/BannerInfo";
import { usePathname } from "next/navigation";

export const Banner: React.FC = () => {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/" && (
        <div className="relative w-full h-[174px] -z-10 after:content-[''] after:absolute after:w-[254px] after:h-[75px] after:bg-banner after:-bottom-1 after:right-0 sm:h-[289px] sm:after:w-[465px] sm:after:h-[124px] md:h-[399px] md:after:w-[558px] md:after:h-[170px] lg:h-[525px] lg:after:w-[743.5px] lg:after:h-[224px] xl:h-[672px] xl:after:w-[929px] xl:after:h-[283px]">
          <div className="w-full h-full absolute top-0 bg-transparentColor"></div>
          <div className="w-full h-full absolute top-0 bg-bannerGradientImage flex pt-5 px-3 sm:pt-10 sm:px-4 md:pt-20 lg:pt-32">
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
