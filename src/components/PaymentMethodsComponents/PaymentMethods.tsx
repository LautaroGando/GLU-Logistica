"use client";

import React from "react";
import Title from "../GeneralComponents/Title/Title";
import PaymentMethodOptionsList from "./PaymentMethodOptionsList/PaymentMethodOptionsList";

const PaymentMethods = () => {
  return (
    <main className="h-[60vh] text-sc">
      <Title label="Medios de pago" />
      <PaymentMethodOptionsList />
    </main>
  );
};

export default PaymentMethods;
