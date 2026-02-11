export interface Projeto {
  id: string;
  titulo: string;
  descricao: string;
  descricaoCompleta?: string;
  tecnologias: string[];
  imagem: string;
  githubUrl?: string;
  demoUrl?: string;
  data: string;
}
