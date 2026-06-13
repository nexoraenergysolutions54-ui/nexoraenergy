import { createFileRoute } from "@tanstack/react-router";
import { SeoLandingPage } from "@/components/SeoLandingPage";
import { seoLandingContent, site } from "@/lib/enterprise-content";
import { seoHead } from "@/lib/seo";

const content = seoLandingContent.epc;

export const Route = createFileRoute("/industries/epc")({
  head: () => seoHead("/industries/epc"),
  component: () => <SeoLandingPage slug="epc" />,
});
