import {
  industryCards,
  markets,
  primaryServices,
  seoLandingContent,
  site,
} from "./enterprise-content";
import {
  breadcrumbSchema,
  itemListSchema,
  organizationSchema,
  serviceSchema,
  webPageSchema,
  websiteSchema,
} from "./schema";

export type SeoRoutePath =
  | "/"
  | "/about"
  | "/careers"
  | "/contact"
  | "/hse"
  | "/industrial-services"
  | "/industries"
  | "/industries/epc"
  | "/industries/infrastructure"
  | "/industries/lng"
  | "/industries/manufacturing"
  | "/industries/oil-and-gas"
  | "/industries/petrochemical"
  | "/manpower"
  | "/news"
  | "/partners"
  | "/products"
  | "/services"
  | "/services/engineering-support"
  | "/services/maintenance-support"
  | "/services/manpower-supply"
  | "/services/procurement-support"
  | "/services/project-support"
  | "/services/shutdown-support";

type SeoPage = {
  title: string;
  description: string;
  keywords: string[];
  ogTitle?: string;
  type?: "website" | "article";
};

const marketKeywords = [
  "Qatar technical manpower",
  "GCC industrial services",
  "Doha energy services",
  "EPC contractor support",
  ...markets,
];

export const seoPages: Record<SeoRoutePath, SeoPage> = {
  "/": {
    title: "Nexora Energy Solutions | Technical Manpower & Industrial Support in Qatar",
    description:
      "Nexora Energy Solutions is a Qatar-based technical manpower and industrial support provider serving Qatar, Saudi Arabia and Kuwait.",
    ogTitle: "Nexora Energy Solutions",
    keywords: [
      "Nexora Energy Solutions",
      "technical manpower Qatar",
      "industrial services Qatar",
      "technical staffing Saudi Arabia",
      "technical manpower Kuwait",
      "energy and industrial support",
    ],
  },
  "/about": {
    title: "About NEXORA Energy Solutions | Qatar",
    description:
      "Learn about NEXORA Energy Solutions, a Qatar-based provider of technical manpower, industrial services and procurement support focused on Qatar, Saudi Arabia and Kuwait.",
    ogTitle: "About NEXORA Energy Solutions",
    keywords: ["about Nexora", "Qatar manpower company", "Doha industrial services"],
  },
  "/careers": {
    title: "Careers at Nexora Energy Solutions | Energy Jobs in Qatar and GCC",
    description:
      "Explore engineering, technical trades, HSE, procurement and management careers with Nexora Energy Solutions across Qatar and GCC industrial projects.",
    ogTitle: "Careers at Nexora Energy Solutions",
    keywords: ["energy jobs Qatar", "engineering jobs GCC", "Nexora careers"],
  },
  "/contact": {
    title: "Contact NEXORA Energy Solutions | Qatar",
    description:
      "Contact NEXORA in Doha regarding technical manpower, industrial services and products and procurement requirements.",
    ogTitle: "Contact NEXORA Energy Solutions",
    keywords: [
      "contact Nexora Energy Solutions",
      "technical manpower enquiry Qatar",
      "industrial services enquiry Qatar",
      "industrial procurement enquiry Qatar",
    ],
  },
  "/hse": {
    title: "HSE Standards | Nexora Energy Solutions",
    description:
      "Nexora embeds health, safety, environmental and quality standards across manpower deployments, industrial services and GCC project support.",
    ogTitle: "HSE Standards at Nexora",
    keywords: ["HSE Qatar", "industrial safety GCC", "QHSE energy projects"],
  },
  "/industrial-services": {
    title: "Industrial Services in Qatar | Nexora Energy Solutions",
    description:
      "Industrial maintenance, engineering and site-support services coordinated from Qatar for project requirements in Qatar, Saudi Arabia and Kuwait.",
    ogTitle: "Industrial Services - Nexora Energy Solutions",
    keywords: [
      "industrial services Qatar",
      "industrial maintenance support Qatar",
      "shutdown and turnaround support",
      "mechanical and piping support",
      "electrical and instrumentation support",
      "industrial project support Saudi Arabia",
      "industrial services Kuwait",
      "engineering support services Qatar",
    ],
  },
  "/industries": {
    title: "Industries We Support | Nexora Energy Solutions Qatar",
    description:
      "Explore the energy and industrial sectors supported by Nexora through technical manpower, industrial services and procurement coordination from Qatar.",
    ogTitle: "Industries We Support - Nexora Energy Solutions",
    keywords: ["oil and gas manpower Qatar", "LNG manpower Qatar", "EPC support Qatar"],
  },
  "/manpower": {
    title: "Technical Manpower Services in Qatar | Nexora Energy Solutions",
    description:
      "Technical manpower support for industrial projects in Qatar, Saudi Arabia and Kuwait, including skilled trades, technicians, supervisors and project-support personnel.",
    ogTitle: "Technical Manpower Services - Nexora Energy Solutions",
    keywords: [
      "technical manpower Qatar",
      "industrial manpower Qatar",
      "skilled technical workforce Qatar",
      "technical staffing Saudi Arabia",
      "technical manpower supply Kuwait",
      "shutdown and turnaround manpower",
      "mechanical manpower",
      "electrical and instrumentation manpower",
      "HSE and QA/QC personnel",
    ],
  },
  "/news": {
    title: "Industrial Planning Insights | Nexora Energy Solutions",
    description:
      "Practical planning notes on technical manpower, industrial services, documentation and procurement support for industrial project teams.",
    ogTitle: "Nexora News and Insights",
    keywords: ["Nexora news", "industrial insights Qatar", "energy manpower updates"],
  },
  "/partners": {
    title: "Partners | Nexora Energy Solutions",
    description:
      "Partner with Nexora Energy Solutions for GCC energy operations, EPC delivery, OEM supply, manpower sourcing, training and logistics support.",
    ogTitle: "Partners - Nexora Energy Solutions",
    keywords: ["energy partners Qatar", "EPC partnership GCC", "industrial supplier network"],
  },
  "/products": {
    title: "Industrial Products & Procurement in Qatar | Nexora Energy Solutions",
    description:
      "Project-focused sourcing enquiries for industrial valves, instrumentation and electrical products from Qatar, with support focused on Qatar, Saudi Arabia and Kuwait.",
    ogTitle: "Industrial Products & Procurement - Nexora Energy Solutions",
    keywords: [
      "industrial products Qatar",
      "industrial procurement Qatar",
      "industrial valves Qatar",
      "instrumentation suppliers Qatar",
      "electrical products Qatar",
      "industrial supply Saudi Arabia",
      "industrial procurement Kuwait",
      "valve and instrumentation sourcing",
    ],
  },
  "/services": {
    title: "Energy and Industrial Services | Nexora Energy Solutions",
    description:
      "Integrated engineering, industrial services, procurement, maintenance, infrastructure delivery and operational support for Qatar and GCC energy sectors.",
    ogTitle: "Nexora Energy Services",
    keywords: ["energy services Qatar", "industrial services GCC", "engineering support Qatar"],
  },
  "/industries/epc": {
    title: `${seoLandingContent.epc.title} | Nexora Energy Solutions`,
    description: seoLandingContent.epc.description,
    keywords: ["EPC contractor manpower", "EPC project support GCC", "EPC staffing Qatar"],
  },
  "/industries/infrastructure": {
    title: `${seoLandingContent.infrastructure.title} | Nexora Energy Solutions`,
    description: seoLandingContent.infrastructure.description,
    keywords: ["industrial infrastructure manpower", "pipeline manpower GCC", "utilities projects"],
  },
  "/industries/lng": {
    title: `${seoLandingContent.lng.title} | Nexora Energy Solutions`,
    description: seoLandingContent.lng.description,
    keywords: ["LNG facility manpower", "Qatar LNG support", "LNG maintenance manpower"],
  },
  "/industries/manufacturing": {
    title: `${seoLandingContent.manufacturing.title} | Nexora Energy Solutions`,
    description: seoLandingContent.manufacturing.description,
    keywords: ["manufacturing maintenance manpower", "industrial facility support"],
  },
  "/industries/oil-and-gas": {
    title: `${seoLandingContent["oil-and-gas"].title} | Nexora Energy Solutions`,
    description: seoLandingContent["oil-and-gas"].description,
    keywords: ["oil and gas manpower Qatar", "refinery manpower GCC", "downstream support"],
  },
  "/industries/petrochemical": {
    title: `${seoLandingContent.petrochemical.title} | Nexora Energy Solutions`,
    description: seoLandingContent.petrochemical.description,
    keywords: ["petrochemical manpower", "process plant support", "brownfield support GCC"],
  },
  "/services/engineering-support": {
    title: `${seoLandingContent["engineering-support"].title} | Nexora Energy Solutions`,
    description: seoLandingContent["engineering-support"].description,
    keywords: ["engineering support Qatar", "inspection support", "technical documentation"],
  },
  "/services/maintenance-support": {
    title: `${seoLandingContent["maintenance-support"].title} | Nexora Energy Solutions`,
    description: seoLandingContent["maintenance-support"].description,
    keywords: ["industrial maintenance Qatar", "preventive maintenance support"],
  },
  "/services/manpower-supply": {
    title: `${seoLandingContent["manpower-supply"].title} | Nexora Energy Solutions`,
    description: seoLandingContent["manpower-supply"].description,
    keywords: ["technical manpower supply", "energy manpower Qatar", "skilled trades GCC"],
  },
  "/services/procurement-support": {
    title: `${seoLandingContent["procurement-support"].title} | Nexora Energy Solutions`,
    description: seoLandingContent["procurement-support"].description,
    keywords: ["industrial procurement support", "materials supply Qatar", "vendor coordination"],
  },
  "/services/project-support": {
    title: `${seoLandingContent["project-support"].title} | Nexora Energy Solutions`,
    description: seoLandingContent["project-support"].description,
    keywords: ["industrial project support", "document control support", "QA QC manpower"],
  },
  "/services/shutdown-support": {
    title: `${seoLandingContent["shutdown-support"].title} | Nexora Energy Solutions`,
    description: seoLandingContent["shutdown-support"].description,
    keywords: ["shutdown support Qatar", "turnaround manpower", "plant shutdown crews"],
  },
};

