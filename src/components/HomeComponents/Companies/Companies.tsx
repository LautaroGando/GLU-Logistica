"use client";
import { companiesData } from "@/data/companiesData/companiesData";
import { ICompaniesData } from "@/data/companiesData/types";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import Marquee from "react-fast-marquee";

export const Companies: React.FC = () => {
  const [isHovered, setIsHovered] = useState<number | null>(null);

  return (
    <div className="w-full flex items-center mt-20">
      <Marquee
        speed={50}
        gradient={true}
        pauseOnHover={true}
        gradientWidth={5}
        gradientColor="#FAFAFA"
        className="overflow-hidden"
      >
        {companiesData.map((data: ICompaniesData, i) => {
          return (
            <Link
              key={i}
              href={data.href}
              target="_blank"
              className={clsx(
                "w-[230px] h-[130px] flex items-center justify-center mx-5 cursor-pointer transition-all duration-300",
                isHovered === data.id && "scale-110",
                data.id === 2 ? "mt-10" : data.id === 3 ? "mt-6" : data.id === 4 ? 'mt-5' : data.id === 5 && 'mt-7'
              )}
              onMouseEnter={() => setIsHovered(data.id)}
              onMouseLeave={() => setIsHovered(null)}
              onTouchStart={() => setIsHovered(data.id)}
              onTouchEnd={() => setIsHovered(null)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="150"
                viewBox="0 0 150 76"
                fill="none"
              >
                <path
                  d={data.img}
                  fill={isHovered === data.id ? "#0C1177" : "#CACACA"}
                />
              </svg>
            </Link>
          );
        })}
      </Marquee>
    </div>
  );
};

export default Companies;
