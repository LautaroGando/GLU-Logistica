import { API_URL } from "@/config/envs";
import { ITableWarehouse } from "@/data/adminData/tableData/types";
import axios from "axios";
import Swal from "sweetalert2";
import { getAuthHeader } from "@/utils/getAuthHeader";

export const getProductByCompanyName = async (companyName: string) => {
  console.log(companyName);
  
  try {
    const { data } = await axios.get(`${API_URL}/deposit/${companyName}`, {
      headers: getAuthHeader(),
    });

    console.log(data);
    

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getProducts = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/deposit`, {
      headers: getAuthHeader(),
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addProduct = async (values: ITableWarehouse) => {
  try {
    const { data } = await axios.post(`${API_URL}/deposit`, values, {
      headers: getAuthHeader(),
    });
    if (data) {
      Swal.fire({
        icon: "success",
        title: "Producto agregado.",
        text: "Se ha agregado el producto.",
        toast: true,
        position: "top",
        showConfirmButton: false,
        color: "#8D8D8D",
        timer: 2000,
        timerProgressBar: true,
      });
    }
    return data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      Swal.fire({
        icon: "error",
        title: "Error.",
        text: `${error.response.data.message}`,
        toast: true,
        position: "bottom-end",
        showConfirmButton: false,
        color: "#8D8D8D",
        timer: 2000,
        timerProgressBar: true,
      });
    }
  }
};

export const deleteProduct = async (id: string) => {
  try {
    const { data } = await axios.delete(`${API_URL}/deposit/${id}`, {
      headers: getAuthHeader(),
    });
    if (data) {
      Swal.fire({
        icon: "success",
        title: "Producto eliminado.",
        text: "Se ha eliminado el producto.",
        toast: true,
        position: "top",
        showConfirmButton: false,
        color: "#8D8D8D",
        timer: 2000,
        timerProgressBar: true,
      });
    }
    return data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      Swal.fire({
        icon: "error",
        title: "Error.",
        text: `${error.response.data.message}`,
        toast: true,
        position: "bottom-end",
        showConfirmButton: false,
        color: "#8D8D8D",
        timer: 2000,
        timerProgressBar: true,
      });
    }
  }
};

export const incrementProduct = async (id: string) => {
  try {
    const { data } = await axios.post(`${API_URL}/deposit/increment/${id}`, null, {
      headers: getAuthHeader(),
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      Swal.fire({
        icon: "error",
        title: "Error.",
        text: `${error.response.data.message}`,
        toast: true,
        position: "bottom-end",
        showConfirmButton: false,
        color: "#8D8D8D",
        timer: 2000,
        timerProgressBar: true,
      });
    }
  }
};

export const decrementProduct = async (id: string) => {
  try {
    const { data } = await axios.post(`${API_URL}/deposit/decrement/${id}`, null, {
      headers: getAuthHeader(),
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      Swal.fire({
        icon: "error",
        title: "Error.",
        text: `${error.response.data.message}`,
        toast: true,
        position: "bottom-end",
        showConfirmButton: false,
        color: "#8D8D8D",
        timer: 2000,
        timerProgressBar: true,
      });
    }
  }
};
