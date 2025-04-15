"use client";
import { companiesData } from "@/data/companiesData/companiesData";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export const Companies: React.FC = () => {
  return (
    <div className="w-full h-[200px] overflow-hidden flex items-center">
      <Marquee
        speed={50}
        gradient={true}
        pauseOnHover={true}
        gradientWidth={5}
        gradientColor="#FAFAFA"
      >
        {companiesData.map((_, i) => {
          return (
            <div key={i} className="w-[130px] h-[130px] flex items-center justify-center mx-5">
              <Image
                src={companiesData[i]}
                alt="Logo de la companía."
                width={130}
                height={130}
              />
            </div>
          );
        })}
      </Marquee>
    </div>
  );
};

export default Companies;
