"use client";
import Image from "next/image";
import { FileText, X } from "@phosphor-icons/react";
import { useState } from "react";
export default function MainPage() {
  const [verCurriculo, setVerCurriculo] = useState(false);
  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden md:mt-6">
      <Image
        src="/EllipseLight.png"
        alt="Elipse de fundo"
        width={600}
        height={600}
        className="absolute dark:hidden"
      />
      <Image
        src="/EllipseDark.png"
        alt="Elipse de fundo"
        width={600}
        height={600}
        className="absolute hidden dark:block"
      />

      <div className="relative z-10 text-center max-w-2xl px-6 md:items-center items-start flex flex-col">
        <h1 className="font-serif italic font-medium text-3xl md:text-[2.5rem] mb-3 md:mb-6 text-start md:text-center">
          Olá! Sou a{" "}
          <span className="text-purple-800 dark:text-purple-300 inline-block">
            Eduarda Vieira
          </span>
        </h1>

        <p className="text-sm md:text-md text-foreground/80  mb-6 md:mb-8 leading-relaxed max-w-md text-start md:text-md md:text-center">
          Técnica em Desenvolvimento de Sistemas, atualmente cursando Engenharia
          de Software e atuo como monitora na disciplina de Desenvolvimento de
          Interfaces Web.
        </p>

        <button
          type="button"
          onClick={() => setVerCurriculo(true)}
          className="learn-more"
        >
          <FileText size={20} />
          Ver currículo
        </button>

        <style jsx>{`
          .learn-more {
            position: relative;
            display: inline-flex;
            align-items: center;
            gap: 0.5em;
            cursor: pointer;
            outline: none;
            border: 0;
            vertical-align: middle;
            text-decoration: none;
            font-family: inherit;
            font-size: 15px;
            font-weight: 500;
            color: #382b22;
            padding: 0.85em 2em;
            background: #fff0f0;
            border: 2px solid #b18597;
            border-radius: 0.75em;
            transform-style: preserve-3d;
            transition:
              transform 150ms cubic-bezier(0, 0, 0.58, 1),
              background 150ms cubic-bezier(0, 0, 0.58, 1);
          }

          .learn-more::before {
            position: absolute;
            content: "";
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: #f9c4d2;
            border-radius: inherit;
            box-shadow:
              0 0 0 2px #b18597,
              0 0.625em 0 0 #ffe3e2;
            transform: translate3d(0, 0.75em, -1em);
            transition:
              transform 150ms cubic-bezier(0, 0, 0.58, 1),
              box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
          }

          .learn-more:hover {
            background: #ffe9e9;
            transform: translate(0, 0.25em);
          }

          .learn-more:hover::before {
            box-shadow:
              0 0 0 2px #b18597,
              0 0.5em 0 0 #ffe3e2;
            transform: translate3d(0, 0.5em, -1em);
          }

          .learn-more:active {
            background: #ffe9e9;
            transform: translate(0em, 0.75em);
          }

          .learn-more:active::before {
            box-shadow:
              0 0 0 2px #b18597,
              0 0 #ffe3e2;
            transform: translate3d(0, 0, -1em);
          }

          @media (max-width: 768px) {
            .learn-more {
              font-size: 13px;
              padding: 0.75em 1.5em;
            }
          }

          :global(.dark) .learn-more {
            background: #362e31;
            border: 2px solid #ae4078;
            color: #fff;
          }

          :global(.dark) .learn-more::before {
            background: #872a59;
            box-shadow:
              0 0 0 2px #ae4078,
              0 0.625em 0 0 transparent;
          }

          :global(.dark) .learn-more:hover {
            background: #221f20;
          }

          :global(.dark) .learn-more:hover::before {
            box-shadow:
              0 0 0 2px #ae4078,
              0 0.5em 0 0 transparent;
          }

          :global(.dark) .learn-more:active {
            background: #181717;
          }

          :global(.dark) .learn-more:active::before {
            box-shadow:
              0 0 0 2px #ae4078,
              0 0 #872a59;
          }
        `}</style>
      </div>

      {verCurriculo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={() => setVerCurriculo(false)}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-pink-200/60 dark:border-pink-500/30 bg-background/95 shadow-[0_20px_80px_rgba(0,0,0,0.35)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-4 bg-pink-100 dark:from-pink-500/20 dark:via-background dark:bg-purple-900/10">
              <div className="flex items-center gap-2">
                <div className="h-9 w-9 rounded-full bg-white/80 dark:bg-white/10 border border-pink-200/60 dark:border-pink-500/30 flex items-center justify-center">
                  <FileText size={18} weight="bold" className="text-pink-500" />
                </div>
                <div>
                  <h3 className="font-alt font-semibold leading-tight">
                    Currículo
                  </h3>
                  <p className="text-xs text-foreground/60">
                    Visualize o PDF e faça o donwload a baixo.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setVerCurriculo(false)}
                className="rounded-full p-2 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                aria-label="Fechar currículo"
              >
                <X size={18} />
              </button>
            </div>

            <div className="h-[70vh] w-full bg-muted/20">
              <iframe
                src="/curriculo.pdf"
                title="Currículo"
                className="h-full w-full"
              />
            </div>

            <div className="flex items-center justify-between px-5 py-4 bg-background">
              <p className="text-xs text-foreground/60">
                Dica: use zoom do navegador para ajustar a leitura.
              </p>
              <a
                href="/curriculo.pdf"
                download
                className="text-sm font-semibold text-pink-500 hover:text-pink-600 transition-colors"
              >
                Baixar PDF
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
