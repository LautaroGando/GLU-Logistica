import type { Metadata } from "next";
import "./globals.css";

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
      <body className={`antialiased`}>
        <main className="px-3 sm:px-4 lg:max-w-[1200px] lg:mx-auto">{children}</main>
      </body>
    </html>
  );
}
