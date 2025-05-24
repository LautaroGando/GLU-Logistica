import { Form, Field } from "formik";
import { ButtonSend } from "../ButtonSend/ButtonSend";
import { TitleForm } from "../TitleForm/TitleForm";
import { ButtonModaleClose } from "../../ButtonModalClose/ButtonModaleClose";

export const FormShipment = () => (
  <Form className="p-4 flex flex-col gap-5">
    <TitleForm label="Añadir órden:" />
    <div className="w-full">
      <Field
        className="input"
        name="orderId"
        id="orderId"
        type="text"
        placeholder="Id de la órden:"
      />
    </div>
    <div className="w-full">
      <Field
        className="input"
        name="address"
        id="address"
        type="text"
        placeholder="Dirección:"
      />
    </div>
    <div className="w-full">
      <Field
        className="input"
        name="locality"
        id="locality"
        type="text"
        placeholder="Localidad:"
      />
    </div>
    <div className="w-full">
      <Field
        className="input"
        name="postalCode"
        id="postalCode"
        type="text"
        placeholder="Código postal:"
      />
    </div>
    <div className="w-full">
      <Field
        className="input"
        name="province"
        id="province"
        type="text"
        placeholder="Provincia:"
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
    <div className="w-full">
      <Field
        className="input"
        name="status"
        id="status"
        placeholder="Estado:"
        as="select"
      >
        <option value="FOR_PACKAGING">Por empaquetar</option>
        <option value="PACKAGING">Empaquetado</option>
        <option value="ON_THE_WAY">En camino</option>
        <option value="DELIVERED">Entregado</option>
      </Field>
    </div>
    <div className="flex flex-col items-center gap-2">
      <ButtonSend label="Guardar envío" />
      <ButtonModaleClose />
    </div>
  </Form>
);
