"use client";
import { Github, ExternalLink, X, Calendar, Sparkles } from "lucide-react";
import Image from "next/image";
import { Projeto } from "@/types/projeto";

interface ModalProjetoProps {
  projeto: Projeto | null;
  onClose: () => void;
}

export default function ModalProjeto({ projeto, onClose }: ModalProjetoProps) {
  if (!projeto) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-background border-2 border-pink-300 dark:border-pink-400/50 rounded-2xl max-w-3xl w-full relative shadow-2xl animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-pink-100 dark:hover:bg-pink-900/30 rounded-full transition-colors z-10 bg-background/80 backdrop-blur-sm"
        >
          <X size={20} />
        </button>


        {/* Imagem Grande */}
        <div className="relative h-56 bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/20 dark:to-purple-900/20 rounded-t-2xl overflow-hidden">
          <Image
            src={`/${projeto.imagem}`}
            alt={projeto.titulo}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="mb-5">
            <h2 className="font-serif italic font-medium text-3xl text-foreground mb-3">
              {projeto.titulo}
            </h2>
            <div className="flex items-center gap-2 text-sm text-foreground/60">
              <Calendar size={16} />
              <span>{projeto.data}</span>
            </div>
          </div>

          {/* Descrição Completa */}
          <p className="text-foreground/80 text-sm mb-6 leading-relaxed">
            {projeto.descricaoCompleta || projeto.descricao}
          </p>

          {/* Tecnologias */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-foreground/70 mb-3">
              Tecnologias Utilizadas
            </h3>
            <div className="flex flex-wrap gap-2">
              {projeto.tecnologias.map((tech, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1.5 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-lg font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Botões de Ação */}
          <div className="flex flex-wrap gap-3">
            {projeto.githubUrl && (
              <a
                href={projeto.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-foreground text-background hover:bg-foreground/90 rounded-lg transition-all text-sm font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <Github size={18} />
                Ver Código
              </a>
            )}
            {projeto.demoUrl && (
              <a
                href={projeto.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-pink-400 hover:bg-pink-500 text-white rounded-lg transition-all text-sm font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <ExternalLink size={18} />
                Ver Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
