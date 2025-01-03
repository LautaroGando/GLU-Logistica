import React from "react";
import { IInfoHomeProps } from "./types";
import { infoHome } from "@/utils/info-home";

export const InfoHome: React.FC<IInfoHomeProps> = ({
  index,
}: IInfoHomeProps) => {
  return (
    <p className="text-sm text-sc font-light sm:text-base lg:text-xl xl:text-2xl">
      {infoHome[index]}
    </p>
  );
};

export default InfoHome;
