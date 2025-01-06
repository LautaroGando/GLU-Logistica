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

          <button
            type="submit"
            className="
            group relative flex items-center justify-start w-[80%] h-[30px] mx-auto bg-sc rounded-full overflow-hidden transition-all duration-300 pr-4 py-2
            sm:h-[36px]
            lg:h-[40px]
            "
          >
            <span className="absolute left-0 w-10 h-10 p-2 bg-pcPrincipal rounded-full flex items-center justify-end transition-all duration-300 group-hover:w-full">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>

            <span className="absolute right-[100%] text-white text-sm font-medium opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:right-10">
              Enviar
            </span>
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
