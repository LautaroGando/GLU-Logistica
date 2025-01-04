export interface IInputSignUp {
  firstName: string;
  lastName: string;
  email: string;
  document: string;
  password: string;
  confirmPassword: string;
  location: string;
  phone: string;
  birthDate: string;
}

export interface IErrorSignUp {
  firstName?: string;
  lastName?: string;
  email?: string;
  document?: string;
  password?: string;
  confirmPassword?: string;
  location?: string;
  phone?: string;
  birthDate?: string;
}
