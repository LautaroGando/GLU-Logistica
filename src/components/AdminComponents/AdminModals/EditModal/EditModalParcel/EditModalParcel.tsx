"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Formik, Form, Field, ErrorMessage, FormikValues } from "formik";
import { succesAlert } from "@/utils/Alerts/succesAlert";
import { useEditModal } from "@/context/AdminComponents/EditModalContext/EditModalContext";
import validateEditModal from "@/helpers/validateEditModal";
import useBodyScrollLock from "@/hooks/useBodyScrollLock";
import { IStatePackage } from "@/interfaces/IStatePackage";
import { useParcelTableFilter } from "@/context/AdminComponents/ParcelTableFiltersContext/ParcelTableFiltersContext";
import { IPackageDto } from "@/dto/IPackageDto";

const EditModalParcel: React.FC = () => {
  const { isModalOpen, closeModal, hideOverlay, packageData } = useEditModal();
  const { handleEditPackage } = useParcelTableFilter();

  useBodyScrollLock(isModalOpen);

  const formatDate = (date: string | Date | null | undefined): string => {
    if (!date) return "";

    if (typeof date === "string" && /^\d{2}\/\d{2}\/\d{4}$/.test(date)) {
      const [day, month, year] = date.split("/");
      return `${year}-${month}-${day}`;
    }

    const parsed = new Date(date);
    if (isNaN(parsed.getTime())) return "";

    return parsed.toISOString().split("T")[0];
  };

  const initialValues = {
    orderNumber: packageData?.packageNumber || "",
    customerType: packageData?.companyName ? "Company" : "Client",
    companyName: packageData?.companyName || "",
    clientName: packageData?.clientName || "",
    receivedDate: formatDate(packageData?.receivedDate),
    emissionDate: formatDate(packageData?.emissionDate),
    deliveryDate: formatDate(packageData?.deliveryDate),
    status: packageData?.status?.toUpperCase?.() || IStatePackage.DEPOSIT,
  };

  const handleSubmit = (values: FormikValues) => {
    if (packageData) {
      const payload: IPackageDto = {
        packageNumber: values.orderNumber,
        clientName: values.clientName,
        companyName: values.customerType === "Company" ? values.companyName : "",
        receivedDate: values.receivedDate,
        emissionDate: values.status === IStatePackage.DEPOSIT ? undefined : values.emissionDate,
        deliveryDate:
          values.status === IStatePackage.DEPOSIT || values.status === IStatePackage.IN_TRANSIT
            ? undefined
            : values.deliveryDate,
        status: values.status,
      };

      handleEditPackage(packageData?.id, payload);

      console.log("Datos del paquete:", payload);
      succesAlert("¡Éxito!", "El paquete fue editado correctamente", "success");
      closeModal();
    }
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-20 bg-black/60 px-4"
          onClick={closeModal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={hideOverlay ? { opacity: 0 } : {}}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="bg-admin-secondary w-full max-w-[400px] max-h-[calc(100vh-2rem)] py-4 my-4 
          overflow-y-auto rounded-[4px] shadow-lg sm:max-w-[500px] sm:px-2 sm:py-8 xl:max-w-[560px] xl:py-10"
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
                  <h3 className="text-[20px] font-black text-center mb-2 sm:mb-4 sm:text-[24px] xl:mb-8">
                    EDITAR PAQUETE
                  </h3>
                  <div className="max-h-[70vh] px-4 py-4 overflow-y-auto sm:px-10 xl:px-10">
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
                            value="Client"
                            className="sm:w-5 h-5"
                          />
                        </div>
                        <div className="flex items-center gap-2">
                          <label htmlFor="company">Empresa</label>
                          <Field
                            type="radio"
                            id="company"
                            name="customerType"
                            value="Company"
                            className="sm:w-5 h-5"
                          />
                        </div>
                      </div>

                      {values.customerType === "Company" && (
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

                      {values.customerType === "Client" && (
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
                      {values.status === IStatePackage.DEPOSIT ? null : (
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
                      {!(
                        values.status === IStatePackage.DEPOSIT ||
                        values.status === IStatePackage.IN_TRANSIT
                      ) && (
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
                          <option value={IStatePackage.DELIVERED}>{IStatePackage.DELIVERED}</option>
                          <option value={IStatePackage.IN_TRANSIT}>
                            {IStatePackage.IN_TRANSIT}
                          </option>
                          <option value={IStatePackage.DEPOSIT}>{IStatePackage.DEPOSIT}</option>
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
