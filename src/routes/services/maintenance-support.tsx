import { createFileRoute } from "@tanstack/react-router";
import { SeoLandingPage } from "@/components/SeoLandingPage";
import { seoLandingContent, site } from "@/lib/enterprise-content";
import { seoHead } from "@/lib/seo";

const content = seoLandingContent["maintenance-support"];

export const Route = createFileRoute("/services/maintenance-support")({
  head: () => seoHead("/services/maintenance-support"),
  component: () => <SeoLandingPage slug="maintenance-support" />,
});
