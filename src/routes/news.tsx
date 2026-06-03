import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";
import pPipeline from "@/assets/project-pipeline.jpg";
import pRefinery from "@/assets/project-refinery.jpg";
import pPlant from "@/assets/project-plant.jpg";
import pMaint from "@/assets/project-maintenance.jpg";
import pEng from "@/assets/project-engineering.jpg";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "News — Nexora Energy Solutions" },
      { name: "description", content: "Latest news, announcements and industry insights from Nexora Energy Solutions." },
      { property: "og:title", content: "Nexora News" },
      { property: "og:description", content: "Latest news, announcements and industry insights." },
      { property: "og:url", content: "/news" },
    ],
    links: [{ rel: "canonical", href: "/news" }],
  }),
  component: NewsPage,
});

const articles = [
  { img: pRefinery, c: "Contracts", d: "Sept 2026", t: "Nexora awarded major shutdown contract in Ahmadi" },
  { img: pEng, c: "Technology", d: "Aug 2026", t: "Investing in digital asset integrity monitoring" },
  { img: pMaint, c: "Operations", d: "July 2026", t: "Expanding maintenance operations across GCC" },
  { img: pPipeline, c: "Projects", d: "June 2026", t: "Pipeline infrastructure milestone reached" },
  { img: pPlant, c: "HSE", d: "May 2026", t: "Two million safe man-hours celebrated" },
  { img: pEng, c: "Innovation", d: "April 2026", t: "Predictive analytics platform goes live" },
];

function NewsPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="News & Insights"
        title={<>What's <span className="text-gradient-gold">happening</span></>}
        description="Announcements, project milestones and industry perspectives from the Nexora team."
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((a, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <article className="group rounded-3xl overflow-hidden border border-border bg-card hover-lift">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={a.img} alt={a.t} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full glass border-gold-soft text-xs uppercase tracking-widest text-gold font-semibold">{a.c}</span>
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{a.d}</div>
                  <h3 className="mt-3 text-xl font-display font-bold leading-snug group-hover:text-gold transition">{a.t}</h3>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground group-hover:text-foreground transition">
                    Read article <ArrowUpRight className="w-4 h-4" />
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
