import React from "react";
import UsersFilter from "./UsersFilter/UsersFilter";
import useLastPath from "@/hooks/useLastPath";
import ParcelFilter from "./ParcelFilter/ParcelFilter";

const FilterSortBar: React.FC = () => {
  const lastPath = useLastPath();

  return lastPath === "users" ? <UsersFilter /> : <ParcelFilter />;
};

export default FilterSortBar;
