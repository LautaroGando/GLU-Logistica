import CreateModal from "@/components/AdminComponents/AdminModals/CreateModal/CreateModal";
import HeaderAdmin from "@/components/AdminComponents/HeaderAdmin/HeaderAdmin";
import { CreateModalProvider } from "@/context/CreateModalContext/CreateModalContext";

export const metadata = {
  title: "Panel de Administrador",
  description: "Sección del Administrador",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-admin-primary min-h-screen flex flex-col">
      <CreateModalProvider>
        <CreateModal />
        <HeaderAdmin />
        <div className="flex-grow">
          <div className="root-main px-3 sm:px-4 lg:max-w-[1400px] lg:mx-auto">{children}</div>
        </div>
      </CreateModalProvider>
    </div>
  );
}
