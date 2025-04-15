import { paymentsData } from "@/data/paymentsData/paymentsData";
import { IPaymentsData } from "@/data/paymentsData/types";
import clsx from "clsx";
import React from "react";

export const InfoPayments: React.FC = () => {
  return (
    <div className="flex flex-col gap-10 mx-auto">
      {paymentsData.map((method: IPaymentsData, i: number) => (
        <div
          key={i}
          className={clsx(
            "flex flex-col gap-3",
            i % 2 === 0 ? "items-start" : "items-end"
          )}
        >
          <div className="max-w-[600px]">
            <h3 className="text-pcPrincipal font-semibold text-2xl text-left w-full">
              {method.method}
            </h3>
            <p className="text-lg">{method.description}</p>
          </div>
        </div>
      ))}
      <p className="text-center border-t pt-10 text-pcPrincipal underline">Realizamos FACTURA C</p>
    </div>
  );
};

export default InfoPayments;
