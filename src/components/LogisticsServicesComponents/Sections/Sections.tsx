import Subtitle from "@/components/GeneralComponents/Subtitle/Subtitle";
import { textLogisticsServices } from "@/utils/texts-logistics-services";
import Image from "next/image";
import React from "react";
import { ISectionsProps } from "./types";
import TriangleSection from "@/components/GeneralComponents/TriangleSection/TriangleSection";

export const Sections: React.FC<ISectionsProps> = ({ id }: ISectionsProps) => {
  const filterSections = textLogisticsServices.filter((text) => text.id === id);

  return (
    <div className="flex flex-col gap-20 relative lg:pb-52">
      {filterSections.map((text, i) => (
        <div
          key={i}
          className={`flex flex-col items-center gap-5 lg:flex-row lg:justify-between ${i % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
        >
          <div className="flex flex-col items-center gap-10 lg:items-start lg:w-1/2 lg:gap-0">
            <Subtitle title={text.title} center />
            <div className="block lg:hidden">
              <Image
                className="w-[240px] sm:w-[300px] sm:mx-auto"
                src={text.img}
                alt="Imagen de sección"
                width={500}
                height={500}
                priority
              />
            </div>
            <p className="text-center text-sc text-sm sm:text-base md:text-lg lg:text-xl lg:w-full lg:text-left">
              {text.text}
            </p>
          </div>
          <div className={`hidden lg:w-1/2 lg:flex lg:${i % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
            <Image
              className="w-[240px] sm:w-[300px] lg:w-[350px]"
              src={text.img}
              alt="Imagen de sección"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>
      ))}
      <TriangleSection isClose />
    </div>
  );
};

export default Sections;
