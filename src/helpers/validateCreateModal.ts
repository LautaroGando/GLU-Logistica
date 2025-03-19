import * as Yup from "yup";

export const validateCreateModal = Yup.object().shape({
  orderNumber: Yup.string().required("Número de pedido requerido"),
  customerType: Yup.string().oneOf(["Client", "Company"], "Selecciona un tipo válido"),
  companyName: Yup.string().when("customerType", {
    is: "Company",
    then: (schema) => schema.required("Nombre de empresa requerido"),
  }),
  clientName: Yup.string().required("Nombre de cliente requerido"),
  receivedDate: Yup.date().required("Fecha de recibido requerida"),
});

export default validateCreateModal;
