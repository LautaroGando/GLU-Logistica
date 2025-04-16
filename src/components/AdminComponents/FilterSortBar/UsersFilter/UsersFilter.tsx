import { useUsersTableFilters } from "@/context/AdminComponents/UserTableFiltersContext/UserTableFiltersContext";
import React from "react";

const UsersFilter: React.FC = () => {
  const { setUsersFilter, setUsersOrder } = useUsersTableFilters();

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
            onChange={(e) => {
              const value = e.target.value;
              if (value === "all" || value === "active" || value === "inactive") {
                setUsersFilter(value);
              }
            }}
          >
            <option value="all">Todo</option>
            <option value="active">Activo</option>
            <option value="inactive">Desactivo</option>
          </select>
        </div>

        <div className="flex flex-col w-full min-w-[91px] max-w-[150px] sm:flex-row sm:items-center gap-3 sm:max-w-[max-content]">
          <label htmlFor="sort" className="text-admin-letterColor">
            Ordenar por:
          </label>
          <select
            id="sort"
            className="mt-1 px-3 py-2 bg-admin-secondary border border-transparent outline-none transition-all duration-100 cursor-pointer hover:border-admin-letterColor/50 focus:border-admin-letterColor/50"
            onChange={(e) => {
              const value = e.target.value;
              const validOrders = [
                "newest",
                "oldest",
                "name_asc",
                "name_desc",
                "email_asc",
                "email_desc",
                "role",
              ] as const;

              if (validOrders.includes(value as (typeof validOrders)[number])) {
                setUsersOrder(value as (typeof validOrders)[number]);
              }
            }}
          >
            <option value="newest">Más reciente</option>
            <option value="oldest">Más antiguo</option>
            <option value="name_asc">Nombre (A-Z)</option>
            <option value="name_desc">Nombre (Z-A)</option>
            <option value="email_asc">Email (A-Z)</option>
            <option value="email_desc">Email (Z-A)</option>
            <option value="role">Rol</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default UsersFilter;
