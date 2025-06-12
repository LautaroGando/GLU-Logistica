import { IUserInfoFieldConfig } from "./types";

export const userInfoFields: IUserInfoFieldConfig[] = [
  { name: "email", label: "Correo electrónico", type: "email", forceReadOnly: true },
  { name: "dni", label: "Documento", type: "text", forceReadOnly: true },
  { name: "city", label: "Localidad", type: "text" },
  { name: "phone", label: "Teléfono", type: "text" },
  { name: "birthdate", label: "Fecha de nacimiento", type: "date", forceReadOnly: true },
];
