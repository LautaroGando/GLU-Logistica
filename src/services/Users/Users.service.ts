import { API_URL } from "@/config/envs";
import { IFormContact } from "@/interfaces/IFormContact";
import axios from "axios";
import Swal from "sweetalert2";

export const getUsers = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/users`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (id: string) => {
  try {
    const { data } = await axios.delete(`${API_URL}/users/${id}`);
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
    const response = await axios.post(`${API_URL}/email/formContact`, data);
    return response.data;
  } catch (err) {
    throw new Error(
      typeof err === "string" ? err : "Ha ocurrido un error desconocido"
    );
  }
};
