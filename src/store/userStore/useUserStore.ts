import { create } from "zustand";
import Cookies from "js-cookie";
import { IUserStore } from "./types";
import { changePasswordService } from "@/services/Users/Users.service";
import { TChangePasswordValues } from "@/types";

const DEV_DELAY = 500;

export const useUserStore = create<IUserStore>((set, get) => ({
  user: null,
  token: null,
  isLoading: false,

  setUser: (user, token) => {
    set({ user, token });

    if (typeof window !== "undefined") {
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);

      Cookies.set("user-info", JSON.stringify(user), {
        path: "/",
      });

      Cookies.set("auth-token", token, {
        path: "/",
      });
    }
  },

  clearUser: () => {
    set({ user: null, token: null });

    if (typeof window !== "undefined") {
      localStorage.removeItem("user");
      localStorage.removeItem("token");

      Cookies.remove("user-info");
      Cookies.remove("auth-token");
    }
  },

  loadUserFromStorage: async () => {
    if (typeof window !== "undefined") {
      set({ isLoading: true });

      try {
        if (DEV_DELAY > 0) {
          await new Promise((resolve) => setTimeout(resolve, DEV_DELAY));
        }

        const storedUser = localStorage.getItem("user");
        const storedToken = localStorage.getItem("token");

        if (storedUser && storedToken) {
          const parsedUser = JSON.parse(storedUser);
          set({ user: parsedUser, token: storedToken });

          Cookies.set("user-info", storedUser, { path: "/" });
          Cookies.set("auth-token", storedToken, { path: "/" });
        } else {
          set({ user: null, token: null });
        }
      } catch {
        set({ user: null, token: null });
      } finally {
        set({ isLoading: false });
      }
    }
  },

  changePassword: async (values: TChangePasswordValues) => {
    try {
      const user = get().user;
      if (!user || !user.id) throw new Error("Usuario no autenticado");

      await changePasswordService(user.id, values);
    } catch (err) {
      console.error(err);
      throw err;
    }
  },
}));
