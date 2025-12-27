"use client";
import { Moon, Sun, List, X } from "@phosphor-icons/react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [secaoAtiva, setSecaoAtiva] = useState("");
  const [temaEscuro, setTemaEscuro] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const links = [
    { id: "sobre", nome: "Sobre mim" },
    { id: "projetos", nome: "Projetos" },
    { id: "skills", nome: "Skills" },
    { id: "formacao", nome: "Formação" },
    { id: "contato", nome: "Contato" },
  ];

  // Carregar tema do localStorage ao montar o componente
  useEffect(() => {
    const temaSalvo = localStorage.getItem("tema");
    const isDark = temaSalvo === "dark";
    setTemaEscuro(isDark);

    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    const detectarSecao = () => {
      if (isScrolling) return;

      const scrollPosition = window.scrollY + 150;

      for (const link of links) {
        const secao = document.getElementById(link.id);
        if (secao) {
          const inicio = secao.offsetTop;
          const fim = inicio + secao.offsetHeight;

          if (scrollPosition >= inicio && scrollPosition < fim) {
            setSecaoAtiva(link.id);
            return;
          }
        }
      }
    };

    detectarSecao();
    window.addEventListener("scroll", detectarSecao);

    return () => window.removeEventListener("scroll", detectarSecao);
  }, [isScrolling]);

  const alternarTema = () => {
    const novoTema = !temaEscuro;
    setTemaEscuro(novoTema);

    if (novoTema) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("tema", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("tema", "light");
    }
  };

  const irParaSecao = (id: string) => {
    setMenuAberto(false);
    setSecaoAtiva(id);
    setIsScrolling(true);

    const secao = document.getElementById(id);
    if (secao) {
      const navbarHeight = 100;
      const elementPosition = secao.offsetTop;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Reabilitar detecção após o scroll terminar
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm transition-colors duration-300 lg:pt-3">
      <div className="flex items-center justify-between p-6 max-w-7xl mx-auto w-full">
        <h1 className="font-script text-3xl">Eduarda</h1>

        <div className="hidden md:flex gap-4 items-center">
          <ul className="flex gap-6">
            {links.map((link) => (
              <li key={link.id} className="relative group">
                <button
                  onClick={() => irParaSecao(link.id)}
                  className="hover:text-foreground/80 transition-colors"
                >
                  {link.nome}
                </button>

                {secaoAtiva === link.id && (
                  <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-3/4 h-1 bg-border-bar rounded-full" />
                )}

                <span className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-0 h-1 bg-border-bar rounded-full group-hover:w-3/4 transition-all duration-300" />
              </li>
            ))}
          </ul>

          <button
            onClick={alternarTema}
            className="ml-2 p-1 hover:text-foreground transition-all duration-300 cursor-pointer"
          >
            {temaEscuro ? (
              <Sun className="text-pink-300" size={24} />
            ) : (
              <Moon className="text-gray-800 hover:text-blue-900" size={24} />
            )}
          </button>
        </div>

        {/* Botões Mobile */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={alternarTema}
            className="p-1 transition-all duration-300"
          >
            {temaEscuro ? (
              <Sun className="text-pink-300" size={24} />
            ) : (
              <Moon className="text-gray-800 hover:text-blue-900" size={24} />
            )}
          </button>

          <button onClick={() => setMenuAberto(!menuAberto)}>
            {menuAberto ? <X size={28} /> : <List size={28} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {menuAberto && (
        <div className="md:hidden bg-background border-t border-border transition-colors duration-300">
          <ul className="flex flex-col p-6 gap-4">
            {links.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => irParaSecao(link.id)}
                  className="block py-2 w-full text-left hover:text-foreground/80 transition-colors"
                >
                  {link.nome}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
