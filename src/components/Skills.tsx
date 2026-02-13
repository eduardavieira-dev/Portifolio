"use client";

import Image from "next/image";

export default function Skills() {
  const itemClass =
    "skill-card group border border-gray-200/80 dark:border-neutral-700/80 bg-white/60 dark:bg-neutral-900/30 px-3 py-2 rounded-lg flex gap-4 items-center transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-sm";

  return (
    <div className="max-w-7xl p-6 md:p-12 md:px-20 w-full">
      <div className="mb-8">
        <h2 className="font-serif italic font-medium text-3xl md:text-3xl mb-2">Skills</h2>
        <div className="w-14 h-2 rounded-md bg-pink-300 dark:bg-pink-500"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 font-alt font-semibold text-base">
        <div className={itemClass}>
          <div className="bg-html dark:bg-orange-700/30 p-1.5 md:p-1 rounded">
            <Image
              src="/icones/html5.svg"
              alt="HTML5"
              width={32}
              height={32}
              className="w-7 h-7 p-0.5"
            />
          </div>
          <p className="">HTML</p>
        </div>
        <div className={itemClass}>
          <div className="bg-css dark:bg-blue-500/20 p-1.5 md:p-1 rounded">
            <Image
              src="/icones/css3.svg"
              alt="CSS3"
              width={32}
              height={32}
              className="w-7 h-7 p-0.5"
            />
          </div>
          <p className="">CSS</p>
        </div>
        <div className={itemClass}>
          <div className="bg-js dark:bg-yellow-500/30 p-1.5 md:p-1 rounded">
            <Image
              src="/icones/javascript.svg"
              alt="JavaScript"
              width={32}
              height={32}
              className="w-7 h-7 p-0.5"
            />
          </div>
          <p className="">Java Script</p>
        </div>
        <div className={itemClass}>
          <div className="bg-nodejs dark:bg-green-200/70 p-1.5 md:p-1 rounded">
            <Image
              src="/icones/node.svg"
              alt="Node JS"
              width={32}
              height={32}
              className="w-7 h-7 p-0.5"
            />
          </div>
          <p className="">Node JS</p>
        </div>
        <div className={itemClass}>
          <div className="bg-mysql dark:bg-yellow-400/20 p-1.5 md:p-1 rounded">
            <Image
              src="/icones/mysql.svg"
              alt="MySQL"
              width={32}
              height={32}
              className="w-7 h-7 p-0.5"
            />
          </div>
          <p className="">MySQL</p>
        </div>
        <div className={itemClass}>
          <div className="bg-pg dark:bg-blue-500/20 p-1.5 md:p-1 rounded">
            <Image
              src="/icones/postgresql.svg"
              alt="PostgreSQL"
              width={32}
              height={32}
              className="w-7 h-7 p-0.5"
            />
          </div>
          <p className="">PostgreSQL</p>
        </div>
        <div className={itemClass}>
          <div className="bg-java dark:bg-red-400/20 p-1.5 md:p-1 rounded">
            <Image
              src="/icones/java.svg"
              alt="Java"
              width={32}
              height={32}
              className="w-7 h-7 p-0.5"
            />
          </div>
          <p className="">Java</p>
        </div>

        <div className={itemClass}>
          <div className="bg-nextjs dark:bg-gray-600/20 p-1.5 md:p-1 rounded">
            <Image
              src="/icones/nextjs.svg"
              alt="Next.js"
              width={32}
              height={32}
              className="w-7 h-7 p-0.5"
            />
          </div>
          <p className="">Next.js</p>
        </div>

        <div className={itemClass}>
          <div className="bg-react dark:bg-cyan-500/20 p-1.5 md:p-1 rounded">
            <Image
              src="/icones/react.svg"
              alt="React"
              width={32}
              height={32}
              className="w-7 h-7 p-0.5"
            />
          </div>
          <p className="">React</p>
        </div>

        <div className={itemClass}>
          <div className="bg-tailwind dark:bg-sky-400/20 p-1.5 md:p-1 rounded">
            <Image
              src="/icones/tailwindcss.svg"
              alt="Tailwind CSS"
              width={32}
              height={32}
              className="w-7 h-7 p-0.5"
            />
          </div>
          <p className="">Tailwind CSS</p>
        </div>

        <div className={itemClass}>
          <div className="bg-github dark:bg-gray-200/30 p-1.5 md:p-1 rounded">
            <Image
              src="/icones/github.svg"
              alt="GitHub"
              width={32}
              height={32}
              className="w-7 h-7 p-0.5"
            />
          </div>
          <p className="">GitHub</p>
        </div>

        <div className={itemClass}>
          <div className="bg-git dark:bg-orange-600/20 p-1.5 md:p-1 rounded">
            <Image
              src="/icones/git.svg"
              alt="Git"
              width={32}
              height={32}
              className="w-7 h-7 p-0.5"
            />
          </div>
          <p className="">Git</p>
        </div>
        <div className={itemClass}>
          <div className="bg-figma dark:bg-purple-500/20 p-1.5 md:p-1 rounded">
            <Image
              src="/icones/figma.svg"
              alt="Figma"
              width={32}
              height={32}
              className="w-7 h-7 p-0.5"
            />
          </div>
          <p className="">Figma</p>
        </div>
      </div>
    </div>
  );
}
