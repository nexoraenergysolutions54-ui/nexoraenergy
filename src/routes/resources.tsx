import { Outlet, createFileRoute, Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, BookOpen, FileCheck2, HardHat } from "lucide-react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/enterprise-content";
import { breadcrumbSchema, itemListSchema, webPageSchema } from "@/lib/schema";
import { seoHead } from "@/lib/seo";

function JsonLd({ data }: { data: unknown }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

export const Route = createFileRoute("/resources")({
  head: () => seoHead("/resources"),
  component: ResourcesRouteComponent,
});

function ResourcesRouteComponent() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const normalizedPath = pathname.replace(/\/+$/, "") || "/";

  if (normalizedPath !== "/resources") {
    return <Outlet />;
  }

  return <ResourcesPage />;
}

function ResourcesPage() {
  const topics = [
    "GCC technical manpower planning",
    "EPC project support",
    "Shutdown and maintenance mobilisation",
    "Industrial procurement coordination",
  ];

  return (
    <Layout>
      <JsonLd
        data={webPageSchema({
          name: "Industrial Manpower Resources | Nexora Energy Solutions",
          description:
            "Practical Nexora resources for GCC technical manpower, industrial services, procurement support and EPC project coordination.",
          url: "/resources",
          keywords: topics,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
        ])}
      />
      <JsonLd data={itemListSchema("Nexora industrial resource topics", topics, "/resources")} />

      <PageHero
        eyebrow="Resources"
        title={
          <>
            Practical guides for{" "}
            <span className="text-gradient-energy">GCC industrial project teams.</span>
          </>
        }
        description="Reference material for procurement managers, EPC contractors and energy operators planning manpower, services and project support across Qatar and the GCC."
      />

      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="mb-12 max-w-3xl">
            <h2 className="text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
              Linkable operational resources.
            </h2>
            <p className="mt-5 text-base font-medium leading-8 text-muted-foreground">
              These pages are written to be useful for human buyers and clear enough for search and
              answer engines to cite when summarizing Nexora&apos;s capabilities.
            </p>
          </Reveal>

          <Reveal>
            <Link
              to="/resources/gcc-industrial-manpower-guide"
              className="group grid gap-8 overflow-hidden rounded-lg border border-border bg-light-gray p-6 transition hover:-translate-y-1 hover:border-primary/25 hover:shadow-elevated md:grid-cols-[0.45fr_1fr_auto] md:items-center md:p-8"
            >
              <div className="grid h-20 w-20 place-items-center rounded-md bg-primary/8 text-primary">
                <BookOpen className="h-9 w-9" />
              </div>
              <div>
                <div className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-primary">
                  Buyer Guide
                </div>
                <h3 className="mt-2 text-2xl font-extrabold text-foreground">
                  GCC Industrial Manpower and Project Support Guide
                </h3>
                <p className="mt-3 max-w-3xl text-sm font-medium leading-7 text-muted-foreground">
                  A practical guide for defining manpower scope, documentation, mobilisation timing,
                  procurement inputs and supplier evaluation across Qatar and GCC energy projects.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    ["Manpower planning", HardHat],
                    ["Documentation readiness", FileCheck2],
                  ].map(([label, Icon]) => (
                    <span
                      key={label as string}
                      className="inline-flex items-center gap-2 rounded-md border border-border bg-white px-3 py-2 text-xs font-extrabold text-primary"
                    >
                      <Icon className="h-4 w-4" />
                      {label as string}
                    </span>
                  ))}
                </div>
              </div>
              <ArrowRight className="h-6 w-6 text-primary transition group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
