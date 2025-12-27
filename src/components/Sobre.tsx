export default function Sobre() {
  return (
    <div className="max-w-7xl p-6 md:p-12 flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-center">
      <div>
        <div className="mb-4">
          <h2 className="font-serif text-3xl md:text-3xl mb-2">Sobre mim</h2>
          <div className="w-14 h-2 rounded-md bg-pink-300 dark:bg-pink-500"></div>
        </div>
        <p className="text-foreground/80 mb-4 leading-relaxed max-w-2xl">
          Comecei minha trajetória na área de tecnologia em 2023, cursando
          Técnico em Desenvolvimento de Sistemas pelo SENAI. Desde então, tenho
          me dedicado a aprofundar meus conhecimentos e me apaixonado cada vez
          mais pelo universo da tecnologia, com foco especial em desenvolvimento
          web. Atualmente, sou estudante de Engenharia de Software na PUC, onde
          continuo me aperfeiçoando e enfrentando novos desafios para me tornar
          uma programadora cada vez melhor. Tenho interesse em criar interfaces
          intuitivas e funcionais, que proporcionem experiências positivas aos
          usuários. Além disso, atuo como monitora de Desenvolvimento de
          Interfaces Web, ajudando outros alunos a aprender e se desenvolver
          nesta área.
        </p>
      </div>
      <div className="rounded-md shadow-[8px_8px_0px_0px_rgb(249,168,212)] dark:shadow-[8px_8px_0px_0px_rgb(236,72,153)]">
        <img
          className="rounded-md border-2 border-pink-300 dark:border-pink-400"
          src="Duda.png"
          alt="Eduarda"
        />
      </div>
    </div>
  );
}
