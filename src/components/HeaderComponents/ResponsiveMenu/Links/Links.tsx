import { useMenu } from "@/context/MenuContext/MenuContext";
import { ILink } from "@/interfaces/ILink";
import { links } from "@/utils/links";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../../Button/Button";

export const Links: React.FC = () => {
  const { menu, handleCloseMenu } = useMenu();

  return (
    <div
      className={`h-[100vh] fixed flex flex-col right-0 top-0 transition-all duration-500 overflow-hidden z-10 ${
        menu ? "w-full" : "w-0"
      }`}
    >
      <div className="w-full h-[35%] bg-tcPrincipal flex justify-center items-center">
        <Image className="min-w-auto h-auto" src='/assets/images/Ilustrations/Logistics-Services/ilustration-services-Freight.svg' alt="Vector del camion" width={300} height={300} />
      </div>
      <div className="w-full h-[65%] bg-pcPrincipal text-pcSecondary flex flex-col justify-between items-center py-10 font-bold sm:text-lg">
        {links.map((link: ILink, i: number) => (
          <div className="min-w-[300px] overflow-hidden text-center relative" key={i}>
            <Link onClick={handleCloseMenu} className="transition-all duration-500 after:content-['a'] after:transition-all after:duration-500 after:absolute after:w-0 after:h-[1px] after:bg-pcSecondary after:left-[50%] after:-translate-x-[50%] after:bottom-0 hover:after:w-full" href={link.href}>{link.name}</Link>
          </div>
        ))}
        <Button />
      </div>
    </div>
  );
};

export default Links;
