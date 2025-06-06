import Cookies from "js-cookie";

export const getAuthHeader = () => {
  const token = Cookies.get("auth-token");
  
  if (!token) return {};

  return {
    Authorization: `Bearer ${token}`,
  };
};
