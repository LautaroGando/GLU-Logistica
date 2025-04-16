"use client";

import { useEditModal } from "@/context/AdminComponents/EditModalContext/EditModalContext";
import { useParcelTableFilter } from "@/context/AdminComponents/ParcelTableFiltersContext/ParcelTableFiltersContext";
import LoadingData from "@/components/ui/LoadingData/LoadingData";
import NoData from "@/components/ui/NoData/NoData";
import { faBan, faEdit, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import ParcelTableHeader from "./ParcelTableHeader/ParcelTableHeader";
import React from "react";
import { IStatePackage } from "@/interfaces/IStatePackage";

const rowVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 60, damping: 14 },
  },
  exit: { opacity: 0, x: 20, transition: { duration: 0.2 } },
};

const cellVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

const ParcelTable = () => {
  const { openModal, setPackageData } = useEditModal();
  const { loading, error, packages } = useParcelTableFilter();


  return (
    <div className=" mt-6 overflow-x-auto">
      {loading ? (
        <LoadingData />
      ) : error ? (
        <div className="flex flex-col items-center justify-center text-admin-redAlt py-16 gap-4">
          <FontAwesomeIcon icon={faTriangleExclamation} className="text-[40px]" />
          <p className="text-sm text-admin-letterColor text-center max-w-[320px]">{error}</p>
        </div>
      ) : packages?.length === 0 ? (
        <NoData message="No se encontraron paquetes que coincidan con los filtros aplicados." />
      ) : packages ? (
        <table className="w-full table-auto border-collapse">
          <ParcelTableHeader />
          <tbody className="bg-admin-secondary">
            <AnimatePresence mode="sync">
              {packages.map((parcel) => {
                const buttonText =
                  parcel.status === IStatePackage.DEPOSIT
                    ? "Enviar"
                    : parcel.status === IStatePackage.IN_TRANSIT
                    ? "Entregar"
                    : "Entregado";

                return (
                  <motion.tr
                    key={parcel.id}
                    layout
                    variants={rowVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="border-b transition-shadow hover:shadow-md"
                  >
                    <motion.td variants={cellVariants} className="px-4 h-[50px] whitespace-nowrap border-y border-admin-letterColor/40">
                      {parcel.packageNumber}
                    </motion.td>
                    <motion.td variants={cellVariants} className="px-4 h-[50px] whitespace-nowrap border-y border-admin-letterColor/40">
                      {parcel.clientName ? parcel.clientName : "-" }
                    </motion.td>
                    <motion.td variants={cellVariants} className="px-4 h-[50px] whitespace-nowrap border-y border-admin-letterColor/40">
                      {parcel.companyName || "-"}
                    </motion.td>
                    <motion.td variants={cellVariants} className="px-4 h-[50px] whitespace-nowrap border-y border-admin-letterColor/40">
                      {parcel.role}
                    </motion.td>
                    <motion.td variants={cellVariants} className="px-4 h-[50px] whitespace-nowrap border-y border-admin-letterColor/40">
                      {parcel.receivedDate}
                    </motion.td>
                    <motion.td variants={cellVariants} className="px-4 h-[50px] whitespace-nowrap border-y border-admin-letterColor/40">
                      {parcel.emissionDate || "-"}
                    </motion.td>
                    <motion.td variants={cellVariants} className="px-4 h-[50px] whitespace-nowrap border-y border-admin-letterColor/40">
                      {parcel.deliveryDate || "-"}
                    </motion.td>
                    <motion.td
                      variants={cellVariants}
                      className={clsx(
                        "px-4 h-[50px] whitespace-nowrap border-y border-admin-letterColor/40",
                        parcel.status === IStatePackage.IN_TRANSIT && "text-admin-orange",
                        parcel.status === IStatePackage.DELIVERED && "text-admin-green font-bold"
                      )}
                    >
                      {parcel.status}
                    </motion.td>
                    <motion.td variants={cellVariants} className="px-4 h-[50px] border-y border-admin-letterColor/40">
                      <button
                        className={clsx(
                          "h-[30px] w-[88px] rounded-[2px] transition-all duration-200",
                          buttonText === "Enviar" && "bg-admin-orange hover:bg-admin-orange/70",
                          buttonText === "Entregar" && "bg-admin-green hover:bg-admin-green/70",
                          buttonText === "Entregado" &&
                            "border border-admin-green text-admin-green cursor-default"
                        )}
                      >
                        {buttonText}
                      </button>
                    </motion.td>
                    <motion.td variants={cellVariants} className="px-4 h-[50px] text-center border-y border-admin-letterColor/40">
                      <button
                        onClick={() => {
                          setPackageData(parcel);
                          openModal();
                        }}
                      >
                        <FontAwesomeIcon
                          icon={faEdit}
                          className="text-[20px] text-admin-blue hover:text-admin-blue/60"
                        />
                      </button>
                    </motion.td>
                    <motion.td variants={cellVariants} className="px-4 h-[50px] text-center text-admin-red border-y border-admin-letterColor/40">
                      <button>
                        <FontAwesomeIcon icon={faBan} className="text-[20px] hover:text-admin-red/60" />
                      </button>
                    </motion.td>
                  </motion.tr>
                );
              })}
            </AnimatePresence>
          </tbody>
        </table>
      ) : null}
    </div>
  );
};

export default ParcelTable;
