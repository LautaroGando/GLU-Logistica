"use client";

import React from "react";
import { motion } from "framer-motion";
import Title from "../ui/Title/Title";
import InfoPayments from "./InfoPayments/InfoPayments";

const PaymentMethods = () => {
  return (
    <div className="text-sc">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Title label="Medios de pago" />
      </motion.div>
      <InfoPayments />
    </div>
  );
};

export default PaymentMethods;
