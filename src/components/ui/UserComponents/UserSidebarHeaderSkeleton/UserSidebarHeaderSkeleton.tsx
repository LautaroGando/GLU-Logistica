import React from "react";

export const UserSidebarHeaderSkeleton = () => {
  return (
    <div className="mt-3 text-center h-11 space-y-1 animate-pulse">
      <div className="mx-auto h-5 w-24 bg-gray-300 rounded" />
      <div className="mx-auto h-3 w-20 bg-gray-200 rounded" />
    </div>
  );
};
