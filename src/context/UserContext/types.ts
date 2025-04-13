import { IUser } from "@/interfaces/IUser";

export interface IUserContextProps {
  loading: boolean;
  error: string | null;
  user: IUser | null;
  users: IUser[] | null;
}
