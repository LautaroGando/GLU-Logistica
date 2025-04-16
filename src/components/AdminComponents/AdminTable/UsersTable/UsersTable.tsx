"use client";

import React from "react";
import { faBan, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";
import UsersTableHeader from "./UsersTableHeader/UsersTableHeader";
import { useUsersTableFilters } from "@/context/AdminComponents/UserTableFiltersContext/UserTableFiltersContext";
import LoadingData from "@/components/ui/LoadingData/LoadingData";
import ErrorFetch from "@/components/ui/ErrorFetch/ErrorFetch";

const rowVariants = {
  hidden: {
    opacity: 0,
    x: -30,
    borderColor: "rgba(255,255,255,0)",
  },
  visible: {
    opacity: 1,
    x: 0,
    borderColor: "rgba(182,182,182,0.4)",
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 16,
      delayChildren: 0.05,
      staggerChildren: 0.03,
    },
  },
  exit: {
    opacity: 0,
    x: 20,
    borderColor: "rgba(255,255,255,0)",
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

const cellVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

const UsersTable = () => {
  const { loading, error, users } = useUsersTableFilters();

  return (
    <div className="mt-6 overflow-x-auto">
      {loading ? (
        <LoadingData />
      ) : error ? (
        <ErrorFetch message={error} />
      ) : (
        <table className="w-full table-auto border-collapse">
          <UsersTableHeader />
          <tbody className="bg-admin-secondary">
            <AnimatePresence>
              {users.map((user) => (
                <motion.tr
                  key={user.id}
                  layout
                  variants={rowVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="border-b transition-shadow hover:shadow-md"
                >
                  <motion.td
                    variants={cellVariants}
                    className="px-4 h-[50px] whitespace-nowrap border-y border-admin-letterColor/40"
                  >
                    {user.name} {user.surname}
                  </motion.td>
                  <motion.td
                    variants={cellVariants}
                    className="px-4 h-[50px] whitespace-nowrap border-y border-admin-letterColor/40"
                  >
                    {user.email}
                  </motion.td>
                  <motion.td
                    variants={cellVariants}
                    className="px-4 h-[50px] whitespace-nowrap border-y border-admin-letterColor/40"
                  >
                    {user.idNumber}
                  </motion.td>
                  <motion.td
                    variants={cellVariants}
                    className="px-4 h-[50px] whitespace-nowrap border-y border-admin-letterColor/40"
                  >
                    {user.phone}
                  </motion.td>
                  <motion.td
                    variants={cellVariants}
                    className="px-4 h-[50px] whitespace-nowrap border-y border-admin-letterColor/40"
                  >
                    {user.birthdate}
                  </motion.td>
                  <motion.td
                    variants={cellVariants}
                    className="px-4 h-[50px] whitespace-nowrap border-y border-admin-letterColor/40"
                  >
                    {user.updatedAt}
                  </motion.td>
                  <motion.td
                    variants={cellVariants}
                    className="px-4 h-[50px] whitespace-nowrap border-y border-admin-letterColor/40"
                  >
                    {user.location}
                  </motion.td>
                  <motion.td
                    variants={cellVariants}
                    className={`px-4 h-[50px] whitespace-nowrap border-y border-admin-letterColor/40 ${user.role === "carrier" ? "text-admin-yellow" : ""}`}
                  >
                    {user.role}
                  </motion.td>
                  <motion.td
                    variants={cellVariants}
                    className={`px-4 h-[50px] whitespace-nowrap border-y border-admin-letterColor/40 ${user.status === "Activo" ? "text-admin-green" : "text-admin-redAlt"}`}
                  >
                    {user.status}
                  </motion.td>
                  <motion.td
                    variants={cellVariants}
                    className="px-4 h-[50px] text-center border-y border-admin-letterColor/40"
                  >
                    <button>
                      <FontAwesomeIcon
                        icon={faEdit}
                        className="text-admin-blue hover:text-admin-blue/60"
                      />
                    </button>
                  </motion.td>
                  <motion.td
                    variants={cellVariants}
                    className="px-4 h-[50px] text-center text-admin-red border-y border-admin-letterColor/40"
                  >
                    <button>
                      <FontAwesomeIcon icon={faBan} />
                    </button>
                  </motion.td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UsersTable;
