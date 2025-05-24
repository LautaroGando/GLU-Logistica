import React from "react";
import { IButtonSendProps } from "./types";

export const ButtonSend: React.FC<IButtonSendProps> = ({
  label,
}: IButtonSendProps) => {
  return (
    <button
      className="w-[250px] h-[40px] bg-pcPrincipal text-pcSecondary mx-auto rounded-sm transition-all duration-300 hover:bg-pcPrincipal/80"
      type="submit"
    >
      {label}
    </button>
  );
};
