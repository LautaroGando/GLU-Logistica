"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import IUserTableFiltersProps from "./types";
import { IUser } from "@/interfaces/IUser";
import { getAllUsers } from "@/services/users";

type TUserStatus = "all" | "active" | "inactive";
type TUserOrder =
  | "newest"
  | "oldest"
  | "name_asc"
  | "name_desc"
  | "email_asc"
  | "email_desc"
  | "role";

const UserTableFiltersContext = createContext<IUserTableFiltersProps | undefined>(undefined);

export const UserTableFiltersProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [rawUsers, setRawUsers] = useState<IUser[]>([]);
  const [users, setUsers] = useState<IUser[]>([]);

  const [usersFilter, setUsersFilter] = useState<TUserStatus>("all");
  const [usersOrder, setUsersOrder] = useState<TUserOrder>("newest");
  const [usersSearchBar, setUsersSearchBar] = useState<string>("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const allUsers = await getAllUsers();
        setRawUsers(allUsers);
      } catch (err) {
        console.error("Error al obtener los usuarios:", err);
        setError("No se pudieron cargar los usuarios.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    let processed = [...rawUsers];

    if (usersFilter === "active") {
      processed = processed.filter((user) => user.status === "Activo");
    } else if (usersFilter === "inactive") {
      processed = processed.filter((user) => user.status === "Desactivado");
    }

    switch (usersOrder) {
      case "oldest":
        processed.sort(
          (a, b) =>
            new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime()
        );
        break;
      case "newest":
        processed.sort(
          (a, b) =>
            new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
        );
        break;
      case "name_asc":
        processed.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name_desc":
        processed.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "email_asc":
        processed.sort((a, b) => a.email.localeCompare(b.email));
        break;
      case "email_desc":
        processed.sort((a, b) => b.email.localeCompare(a.email));
        break;
      case "role":
        processed.sort((a, b) => a.role.localeCompare(b.role));
        break;
    }

    if (usersSearchBar.trim()) {
      processed = processed.filter((user) =>
        user.name.toLowerCase().startsWith(usersSearchBar.toLowerCase())
      );
    }

    setUsers(processed);
  }, [rawUsers, usersFilter, usersOrder, usersSearchBar]);

  return (
    <UserTableFiltersContext.Provider
      value={{
        loading,
        error,
        users,
        setUsersFilter,
        setUsersOrder,
        setUsersSearchBar,
      }}
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
