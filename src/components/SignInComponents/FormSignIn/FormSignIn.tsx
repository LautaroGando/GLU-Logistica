"use client";

import React from "react";
import { ErrorMessage, Field, Form, Formik, FormikProps } from "formik";
import ButtonForm from "@/components/GeneralComponents/ButtonForm/ButtonForm";
import { validateSignIn } from "@/helpers/validateSignIn";
import { IInputLogin } from "@/interfaces/IInputLogin";
import { signIn } from "@/services/Auth/Login.Service";

export const FormSignIn: React.FC = () => {
  const handleSubmit = async (values: IInputLogin) => {
    try {
      const response = await signIn(values.email, values.password);
      console.log("Inicio de sesión exitoso:", response);
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={validateSignIn}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }: FormikProps<IInputLogin>) => (
        <Form className="flex flex-col gap-5">
          <div>
            <Field
              className="inputForm"
              type="email"
              name="email"
              placeholder="Correo electrónico..."
            />
            {errors.email && touched.email && (
              <ErrorMessage className="inputFormError" name="email" component="p" />
            )}
          </div>
          <div>
            <Field
              className="inputForm"
              type="password"
              name="password"
              placeholder="Contraseña..."
            />
            {errors.password && touched.password && (
              <ErrorMessage className="inputFormError" name="password" component="p" />
            )}
          </div>
          <ButtonForm name="Iniciar sesión" />
        </Form>
      )}
    </Formik>
  );
};

export default FormSignIn;
