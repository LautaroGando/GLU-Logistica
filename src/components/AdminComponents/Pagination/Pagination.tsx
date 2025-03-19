import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const PaginationAdmin = () => {
  return (
    <div className="flex justify-between items-center w-full gap-[14px] my-[36px] order-2 sm:order-1 sm:justify-start">
      <button className="flex justify-center items-center size-[34px] text-admin-letterColor/25 border border-admin-letterColor/25 rounded-[7px] cursor-default">
        <FontAwesomeIcon icon={faChevronLeft} className="w-[10px]"/>
      </button>
      <p>Página 1 de 10</p>
      <button className="flex justify-center items-center size-[34px] text-admin-letterColor border border-admin-letterColor rounded-[7px] group transition-all duration-200 hover:border-admin-letterColor/50">
        <FontAwesomeIcon icon={faChevronRight} className="w-[10px] group-hover:text-admin-letterColor/50" />
      </button>
    </div>
  );
};

export default PaginationAdmin;
