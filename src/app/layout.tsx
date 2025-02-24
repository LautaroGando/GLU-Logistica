import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/HeaderComponents/Header";
import { MenuProvider } from "@/context/MenuContext/MenuContext";
import Footer from "@/components/FooterComponents/Footer";
import NewsLetterModal from "@/components/ui/NewsLetterModal/NewsLetterModal";
import WhatsAppLink from "@/components/ui/WhatsAppLink/WhatsAppLink";
import { ChangeServiceProvider } from "@/context/ChangeServiceContext/ChangeServiceContext";
import { TokenContextProvider } from "@/context/TokenContext/TokenContext";
import { UserContextProvider } from "@/context/UserContext/UserContext";
import { MenuDashboardProvider } from "@/context/MenuDashboardContext/MenuDashboardContext";

export const metadata: Metadata = {
  title: "La Vuelta Logística",
  description: "",
  icons: "/assets/images/Header/logo.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiase">
        <TokenContextProvider>
          <UserContextProvider>
            <MenuProvider>
              <ChangeServiceProvider>
                <MenuDashboardProvider>
                  <Header />
                  <main className="px-3 my-10 sm:px-4 lg:max-w-[1200px] lg:mx-auto">
                    {children}
                  </main>
                  <NewsLetterModal />
                  <WhatsAppLink />
                  <Footer />
                </MenuDashboardProvider>
              </ChangeServiceProvider>
            </MenuProvider>
          </UserContextProvider>
        </TokenContextProvider>
      </body>
    </html>
  );
}
