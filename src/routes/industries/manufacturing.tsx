import { createFileRoute } from "@tanstack/react-router";
import { SeoLandingPage } from "@/components/SeoLandingPage";
import { seoLandingContent, site } from "@/lib/enterprise-content";
import { seoHead } from "@/lib/seo";

const content = seoLandingContent.manufacturing;

export const Route = createFileRoute("/industries/manufacturing")({
  head: () => seoHead("/industries/manufacturing"),
  component: () => <SeoLandingPage slug="manufacturing" />,
});
