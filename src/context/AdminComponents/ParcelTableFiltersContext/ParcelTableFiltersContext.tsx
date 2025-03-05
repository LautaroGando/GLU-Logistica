"use client";

import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import IParcelTableFiltersProps from "./types";
import parcelsData from "@/data/parcelData/parcelData";
import { IPackage } from "@/interfaces/IParcel";

const ParcelTableFiltersContext = createContext<IParcelTableFiltersProps | undefined>(undefined);

export const ParcelTableFiltersProvider = ({ children }: { children: ReactNode }) => {
  const [packages, setPackage] = useState<IPackage[]>(parcelsData);
  const [parcelFilter, setParcelFilter] = useState<string>("all");
  const [parcelOrder, setParcelOrder] = useState<string>("newest");
  const [parcelSearchBar, setParcelSearchBar] = useState<string>("");

  useEffect(() => {
    let processedPackages = [...parcelsData];

    if (parcelFilter === "client") {
      processedPackages = processedPackages.filter((pack) => pack.companyName === "");
    } else if (parcelFilter === "company") {
      processedPackages = processedPackages.filter((pack) => pack.companyName !== "");
    }

    if (parcelOrder === "oldest") {
      processedPackages.sort(
        (a, b) => new Date(a.receivedDate).getTime() - new Date(b.receivedDate).getTime()
      );
    } else if (parcelOrder === "newest") {
      processedPackages.sort(
        (a, b) => new Date(b.receivedDate).getTime() - new Date(a.receivedDate).getTime()
      );
    } else {
      const statusOrder: Record<string, number> = {
        Entregado: parcelOrder === "delivered" ? 0 : 2,
        "En camino": parcelOrder === "in_transit" ? 0 : 2,
        Depósito: parcelOrder === "warehouse" ? 0 : 2,
      };

      processedPackages.sort((a, b) => statusOrder[a.status] - statusOrder[b.status]);
    }

    if (parcelSearchBar !== "") {
      processedPackages = processedPackages
        .filter((pack) => pack.clientName.toLowerCase().startsWith(parcelSearchBar.toLowerCase()))
        .sort((a, b) => a.clientName.localeCompare(b.clientName));
    }

    setPackage(processedPackages);
  }, [parcelFilter, parcelOrder, parcelSearchBar]);

  return (
    <ParcelTableFiltersContext
      value={{ packages, setParcelFilter, setParcelOrder, setParcelSearchBar }}
    >
      {children}
    </ParcelTableFiltersContext>
  );
};

export const useParcelTableFilter = () => {
  const context = useContext(ParcelTableFiltersContext);
  if (!context) {
    throw new Error("useParcelTableFilter debe usarse dentro de parcelTableFiltersProvider");
  }
  return context;
};
