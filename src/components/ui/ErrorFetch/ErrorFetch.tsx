import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React from "react";

const ErrorFetch = ({ message }: { message: string }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center w-full h-[250px] text-admin-red gap-3"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <FontAwesomeIcon icon={faCircleExclamation} className="text-4xl" />
      <p className="text-lg font-medium text-center">{message}</p>
    </motion.div>
  );
};

export default ErrorFetch;
