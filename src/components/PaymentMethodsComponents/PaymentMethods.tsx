"use client";

import React from "react";
import { motion } from "framer-motion";
import Title from "../ui/Title/Title";
import PaymentMethodOptionsList from "./PaymentMethodOptionsList/PaymentMethodOptionsList";

const PaymentMethods = () => {
  return (
    <main className="h-[60vh] text-sc">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Title label="Medios de pago" />
      </motion.div>
      <PaymentMethodOptionsList />
    </main>
  );
};

export default PaymentMethods;
