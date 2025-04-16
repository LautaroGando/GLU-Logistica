"use client";

import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import IParcelTableFiltersProps from "./types";
import { IPackage } from "@/interfaces/IParcel";
import { createPackage, getAllPackages } from "@/services/package";
import { IPackageDto } from "@/dto/IPackageDto";

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
      const created = await createPackage(values);
      setPackages((prev) => (prev ? [...prev, created] : [created]));
    } catch (err) {
      console.error("Error al crear paquete:", err);
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

  useEffect(() => {
    if (!packages) return;

    let processed = [...packages];

    if (parcelFilter === "client") {
      processed = processed.filter((pack) => !pack.companyName);
    } else if (parcelFilter === "company") {
      processed = processed.filter((pack) => pack.companyName);
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
        Entregado: parcelOrder === "delivered" ? 0 : 2,
        "En camino": parcelOrder === "in_transit" ? 0 : 2,
        Depósito: parcelOrder === "warehouse" ? 0 : 2,
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
