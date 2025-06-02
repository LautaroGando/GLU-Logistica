import { IErrorSignIn } from "@/interfaces/IErrorInput";
import { IUserSignIn } from "@/interfaces/IUser";

export const validateSignIn = async (input: IUserSignIn) => {
  const errors: IErrorSignIn = {};

  if (!input.emailSignIn) errors.email = "* Campo obligatorio.";

  if (!input.passwordSignIn) errors.password = "* Campo obligatorio.";

  return errors;
};
