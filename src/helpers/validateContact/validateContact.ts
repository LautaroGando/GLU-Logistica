import { IContactFormErrors, IContactFormValues } from "./types";

const validateContact = (values: IContactFormValues): IContactFormErrors => {
  const errors: IContactFormErrors = {};

  if (!values.subject) {
    errors.subject = "El nombre es obligatorio";
  } else if (values.subject.length < 3) {
    errors.subject = "El nombre debe tener al menos 3 caracteres";
  }

  if (!values.from) {
    errors.from = "El correo electrónico es obligatorio";
  } else if (!/\S+@\S+\.\S+/.test(values.from)) {
    errors.from = "Correo electrónico inválido";
  }

  if (!values.message) {
    errors.message = "El mensaje es obligatorio";
  } else if (values.message.length < 10) {
    errors.message = "El mensaje debe tener al menos 10 caracteres";
  }

  return errors;
};

export default validateContact;
