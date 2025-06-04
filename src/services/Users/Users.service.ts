import { API_URL } from "@/config/envs";
import { IFormContact } from "@/interfaces/IFormContact";
import axios from "axios";
import Cookies from "js-cookie";

export const getUsers = async (page = 1) => {
  try {
    const cookieData = Cookies.get("user-storage");
    const token = cookieData ? JSON.parse(cookieData).token : null;

    const { data } = await axios.get(`${API_URL}/users`, {
      params: { page },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (id: string) => {
  try {
    const cookieData = Cookies.get("user-storage");
    const token = cookieData ? JSON.parse(cookieData).token : null;
    const { data } = await axios.delete(`${API_URL}/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const contact = async (data: IFormContact) => {
  const cookieData = Cookies.get("user-storage");
  const token = cookieData ? JSON.parse(cookieData).token : null;

  try {
    const response = await axios.post(`${API_URL}/email/formContact`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (err) {
    throw new Error(typeof err === "string" ? err : "Ha ocurrido un error desconocido");
  }
};
