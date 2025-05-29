"use client";

import { ErrorMessage, Field } from "formik";
import React from "react";
import { IUserInfoFormFieldProps } from "./types";

export const UserInfoFormField: React.FC<IUserInfoFormFieldProps> = ({
  name,
  label,
  type = "text",
  readOnly,
}) => {
  return (
    <div className="h-[87px]">
      <label className="block text-[15px] font-medium text-sc">{label}</label>
      <Field
        name={name}
        type={type}
        readOnly={readOnly}
        className={`h-12 w-full border-b px-1 text-[15px] outline-none transition-colors ${
          readOnly
            ? "bg-gray-50 border-gray-300 text-sc/70 cursor-default"
            : "bg-white border-pcPrincipal text-sc cursor-text"
        }`}
      />

      <ErrorMessage name={name} component="div" className="text-admin-redAlt text-[13px] mt-1" />
    </div>
  );
};
