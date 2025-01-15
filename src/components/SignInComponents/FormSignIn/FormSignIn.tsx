"use client";

import React from "react";
import { ErrorMessage, Field, Form, Formik, FormikProps } from "formik";
import ButtonForm from "@/components/ui/ButtonForm/ButtonForm";
import { validateSignIn } from "@/helpers/validateSignIn";
import { IInputLogin } from "@/interfaces/IInputLogin";
import { signIn } from "@/services/Auth/SignIn.Service";
import { IUserSignIn } from "@/interfaces/IUserSingIn";

export const FormSignIn: React.FC = () => {
  const handleSubmit = async (values: IInputLogin) => {
    try {
      const data: IUserSignIn = { email: values.email, password: values.password };
      await signIn(data);
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
