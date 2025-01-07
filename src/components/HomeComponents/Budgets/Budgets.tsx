import InfoHome from "@/components/GeneralComponents/InfoHome/InfoHome";
import Title from "@/components/GeneralComponents/Title/Title";
import Image from "next/image";
import React from "react";

export const Budgest: React.FC = () => {
  return (
    <div className="flex flex-col gap-5 relative lg:h-[600px] lg:flex-row-reverse">
      <div className="flex flex-col gap-5 lg:w-[50%]">
        <Title label="PRESUPUESTOS" />
        <Image
          className="w-[260px] mx-auto sm:w-[430px] lg:hidden"
          src="/assets/images/Ilustrations/Home/ilustration-budgets.svg"
          alt="Vector de presupuestos"
          width={500}
          height={500}
          priority
        />
        <InfoHome index={1} />
      </div>
      <Image
        className="hidden lg:inline-block xl:w-[526px]"
        src="/assets/images/Ilustrations/Home/ilustration-budgets.svg"
        alt="Vector de presupuestos"
        width={500}
        height={500}
        priority
      />

      <div className="w-[74px] h-[74px] bg-aboutUsGradientBorder absolute -bottom-24 left-0 rotate-180 hidden md:block lg:w-[285px] lg:h-[285px]"></div>
    </div>
  );
};

export default Budgest;
