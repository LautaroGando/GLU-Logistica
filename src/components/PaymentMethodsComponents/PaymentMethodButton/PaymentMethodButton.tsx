import React from "react";
import IPaymentMethodButtonProps from "./types";

const PaymentMethodButton: React.FC<IPaymentMethodButtonProps> = ({ label }) => {
  return (
    <div className="flex justify-center items-center">
      <button
        className="
        text-pcSecondary font-bold bg-pcPrincipal px-4 py-3 rounded-[7px] transition-all duration-200
        hover:bg-tcPrincipal
        sm:text-[24px]
        "
      >
        Pagar con {label}
      </button>
    </div>
  );
};

export default PaymentMethodButton;
