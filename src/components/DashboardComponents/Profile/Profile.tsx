"use client";

import SectionDashboard from "@/components/ui/SectionDashboard/SectionDashboard";
import { useUser } from "@/context/UserContext/UserContext";
import { formatDate } from "@/utils/format-date";
import { usePathname } from "next/navigation";
import React from "react";

export const Profile: React.FC = () => {
  const { user } = useUser();
  const pathname = usePathname();

  if (!user) return null;
  else if (pathname !== '/dashboard/profile') return null;

  return (
    <div className="flex flex-col gap-5 w-full h-[500px] max-h-[500px] mb-10 sm:w-[80%] lg:justify-center lg:mb-0">
      <SectionDashboard label="Información" />
      <div className="flex flex-col gap-3 mx-auto w-full max-w-[550px]">
        {[
          {
            date: "Correo electrónico:",
            value: `${user.email}`,
          },
          {
            date: "Documento:",
            value: `${user.idNumber}`,
          },
          {
            date: "Localidad:",
            value: `${user.location}`,
          },
          {
            date: "Teléfono:",
            value: `${user.phone}`,
          },
          {
            date: "Fecha de nacimiento:",
            value: `${formatDate(user.birthdate)}`,
          },
        ].map((item, i) => (
          <div
            className="w-full h-[43px] border-[1px] px-2 border-tcExtra/15 flex items-center"
            key={i}
          >
            <p className="text-xs sm:text-sm">
              {item.date} <span className="text-tcExtra">{item.value}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
