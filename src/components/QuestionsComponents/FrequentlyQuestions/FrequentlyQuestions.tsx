"use client";
import { questionsData } from "@/data/questionsData/questions-data";
import { IQuestionData } from "@/data/questionsData/types";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import React, { useState } from "react";

export const FrequentlyQuestions: React.FC = () => {
  const [isOpen, setIsOpen] = useState<number | null>(null);

  const handleToggleIsOpen = (id: number) => {
    setIsOpen((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="flex flex-col gap-10">
      {questionsData.map((question: IQuestionData, i: number) => (
        <div key={i} className="">
          <button
            onClick={() => handleToggleIsOpen(question.id)}
            className="flex w-full items-center justify-between h-[60px] text-pcPrincipal gap-5"
          >
            <h3 className="font-bold md:text-lg">{question.question}</h3>
            <FontAwesomeIcon
              className={clsx(
                "text-[15px] w-[15px] transition-all duration-300",
                isOpen === question.id && "-rotate-180"
              )}
              icon={faChevronDown}
              width={15}
            />
          </button>
          <div
            className={clsx(
              "border-b border-tcExtra overflow-hidden transition-all duration-300",
              isOpen === question.id ? "h-[100px]" : "h-0 pb-0"
            )}
          >
            <p className="font-light md:text-lg">{question.response}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FrequentlyQuestions;
