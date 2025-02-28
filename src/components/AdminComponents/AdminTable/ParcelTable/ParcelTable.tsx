import { faBan, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import React from "react";

const ParcelTable = () => {
  interface IParcel {
    id: string;
    packageNumber: string;
    clientName: string;
    companyName: string;
    receivedDate: string;
    emissionDate?: string;
    deliveryDate?: string;
    status: "Depósito" | "En camino" | "Entregado";
    updateStatus: () => void;
    role: "Cliente" | "Empresa";
  }

  const parcelsData: IParcel[] = [
    {
      id: "3",
      packageNumber: "PKG-003",
      clientName: "Emma Wilson",
      companyName: "",
      receivedDate: "2024-02-20",
      emissionDate: "2024-02-21",
      deliveryDate: "2024-02-23",
      status: "Entregado",
      updateStatus: () => console.log("Updating status for PKG-003"),
      role: "Cliente",
    },
    {
      id: "4",
      packageNumber: "PKG-004",
      clientName: "Daniel Martinez",
      companyName: "Global Trade",
      receivedDate: "2024-02-18",
      emissionDate: "2024-02-19",
      deliveryDate: "2024-02-22",
      status: "Entregado",
      updateStatus: () => console.log("Updating status for PKG-004"),
      role: "Empresa",
    },
    {
      id: "5",
      packageNumber: "PKG-005",
      clientName: "Sophia Taylor",
      companyName: "",
      receivedDate: "2024-02-15",
      emissionDate: "2024-02-16",
      deliveryDate: "2024-02-18",
      status: "Entregado",
      updateStatus: () => console.log("Updating status for PKG-005"),
      role: "Cliente",
    },
    {
      id: "8",
      packageNumber: "PKG-008",
      clientName: "William Scott",
      companyName: "Mega Freight",
      receivedDate: "2024-02-17",
      emissionDate: "2024-02-18",
      deliveryDate: "2024-02-21",
      status: "Entregado",
      updateStatus: () => console.log("Updating status for PKG-008"),
      role: "Empresa",
    },
    {
      id: "10",
      packageNumber: "PKG-010",
      clientName: "James Walker",
      companyName: "Air Freight Co.",
      receivedDate: "2024-02-16",
      emissionDate: "2024-02-17",
      deliveryDate: "2024-02-20",
      status: "Entregado",
      updateStatus: () => console.log("Updating status for PKG-010"),
      role: "Empresa",
    },

    {
      id: "2",
      packageNumber: "PKG-002",
      clientName: "Michael Brown",
      companyName: "David Johnson",
      receivedDate: "2024-02-24",
      emissionDate: "2024-02-25",
      deliveryDate: "",
      status: "En camino",
      updateStatus: () => console.log("Updating status for PKG-002"),
      role: "Empresa",
    },
    {
      id: "6",
      packageNumber: "PKG-006",
      clientName: "Liam Anderson",
      companyName: "QuickShip Express",
      receivedDate: "2024-02-22",
      emissionDate: "2024-02-23",
      deliveryDate: "",
      status: "En camino",
      updateStatus: () => console.log("Updating status for PKG-006"),
      role: "Empresa",
    },
    {
      id: "9",
      packageNumber: "PKG-009",
      clientName: "Isabella Perez",
      companyName: "",
      receivedDate: "2024-02-21",
      emissionDate: "2024-02-22",
      deliveryDate: "",
      status: "En camino",
      updateStatus: () => console.log("Updating status for PKG-009"),
      role: "Cliente",
    },

    {
      id: "1",
      packageNumber: "PKG-001",
      clientName: "John Doe",
      companyName: "",
      receivedDate: "2024-02-25",
      emissionDate: "",
      deliveryDate: "",
      status: "Depósito",
      updateStatus: () => console.log("Updating status for PKG-001"),
      role: "Cliente",
    },
    {
      id: "7",
      packageNumber: "PKG-007",
      clientName: "Olivia Hernandez",
      companyName: "Fast Courier",
      receivedDate: "2024-02-19",
      emissionDate: "",
      deliveryDate: "",
      status: "Depósito",
      updateStatus: () => console.log("Updating status for PKG-007"),
      role: "Cliente",
    },
  ];

  const tableHeaders = [
    "Nº Paquete",
    "Nombre Cliente",
    "Nombre Empresa",
    "Rol",
    "Fecha Recibido",
    "Fecha Emisión",
    "Fecha Entrega",
    "Estado",
    "Act. Estado",
    "Editar",
    "Eliminar",
  ];
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
          {parcelsData.map((parcel) => {
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
