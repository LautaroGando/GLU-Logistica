import React from "react";
import { Metadata } from "next";
import { UserSidebar, UserSidebarMobile } from "@/components";

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

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col lg:flex-row min-h-[75vh] lg:min-h-[80vh] ">
      <div className="block lg:hidden">
        <UserSidebarMobile />
      </div>
      <aside className="min-w-[220px] border-r border-gray-200 hidden lg:block">
        <UserSidebar />
      </aside>
      <section className="lg:flex-1 lg:pl-6 lg:overflow-hidden lg:min-w-0">
        {children}
      </section>
    </div>
  );
}
