import axios from "axios";
import { ITableShipments } from "../../data/adminData/tableData/types";
import { API_URL } from "@/config/envs";

export const getAllOrders = async (): Promise<ITableShipments[]> => {
  const allOrders: ITableShipments[] = [];
  let currentPage = 1;
  let hasMore = true;

  try {
    while (hasMore) {
      const { data } = await axios.get(`${API_URL}/shipment`, {
        params: { page: currentPage },
      });

      const currentData: ITableShipments[] = data || [];

      allOrders.push(...currentData);

      hasMore = currentData.length > 0 && currentData.length === 10;
      currentPage++;
    }
  } catch (error) {
    console.log("Error al traer todas las órdenes:", error);
  }

  return allOrders;
};

export const getOrders = async (page = 1) => {
  try {
    const { data } = await axios.get(`${API_URL}/shipment`, {
      params: { page },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addOrder = async (values: ITableShipments) => {
  console.log(values);
  try {
    const { data } = await axios.post(`${API_URL}/shipment`, values);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteOrder = async (id: string) => {
  try {
    const { data } = await axios.delete(`${API_URL}/shipment/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateOrderStatus = async (id: string, status: string) => {
  try {
    const { data } = await axios.patch(`${API_URL}/shipment/${id}/status`, {
      status,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
