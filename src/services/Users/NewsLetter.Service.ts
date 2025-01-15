import axios from "axios";
const APIURL = process.env.NEXT_PUBLIC_API_URL;

export const suscribeNewsLetter = async (email: string) => {
  try {
    const response = await axios.post(`${APIURL}/users/suscribe`, { email });

    return response.data;
  } catch (err) {
    throw new Error(typeof err === "string" ? err : "Ha ocurrido un error desconocido");
  }
};
