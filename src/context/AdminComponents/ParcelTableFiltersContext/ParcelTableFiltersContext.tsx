"use client";

import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import IParcelTableFiltersProps from "./types";
import { IPackage } from "@/interfaces/IParcel";
import { createPackage, deletePackage, editPackage, getAllPackages } from "@/services/package";
import { IPackageDto } from "@/dto/IPackageDto";
import { IStatePackage } from "@/interfaces/IStatePackage";

const ParcelTableFiltersContext = createContext<IParcelTableFiltersProps | undefined>(undefined);

export const ParcelTableFiltersProvider = ({ children }: { children: ReactNode }) => {
  const [packages, setPackages] = useState<IPackage[] | null>(null);
  const [filteredPackages, setFilteredPackages] = useState<IPackage[] | null>(null);
  const [parcelFilter, setParcelFilter] = useState<string>("all");
  const [parcelOrder, setParcelOrder] = useState<string>("newest");
  const [parcelSearchBar, setParcelSearchBar] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAllPackages = async () => {
    try {
      setLoading(true);
      const data = await getAllPackages();
      setPackages(data);
      setError(null);
    } catch {
      setError("No se pudieron cargar los paquetes.");
    } finally {
      setLoading(false);
    }
  };

  const handleCreatePackage = async (values: IPackageDto) => {
    try {
      const createdPackage = await createPackage(values);
      setPackages((prev) => (prev ? [...prev, createdPackage] : [createdPackage]));
    } catch (err) {
      console.error("Error al crear paquete:", err);
    }
  };

  const handleEditPackage = async (packageId: string, values: IPackageDto) => {
    try {
      const editedPackage = await editPackage(packageId, values);
      setPackages((prev) => {
        if (!prev) return [editedPackage];

        const filtered = prev.filter((pkg) => pkg.id !== packageId);
        return [editedPackage, ...filtered];
      });
    } catch (err) {
      console.log(`Error al editar el paquete ${err}`);
    }
  };

  // const handleUpdatePackage = async (id: string, updatedData) => {
  //   try {
  //     const updated = await updatePackageApi(id, updatedData);
  //     setPackages((prev) => prev?.map(pkg => pkg.id === id ? updated : pkg) || null);
  //   } catch (err) {
  //     console.error("Error al actualizar paquete:", err);
  //   }
  // };

  // const handleDeletePackage = async (id: string) => {
  //   try {
  //     await deletePackageApi(id);
  //     setPackages((prev) => prev?.filter(pkg => pkg.id !== id) || null);
  //   } catch (err) {
  //     console.error("Error al eliminar paquete:", err);
  //   }
  // };

  useEffect(() => {
    fetchAllPackages();
  }, []);

  const handleDeletePackage = async (packageId: string) => {
    try {
      setLoading(true);
      await deletePackage(packageId);

      setPackages((prev) => prev?.filter((pack) => pack.id !== packageId) || null);
      setFilteredPackages((prev) => prev?.filter((pack) => pack.id !== packageId) || null);
      setError(null);
    } catch (err) {
      console.error("Error al eliminar paquete:", err);
      setError("No se pudo eliminar el paquete.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!packages) return;

    let processed = [...packages];

    if (parcelFilter === IStatePackage.DEPOSIT) {
      processed = processed.filter((pack) => pack.status === IStatePackage.DEPOSIT);
    } else if (parcelFilter === IStatePackage.IN_TRANSIT) {
      processed = processed.filter((pack) => pack.status === IStatePackage.IN_TRANSIT);
    } else if (parcelFilter === IStatePackage.DELIVERED) {
      processed = processed.filter((pack) => pack.status === IStatePackage.DELIVERED);
    }

    if (parcelOrder === "oldest") {
      processed.sort(
        (a, b) => new Date(a.receivedDate).getTime() - new Date(b.receivedDate).getTime()
      );
    } else if (parcelOrder === "newest") {
      processed.sort(
        (a, b) => new Date(b.receivedDate).getTime() - new Date(a.receivedDate).getTime()
      );
    } else {
      const statusOrder: Record<string, number> = {
        [IStatePackage.DEPOSIT]: parcelOrder === IStatePackage.DEPOSIT ? 0 : 2,
        [IStatePackage.IN_TRANSIT]: parcelOrder === IStatePackage.IN_TRANSIT ? 0 : 2,
        [IStatePackage.DELIVERED]: parcelOrder === IStatePackage.DELIVERED ? 0 : 2,
      };

      processed.sort((a, b) => statusOrder[a.status] - statusOrder[b.status]);
    }

    if (parcelSearchBar.trim() !== "") {
      processed = processed.filter((pack) =>
        (pack.clientName || "").toLowerCase().startsWith(parcelSearchBar.toLowerCase())
      );
    }

    setFilteredPackages(processed);
  }, [packages, parcelFilter, parcelOrder, parcelSearchBar]);

  return (
    <ParcelTableFiltersContext.Provider
      value={{
        loading,
        error,
        packages: filteredPackages,
        setParcelFilter,
        setParcelOrder,
        setParcelSearchBar,
        handleCreatePackage,
        fetchAllPackages,
        handleDeletePackage,
        handleEditPackage,
      }}
    >
      {children}
    </ParcelTableFiltersContext.Provider>
  );
};

export const useParcelTableFilter = () => {
  const context = useContext(ParcelTableFiltersContext);
  if (!context) {
    throw new Error("useParcelTableFilter debe usarse dentro de ParcelTableFiltersProvider");
  }
  return context;
};
