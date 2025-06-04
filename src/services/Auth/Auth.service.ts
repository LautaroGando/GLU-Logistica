import { API_URL } from "@/config/envs";
import { ITableClients } from "@/data/adminData/tableData/types";
import { IUserSignIn } from "@/interfaces/IUser";
import axios from "axios";
import Swal from "sweetalert2";

export const signIn = async (values: IUserSignIn) => {
  try {
    const response = await axios.post(`${API_URL}/auth/signin`, values);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const message =
        err.response?.data?.message || "Error del servidor al iniciar sesión";
      throw new Error(message);
    }

    throw new Error("Error desconocido al iniciar sesión");
  }
};

export const addUser = async (values: ITableClients) => {
  try {
    const { data } = await axios.post(`${API_URL}/auth/signUp`, values);
    if (data) {
      Swal.fire({
        icon: "success",
        title: "Usuario agregado.",
        text: "Se ha agregado el usuario.",
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
