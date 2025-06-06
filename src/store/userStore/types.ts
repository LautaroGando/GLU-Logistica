import { IUser } from "@/interfaces";
import { TChangePasswordValues } from "@/types";

export interface IUserStore {
  user: IUser | null;
  token: string | null;
  isLoading: boolean;
  setUser: (user: IUser, token: string) => void;
  clearUser: () => void;
  loadUserFromStorage: () => void;
  changePassword: (values: TChangePasswordValues) => Promise<void>;
}
