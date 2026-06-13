import { createFileRoute } from "@tanstack/react-router";
import { SeoLandingPage } from "@/components/SeoLandingPage";
import { seoLandingContent, site } from "@/lib/enterprise-content";
import { seoHead } from "@/lib/seo";

const content = seoLandingContent["engineering-support"];

export const Route = createFileRoute("/services/engineering-support")({
  head: () => seoHead("/services/engineering-support"),
  component: () => <SeoLandingPage slug="engineering-support" />,
});
