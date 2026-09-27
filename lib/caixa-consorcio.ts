import type { CaseNarrative } from "@/lib/cases";

const hero = {
  type: "image" as const,
  src: "/caixa-consorcio.jpg",
  alt: "Notebook mostrando a página inicial do site da CAIXA Consórcio, com a mensagem Somos líderes em contemplação imobiliária.",
  ratio: "3 / 2",
};

export const caixaConsorcio: CaseNarrative = {
  kind: "site",
  hero,
  cover: hero,
  headline: "Um site para explicar melhor um produto complexo.",
  facts: [
    { label: "Cliente", value: "CAIXA Consórcio" },
    { label: "Projeto", value: "Site institucional e comercial" },
    { label: "Atuação", value: "UX/UI Design · Arquitetura de informação · Componentes · Conteúdo" },
    { label: "Modelo de trabalho", value: "Parceria com agência" },
    { label: "Meu papel", value: "Evolução contínua da experiência digital" },
  ],
  intro:
    "Em parceria com uma agência, atuei na evolução da experiência do site da CAIXA Consórcio, trabalhando na organização das informações, definição de componentes e distribuição de conteúdo para tornar a jornada mais clara, educativa e consistente.",
  chapters: [
    {
      id: "contexto",
      nav: "Contexto",
      title: "O contexto",
      paragraphs: [
        "O site da CAIXA Consórcio passou por um processo contínuo de evolução da experiência digital, com o objetivo de tornar a jornada mais clara e educativa diante da complexidade do produto.",
        "O site anterior apresentava gargalos de experiência e inconsistências na forma como as informações eram organizadas e apresentadas. Para um produto como consórcio, em que o usuário precisa compreender conceitos, regras, modalidades e diferentes etapas da jornada antes de tomar uma decisão, essa falta de clareza tornava a experiência ainda mais complexa.",
        "O desafio, portanto, não era apenas tornar o site visualmente melhor.",
        "Era organizar a informação para ajudar o usuário a entender o produto.",
      ],
    },
    {
      id: "papel",
      nav: "Meu papel",
      title: "Meu papel",
      paragraphs: [
        "Em parceria com a agência responsável pelo projeto, atuei na evolução da experiência do site, principalmente em três frentes:",
      ],
      items: [
        {
          title: "Arquitetura e distribuição de conteúdo",
          text: "Analisei quais informações eram necessárias para cada contexto da jornada e como distribuí-las ao longo das páginas, buscando evitar excesso, ausência ou repetição de conteúdo.",
        },
        {
          title: "Componentização e interface",
          text: "Participei da definição e criação de componentes, pensando não apenas na consistência visual, mas também em como esses elementos poderiam estruturar e facilitar a compreensão das informações.",
        },
        {
          title: "Evolução contínua da experiência",
          text: "A atuação não se limitou ao lançamento de uma nova interface. O site passou a ser tratado como um produto em evolução, com aprimoramentos constantes de usabilidade, organização das informações e experiência visual.",
        },
      ],
    },
    {
      id: "desafio",
      nav: "Desafio",
      title: "Como explicar um produto complexo sem tornar a experiência complexa?",
      tone: "emphasis",
      paragraphs: [
        "Essa foi uma das principais questões que orientaram meu trabalho.",
        "Em vez de simplesmente concentrar todas as informações disponíveis no site, o trabalho envolveu entender:",
      ],
      points: [
        "O que o usuário precisa saber?",
        "Em qual momento ele precisa dessa informação?",
        "Onde essa informação deve aparecer?",
        "Como podemos explicar sem sobrecarregar?",
        "Quais conteúdos precisam ser aprofundados e quais podem ser apresentados de forma mais objetiva?",
        "Como manter consistência entre diferentes páginas e jornadas?",
      ],
      closing:
        "A partir dessas perguntas, a experiência foi sendo reorganizada para que o site tivesse um papel mais informativo e educativo, além de comercial.",
    },
    {
      id: "experiencia",
      nav: "Experiência",
      title: "Da informação à experiência",
      paragraphs: [
        "Um dos principais focos do projeto foi transformar conteúdo em uma experiência mais fácil de navegar e compreender.",
        "Isso significou trabalhar a relação entre conteúdo, hierarquia, componentes e contexto, buscando criar uma estrutura em que a informação certa estivesse disponível no momento adequado.",
        "O trabalho de UX e UI acontecia, portanto, de forma integrada: a interface não era apenas uma camada visual, mas uma ferramenta para organizar, explicar e orientar.",
      ],
    },
    {
      id: "evolucao",
      nav: "Evolução",
      title: "Um produto em evolução",
      tone: "soft",
      paragraphs: [
        "Mais do que um projeto pontual de redesign, o site passou a ser encarado como uma experiência que precisa evoluir continuamente.",
        "Novos conteúdos, necessidades de negócio, jornadas e aprendizados geram oportunidades de aprimoramento constante — tanto na usabilidade quanto na experiência visual.",
        "Meu trabalho está justamente nesse processo de evolução: entender o que pode ser melhorado, reorganizar quando necessário e tornar a experiência cada vez mais clara, consistente e útil para o usuário.",
      ],
    },
    {
      id: "resultado",
      nav: "Resultado",
      title: "Resultado",
      tone: "emphasis",
      paragraphs: [
        "O trabalho contribuiu para a construção de uma experiência digital mais organizada, consistente e orientada à compreensão do produto, aproximando conteúdo, interface e necessidades do usuário.",
        "Mais do que apresentar o consórcio, o site passou a assumir um papel importante na educação do usuário ao longo da jornada, ajudando a transformar um produto naturalmente complexo em uma experiência digital mais compreensível.",
      ],
    },
  ],
};
