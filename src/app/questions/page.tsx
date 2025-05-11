import Questions from "@/components/QuestionsComponents/Questions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes | GLU Logística",
  description:
    "Encontrá respuestas a las preguntas más frecuentes sobre nuestros servicios de transporte, logística y envíos. Asesoramiento claro y rápido en GLU Logística.",
  keywords: [
    "preguntas frecuentes",
    "FAQ logística",
    "dudas sobre envíos",
    "consultas frecuentes",
    "información sobre servicios de logística",
    "GLU Logística preguntas",
  ],
};

export default function QuestionsPage() {
  return (
    <div>
      <Questions />
    </div>
  );
}
