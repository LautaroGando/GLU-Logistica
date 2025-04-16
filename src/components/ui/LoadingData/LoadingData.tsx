"use client";

import React from "react";

const LoadingData: React.FC = () => {
  return (
    <div className="w-full min-h-[200px] flex items-center justify-center">
      <div className="relative w-14 h-14">
        <div className="absolute inset-0 rounded-full border-4 border-white/20" />
        <div className="absolute inset-0 rounded-full border-4 border-white border-t-transparent animate-spin shadow-lg" />
      </div>
    </div>
  );
};

export default LoadingData;
