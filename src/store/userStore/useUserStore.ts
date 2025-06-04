import { create } from "zustand";
import Cookies from "js-cookie";
import { IUserStore } from "./types";

export const useUserStore = create<IUserStore>((set) => ({
  user: null,
  isLoading: false,

  setUser: (user) => {
    set({ user });

    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");

      Cookies.set(
        "user-storage",
        JSON.stringify({
          user,
          token: token ? JSON.parse(token) : null,
        }),
        {
          path: "/",
          expires: 7,
        }
      );
    }
  },

  clearUser: () => {
    set({ user: null });

    if (typeof window !== "undefined") {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      Cookies.remove("user-storage");
    }
  },

  loadUserFromStorage: () => {
    if (typeof window !== "undefined") {
      set({ isLoading: true });

      try {
        const storedUser = localStorage.getItem("user");
        const token = localStorage.getItem("token");

        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          set({ user: parsedUser });

          Cookies.set(
            "user-storage",
            JSON.stringify({
              user: parsedUser,
              token: token ? JSON.parse(token) : null,
            }),
            {
              path: "/",
              expires: 7,
            }
          );
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
