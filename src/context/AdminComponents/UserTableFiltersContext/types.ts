import { IUser } from "@/interfaces/IUser";

export interface IUserTableFiltersProps {
  loading: boolean;
  error: string | null;
  users: IUser[];
  setUsersFilter: (filter: "all" | "active" | "inactive") => void;
  setUsersOrder: (
    order: "newest" | "oldest" | "name_asc" | "name_desc" | "email_asc" | "email_desc" | "role"
  ) => void;
  setUsersSearchBar: (value: string) => void;
}

export default IUserTableFiltersProps;
