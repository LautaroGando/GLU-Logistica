"use client";

import React from "react";
import { ErrorMessage, Field, Form, Formik, FormikProps } from "formik";
import { motion } from "framer-motion"; // Importar Framer Motion
import ButtonForm from "@/components/GeneralComponents/ButtonForm/ButtonForm";
import { validateSignUp } from "@/helpers/validateSingUp/validateSingUp";
import { IInputSignUp } from "@/helpers/validateSingUp/types";

const FormSignUp = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        document: "",
        password: "",
        confirmPassword: "",
        location: "",
        phone: "",
        birthDate: "",
      }}
      validate={validateSignUp}
      onSubmit={() => {}}
    >
      {({ errors, touched }: FormikProps<IInputSignUp>) => (
        <Form className="flex flex-col gap-5">
          {[
            { name: "firstName", type: "text", placeholder: "Nombre..." },
            { name: "lastName", type: "text", placeholder: "Apellido..." },
            { name: "email", type: "email", placeholder: "Correo electrónico..." },
            { name: "document", type: "text", placeholder: "Documento..." },
            { name: "password", type: "password", placeholder: "Contraseña..." },
            { name: "confirmPassword", type: "password", placeholder: "Repetir contraseña..." },
            { name: "location", type: "text", placeholder: "Localidad..." },
            { name: "phone", type: "number", placeholder: "Teléfono..." },
            { name: "birthDate", type: "date", placeholder: "Fecha de nacimiento..." },
          ].map((field, index) => (
            <motion.div
              key={field.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Field
                className="inputForm"
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
              />
              {errors[field.name as keyof IInputSignUp] &&
                touched[field.name as keyof IInputSignUp] && (
                  <ErrorMessage className="inputFormError" name={field.name} component="p" />
                )}
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <ButtonForm name="Registrarse" />
          </motion.div>
        </Form>
      )}
    </Formik>
  );
};

export default FormSignUp;
