"use client";
import useDisableScroll from "@/hooks/useDisableScroll";
import { useAdminStore } from "@/store/adminStore/useAdminStore";
import { motion } from "motion/react";
import { FormAdd } from "../FormAdd/FormAdd";
import {
  formDataClients,
  formDataShipments,
  formDataWarehouse,
} from "@/data/adminData/formData/formData";

export const ModalAdd = () => {
  const { modal, closeModal, closeModalProducts } = useAdminStore();
  useDisableScroll(!!modal);

  return (
    <motion.div
      key="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "backInOut" }}
      onClick={() => {
        closeModal();
        closeModalProducts();
      }}
      className="w-full h-[100vh] bg-black/80 fixed top-0 left-0 z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[320px] max-w-[400px] max-h-[90%] rounded-md fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-pcSecondary overflow-auto sm:w-[400px]"
      >
        <FormAdd
          initialValues={
            modal === "client"
              ? formDataClients
              : modal === "warehouse"
                ? formDataWarehouse
                : modal === "shipment"
                  ? formDataShipments
                  : null
          }
        />
      </div>
    </motion.div>
  );
};
