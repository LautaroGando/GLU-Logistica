import { IPaymentsData } from "./types";

export const paymentsData: IPaymentsData[] = [
  {
    method: "Mercado Pago",
    description:
      "Pagá de forma segura desde tu cuenta de Mercado Pago. Podés usar saldo disponible, tarjeta de débito o crédito, o generar un código para abonar en efectivo.",
  },
  {
    method: "Transferencia Bancaria",
    description:
      "Te enviamos los datos de la cuenta y una vez realizado el pago, necesitaremos que nos envíes el comprobante para confirmar el pedido.",
  },
  {
    method: "Efectivo",
    description:
      "Podés abonar en efectivo al momento de la entrega o en nuestro punto de atención (consultá previamente la disponibilidad).",
  },
  {
    method: "Tarjeta de Débito",
    description:
      "Aceptamos pagos con tarjeta de débito a través de nuestros canales habilitados. Si seleccionás esta opción, coordinaremos cómo realizar el cobro.",
  },
  {
    method: "Tarjeta de Crédito",
    description:
      "Pagá en cuotas o al contado con tarjeta de crédito a través de nuestros medios electrónicos seguros.",
  },
];
