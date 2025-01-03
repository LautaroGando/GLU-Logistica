import React from "react";
import { IButtonFormProps } from "./types";

export const ButtonForm: React.FC<IButtonFormProps> = ({
  name,
}: IButtonFormProps) => {
  return (
    <button
      className="w-full h-[36px] bg-pcPrincipal text-pcSecondary font-bold border-[1px] border-pcPrincipal transition-all duration-300 hover:bg-pcSecondary hover:text-pcPrincipal sm:h-[46px]"
      type="submit"
    >
      {name}
    </button>
  );
};

export default ButtonForm;
