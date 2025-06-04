import { API_URL } from "@/config/envs";
import { ITableWarehouse } from "@/data/adminData/tableData/types";
import axios from "axios";

export const getProducts = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/deposit`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addProduct = async (values: ITableWarehouse) => {
  try {
    const { data } = await axios.post(`${API_URL}/deposit`, values);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (id: string) => {
  try {
    const { data } = await axios.delete(`${API_URL}/deposit/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const incrementProduct = async (id: string) => {
  try {
    const { data } = await axios.post(`${API_URL}/deposit/increment/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const decrementProduct = async (id: string) => {
  try {
    const { data } = await axios.post(`${API_URL}/deposit/decrement/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
