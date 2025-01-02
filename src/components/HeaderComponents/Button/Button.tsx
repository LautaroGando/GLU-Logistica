import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useMenu } from "@/context/MenuContext/MenuContext";
import Link from "next/link";

export const Button: React.FC = () => {
  const { handleCloseMenu } = useMenu();

  return (
    <Link
      href="/sign-in"
      onClick={handleCloseMenu}
      className="text-white bg-buttonGradient w-[140px] h-9 rounded-sm font-light flex justify-center items-center gap-2 border-[1px] transition-all duration-500 hover:border-pcPrincipal hover:text-pcPrincipal hover:bg-buttonHoverGradient hover:font-bold xl:w-[161px] xl:h-[41px]"
    >
      <FontAwesomeIcon icon={faUser} />
      <span>INGRESAR</span>
    </Link>
  );
};

export default Button;
