import { createFileRoute } from "@tanstack/react-router";
import { SeoLandingPage } from "@/components/SeoLandingPage";
import { seoLandingContent, site } from "@/lib/enterprise-content";
import { seoHead } from "@/lib/seo";

const content = seoLandingContent["manpower-supply"];

export const Route = createFileRoute("/services/manpower-supply")({
  head: () => seoHead("/services/manpower-supply"),
  component: () => <SeoLandingPage slug="manpower-supply" />,
});
