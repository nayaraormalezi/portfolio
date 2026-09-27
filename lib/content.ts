export type ProjectVisual =
  | "recovery"
  | "superapp"
  | "system"
  | "prisma"
  | "enterprise";

export type Project = {
  slug: string;
  index: string;
  title: string;
  company: string;
  tags: string[];
  visual: ProjectVisual;
  image?: {
    src: string;
    alt: string;
  };
};

export const site = {
  name: "Nayara Ormalezi",
  role: "Product Designer",
  disciplines: "Product Designer · UX/UI · Digital Products",
  statement:
    "Transformo problemas complexos em experiências digitais mais claras, estratégicas e escaláveis.",
  deck: "Atuo na concepção e evolução de produtos digitais, conectando UX, UI, estratégia, dados e tecnologia.",
  credit: "Esse site foi projetado e desenvolvido por mim, do conceito ao código.",
  linkedin: "https://www.linkedin.com/in/nayaraormalezi",
  email: "nayaraormalezi@gmail.com",
  whatsapp: "",
  whatsappChat:
    "https://wa.me/5511991767909?text=Ol%C3%A1!%20Encontrei%20o%20seu%20site%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20seu%20trabalho.%20",
  location: "São Paulo, Brasil",
  resume: "/Nayara-Ormalezi-CV-2026.pdf",
  portrait: null as string | null,
  year: 2026,
};

export const about = {
  paragraphs: [
    "Sou Product Designer com experiência na criação e evolução de produtos digitais, atuando da compreensão do problema à definição da experiência e interface.",
    "Atualmente, atuo na CAIXA Consórcio, trabalhando na evolução de produtos e jornadas digitais em um ecossistema complexo de canais e serviços.",
    "Minha experiência também passa pela TOTVS e por projetos freelance, construindo interfaces, jornadas, sistemas e experiências digitais para diferentes contextos.",
    "Minha formação combina Design, Marketing, UX e Inovação. Sou formada em Design Gráfico e tenho MBA em Gestão Estratégica de Marketing. Atualmente, estou cursando um MBA em Inovação Orientada à IA e Experiência do Usuário, aprofundando a relação entre design, tecnologia, inteligência artificial e experiência digital.",
  ],
};

export const projects: Project[] = [
  {
    slug: "trajetoria-totvs",
    index: "01",
    title: "Trajetória TOTVS",
    company: "TOTVS",
    tags: ["UX/UI Design", "Experiência Digital", "Gamificação"],
    visual: "enterprise",
    image: {
      src: "/trajetoria-totvs.jpg",
      alt: "Tela inicial da Trajetória TOTVS, com a escolha entre jogar ou apenas ler a história da empresa.",
    },
  },
  {
    slug: "site-caixa-consorcio",
    index: "02",
    title: "Site CAIXA Consórcio",
    company: "CAIXA Consórcio",
    tags: ["UX/UI Design", "Arquitetura de informação", "Componentes", "Conteúdo"],
    visual: "recovery",
    image: {
      src: "/caixa-consorcio.jpg",
      alt: "Notebook mostrando a página inicial do site da CAIXA Consórcio, com a mensagem Somos líderes em contemplação imobiliária.",
    },
  },
];

