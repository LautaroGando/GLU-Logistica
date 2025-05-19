import { SignIn } from "@/components/SignInComponents/SignIn";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Ingreso | GLU Logística",
  description:
    "Accedé a tu cuenta para gestionar órdenes, seguimientos y servicios logísticos personalizados con GLU Logística.",
  keywords: [
    "login GLU",
    "acceso logística",
    "iniciar sesión",
    "seguimiento de pedidos",
    "gestión logística",
    "GLU Logística clientes",
    "panel de usuario logística",
  ],
};

export default function SignInPage() {
  return (
    <div>
      <SignIn />;
    </div>
  );
}
