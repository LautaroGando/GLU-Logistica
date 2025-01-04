import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import validate from "@/helpers/validateContact/validateContact";

const ContactForm: React.FC = () => {
  return (
    <Formik
      initialValues={{
        nombre: "",
        correo: "",
        mensaje: "",
      }}
      validate={validate}
      onSubmit={(values) => {
        console.log("Formulario enviado con los siguientes valores:", values);
      }}
    >
      {() => (
        <Form>
          <div className="mb-4">
            <Field type="text" name="nombre" placeholder="Nombre..." className="inputForm" />
            <ErrorMessage name="nombre" component="div" className="text-red-500" />
          </div>

          <div className="mb-4">
            <Field
              type="text"
              name="correo"
              placeholder="Correo electrónico..."
              className="inputForm"
            />
            <ErrorMessage name="correo" component="div" className="text-red-500" />
          </div>

          <div className="mb-4">
            <Field
              as="textarea"
              name="mensaje"
              placeholder="Mensaje..."
              className="inputForm min-h-[150px] resize-none"
            />
            <ErrorMessage name="mensaje" component="div" className="text-red-500" />
          </div>

          <button type="submit" className="btnSubmit">
            Enviar
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
