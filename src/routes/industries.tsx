import { Outlet, createFileRoute, Link, useRouterState } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Cpu,
  Factory,
  Flame,
  HardHat,
  Landmark,
  Network,
  Ship,
  Zap,
} from "lucide-react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/enterprise-content";
import about from "@/assets/about-engineers.jpg";
import pEng from "@/assets/project-engineering.jpg";
import pMaint from "@/assets/project-maintenance.jpg";
import pPipeline from "@/assets/project-pipeline.jpg";
import pPlant from "@/assets/project-plant.jpg";
import pRefinery from "@/assets/project-refinery.jpg";
import hero from "@/assets/hero-refinery.jpg";
import industriesHero from "@/assets/industries-hero-energy-infrastructure.png";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries | Nexora Energy Solutions" },
      {
        name: "description",
        content:
          "Nexora Energy Solutions serves oil & gas, LNG, petrochemical, power, infrastructure, marine, government and manufacturing sectors across Qatar and the GCC.",
      },
      { property: "og:title", content: "Industries Served - Nexora Energy Solutions" },
      {
        property: "og:description",
        content:
          "Technical manpower and industrial services across GCC energy and industrial sectors.",
      },
      { property: "og:url", content: `${site.url}/industries` },
    ],
    links: [{ rel: "canonical", href: `${site.url}/industries` }],
  }),
  component: IndustriesRouteComponent,
});

const industries = [
  {
    icon: Factory,
    title: "Oil & Gas",
    image: pRefinery,
    desc: "Qatar and GCC upstream and downstream oil & gas operations require experienced technical manpower for drilling, production, refining and maintenance. Nexora supplies engineers, technicians and tradespeople aligned to QatarEnergy and regional operator standards.",
    services: [
      "Mechanical & Electrical Engineers",
      "Piping Designers",
      "Rotating Equipment Specialists",
      "Process Operators",
      "Site Supervisors",
    ],
    clients: ["KOC", "KNPC", "Saudi Aramco", "ADNOC"],
  },
  {
    icon: Flame,
    title: "LNG & Gas Processing",
    image: hero,
    desc: "LNG and gas processing facilities operate at the highest levels of technical complexity and HSE requirement. Nexora provides pre-qualified professionals familiar with liquefaction, regasification, gas treatment and cryogenic systems.",
    services: [
      "Process Engineers",
      "Cryogenic Specialists",
      "Instrumentation Engineers",
      "HSE Officers",
      "Operations Personnel",
    ],
    clients: ["QatarEnergy LNG", "QAFCO", "QAPCO", "QChem"],
  },
  {
    icon: Cpu,
    title: "Petrochemical",
    image: pPlant,
    desc: "Petrochemical plants require disciplined project execution and technically skilled maintenance personnel. Nexora supports greenfield, brownfield and maintenance operations for Qatar and GCC petrochemical complexes.",
    services: [
      "Chemical Engineers",
      "Mechanical Maintenance Crews",
      "Electrical Engineers",
      "QA/QC Inspectors",
      "Scaffold & Insulation Trades",
    ],
    clients: ["EQUATE", "PIC", "QAFCO", "QAPCO"],
  },
  {
    icon: Zap,
    title: "Power & Utilities",
    image: pEng,
    desc: "Power generation, transmission and utilities infrastructure requires reliable operational and maintenance support. Nexora provides electrical, instrumentation and civil engineering manpower for power sector projects.",
    services: [
      "Electrical Engineers",
      "Instrumentation Technicians",
      "Civil Engineers",
      "Commissioning Engineers",
      "Maintenance Technicians",
    ],
    clients: ["MEW Kuwait", "KAHRAMAA", "GCC Utilities"],
  },
  {
    icon: Network,
    title: "Pipelines & Infrastructure",
    image: pPipeline,
    desc: "Pipeline construction, inspection and maintenance operations across Qatar and the GCC demand specialist crews for welding, pipe fitting, non-destructive testing and project supervision.",
    services: [
      "Pipeline Welders (API 1104)",
      "Pipe Fitters",
      "NDT Technicians",
      "Pipeline Inspectors",
      "Field Surveyors",
    ],
    clients: ["KOC", "KNPC Pipelines", "GCC Pipeline EPC"],
  },
  {
    icon: Ship,
    title: "Marine & Offshore",
    image: about,
    desc: "Marine terminals, offshore support bases and vessel maintenance require OPITO-certified personnel for safe marine operations. Nexora supports marine industrial clients with compliant workforce solutions.",
    services: [
      "Marine Engineers",
      "Riggers & Crane Operators",
      "Electrical Technicians",
      "Safety Officers",
      "Offshore Supervisors",
    ],
    clients: ["Milaha", "KGOC", "GCC Marine Operators"],
  },
  {
    icon: Landmark,
    title: "Government & Public Sector",
    image: pMaint,
    desc: "Government energy programs and public infrastructure projects across Qatar and the GCC require reliable technical partners who understand procurement compliance, documentation control and project governance.",
    services: [
      "Project Managers",
      "Civil Engineers",
      "QA/QC Teams",
      "Site Supervisors",
      "Document Controllers",
    ],
    clients: ["Qatar Public Sector", "GCC Government Programs", "Infrastructure Authorities"],
  },
  {
    icon: Building2,
    title: "Manufacturing",
    image: pEng,
    desc: "Manufacturing facilities across Qatar and the GCC require skilled maintenance and operations personnel. Nexora supports planned and reactive maintenance programs for production-critical environments.",
    services: [
      "Mechanical Maintenance",
      "Electrical Technicians",
      "Fabricators & Welders",
      "Instrumentation Techs",
      "Production Operators",
    ],
    clients: ["KNPC Manufacturing", "GCC Industrial Parks"],
  },
];

