import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/enterprise-content";
import pEng from "@/assets/project-engineering.jpg";
import pMaint from "@/assets/project-maintenance.jpg";
import pPipeline from "@/assets/project-pipeline.jpg";
import pPlant from "@/assets/project-plant.jpg";
import pRefinery from "@/assets/project-refinery.jpg";
import about from "@/assets/about-engineers.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects | Nexora Energy Solutions" },
      {
        name: "description",
        content:
          "Explore Nexora Energy Solutions' project delivery experience across refinery, LNG, pipeline, maintenance, engineering and EPC programs across Qatar and the GCC.",
      },
      { property: "og:title", content: "Project Portfolio - Nexora Energy Solutions" },
      {
        property: "og:description",
        content:
          "Selected delivery profiles across refinery, LNG, pipelines, maintenance and engineering programs.",
      },
      { property: "og:url", content: `${site.url}/projects` },
    ],
    links: [{ rel: "canonical", href: `${site.url}/projects` }],
  }),
  component: ProjectsPage,
});

const projects = [
  {
    category: "Manpower",
    image: pRefinery,
    title: "Refinery Turnaround Manpower Package",
    location: "Ahmadi, Kuwait",
    client: "Major Kuwait Refinery",
    scope:
      "Multi-discipline manpower package for planned turnaround. 150+ personnel deployed across mechanical, electrical, instrumentation and scaffolding disciplines over 45 days.",
    disciplines: ["Mechanical Engineers", "Welders", "Pipe Fitters", "Scaffolders", "HSE Officers"],
  },
  {
    category: "Manpower",
    image: pPipeline,
    title: "Pipeline Integrity Programme - Manpower Support",
    location: "GCC Corridor",
    client: "GCC Pipeline Operator",
    scope:
      "Long-term manpower provision for pipeline inspection and integrity management programme. Specialised in-line inspection engineers, corrosion specialists and field technicians.",
    disciplines: ["Pipeline Engineers", "NDT Technicians", "Corrosion Specialists", "Survey Crews"],
  },
  {
    category: "Industrial Services",
    image: pMaint,
    title: "Rotating Equipment Overhaul Programme",
    location: "Major Refinery, Kuwait",
    client: "KNPC Facility",
    scope:
      "Full overhaul programme for rotating equipment including compressors, pumps and turbines. Planned maintenance execution with full documentation package and handover.",
    disciplines: ["Mechanical Technicians", "Alignment Specialists", "Vibration Analysts"],
  },
  {
    category: "Manpower",
    image: pEng,
    title: "Petrochemical Expansion - Engineering Manpower",
    location: "Kuwait",
    client: "Government Petrochemical Program",
    scope:
      "Provision of project and design engineers for a major petrochemical facility expansion. Roles spanning process, mechanical, electrical and civil engineering disciplines.",
    disciplines: [
      "Process Engineers",
      "Mechanical Engineers",
      "Civil Engineers",
      "Project Engineers",
    ],
  },
  {
    category: "Industrial Services",
    image: pPlant,
    title: "Plant Shutdown Support - LNG Facility",
    location: "Ras Laffan, Qatar",
    client: "QatarEnergy Affiliate",
    scope:
      "Specialist shutdown crew for an LNG processing facility turnaround. Full trade and supervisory personnel with cryogenic service experience and OPITO-certified HSE competencies.",
    disciplines: ["Shutdown Supervisors", "Instrumentation Techs", "Welders", "HSE Officers"],
  },
  {
    category: "Manpower",
    image: about,
    title: "EPC Contractor Site Supervision",
    location: "Abu Dhabi, UAE",
    client: "Major EPC Contractor",
    scope:
      "Site supervision and quality assurance manpower for a greenfield industrial facility. QA/QC inspectors, site supervisors and project engineers embedded in the client team.",
    disciplines: [
      "QA/QC Inspectors",
      "Site Supervisors",
      "Project Engineers",
      "Document Controllers",
    ],
  },
  {
    category: "Industrial Services",
    image: pRefinery,
    title: "Refinery Maintenance Contract",
    location: "Kuwait",
    client: "KNPC Refinery",
    scope:
      "Three-year maintenance services contract covering planned and corrective maintenance for process plant equipment. Dedicated Nexora crew with performance KPIs.",
    disciplines: ["Mechanical Technicians", "Electrical Technicians", "Instrumentation Techs"],
  },
  {
    category: "Products",
    image: pEng,
    title: "Valve & Instrumentation Supply - EPC Project",
    location: "Kuwait Industrial City",
    client: "EPC Contractor",
    scope:
      "Supply of API-compliant ball valves, gate valves and field instrumentation for a major industrial facility. Full material traceability documentation package provided.",
    disciplines: ["Ball Valves", "Gate Valves", "Pressure Transmitters", "Flow Meters"],
  },
];

const categories = ["All", "Manpower", "Industrial Services", "Products"] as const;

function ProjectsPage() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <Layout>
      <PageHero
        eyebrow="Project Portfolio"
        title={
          <>
            Delivery experience at <span className="text-gradient-energy">industrial scale.</span>
          </>
        }
        description="Selected project profiles representing Nexora's delivery capability across technical manpower, industrial services and procurement supply for Qatar and GCC energy clients."
      />

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-6">
          {/* Filter bar */}
          <Reveal>
            <div className="mb-12 flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`rounded-full border px-5 py-2.5 text-sm font-bold transition-all ${
                    filter === cat
                      ? "border-primary bg-primary text-primary-foreground btn-glow-blue"
                      : "border-border bg-white text-muted-foreground hover:border-energy-soft hover:text-primary"
                  }`}
                >
                  {cat}
                  {cat !== "All" && (
                    <span
                      className={`ml-2 rounded-full px-1.5 py-0.5 text-[10px] font-bold ${filter === cat ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"}`}
                    >
                      {projects.filter((p) => p.category === cat).length}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, i) => (
              <Reveal key={`${project.title}-${i}`} delay={i * 0.04}>
                <article className="group h-full overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition hover:shadow-elevated hover:-translate-y-1">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-navy/65 via-navy/10 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full border border-white/40 bg-white/14 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur">
                      {project.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-lg font-bold leading-snug transition group-hover:text-primary">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    </div>
                    <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      <span>{project.location}</span>
                      <span className="mx-1 text-border">Â·</span>
                      <span>{project.client}</span>
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                      {project.scope}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.disciplines.slice(0, 3).map((d) => (
                        <span
                          key={d}
                          className="rounded-full border border-border bg-surface/60 px-2.5 py-1 text-[10px] font-semibold text-muted-foreground"
                        >
                          {d}
                        </span>
                      ))}
                      {project.disciplines.length > 3 && (
                        <span className="rounded-full border border-border bg-surface/60 px-2.5 py-1 text-[10px] font-semibold text-muted-foreground">
                          +{project.disciplines.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <p className="text-base text-muted-foreground">
              Ready to add your project to our delivery record?
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-4">
              <Link
                to="/manpower"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition hover:bg-primary/90 btn-glow-blue"
              >
                Request Manpower <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-bold text-foreground transition hover:border-energy-soft hover:text-primary"
              >
                Discuss a project
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
