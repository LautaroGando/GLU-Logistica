import { Dashboard } from "@/components/DashboardComponents/Dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perfil | GLU Logística",
  description:
    "Accedé a tu panel personal para ver el estado de tus productos en depósito, gestionar tus envíos y recibir notificaciones importantes.",
  keywords: [
    "panel usuario",
    "GLU Logística",
    "productos en depósito",
    "seguimiento de paquetes",
    "estado de envío",
    "envíos personales",
    "mi logística",
    "dashboard cliente",
  ],
  openGraph: {
    title: "Perfil | GLU Logística",
    description:
      "Consultá el estado de tus productos almacenados y gestioná tus envíos desde tu panel personal de GLU Logística.",
    url: "https://glulogistica.com.ar/dashboard",
    siteName: "GLU Logística",
    locale: "es_AR",
    type: "website",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function DashboardPage() {
  return (
    <div>
      <Dashboard />
    </div>
  );
}
