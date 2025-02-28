import React from "react";
import IRecordsCountProps from "./types";

const RecordsCount: React.FC<IRecordsCountProps> = ({ text, number }) => {
  return (
    <div className="w-full mt-[17px] mb-[30px]">
      <p className="flex justify-center gap-2 text-[17px] sm:text-[18px] lg:text-[20px]">
        <span>{text}:</span> <span className="text-admin-green font-bold">{number}</span>
      </p>
    </div>
  );
};

export default RecordsCount;
