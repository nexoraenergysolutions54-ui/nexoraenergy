import { createFileRoute } from "@tanstack/react-router";
import { SeoLandingPage } from "@/components/SeoLandingPage";
import { seoLandingContent, site } from "@/lib/enterprise-content";
import { seoHead } from "@/lib/seo";

const content = seoLandingContent["project-support"];

export const Route = createFileRoute("/services/project-support")({
  head: () => seoHead("/services/project-support"),
  component: () => <SeoLandingPage slug="project-support" />,
});
