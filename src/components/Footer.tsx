"use client";

import { Heart } from "@phosphor-icons/react";

export default function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-200 dark:border-neutral-700 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-8 md:px-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
            Feito com
            <Heart size={16} weight="fill" className="text-pink-400" />
            por Eduarda Vieira
          </p>

          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {anoAtual} Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
