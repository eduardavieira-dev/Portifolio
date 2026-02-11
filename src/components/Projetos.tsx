"use client";
import { useState } from "react";
import CardProjeto from "./CardProjeto";
import ModalProjeto from "./ModalProjeto";
import { projetos } from "@/data/projetos";
import { Projeto } from "@/types/projeto";

export default function Projetos() {
  const [projetoSelecionado, setProjetoSelecionado] = useState<Projeto | null>(
    null,
  );

  return (
    <div className="max-w-7xl p-6 md:p-12 md:px-20 w-full">
      <div className="mb-8">
        <h2 className="font-serif italic font-medium text-3xl md:text-3xl mb-2">
          Projetos
        </h2>
        <div className="w-14 h-2 rounded-md bg-pink-300 dark:bg-pink-500"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projetos.map((projeto) => (
          <CardProjeto
            key={projeto.id}
            projeto={projeto}
            onClick={() => setProjetoSelecionado(projeto)}
          />
        ))}
      </div>

      <ModalProjeto
        projeto={projetoSelecionado}
        onClose={() => setProjetoSelecionado(null)}
      />
    </div>
  );
}
