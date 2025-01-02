import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/HeaderComponents/Header";
import { MenuProvider } from "@/context/MenuContext/MenuContext";

export const metadata: Metadata = {
  title: "La Vuelta Logística",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiase">
        <MenuProvider>
          <Header />
          <main className="px-3 my-10 sm:px-4 lg:px-0 lg:max-w-[1200px] lg:mx-auto">
            {children}
          </main>
        </MenuProvider>
      </body>
    </html>
  );
}