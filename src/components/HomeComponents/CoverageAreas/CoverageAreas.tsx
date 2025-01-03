import Title from "@/components/GeneralComponents/Title/Title";
import { ICoverageArea } from "@/interfaces/ICoverageArea";
import { coverageAreas } from "@/utils/coverage-areas";
import Image from "next/image";
import React from "react";

export const CoverageAreas: React.FC = () => {
  return (
    <div id="coverage-areas" className="flex flex-col gap-5 md:mt-20">
      <Title label="ZONAS DE COBERTURA" />
      <div className="relative sm:flex">
        <Image
          className="hidden sm:inline-block sm:w-[600px] md:w-[800px]"
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
    </div>
  );
};

export default CoverageAreas;
