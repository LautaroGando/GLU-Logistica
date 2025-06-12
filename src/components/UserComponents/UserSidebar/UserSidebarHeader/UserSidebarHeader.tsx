import React from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UserSidebarHeaderInfo } from "@/components";

export const UserSidebarHeader = () => {
  return (
    <header className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center bg-pcPrincipal/25 rounded-[50%] size-[60px]">
        <FontAwesomeIcon icon={faUser} className="size-[30px] text-pcPrincipal/65" />
      </div>
      <UserSidebarHeaderInfo />
    </header>
  );
};
