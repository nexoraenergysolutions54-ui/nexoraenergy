import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";
import pPipeline from "@/assets/project-pipeline.jpg";
import pRefinery from "@/assets/project-refinery.jpg";
import pPlant from "@/assets/project-plant.jpg";
import pMaint from "@/assets/project-maintenance.jpg";
import pEng from "@/assets/project-engineering.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Nexora Energy Solutions" },
      { name: "description", content: "Explore Nexora's portfolio of refinery, pipeline, plant, maintenance and engineering projects delivered across Kuwait and the GCC." },
      { property: "og:title", content: "Projects — Nexora" },
      { property: "og:description", content: "Refinery, pipeline, plant, maintenance and engineering project portfolio." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

const projects = [
  { c: "Refinery", img: pRefinery, t: "Distillation Column Upgrade", d: "Ahmadi, Kuwait" },
  { c: "Pipeline", img: pPipeline, t: "Cross-Country Transmission Line", d: "GCC Corridor" },
  { c: "Plant", img: pPlant, t: "Petrochemical Facility Expansion", d: "Kuwait" },
  { c: "Maintenance", img: pMaint, t: "Rotating Equipment Overhaul", d: "Major Refinery" },
  { c: "Engineering", img: pEng, t: "FEED Study & Detailed Design", d: "Government Energy Program" },
  { c: "Refinery", img: pPlant, t: "Turnaround Support Program", d: "GCC Operator" },
];

const categories = ["All", "Refinery", "Pipeline", "Plant", "Maintenance", "Engineering"] as const;

function ProjectsPage() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.c === filter);

  return (
    <Layout>
      <PageHero
        eyebrow="Portfolio"
        title={<>Engineering <span className="text-gradient-gold">at scale</span></>}
        description="Selected projects demonstrating Nexora's capability across the full industrial value chain."
      />

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all ${
                  filter === c
                    ? "bg-primary text-primary-foreground border-primary btn-glow-red"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-gold-soft"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <Reveal key={`${p.t}-${i}`} delay={i * 0.05}>
                <article className="group rounded-3xl overflow-hidden border border-border bg-card hover-lift">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={p.img} alt={p.t} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full glass border-gold-soft text-xs uppercase tracking-widest text-gold font-semibold">
                      {p.c}
                    </span>
                  </div>
                  <div className="p-6 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-display font-bold group-hover:text-gold transition">{p.t}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-gold transition shrink-0" />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