export const experience = [
  {
    index: "01",
    time: "Outubro 2025 — atualmente",
    org: "CAIXA Consórcio",
    role: "UX/UI Designer | Product Design",
    emphasis: "lead",
    summary: [
      "Responsável pela experiência e evolução dos produtos digitais da CAIXA Consórcio, atuando de forma transversal em diferentes produtos, canais e jornadas.",
      "Atuação ponta a ponta em Product Design, estruturando problemas, explorando oportunidades, concebendo soluções, prototipando e apoiando sua evolução junto aos times de Produto e Tecnologia.",
    ],
    fronts: [
      "Jornadas digitais de venda e pós-venda",
      "SuperApp CAIXA",
      "Aplicativos",
      "Área logada",
      "Portais e plataformas digitais",
      "Jornadas e experiências omnichannel",
      "Design System",
      "Pesquisa e análise de comportamento",
    ],
    tags: ["Product Design", "UX/UI", "Jornadas", "Design System", "UX Data"],
  },
  {
    index: "02",
    time: "Maio 2023 — outubro 2025",
    org: "TOTVS",
    role: "Analista de Design e Inovação PL",
    emphasis: "strong",
    summary: [
      "Desenvolvimento e evolução de experiências digitais para sites, aplicativos e plataformas, aplicando princípios de UX/UI e usabilidade.",
    ],
    fronts: [
      "Evolução e governança do Design System dos portais TOTVS",
      "Pesquisas com usuários",
      "Interfaces e fluxos digitais",
      "Soluções considerando necessidades dos usuários e objetivos do negócio",
      "Apresentação de soluções para stakeholders",
      "Coordenação de demandas com agência terceirizada",
    ],
    tags: ["UX/UI", "Design System", "User Research", "Stakeholders", "Governança"],
  },
  {
    index: "03",
    time: "Maio 2022 — maio 2023",
    org: "Revelo",
    role: "Designer / Analista de Comunicação PL (Internacional)",
    emphasis: "base",
    summary: [
      "Atuação em comunicação internacional, com criação e acompanhamento de esteiras de comunicação outbound e inbound, materiais digitais e estratégias de comunicação interna.",
    ],
    fronts: [
      "Apresentações",
      "Identidade visual",
      "E-books",
      "Tutoriais",
      "Comunicação interna",
      "Estratégia de comunicação",
      "Treinamentos de vendas",
      "Coordenação com agência",
    ],
    tags: ["Communication", "Design", "Presentations", "Branding", "International"],
  },
  {
    index: "04",
    time: "Agosto 2021 — abril 2022",
    org: "Allis Field Marketing | Operação Samsung",
    role: "Designer / Analista de Comunicação PL",
    emphasis: "base",
    summary: [
      "Desenvolvimento de soluções de comunicação e materiais digitais para a operação Samsung.",
    ],
    fronts: [
      "Soluções de comunicação",
      "Materiais digitais",
      "Pesquisa de mercado",
      "Tendências",
      "Benchmarking",
      "Campanhas",
      "Coordenação com agência",
      "Gestão de stakeholders",
    ],
    tags: ["Digital Design", "Communication", "Research", "Benchmark", "Campaigns"],
  },
  {
    index: "05",
    time: "Outubro 2017 — setembro 2020",
    org: "Sociedade Brasileira de Inteligência Emocional — SBIE",
    role: "Designer / Analista de Marketing",
    emphasis: "base",
    summary: [
      "Atuação em marketing, branding e experiências digitais, com criação e evolução de landing pages, e-mails e materiais digitais.",
    ],
    fronts: [
      "Marketing",
      "Branding",
      "Landing Pages",
      "E-mail",
      "Materiais digitais",
      "Aquisição",
      "Conversão",
      "Análise de indicadores",
    ],
    tags: ["Marketing", "Branding", "Digital", "Landing Pages", "Conversion", "Data"],
  },
] as const;

export const trajectoryArc = {
  line: "De comunicação e design à construção de produtos digitais.",
  steps: ["Comunicação", "Design", "UX/UI", "Product Design"],
};

export const trajectoryIntro =
  "Product Designer / UX/UI Designer com experiência na concepção e evolução de produtos digitais e jornadas complexas, atuando de ponta a ponta — da identificação de problemas e oportunidades à definição, prototipação, validação e evolução de soluções.";

export const trajectoryFocus = ["Product Design", "UX/UI", "Digital Products"] as const;

export const skillGroups = [
  {
    title: "Product Design",
    items: [
      "Product Design",
      "UX/UI Design",
      "User-Centered Design",
      "Jornada do Usuário",
      "User Flows",
      "Arquitetura da Informação",
      "Prototipação",
      "Wireframes",
      "Usabilidade",
      "Discovery",
    ],
  },
  {
    title: "Research & Data",
    items: [
      "Pesquisa com usuários",
      "Testes de usabilidade",
      "Análise de comportamento",
      "Web Analytics",
      "Métricas de UX",
      "Benchmarking",
      "Análise de dados",
    ],
  },
  {
    title: "Design Systems",
    items: ["Design Systems", "Componentes", "Padrões", "Governança"],
  },
  {
    title: "Colaboração",
    items: [
      "Métodos ágeis",
      "Trabalho multidisciplinar",
      "Comunicação com stakeholders",
      "Apresentação de soluções",
      "Handoff para desenvolvimento",
      "Gestão de demandas",
    ],
  },
] as const;

export const trajectoryTools =
  "Figma · FigJam · Microsoft Clarity · Hotjar · Matomo · Adobe Creative Cloud";

