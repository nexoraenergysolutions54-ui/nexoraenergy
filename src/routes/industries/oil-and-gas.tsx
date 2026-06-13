import { createFileRoute } from "@tanstack/react-router";
import { SeoLandingPage } from "@/components/SeoLandingPage";
import { seoLandingContent, site } from "@/lib/enterprise-content";
import { seoHead } from "@/lib/seo";

const content = seoLandingContent["oil-and-gas"];

export const Route = createFileRoute("/industries/oil-and-gas")({
  head: () => seoHead("/industries/oil-and-gas"),
  component: () => <SeoLandingPage slug="oil-and-gas" />,
});
