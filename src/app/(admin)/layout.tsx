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
      <main className="ml-[120px] p-5">{children}</main>
    </div>
  );
}
