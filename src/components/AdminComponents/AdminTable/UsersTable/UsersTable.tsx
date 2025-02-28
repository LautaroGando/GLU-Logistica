import React from "react";
import { faBan, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import usersData from "@/data/usersData/usersData";
import UsersTableHeader from "./UsersTableHeader/UsersTableHeader";

const UsersTable = () => {
  return (
    <div className="mt-6 overflow-x-auto">
      <table className="w-full table-auto border-collapse">
        <UsersTableHeader />

        <tbody className="bg-admin-secondary">
          {usersData.map((user) => (
            <tr key={user.id}>
              <td className="px-4 h-[50px] whitespace-nowrap border-y border-admin-letterColor/40">
                {user.name}
              </td>
              <td className="px-4 h-[50px] whitespace-nowrap border-y border-admin-letterColor/40">
                {user.email}
              </td>
              <td className="px-4 h-[50px] whitespace-nowrap border-y border-admin-letterColor/40">
                {user.document}
              </td>
              <td className="px-4 h-[50px] whitespace-nowrap border-y border-admin-letterColor/40">
                {user.phone}
              </td>
              <td className="px-4 h-[50px] whitespace-nowrap border-y border-admin-letterColor/40">
                {user.birthdate}
              </td>
              <td className="px-4 h-[50px] whitespace-nowrap border-y border-admin-letterColor/40">
                {user.location}
              </td>

              <td
                className={`px-4 h-[50px] whitespace-nowrap border-y border-admin-letterColor/40 ${user.role === "Transportista" ? "text-admin-yellow" : ""}`}
              >
                {user.role}
              </td>
              <td
                className={`px-4 h-[50px] whitespace-nowrap border-y border-admin-letterColor/40 ${user.status === "Activo" ? "text-admin-green" : "text-admin-redAlt"}`}
              >
                {user.status}
              </td>
              <td className="px-4 h-[50px] whitespace-nowrap border-y border-admin-letterColor/40 text-center">
                <button>
                  <FontAwesomeIcon
                    icon={faEdit}
                    className="text-admin-blue hover:text-admin-blue/60"
                  />
                </button>
              </td>
              <td className="px-4 h-[50px] whitespace-nowrap border-y border-admin-letterColor/40 text-center text-admin-red">
                <button className="">
                  <FontAwesomeIcon icon={faBan} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
