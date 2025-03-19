import { IUser } from "@/interfaces/IUser";

export interface IUserTableFiltersProps {
  users: IUser[];
  setUsersFilter: (text: string) => void;
  setUsersOrder: (text: string) => void;
  setUsersSearchBar: (text: string) => void;
}

export default IUserTableFiltersProps;
