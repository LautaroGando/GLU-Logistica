import { create } from "zustand";
import { getOrdersByCompany, getProductByCompanyName } from "@/services";
import { buildDepositTable } from "@/data";
import { IDepositState } from "./types";

const DEV_DELAY = 500;

export const useDepositStore = create<IDepositState>((set) => ({
  products: [],
  shipments: [],
  table: null,
  isLoading: false,
  error: null,

  fetchDepositData: async (company: string) => {
    set({ isLoading: true, error: null });

    try {
      if (DEV_DELAY > 0) {
        await new Promise((resolve) => setTimeout(resolve, DEV_DELAY));
      }

      const [products, shipments] = await Promise.all([
        getProductByCompanyName(company),
        getOrdersByCompany(company),
      ]);

      const table = buildDepositTable(products, shipments, company);

      set({ products, shipments, table });
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "No se pudo cargar el depósito";

      console.error("Error en fetchDepositData:", error);
      set({ error: message });
    } finally {
      set({ isLoading: false });
    }
  },

  clear: () =>
    set({
      products: [],
      shipments: [],
      table: null,
      error: null,
      isLoading: false,
    }),
}));
