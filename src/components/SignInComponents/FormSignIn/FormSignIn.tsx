"use client";

import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik, FormikProps } from "formik";
import ButtonForm from "@/components/ui/ButtonForm/ButtonForm";
import { validateSignIn } from "@/helpers/validateSignIn";
import { signIn } from "@/services/Auth/SignIn.Service";
import { IUserSignIn } from "@/interfaces/IUserSingIn";
import useSuccessAlert from "@/hooks/useSuccessAlert";
import useErrorAlert from "@/hooks/useErrorAlert";
import Loading from "@/components/ui/Loading/Loading"; 
import { useRouter } from 'next/navigation';

export const FormSignIn: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const showSuccessAlert = useSuccessAlert();
  const showErrorAlert = useErrorAlert();
  const router = useRouter();

  const handleSignIn = async (values: IUserSignIn) => {
    setIsLoading(true);
    try {
      const data = await signIn(values);
      console.log("DATA FROMULARIO LOGIN: ", data);
      
      localStorage.setItem('token', JSON.stringify(data.token))
      localStorage.setItem('user', JSON.stringify(data.user))
      showSuccessAlert("¡Inicio de sesión exitoso!", `Bienvenido, ${data.user.name}.`);
      router.push('/')

    } catch {
      showErrorAlert("Error al iniciar sesión", "Inténtalo de nuevo más tarde.");
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={validateSignIn}
      onSubmit={(values, { resetForm }) => {
        handleSignIn(values);
        resetForm();
      }}
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
          <ButtonForm>
            {isLoading ? <Loading mode="secondary" hover /> : <h4>Iniciar sesión</h4>}
          </ButtonForm>
        </Form>
      )}
    </Formik>
  );
};

export default FormSignIn;
