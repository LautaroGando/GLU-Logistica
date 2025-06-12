import React from "react";
import { UserInfoForm, UserTitle } from "@/components";

export const Profile = () => {
  return (
    <section>
      <UserTitle text="Mi Información" />
      <div className="lg:max-w-screen-md mx-auto mt-10 sm:mt-[10vh]">
        <UserInfoForm />
      </div>
    </section>
  );
};
