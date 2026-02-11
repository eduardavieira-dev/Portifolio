import { Projeto } from "@/types/projeto";

export const projetos: Projeto[] = [
  {
    id: "dudaflix",
    titulo: "DudaFlix",
    descricao:
      "Aplicação web de catálogo de filmes com integração à API TMDB. Sistema completo de favoritos e busca avançada.",
    descricaoCompleta:
      "Aplicação web que consome a API do The Movie Database (TMDB), utilizando Node.js no back-end. Implementa conceitos de CRUD e API RESTful, permitindo buscar filmes, salvar favoritos e gerenciar dados dinamicamente. Interface intuitiva com design responsivo e funcionalidades avançadas de filtros e recomendações personalizadas.",
    tecnologias: ["HTML", "CSS", "JavaScript", "Node.js", "API REST"],
    imagem: "DudaFlix.png",
    githubUrl: "https://github.com/eduardavieira-dev/eduarda-projeto",
    // demoUrl: "https://dudaflix.vercel.app", 
    data: "2024",
  },
  {
    id: "moneo",
    titulo: "Moneo",
    descricao:
      "Plataforma de gestão financeira pessoal com dashboards interativos e relatórios personalizados.",
    descricaoCompleta:
      "Projeto interdisciplinar desenvolvido com HTML, CSS, JavaScript e Node.js, focado em gerenciamento financeiro pessoal e educação financeira. A plataforma auxilia usuários a organizarem seus gastos, acompanharem investimentos e aprenderem mais sobre finanças de forma prática. Inclui dashboards interativos com gráficos em tempo real, categorização automática de despesas e relatórios detalhados.",
    tecnologias: ["HTML", "CSS", "JavaScript", "Node.js", "Charts.js"],
    imagem: "Moneo.png",
    githubUrl: "https://github.com/eduardavieira-dev/Moneo",
    // demoUrl: "https://moneo.vercel.app", 
    data: "2024",
  },
  {
    id: "food-bridge",
    titulo: "Food Bridge",
    descricao:
      "Plataforma de impacto social que conecta doadores e ONGs facilitando a doação de alimentos.",
    descricaoCompleta:
      "Projeto interdisciplinar desenvolvido no segundo período, com front-end em HTML, CSS e JavaScript e back-end em Spring Boot. A plataforma conecta doadores a organizações sociais, facilitando o repasse de alimentos e promovendo impacto social por meio da tecnologia. Sistema completo de gestão de doações com notificações em tempo real, mapeamento de pontos de coleta e painel administrativo para as ONGs.",
    tecnologias: ["Spring Boot", "MySQL","HTML", "CSS", "JavaScript"],
    imagem: "FoodBridge.png",
    githubUrl:
      "https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2025-1-ti2-1372100-food-bridge",
    demoUrl: "https://www.foodbridge.site/", 
    data: "2025",
  },
];
