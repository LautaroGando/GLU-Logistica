import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/HeaderComponents/Header";
import { MenuProvider } from "@/context/MenuContext/MenuContext";
import Footer from "@/components/FooterComponents/Footer";
import NewsLetterModal from "@/components/ui/NewsLetterModal/NewsLetterModal";
import WhatsAppLink from "@/components/ui/WhatsAppLink/WhatsAppLink";
import { ChangeServiceProvider } from "@/context/ChangeServiceContext/ChangeServiceContext";
import { headers as getHeaders } from "next/headers";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "GLU Logística | Transporte de Paquetes en Argentina",
  description:
    "GLU Logística ofrece soluciones rápidas, seguras y eficientes en transporte de paquetes para empresas y particulares. Optimiza tus envíos con nuestro servicio confiable y personalizado.",
  keywords: [
    "logística",
    "envíos",
    "transporte de paquetes",
    "mensajería",
    "logística empresarial",
    "servicios de logística",
    "envíos seguros",
    "logística para empresas",
    "envíos rápidos",
    "logística en Argentina",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const serverHeaders = getHeaders() as unknown as Headers;
  const pageClass = serverHeaders.get("x-page-class") || "default-layout";

  return (
    <html lang="es">
      <body
        id="site-layout"
        className={clsx(
          "site-layout antialiase",
          pageClass === "/admin" && "bg-admin-primary"
        )}
      >
        <MenuProvider>
          <ChangeServiceProvider>
            <Header />
            <main className="p-2 max-w-[1200px] mx-auto sm:p-4">
              {children}
            </main>
            <NewsLetterModal />
            <WhatsAppLink />
            <Footer />
          </ChangeServiceProvider>
        </MenuProvider>
      </body>
    </html>
  );
}
