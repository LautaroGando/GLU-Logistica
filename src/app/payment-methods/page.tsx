import PaymentMethods from "@/components/PaymentMethodsComponents/PaymentMethods";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Formas de Pago | GLU Logística",
  description:
    "Conocé las opciones de pago disponibles en GLU Logística. Facilitamos el proceso con métodos seguros y flexibles para tus envíos y servicios de logística.",
  keywords: [
    "formas de pago",
    "métodos de pago",
    "pagos seguros",
    "pago de servicios de logística",
    "opciones de pago",
    "GLU Logística pagos",
  ],
};

export default function PaymentMethodsPage() {
  return (
    <div>
      <PaymentMethods />
    </div>
  );
}
