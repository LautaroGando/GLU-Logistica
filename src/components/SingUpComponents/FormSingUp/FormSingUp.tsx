"use client";

import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik, FormikProps } from "formik";
import { motion } from "framer-motion";
import ButtonForm from "@/components/ui/ButtonForm/ButtonForm";
import { validateSignUp } from "@/helpers/validateSingUp";
import { signUp } from "@/services/Auth/SignUp.Service";
import { IUserSignUp } from "@/interfaces/IUserSignUp";
import Loading from "@/components/ui/Loading/Loading";
import useSuccessAlert from "@/hooks/useSuccessAlert";
import useErrorAlert from "@/hooks/useErrorAlert";

const FormSignUp = () => {
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const showSuccessAlert = useSuccessAlert();
  const showErrorAlert = useErrorAlert();

  const handleSignUp = async (values: IUserSignUp) => {
    setIsLoading(true);
    try {
      const data = await signUp(values);
      showSuccessAlert("¡Registro exitoso!", `Bienvenido, ${data.user.name}.`);
    } catch {
      showErrorAlert("Error al registrarse", "Inténtalo de nuevo más tarde.");
    } finally {
      setIsLoading(false);
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
        phone: +"",
        birthdate: "",
      }}
      validate={validateSignUp}
      onSubmit={(values, { resetForm }) => {
        handleSignUp(values);
        resetForm();
      }}
    >
      {({ errors, touched }: FormikProps<IUserSignUp>) => (
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
              {errors[field.name as keyof IUserSignUp] &&
                touched[field.name as keyof IUserSignUp] && (
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
            <ButtonForm>
              {isLoading ? (
                <Loading mode="secondary" hover />
              ) : (
                <h4>Registrarse</h4>
              )}
            </ButtonForm>
          </motion.div>
        </Form>
      )}
    </Formik>
  );
};

export default FormSignUp;
