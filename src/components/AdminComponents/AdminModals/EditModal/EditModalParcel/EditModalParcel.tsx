"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Formik, Form, Field, ErrorMessage, FormikValues } from "formik";
import { succesAlert } from "@/utils/Alerts/succesAlert";
import { useEditModal } from "@/context/AdminComponents/EditModalContext/EditModalContext";
import validateEditModal from "@/helpers/validateEditModal";

const EditModalParcel: React.FC = () => {
  const { isModalOpen, closeModal, hideOverlay, packageData } = useEditModal();

  const initialValues = {
    orderNumber: packageData?.packageNumber || "",
    customerType: packageData?.role || "Cliente",
    companyName: packageData?.companyName || "",
    clientName: packageData?.clientName || "",
    receivedDate: packageData?.receivedDate || "",
    emissionDate: packageData?.emissionDate || "",
    deliveryDate: packageData?.deliveryDate || "",
    status: packageData?.status || "",
  };

  const handleSubmit = (values: FormikValues) => {
    const filteredValues = {
      ...values,
      emissionDate: values.status === "Depósito" ? undefined : values.emissionDate,
      deliveryDate:
        values.status === "Depósito" || values.status === "En camino"
          ? undefined
          : values.deliveryDate,
    };

    console.log("Datos del paquete:", filteredValues);
    succesAlert("¡Éxito!", "El paquete se creó correctamente", "success");
    closeModal();
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-10 bg-black/60 px-4"
          onClick={closeModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={hideOverlay ? { opacity: 0 } : {}}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="bg-admin-secondary w-full max-w-[400px] max-h-[calc(100vh-2rem)] p-4 my-4 
          overflow-y-auto rounded-[4px] shadow-lg sm:max-w-[500px] sm:px-10 sm:py-8 xl:max-w-[560px] xl:px-12 xl:py-10"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Formik
              initialValues={initialValues}
              validationSchema={validateEditModal}
              onSubmit={handleSubmit}
            >
              {({ values, setFieldValue }) => (
                <Form className="text-admin-letterColor">
                  <h3 className="text-[20px] font-black text-center mb-8 sm:text-[24px]">
                    EDITAR PAQUETE
                  </h3>

                  <div className="flex flex-col gap-[22px] sm:gap-8">
                    <div className="flex flex-col gap-1">
                      <label htmlFor="orderNumber" className="font-bold">
                        Número de Pedido:
                      </label>
                      <Field
                        type="text"
                        id="orderNumber"
                        name="orderNumber"
                        className="h-[36px] bg-admin-primary px-2 placeholder:text-[14px] outline-none transition-all duration-200 
                      border-2 border-transparent focus:border-admin-green placeholder:text-admin-letterColor/50 sm:placeholder:text-[16px] sm:h-[40px]"
                        placeholder="Ej. 0800648"
                      />
                      <ErrorMessage
                        name="orderNumber"
                        component="div"
                        className="text-admin-red text-sm"
                      />
                    </div>

                    <div className="flex justify-center gap-20 font-bold">
                      <div className="flex items-center gap-2">
                        <label htmlFor="client">Cliente</label>
                        <Field
                          type="radio"
                          id="client"
                          name="customerType"
                          value="Cliente"
                          className="sm:w-5 h-5"
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <label htmlFor="company">Empresa</label>
                        <Field
                          type="radio"
                          id="company"
                          name="customerType"
                          value="Empresa"
                          className="sm:w-5 h-5"
                        />
                      </div>
                    </div>

                    {values.customerType === "Empresa" && (
                      <>
                        <div className="flex flex-col gap-1">
                          <label htmlFor="companyName" className="font-bold">
                            Nombre de Empresa:
                          </label>
                          <Field
                            type="text"
                            id="companyName"
                            name="companyName"
                            className="h-[36px] bg-admin-primary px-2 placeholder:text-[14px] outline-none transition-all duration-200 
                        border-2 border-transparent focus:border-admin-green placeholder:text-admin-letterColor/50 sm:placeholder:text-[16px] sm:h-[40px]"
                            placeholder="Ej. Nike"
                          />
                          <ErrorMessage
                            name="companyName"
                            component="div"
                            className="text-admin-red text-sm"
                          />
                        </div>

                        <div className="flex flex-col gap-1">
                          <label htmlFor="clientName" className="font-bold">
                            Nombre de Cliente:
                          </label>
                          <Field
                            type="text"
                            id="clientName"
                            name="clientName"
                            className="h-[36px] bg-admin-primary px-2 placeholder:text-[14px] outline-none transition-all duration-200 
border-2 border-transparent focus:border-admin-green placeholder:text-admin-letterColor/50 sm:placeholder:text-[16px] sm:h-[40px]"
                            placeholder="Ej. Juan Pérez"
                          />
                          <ErrorMessage
                            name="clientName"
                            component="div"
                            className="text-admin-red text-sm"
                          />
                        </div>
                      </>
                    )}

                    {values.customerType === "Cliente" && (
                      <div className="flex flex-col gap-1">
                        <label htmlFor="clientName" className="font-bold">
                          Nombre de Cliente:
                        </label>
                        <Field
                          type="text"
                          id="clientName"
                          name="clientName"
                          className="h-[36px] bg-admin-primary px-2 placeholder:text-[14px] outline-none transition-all duration-200 
                        border-2 border-transparent focus:border-admin-green placeholder:text-admin-letterColor/50 sm:placeholder:text-[16px] sm:h-[40px]"
                          placeholder="Ej. Juan Pérez"
                        />
                        <ErrorMessage
                          name="clientName"
                          component="div"
                          className="text-admin-red text-sm"
                        />
                      </div>
                    )}

                    <div className="flex flex-col gap-1">
                      <label htmlFor="receivedDate" className="font-bold">
                        Fecha de Recibido:
                      </label>
                      <Field
                        type="date"
                        id="receivedDate"
                        name="receivedDate"
                        className="h-[36px] bg-admin-primary px-2 outline-none transition-all duration-200 
                      border-2 border-transparent focus:border-admin-green placeholder:text-admin-letterColor/50 sm:h-[40px]"
                      />
                      <ErrorMessage
                        name="receivedDate"
                        component="div"
                        className="text-admin-red text-sm"
                      />
                    </div>
                    {values.status === "Depósito" ? null : (
                      <div className="flex flex-col gap-1">
                        <label htmlFor="emissionDate" className="font-bold">
                          Fecha de Emisión:
                        </label>
                        <Field
                          type="date"
                          id="emissionDate"
                          name="emissionDate"
                          className="h-[36px] bg-admin-primary px-2 outline-none transition-all duration-200 
                      border-2 border-transparent focus:border-admin-green placeholder:text-admin-letterColor/50 sm:h-[40px]"
                        />
                        <ErrorMessage
                          name="emissionDate"
                          component="div"
                          className="text-admin-red text-sm"
                        />
                      </div>
                    )}
                    {!(values.status === "Depósito" || values.status === "En camino") && (
                      <div className="flex flex-col gap-1">
                        <label htmlFor="deliveryDate" className="font-bold">
                          Fecha de Entrega:
                        </label>
                        <Field
                          type="date"
                          id="deliveryDate"
                          name="deliveryDate"
                          className="h-[36px] bg-admin-primary px-2 outline-none transition-all duration-200 
        border-2 border-transparent focus:border-admin-green placeholder:text-admin-letterColor/50 sm:h-[40px]"
                        />
                        <ErrorMessage
                          name="deliveryDate"
                          component="div"
                          className="text-admin-red text-sm"
                        />
                      </div>
                    )}

                    <div className="flex flex-col gap-1">
                      <label htmlFor="status" className="font-bold">
                        Estado:
                      </label>
                      <Field
                        as="select"
                        id="status"
                        name="status"
                        className="h-[36px] bg-admin-primary px-2 outline-none transition-all duration-200 
        border-2 border-transparent focus:border-admin-green text-admin-letterColor/80 sm:h-[40px]"
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                          setFieldValue("status", e.target.value);
                        }}
                      >
                        <option value="Entregado">Entregado</option>
                        <option value="En camino">En camino</option>
                        <option value="Depósito">Depósito</option>
                      </Field>
                      <ErrorMessage
                        name="status"
                        component="div"
                        className="text-admin-red text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex justify-between mt-11 h-[36px]">
                    <button
                      onClick={closeModal}
                      type="button"
                      className="bg-admin-letterColor/50 w-[130px] font-bold duration-200 transition-all rounded-[2px] hover:bg-admin-letterColor/30 sm:w-[160px] sm:h-[40px]"
                    >
                      CANCELAR
                    </button>
                    <button
                      type="submit"
                      className="bg-admin-green w-[130px] font-black duration-200 transition-all rounded-[2px] hover:bg-admin-green/80 sm:w-[160px] sm:h-[40px]"
                    >
                      GUARDAR
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EditModalParcel;
