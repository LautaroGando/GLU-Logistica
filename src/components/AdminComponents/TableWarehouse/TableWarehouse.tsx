"use client";

import { useEffect, useMemo, useState } from "react";
import { Filter } from "@/components/ui/AdminComponents/Filter/Filter";
import Pagination from "@/components/ui/AdminComponents/Pagination/Pagination";
import { Table } from "@/components/ui/AdminComponents/Table/Table";
import { tableData } from "@/data/adminData/tableData/tableData";
import { ButtonAdd } from "@/components/ui/AdminComponents/ButtonAdd/ButtonAdd";
import { Modal } from "@/enum/Modal";
import { useAdminStore } from "@/store/adminStore/useAdminStore";
import { IFilter } from "@/interfaces/IFilter";
import { ITableWarehouse } from "@/data/adminData/tableData/types";

export const TableWarehouse = () => {
  const { products, getProducts, searchTerm } = useAdminStore();
  const [filteredProducts, setFilteredProducts] = useState<ITableWarehouse[]>(
    []
  );
  const [selectedFilter, setSelectedFilter] = useState<string>("");

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  useEffect(() => {
    const productList = products?.data || [];

    if (!productList.length) {
      setFilteredProducts([]);
      return;
    }

    const result = productList.filter((product) => {
      const matchesCompany = selectedFilter
        ? product.company?.toLowerCase().includes(selectedFilter)
        : true;

      const matchesSearch = searchTerm
        ? product.company?.toLowerCase().includes(searchTerm)
        : true;

      return matchesCompany && matchesSearch;
    });

    setFilteredProducts(result);
  }, [selectedFilter, products, searchTerm]);

  const companyFilterOptions: IFilter[] = useMemo(() => {
    if (!products) return [];
    const uniqueCompanies = Array.from(
      new Set(products.data.map((p) => p.company).filter(Boolean))
    );
    return uniqueCompanies.map((company) => ({
      label: company!,
      value: company!.toLowerCase(),
    }));
  }, [products]);

  return (
    <div className="w-full flex flex-col gap-5 p-3">
      <div className="flex flex-col gap-5 sm:flex-row sm:justify-between">
        <Filter
          filter={companyFilterOptions}
          onChange={(value) => setSelectedFilter(value)}
        />
        <Pagination table="warehouse" />
      </div>
      <div className="w-full overflow-auto">
        <Table
          tableHeadData={tableData[1].tableHeadData}
          tableBodyData={filteredProducts}
        />
      </div>
      <div className="w-full flex justify-end">
        <ButtonAdd label="Añadir producto" modalType={Modal.WAREHOUSE} />
      </div>
    </div>
  );
};
