import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/HeaderComponents/Header";
import { MenuProvider } from "@/context/MenuContext/MenuContext";
import Footer from "@/components/FooterComponents/Footer";
import NewsLetterModal from "@/components/ui/NewsLetterModal/NewsLetterModal";
import WhatsAppLink from "@/components/ui/WhatsAppLink/WhatsAppLink";
import { ChangeServiceProvider } from "@/context/ChangeServiceContext/ChangeServiceContext";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/next";

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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body id="site-layout" className="site-layout antialiase">
        <MenuProvider>
          <ChangeServiceProvider>
            <Header />
            <main className="p-2 max-w-[1200px] mx-auto sm:p-4">
              {children}
            </main>
            <NewsLetterModal />
            <WhatsAppLink />
            <Footer />
            <Analytics />
          </ChangeServiceProvider>
        </MenuProvider>
      </body>
    </html>
  );
}
