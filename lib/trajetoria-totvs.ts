import type { CaseNarrative } from "@/lib/cases";

export const trajetoriaTotvs: CaseNarrative = {
  kind: "uxui",
  hero: {
    type: "image",
    src: "/trajetoria-totvs.jpg",
    alt: "Tela inicial da Trajetória TOTVS, com a escolha entre jogar ou apenas ler a história da empresa.",
    ratio: "3 / 2",
  },
  cover: {
    type: "image",
    src: "/trajetoria-totvs.jpg",
    alt: "Tela inicial da Trajetória TOTVS, com a escolha entre jogar ou apenas ler a história da empresa.",
    ratio: "3 / 2",
  },
  headline: "Transformando a história da TOTVS em uma experiência digital interativa.",
  signals: ["História", "Tecnologia", "Interação", "Gamificação"],
  facts: [
    { label: "Cliente", value: "TOTVS" },
    { label: "Projeto", value: "Trajetória TOTVS" },
    { label: "Área", value: "UX/UI Design" },
    { label: "Atuação", value: "Idealização · UI/UX · Prototipação de jogos" },
  ],
  intro:
    "A Trajetória TOTVS transforma a memória corporativa da empresa em uma experiência digital interativa, convidando colaboradores e visitantes a explorar sua história de uma maneira mais envolvente.",
  site: {
    label: "trajetoria.totvs.com",
    href: "https://trajetoria.totvs.com/",
  },
  chapters: [
    {
      id: "contexto",
      nav: "Contexto",
      title: "Uma história para ser explorada",
      paragraphs: [
        "A Trajetória da TOTVS foi criada para preservar e celebrar a memória corporativa da empresa, transformando sua história em uma experiência digital interativa e acessível.",
        "O projeto buscou transformar a história da empresa em uma experiência digital que fosse mais do que uma simples linha do tempo ou página institucional.",
        "A proposta foi criar uma maneira mais envolvente de explorar a trajetória da TOTVS.",
      ],
    },
    {
      id: "desafio",
      title: "Como transformar história em experiência?",
      tone: "emphasis",
      paragraphs: [
        "A proposta era criar uma experiência digital capaz de apresentar a trajetória da TOTVS de forma mais interativa, atrativa e intuitiva.",
      ],
      bridge: {
        from: ["História", "Conteúdo", "Interação"],
        to: "Experiência digital",
      },
    },
    {
      id: "conceito",
      title: "Uma história para viver, não apenas ler.",
      tone: "soft",
      paragraphs: [
        "A proposta foi desenvolvida com um conceito gamificado e dinâmico, tornando a experiência de explorar a história da TOTVS mais interativa e atrativa.",
      ],
    },
    {
      id: "experiencia",
      nav: "Experiência",
      title: "Explorar a história",
      paragraphs: [
        "Uma interface criada para tornar a exploração da história mais dinâmica.",
        "Conteúdo histórico apresentado dentro de uma experiência digital interativa.",
      ],
    },
    {
      id: "gamificacao",
      nav: "Gamificação",
      title: "Transformando conteúdo em interação",
      paragraphs: [
        "Além do design da interface, trabalhei na prototipação dos jogos, garantindo que cada elemento visual e funcional estivesse alinhado à identidade da marca e proporcionasse uma navegação fluida e intuitiva.",
      ],
      flow: ["Conceito", "Protótipo", "Interação", "Experiência"],
    },
    {
      id: "prototipos",
      title: "Prototipando a interação",
      tone: "soft",
      items: [
        { title: "Jogo / Experiência interativa 01" },
        { title: "Jogo / Experiência interativa 02" },
      ],
    },
    {
      id: "papel",
      nav: "Meu papel",
      title: "Meu papel",
      paragraphs: [
        "Participei ativamente da idealização do site, contribuindo para a construção da experiência desde a concepção inicial até a implementação final.",
      ],
      items: [
        {
          title: "Idealização",
          text: "Participação na concepção da experiência digital.",
        },
        {
          title: "UX/UI",
          text: "Desenvolvimento da experiência e da interface do site.",
        },
        {
          title: "Prototipação",
          text: "Prototipação dos jogos e elementos interativos.",
        },
        {
          title: "Experiência",
          text: "Construção de uma navegação fluida e intuitiva.",
        },
        {
          title: "Identidade",
          text: "Alinhamento dos elementos visuais à identidade da TOTVS.",
        },
      ],
    },
    {
      id: "interface",
      title: "Uma experiência alinhada à marca",
      paragraphs: [
        "Cada elemento visual e funcional foi pensado para manter a experiência alinhada à identidade da TOTVS, enquanto contribuía para uma navegação fluida e intuitiva.",
      ],
    },
    {
      id: "experiencia-final",
      title: "Uma nova forma de explorar a história da TOTVS.",
      tone: "statement",
    },
    {
      id: "resultado",
      nav: "Resultado",
      title: "O resultado",
      tone: "emphasis",
      paragraphs: [
        "O resultado foi uma plataforma que não apenas conta a história da empresa, mas também convida colaboradores e visitantes a interagir e se conectar com a trajetória da TOTVS de uma forma inovadora e imersiva.",
      ],
      points: [
        "Experiência digital interativa",
        "Exploração da história",
        "Maior envolvimento com o conteúdo",
        "Conexão com a trajetória da empresa",
      ],
    },
    {
      id: "contribuicao",
      title: "Minha contribuição neste projeto",
      chips: ["Idealização", "UX/UI", "Prototipação", "Gamificação", "Experiência digital"],
    },
    {
      id: "aprendizado",
      title: "O que este projeto representou",
      paragraphs: [
        "Este projeto ampliou minha experiência na criação de experiências digitais que combinam conteúdo, narrativa, interface e interação. Trabalhar com a história de uma marca exigiu transformar informação em uma experiência que convidasse o usuário a explorar.",
      ],
    },
  ],
};
