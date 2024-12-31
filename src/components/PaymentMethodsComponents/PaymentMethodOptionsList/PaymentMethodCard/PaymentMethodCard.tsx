import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import IPaymentMethodCardProps from "./types";

const PaymentMethodCard: React.FC<IPaymentMethodCardProps> = ({
  method,
  selectedMethod,
  onSelectMethod,
}) => {
  const isSelected = selectedMethod === method.id;

  return (
    <div
      className={`
        relative flex items-center py-4 px-6 gap-6 w-[260px] border-b-[1px] rounded-lg cursor-pointer transition-all duration-300 
        border-transparent 
        ${
          isSelected
            ? "border-b-pcPrincipal bg-pcPrincipal/15 shadow-xl scale-[1.02]"
            : "border-transparent"
        }
       hover:bg-pcPrincipal/10
        sm:w-[300px] sm:h-[84px]
        md:w-[360px]
      `}
      onClick={() => onSelectMethod(method.id, method.label)}
      role="button"
      aria-pressed={isSelected}
    >
      <input
        type="radio"
        name="paymentMethod"
        id={method.id}
        className={`w-4 h-4 rounded-full border-[1px] border-black/40 ${
          isSelected ? "border-pcPrincipal bg-pcPrincipal" : " bg-white"
        } appearance-none`}
        checked={isSelected}
        readOnly
      />

      <div className="flex justify-center items-center gap-4">
        {method.image ? (
          <Image
            src={method.image}
            width={500}
            height={500}
            alt={method.label}
            className="w-[28px] sm:w-[50px]"
          />
        ) : method.icon ? (
          <FontAwesomeIcon
            icon={method.icon}
            className={`${method.iconColor} text-[20px] sm:text-[30px] sm:w-[50px]`}
          />
        ) : null}
        <p className="sm:text-[24px] text-sc">{method.label}</p>
      </div>
    </div>
  );
};

export default PaymentMethodCard;
