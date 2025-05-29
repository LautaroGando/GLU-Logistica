import React from "react";

export const UserTitle: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div>
      <div className="flex items-center gap-2 mt-8 sm:mt-10">
        <h2 className="text-xl text-sc sm:text-[22px]">{text}</h2>
        <div className="w-[10px] sm:w-[14px] h-4 sm:h-5 bg-pcPrincipal [clip-path:polygon(0%_0%,_100%_50%,_0%_100%)]" />
      </div>
      <div className="w-full h-[0.1px] mt-2 sm:mt-4 bg-black/20"/>
    </div>
  );
};
