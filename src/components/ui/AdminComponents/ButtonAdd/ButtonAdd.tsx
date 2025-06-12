"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { IButtonAddProps } from "./types";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useAdminStore } from "@/store/adminStore/useAdminStore";

export const ButtonAdd: React.FC<IButtonAddProps> = ({
  label,
  modalType,
}: IButtonAddProps) => {
  const { toggleModal } = useAdminStore();

  return (
    <button
      onClick={() => toggleModal(modalType)}
      className="bg-pcPrincipal text-pcSecondary w-[200px] h-[40px] rounded-md flex items-center justify-center gap-3 transition-all duration-300 group hover:bg-pcPrincipal/80"
    >
      {label}
      <FontAwesomeIcon
        className="max-w-[15px] text-[15px] transition-all duration-300 group-hover:rotate-180"
        icon={faPlus}
        width={15}
        height={15}
      />
    </button>
  );
};
