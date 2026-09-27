import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Geist } from "next/font/google";
import { Motion } from "@/components/Motion";
import { site } from "@/lib/content";
import "./globals.css";

const sans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Nayara Ormalezi — Product Designer",
    template: "%s — Nayara Ormalezi",
  },
  description:
    "Product Designer na CAIXA Consórcio. Portfólio, trajetória e projetos freelance em produtos digitais, UX/UI e sistemas de design.",
  authors: [{ name: site.name }],
  openGraph: {
    title: "Nayara Ormalezi — Product Designer",
    description:
      "Portfólio de design de produto, trajetória profissional e projetos freelance.",
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  worksFor: {
    "@type": "Organization",
    name: "CAIXA Consórcio",
  },
  sameAs: [site.linkedin],
  knowsAbout: [
    "Design de produto",
    "Estratégia de UX",
    "Sistemas de design",
    "Inteligência de produto",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR" className={sans.variable}>
      <body>
        <Motion />
        <a className="skip" href="#main">
          Ir para o conteúdo
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
