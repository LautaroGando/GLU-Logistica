import { IErrorSignIn } from "@/interfaces/IErrorInput";
import { IUserSignIn } from "@/interfaces/IUserSingIn";

export const validateSignIn = async (input: IUserSignIn) => {
  const errors: IErrorSignIn = {};

  if (!input.email) errors.email = "* Campo obligatorio.";

  if (!input.password) errors.password = "* Campo obligatorio.";

  return errors;
};
