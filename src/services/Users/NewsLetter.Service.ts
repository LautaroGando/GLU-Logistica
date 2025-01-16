import { API_URL } from "@/config/envs";
import axios from "axios";

export const suscribeNewsLetter = async (email: string) => {
  try {
    const response = await axios.post(`${API_URL}/users/suscribe`, { email });
    return response.data;
  } catch (err) {
    throw new Error(
      typeof err === "string" ? err : "Ha ocurrido un error desconocido"
    );
  }
};
