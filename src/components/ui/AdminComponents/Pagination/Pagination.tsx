"use client";
import { useAdminStore } from "@/store/adminStore/useAdminStore";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { IPaginationProps } from "./types";

export const Pagination: React.FC<IPaginationProps> = ({
  table,
}: IPaginationProps) => {
  const {
    users,
    products,
    orders,
    setUsersPage,
    setProductsPage,
    setOrdersPage,
  } = useAdminStore();

  const paginationData = {
    clients: users,
    warehouse: products,
    shipments: orders,
  }[table];

  const page = paginationData?.page ?? 1;
  const totalPages = paginationData?.totalPages ?? 1;

  const paginationActions = {
    clients: setUsersPage,
    warehouse: setProductsPage,
    shipments: setOrdersPage,
  };

  const handleChangePage = (newPage: number) => {
    paginationActions[table](newPage);
  };

  return (
    <div className="flex items-center justify-between sm:self-end sm:gap-3">
      <button
        onClick={() => handleChangePage(page - 1)}
        disabled={page === 1}
        className="w-9 h-9 bg-pcPrincipal text-pcSecondary flex justify-center items-center rounded-[2px] transition-all hover:bg-pcPrincipal/80 disabled:bg-disabledButton disabled:hover:bg-disabledButton/80"
      >
        <FontAwesomeIcon
          className="max-w-[20px] text-[20px]"
          icon={faChevronLeft}
          width={20}
          height={20}
        />
      </button>
      <p className="w-[150px] text-center font-medium text-xs sm:text-sm lg:text-base">
        Página {page} de {totalPages}
      </p>
      <button
        disabled={page === totalPages}
        onClick={() => handleChangePage(page + 1)}
        className="w-9 h-9 bg-pcPrincipal text-pcSecondary flex justify-center items-center rounded-[2px] transition-all hover:bg-pcPrincipal/80 disabled:bg-disabledButton disabled:hover:bg-disabledButton/80"
      >
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
