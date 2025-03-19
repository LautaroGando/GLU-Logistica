import { useEditModal } from "@/context/AdminComponents/EditModalContext/EditModalContext";
import { faBan, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import tableHeaders from "@/data/parcelData/parcelDataHeaders";
import clsx from "clsx";
import React from "react";
import { useParcelTableFilter } from "@/context/AdminComponents/ParcelTableFiltersContext/ParcelTableFiltersContext";

const ParcelTable = () => {
  const { openModal, setPackageData } = useEditModal();
  const { packages } = useParcelTableFilter();

  return (
    <div className="mt-6 overflow-x-auto">
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="border border-admin-letterColor/40">
            {tableHeaders.map((header, i) => (
              <th key={i} className="px-4 h-[40px] text-left whitespace-nowrap">
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="bg-admin-secondary">
          {packages.map((parcel) => {
            let buttonText = "";
            if (parcel.status === "Depósito") buttonText = "Enviar";
            if (parcel.status === "En camino") buttonText = "Entregar";
            if (parcel.status === "Entregado") buttonText = "Entregado";

            return (
              <tr key={parcel.id}>
                <td className="px-4 h-[50px] whitespace-nowrap border-y border-admin-letterColor/40">
                  {parcel.packageNumber}
                </td>
                <td className="px-4 h-[50px] whitespace-nowrap border-y border-admin-letterColor/40">
                  {parcel.clientName}
                </td>
                <td className="px-4 h-[50px] whitespace-nowrap border-y border-admin-letterColor/40">
                  {parcel.companyName ? parcel.companyName : "-"}
                </td>
                <td
                  className={`px-4 h-[50px] whitespace-nowrap border-y border-admin-letterColor/40`}
                >
                  {parcel.role}
                </td>
                <td className="px-4 h-[50px] whitespace-nowrap border-y border-admin-letterColor/40">
                  {parcel.receivedDate}
                </td>
                <td className="px-4 h-[50px] whitespace-nowrap border-y border-admin-letterColor/40">
                  {parcel.emissionDate ? parcel.emissionDate : "-"}
                </td>
                <td className="px-4 h-[50px] whitespace-nowrap border-y border-admin-letterColor/40">
                  {parcel.deliveryDate ? parcel.deliveryDate : "-"}
                </td>
                <td
                  className={clsx(
                    "px-4 h-[50px] whitespace-nowrap border-y border-admin-letterColor/40",
                    parcel.status === "Depósito" && "",
                    parcel.status === "En camino" && "text-admin-orange",
                    parcel.status === "Entregado" && "text-admin-green font-bold"
                  )}
                >
                  {parcel.status}
                </td>
                <td
                  className={`px-4 h-[50px] whitespace-nowrap border-y border-admin-letterColor/40`}
                >
                  <button
                    className={clsx(
                      "h-[30px] w-[88px] rounded-[2px] transition-all duration-200",
                      buttonText === "Enviar" && "bg-admin-orange hover:bg-admin-orange/70",
                      buttonText === "Entregar" && "bg-admin-green hover:bg-admin-green/70",
                      buttonText === "Entregado" &&
                        "border border-admin-green text-admin-green cursor-text"
                    )}
                  >
                    {buttonText}
                  </button>
                </td>
                <td className=" px-4 h-[50px] whitespace-nowrap border-y border-admin-letterColor/40 text-center">
                  <button className="flex items-center justify-center text-center m-auto">
                    <FontAwesomeIcon
                      onClick={() => {
                        setPackageData(parcel);
                        openModal();
                      }}
                      icon={faEdit}
                      className="text-[20px] text-admin-blue transition-all duration-200 hover:text-admin-blue/60"
                    />
                  </button>
                </td>
                <td className="px-4 h-[50px] whitespace-nowrap border-y border-admin-letterColor/40 text-center text-admin-red">
                  <button className="flex items-center justify-center text-center m-auto">
                    <FontAwesomeIcon
                      icon={faBan}
                      className="text-[20px] text-admin-red transition-all duration-200 hover:text-admin-red/60"
                    />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ParcelTable;
