"use client";

import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React from "react";

const NoData: React.FC<{ message?: string }> = ({ message = "No se encontraron registros." }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center gap-4 py-16 text-admin-letterColor text-center"
    >
      <FontAwesomeIcon icon={faBoxOpen} className="text-4xl text-admin-letterColor/70" />
      <p className="text-sm max-w-[320px]">{message}</p>
    </motion.div>
  );
};

export default NoData;
