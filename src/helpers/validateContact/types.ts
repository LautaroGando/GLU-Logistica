export interface IContactFormValues {
  from: string;
  subject: string;
  message: string;
}

export interface IContactFormErrors {
  from?: string;
  subject?: string;
  message?: string;
}
