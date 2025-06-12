import React from "react";
import { IButtonSelectProps } from "./types";

export const ButtonSelect: React.FC<IButtonSelectProps> = ({
  label,
}: IButtonSelectProps) => {
  return <button className="w-[160px] text-pcPrincipal">{label}</button>;
};

export default ButtonSelect;
