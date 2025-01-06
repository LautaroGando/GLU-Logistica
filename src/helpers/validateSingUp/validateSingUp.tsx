import { IErrorSignUp, IInputSignUp } from "./types";

export const validateSignUp = async (input: IInputSignUp) => {
  const errors: IErrorSignUp = {};

  if (!input.firstName) {
    errors.firstName = "* Campo obligatorio.";
  } else if (input.firstName.length < 3) {
    errors.firstName = "* El nombre debe tener al menos 3 caracteres.";
  }

  if (!input.lastName) {
    errors.lastName = "* Campo obligatorio.";
  } else if (input.lastName.length < 3) {
    errors.lastName = "* El apellido debe tener al menos 3 caracteres.";
  }

  if (!input.email) {
    errors.email = "* Campo obligatorio.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) {
    errors.email = "* Correo electrónico no válido.";
  }

  if (!input.document) {
    errors.document = "* Campo obligatorio.";
  } else if (!/^\d{7,10}$/.test(input.document)) {
    errors.document = "* El documento debe tener entre 7 y 10 dígitos.";
  }

  if (!input.password) {
    errors.password = "* Campo obligatorio.";
  } else if (input.password.length < 6) {
    errors.password = "* La contraseña debe tener al menos 6 caracteres.";
  }

  if (!input.confirmPassword) {
    errors.confirmPassword = "* Campo obligatorio.";
  } else if (input.confirmPassword !== input.password) {
    errors.confirmPassword = "* Las contraseñas no coinciden.";
  }

  if (!input.location) {
    errors.location = "* Campo obligatorio.";
  }

  if (!input.phone) {
    errors.phone = "* Campo obligatorio.";
  } else if (!/^\d{10}$/.test(input.phone)) {
    errors.phone = "* Número de teléfono no válido.";
  }

  if (!input.birthDate) {
    errors.birthDate = "* Campo obligatorio.";
  } else {
    const birthDate = new Date(input.birthDate);
    const today = new Date();
    if (birthDate >= today) {
      errors.birthDate = "* Fecha de nacimiento no válida.";
    }
  }

  return errors;
};
