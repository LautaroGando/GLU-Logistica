export interface IContactFormValues {
  nombre: string;
  correo: string;
  mensaje: string;
}

export interface IContactFormErrors {
  nombre?: string;
  correo?: string;
  mensaje?: string;
}
