"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const BackgroundUpdater = () => {
  const pathname = usePathname();

  useEffect(() => {
    const body = document.getElementById("site-layout");

    if (body) {
      body.className = "site-layout antialiase";

      if (pathname === "/admin") {
        body.classList.add("bg-admin-primary");
      } else if (pathname === "/otra-cosa") {
        body.classList.add("bg-other-primary");
      }
    }
  }, [pathname]);

  return null;
};

export default BackgroundUpdater;
