import axios from "axios";
import { ITableShipments } from "../../data/adminData/tableData/types";
import { API_URL } from "@/config/envs";
import Swal from "sweetalert2";

export const getOrders = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/shipment`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const addOrder = async (values: ITableShipments) => {
  try {
    const { data } = await axios.post(`${API_URL}/shipment`, values);
    if (data) {
      Swal.fire({
        icon: "success",
        title: "Órden agregada.",
        text: "Se ha agregado la órden.",
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

export const deleteOrder = async (id: string) => {
  try {
    const { data } = await axios.delete(`${API_URL}/shipment/${id}`);
    if (data) {
      Swal.fire({
        icon: "success",
        title: "Órden eliminada.",
        text: "Se ha eliminado la órden.",
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

export const updateOrderStatus = async (id: string, status: string) => {
  try {
    const { data } = await axios.patch(`${API_URL}/shipment/${id}/status`, {
      status,
    });
    if (data) {
      Swal.fire({
        icon: "success",
        title: "Órden actualizada.",
        text: "Se ha actualizado la órden.",
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
