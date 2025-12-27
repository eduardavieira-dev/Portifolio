"use client";
import Image from "next/image";
import { ArrowDown } from "@phosphor-icons/react";
export default function MainPage() {
  const irParaSobre = () => {
    const secao = document.getElementById("sobre");
    secao?.scrollIntoView({ behavior: "smooth" });
  };
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
        <h1 className="font-serif text-3xl md:text-[2.5rem] mb-3 md:mb-6 text-start md:text-center">
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

        <button onClick={irParaSobre} className="learn-more">
          Sobre mim
          <ArrowDown size={20} weight="bold" />
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
            transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
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
            box-shadow: 0 0 0 2px #b18597, 0 0.625em 0 0 #ffe3e2;
            transform: translate3d(0, 0.75em, -1em);
            transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
              box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
          }

          .learn-more:hover {
            background: #ffe9e9;
            transform: translate(0, 0.25em);
          }

          .learn-more:hover::before {
            box-shadow: 0 0 0 2px #b18597, 0 0.5em 0 0 #ffe3e2;
            transform: translate3d(0, 0.5em, -1em);
          }

          .learn-more:active {
            background: #ffe9e9;
            transform: translate(0em, 0.75em);
          }

          .learn-more:active::before {
            box-shadow: 0 0 0 2px #b18597, 0 0 #ffe3e2;
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
            box-shadow: 0 0 0 2px #ae4078, 0 0.625em 0 0 transparent;
          }

          :global(.dark) .learn-more:hover {
            background: #221f20;
          }

          :global(.dark) .learn-more:hover::before {
            box-shadow: 0 0 0 2px #ae4078, 0 0.5em 0 0 transparent;
          }

          :global(.dark) .learn-more:active {
            background: #181717;
          }

          :global(.dark) .learn-more:active::before {
            box-shadow: 0 0 0 2px #ae4078, 0 0 #872a59;
          }
        `}</style>
      </div>
    </main>
  );
}
