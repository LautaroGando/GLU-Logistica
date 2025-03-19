import { useUsersTableFilters } from "@/context/AdminComponents/UserTableFiltersContext/UserTableFiltersContext";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const UsersSearchBar: React.FC = () => {
  const { setUsersSearchBar } = useUsersTableFilters();

  return (
    <div className="relative group max-w-[550px] mx-auto">
      <FontAwesomeIcon
        icon={faSearch}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-admin-letterColor/50 size-[18px] transition-colors duration-200 group-focus-within:text-admin-green"
      />
      <input
        type="text"
        placeholder="Buscar usuario..."
        className="w-full h-[40px] pl-10 pr-4 py-2 border border-1 border-admin-letterColor bg-admin-secondary text-admin-letterColor outline-none transition-all duration-200 focus:border-admin-green placeholder:text-admin-letterColor/50"
        onChange={(e) => setUsersSearchBar(e.target.value)}
      />
    </div>
  );
};

export default UsersSearchBar;
