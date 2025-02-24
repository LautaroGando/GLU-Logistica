import React from "react";
import Profile from "./Profile/Profile";
import MenuResponsiveDashboard from "./MenuResponsiveDashboard/MenuResponsiveDashboard";
import History from "./History/History";

export const Dashboard: React.FC = () => {
  return (
    <div className="relative min-h-[500px] -my-[40px] -mb-[100px] py-10 lg:flex">
      <MenuResponsiveDashboard />
      <div className="flex justify-center lg:flex-1">
        <Profile />
        <History />
      </div>
    </div>
  );
};

export default Dashboard;
