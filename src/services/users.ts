import { API_URL } from "@/config/envs";
import axios from "axios";

export const getAllUsers = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/users`);
    console.log(data);

    return data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error("Error al obtener los usuarios con parámetros");
      throw new Error("No se pudo obtener los usuarios.");
    } else {
      console.error("Error inesperado al obtener los usuarios");
      throw new Error("Error inesperado al obtener los usuarios.");
    }
  }
};
