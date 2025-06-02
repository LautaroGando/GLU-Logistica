import { IUser } from "@/interfaces";

export interface IUserStore {
  user: IUser | null;
  isLoading: boolean;
  setUser: (user: IUser) => void;
  clearUser: () => void;
  loadUserFromStorage: () => void;
}
