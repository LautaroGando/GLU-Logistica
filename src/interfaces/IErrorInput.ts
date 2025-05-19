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

export interface IErrorSignIn {
  email?: string;
  password?: string;
}

export interface IErrorFormContact {
  fullname?: string;
  email?: string;
  message?: string;
}
