import * as Yup from "yup";

export const validateEditModal = Yup.object().shape({
  orderNumber: Yup.string().required("Número de pedido requerido"),
  
  customerType: Yup.string().oneOf(["Cliente", "Empresa"], "Selecciona un tipo válido"),

  companyName: Yup.string().when("customerType", {
    is: "Empresa",
    then: (schema) => schema.required("Nombre de empresa requerido"),
  }),

  clientName: Yup.string().required("Nombre de cliente requerido"),

  receivedDate: Yup.date()
    .required("Fecha de recibido requerida")
    .max(new Date(), "La fecha de recibido no puede ser futura"),

  emissionDate: Yup.date()
    .nullable()
    .when("status", {
      is: (status: string) => status !== "Depósito", 
      then: (schema) =>
        schema
          .required("Fecha de emisión requerida")
          .min(Yup.ref("receivedDate"), "La fecha de emisión no puede ser anterior a la de recibido"),
    }),

  deliveryDate: Yup.date()
    .nullable()
    .when("status", {
      is: (status: string) => status === "Entregado",
      then: (schema) =>
        schema
          .required("Fecha de entrega requerida")
          .min(Yup.ref("emissionDate"), "La fecha de entrega no puede ser anterior a la de emisión"),
    }),

  status: Yup.string()
    .required("El estado es requerido")
    .oneOf(["Entregado", "En camino", "Depósito"], "Estado inválido"),
});

export default validateEditModal;
