"use client";
import { usePathname } from "next/navigation";

const useLastPath = () => {
  const pathname = usePathname();
  const lastPath = pathname.split("/").filter(Boolean).pop();

  return lastPath;
};

export default useLastPath;
