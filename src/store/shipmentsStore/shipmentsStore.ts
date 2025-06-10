import { create } from "zustand";
import { getOrdersByCompany } from "@/services";
import { IShipmentState } from "./types";
import { IShipment } from "@/interfaces";

const DEV_DELAY = 500;

export const useShipmentStore = create<IShipmentState>((set) => ({
  shipments: [],
  deliveredShipments: [],
  isLoading: false,
  error: null,

  fetchShipments: async (company: string) => {
    set({ isLoading: true, error: null });

    try {
      if (DEV_DELAY > 0) {
        await new Promise((resolve) => setTimeout(resolve, DEV_DELAY));
      }

      const data = await getOrdersByCompany(company);

      const delivered = data?.filter((s: IShipment) => s.status === "ENTREGADO");
      const nonDelivered = data?.filter((s: IShipment) => s.status !== "ENTREGADO");

      set({
        shipments: nonDelivered,
        deliveredShipments: delivered,
      });
    } catch (error) {
      const message = error instanceof Error ? error.message : "No se pudo cargar los envíos.";
      console.error("Error en fetchShipments:", error);
      set({ error: message });
    } finally {
      set({ isLoading: false });
    }
  },

  clear: () =>
    set({
      shipments: [],
      deliveredShipments: [],
      error: null,
      isLoading: false,
    }),
}));
