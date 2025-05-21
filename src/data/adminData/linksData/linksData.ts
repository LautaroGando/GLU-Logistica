import {
  faTruckFast,
  faUser,
  faWarehouse,
} from "@fortawesome/free-solid-svg-icons";
import { ILinkData } from "./types";

export const linksData: ILinkData[] = [
  {
    icon: faUser,
    href: "/admin/table-clients",
    label: "Clientes",
  },
  {
    icon: faWarehouse,
    href: "/admin/table-warehouse",
    label: "Depósito",
  },
  {
    icon: faTruckFast,
    href: "/admin/table-shipments",
    label: "Envíos",
  },
];
