import { Menu } from "@/components/AdminComponents/Menu/Menu";
import "../globals.css";
import { Header } from "@/components/AdminComponents/Header/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | GLU Logística",
  description:
    "Accedé al panel de administración para gestionar clientes, envíos, productos en depósito y monitorear el estado de las operaciones logísticas.",
  keywords: [
    "panel administrador",
    "GLU Logística",
    "gestión de envíos",
    "productos en depósito",
    "panel de control",
    "dashboard administrativo",
    "administración logística",
    "clientes y órdenes",
  ],
  openGraph: {
    title: "Admin | GLU Logística",
    description:
      "Panel de administración de GLU Logística. Gestioná usuarios, productos, envíos y operaciones desde un solo lugar.",
    url: "https://glulogistica.com.ar/admin/table-clients",
    siteName: "GLU Logística",
    locale: "es_AR",
    type: "website",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <Menu />
      <main className="mb-[80px] md:ml-[120px] md:mb-0 p-5">{children}</main>
    </div>
  );
}
