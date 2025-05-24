import Warehouse from "@/components/WarehouseComponents/Warehouse";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Depósito y Almacenaje | GLU Logística",
  description:
    "Servicio de depósito y almacenamiento seguro para empresas y particulares. Protegé tus productos con la infraestructura de GLU Logística en Argentina.",
  keywords: [
    "depósito de productos",
    "almacenaje seguro",
    "servicio de depósito",
    "logística de almacenaje",
    "almacén para empresas",
    "almacenamiento de paquetes",
    "GLU Logística depósito",
  ],
};

export default function WarehousePage() {
  return (
    <div>
      <Warehouse />
    </div>
  );
}
