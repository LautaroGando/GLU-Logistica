import { API_URL } from "@/config/envs";
import axios from "axios";

export const suscribeNewsLetter = async (email: string) => {
  try {
    const response = await axios.post(`${API_URL}/newsletter/subscribe`, { email });
    return response.data;
  } catch (err) {
    throw new Error(`${err ? err : "Hubo un error desconocido."}`);
  }
};
