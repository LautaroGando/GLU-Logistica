import Image from "next/image";
import React from "react";
import IServiceCardProps from "./types";

const ServiceCard: React.FC<IServiceCardProps> = ({
  title,
  subtitle,
  img,
  descriptions,
  hasMarginTop = false,
}) => {
  return (
    <div className="w-[260px] mx-auto sm:w-[343px] lg:w-[399px] xl:w-[450px]">
      <div>
        <div
          className={`
            flex justify-center items-center w-full mx-auto bg-pcPrincipal pt-1 relative h-[46px] mb-6 select-none
            ${hasMarginTop ? "mt-6 md:mt-0" : ""}
            sm:h-[55px] md:h-[60px] lg:h-[67px] xl:h-[76px] xl:mb-[40px]
          `}
          style={{
            clipPath: "polygon(10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%, 0 50%)",
          }}
        >
          <h4
            className="
              font-bebasNeue text-[19px] text-pcSecondary leading-[1] 
              sm:text-[26px] md:text-[28px] lg:text-[32px] xl:text-[36px]
            "
          >
            {title}
          </h4>
        </div>

        <div className="text-center text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] xl:text-[20px]">
          <Image
            src={img}
            width={500}
            height={500}
            alt={`Imagen de ${title}`}
            className="select-none w-[240px] mx-auto sm:w-[300px] md:w-[320px] lg:w-[360px] xl:w-[460px]"
          />
          <h5 className="font-bold mt-4 text-[16px] sm:text-[20px] sm:mt-[35px] md:text-[22px] md:mt-[37px] xl:text-[24px] xl:mt-[46px]">
            {subtitle}
          </h5>

          {descriptions &&
            descriptions.map((desc, index) => (
              <p key={index} className="mt-2 xl:mt-3">
                {desc}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
