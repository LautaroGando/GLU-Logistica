import { ILink } from "@/interfaces/ILink";
import { links } from "@/utils/links";
import Link from "next/link";
import React from "react";

export const Links: React.FC = () => {
  return (
    <div className="text-pcPrincipal font-light flex gap-3 xl:text-lg">
      {links.map((link: ILink, i: number) => (
        <div className="relative" key={i}>
          <Link
            className="transition-all duration-500 hover:text-tcPrincipal hover:font-bold after:content-[''] after:transition-all after:duration-500 after:absolute after:w-0 after:h-[1px] after:bg-pcPrincipal after:left-[50%] after:-translate-x-[50%] after:bottom-0 hover:after:w-full hover:after:bg-tcPrincipal"
            href={link.href}
          >
            {link.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Links;
