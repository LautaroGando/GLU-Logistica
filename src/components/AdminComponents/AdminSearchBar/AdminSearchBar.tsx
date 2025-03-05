import useLastPath from "@/hooks/useLastPath";
import React from "react";
import UsersSearchBar from "./UsersSearchBar/UsersSearchBar";
import ParcelSearchBar from "./ParcelSearchBar/ParcelSearchBar";

const AdminSearchBar: React.FC = () => {
  const lastPath = useLastPath();
  return lastPath === "users" ? <UsersSearchBar /> : <ParcelSearchBar />;
};

export default AdminSearchBar;
