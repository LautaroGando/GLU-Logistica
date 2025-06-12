import axios from "axios";
import { useUserStore } from "@/store";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      const { clearUser } = useUserStore.getState();
      clearUser();

      if (typeof window !== "undefined") {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        Cookies.remove("auth-token");
        Cookies.remove("user-info");
        window.location.href = "/sign-in";
      }
    }

    return Promise.reject(err);
  }
);

export default api;
