import type { Metadata } from "next";

import { siteConfig } from "@/lib/constants";

export const seoConfig = {
  siteName: siteConfig.name,
  siteUrl: siteConfig.url,
  defaultTitle: "Takoah — Tacos, Tequila & Golden Hour in El Paredón",
  defaultDescription:
    "Takoah is a taco and tequila restaurant in Playa El Paredón, Guatemala, built for golden-hour dinners, warm lights, and memorable beach evenings.",
  keywords: [
    "Takoah",
    "Takoah El Paredón",
    "El Paredón tacos",
    "El Paredón restaurant",
    "Playa El Paredón Guatemala",
    "tacos Guatemala",
    "tequila El Paredón",
    "beach restaurant Guatemala",
    "where to eat El Paredón",
  ],
  locale: "en_US",
  ogImage: "/opengraph-image",
  instagram: "https://www.instagram.com/takoahparedon/",
  whatsapp: "https://wa.me/50271131675",
  googleMaps: "https://www.google.com/maps/search/?api=1&query=Takoah%20El%20Paredon%20Guatemala",
} as const;

export function createPageMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `${seoConfig.siteUrl}${path}`;

  return {
    title,
    description,
    keywords: [...seoConfig.keywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} — ${seoConfig.siteName}`,
      description,
      url,
      siteName: seoConfig.siteName,
      locale: seoConfig.locale,
      type: "website",
      images: [
        {
          url: seoConfig.ogImage,
          width: 1200,
          height: 630,
          alt: "Takoah in Playa El Paredón, Guatemala",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${seoConfig.siteName}`,
      description,
      images: [seoConfig.ogImage],
    },
  };
}
