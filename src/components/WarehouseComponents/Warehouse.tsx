import React from "react";
import Title from "../GeneralComponents/Title/Title";
import Image from "next/image";
import warehouseImg from "@/../public/assets/images/Ilustrations/Warehouse/ilustration-warehouse.svg";
import WarehouseItem from "./WarehouseItem/WarehouseItem";
import { warehouseData } from "./utils/warehouseData";

const Warehouse = () => {
  return (
    <main className="text-sc">
      <Title label="Depósito" />

      <div className="lg:flex lg:items-start lg:justify-between">
        <div className="w-full mt-6 lg:order-2 lg:w-[100%] xl:w-[40%] lg:sticky lg:top-[120px]">
          <Image
            src={warehouseImg}
            width={500}
            height={500}
            alt="Imagen de Depósito"
            className="w-[200px] mx-auto sm:w-[300px] md:w-[350px] lg:w-[430px] xl:w-[490px]"
          />
        </div>
        <div className="text-sc text-[14px] mt-14 sm:text-[16px] md:w-[100%] md:text-[20px] lg:order-1 lg xl:text-[24px] xl:w-[600px]">
          {warehouseData.map((item, index) => (
            <WarehouseItem key={index} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Warehouse;
