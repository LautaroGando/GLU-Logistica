import React from "react";
import Title from "../GeneralComponents/Title/Title";
import Image from "next/image";
import warehouseImg from "@/../public/assets/images/Ilustrations/Warehouse/ilustration-warehouse.svg";

const Warehouse = () => {
  return (
    <main>
      <Title label="Depósito" />

      <div className="lg:flex lg:items-center lg:justify-center">
        <div className="w-full mt-6 lg:order-2">
          <Image
            src={warehouseImg}
            width={500}
            height={500}
            alt="Imagen de Depósito"
            className="w-[200px] mx-auto sm:w-[300px] md:w-[350px] lg:w-[430px] xl:w-[490px]"
          />
        </div>
        <div
          className="
        text-sc text-[14px] sm:text-[16px] md:text-[20px] lg:order-1 xl:text-[24px]"
        >
          <h4 className="font-bold mt-6 sm:mt-[86px]">
            Almacenamos tus paquetes en nuestro deposito, organizamos tus pedidos por zona y
            entregamos.
          </h4>
          <p className="font-medium mt-4 sm:mt-[24px]">
            El deposito cuenta con seguridad privada 24hs.
          </p>

          <div className="mt-4 sm:mt-[24px]">
            <p>La ubicación es 100% accesible:</p>
            <ul className="list-disc pl-5">
              <li>Sobre Av. Juan B. Justo</li>
              <li>a 5 cuadras de Av. Gral Paz</li>
              <li>a 5 cuadras de Av. Rivadavia</li>
              <li>a 5 cuadras de Au. 25 de Mayo/Acceso Oeste</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Warehouse;
