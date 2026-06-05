import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import pEng from "@/assets/project-engineering.jpg";
import pMaint from "@/assets/project-maintenance.jpg";
import pPipeline from "@/assets/project-pipeline.jpg";
import pPlant from "@/assets/project-plant.jpg";
import pRefinery from "@/assets/project-refinery.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects | Nexora Energy Solutions" },
      {
        name: "description",
        content:
          "Explore Nexora's portfolio of refinery, pipeline, plant, maintenance and engineering programs delivered across Kuwait and the GCC.",
      },
      { property: "og:title", content: "Nexora Project Portfolio" },
      {
        property: "og:description",
        content:
          "Selected delivery experience across refining, pipelines, plants, maintenance and engineering.",
      },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    category: "Refinery",
    image: pRefinery,
    title: "Turnaround Planning & Execution",
    location: "Ahmadi, Kuwait",
  },
  {
    category: "Pipeline",
    image: pPipeline,
    title: "Transmission Line Integrity Program",
    location: "GCC Corridor",
  },
  {
    category: "Plant",
    image: pPlant,
    title: "Petrochemical Facility Expansion",
    location: "Kuwait",
  },
  {
    category: "Maintenance",
    image: pMaint,
    title: "Rotating Equipment Overhaul",
    location: "Major Refinery",
  },
  {
    category: "Engineering",
    image: pEng,
    title: "Controls Upgrade & Detailed Design",
    location: "Government Energy Program",
  },
  {
    category: "Plant",
    image: pPlant,
    title: "Commissioning Support Package",
    location: "GCC Operator",
  },
];

const categories = ["All", "Refinery", "Pipeline", "Plant", "Maintenance", "Engineering"] as const;

function ProjectsPage() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const filtered =
    filter === "All" ? projects : projects.filter((project) => project.category === filter);

  return (
    <Layout>
      <PageHero
        eyebrow="Portfolio"
        title={
          <>
            Delivery experience at <span className="text-gradient-energy">industrial scale.</span>
          </>
        }
        description="Selected project profiles showing the way Nexora supports complex energy programs with safety, documentation and delivery control."
      />

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`rounded-full border px-5 py-2.5 text-sm font-bold transition-all ${
                  filter === category
                    ? "border-primary bg-primary text-primary-foreground btn-glow-blue"
                    : "border-border bg-white text-muted-foreground hover:border-energy-soft hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, index) => (
              <Reveal key={`${project.title}-${index}`} delay={index * 0.04}>
                <article className="group overflow-hidden rounded-[1.75rem] border border-border bg-white hover-lift">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/62 via-transparent to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full border border-white/60 bg-white/82 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-primary backdrop-blur">
                      {project.category}
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-4 p-6">
                    <div>
                      <h3 className="font-display text-xl font-bold transition group-hover:text-primary">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">{project.location}</p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-primary" />
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
