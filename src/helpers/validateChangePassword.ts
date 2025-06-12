import * as Yup from "yup";

export const ChangePasswordSchema = Yup.object().shape({
  password: Yup.string()
    .required("La contraseña actual es obligatoria"),

  newPassword: Yup.string()
    .required("La nueva contraseña es obligatoria")
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .matches(/[A-Z]/, "Debe contener al menos una mayúscula")
    .matches(/[a-z]/, "Debe contener al menos una minúscula")
    .matches(/[0-9]/, "Debe contener al menos un número"),

  repeatNewPassword: Yup.string()
    .required("Debes repetir la nueva contraseña")
    .oneOf([Yup.ref("newPassword")], "Las contraseñas no coinciden"),
});
