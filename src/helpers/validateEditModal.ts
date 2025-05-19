import { IStatePackage } from "@/interfaces/IStatePackage";
import * as Yup from "yup";

export const validateEditModal = Yup.object().shape({
  orderNumber: Yup.string().required("Número de pedido requerido"),

  customerType: Yup.string()
    .oneOf(["Client", "Company"], "Selecciona un tipo válido")
    .required("El tipo de cliente es requerido"),

  companyName: Yup.string(),
  clientName: Yup.string(), 

  receivedDate: Yup.date()
    .required("Fecha de recibido requerida")
    .max(new Date(), "La fecha de recibido no puede ser futura"),

  emissionDate: Yup.date()
    .nullable()
    .when("status", {
      is: (status: string) => status !== IStatePackage.DEPOSIT,
      then: (schema) =>
        schema
          .required("Fecha de emisión requerida")
          .min(
            Yup.ref("receivedDate"),
            "La fecha de emisión no puede ser anterior a la de recibido"
          ),
      otherwise: (schema) => schema.nullable(),
    }),

  deliveryDate: Yup.date()
    .nullable()
    .when("status", {
      is: (status: string) => status === IStatePackage.DELIVERED,
      then: (schema) =>
        schema
          .required("Fecha de entrega requerida")
          .min(
            Yup.ref("emissionDate"),
            "La fecha de entrega no puede ser anterior a la de emisión"
          ),
      otherwise: (schema) => schema.nullable(),
    }),

  status: Yup.string()
    .required("El estado es requerido")
    .oneOf(
      [IStatePackage.DELIVERED, IStatePackage.IN_TRANSIT, IStatePackage.DEPOSIT],
      "Estado inválido"
    ),
});

export default validateEditModal;
