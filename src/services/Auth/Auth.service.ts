import { API_URL } from "@/config/envs";
import { ITableClients } from "@/data/adminData/tableData/types";
import { IUserSignIn } from "@/interfaces/IUser";
import axios from "axios";

export const signIn = async (values: IUserSignIn) => {
  try {
    const response = await axios.post(`${API_URL}/auth/signin`, values);
    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      const message = err.response?.data?.message || "Error del servidor al iniciar sesión";
      throw new Error(message);
    }

    throw new Error("Error desconocido al iniciar sesión");
  }
};

export const addUser = async (values: ITableClients) => {
  try {
    const { data } = await axios.post(`${API_URL}/auth/signUp`, values);
    return data;
  } catch (error) {
    console.log(error);
  }
};
