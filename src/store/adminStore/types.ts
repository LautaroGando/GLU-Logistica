import {
  ITableClients,
  ITableShipments,
  ITableWarehouse,
} from "@/data/adminData/tableData/types";
import { Modal } from "@/enum/Modal";

export interface IAdminStoreProps {
  /* MODAL */
  modal: Modal | null;
  toggleModal: (type: Modal) => void;
  closeModal: () => void;
  /* BUSCADOR */
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  /* USUARIOS */
  users: {
    data: ITableClients[];
    total: number;
    page: number;
    totalPages: number;
    limit: number;
  } | null;
  setUsersPage: (page: number) => void;
  getUsers: () => void;
  addUser: (values: ITableClients) => void;
  deleteUser: (id: string) => void;
  /* DEPOSITO */
  products: {
    data: ITableWarehouse[];
    total: number;
    page: number;
    totalPages: number;
    limit: number;
  } | null;
  setProductsPage: (page: number) => void;
  getProducts: () => void;
  addProduct: (values: ITableWarehouse) => void;
  deleteProduct: (id: string) => void;
  updateProductQuantity: (id: string, quantity: number) => void;
  /* ENVIOS */
  modalProducts: boolean;
  toggleModalProducts: () => void;
  closeModalProducts: () => void;
  orders: {
    data: ITableShipments[];
    total: number;
    page: number;
    totalPages: number;
    limit: number;
  } | null;
  setOrdersPage: (page: number) => void;
  getOrders: () => void;
  addOrder: (values: ITableShipments) => void;
  deleteOrder: (id: string) => void;
}
