import { createFileRoute } from "@tanstack/react-router";
import { SeoLandingPage } from "@/components/SeoLandingPage";
import { seoLandingContent, site } from "@/lib/enterprise-content";
import { seoHead } from "@/lib/seo";

const content = seoLandingContent.infrastructure;

export const Route = createFileRoute("/industries/infrastructure")({
  head: () => seoHead("/industries/infrastructure"),
  component: () => <SeoLandingPage slug="infrastructure" />,
});
