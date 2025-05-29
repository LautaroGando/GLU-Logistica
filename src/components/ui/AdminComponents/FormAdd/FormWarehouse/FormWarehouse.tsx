import { Form, Field } from "formik";
import { ButtonSend } from "../ButtonSend/ButtonSend";
import { TitleForm } from "../TitleForm/TitleForm";
import { ButtonModaleClose } from "../../ButtonModalClose/ButtonModaleClose";
import { useAdminStore } from "@/store/adminStore/useAdminStore";
import { useEffect } from "react";
import { ITableClients } from "@/data/adminData/tableData/types";

export const FormWarehouse = () => {
  const { users, getUsers } = useAdminStore();

  useEffect(() => {
    const handleFetchUsers = () => {
      getUsers();
    };

    handleFetchUsers();
  }, [getUsers]);

  return (
    <Form className="p-4 flex flex-col gap-5">
      <TitleForm label="Añadir producto:" />
      <div className="w-full">
        <Field
          className="input"
          name="product"
          id="product"
          type="text"
          placeholder="Nombre del producto:"
        />
      </div>
      <div className="w-full">
        <Field
          className="input"
          name="quantity"
          id="quantity"
          type="number"
          placeholder="Cantidad:"
        />
      </div>
      <div className="w-full">
        <Field
          className="input"
          name="company"
          id="company"
          type="text"
          placeholder="Empresa:"
          as="select"
        >
          <option value="">Seleccione una opción:</option>
          {users?.data.map((user: ITableClients, i: number) => (
            <option key={i} value={user.company}>
              {user.company}
            </option>
          ))}
        </Field>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ButtonSend label="Guardar en depósito" />
        <ButtonModaleClose />
      </div>
    </Form>
  );
};
