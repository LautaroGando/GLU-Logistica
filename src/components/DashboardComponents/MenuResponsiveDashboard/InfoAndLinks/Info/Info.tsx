import { useUser } from "@/context/UserContext/UserContext";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ButtonEditInfo from "./ButtonEditInfo/ButtonEditInfo";

export const Info: React.FC = () => {
  const { user } = useUser();

  if (!user) return null;

  return (
    <div className="flex flex-col gap-5 items-center">
      <div className="w-[75px] h-[75px] bg-pcPrincipal rounded-full text-pcSecondary flex items-center justify-center text-3xl">
        <FontAwesomeIcon icon={faUser} />
      </div>
      <h2 className="w-[197.11px] text-center sm:text-lg sm:w-[225px]">Bienvenido, {user.name} {user.surname}!</h2>
      <ButtonEditInfo />
    </div>
  );
};

export default Info;
