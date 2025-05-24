import { Form, Field } from "formik";
import { ButtonSend } from "../ButtonSend/ButtonSend";
import { TitleForm } from "../TitleForm/TitleForm";
import { ButtonModaleClose } from "../../ButtonModalClose/ButtonModaleClose";

export const FormClient = () => (
  <Form className="p-4 flex flex-col gap-5">
    <TitleForm label="Añadir cliente:" />
    <div className="w-full">
      <Field
        className="input"
        name="fullName"
        id="fullName"
        type="text"
        placeholder="Nombre completo:"
      />
    </div>
    <div className="w-full">
      <Field
        className="input"
        name="email"
        id="email"
        type="text"
        placeholder="Correo electrónico:"
      />
    </div>
    <div className="w-full">
      <Field
        className="input"
        name="dni"
        id="dni"
        type="text"
        placeholder="Número de documento:"
      />
    </div>
    <Field
      className="input"
      name="address"
      id="address"
      type="text"
      placeholder="Dirección:"
    />
    <div className="w-full">
      <Field
        className="input"
        name="phone"
        id="phone"
        type="text"
        placeholder="Número de teléfono:"
      />
    </div>
    <Field
      className="input"
      name="birthdate"
      id="birthdate"
      placeholder="Fecha de nacimiento:"
      type="date"
    />
    <div className="w-full">
      <Field
        className="input"
        name="company"
        id="company"
        type="text"
        placeholder="Empresa"
      />
    </div>
    <div className="flex flex-col items-center gap-2">
      <ButtonSend label="Guardar cliente" />
      <ButtonModaleClose />
    </div>
  </Form>
);
