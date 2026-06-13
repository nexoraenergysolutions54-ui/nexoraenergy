import { createFileRoute } from "@tanstack/react-router";
import { SeoLandingPage } from "@/components/SeoLandingPage";
import { seoLandingContent, site } from "@/lib/enterprise-content";
import { seoHead } from "@/lib/seo";

const content = seoLandingContent.petrochemical;

export const Route = createFileRoute("/industries/petrochemical")({
  head: () => seoHead("/industries/petrochemical"),
  component: () => <SeoLandingPage slug="petrochemical" />,
});
