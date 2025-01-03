import { ISection } from "@/interfaces/ISection";
import { faCreditCard, faTruckFast, faWarehouse } from "@fortawesome/free-solid-svg-icons";

export const sections: ISection[] = [
    {
        icon: faWarehouse,
        name: 'DEPÓSITO',
        href: '/warehouse',
    },
    {
        icon: faTruckFast,
        name: 'SERVICIOS DE LOGÍSTICA',
        href: '/services-logistics',
    },
    {
        icon: faCreditCard,
        name: 'MEDIOS DE PAGO',
        href: '/payment-methods',
    },
];