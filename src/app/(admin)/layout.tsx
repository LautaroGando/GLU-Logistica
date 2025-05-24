import { Menu } from "@/components/AdminComponents/Menu/Menu";
import "../globals.css";
import { Header } from "@/components/AdminComponents/Header/Header";

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
