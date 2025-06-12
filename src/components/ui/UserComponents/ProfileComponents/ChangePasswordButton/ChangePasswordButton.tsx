import React from "react";
import { motion } from "framer-motion";
import { IChangePasswordButtonProps } from "./types";

export const ChangePasswordButton: React.FC<IChangePasswordButtonProps> = ({ onOpen }) => {
  return (
    <motion.div
      className="flex justify-center mt-10"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={onOpen}
        className="bg-pcPrincipal text-white w-[180px] h-[44px] rounded-[2px] font-medium transition duration-200 hover:bg-pcPrincipal/90"
      >
        Modificar contraseña
      </motion.button>
    </motion.div>
  );
};
