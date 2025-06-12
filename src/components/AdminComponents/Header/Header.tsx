import Image from "next/image";
import React from "react";
import logo from "../../../../public/assets/images/Header/logoWhite.svg";
import { Search } from "../../ui/AdminComponents/Search/Search";

export const Header = () => {
  return (
    <div className="w-full h-[250px] top-0 left-0 bg-pcPrincipal py-5 flex flex-col justify-between">
      <div className="w-full flex justify-center">
        <Image src={logo} alt="Logo" width={200} height={200} />
      </div>
      <Search
        path="/admin/table-clients"
        name="client"
        id="client"
        placeholder="Buscar cliente..."
      />
      <Search
        path="/admin/table-warehouse"
        name="product"
        id="product"
        placeholder="Buscar producto..."
      />
      <Search
        path="/admin/table-shipments"
        name="order"
        id="order"
        placeholder="Buscar órden..."
      />
      <Search
        path="/admin/table-delivered"
        name="delivered"
        id="delivered"
        placeholder="Buscar órden..."
      />
      <Search
        path="/admin/table-payments"
        name="payments"
        id="payments"
        placeholder="Buscar semana..."
      />
    </div>
  );
};
