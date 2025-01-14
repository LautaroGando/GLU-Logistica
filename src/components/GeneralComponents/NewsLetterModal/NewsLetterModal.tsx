"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { suscribeNewsLetter } from "@/services/Users/NewsLetter.Service";

const NewsLetterModal: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!email) {
      setError("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    try {
      await suscribeNewsLetter(email);
      setSuccess("Te has suscrito correctamente.");
      setError(null);
    } catch {
      setError("Hubo un error al suscribirse. Intenta nuevamente.");
      setSuccess(null);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : "100%" }}
      exit={{ opacity: 0, y: "100%" }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-1 left-[5px] right-[5px] border border-sc/30 px-2 pb-5 pt-10 bg-pcSecondary rounded-lg shadow-lg max-w-md mx-auto z-50 sm:right-5 sm:left-auto sm:bottom-5"
    >
      <div className="w-full h-full relative">
        <button
          onClick={handleClose}
          className="absolute top-[-30px] right-0 text-sc/60 text-[32px] leading-none transition-all hover:text-opacity-70 sm:right-[6px] sm:top-[-36px] sm:text-[40px]"
          aria-label="Cerrar modal"
        >
          &times;
        </button>

        <div className="text-center">
          <h3 className="text-pcPrincipal text-2xl font-semibold leading-tight sm:text-3xl">
            ¡Mantenete al día con La Vuelta!
          </h3>
          <p className="text-base mt-3 leading-relaxed sm:text-lg">
            Sé el primero en conocer nuestras novedades y servicios exclusivos.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 mt-6 sm:flex-row sm:items-center"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-12 px-4 text-[16px] border-2 border-sc/20 rounded-md outline-none transition-all duration-200 focus:border-pcPrincipal sm:rounded-l-md sm:border-r-0"
              placeholder="Ingresa tu correo electrónico"
              required
            />
            <button
              type="submit"
              className="h-12 px-6 w-full text-white bg-pcPrincipal font-bold rounded-md hover:bg-opacity-90 transition-all sm:w-auto sm:rounded-r-md"
            >
              SUSCRIBIRSE
            </button>
          </form>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          {success && <p className="text-green-500 mt-2">{success}</p>}
        </div>
      </div>
    </motion.div>
  );
};

export default NewsLetterModal;
