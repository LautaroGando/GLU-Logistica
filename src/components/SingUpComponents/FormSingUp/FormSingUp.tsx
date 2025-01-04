"use client";

import React from "react";
import { ErrorMessage, Field, Form, Formik, FormikProps } from "formik";
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
          <div>
            <Field className="inputForm" type="text" name="firstName" placeholder="Nombre..." />
            {errors.firstName && touched.firstName && (
              <ErrorMessage className="inputFormError" name="firstName" component="p" />
            )}
          </div>

          <div>
            <Field className="inputForm" type="text" name="lastName" placeholder="Apellido..." />
            {errors.lastName && touched.lastName && (
              <ErrorMessage className="inputFormError" name="lastName" component="p" />
            )}
          </div>

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
            <Field className="inputForm" type="text" name="document" placeholder="Documento..." />
            {errors.document && touched.document && (
              <ErrorMessage className="inputFormError" name="document" component="p" />
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

          <div>
            <Field
              className="inputForm"
              type="password"
              name="confirmPassword"
              placeholder="Repetir contraseña..."
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <ErrorMessage className="inputFormError" name="confirmPassword" component="p" />
            )}
          </div>

          <div>
            <Field className="inputForm" type="text" name="location" placeholder="Localidad..." />
            {errors.location && touched.location && (
              <ErrorMessage className="inputFormError" name="location" component="p" />
            )}
          </div>

          <div>
            <Field className="inputForm" type="number" name="phone" placeholder="Teléfono..." />
            {errors.phone && touched.phone && (
              <ErrorMessage className="inputFormError" name="phone" component="p" />
            )}
          </div>

          <div>
            <Field
              className="inputForm"
              type="date"
              name="birthDate"
              placeholder="Fecha de nacimiento..."
            />
            {errors.birthDate && touched.birthDate && (
              <ErrorMessage className="inputFormError" name="birthDate" component="p" />
            )}
          </div>

          <ButtonForm name="Registrarse" />
        </Form>
      )}
    </Formik>
  );
};

export default FormSignUp;
