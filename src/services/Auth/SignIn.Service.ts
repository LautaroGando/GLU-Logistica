import { API_URL } from "@/config/envs";
import { IUserSignIn } from "@/interfaces/IUserSingIn";
import axios from "axios";

export const signIn = async (data: IUserSignIn) => {
  try {
    const response = await axios.post(`${API_URL}/auth/signin`, data);
    return response.data;
  } catch (err) {
    throw new Error(typeof err === "string" ? err : "Ha ocurrido un error desconocido");
  }
};
