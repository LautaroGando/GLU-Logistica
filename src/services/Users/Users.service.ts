import { API_URL } from "@/config/envs";
import { IFormContact } from "@/interfaces/IFormContact";
import axios from "axios";

export const getUsers = async (page = 1) => {
  try {
    const { data } = await axios.get(`${API_URL}/users`, {
      params: { page },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (id: string) => {
  try {
    const { data } = await axios.delete(`${API_URL}/users/${id}`);
    return data;
  } catch (error) {
    console.log(error);
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
