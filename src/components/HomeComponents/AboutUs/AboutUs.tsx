import Title from "@/components/GeneralComponents/Title/Title";
import Image from "next/image";
import React from "react";
import Timeline from "./Timeline/Timeline";
import InfoHome from "@/components/GeneralComponents/InfoHome/InfoHome";

export const AboutUs: React.FC = () => {
  return (
    <div id="about-us" className="flex flex-col gap-5 -mt-10 relative lg:flex-row">
      <div className="flex flex-col gap-5 lg:w-[50%]">
        <Title label="¿Quiénes somos?" />
        <div className="w-[74px] h-[74px] bg-aboutUsGradientBorder absolute top-8 right-0 hidden md:block lg:w-[285px] lg:h-[285px]"></div>
        <InfoHome index={0} />
        <div className="relative -z-10 mx-auto w-[200px] after:content-[''] after:absolute after:max-w-[500px] after:w-full after:h-[5px] after:bg-aboutUsGradientImage after:-bottom-2 sm:w-[400px] sm:after:-bottom-4 sm:after:h-[11px] lg:w-[528px] lg:after:-bottom-5 lg:after:h-[16px] lg:mx-0 xl:w-[624px] xl:after:h-[26px] xl:after:-bottom-8">
          <Image
            src="/assets/images/Home/img.svg"
            alt="Imagen del about us"
            width={500}
            height={500}
            priority
          />
        </div>
      </div>
      <Timeline />
    </div>
  );
};

export default AboutUs;
