import { faClock, faTruckFast, faUser, faWarehouse } from "@fortawesome/free-solid-svg-icons";
import { IUserSidebarLinksProps } from "./types";

export const userSidebarLinks: IUserSidebarLinksProps[] = [
  { href: "/user/profile", icon: faUser, label: "Mi información" },
  { href: "/user/deposit", icon: faWarehouse, label: "Depósito" },
  { href: "/user/shipments", icon: faTruckFast, label: "Mis Envíos" },
  { href: "/user/history", icon: faClock, label: "Historial" },
];
