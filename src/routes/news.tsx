import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import pEng from "@/assets/project-engineering.jpg";
import pMaint from "@/assets/project-maintenance.jpg";
import pPipeline from "@/assets/project-pipeline.jpg";
import pPlant from "@/assets/project-plant.jpg";
import pRefinery from "@/assets/project-refinery.jpg";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News | Nexora Energy Solutions" },
      {
        name: "description",
        content:
          "News, project milestones and operational insights from Nexora Energy Solutions in Kuwait.",
      },
      { property: "og:title", content: "Nexora News & Insights" },
      {
        property: "og:description",
        content: "Company updates, project milestones and energy-sector insights.",
      },
      { property: "og:url", content: "/news" },
    ],
    links: [{ rel: "canonical", href: "/news" }],
  }),
  component: NewsPage,
});

const articles = [
  {
    image: pRefinery,
    category: "Contracts",
    date: "Sept 2026",
    title: "Nexora expands turnaround support capability in Ahmadi",
  },
  {
    image: pEng,
    category: "Technology",
    date: "Aug 2026",
    title: "Digital asset integrity workflows introduced for field teams",
  },
  {
    image: pMaint,
    category: "Operations",
    date: "July 2026",
    title: "Maintenance response model scaled for GCC industrial partners",
  },
  {
    image: pPipeline,
    category: "Projects",
    date: "June 2026",
    title: "Pipeline infrastructure readiness milestone completed",
  },
  {
    image: pPlant,
    category: "HSE",
    date: "May 2026",
    title: "Safety leadership program launched across active work sites",
  },
  {
    image: pEng,
    category: "Innovation",
    date: "April 2026",
    title: "Predictive reporting layer goes live for operations support",
  },
];

function NewsPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="News & Insights"
        title={
          <>
            Company updates and{" "}
            <span className="text-gradient-energy">energy-sector insights.</span>
          </>
        }
        description="Follow Nexora's project milestones, operational improvements, HSE initiatives and technology updates."
      />

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <Reveal key={article.title} delay={index * 0.04}>
              <article className="group overflow-hidden rounded-[1.75rem] border border-border bg-white hover-lift">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/58 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/60 bg-white/82 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-primary backdrop-blur">
                    {article.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    {article.date}
                  </div>
                  <h3 className="mt-3 font-display text-xl font-bold leading-snug transition group-hover:text-primary">
                    {article.title}
                  </h3>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-muted-foreground transition group-hover:text-primary">
                    Read article <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </Layout>
  );
}
