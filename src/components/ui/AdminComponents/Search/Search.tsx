"use client";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname } from "next/navigation";
import React from "react";
import { ISearchProps } from "./types";

export const Search: React.FC<ISearchProps> = ({
  name,
  id,
  placeholder,
  path,
}: ISearchProps) => {
  const pathname = usePathname();

  if (!(pathname === path)) return null;

  return (
    <div className="md:ml-[120px]">
      <div className="relative w-[325px] h-[46px] rounded-[50px] bg-tcExtra/20 transition-[border] text-pcSecondary flex justify-between items-center gap-3 pl-3 mx-auto border-2 border-transparent focus-within:border-pcSecondary sm:w-[400px] lg:w-[640px]">
        <FontAwesomeIcon
          className="max-w-[25px] text-[25px]"
          icon={faMagnifyingGlass}
          width={25}
          height={25}
        />
        <div className="w-[1px] h-[25px] bg-pcPrincipal"></div>
        <input
          onChange={() => {}}
          className="w-full rounded-tr-[50px] rounded-br-[50px] h-full bg-transparent text-pcSecondary outline-none placeholder:text-pcSecondary"
          type="text"
          name={name}
          id={id}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};
