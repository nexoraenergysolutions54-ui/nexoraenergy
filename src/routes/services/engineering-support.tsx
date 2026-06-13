import { createFileRoute } from "@tanstack/react-router";
import { SeoLandingPage } from "@/components/SeoLandingPage";
import { seoLandingContent, site } from "@/lib/enterprise-content";

const content = seoLandingContent["engineering-support"];

export const Route = createFileRoute("/services/engineering-support")({
  head: () => ({
    meta: [
      { title: `${content.title} | Nexora Energy Solutions` },
      { name: "description", content: content.description },
      { property: "og:title", content: content.title },
      { property: "og:description", content: content.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${site.url}/services/engineering-support` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${site.url}/services/engineering-support` }],
  }),
  component: () => <SeoLandingPage slug="engineering-support" />,
});
