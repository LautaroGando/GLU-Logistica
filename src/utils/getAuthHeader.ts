import Cookies from "js-cookie";

export const getAuthHeader = () => {
  const cookieData = Cookies.get("user-storage");
  const token = cookieData ? JSON.parse(cookieData).token : null;
  console.log("token extraído:", token);
  return {
    Authorization: `Bearer ${token}`,
  };
};
