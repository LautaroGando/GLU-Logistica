"use client";

import React from "react";
import { ErrorMessage, Field, Form, Formik, FormikProps } from "formik";
import ButtonForm from "@/components/ui/ButtonForm/ButtonForm";
import { validateSignIn } from "@/helpers/validateSignIn";
import { signIn } from "@/services/Auth/SignIn.Service";
import { IUserSignIn } from "@/interfaces/IUserSingIn";
import useSuccessAlert from "@/hooks/useSuccessAlert";
import useErrorAlert from "@/hooks/useErrorAlert";

export const FormSignIn: React.FC = () => {
  const showSuccessAlert = useSuccessAlert();
  const showErrorAlert = useErrorAlert();

  const handleSubmit = async (values: IUserSignIn) => {
    try {
      const data: IUserSignIn = {
        email: values.email,
        password: values.password,
      };

      const response = await signIn(data);
      console.log(response);

      showSuccessAlert("¡Inicio de sesión exitoso!", `Bienvenido, ${response.user.name}.`);
    } catch {
      showErrorAlert("Error al iniciar sesión", "Inténtalo de nuevo más tarde.");
    }
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={validateSignIn}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }: FormikProps<IUserSignIn>) => (
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
