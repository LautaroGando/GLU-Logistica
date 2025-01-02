import React from "react";
import { IButtonFormProps } from "./types";

export const ButtonForm: React.FC<IButtonFormProps> = ({
  name,
}: IButtonFormProps) => {
  return (
    <button
      className="w-full h-[36px] bg-pcPrincipal text-pcSecondary font-bold sm:h-[46px]"
      type="submit"
    >
      {name}
    </button>
  );
};

export default ButtonForm;
