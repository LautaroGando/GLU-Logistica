import React from "react";
import Title from "../ui/Title/Title";
import FrequentlyQuestions from "./FrequentlyQuestions/FrequentlyQuestions";

export const Questions: React.FC = () => {
  return (
    <div>
      <Title label="PREGUNTAS FRECUENTES" />
      <FrequentlyQuestions />
    </div>
  );
};

export default Questions;
