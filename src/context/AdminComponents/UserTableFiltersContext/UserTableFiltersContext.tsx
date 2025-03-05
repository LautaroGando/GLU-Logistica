"use client";

import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import IUserTableFiltersProps from "./types";
import usersData from "@/data/usersData/usersData";
import { IUser } from "@/interfaces/IUser";

const UserTableFiltersContext = createContext<IUserTableFiltersProps | undefined>(undefined);

export const UserTableFiltersProvider = ({ children }: { children: ReactNode }) => {
  const [users, setUsers] = useState<IUser[]>(usersData);
  const [usersFilter, setUsersFilter] = useState<string>("all");
  const [usersOrder, setUsersOrder] = useState<string>("newest");
  const [usersSearchBar, setUsersSearchBar] = useState<string>("");

  useEffect(() => {
    let processedUsers = [...usersData];

    if (usersFilter === "active") {
      processedUsers = processedUsers.filter((user) => user.status === "Activo");
    } else if (usersFilter === "inactive") {
      processedUsers = processedUsers.filter((user) => user.status === "Desactivado");
    }

    if (usersOrder === "oldest") {
      processedUsers.sort(
        (a, b) => new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime()
      );
    } else if (usersOrder === "newest") {
      processedUsers.sort(
        (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
      );
    } else if (usersOrder === "name_asc") {
      processedUsers.sort((a, b) => a.name.localeCompare(b.name));
    } else if (usersOrder === "name_desc") {
      processedUsers.sort((a, b) => b.name.localeCompare(a.name));
    } else if (usersOrder === "email_asc") {
      processedUsers.sort((a, b) => a.email.localeCompare(b.email));
    } else if (usersOrder === "email_desc") {
      processedUsers.sort((a, b) => b.email.localeCompare(a.email));
    } else if (usersOrder === "role") {
      processedUsers.sort((a, b) => a.role.localeCompare(b.role));
    }

    if (usersSearchBar !== "") {
      processedUsers = processedUsers
        .filter((user) => user.name.toLowerCase().startsWith(usersSearchBar.toLowerCase()))
        .sort((a, b) => a.name.localeCompare(b.name));
    }

    setUsers(processedUsers);
  }, [usersFilter, usersOrder, usersSearchBar]);

  return (
    <UserTableFiltersContext.Provider
      value={{ users, setUsersFilter, setUsersOrder, setUsersSearchBar }}
    >
      {children}
    </UserTableFiltersContext.Provider>
  );
};

export const useUsersTableFilters = () => {
  const context = useContext(UserTableFiltersContext);
  if (!context) {
    throw new Error("useUsersTableFilters debe usarse dentro de UserTableFiltersProvider");
  }
  return context;
};