const featuredIndustries = industries.slice(0, 3);
const supportingIndustries = industries.slice(3);

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
      <PageHero
        eyebrow="Industries We Serve"
        title={
          <>
            Trusted across{" "}
            <span className="text-gradient-energy">GCC&apos;s critical sectors.</span>
          </>
        }
        description="Nexora supports the energy operators, EPC contractors and industrial facilities that drive Qatar and the GCC's economy - with qualified technical manpower and industrial services built for demanding environments."
        backgroundImage={industriesHero}
        imagePosition="object-center"
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {featuredIndustries.map((industry, i) => (
              <Reveal key={industry.title} delay={i * 0.05}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-elevated">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-navy/82 via-navy/18 to-transparent" />
                    <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-md border border-white/20 bg-navy/42 px-3 py-2 text-xs font-bold text-white backdrop-blur">
                      <industry.icon className="h-4 w-4 text-energy" />
                      Core Sector
                    </div>
                    <h2 className="absolute inset-x-5 bottom-5 font-display text-2xl font-extrabold leading-tight text-white">
                      {industry.title}
                    </h2>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-sm leading-7 text-muted-foreground">{industry.desc}</p>

                    <div className="mt-6">
                      <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                        Key Roles Supplied
                      </div>
                      <div className="grid gap-2">
                        {industry.services.slice(0, 4).map((s) => (
                          <div key={s} className="flex items-center gap-2 text-sm font-semibold">
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-energy" />
                            {s}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {industry.clients.slice(0, 3).map((c) => (
                        <span
                          key={c}
                          className="rounded-md border border-border bg-surface/70 px-2.5 py-1 text-[10px] font-bold text-muted-foreground"
                        >
                          {c}
                        </span>
                      ))}
                    </div>

                    <Link
                      to="/manpower"
                      className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary transition hover:text-primary/80"
                    >
                      Request Manpower <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {supportingIndustries.map((industry, i) => (
              <Reveal key={industry.title} delay={i * 0.03}>
                <article className="group grid overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-elevated sm:grid-cols-[minmax(180px,0.78fr)_1fr]">
                  <div className="relative min-h-56 overflow-hidden sm:min-h-full">
                    <img
                      src={industry.image}
                      alt={industry.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-navy/72 via-navy/16 to-transparent" />
                    <div className="absolute left-4 top-4 grid h-9 w-9 place-items-center rounded-md border border-white/20 bg-navy/45 text-energy backdrop-blur">
                      <industry.icon className="h-4 w-4" />
                    </div>
                  </div>

                  <div className="flex flex-col justify-center p-6">
                    <h2 className="font-display text-xl font-extrabold">{industry.title}</h2>
                    <p className="mt-3 line-clamp-3 text-sm leading-7 text-muted-foreground">
                      {industry.desc}
                    </p>

                    <div className="mt-5 grid gap-4 sm:grid-cols-[1fr_auto]">
                      <div>
                        <div className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                          Key Roles
                        </div>
                        <div className="grid gap-1.5">
                          {industry.services.slice(0, 3).map((s) => (
                            <div key={s} className="flex items-center gap-2 text-xs font-semibold">
                              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-energy" />
                              {s}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-wrap content-start gap-1.5 sm:max-w-36 sm:justify-end">
                        {industry.clients.slice(0, 2).map((c) => (
                          <span
                            key={c}
                            className="rounded-md border border-border bg-surface/70 px-2.5 py-1 text-[10px] font-bold text-muted-foreground"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 flex items-center gap-5">
                      <Link
                        to="/manpower"
                        className="inline-flex items-center gap-2 text-sm font-bold text-primary transition hover:text-primary/80"
                      >
                        Request Manpower <ArrowRight className="h-4 w-4" />
                      </Link>
                      <Link
                        to="/contact"
                        className="text-sm font-semibold text-muted-foreground transition hover:text-foreground"
                      >
                        Discuss a project
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-24 pt-8">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-4xl bg-navy px-8 py-16 text-center">
              <div className="absolute inset-0 grid-bg opacity-12" />
              <div className="absolute -top-24 left-1/2 h-136 w-136 -translate-x-1/2 rounded-full bg-radial from-energy/15 to-transparent blur-3xl" />
              <div className="relative">
                <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-white/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-energy" />
                  GCC Coverage
                </div>
                <h2 className="mx-auto max-w-2xl font-display text-3xl font-extrabold text-white md:text-5xl">
                  Your sector. Your project. <span className="text-energy">Our workforce.</span>
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/55">
                  Speak to Nexora about your manpower requirements - from single specialist roles to
                  complete multi-discipline project crews.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Link
                    to="/manpower"
                    className="inline-flex items-center gap-2 rounded-full bg-energy px-7 py-3.5 text-sm font-bold text-navy transition hover:bg-energy/90 btn-glow-teal"
                  >
                    Request Manpower <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:border-white/40"
                  >
                    Contact Us
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
