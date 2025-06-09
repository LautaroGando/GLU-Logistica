"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IChangePasswordModalProps } from "./types";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { UserTitle } from "@/components";
import { ChangePasswordSchema } from "@/helpers/validateChangePassword";
import { TChangePasswordValues } from "@/types";
import { useUserStore } from "@/store";
import useSuccessAlert from "@/hooks/useSuccessAlert";
import useErrorAlert from "@/hooks/useErrorAlert";

export const ChangePasswordModal: React.FC<IChangePasswordModalProps> = ({ onClose }) => {
  const { changePassword } = useUserStore();
  const showSuccessAlert = useSuccessAlert();
  const showErrorAlert = useErrorAlert();

  const handleOnSubmit = async (values: TChangePasswordValues) => {
    try {
      await changePassword(values);
      showSuccessAlert("Contraseña actualizada", "Se cambió correctamente tu contraseña");
      onClose();
    } catch {
      showErrorAlert(
        "No se pudo cambiar la contraseña",
        "Asegurate de ingresar correctamente tu contraseña actual."
      );
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4"
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="bg-white rounded-2xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6"
        >
          <UserTitle text="Modificar contraseña" margin_top="mt-0 sm:mt-0" />

          <Formik
            initialValues={{
              password: "",
              newPassword: "",
              repeatNewPassword: "",
            }}
            validationSchema={ChangePasswordSchema}
            onSubmit={handleOnSubmit}
          >
            {() => (
              <Form className="mt-10 space-y-6">
                <div className="space-y-6">
                  {[
                    {
                      name: "password",
                      placeholder: "Contraseña actual",
                    },
                    {
                      name: "newPassword",
                      placeholder: "Nueva contraseña",
                    },
                    {
                      name: "repeatNewPassword",
                      placeholder: "Repetir nueva contraseña",
                    },
                  ].map(({ name, placeholder }) => (
                    <div key={name} className="space-y-1">
                      <Field
                        name={name}
                        type="password"
                        placeholder={placeholder}
                        className="w-full border-b border-blackPage/20 px-1 h-[30px] sm:h-[50px] text-sm sm:text-[16px] shadow-sm focus:border-pcPrincipal focus:outline-none transition"
                      />
                      <ErrorMessage
                        name={name}
                        component="div"
                        className="text-sm text-admin-red ml-1"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-between gap-4 pt-10">
                  <button
                    type="button"
                    onClick={onClose}
                    className="bg-blackPage/40 text-white w-full py-2 rounded-md hover:bg-blackPage/50 focus:outline-none focus:ring-2 focus:ring-pcPrincipal/50 transition"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="bg-pcPrincipal text-white w-full py-2 rounded-md hover:bg-pcPrincipal/90 focus:outline-none focus:ring-2 focus:ring-pcPrincipal/50 transition"
                  >
                    Guardar
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
