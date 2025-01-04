import { IContactFormErrors, IContactFormValues } from "./types";

const validateContact = (values: IContactFormValues): IContactFormErrors => {
  const errors: IContactFormErrors = {};

  if (!values.nombre) {
    errors.nombre = "El nombre es obligatorio";
  } else if (values.nombre.length < 3) {
    errors.nombre = "El nombre debe tener al menos 3 caracteres";
  }

  if (!values.correo) {
    errors.correo = "El correo electrónico es obligatorio";
  } else if (!/\S+@\S+\.\S+/.test(values.correo)) {
    errors.correo = "Correo electrónico inválido";
  }

  if (!values.mensaje) {
    errors.mensaje = "El mensaje es obligatorio";
  } else if (values.mensaje.length < 10) {
    errors.mensaje = "El mensaje debe tener al menos 10 caracteres";
  }

  return errors;
};

export default validateContact;
