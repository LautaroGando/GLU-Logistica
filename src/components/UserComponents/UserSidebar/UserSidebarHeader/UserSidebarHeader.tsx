import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const UserSidebarHeader = () => {
  return (
    <header className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center bg-pcPrincipal/25 rounded-[50%] size-[60px]">
        <FontAwesomeIcon icon={faUser} className="size-[30px] text-pcPrincipal/65" />
      </div>
      <div className="mt-3 text-center">
        <p className="text-lg font-medium">Agustin Ancona</p>
        <p className="text-xs text-black/35">Buenos Aires</p>
      </div>
    </header>
  );
};
