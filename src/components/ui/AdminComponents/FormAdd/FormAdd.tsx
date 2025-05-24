import { Formik } from "formik";
import React from "react";
import { IFormAddProps } from "./types";
import { FormClient } from "./FormClient/FormClient";
import { FormWarehouse } from "./FormWarehouse/FormWarehouse";
import { FormShipment } from "./FormShipment/FormShipment";

export const FormAdd: React.FC<IFormAddProps> = ({
  initialValues,
}: IFormAddProps) => {
  if (!initialValues) return null;

  const renderForm = () => {
    if ("fullName" in initialValues) return <FormClient />;
    if ("product" in initialValues) return <FormWarehouse />;
    if ("orderId" in initialValues) return <FormShipment />;
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={() => {}}
      onSubmit={() => {}}
    >
      {() => renderForm()}
    </Formik>
  );
};
