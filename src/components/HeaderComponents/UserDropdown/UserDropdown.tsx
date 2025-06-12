"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { logoutUser } from "@/utils/auth/logoutUser/logoutUser";
import useSuccessAlert from "@/hooks/useSuccessAlert";
import { useUserStore } from "@/store";

const UserDropdown = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const showSuccessAlert = useSuccessAlert();
  const { user } = useUserStore();
  const link = user?.role === "ADMIN" ? "/admin/table-clients" : "/user";

  useEffect(() => {
    const rawUser = Cookies.get("user-info");
    if (rawUser) {
      try {
        const parsed = JSON.parse(rawUser);
        setUserName(parsed.fullName || parsed.name || "Usuario");
      } catch {
        setUserName("Usuario");
      }
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logoutUser({
      onClose: () => setIsOpen(false),
      redirect: router.push,
      showSuccess: () => showSuccessAlert("Sesión finalizada", "Has cerrado sesión correctamente."),
    });
  };

  const handleProfileClick = () => {
    setIsOpen(false);
    router.push(link);
  };

  if (!userName) return null;

  return (
    <div ref={dropdownRef} className="relative ml">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-neutral-100 transition-colors"
      >
        <FontAwesomeIcon
          icon={faUser}
          className="text-pcPrincipal text-xl group-hover:text-tcPrincipal transition-colors duration-300"
        />
        <span className="text-lg font-medium text-pcPrincipal">{userName.split(" ")[0]}</span>
      </button>

      {isOpen && (
        <div className="absolute flex flex-col gap-2 right-0 mt-2 w-48 bg-white rounded-[4px] shadow-xl z-50 animate-fade-in overflow-hidden">
          {user && user.role === "ADMIN" ? (
            <button
              onClick={handleProfileClick}
              className="w-full px-5 py-3 text-left text-sm text-admin-primary font-medium hover:bg-admin-secondary hover:text-admin-letterColor transition-all duration-300"
            >
              Administrador
            </button>
          ) : (
            <button
              onClick={handleProfileClick}
              className="w-full px-5 py-3 text-left text-sm text-admin-primary font-medium hover:bg-admin-secondary hover:text-admin-letterColor transition-all duration-300"
            >
              Ver perfil
            </button>
          )}

          <button
            onClick={handleLogout}
            className="w-full px-5 py-3 text-left text-sm text-admin-red font-medium hover:bg-admin-red hover:text-white transition-all duration-300"
          >
            Cerrar sesión
          </button>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
