import { API_URL } from "@/config/envs";
import { ITableWarehouse } from "@/data/adminData/tableData/types";
import axios from "axios";

export const getAllProducts = async () => {
  try {
    let page = 1;
    const limit = 10;
    let allProducts: ITableWarehouse[] = [];
    let totalPages = 1;

    do {
      const res = await axios.get(`${API_URL}/deposit`, {
        params: { page, limit },
      });

      allProducts = [...allProducts, ...res.data.data];
      totalPages = res.data.totalPages;
      page++;
    } while (page <= totalPages);

    return {
      data: allProducts,
      total: allProducts.length,
      page: 1,
      totalPages: 1,
      limit: allProducts.length,
    };
  } catch (error) {
    console.error(error);
    return {
      data: [],
      total: 0,
      page: 1,
      totalPages: 1,
      limit: 0,
    };
  }
};

export const getProducts = async (page = 1) => {
  try {
    const { data } = await axios.get(`${API_URL}/deposit`, {
      params: { page },
    });
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
