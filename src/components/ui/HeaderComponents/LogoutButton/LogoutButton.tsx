import { useRouter } from "next/navigation";
import useSuccessAlert from "@/hooks/useSuccessAlert";
import { ILogoutButtonProps } from "./types";
import { logoutUser } from "@/utils/auth/logoutUser/logoutUser";

export const LogoutButton: React.FC<ILogoutButtonProps> = ({ handleCloseMenu }) => {
  const router = useRouter();
  const showSuccessAlert = useSuccessAlert();

  const handleLogout = () => {
    logoutUser({
      redirect: router.push,
      showSuccess: () => showSuccessAlert("Sesión finalizada", "Has cerrado sesión correctamente."),
      onClose: handleCloseMenu,
    });
  };

  return (
    <button
      onClick={handleLogout}
      className="text-admin-red hover:text-admin-redAlt font-medium transition-colors duration-300"
    >
      Cerrar sesión
    </button>
  );
};
