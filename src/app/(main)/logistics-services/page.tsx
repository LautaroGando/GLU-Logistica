import LogisticsServices from "@/components/LogisticsServicesComponents/LogisticsServices";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios de Logística Integral | GLU Logística",
  description:
    "Soluciones de logística y transporte para empresas y particulares. Ofrecemos envíos rápidos, distribución eficiente y servicios personalizados en toda Argentina.",
  keywords: [
    "servicios de logística",
    "transporte de paquetes",
    "distribución eficiente",
    "soluciones de transporte",
    "logística para empresas",
    "mensajería segura",
    "GLU Logística servicios",
  ],
};

export default function LogisticsServicesPage() {
  return (
    <div>
      <LogisticsServices />
    </div>
  );
}
