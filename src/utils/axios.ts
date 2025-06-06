// utils/api.ts
import axios from "axios";
import { useUserStore } from "@/store";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      const { clearUser } = useUserStore.getState();
      clearUser();
      window.location.href = "/sign-in";
    }
    return Promise.reject(err);
  }
);

export default api;
