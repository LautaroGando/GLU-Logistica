import { API_URL } from "@/config/envs";
import { IPackageDto } from "@/dto/IPackageDto";
import axios from "axios";

export const getAllPackages = async () => {
  try {
    const { data } = await axios.get(`${API_URL}/package`);
    console.log(data);

    return data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error("Error al obtener los paquetes con parámetros");
      throw new Error("No se pudo obtener los paquetes.");
    } else {
      console.error("Error inesperado al obtener los paquetes");
      throw new Error("Error inesperado al obtener los paquetes.");
    }
  }
};

export const createPackage = async (values: IPackageDto) => {
  try {
    const { data } = await axios.post(`${API_URL}/package`, values);
    return data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error("Error al crear el paquete");
      throw new Error("No se pudo crear el paquete.");
    } else {
      console.error("Error inesperado al crear el paquete");
      throw new Error("Error inesperado al crear el paquete.");
    }
  }
};
