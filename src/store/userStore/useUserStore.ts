import { create } from "zustand";
import Cookies from "js-cookie";
import { IUserStore } from "./types";

export const useUserStore = create<IUserStore>((set) => ({
  user: null,
  isLoading: false,

  setUser: (user) => {
    set({ user });

    if (typeof window !== "undefined") {
      Cookies.set("user-storage", JSON.stringify(user), {
        path: "/",
        expires: 7,
      });
    }
  },

  clearUser: () => {
    set({ user: null });

    if (typeof window !== "undefined") {
      Cookies.remove("user-storage");
    }
  },

  loadUserFromStorage: () => {
    if (typeof window !== "undefined") {
      set({ isLoading: true });

      try {
        const storedUser = localStorage.getItem("user");

        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          set({ user: parsedUser });

          Cookies.set("user-storage", storedUser, {
            path: "/",
            expires: 7,
          });
        } else {
          set({ user: null });
        }
      } catch {
        set({ user: null });
      } finally {
        set({ isLoading: false });
      }
    }
  },
}));
