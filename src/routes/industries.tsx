import { Outlet, createFileRoute, Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { industryCards } from "@/lib/enterprise-content";
import { seoHead } from "@/lib/seo";
import industriesHero from "@/assets/optimized/industries-hero-energy-infrastructure.webp";

export const Route = createFileRoute("/industries")({
  head: () => seoHead("/industries"),
  component: IndustriesRouteComponent,
});

const industryHref = {
  "oil-and-gas": "/industries/oil-and-gas",
  lng: "/industries/lng",
  petrochemical: "/industries/petrochemical",
  infrastructure: "/industries/infrastructure",
  manufacturing: "/industries/manufacturing",
  epc: "/industries/epc",
} as const;

function IndustriesRouteComponent() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const normalizedPath = pathname.replace(/\/+$/, "") || "/";

  if (normalizedPath !== "/industries") {
    return <Outlet />;
  }

  return <IndustriesPage />;
}

function IndustriesPage() {
  return (
    <Layout>
      {/* 1. Hero */}
      <PageHero
        eyebrow="Industries We Support"
        title="Industrial Support Across Priority Sectors"
        description="From its base in Qatar, NEXORA supports manpower, industrial-service and procurement requirements across selected energy and industrial sectors, with a focus on Qatar, Saudi Arabia and Kuwait."
        backgroundImage={industriesHero}
        imagePosition="object-center"
        hideTags
      />

      {/* 2. Six-sector industry grid */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industryCards.map((industry, i) => {
              const href = industryHref[industry.slug as keyof typeof industryHref];
              return (
                <Reveal key={industry.title} delay={i * 0.05}>
                  <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-elevated">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={industry.image}
                        alt={industry.imageAlt}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-navy/78 via-navy/10 to-transparent" />
                      <div className="absolute left-4 top-4 grid h-9 w-9 place-items-center rounded-md border border-white/20 bg-navy/45 text-energy backdrop-blur">
                        <industry.icon className="h-4 w-4" aria-hidden="true" />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h2 className="font-display text-xl font-extrabold text-foreground">
                        {industry.title}
                      </h2>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {industry.summary}
                      </p>
                      <Link
                        to={href}
                        className="mt-6 inline-flex items-center gap-2 border-t border-border pt-5 text-sm font-bold text-primary transition hover:text-energy"
                      >
                        Explore {industry.title}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Final CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-4xl bg-navy px-8 py-16 text-center">
              <div className="absolute inset-0 grid-bg opacity-12" />
              <div className="absolute -top-24 left-1/2 h-136 w-136 -translate-x-1/2 rounded-full bg-radial from-energy/15 to-transparent blur-3xl" />
              <div className="relative">
                <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-white/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-energy" />
                  Discuss Your Requirement
                </div>
                <h2 className="mx-auto max-w-2xl font-display text-3xl font-extrabold text-white md:text-5xl">
                  Support Aligned With Your Industrial Requirements
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/60">
                  Share your project sector, location and required manpower, industrial-service or
                  procurement support with the Nexora team.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-energy px-7 py-3.5 text-sm font-bold text-navy transition hover:bg-energy/90 btn-glow-teal"
                  >
                    Discuss Your Requirement <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/manpower"
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:border-white/40"
                  >
                    Request Manpower
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
