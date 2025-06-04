import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik, FormikProps } from "formik";
import ButtonForm from "@/components/ui/ButtonForm/ButtonForm";
import useSuccessAlert from "@/hooks/useSuccessAlert";
import useErrorAlert from "@/hooks/useErrorAlert";
import Loading from "@/components/ui/Loading/Loading";
import { useRouter } from "next/navigation";
import { IUserSignIn } from "@/interfaces/IUser";
import { validateSignIn } from "@/helpers/validateSignIn";
import { signIn } from "@/services/Auth/Auth.service";
import { useUserStore } from "@/store";
import Cookies from "js-cookie";

export const FormSignIn: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const showSuccessAlert = useSuccessAlert();
  const showErrorAlert = useErrorAlert();
  const router = useRouter();

  const handleSignIn = async (values: IUserSignIn) => {
    setIsLoading(true);

    try {
      const data = await signIn(values);

      if (!data.token || !data.userResponse) throw new Error("Respuesta inválida del servidor");

      localStorage.setItem("token", JSON.stringify(data.token));
      localStorage.setItem("user", JSON.stringify(data.userResponse));

      Cookies.set("user-storage", JSON.stringify(data.userResponse), {
        path: "/",
        expires: 7,
      });

      useUserStore.getState().setUser(data.userResponse);

      showSuccessAlert("¡Inicio de sesión exitoso!", `Bienvenido, ${data.userResponse.fullName}.`);
      router.push("/");
    } catch {
      showErrorAlert("Error al iniciar sesión", "Inténtalo de nuevo más tarde.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Formik
      initialValues={{ emailSignIn: "", passwordSignIn: "" }}
      validate={validateSignIn}
      onSubmit={(values, { resetForm }) => {
        handleSignIn(values);
        resetForm();
      }}
    >
      {({ errors, touched }: FormikProps<IUserSignIn>) => (
        <Form className="flex flex-col gap-5">
          <div>
            <Field
              className="inputForm"
              type="email"
              name="emailSignIn"
              placeholder="Correo electrónico..."
            />
            {errors.emailSignIn && touched.emailSignIn && (
              <ErrorMessage className="inputFormError" name="emailSignIn" component="p" />
            )}
          </div>
          <div>
            <Field
              className="inputForm"
              type="password"
              name="passwordSignIn"
              placeholder="Contraseña..."
            />
            {errors.passwordSignIn && touched.passwordSignIn && (
              <ErrorMessage className="inputFormError" name="passwordSignIn" component="p" />
            )}
          </div>
          <ButtonForm>
            {isLoading ? <Loading mode="secondary" hover /> : <h4>Iniciar sesión</h4>}
          </ButtonForm>
        </Form>
      )}
    </Formik>
  );
};

export default FormSignIn;
