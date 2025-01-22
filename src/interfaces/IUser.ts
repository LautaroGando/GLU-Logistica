export interface IUser {
  id: string;
  name: string;
  surname: string;
  idNumber: string;
  location: string;
  phone: string;
  birthdate: string;
  email: string;
  password: string;
  role: "admin" | "user";
  newsletter: boolean;
}
