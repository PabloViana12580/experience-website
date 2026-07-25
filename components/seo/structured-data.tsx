import { seoConfig } from "@/lib/seo";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${seoConfig.siteUrl}/#restaurant`,
    name: "Takoah",
    description: seoConfig.defaultDescription,
    url: seoConfig.siteUrl,
    image: `${seoConfig.siteUrl}${seoConfig.ogImage}`,
    servesCuisine: ["Tacos", "Guatemalan", "Mexican-inspired", "Tequila drinks"],
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Playa El Paredón",
      addressCountry: "GT",
    },
    areaServed: "Playa El Paredón, Guatemala",
    hasMap: seoConfig.googleMaps,
    sameAs: [seoConfig.instagram],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: seoConfig.whatsapp,
      availableLanguage: ["English", "Spanish"],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${seoConfig.siteUrl}/#website`,
    name: seoConfig.siteName,
    url: seoConfig.siteUrl,
    description: seoConfig.defaultDescription,
    publisher: {
      "@id": `${seoConfig.siteUrl}/#restaurant`,
    },
  },
] as const;

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}
