import Image from "next/image";
import React from "react";

const FooterLogo = () => {
  return (
    <div>
      <Image
        className="w-[120px] sm:w-[140px] md:w-[180px]"
        src="/assets/images/Header/logoWhite.svg"
        alt="Logo del header"
        width={150}
        height={150}
        priority
      />
    </div>
  );
};

export default FooterLogo;
