"use client";

import { useEffect } from "react";
import { useUserStore } from "@/store";
import React from "react";
import { UserSidebarHeaderSkeleton } from "@/components";

export const UserSidebarHeaderInfo = () => {
  const { user, isLoading, loadUserFromStorage } = useUserStore();

  useEffect(() => {
    loadUserFromStorage();
  }, [loadUserFromStorage]);

  if (isLoading || !user) return <UserSidebarHeaderSkeleton />;

  return (
    <div className="mt-3 text-center h-11">
      <p className="text-lg font-medium">{user.fullName}</p>
      <p className="text-xs text-black/35">{user.address}</p>
    </div>
  );
};
