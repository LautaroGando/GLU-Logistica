import { useMenuDashboard } from "@/context/MenuDashboardContext/MenuDashboardContext";
import { ILinkDashboard } from "@/interfaces/ILinkDashboard";
import { linksDashboard } from "@/utils/links-dashboard";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const LinksDashboard: React.FC = () => {
  const pathname = usePathname();
  const { handleCloseMenuDashboard } = useMenuDashboard();

  return (
    <div className="flex flex-col items-center gap-5">
      <h3 className="w-[115.89px] text-center font-semibold sm:text-lg sm:w-[131px]">Centro de datos</h3>
      <div className="flex flex-col gap-5">
        {linksDashboard.map((link: ILinkDashboard, i: number) => {
          const isActive = pathname === link.href;

          return (
            <div
              className={`w-[205px] h-[40px] flex justify-center items-center text-sm border-l-4 ${
                isActive ? "border-pcPrincipal" : "border-transparent"
              } sm:text-base`}
              key={i}
            >
              <Link onClick={handleCloseMenuDashboard} href={link.href}>
                {link.name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LinksDashboard;
