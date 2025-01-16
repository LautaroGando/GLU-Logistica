import { useState } from "react";
import { suscribeNewsLetter } from "@/services/Newsletter/NewsLetter.Service";
import useSuccessAlert from "@/hooks/useSuccessAlert";
import useErrorAlert from "@/hooks/useErrorAlert";

const useNewsLetter = () => {
  const [email, setEmail] = useState<string>("");
  const showSuccessAlert = useSuccessAlert();
  const showErrorAlert = useErrorAlert();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      showErrorAlert("Correo inválido", "Por favor, ingresa un correo electrónico válido.");
      return;
    }

    try {
      await suscribeNewsLetter(email);
      showSuccessAlert(
        "¡Suscripción exitosa!",
        "Te has suscrito exitosamente a nuestras novedades."
      );
      setEmail("");
    } catch (err) {
      showErrorAlert(
        "Error al suscribirte",
        `${err ? err : "Hubo un problema al suscribirte. Por favor, inténtalo nuevamente."}`
      );
    }
  };

  return { email, setEmail, handleSubmit };
};

export default useNewsLetter;
