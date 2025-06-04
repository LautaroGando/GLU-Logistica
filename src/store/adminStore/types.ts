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
  users: ITableClients[] | null;
  setUsersPage: () => void;
  getUsers: () => void;
  addUser: (values: ITableClients) => void;
  deleteUser: (id: string) => void;
  /* DEPOSITO */
  products: ITableWarehouse[] | null;
  setProductsPage: () => void;
  getProducts: () => void;
  addProduct: (values: ITableWarehouse) => void;
  deleteProduct: (id: string) => void;
  updateProductQuantity: (id: string, quantity: number) => void;
  /* ENVIOS */
  modalProducts: boolean;
  toggleModalProducts: () => void;
  closeModalProducts: () => void;
  orders: ITableShipments[] | null;
  setOrdersPage: () => void;
  getOrders: () => void;
  addOrder: (values: ITableShipments) => void;
  deleteOrder: (id: string) => void;
}
