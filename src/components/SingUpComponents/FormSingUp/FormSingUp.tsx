"use client";

import React from "react";
import { ErrorMessage, Field, Form, Formik, FormikProps } from "formik";
import { motion } from "framer-motion";
import ButtonForm from "@/components/ui/ButtonForm/ButtonForm";
import { validateSignUp } from "@/helpers/validateSingUp/validateSingUp";
import { IInputSignUp } from "@/helpers/validateSingUp/types";
import { signUp } from "@/services/Auth/SignUp.Service";

const FormSignUp = () => {
  const handleSignUp = async (data: IInputSignUp) => {
    try {
      const response = await signUp({
        ...data,
        phone: +data.phone,
      });
      console.log("Registro exitoso:", response);
    } catch (error) {
      console.error("Error al registrarse:", error);
    }
  };

  return (
    <Formik
      initialValues={{
        name: "",
        surname: "",
        email: "",
        idNumber: "",
        password: "",
        repeatPassword: "",
        location: "",
        phone: "",
        birthdate: "",
      }}
      validate={validateSignUp}
      onSubmit={handleSignUp}
    >
      {({ errors, touched }: FormikProps<IInputSignUp>) => (
        <Form className="flex flex-col gap-5">
          {[
            { name: "name", type: "text", placeholder: "Nombre..." },
            { name: "surname", type: "text", placeholder: "Apellido..." },
            {
              name: "email",
              type: "email",
              placeholder: "Correo electrónico...",
            },
            { name: "idNumber", type: "text", placeholder: "Documento..." },
            {
              name: "password",
              type: "password",
              placeholder: "Contraseña...",
            },
            {
              name: "repeatPassword",
              type: "password",
              placeholder: "Repetir contraseña...",
            },
            { name: "location", type: "text", placeholder: "Localidad..." },
            { name: "phone", type: "number", placeholder: "Teléfono..." },
            {
              name: "birthdate",
              type: "date",
              placeholder: "Fecha de nacimiento...",
            },
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
                  <ErrorMessage
                    className="inputFormError"
                    name={field.name}
                    component="p"
                  />
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
