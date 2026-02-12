"use client";
import { Github, ExternalLink, X, Calendar, Images } from "lucide-react";
import { useState } from "react";
import { Projeto } from "@/types/projeto";

interface ModalProjetoProps {
  projeto: Projeto | null;
  onClose: () => void;
}

export default function ModalProjeto({ projeto, onClose }: ModalProjetoProps) {
  if (!projeto) return null;

  const [mostrarGaleria, setMostrarGaleria] = useState(false);
  const [imagemSelecionada, setImagemSelecionada] = useState<string | null>(
    null,
  );

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-background border-2 border-pink-300 dark:border-pink-400/50 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-scroll modal-scroll relative shadow-2xl animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="sticky top-4 right-4 float-right p-2 border-2 border-pink-300 dark:border-pink-400/90 hover:bg-pink-100 dark:hover:bg-pink-900/90 rounded-full transition-colors z-10 bg-background/80 backdrop-blur-sm"
        >
          <X size={20} className="text-pink-500 dark:text-pink-300" />
        </button>

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
          <hr className="my-6 border-t border-foreground/10 dark:border-pink-300/80" />
          <div>
            <img
              src={`/${projeto.imagem}`}
              alt={projeto.titulo}
              className="my-4 rounded-md"
            />
          </div>

          {projeto.imagens && projeto.imagens.length > 0 && (
            <div className="mb-6">
              <button
                onClick={() => setMostrarGaleria((prev) => !prev)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 dark:bg-pink-900/30 text-purple-400 dark:text-pink-300 rounded-lg text-sm font-medium hover:bg-purple-100 dark:hover:bg-pink-900/50 transition-colors cursor-pointer"
              >
                <Images size={16} />
                {mostrarGaleria
                  ? "Ocultar imagens"
                  : `Ver mais imagens (${projeto.imagens.length})`}
              </button>

              {mostrarGaleria && (
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {projeto.imagens.map((img, index) => (
                    <button
                      key={`${img}-${index}`}
                      type="button"
                      onClick={() => setImagemSelecionada(img)}
                      className="group relative overflow-hidden rounded-lg border border-pink-200 dark:border-pink-400/30 text-left"
                    >
                      <img
                        src={`/${img}`}
                        alt={`${projeto.titulo} ${index + 1}`}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

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

      {imagemSelecionada && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4"
          onClick={(e) => {
            e.stopPropagation();
            setImagemSelecionada(null);
          }}
        >
          <div
            className="relative max-h-[90vh] max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setImagemSelecionada(null)}
              className="absolute -top-4 -right-4 p-2 rounded-full border-2 border-pink-300 dark:border-pink-400/90 bg-background/90 backdrop-blur hover:bg-pink-100 dark:hover:bg-pink-900/90 transition-colors"
            >
              <X size={18} className="text-pink-500 dark:text-pink-300" />
            </button>
            <img
              src={`/${imagemSelecionada}`}
              alt={projeto.titulo}
              className="max-h-[90vh] w-full rounded-xl object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
