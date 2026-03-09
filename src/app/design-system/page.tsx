import Link from "next/link";

const paletaCustom = [
  { nome: "--html", hex: "#fad5cc" },
  { nome: "--css", hex: "#cfe8fa" },
  { nome: "--js", hex: "#fbf6d3" },
  { nome: "--react", hex: "#e5f5ff" },
  { nome: "--nextjs", hex: "#d0d0d0" },
  { nome: "--tailwind", hex: "#e0f2fe" },
  { nome: "--nodejs", hex: "#d6edd5" },
  { nome: "--pg", hex: "#d4e6f4" },
  { nome: "--mysql", hex: "#fae9ce" },
  { nome: "--java", hex: "#fce6e4" },
  { nome: "--figma", hex: "#eee1ff" },
  { nome: "--git", hex: "#f4e1d2" },
  { nome: "--github", hex: "#e0e0e0" },
  { nome: "--border-bar", hex: "#ddc2ff" },
];

const paletaDireta = [
  "#382b22",
  "#fff0f0",
  "#b18597",
  "#f9c4d2",
  "#ffe3e2",
  "#ffe9e9",
  "#362e31",
  "#ae4078",
  "#872a59",
  "#221f20",
  "#181717",
  "#ff9acb",
  "#ff5ea3",
  "#ff7ab6",
  "#ff4f95",
  "rgba(255, 122, 180, 0.9)",
  "rgba(255, 90, 140, 0.9)",
  "rgba(216, 168, 255, 0.85)",
  "rgba(255, 157, 201, 0.8)",
  "rgba(233, 76, 139, 0.9)",
  "rgba(241, 93, 214, 0.9)",
  "rgba(240, 196, 249, 0.8)",
];

const tailwindUsadas = {
  rosa: ["pink-50", "pink-100", "pink-200", "pink-300", "pink-400", "pink-500", "pink-600", "pink-700", "pink-900"],
  roxo: ["purple-50", "purple-100", "purple-300", "purple-400", "purple-800", "purple-900"],
  cinza: ["gray-200", "gray-300", "gray-400", "gray-600", "gray-700", "gray-800", "neutral-600", "neutral-700", "neutral-800", "neutral-900"],
  apoio: ["blue-500", "blue-900", "orange-600", "orange-700", "yellow-400", "yellow-500", "green-200", "cyan-500", "sky-400", "red-400", "red-500"],
  base: ["white", "black", "background", "foreground", "card", "muted", "border", "border-bar"],
};

const tecnologias = [
  { nome: "HTML", classe: "bg-html" },
  { nome: "CSS", classe: "bg-css" },
  { nome: "JavaScript", classe: "bg-js" },
  { nome: "React", classe: "bg-react" },
  { nome: "Next.js", classe: "bg-nextjs" },
  { nome: "Tailwind", classe: "bg-tailwind" },
  { nome: "Node.js", classe: "bg-nodejs" },
  { nome: "PostgreSQL", classe: "bg-pg" },
  { nome: "MySQL", classe: "bg-mysql" },
  { nome: "Java", classe: "bg-java" },
  { nome: "Figma", classe: "bg-figma" },
  { nome: "Git", classe: "bg-git" },
  { nome: "GitHub", classe: "bg-github" },
];

const espacamentos = ["4px", "8px", "12px", "16px", "24px", "32px"];
const raios = ["rounded-md", "rounded-lg", "rounded-xl", "rounded-2xl"];

