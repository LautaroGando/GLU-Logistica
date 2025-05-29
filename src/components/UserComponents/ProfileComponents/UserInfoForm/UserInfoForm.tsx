"use client";

import React from "react";
import { Formik, Form } from "formik";
import { userInfoFields } from "@/utils";
import { UserInfoFormField } from "../UserInfoFormField/UserInfoFormField";
import { UserInfoButton } from "../UserInfoButton/UserInfoButton";
import { validateUserInfo } from "@/helpers";

export const UserInfoForm = () => {
  const [isEditing, setIsEditing] = React.useState(false);

  return (
    <Formik
      initialValues={{
        email: "agustinanconadev@gmail.com",
        dni: "43087171",
        city: "CABA",
        phone: "1133792293",
        birthdate: "2001-02-12",
      }}
      validationSchema={validateUserInfo}
      onSubmit={async (values, actions) => {
        console.log(values);
        await new Promise((res) => setTimeout(res, 1000));
        actions.setSubmitting(false);
        setIsEditing(false);
      }}
    >
      {({ isSubmitting, submitForm, isValid }) => (
        <>
          <Form className="mt-10">
            <div className="grid gap-y-6 gap-x-4 sm:mt-14 sm:h-[300px] sm:grid-cols-2 md:grid-cols-3">
              {userInfoFields.map((field) => (
                <UserInfoFormField
                  key={field.name}
                  {...field}
                  readOnly={field.forceReadOnly || !isEditing}
                />
              ))}
            </div>
          </Form>
          <UserInfoButton
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            isSubmitting={isSubmitting}
            submitForm={submitForm}
            isValid={isValid}
          />
        </>
      )}
    </Formik>
  );
};
