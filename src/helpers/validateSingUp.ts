import { IErrorSignUp } from "@/interfaces/IErrorInput";
import { IUserSignUp } from "@/interfaces/IUserSignUp";

export const validateSignUp = async (input: IUserSignUp) => {
  const errors: IErrorSignUp = {};

  if (!input.name) {
    errors.name = "* Campo obligatorio.";
  } else if (input.name.length < 3) {
    errors.name = "* El nombre debe tener al menos 3 caracteres.";
  }

  if (!input.surname) {
    errors.surname = "* Campo obligatorio.";
  } else if (input.surname.length < 3) {
    errors.surname = "* El apellido debe tener al menos 3 caracteres.";
  }

  if (!input.email) {
    errors.email = "* Campo obligatorio.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)) {
    errors.email = "* Correo electrónico no válido.";
  }

  if (!input.idNumber) {
    errors.idNumber = "* Campo obligatorio.";
  } else if (!/^\d{7,10}$/.test(input.idNumber)) {
    errors.idNumber = "* El documento debe tener entre 7 y 10 dígitos.";
  }

  if (!input.password) {
    errors.password = "* Campo obligatorio.";
  } else if (input.password.length < 6) {
    errors.password = "* La contraseña debe tener al menos 6 caracteres.";
  }

  if (!input.repeatPassword) {
    errors.repeatPassword = "* Campo obligatorio.";
  } else if (input.repeatPassword !== input.password) {
    errors.repeatPassword = "* Las contraseñas no coinciden.";
  }

  if (!input.location) {
    errors.location = "* Campo obligatorio.";
  }

  if (!input.phone) {
    errors.phone = "* Campo obligatorio.";
  } else if (!/^\d{10}$/.test(input.phone)) {
    errors.phone = "* Número de teléfono no válido.";
  }

  if (!input.birthdate) {
    errors.birthdate = "* Campo obligatorio.";
  } else {
    const birthDate = new Date(input.birthdate);
    const today = new Date();
    if (birthDate >= today) {
      errors.birthdate = "* Fecha de nacimiento no válida.";
    }
  }

  return errors;
};
