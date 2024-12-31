import MPImg from "@/../public/assets/icons/mercadoPago.svg";
import { faCoins, faBuildingColumns, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { StaticImageData } from "next/image";

export interface IMethod {
  id: string;
  icon?: IconDefinition;
  image?: StaticImageData;
  label: string;
  iconColor?: string;
}

const methods: IMethod[] = [
  {
    id: "mercadoPago",
    icon: undefined,
    image: MPImg,
    label: "Mercado Pago",
    iconColor: "text-pcPrincipal",
  },

  {
    id: "transfer",
    icon: faBuildingColumns,
    image: undefined,
    label: "Transferencia",
    iconColor: "text-sc",
  },

  {
    id: "cash",
    icon: faCoins,
    image: undefined,
    label: "Efectivo",
    iconColor: "text-pcPrincipal",
  },
];

export default methods;
