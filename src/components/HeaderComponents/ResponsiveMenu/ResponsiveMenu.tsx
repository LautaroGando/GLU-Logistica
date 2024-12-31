import { useMenu } from "@/context/MenuContext/MenuContext";
import React from "react";
import Links from "./Links/Links";

export const ResponsiveMenu: React.FC = () => {
  const { menu, handleToggleMenu } = useMenu();

  return (
    <>
      <button
        onClick={() => handleToggleMenu()}
        className={`relative w-[24px] h-[24px] z-10 sm:w-[30px] sm:h-[30px]`}
      >
        <span
          className={`absolute block w-full h-[2px] left-0 origin-center transition-all transform ${
            menu ? "rotate-45 translate-y-0 bg-pcSecondary" : "bg-sc -translate-y-[8px]"
          }`}
        ></span>
        <span
          className={`absolute block w-full h-[2px] bg-sc left-0 transition-all ${
            menu ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`absolute block w-full h-[2px] left-0 origin-center transition-all transform ${
            menu ? "-rotate-45 translate-y-0 bg-pcSecondary" : "bg-sc translate-y-[8px]"
          }`}
        ></span>
      </button>
      <Links />
    </>
  );
};

export default ResponsiveMenu;
