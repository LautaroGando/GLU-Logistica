"use client";

import React, { useState } from "react";
import { suscribeNewsLetter } from "@/services/Users/NewsLetter.Service";
import { IFooterContactProps } from "./types";

const FooterContact: React.FC<IFooterContactProps> = ({ isMobile }) => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

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

  return (
    <div className={`text-[14px] ${isMobile ? "mt-6 sm:mt-0 lg:hidden" : "hidden lg:block"}`}>
      <h4 className="text-[16px] font-bold sm:text-[20px] lg:text-[24px]">Estar Conectados</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            placeholder="Correo electrónico..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-1 outline-none text-sc border-2 border-transparent transition-all duration-200
             sm:text-[16px] sm:p-2 
             hover:border-sky-500 
             focus:border-sky-600"
          />
          <input
            type="submit"
            value="Suscribirse"
            className="bg-sc p-1 transition-all duration-200 border-2 border-transparent cursor-pointer hover:bg-tcSecondary sm:text-[16px] sm:p-2"
          />
        </div>
      </form>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {success && <p className="text-green-500 mt-2">{success}</p>}
    </div>
  );
};

export default FooterContact;