function PainelTema({ tema }: { tema: "Claro" | "Escuro" }) {
  const isDark = tema === "Escuro";

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="rounded-2xl border border-gray-200 dark:border-neutral-700 bg-background text-foreground p-5 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-alt font-bold text-lg">Tema {tema}</h3>
          <span className="text-xs font-alt font-semibold px-2 py-1 rounded-md bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300">
            Preview
          </span>
        </div>

        <div className="rounded-xl border-2 border-pink-200 dark:border-pink-400/30 p-4 bg-card">
          <p className="font-alt font-semibold mb-1">Card padrão</p>
          <p className="text-sm text-foreground/70 leading-relaxed">
            Superfície principal com contraste seguro para leitura.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button className="px-4 py-2 rounded-lg bg-pink-400 hover:bg-pink-500 text-white text-sm font-alt font-semibold transition-colors">
            Ação primária
          </button>
          <button className="px-4 py-2 rounded-lg border border-gray-300 dark:border-neutral-600 hover:bg-pink-50 dark:hover:bg-pink-900/20 text-sm font-alt font-semibold transition-colors">
            Ação secundária
          </button>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-alt font-semibold">Input</label>
          <input
            type="text"
            defaultValue="Seu conteúdo"
            className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-pink-300 dark:focus:ring-pink-500"
          />
        </div>
      </div>
    </div>
  );
}

