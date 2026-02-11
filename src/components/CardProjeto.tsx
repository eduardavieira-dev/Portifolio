"use client";
import { Github, ExternalLink, Calendar, Sparkles } from "lucide-react";
import Image from "next/image";
import { Projeto } from "@/types/projeto";

interface CardProjetoProps {
  projeto: Projeto;
  onClick: () => void;
}

export default function CardProjeto({ projeto, onClick }: CardProjetoProps) {
  return (
    <div
      onClick={onClick}
      className="group relative bg-card border-2 border-pink-200 dark:border-pink-400/30 rounded-xl overflow-hidden hover:border-pink-300 dark:hover:border-pink-500/70 transition-all duration-300 hover:shadow-xl hover:shadow-pink-200/50 dark:hover:shadow-pink-500/20 cursor-pointer hover:-translate-y-1"
    >
      {/* Imagem do Projeto */}
      <div className="relative h-50 bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/20 dark:to-purple-900/20 overflow-hidden">
        <Image
          src={`/${projeto.imagem}`}
          alt={projeto.titulo}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Conteúdo do Card */}
      <div className="p-6">
        <div className="flex justify-between items-start gap-2 mb-4">
          <h3 className="font-alt font-bold text-xl text-foreground group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
            {projeto.titulo}
          </h3>
        </div>

        {/* Data */}
        <div className="flex items-center gap-1.5 mb-4 text-xs text-foreground/60">
          <Calendar size={14} />
          <span>{projeto.data}</span>
        </div>

        {/* Descrição */}
        <p className="text-foreground/70 text-sm mb-5 line-clamp-3 leading-relaxed">
          {projeto.descricao}
        </p>

        {/* Tecnologias */}
        <div className="flex flex-wrap gap-2">
          {projeto.tecnologias.slice(0, 4).map((tech, i) => (
            <span
              key={i}
              className="text-xs px-2.5 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-lg font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Borda animada no hover */}
      <div className="absolute inset-0 rounded-xl ring-2 ring-pink-400/0 group-hover:ring-pink-400/50 dark:group-hover:ring-pink-500/50 transition-all duration-300 pointer-events-none" />
    </div>
  );
}
