"use client";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Pagination: React.FC = () => {
  return (
    <div className="flex items-center justify-between sm:self-end sm:gap-3">
      <button className="w-9 h-9 bg-pcPrincipal text-pcSecondary flex justify-center items-center rounded-[2px] transition-all hover:bg-pcPrincipal/80 disabled:bg-disabledButton disabled:hover:bg-disabledButton/80">
        <FontAwesomeIcon
          className="max-w-[20px] text-[20px]"
          icon={faChevronLeft}
          width={20}
          height={20}
        />
      </button>
      <p className="w-[150px] text-center font-medium text-xs sm:text-sm lg:text-base">
        Página {1} de {1}
      </p>
      <button className="w-9 h-9 bg-pcPrincipal text-pcSecondary flex justify-center items-center rounded-[2px] transition-all hover:bg-pcPrincipal/80 disabled:bg-disabledButton disabled:hover:bg-disabledButton/80">
        <FontAwesomeIcon
          className="max-w-[20px] text-[20px]"
          icon={faChevronRight}
          width={20}
          height={20}
        />
      </button>
    </div>
  );
};

export default Pagination;
