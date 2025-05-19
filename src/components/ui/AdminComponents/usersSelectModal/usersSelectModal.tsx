"use client";

import { useUsersSelectModal } from "@/context/AdminComponents/UsersSelectModalContext/UsersSelectModalContext";
import { useUsersTableFilters } from "@/context/AdminComponents/UserTableFiltersContext/UserTableFiltersContext";
import { motion } from "framer-motion";
import { useState } from "react";

const UsersSelectModal = () => {
  const { isModalOpen, closeModal, selectUser } = useUsersSelectModal();
  const { users } = useUsersTableFilters(); // Correcto así
  const [search, setSearch] = useState("");

  const filteredUsers = (users ?? []).filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="bg-white dark:bg-gray-900 rounded-lg p-6 w-full max-w-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-lg font-bold text-center mb-4">Seleccionar Cliente</h2>

        <input
          type="text"
          placeholder="Buscar clientes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2"
        />

        <div className="flex flex-col gap-2 overflow-y-auto max-h-[400px]">
          {filteredUsers.length > 0 ? (
            filteredUsers.map(user => (
              <button
                key={user.id}
                onClick={() => {
                  selectUser(user);
                  closeModal();
                }}
                className="p-2 text-left border rounded hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {user.name}
              </button>
            ))
          ) : (
            <p className="text-center text-gray-500">No se encontraron clientes.</p>
          )}
        </div>

        <button
          onClick={closeModal}
          className="mt-4 w-full py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
        >
          Cerrar
        </button>
      </motion.div>
    </div>
  );
};

export default UsersSelectModal;
