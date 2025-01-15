import { IErrorLogin } from "@/interfaces/IErrorInput";
import { IInputLogin } from "@/interfaces/IInputLogin";

export const validateSignIn = async (input: IInputLogin) => {
  const errors: IErrorLogin = {};

  if (!input.email) errors.email = "* Campo obligatorio.";

  if (!input.password) errors.password = "* Campo obligatorio.";

  return errors;
};
