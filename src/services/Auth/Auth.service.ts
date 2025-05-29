import { API_URL } from "@/config/envs";
import { ITableClients } from "@/data/adminData/tableData/types";
import { IUserSignIn } from "@/interfaces/IUser";
import axios from "axios";

export const signIn = async (values: IUserSignIn) => {
  try {
    const response = await axios.post(`${API_URL}/auth/signin`, values);
    return response.data;
  } catch (err) {
    throw new Error(
      typeof err === "string" ? err : "Ha ocurrido un error desconocido"
    );
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
