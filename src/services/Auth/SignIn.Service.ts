import { IUserSignIn } from "@/interfaces/IUserSingIn";
import axios from "axios";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

export const signIn = async (data: IUserSignIn) => {
  try {
    console.log(data);

    const response = await axios.post(`${APIURL}/auth/signin`, { data });
    return response.data;
  } catch (err) {
    throw new Error(typeof err === "string" ? err : "Ha ocurrido un error desconocido");
  }
};
