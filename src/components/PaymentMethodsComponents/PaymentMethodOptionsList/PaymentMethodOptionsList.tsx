import React, { useState } from "react";
import { motion } from "framer-motion";
import methods, { IMethod } from "../utils/payment-methods";
import PaymentMethodButton from "../PaymentMethodButton/PaymentMethodButton";
import PaymentMethodCard from "./PaymentMethodCard/PaymentMethodCard";

const PaymentMethodOptionsList = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);
  const [MethodLabel, setMethodLabel] = useState<string>("");

  const handleSelectMethod = (method: string, label: string) => {
    setSelectedPaymentMethod(method);
    setMethodLabel(label);
  };

  return (
    <div className="flex flex-col gap-[10%] justify-center items-center h-[100%]">
      <motion.div
        className="
          flex flex-col gap-5 justify-center items-center
          sm:grid sm:grid-cols-2 sm:h-[max-content]
        "
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {methods.map((method: IMethod, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <PaymentMethodCard
              method={method}
              selectedMethod={selectedPaymentMethod}
              onSelectMethod={handleSelectMethod}
            />
          </motion.div>
        ))}
      </motion.div>

      {MethodLabel ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <PaymentMethodButton label={MethodLabel} />
        </motion.div>
      ) : (
        <div className="h-[48px] sm:h-[60px]"></div>
      )}
    </div>
  );
};

export default PaymentMethodOptionsList;
