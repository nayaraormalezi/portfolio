import type { Metadata } from "next";

export const siteUrl = "https://nayaraormalezi.com.br";

const siteName = "Nayara Ormalezi";

export const shareImage = {
  url: "/og.jpg",
  alt: "Nayara Ormalezi, Product Designer e UX/UI Designer",
  width: 1024,
  height: 535,
};

type PageMeta = {
  title: string;
  description: string;
  path: string;
  absolute?: boolean;
  ogDescription?: string;
  image?: { url: string; alt: string };
};

export function pageMetadata({
  title,
  description,
  path,
  absolute = false,
  ogDescription,
  image,
}: PageMeta): Metadata {
  const socialTitle = absolute ? title : `${title} | ${siteName}`;
  const socialDescription = ogDescription ?? description;
  const socialImage = image
    ? { url: image.url, alt: image.alt }
    : { url: shareImage.url, alt: shareImage.alt, width: shareImage.width, height: shareImage.height };

  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName,
      title: socialTitle,
      description: socialDescription,
      url: path,
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: socialDescription,
      images: [socialImage.url],
    },
  };
}
