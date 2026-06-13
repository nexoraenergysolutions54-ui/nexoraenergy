import { createFileRoute } from "@tanstack/react-router";
import { SeoLandingPage } from "@/components/SeoLandingPage";
import { seoLandingContent, site } from "@/lib/enterprise-content";
import { seoHead } from "@/lib/seo";

const content = seoLandingContent["procurement-support"];

export const Route = createFileRoute("/services/procurement-support")({
  head: () => seoHead("/services/procurement-support"),
  component: () => <SeoLandingPage slug="procurement-support" />,
});
