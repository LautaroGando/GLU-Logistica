"use client";

import { Formik } from "formik";
import React from "react";
import { IFormAddProps } from "./types";
import { FormClient } from "./FormClient/FormClient";
import { FormWarehouse } from "./FormWarehouse/FormWarehouse";
import { FormShipment } from "./FormShipment/FormShipment";
import { useAdminStore } from "@/store/adminStore/useAdminStore";
import {
  IFormDataClients,
  IFormDataShipments,
  IFormDataWarehouse,
} from "@/data/adminData/formData/types";
import {
  ITableClients,
  ITableShipments,
  ITableWarehouse,
} from "@/data/adminData/tableData/types";

export const FormAdd: React.FC<IFormAddProps> = ({ initialValues }) => {
  const {
    closeModal,
    addUser,
    addProduct,
    addOrder,
    getUsers,
    getProducts,
    getOrders,
  } = useAdminStore();

  if (!initialValues) return null;

  const renderForm = () => {
    if ("fullName" in initialValues) return <FormClient />;
    if ("product" in initialValues) return <FormWarehouse />;
    if ("orderId" in initialValues) return <FormShipment />;
    return null;
  };

  const handleOnSubmit = async (
    values: IFormDataClients | IFormDataWarehouse | IFormDataShipments
  ) => {
    if ("fullName" in initialValues) {
      addUser(values as ITableClients);
      getUsers();
    } else if ("product" in initialValues) {
      addProduct(values as ITableWarehouse);
      getProducts();
    } else if ("orderId" in initialValues) {
      addOrder(values as ITableShipments);
      getOrders();
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={() => {}}
      onSubmit={async (values, { resetForm }) => {
        await handleOnSubmit(values);
        resetForm();
        closeModal();
      }}
    >
      {() => renderForm()}
    </Formik>
  );
};
