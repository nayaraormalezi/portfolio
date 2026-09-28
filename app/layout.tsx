import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Geist } from "next/font/google";
import { Motion } from "@/components/Motion";
import { shareImage, siteUrl } from "@/lib/seo";
import "./globals.css";

const sans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nayara Ormalezi | Product Designer · UX/UI Designer",
    template: "%s | Nayara Ormalezi",
  },
  description:
    "Product Designer em São Paulo, com experiência em UX/UI, produtos digitais, Design Systems e jornadas complexas. Conheça meus projetos, trajetória e serviços de design.",
  applicationName: "Nayara Ormalezi",
  authors: [{ name: "Nayara Ormalezi", url: siteUrl }],
  creator: "Nayara Ormalezi",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Nayara Ormalezi",
    images: [{ url: shareImage.url, alt: shareImage.alt, width: shareImage.width, height: shareImage.height }],
  },
  twitter: {
    card: "summary_large_image",
    images: [shareImage.url],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
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
        {children}
      </body>
    </html>
  );
}
