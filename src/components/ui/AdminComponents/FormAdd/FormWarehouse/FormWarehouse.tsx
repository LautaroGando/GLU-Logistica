import { Form, Field } from "formik";
import { ButtonSend } from "../ButtonSend/ButtonSend";
import { TitleForm } from "../TitleForm/TitleForm";
import { ButtonModaleClose } from "../../ButtonModalClose/ButtonModaleClose";

export const FormWarehouse = () => (
  <Form className="p-4 flex flex-col gap-5">
    <TitleForm label="Añadir producto:" />
    <div className="w-full">
      <Field
        className="input"
        name="id"
        id="id"
        type="text"
        placeholder="Id del producto:"
      />
    </div>
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
      />
    </div>
    <div className="flex flex-col items-center gap-2">
      <ButtonSend label="Guardar en depósito" />
      <ButtonModaleClose />
    </div>
  </Form>
);