export const education = [
  {
    title: "MBA em Inovação Orientada à Inteligência Artificial e Experiência do Usuário",
    school: "UNIFAST | UX Unicórnio",
    status: "Em andamento",
    current: true,
  },
  {
    title: "MBA em Gestão Estratégica de Marketing",
    school: "Universidade São Judas Tadeu",
    status: "Concluído em 2020",
    current: false,
  },
  {
    title: "Graduação Tecnológica em Design Gráfico",
    school: "Universidade Cruzeiro do Sul",
    status: "Concluído em 2018",
    current: false,
  },
  {
    title: "Técnico em Comunicação Visual",
    school: "Colégio Carlos Drummond de Andrade",
    status: "Concluído em 2016",
    current: false,
  },
];

export const certifications = [
  {
    title: "Scrum Fundamentals Certified (SFC)",
    detail: "SCRUMstudy · Fevereiro 2021",
  },
  {
    title: "Mapeamento de Processos (BPMN)",
    detail: "DNC · 8 horas · Fevereiro 2021",
  },
  {
    title: "Sprint — Planejamento e Estratégia",
    detail: "Miami Ad School · 36 horas · Maio 2020",
  },
];

export const courses = [
  {
    title: "Profissão UX/UI Designer",
    detail: "EBAC · Em andamento",
  },
  {
    title: "Design Boost",
    detail: "Comunidade de conteúdos de UX/UI Design · Em andamento",
  },
];

export const trajectorySkills = [
  "Product Design",
  "UX/UI Design",
  "UX Strategy",
  "Design Systems",
  "User Research",
  "UX Data",
  "Journey Design",
  "Prototyping",
];

export const pillars = [
  {
    index: "01",
    title: "Design de produto",
    text: "Transformo problemas de negócio e necessidades dos usuários em experiências digitais estruturadas.",
  },
  {
    index: "02",
    title: "Estratégia de UX",
    text: "Estruturo jornadas, fluxos e experiências considerando contexto, negócio e comportamento.",
  },
  {
    index: "03",
    title: "Sistemas de design",
    text: "Crio e evoluo componentes, padrões e sistemas para dar escala e consistência ao produto.",
  },
  {
    index: "04",
    title: "Inteligência de produto",
    text: "Uso dados, comportamento e sinais de usabilidade para identificar oportunidades e orientar decisões.",
  },
];

export const repertoire = [
  {
    index: "01",
    title: "Product & UX",
    tools: "Figma · FigJam · Miro · Clarity · Hotjar · Google Analytics",
  },
  {
    index: "02",
    title: "Visual & Comunicação",
    tools: "Adobe CC · Microsoft Office · Motion · Vídeo",
  },
  {
    index: "03",
    title: "AI & Creative Tech",
    tools: "Cursor · Claude Code · MCP · Gemini · ChatGPT",
    featured: true,
  },
  {
    index: "04",
    title: "Estratégia & Entrega",
    tools: "Agile · Discovery · BPMN · Gestão",
  },
];

export const process = [
  {
    index: "01",
    title: "Entendo",
    text: "Investigo contexto, usuários, negócio e restrições.",
  },
  {
    index: "02",
    title: "Estruturo",
    text: "Transformo problemas complexos em jornadas, fluxos e estruturas claras.",
  },
  {
    index: "03",
    title: "Projeto",
    text: "Desenvolvo experiências e interfaces alinhadas às necessidades do produto.",
  },
  {
    index: "04",
    title: "Valido",
    text: "Uso pesquisa, dados e feedback para iterar.",
  },
  {
    index: "05",
    title: "Escalo",
    text: "Penso além da tela: sistemas, consistência e evolução do produto.",
  },
];

export const freelanceServices = [
  {
    title: "Design de apresentações",
    text: "Estrutura, template e composição da apresentação. O valor estimado sai na calculadora.",
  },
  {
    title: "UX/UI Design",
    text: "Fluxos, interfaces e protótipos para o produto.",
  },
  {
    title: "Landing Pages & Sites",
    text: "Estrutura, experiência e interface de páginas digitais.",
  },
  {
    title: "Consultoria UX",
    text: "Leitura da experiência, problemas encontrados e recomendações.",
  },
];

export const nav = [
  { href: "/#inicio", id: "inicio", label: "Início" },
  { href: "/#sobre", id: "sobre", label: "Sobre mim" },
  { href: "/#projetos", id: "projetos", label: "Projetos" },
  { href: "/#trajetoria", id: "trajetoria", label: "Trajetória" },
  { href: "/#freelas", id: "freelas", label: "Freelas" },
  { href: "/#contato", id: "contato", label: "Contato" },
];