export default function DesignSystemPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-6 py-12 md:px-20 md:py-16 space-y-14">
        <header className="space-y-4">
          <span className="inline-flex items-center rounded-full border border-pink-200 dark:border-pink-500/40 px-3 py-1 text-xs font-alt font-semibold text-foreground/70">
            Portfólio · Design System
          </span>
          <h1 className="font-serif italic font-medium text-4xl md:text-5xl">
            Guia visual do site
          </h1>
          <p className="max-w-3xl text-foreground/75 leading-relaxed">
            Este Design System foi construído a partir dos padrões já aplicados
            no portfólio: visual delicado, foco em rosa/lilás, boa leitura
            em light e dark mode e componentes com bordas suaves.
          </p>
          <Link
            href="/"
            className="inline-flex items-center rounded-md bg-pink-300 dark:bg-pink-500 px-4 py-2 text-sm font-alt font-semibold text-white hover:bg-pink-400 dark:hover:bg-pink-600 transition-colors"
          >
            Voltar para início
          </Link>
        </header>

        <section className="space-y-5">
          <div>
            <h2 className="font-serif italic font-medium text-3xl mb-2">Claro e escuro</h2>
            <div className="w-14 h-2 rounded-md bg-pink-300 dark:bg-pink-500"></div>
          </div>
          <p className="text-sm text-foreground/75 leading-relaxed">
            Abaixo você visualiza os mesmos componentes renderizados nos dois
            temas. A proposta é manter a personalidade do portfólio sem perder
            legibilidade.
          </p>
          <div className="grid lg:grid-cols-2 gap-4">
            <PainelTema tema="Claro" />
            <PainelTema tema="Escuro" />
          </div>
        </section>

        <section className="space-y-5">
          <div>
            <h2 className="font-serif italic font-medium text-3xl mb-2">Tipografia</h2>
            <div className="w-14 h-2 rounded-md bg-pink-300 dark:bg-pink-500"></div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-gray-200 dark:border-neutral-700 p-5 bg-card">
              <p className="text-xs text-foreground/60 mb-2">Display script</p>
              <p className="font-script text-4xl">Eduarda</p>
            </div>
            <div className="rounded-xl border border-gray-200 dark:border-neutral-700 p-5 bg-card">
              <p className="text-xs text-foreground/60 mb-2">Heading serif</p>
              <p className="font-serif italic text-3xl">Projetos em destaque</p>
            </div>
            <div className="rounded-xl border border-gray-200 dark:border-neutral-700 p-5 bg-card">
              <p className="text-xs text-foreground/60 mb-2">Texto de interface</p>
              <p className="font-alt text-base">Botões, labels e títulos de cards</p>
            </div>
            <div className="rounded-xl border border-gray-200 dark:border-neutral-700 p-5 bg-card">
              <p className="text-xs text-foreground/60 mb-2">Texto padrão</p>
              <p className="text-sm leading-relaxed text-foreground/80">
                Base para descrição, conteúdo de seções e mensagens auxiliares.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-5">
          <div>
            <h2 className="font-serif italic font-medium text-3xl mb-2">Cores reais do projeto</h2>
            <div className="w-14 h-2 rounded-md bg-pink-300 dark:bg-pink-500"></div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-alt font-semibold">1) Tokens custom definidos em globals.css (:root)</p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {paletaCustom.map((cor) => (
                <div
                  key={cor.nome}
                  className="rounded-xl border border-gray-200 dark:border-neutral-700 p-4 bg-card"
                >
                  <div
                    className="h-14 rounded-md border border-black/5 dark:border-white/10"
                    style={{ backgroundColor: cor.hex }}
                  />
                  <p className="font-alt font-semibold mt-3">{cor.nome}</p>
                  <p className="text-xs text-foreground/60">{cor.hex}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 dark:border-neutral-700 p-5 bg-card space-y-4">
            <p className="text-sm font-alt font-semibold">2) Utilitários Tailwind realmente usados nos componentes</p>
            <div className="grid md:grid-cols-2 gap-3 text-xs">
              {Object.entries(tailwindUsadas).map(([grupo, itens]) => (
                <div key={grupo} className="rounded-lg border border-gray-200 dark:border-neutral-700 p-3">
                  <p className="font-alt font-semibold mb-2 capitalize">{grupo}</p>
                  <div className="flex flex-wrap gap-2">
                    {itens.map((item) => (
                      <span
                        key={item}
                        className="px-2 py-1 rounded-md bg-muted text-foreground/80 border border-border"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-sm font-alt font-semibold">3) Hex/RGBA usados direto no CSS (botão 3D, scrollbar e gradientes)</p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {paletaDireta.map((cor) => (
                <div
                  key={cor}
                  className="rounded-xl border border-gray-200 dark:border-neutral-700 p-3 bg-card"
                >
                  <div
                    className="h-10 rounded-md border border-black/5 dark:border-white/10"
                    style={{ background: cor }}
                  />
                  <p className="text-xs text-foreground/70 mt-2 break-all">{cor}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 dark:border-neutral-700 p-5 bg-card">
            <p className="font-alt font-semibold mb-3">Cores semânticas de skills</p>
            <div className="flex flex-wrap gap-2">
              {tecnologias.map((tech) => (
                <span
                  key={tech.nome}
                  className={`px-3 py-1 rounded-md text-xs font-alt font-semibold ${tech.classe} text-foreground/80`}
                >
                  {tech.nome}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-5">
          <div>
            <h2 className="font-serif italic font-medium text-3xl mb-2">Tokens de layout</h2>
            <div className="w-14 h-2 rounded-md bg-pink-300 dark:bg-pink-500"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-4">
            <div className="rounded-xl border border-gray-200 dark:border-neutral-700 p-5 bg-card">
              <p className="font-alt font-semibold mb-3">Espaçamentos base</p>
              <div className="space-y-3">
                {espacamentos.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-14 text-xs text-foreground/60">{item}</span>
                    <div className="h-3 rounded bg-pink-300 dark:bg-pink-500" style={{ width: item }} />
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 dark:border-neutral-700 p-5 bg-card">
              <p className="font-alt font-semibold mb-3">Escala de borda</p>
              <div className="grid grid-cols-2 gap-3">
                {raios.map((raio) => (
                  <div key={raio} className="space-y-2">
                    <div className={`h-12 bg-pink-100 dark:bg-pink-900/30 border border-pink-200 dark:border-pink-500/30 ${raio}`} />
                    <p className="text-xs text-foreground/60">{raio}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-5">
          <div>
            <h2 className="font-serif italic font-medium text-3xl mb-2">Componentes</h2>
            <div className="w-14 h-2 rounded-md bg-pink-300 dark:bg-pink-500"></div>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-xl border-2 border-pink-200 dark:border-pink-400/30 p-5 bg-card transition-all duration-300 hover:border-pink-300 dark:hover:border-pink-500/70 hover:shadow-xl hover:shadow-pink-200/40 dark:hover:shadow-pink-500/20">
              <h3 className="font-alt font-bold text-xl mb-2">Card de Projeto</h3>
              <p className="text-sm text-foreground/70 mb-4 leading-relaxed">
                Superfície com borda rosa, elevação no hover e foco em conteúdo
                principal.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2.5 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-lg font-medium">
                  React
                </span>
                <span className="text-xs px-2.5 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-lg font-medium">
                  Next.js
                </span>
              </div>
            </div>

            <div className="skill-card rounded-lg border border-gray-200/80 dark:border-neutral-700/80 bg-white/60 dark:bg-neutral-900/30 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm">
              <h3 className="font-alt font-bold text-xl mb-2">Card de Skill</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                Componente compacto com microinteração de borda gradiente no
                hover.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="px-5 py-2.5 bg-foreground text-background rounded-lg text-sm font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
              Botão sólido
            </button>
            <button className="px-5 py-2.5 bg-pink-400 hover:bg-pink-500 text-white rounded-lg text-sm font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
              Botão destaque
            </button>
            <button className="px-5 py-2.5 border border-gray-300 dark:border-neutral-700 rounded-lg text-sm font-medium hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-colors">
              Botão neutro
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-3">
            <div className="rounded-lg border border-gray-200 dark:border-neutral-700 p-4 bg-card">
              <p className="text-xs text-foreground/60 mb-2">Estado default</p>
              <button className="w-full px-4 py-2 rounded-lg bg-pink-400 text-white text-sm font-alt font-semibold">
                Enviar
              </button>
            </div>
            <div className="rounded-lg border border-gray-200 dark:border-neutral-700 p-4 bg-card">
              <p className="text-xs text-foreground/60 mb-2">Estado hover</p>
              <button className="w-full px-4 py-2 rounded-lg bg-pink-500 text-white text-sm font-alt font-semibold">
                Enviar
              </button>
            </div>
            <div className="rounded-lg border border-gray-200 dark:border-neutral-700 p-4 bg-card">
              <p className="text-xs text-foreground/60 mb-2">Estado desabilitado</p>
              <button
                disabled
                className="w-full px-4 py-2 rounded-lg bg-pink-300/60 dark:bg-pink-500/40 text-white/80 text-sm font-alt font-semibold cursor-not-allowed"
              >
                Enviar
              </button>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 dark:border-neutral-700 p-5 bg-card">
            <p className="font-alt font-semibold mb-4">Formulário base</p>
            <div className="grid md:grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-alt font-semibold mb-1">Nome</label>
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full px-4 py-2.5 border border-gray-300 dark:border-neutral-700 rounded-md bg-white dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-pink-300 dark:focus:ring-pink-500"
                />
              </div>
              <div>
                <label className="block text-sm font-alt font-semibold mb-1">Email</label>
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full px-4 py-2.5 border border-gray-300 dark:border-neutral-700 rounded-md bg-white dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-pink-300 dark:focus:ring-pink-500"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-5">
          <div>
            <h2 className="font-serif italic font-medium text-3xl mb-2">Regras de uso</h2>
            <div className="w-14 h-2 rounded-md bg-pink-300 dark:bg-pink-500"></div>
          </div>
          <ul className="space-y-3 text-sm text-foreground/80">
            <li className="rounded-lg border border-gray-200 dark:border-neutral-700 p-4">
              Use títulos de seção com <span className="font-alt font-semibold">serif itálico + barra rosa</span> para manter consistência.
            </li>
            <li className="rounded-lg border border-gray-200 dark:border-neutral-700 p-4">
              Priorize <span className="font-alt font-semibold">bordas arredondadas e sombras suaves</span> em cards e modais.
            </li>
            <li className="rounded-lg border border-gray-200 dark:border-neutral-700 p-4">
              Mantenha a identidade em <span className="font-alt font-semibold">rosa/púrpura</span> para ações, tags e acentos visuais.
            </li>
            <li className="rounded-lg border border-gray-200 dark:border-neutral-700 p-4">
              Garanta contraste no dark mode usando os mesmos tokens semânticos já definidos em <span className="font-alt font-semibold">globals.css</span>.
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}