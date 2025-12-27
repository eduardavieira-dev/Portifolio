"use client";

import { GraduationCap, Star, Briefcase } from "@phosphor-icons/react";

export default function Formacao() {
  const formacoes = [
    {
      titulo: "Engenharia de Software",
      instituicao: "PUC Minas",
      periodo: "Agosto de 2024 - Julho de 2028",
    },
    {
      titulo: "Monitoria: Desenvolvimento de Interfaces Web",
      instituicao: "PUC Minas",
      periodo: "Março de 2025 - atualmente",
    },
    {
      titulo: "Projeto de Extensão Elas++",
      instituicao: "PUC Minas",
      periodo: "Agosto de 2025 - atualmente",
    },
    {
      titulo: "Projeto de Extensão WebTec",
      instituicao: "PUC Minas",
      periodo: "Fevereiro de 2025 - atualmente",
    },
    {
      titulo: "Técnico em Desenvolvimento de Sistemas",
      instituicao: "SENAI",
      periodo: "Maio de 2023 - Agosto de 2024",
    },
  ];

  return (
    <div className="max-w-7xl p-6 md:p-12 md:px-20 w-full">
      <div className="mb-8">
        <h2 className="font-serif italic font-medium text-3xl md:text-3xl mb-2">
          Formação e experiências
        </h2>
        <div className="w-14 h-2 rounded-md bg-pink-300 dark:bg-pink-500"></div>
      </div>

      <div className="relative">
        {formacoes.map((item, index) => {
          const getIcon = () => {
            if (item.titulo.includes("Projeto de Extensão")) {
              return (
                <Star
                  size={24}
                  weight="regular"
                  className="text-pink-400 dark:text-pink-400"
                />
              );
            }
            if (item.titulo.includes("Monitoria")) {
              return (
                <Briefcase
                  size={24}
                  weight="regular"
                  className="text-pink-400 dark:text-pink-400"
                />
              );
            }
            return (
              <GraduationCap
                size={24}
                weight="regular"
                className="text-pink-400 dark:text-pink-400"
              />
            );
          };

          return (
            <div key={index} className="flex gap-6 mb-8 last:mb-0">
              <div className="relative flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-pink-100 dark:bg-pink-900/90 flex items-center justify-center z-10">
                  {getIcon()}
                </div>
                {index < formacoes.length - 1 && (
                  <div className="w-1 h-full absolute top-12 bg-pink-200 dark:bg-pink-700/50"></div>
                )}
              </div>

              <div className="flex-1 pb-8">
                <h3 className="font-alt font-semibold text-lg mb-1">
                  {item.titulo} — {item.instituicao}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.periodo}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
