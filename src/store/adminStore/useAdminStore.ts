import { create } from "zustand";
import { IAdminStoreProps } from "./types";
import { Modal } from "@/enum/Modal";
import { deleteUser, getUsers } from "@/services/Users/Users.service";
import {
  addProduct,
  deleteProduct,
  getProducts,
} from "@/services/Warehouse/Warehouse.service";
import {
  addOrder,
  deleteOrder,
  getOrders,
} from "@/services/Shipments/Shipments.service";
import {
  ITableClients,
  ITableShipments,
  ITableWarehouse,
} from "@/data/adminData/tableData/types";
import { addUser } from "@/services/Auth/Auth.service";

export const useAdminStore = create<IAdminStoreProps>((set, get) => ({
  /* MODAL */
  modal: null,
  toggleModal: (type: Modal) =>
    set((state) => (state.modal === null ? { modal: type } : { modal: null })),
  closeModal: () => set(() => ({ modal: null })),
  /* BUSCADOR */
  searchTerm: "",
  setSearchTerm: (value: string) => set(() => ({ searchTerm: value })),
  /* USUARIOS */
  users: null,
  setUsersPage: async (page) => {
    const data = await getUsers(page);
    set({ users: data });
  },
  getUsers: async () => {
    try {
      const data = await getUsers();
      set({ users: data });
    } catch (error) {
      console.log(error);
    }
  },
  addUser: async (values: ITableClients) => {
    try {
      await addUser(values);
      get().getUsers();
    } catch (error) {
      console.log(error);
    }
  },
  deleteUser: async (id: string) => {
    try {
      await deleteUser(id);
      get().getUsers();
    } catch (error) {
      console.log(error);
    }
  },
  /* DEPOSITO */
  products: null,
  setProductsPage: async (page) => {
    const data = await getProducts(page);
    set({ products: data });
  },
  getProducts: async () => {
    try {
      const data = await getProducts();
      set({ products: data });
    } catch (error) {
      console.log(error);
    }
  },
  addProduct: async (values: ITableWarehouse) => {
    try {
      await addProduct(values);
      get().getProducts();
    } catch (error) {
      console.log(error);
    }
  },
  deleteProduct: async (id: string) => {
    try {
      await deleteProduct(id);
      get().getProducts();
    } catch (error) {
      console.log(error);
    }
  },
  updateProductQuantity: (id: string, quantity: number) =>
    set((state) => ({
      products: state.products
        ? {
            ...state.products,
            data: state.products.data.map((product) =>
              product.id === id ? { ...product, quantity } : product
            ),
          }
        : null,
    })),
  /* ENVIOS */
  modalProducts: false,
  toggleModalProducts: () =>
    set((state) => ({ modalProducts: !state.modalProducts })),
  closeModalProducts: () => set(() => ({ modalProducts: false })),
  orders: null,
  setOrdersPage: async (page) => {
    const data = await getOrders(page);
    set({ orders: data });
  },
  getOrders: async () => {
    try {
      const data = await getOrders();
      set({ orders: data });
    } catch (error) {
      console.log(error);
    }
  },
  addOrder: async (values: ITableShipments) => {
    try {
      await addOrder(values);
      get().getOrders();
    } catch (error) {
      console.log(error);
    }
  },
  deleteOrder: async (id: string) => {
    try {
      await deleteOrder(id);
      get().getOrders();
    } catch (error) {
      console.log(error);
    }
  },
}));
