import Title from "@/components/GeneralComponents/Title/Title";
import { ICoverageArea } from "@/interfaces/ICoverageArea";
import { coverageAreas } from "@/utils/coverage-areas";
import Image from "next/image";
import React from "react";

export const CoverageAreas: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 md:mt-20">
      <Title label="ZONAS DE COBERTURA" />
      <div className="relative sm:flex">
        <Image
          className="hidden sm:inline-block sm:w-[500px] md:w-[600px]"
          src="/assets/images/Ilustrations/Home/ilustration-map.svg"
          alt="Vector del mapa"
          width={500}
          height={500}
          priority
        />
        <Image
          className="w-[320px] mx-auto sm:absolute sm:right-0 md:w-[423px] lg:w-[546px]"
          src="/assets/images/Ilustrations/Home/ilustration-CoverageAreas.svg"
          alt="Vector de zonas de cobertura"
          width={500}
          height={500}
          priority
        />
      </div>
      <div className="flex flex-col gap-5 sm:hidden">
        {coverageAreas.map((area: ICoverageArea, i: number) => (
          <div key={i}>
            <h3 className="text-sc">
              <strong className="text-xl text-pcPrincipal">{area.area} </strong>
              {`${area.locality.join(", ")}.`}
            </h3>
          </div>
        ))}
      </div>
      <div className="gap-3 hidden sm:flex">
        <div className="w-[50px] h-[50px] bg-mapColorCABA relative after:content-['CABA'] after:absolute after:-bottom-6 after:text-center after:w-full after:text-sc after:text-sm"></div>
        <div className="w-[50px] h-[50px] bg-pcPrincipal relative after:content-['GBA1'] after:absolute after:-bottom-6 after:text-center after:w-full after:text-sc after:text-sm"></div>
        <div className="w-[50px] h-[50px] bg-mapColorGBA2 relative after:content-['GBA2'] after:absolute after:-bottom-6 after:text-center after:w-full after:text-sc after:text-sm"></div>
        <div className="w-[50px] h-[50px] bg-mapColorGBA3 relative after:content-['GBA3'] after:absolute after:-bottom-6 after:text-center after:w-full after:text-sc after:text-sm"></div>
      </div>
    </div>
  );
};

export default CoverageAreas;
