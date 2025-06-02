import { create } from "zustand";
import { IUserStore } from "./types";

export const useUserStore = create<IUserStore>((set) => ({
  user: null,
  isLoading: false,
  
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),

  loadUserFromStorage: () => {
    if (typeof window !== "undefined") {
      set({ isLoading: true });

      try {
        const storedUser = localStorage.getItem("user");

        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          set({ user: parsedUser });
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
