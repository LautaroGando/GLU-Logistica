import { API_URL } from "@/config/envs";
import { IFormContact } from "@/interfaces/IFormContact";
import axios from "axios";

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
