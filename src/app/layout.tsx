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
import { headers as getHeaders } from "next/headers";
import clsx from "clsx";
import BackgroundUpdater from "@/helpers/BackgroundUpdater";
import { MenuDashboardProvider } from "@/context/MenuDashboardContext/MenuDashboardContext";

export const metadata: Metadata = {
  title: "La Vuelta Logística",
  description: "",
  icons: "/assets/images/Header/logo.svg",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const serverHeaders = getHeaders() as unknown as Headers;
  const pageClass = serverHeaders.get("x-page-class") || "default-layout";

  return (
    <html lang="es">
      <body
        id="site-layout"
        className={clsx("site-layout antialiase", pageClass === "/admin" && "bg-admin-primary")}
      >
        <TokenContextProvider>
          <UserContextProvider>
            <MenuProvider>
              <ChangeServiceProvider>
                <MenuDashboardProvider>
                  <Header />
                  <BackgroundUpdater />
                  <main>{children}</main>
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
