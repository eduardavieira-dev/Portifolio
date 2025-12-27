"use client";
import { Github, ExternalLink, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Projeto {
  titulo: string;
  descricao: string;
  tecnologias: string[];
  imagem: string;
  githubUrl?: string;
}

export default function Projetos() {
  const [projetoSelecionado, setProjetoSelecionado] = useState<Projeto | null>(
    null
  );
  const projetos: Projeto[] = [
    {
      titulo: "DudaFlix",
      descricao:
        "Aplicação web que consome a API do The Movie Database (TMDB), utilizando Node.js no back-end. Implementa conceitos de CRUD e API RESTful, permitindo buscar filmes, salvar favoritos e gerenciar dados dinamicamente.",
      tecnologias: ["HTML", "CSS", "JavaScript", "Node.js"],
      imagem: "DudaFlix.png",
      githubUrl: "https://github.com/eduardavieira-dev/eduarda-projeto",
    },
    {
      titulo: "Moneo",
      descricao:
        "Projeto interdisciplinar desenvolvido com HTML, CSS, JavaScript e Node.js, focado em gerenciamento financeiro pessoal e educação financeira. A plataforma auxilia usuários a organizarem seus gastos, acompanharem investimentos e aprenderem mais sobre finanças de forma prática",
      tecnologias: ["HTML", "CSS", "JavaScript", "Node.js"],
      imagem: "Moneo.png",
      githubUrl: "https://github.com/eduardavieira-dev/Moneo",
    },
    {
      titulo: "Food Bridge",
      descricao:
        "Projeto interdisciplinar desenvolvido no segundo período, com front-end em HTML, CSS e JavaScript e back-end em Spring Boot. A plataforma conecta doadores a organizações sociais, facilitando o repasse de alimentos e promovendo impacto social por meio da tecnologia.",
      tecnologias: ["HTML", "CSS", "JavaScript", "Spring Boot"],
      imagem: "FoodBridge.png",
      githubUrl:
        "https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2025-1-ti2-1372100-food-bridge",
    },
  ];

  return (
    <div className="max-w-7xl p-6 md:p-12 md:px-20 w-full">
      <div className="mb-8">
        <h2 className="font-serif text-3xl md:text-3xl mb-2">Projetos</h2>
        <div className="w-14 h-2 rounded-md bg-pink-300 dark:bg-pink-500"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projetos.map((projeto, index) => (
          <div
            key={index}
            onClick={() => setProjetoSelecionado(projeto)}
            className="group relative bg-card border-2 border-pink-200 dark:border-pink-400/30 rounded-xl overflow-hidden hover:border-pink-300 dark:hover:border-pink-500/70 transition-all duration-300 hover:shadow-lg cursor-pointer"
          >
            <div className="relative h-48 bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/20 dark:to-purple-900/20 overflow-hidden">
              <Image
                src={`/${projeto.imagem}`}
                alt={projeto.titulo}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5">
              <div className="flex justify-between items-center gap-2 mb-2">
                <h3 className="font-alt font-bold text-xl text-foreground">
                  {projeto.titulo}
                </h3>
                {projeto.githubUrl && (
                  <a
                    href={projeto.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-foreground/60 hover:text-pink-600 dark:hover:text-pink-400 transition-colors px-2"
                  >
                    <Github size={20} />
                  </a>
                )}
              </div>

              <p className="text-foreground/70 text-sm mb-4 line-clamp-3">
                {projeto.descricao}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {projeto.tecnologias.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Modal */}
        {projetoSelecionado && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setProjetoSelecionado(null)}
          >
            <div
              className="bg-background border border-pink-300 dark:border-pink-400/50 rounded-xl max-w-lg w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setProjetoSelecionado(null)}
                className="absolute top-3 right-3 p-1.5 hover:bg-pink-100 dark:hover:bg-pink-900/30 rounded-full transition-colors z-10"
              >
                <X size={18} />
              </button>

              <div className="relative h-48 bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/20 dark:to-purple-900/20 rounded-t-xl overflow-hidden">
                <Image
                  src={`/${projetoSelecionado.imagem}`}
                  alt={projetoSelecionado.titulo}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="font-serif text-2xl text-foreground">
                    {projetoSelecionado.titulo}
                  </h2>
                  {projetoSelecionado.githubUrl && (
                    <a
                      href={projetoSelecionado.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/60 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
                    >
                      <Github size={22} />
                    </a>
                  )}
                </div>

                <p className="text-foreground/70 text-sm mb-4 leading-relaxed">
                  {projetoSelecionado.descricao}
                </p>

                <div className="flex flex-wrap gap-2">
                  {projetoSelecionado.tecnologias.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
