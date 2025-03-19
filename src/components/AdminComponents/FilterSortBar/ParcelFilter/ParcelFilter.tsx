import { useParcelTableFilter } from "@/context/AdminComponents/ParcelTableFiltersContext/ParcelTableFiltersContext";
import React from "react";

const ParcelFilter = () => {
  const { setParcelFilter, setParcelOrder } = useParcelTableFilter();
  return (
    <div>
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col w-full min-w-[91px] max-w-[150px] sm:flex-row sm:items-center gap-3 sm:max-w-[max-content]">
          <label htmlFor="filter" className="text-admin-letterColor">
            Filtrar por:
          </label>
          <select
            id="filter"
            className="mt-1 px-3 py-2 bg-admin-secondary border border-transparent outline-none transition-all duration-100 cursor-pointer hover:border-admin-letterColor/50 focus:border-admin-letterColor/50"
            onChange={(e) => setParcelFilter(e.target.value)}
          >
            <option value="all">Todo</option>
            <option value="client">Cliente</option>
            <option value="company">Empresa</option>
          </select>
        </div>

        <div className="flex flex-col w-full min-w-[91px] max-w-[150px] sm:flex-row sm:items-center gap-3 sm:max-w-[max-content]">
          <label htmlFor="sort" className="text-admin-letterColor">
            Ordenar por:
          </label>
          <select
            id="sort"
            className="mt-1 px-3 py-2 bg-admin-secondary border border-transparent outline-none transition-all duration-100 cursor-pointer hover:border-admin-letterColor/50 focus:border-admin-letterColor/50"
            onChange={(e) => setParcelOrder(e.target.value)}
          >
            <option value="newest">Más reciente</option>
            <option value="oldest">Más antiguo</option>
            <option value="delivered">Entregado</option>
            <option value="in_transit">En camino</option>
            <option value="warehouse">Depósito</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ParcelFilter;
