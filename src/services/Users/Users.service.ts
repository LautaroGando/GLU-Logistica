import { API_URL } from "@/config/envs";
import { IFormContact } from "@/interfaces/IFormContact";
import axios from "axios";
import api from "@/utils/axios";
import Swal from "sweetalert2";
import { getAuthHeader } from "@/utils/getAuthHeader";
import { TChangePasswordValues } from "@/types";

export const getUsers = async () => {
  try {
    const { data } = await api.get(`${API_URL}/users`, {
      headers: getAuthHeader(),
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (id: string) => {
  try {
    const { data } = await api.delete(`${API_URL}/users/${id}`, {
      headers: getAuthHeader(),
    });
    if (data) {
      Swal.fire({
        icon: "success",
        title: "Usuario eliminado.",
        text: "Se ha eliminado el usuario.",
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

export const contact = async (data: IFormContact) => {
  try {
    const response = await api.post(`${API_URL}/email/formContact`, data);
    return response.data;
  } catch (err) {
    throw new Error(typeof err === "string" ? err : "Ha ocurrido un error desconocido");
  }
};

export const changePasswordService = async (id: string, values: TChangePasswordValues) => {
  try {
    const { data } = await axios.patch(`${API_URL}/users/${id}/changePass`, values, {
      headers: getAuthHeader(),
    });
    return data;
  } catch (err) {
    console.error("Error al cambiar la contraseña:", err);
    throw err;
  }
};
