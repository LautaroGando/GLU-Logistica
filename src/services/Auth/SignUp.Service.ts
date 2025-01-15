import { API_URL } from "@/config/envs";
import { IUserSignUp } from "@/interfaces/IUserSignUp";
import axios from "axios";

export const signUp = async (data: IUserSignUp) => {
  try {
    const response = await axios.post(`${API_URL}/auth/signup`, data);
    return response.data;
  } catch (err) {
    throw new Error(
      typeof err === "string" ? err : "Ha ocurrido un error desconocido"
    );
  }
};
