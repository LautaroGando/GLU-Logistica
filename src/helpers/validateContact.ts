import { IErrorFormContact } from "@/interfaces/IErrorInput";
import { IFormContact } from "@/interfaces/IFormContact";

const validateContact = (values: IFormContact) => {
  const errors: IErrorFormContact = {};

  if (!values.fullname) {
    errors.fullname = "El nombre es obligatorio";
  } else if (values.fullname.length < 3) {
    errors.fullname = "El nombre debe tener al menos 3 caracteres";
  }

  if (!values.email) {
    errors.email = "El correo electrónico es obligatorio";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Correo electrónico inválido";
  }

  if (!values.message) {
    errors.message = "El mensaje es obligatorio";
  } else if (values.message.length < 10) {
    errors.message = "El mensaje debe tener al menos 10 caracteres";
  }

  return errors;
};

export default validateContact;
