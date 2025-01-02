import React from "react";
import { IChangeLinkFormProps } from "./types";
import Link from "next/link";

export const ChangeLinkForm: React.FC<IChangeLinkFormProps> = ({
  text,
  href,
  link,
}: IChangeLinkFormProps) => {
  return (
    <p className="flex gap-2 justify-center text-sc text-sm sm:text-base">
      {text}
      <Link className="text-pcPrincipal hover:underline" href={href}>{link}</Link>
    </p>
  );
};

export default ChangeLinkForm;
