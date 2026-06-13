import { createFileRoute } from "@tanstack/react-router";
import { SeoLandingPage } from "@/components/SeoLandingPage";
import { seoLandingContent, site } from "@/lib/enterprise-content";

const content = seoLandingContent["shutdown-support"];

export const Route = createFileRoute("/services/shutdown-support")({
  head: () => ({
    meta: [
      { title: `${content.title} | Nexora Energy Solutions` },
      { name: "description", content: content.description },
      { property: "og:title", content: content.title },
      { property: "og:description", content: content.description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${site.url}/services/shutdown-support` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${site.url}/services/shutdown-support` }],
  }),
  component: () => <SeoLandingPage slug="shutdown-support" />,
});
