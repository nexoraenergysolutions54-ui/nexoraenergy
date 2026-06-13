import { createFileRoute } from "@tanstack/react-router";
import { SeoLandingPage } from "@/components/SeoLandingPage";
import { seoLandingContent, site } from "@/lib/enterprise-content";
import { seoHead } from "@/lib/seo";

const content = seoLandingContent["shutdown-support"];

export const Route = createFileRoute("/services/shutdown-support")({
  head: () => seoHead("/services/shutdown-support"),
  component: () => <SeoLandingPage slug="shutdown-support" />,
});
