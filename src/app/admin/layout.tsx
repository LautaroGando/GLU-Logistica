import CreateModal from "@/components/AdminComponents/AdminModals/CreateModal/CreateModal";
import EditModalParcel from "@/components/AdminComponents/AdminModals/EditModal/EditModalParcel/EditModalParcel";
import HeaderAdmin from "@/components/AdminComponents/HeaderAdmin/HeaderAdmin";
import { CreateModalProvider } from "@/context/AdminComponents/CreateModalContext/CreateModalContext";
import { EditModalProvider } from "@/context/AdminComponents/EditModalContext/EditModalContext";
import { ParcelTableFiltersProvider } from "@/context/AdminComponents/ParcelTableFiltersContext/ParcelTableFiltersContext";
import { UserTableFiltersProvider } from "@/context/AdminComponents/UserTableFiltersContext/UserTableFiltersContext";

export const metadata = {
  title: "Panel de Administrador",
  description: "Sección del Administrador",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-admin-primary min-h-screen flex flex-col">
      <EditModalProvider>
        <CreateModalProvider>
          <ParcelTableFiltersProvider>
            <UserTableFiltersProvider>
              <CreateModal />
              <EditModalParcel />
              <HeaderAdmin />
              <div className="flex-grow">
                <div className="root-main px-3 sm:px-4 lg:max-w-[1400px] lg:mx-auto">
                  {children}
                </div>
              </div>
            </UserTableFiltersProvider>
          </ParcelTableFiltersProvider>
        </CreateModalProvider>
      </EditModalProvider>
    </div>
  );
}
