import Image from "next/image";
import React from "react";
import logo from "../../../../public/assets/images/Header/logoWhite.svg";

export const Header = () => {
  return (
    <div className="w-full h-[250px] top-0 left-0 bg-pcPrincipal py-5">
      <div className="w-full flex justify-center">
        <Image src={logo} alt="Logo" width={200} height={200} />
      </div>
    </div>
  );
};
