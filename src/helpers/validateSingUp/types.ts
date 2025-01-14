export interface IInputSignUp {
  name: string;
  surname: string;
  email: string;
  idNumber: string;
  password: string;
  repeatPassword: string;
  location: string;
  phone: string;
  birthdate: string;
}

export interface IErrorSignUp {
  name?: string;
  surname?: string;
  email?: string;
  idNumber?: string;
  password?: string;
  repeatPassword?: string;
  location?: string;
  phone?: string;
  birthdate?: string;
}
