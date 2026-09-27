export type Deadline = "3" | "5";
export type TemplateChoice = "ready" | "new";
export type ContentChoice = "ppt" | "other" | "structure";
export type AnimationChoice = "no" | "yes";

export type QuoteInput = {
  slides: number;
  deadline: Deadline;
  template: TemplateChoice;
  content: ContentChoice;
  animation: AnimationChoice;
  note: string;
};

export type QuoteLine = {
  label: string;
  detail?: string;
  amount: number;
};

export type Quote = {
  slides: number;
  rate: number;
  tier: string;
  lines: QuoteLine[];
  total: number;
};

const currency = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
});

export function formatBRL(value: number) {
  return currency.format(value).replace(/\u00a0/g, " ");
}

export function slideRate(slides: number) {
  if (slides <= 10) return 35;
  if (slides <= 50) return 33;
  if (slides <= 100) return 30;
  return 28;
}

export function tierLabel(slides: number) {
  if (slides <= 10) return "Até 10 slides";
  if (slides <= 50) return "11–50 slides";
  if (slides <= 100) return "51–100 slides";
  return "Acima de 100 slides";
}

const deadlineLabel: Record<Deadline, string> = {
  "3": "3 dias úteis",
  "5": "5 dias úteis",
};

const templateLabel: Record<TemplateChoice, string> = {
  ready: "Template pronto",
  new: "Novo template",
};

const contentLabel: Record<ContentChoice, string> = {
  ppt: "PPT pronto",
  other: "Conteúdo em outros formatos",
  structure: "Estruturação do conteúdo",
};

const animationLabel: Record<AnimationChoice, string> = {
  no: "Não",
  yes: "Sim",
};

export function buildQuote(input: QuoteInput): Quote {
  const slides = Number.isFinite(input.slides) ? Math.max(0, Math.floor(input.slides)) : 0;
  const rate = slides > 0 ? slideRate(slides) : 0;
  const slidesTotal = slides * rate;
  const template = input.template === "new" ? 650 : 0;
  const content =
    input.content === "other" ? slides * 5 : input.content === "structure" ? 650 : 0;
  const animation = input.animation === "yes" ? slides * 3 : 0;
  const rush = input.deadline === "3" ? slides * 7 : 0;

  const lines: QuoteLine[] = [
    {
      label: `${slides} ${slides === 1 ? "slide" : "slides"} × ${formatBRL(rate)}`,
      detail: tierLabel(slides),
      amount: slidesTotal,
    },
  ];

  if (rush > 0) {
    lines.push({
      label: "Prazo de 3 dias úteis",
      detail: `${slides} × ${formatBRL(7)}`,
      amount: rush,
    });
  }
  if (template > 0) {
    lines.push({ label: "Novo template", amount: template });
  }
  if (input.content === "other" && content > 0) {
    lines.push({
      label: "Conteúdo em outros formatos",
      detail: `${slides} × ${formatBRL(5)}`,
      amount: content,
    });
  }
  if (input.content === "structure") {
    lines.push({ label: "Estruturação do conteúdo", amount: content });
  }
  if (animation > 0) {
    lines.push({
      label: "Animação",
      detail: `${slides} × ${formatBRL(3)}`,
      amount: animation,
    });
  }

  return {
    slides,
    rate,
    tier: tierLabel(slides),
    lines,
    total: slidesTotal + rush + template + content + animation,
  };
}

export function quoteMessage(input: QuoteInput, total: number) {
  const lines = [
    "Olá, Nayara! Gostaria de conversar sobre um projeto de apresentação.",
    "",
    `Quantidade: ${input.slides} ${input.slides === 1 ? "slide" : "slides"}`,
    `Prazo: ${deadlineLabel[input.deadline]}`,
    `Template: ${templateLabel[input.template]}`,
    `Conteúdo: ${contentLabel[input.content]}`,
    `Animação: ${animationLabel[input.animation]}`,
    `Orçamento estimado: ${formatBRL(total)}`,
  ];

  const note = input.note.trim();
  if (note) {
    lines.push("", "Mensagem adicional:", note);
  }

  lines.push("", "Gostaria de entender os próximos passos.");
  return lines.join("\n");
}

export function whatsappHref(number: string, message: string) {
  const digits = number.replace(/\D/g, "");
  const text = encodeURIComponent(message);
  return digits ? `https://wa.me/${digits}?text=${text}` : `https://wa.me/?text=${text}`;
}
