import { site } from "./enterprise-content";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: site.name,
    legalName: site.legalName,
    description:
      "Doha-based technical manpower, industrial services, procurement support and project coordination company serving Qatar and GCC energy markets.",
    url: site.url,
    logo: `${site.url}/og-nexora-energy.svg`,
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressLocality: site.city,
      addressCountry: site.country,
    },
    openingHours: "Su-Th 08:00-17:00",
    areaServed: ["Qatar", "Saudi Arabia", "United Arab Emirates", "Kuwait", "Bahrain", "Oman"],
    knowsAbout: [
      "Technical manpower supply",
      "Industrial services",
      "Shutdown support",
      "Maintenance support",
      "Procurement support",
      "EPC contractor support",
      "LNG facility support",
      "Oil and gas projects",
      "Petrochemical plants",
    ],
    sameAs: ["https://www.linkedin.com/company/nexora-energy-solutions"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: site.phone,
        contactType: "sales",
        areaServed: "GCC",
        availableLanguage: ["English", "Arabic"],
      },
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    about: [
      "Technical manpower supply",
      "Industrial services",
      "Procurement support",
      "Shutdown support",
      "GCC energy projects",
    ],
  };
}

export function serviceSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    areaServed: ["Qatar", "Saudi Arabia", "UAE", "Kuwait", "Bahrain", "Oman"],
    serviceArea: {
      "@type": "AdministrativeArea",
      name: "Gulf Cooperation Council",
    },
    audience: [
      {
        "@type": "BusinessAudience",
        name: "Energy operators, EPC contractors, procurement teams and industrial facilities",
      },
    ],
    serviceType: [
      "Technical manpower supply",
      "Industrial services",
      "Shutdown support",
      "Maintenance support",
      "Procurement support",
      "Project support",
    ],
    url: `${site.url}${url}`,
  };
}

export function webPageSchema({
  name,
  description,
  url,
  keywords = [],
}: {
  name: string;
  description: string;
  url: string;
  keywords?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: `${site.url}${url}`,
    isPartOf: {
      "@type": "WebSite",
      name: site.name,
      url: site.url,
    },
    about: [
      "Technical manpower supply",
      "Industrial services",
      "GCC energy projects",
      "EPC contractor support",
      "Qatar industrial project coordination",
    ],
    mentions: keywords,
    primaryImageOfPage: {
      "@type": "ImageObject",
      caption: `${site.name} industrial project support`,
    },
  };
}

export function itemListSchema(name: string, items: string[], url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    url: `${site.url}${url}`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item,
    })),
  };
}

export function breadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.url}`,
    })),
  };
}

export function faqSchema(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
