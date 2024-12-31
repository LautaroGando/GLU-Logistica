"use client";

import { useEffect, useState } from "react";

export const useSize = () => {
  const [size, setSize] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleSize = () => setSize(window.innerWidth);

    window.addEventListener("resize", handleSize);

    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return { size };
};
