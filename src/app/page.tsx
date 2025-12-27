"use client";
import Navbar from "@/components/Navbar";
import MainPage from "@/components/MainPage";
import Sobre from "@/components/Sobre";
import Projetos from "@/components/Projetos";
import Skills from "@/components/Skills";
import Formacao from "@/components/Formacao";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <MainPage />
      <div
        id="sobre"
        className="flex items-center justify-center relative overflow-hidden md:mt-6"
      >
        <Sobre />
      </div>
      <div
        id="projetos"
        className="flex items-center justify-center relative overflow-hidden md:mt-6"
      >
        <Projetos />
      </div>
      <div
        id="skills"
        className="flex items-center justify-center relative overflow-hidden md:mt-6"
      >
        <Skills />
      </div>
      <div
        id="formacao"
        className="flex items-center justify-center relative overflow-hidden md:mt-6"
      >
        <Formacao />
      </div>
      <div
        id="contato"
        className="flex items-center justify-center relative overflow-hidden md:mt-6"
      >
        <Contato />
      </div>
      <Footer />
    </div>
  );
}
