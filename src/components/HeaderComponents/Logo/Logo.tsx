import Image from "next/image";
import React from "react";
import Link from "next/link";

export const Logo: React.FC = () => {
  return (
 
    <Link href="/" className="flex gap-2 items-center transition-all duration-200 active:scale-[.9]">
      <Image
        className="w-[32px] h-[32px] sm:w-[50px] sm:h-[50px] md:w-[56px] md:h-[56px]"
        src="/assets/images/Header/logo.svg"
        alt="Logo del header"
        width={56}
        height={56}
        priority
      />
      <div className="text-pcPrincipal">
        <h3 className="text-2xl font-bebasNeue sm:text-3xl md:text-[34px]">LA VUELTA</h3>
        <h4 className="text-[7px] tracking-[4.6px] sm:text-[10px] sm:tracking-[4.95px] md:text-xs md:tracking-[5.3px]">
          LOGÍSTICA
        </h4>
      </div>
    </Link>
  );
};

export default Logo;
