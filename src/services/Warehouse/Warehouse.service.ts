import { API_URL } from "@/config/envs";
import { ITableWarehouse } from "@/data/adminData/tableData/types";
import axios from "axios";
import Cookies from "js-cookie";

const getTokenHeader = () => {
  const cookieData = Cookies.get("user-storage");
  const token = cookieData ? JSON.parse(cookieData).token : null;
  return {
    Authorization: `Bearer ${token}`,
  };
};

export const getProducts = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/deposit`, {
      headers: getTokenHeader(),
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addProduct = async (values: ITableWarehouse) => {
  try {
    const { data } = await axios.post(`${API_URL}/deposit`, values, {
      headers: getTokenHeader(),
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (id: string) => {
  try {
    const { data } = await axios.delete(`${API_URL}/deposit/${id}`, {
      headers: getTokenHeader(),
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const incrementProduct = async (id: string) => {
  try {
    const { data } = await axios.post(`${API_URL}/deposit/increment/${id}`, null, {
      headers: getTokenHeader(),
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const decrementProduct = async (id: string) => {
  try {
    const { data } = await axios.post(`${API_URL}/deposit/decrement/${id}`, null, {
      headers: getTokenHeader(),
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
