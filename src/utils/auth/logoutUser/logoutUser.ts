import Cookies from "js-cookie";
import { useUserStore } from "@/store";

export const logoutUser = ({
  redirect,
  showSuccess,
  onClose,
}: {
  redirect?: (path: string) => void;
  showSuccess?: () => void;
  onClose?: () => void;
}) => {
  const clearUser = useUserStore.getState().clearUser;

  clearUser();
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  Cookies.remove("auth-token");
  Cookies.remove("user-info");

  if (onClose) onClose();
  if (redirect) redirect("/");
  if (showSuccess) showSuccess();
};
