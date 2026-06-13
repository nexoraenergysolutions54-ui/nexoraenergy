import { createFileRoute } from "@tanstack/react-router";
import { SeoLandingPage } from "@/components/SeoLandingPage";
import { seoLandingContent, site } from "@/lib/enterprise-content";
import { seoHead } from "@/lib/seo";

const content = seoLandingContent.lng;

export const Route = createFileRoute("/industries/lng")({
  head: () => seoHead("/industries/lng"),
  component: () => <SeoLandingPage slug="lng" />,
});
