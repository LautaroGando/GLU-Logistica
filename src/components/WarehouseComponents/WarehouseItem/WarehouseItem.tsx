import React from "react";
import { IWarehouseItemProps } from "./types";

const WarehouseItem: React.FC<IWarehouseItemProps> = ({ title, description }) => {
  return (
    <div>
      <h4 className="text-pcPrincipal font-bold mt-6 sm:mt-[50px]">{title}</h4>

      {description && (
        <div className="mt-4 sm:mt-[24px] ">
          <div className="text-sm leading-[1.35] whitespace-pre-line sm:text-[16px] md:text-[20px] xl:text-[24px]">
            {description}
          </div>
        </div>
      )}
    </div>
  );
};

export default WarehouseItem;
