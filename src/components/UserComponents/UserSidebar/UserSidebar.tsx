import React from "react";
import { UserSidebarHeader, UserSidebarNav } from "@/components";

export const UserSidebar = () => {
  return (
    <div className="text-sc mt-[20%]">
      <UserSidebarHeader />
      <UserSidebarNav />
    </div>
  );
};
