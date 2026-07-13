import { create } from "zustand";
import { persist } from "zustand/middleware";
import { api } from "../lib/api";

export const useAuth = create(
  persist(
    (set, get) => ({
      token: null,
      user: null,
      status: "idle", // idle | loading | error
      error: null,

      isAuthenticated: () => !!get().token,

      register: async ({ name, email, password }) => {
        set({ status: "loading", error: null });
        try {
          const data = await api.post("/auth/register", { name, email, password });
          set({ token: data.token, user: data.user, status: "idle" });
          return data.user;
        } catch (err) {
          set({ status: "error", error: err.message });
          throw err;
        }
      },

      login: async ({ email, password }) => {
        set({ status: "loading", error: null });
        try {
          const data = await api.post("/auth/login", { email, password });
          set({ token: data.token, user: data.user, status: "idle" });
          return data.user;
        } catch (err) {
          set({ status: "error", error: err.message });
          throw err;
        }
      },

      logout: () => set({ token: null, user: null }),
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({ token: state.token, user: state.user }),
    }
  )
);