export function canonicalUrl(path: SeoRoutePath) {
  return path === "/" ? site.url : `${site.url}${path}`;
}

export function seoHead(path: SeoRoutePath) {
  const page = seoPages[path];
  const canonical = canonicalUrl(path);
  const keywords = [...new Set([...page.keywords, ...marketKeywords])].join(", ");
  const image = `${site.url}/og-nexora-energy.jpg`;
  const title = page.title;
  const ogTitle = page.ogTitle ?? title;

  return {
    meta: [
      { title },
      { name: "description", content: page.description },
      { name: "keywords", content: keywords },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { name: "author", content: site.name },
      { name: "geo.region", content: "QA" },
      { name: "geo.placename", content: "Doha, Qatar" },
      { property: "og:site_name", content: site.name },
      { property: "og:title", content: ogTitle },
      { property: "og:description", content: page.description },
      { property: "og:type", content: page.type ?? "website" },
      { property: "og:url", content: canonical },
      { property: "og:image", content: image },
      { property: "og:image:secure_url", content: image },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Nexora Energy Solutions industrial project support" },
      { property: "og:locale", content: "en_QA" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: ogTitle },
      { name: "twitter:description", content: page.description },
      { name: "twitter:image", content: image },
    ],
    links: [],
  };
}

function pathToBreadcrumbs(path: SeoRoutePath) {
  if (path === "/") {
    return [{ name: "Home", url: "/" }];
  }

  const parts = path.split("/").filter(Boolean);
  const crumbs = [{ name: "Home", url: "/" }];

  parts.forEach((part, index) => {
    const url = `/${parts.slice(0, index + 1).join("/")}` as SeoRoutePath;
    const page = seoPages[url];
    const fallbackName = part
      .split("-")
      .map((word) => word[0]?.toUpperCase() + word.slice(1))
      .join(" ");
    crumbs.push({
      name: page?.ogTitle?.replace(" - Nexora Energy Solutions", "") ?? fallbackName,
      url,
    });
  });

  return crumbs;
}

export function structuredDataForPath(pathname: string) {
  const normalized = (pathname.replace(/\/+$/, "") || "/") as SeoRoutePath;
  const page = seoPages[normalized];

  if (!page) {
    return [organizationSchema(), websiteSchema()];
  }

  const data: unknown[] = [
    organizationSchema(),
    websiteSchema(),
    webPageSchema({
      name: page.title,
      description: page.description,
      url: normalized,
      keywords: page.keywords,
    }),
    breadcrumbSchema(pathToBreadcrumbs(normalized)),
  ];

  if (normalized === "/services") {
    data.push(
      itemListSchema(
        "Nexora Energy Solutions services",
        primaryServices.map((service) => service.title),
        normalized,
      ),
    );
  }

  if (normalized === "/industries") {
    data.push(
      itemListSchema(
        "Nexora Energy Solutions industries",
        industryCards.map((industry) => industry.title),
        normalized,
      ),
    );
  }

  if (normalized.startsWith("/services/")) {
    data.push(serviceSchema(page.ogTitle ?? page.title, page.description, normalized));
  }

  return data;
}
