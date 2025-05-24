import React from "react";
import { ITitleFormProps } from "./types";

export const TitleForm: React.FC<ITitleFormProps> = ({
  label,
}: ITitleFormProps) => {
  return <h2 className="text-pcPrincipal font-semibold text-xl">{label}</h2>;
};
