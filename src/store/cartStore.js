import { create } from "zustand";
import { api } from "../lib/api";
import { useAuth } from "./authStore";

export const useCart = create((set) => ({
  items: [],
  total: 0,
  storeComparison: [],
  status: "idle", // idle | loading | error
  error: null,

  fetchBasket: async () => {
    if (!useAuth.getState().isAuthenticated()) return;
    set({ status: "loading", error: null });
    try {
      const data = await api.get("/basket", { auth: true });
      set({
        items: data.items,
        total: data.total,
        storeComparison: data.storeComparison,
        status: "idle",
      });
    } catch (err) {
      set({ status: "error", error: err.message });
    }
  },

  addToCart: async (productId, store, qty = 1) => {
    if (!useAuth.getState().isAuthenticated()) {
      throw new Error("Please sign in to add items to your basket");
    }
    set({ status: "loading", error: null });
    try {
      const data = await api.post(
        "/basket/items",
        { productId, store, qty },
        { auth: true }
      );
      set({
        items: data.items,
        total: data.total,
        storeComparison: data.storeComparison,
        status: "idle",
      });
    } catch (err) {
      set({ status: "error", error: err.message });
      throw err;
    }
  },

  updateQty: async (itemId, qty) => {
    set({ status: "loading", error: null });
    try {
      const data = await api.patch(
        `/basket/items/${itemId}`,
        { qty },
        { auth: true }
      );
      set({
        items: data.items,
        total: data.total,
        storeComparison: data.storeComparison,
        status: "idle",
      });
    } catch (err) {
      set({ status: "error", error: err.message });
    }
  },

  removeItem: async (itemId) => {
    set({ status: "loading", error: null });
    try {
      const data = await api.del(`/basket/items/${itemId}`, { auth: true });
      set({
        items: data.items,
        total: data.total,
        storeComparison: data.storeComparison,
        status: "idle",
      });
    } catch (err) {
      set({ status: "error", error: err.message });
    }
  },

  clearCart: async () => {
    set({ status: "loading", error: null });
    try {
      const data = await api.del("/basket", { auth: true });
      set({
        items: data.items,
        total: data.total,
        storeComparison: data.storeComparison,
        status: "idle",
      });
    } catch (err) {
      set({ status: "error", error: err.message });
    }
  },
}));
