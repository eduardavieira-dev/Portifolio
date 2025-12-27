"use client";

import { useState } from "react";
import { Send, Linkedin, Github, Mail } from "lucide-react";

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Contato de ${formData.nome}`);
    const body = encodeURIComponent(
      `Nome: ${formData.nome}\nEmail: ${formData.email}\n\nMensagem:\n${formData.mensagem}`
    );

    window.location.href = `mailto:eduarda.vieira.goncalves7@gmail.com?subject=${subject}&body=${body}`;

    setFormData({ nome: "", email: "", mensagem: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-7xl p-6 md:p-12 md:px-20 w-full">
      <div className="mb-8">
        <h2 className="font-serif italic font-medium text-3xl md:text-3xl mb-2">Contato</h2>
        <div className="w-14 h-2 rounded-md bg-pink-300 dark:bg-pink-500"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Formulário */}
        <div>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Tem algum projeto em mente ou quer conversar? Envie uma mensagem!
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="nome"
                className="block text-sm font-alt font-semibold mb-2"
              >
                Nome
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Seu nome"
                value={formData.nome}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border border-gray-300 dark:border-neutral-700 rounded-md bg-white dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-pink-300 dark:focus:ring-pink-500 transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-alt font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border border-gray-300 dark:border-neutral-700 rounded-md bg-white dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-pink-300 dark:focus:ring-pink-500 transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="mensagem"
                className="block text-sm font-alt font-semibold mb-2"
              >
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                placeholder="Digite sua mensagem aqui..."
                value={formData.mensagem}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2.5 border border-gray-300 dark:border-neutral-700 rounded-md bg-white dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-pink-300 dark:focus:ring-pink-500 resize-none transition-all"
              />
            </div>

            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-3 bg-pink-300 dark:bg-pink-500 text-white font-alt font-semibold rounded-md hover:bg-pink-400 dark:hover:bg-pink-600 transition-colors"
            >
              <Send size={20} />
              Enviar Mensagem
            </button>
          </form>
        </div>

        {/* Links de contato */}
        <div className="flex flex-col justify-center gap-4">
          <h3 className="font-alt font-semibold text-xl mb-2">
            Outras formas de contato
          </h3>

          <a
            href="mailto:eduarda.vieira.goncalves7@gmail.com"
            className="flex items-center gap-4 p-4 border border-gray-200 dark:border-neutral-700 rounded-lg hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-all"
          >
            <div className="w-12 h-12 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center">
              <Mail size={24} className="text-pink-400" />
            </div>
            <div>
              <p className="font-alt font-semibold">Email</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                eduarda.vieira.goncalves7@gmail.com
              </p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/eduarda-vieira-gon%C3%A7alves-01a584297/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 border border-gray-200 dark:border-neutral-700 rounded-lg hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-all"
          >
            <div className="w-12 h-12 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center">
              <Linkedin size={24} className="text-pink-400" />
            </div>
            <div>
              <p className="font-alt font-semibold">LinkedIn</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Vamos nos conectar!
              </p>
            </div>
          </a>

          <a
            href="https://github.com/eduardavieira-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 border border-gray-200 dark:border-neutral-700 rounded-lg hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-all"
          >
            <div className="w-12 h-12 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center">
              <Github size={24} className="text-pink-400" />
            </div>
            <div>
              <p className="font-alt font-semibold">GitHub</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Confira meus projetos
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
