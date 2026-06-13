import { createFileRoute } from "@tanstack/react-router";
import { SeoLandingPage } from "@/components/SeoLandingPage";
import { seoLandingContent, site } from "@/lib/enterprise-content";

const content = seoLandingContent.lng;

export const Route = createFileRoute("/industries/lng")({
  head: () => ({
    meta: [
      { title: `${content.title} | Nexora Energy Solutions` },
      { name: "description", content: content.description },
      { property: "og:title", content: content.title },
      { property: "og:description", content: content.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${site.url}/industries/lng` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${site.url}/industries/lng` }],
  }),
  component: () => <SeoLandingPage slug="lng" />,
});
