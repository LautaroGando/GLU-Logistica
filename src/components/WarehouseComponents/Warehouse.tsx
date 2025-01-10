"use client";

import React from "react";
import { motion } from "framer-motion";
import Title from "../GeneralComponents/Title/Title";
import Image from "next/image";
import warehouseImg from "@/../public/assets/images/Ilustrations/Warehouse/ilustration-warehouse.svg";
import WarehouseItem from "./WarehouseItem/WarehouseItem";
import { warehouseData } from "./utils/warehouseData";

const Warehouse = () => {
  return (
    <main className="text-sc">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Title label="Depósito" />
      </motion.div>

      <div className="lg:flex lg:items-start lg:justify-between">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full mt-6 lg:order-2 lg:w-[100%] xl:w-[40%] lg:sticky lg:top-[120px]"
        >
          <Image
            src={warehouseImg}
            width={500}
            height={500}
            alt="Imagen de Depósito"
            className="w-[200px] mx-auto sm:w-[300px] md:w-[350px] lg:w-[430px] xl:w-[490px]"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2, delayChildren: 0.3 },
            },
          }}
          className="text-sc text-[14px] mt-14 sm:text-[16px] md:w-[100%] md:text-[20px] lg:order-1 lg xl:text-[24px] xl:w-[600px]"
        >
          {warehouseData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.7 }}
            >
              <WarehouseItem title={item.title} description={item.description} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
};

export default Warehouse;
