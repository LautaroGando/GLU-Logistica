import * as Yup from "yup";

export const validateUserInfo = Yup.object({
  phone: Yup.string()
    .required("El número es obligatorio")
    .matches(/^\d{10,12}$/, "Debe ser un número válido de 10 a 12 dígitos"),
  city: Yup.string()
    .required("La localidad es obligatoria")
    .min(2, "Muy corto")
    .max(50, "Muy largo"),
});
