"use client";

import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { userInfoFields } from "@/utils";
import { UserInfoFormField } from "../UserInfoFormField/UserInfoFormField";
import { UserInfoButton } from "../UserInfoButton/UserInfoButton";
import { validateUserInfo } from "@/helpers";
import { IUser } from "@/interfaces";

export const UserInfoForm = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState<IUser | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUserData(parsedUser);
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  if (!userData) return null;

  return (
    <Formik
      initialValues={{
        email: userData.email || "",
        dni: userData.dni || "",
        city: userData.address || "",
        phone: userData.phone || "",
        birthdate: userData.birthdate?.split("T")[0] || "",
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
