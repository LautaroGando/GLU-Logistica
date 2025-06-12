import { TUserRole } from "@/types/TUserRole";

export interface IUserSignIn {
  emailSignIn: string;
  passwordSignIn: string;
}

export interface IUser {
  id: string;
  fullName: string;
  email: string;
  dni: string;
  address: string;
  phone: string;
  birthdate: string;
  company: string;
  role: TUserRole;
}
