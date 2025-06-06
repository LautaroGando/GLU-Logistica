"use client";

import { Inbox } from "lucide-react";
import { motion } from "framer-motion";

interface EmptyStateProps {
  title?: string;
  message?: string;
  height?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title = "Sin resultados",
  message = "No hay información para mostrar en este momento.",
  height = "h-[60vh]",
}) => {
  return (
    <motion.div
      className={`mt-4 flex flex-col items-center justify-center ${height} px-4 text-center bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700`}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <motion.div
        initial={{ scale: 0.8, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
        className="mb-4"
      >
        <Inbox className="w-16 h-16 text-gray-300 dark:text-gray-600" />
      </motion.div>

      <motion.h2
        className="text-xl font-semibold text-gray-700 dark:text-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {title}
      </motion.h2>

      <motion.p
        className="mt-1 text-sm text-gray-500 dark:text-gray-400 max-w-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {message}
      </motion.p>
    </motion.div>
  );
};
