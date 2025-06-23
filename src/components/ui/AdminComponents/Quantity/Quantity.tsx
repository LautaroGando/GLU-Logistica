import React from "react";
import { IQuantityProps } from "./types";

export const Quantity: React.FC<IQuantityProps> = ({
  label,
  quantity,
}: IQuantityProps) => {
  return (
    <p className="text-sc">
      {label}: <span className="text-pcPrincipal font-bold">{quantity}</span>
    </p>
  );
};
