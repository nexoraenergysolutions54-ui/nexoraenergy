import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Building2,
  CheckCircle2,
  ClipboardList,
  HardHat,
  Package,
  Send,
  Settings2,
  Shield,
  Timer,
  TrendingUp,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import pMaint from "@/assets/project-maintenance.jpg";
import pRefinery from "@/assets/project-refinery.jpg";
import pEng from "@/assets/project-engineering.jpg";
import pPipeline from "@/assets/project-pipeline.jpg";
import about from "@/assets/about-engineers.jpg";

export const Route = createFileRoute("/industrial-services")({
  head: () => ({
    meta: [
      { title: "Industrial Services | Nexora Energy Solutions" },
      {
        name: "description",
        content:
          "Nexora Energy Solutions provides industrial services including shutdown, turnaround, maintenance, project support and site services for energy and industrial facilities across the GCC.",
      },
      { property: "og:title", content: "Industrial Services — Nexora Energy Solutions" },
      {
        property: "og:description",
        content:
          "Shutdown, turnaround, maintenance and project support for critical energy and industrial facilities.",
      },
      { property: "og:url", content: "/industrial-services" },
    ],
    links: [{ rel: "canonical", href: "/industrial-services" }],
  }),
  component: IndustrialServicesPage,
});

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  if (light) {
    return (
      <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-white/70">
        <span className="h-1.5 w-1.5 rounded-full bg-energy" />
        {children}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-energy-soft bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-primary backdrop-blur">
      <span className="h-1.5 w-1.5 rounded-full bg-energy" />
      {children}
    </span>
  );
}

function IndustrialServicesPage() {
  return (
    <Layout>
      <ServicesHero />
      <ServicesGrid />
      <MethodologySection />
      <ProjectTypesSection />
      <SafetySection />
      <ServicesCTA />
    </Layout>
  );
}

/* ─── HERO ────────────────────────────────────────────────────────────────── */

function ServicesHero() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={pMaint}
          alt="Industrial maintenance and service operations"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-linear-to-r from-navy/92 via-navy/78 to-navy/50" />
        <div className="absolute inset-0 bg-linear-to-t from-navy/50 to-transparent" />
      </div>
      <div className="absolute inset-0 grid-bg opacity-8" />
      <div className="absolute right-0 top-0 h-[36rem] w-[36rem] rounded-full bg-radial from-primary/15 to-transparent blur-3xl" />

      <div className="relative mx-auto flex min-h-[80vh] max-w-7xl flex-col justify-center px-6 pb-16 pt-36">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mb-8 self-start"
        >
          <Eyebrow light>Industrial Services</Eyebrow>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-3xl font-display text-5xl font-extrabold leading-[1.02] text-white md:text-6xl"
        >
          Full Lifecycle{" "}
          <span className="text-energy">Industrial Site Support</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-white/68 md:text-lg"
        >
          From planned shutdowns to emergency maintenance and long-term site services — Nexora
          delivers specialist industrial crews with the discipline, compliance and documentation
          standards your facility demands.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.34 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-energy px-7 py-4 text-sm font-bold text-navy transition hover:-translate-y-0.5 hover:bg-energy/90 btn-glow-teal"
          >
            Request a Proposal <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/manpower"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur transition hover:border-white/40 hover:bg-white/16"
          >
            View Manpower Solutions <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-background to-transparent" />
    </section>
  );
}

/* ─── SERVICES GRID ───────────────────────────────────────────────────────── */

const services = [
  {
    icon: Timer,
    title: "Shutdown Support",
    desc: "Planned and unplanned plant shutdown execution. We provide specialist crews for piping, mechanical, electrical and instrumentation disciplines to execute safe and efficient shutdowns on schedule.",
    points: ["Permit-to-work management", "Multi-discipline coordination", "Isolation and de-isolation", "Documentation and handover"],
    image: pRefinery,
  },
  {
    icon: TrendingUp,
    title: "Turnaround Support",
    desc: "End-to-end turnaround manpower packages from planning through re-commissioning. Our crews are experienced in high-pressure, time-critical turnaround environments across refineries and process plants.",
    points: ["Pre-TA planning support", "Full discipline crew packages", "Progress tracking and reporting", "HSSE monitoring"],
    image: pMaint,
  },
  {
    icon: Wrench,
    title: "Maintenance Support",
    desc: "Corrective, preventive and predictive maintenance services for critical rotating and static equipment. Structured maintenance support that maximises asset uptime and extends equipment life.",
    points: ["Rotating equipment overhaul", "Static equipment inspection", "Preventive maintenance programs", "Reliability-centered maintenance"],
    image: pEng,
  },
  {
    icon: HardHat,
    title: "Project Support",
    desc: "Site execution crews for greenfield, brownfield and capital project delivery. We support EPC contractors and operators with skilled, compliant tradespeople and supervision.",
    points: ["Greenfield & brownfield execution", "Commissioning support", "Sub-contractor supervision", "Project closeout documentation"],
    image: pPipeline,
  },
  {
    icon: Building2,
    title: "Site Services",
    desc: "Scaffolding, insulation, surface preparation, painting, civil works and general site services provided by experienced, safety-trained personnel with the correct tools and equipment.",
    points: ["CISRS scaffolding crews", "Insulation and cladding", "Surface prep and painting", "Civil and groundwork support"],
    image: about,
  },
  {
    icon: Package,
    title: "Procurement Support",
    desc: "Coordinated spare parts sourcing, vendor management and documented supply chain control to ensure your materials arrive on time and meet project specifications.",
    points: ["OEM and approved vendor sourcing", "Lead time management", "Quality documentation", "Logistics and customs support"],
    image: pRefinery,
  },
  {
    icon: Settings2,
    title: "Engineering Support",
    desc: "On-site technical engineering, inspection and documentation services embedded in your project team. Our engineers work alongside your team to resolve technical issues and maintain quality standards.",
    points: ["Technical query resolution", "As-built documentation", "Inspection and test plans", "Engineering change management"],
    image: pEng,
  },
];

function ServicesGrid() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-14 text-center">
          <Eyebrow>Our Services</Eyebrow>
          <h2 className="mt-5 text-4xl font-extrabold leading-[1.06] md:text-5xl">
            Seven service lines.{" "}
            <span className="text-gradient-energy">One trusted partner.</span>
          </h2>
        </Reveal>

        <div className="space-y-6">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.04}>
              <div
                className={`group grid overflow-hidden rounded-2xl border border-border bg-white shadow-sm hover:shadow-elevated transition lg:grid-cols-5 ${
                  i % 2 === 0 ? "" : "lg:grid-flow-dense"
                }`}
              >
                {/* Image */}
                <div className={`relative aspect-video overflow-hidden lg:aspect-auto lg:col-span-2 ${i % 2 !== 0 ? "lg:order-2" : ""}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-linear-to-br from-navy/40 to-transparent" />
                  <div className="absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-xl bg-white/12 text-white backdrop-blur">
                    <service.icon className="h-6 w-6" />
                  </div>
                </div>
                {/* Content */}
                <div className="flex flex-col justify-center p-7 lg:col-span-3 lg:p-9">
                  <div className="font-display text-xl font-bold">{service.title}</div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
                  <div className="mt-5 grid gap-2 sm:grid-cols-2">
                    {service.points.map((point) => (
                      <div key={point} className="flex items-center gap-2 text-xs font-semibold">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-energy" />
                        {point}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-sm font-bold text-primary transition hover:text-primary/80"
                    >
                      Request this service <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── METHODOLOGY ─────────────────────────────────────────────────────────── */

const methodology = [
  { num: "01", icon: ClipboardList, title: "Scope Review", desc: "We analyse your project requirements, site conditions and timeline." },
  { num: "02", icon: Users, title: "Team Assembly", desc: "Specialist crews assembled from verified workforce pool." },
  { num: "03", icon: Shield, title: "HSE Preparation", desc: "Site-specific safety plans, permits and inductions completed." },
  { num: "04", icon: HardHat, title: "Site Execution", desc: "Deployment with full supervision, monitoring and documentation." },
  { num: "05", icon: Award, title: "Handover", desc: "Quality documentation, lessons learned and project closeout." },
];

function MethodologySection() {
  return (
    <section className="border-y border-border bg-surface/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-14 text-center">
          <Eyebrow>Our Methodology</Eyebrow>
          <h2 className="mt-5 text-4xl font-extrabold leading-[1.06] md:text-5xl">
            Structured delivery.{" "}
            <span className="text-gradient-energy">Consistent results.</span>
          </h2>
        </Reveal>

        <div className="relative">
          <div className="absolute left-0 right-0 top-9 hidden h-px bg-linear-to-r from-transparent via-primary/20 to-transparent lg:block" />
          <div className="grid gap-8 lg:grid-cols-5">
            {methodology.map((step, i) => (
              <Reveal key={step.num} delay={i * 0.08}>
                <div className="group flex flex-col items-center text-center lg:px-2">
                  <div className="relative z-10 mb-5 grid h-[68px] w-[68px] place-items-center rounded-full border-2 border-border bg-white shadow-sm transition group-hover:border-energy group-hover:shadow-elevated">
                    <step.icon className="h-6 w-6 text-primary transition group-hover:text-energy" />
                    <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-primary text-[9px] font-bold text-white">
                      {step.num}
                    </span>
                  </div>
                  <div className="font-display text-sm font-bold">{step.title}</div>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── PROJECT TYPES ───────────────────────────────────────────────────────── */

const projectTypes = [
  { icon: Zap, title: "Refineries & Process Plants" },
  { icon: Settings2, title: "LNG & Gas Facilities" },
  { icon: Building2, title: "Petrochemical Plants" },
  { icon: TrendingUp, title: "Power Generation" },
  { icon: Package, title: "Pipelines & Terminals" },
  { icon: Wrench, title: "Offshore & Marine" },
];

function ProjectTypesSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Project Experience</Eyebrow>
            <h2 className="mt-5 text-4xl font-extrabold leading-[1.06] md:text-5xl">
              Experienced across all{" "}
              <span className="text-gradient-energy">facility types.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Our industrial service teams have been deployed across Kuwait&apos;s and the
              GCC&apos;s most demanding facilities — from high-pressure refineries to offshore
              platforms and government infrastructure programs.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {projectTypes.map((pt, i) => (
                <motion.div
                  key={pt.title}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 rounded-xl border border-border bg-white p-3.5 shadow-sm"
                >
                  <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary/8 text-primary">
                    <pt.icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-semibold">{pt.title}</span>
                </motion.div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-white shadow-elevated">
              <img
                src={pRefinery}
                alt="Industrial refinery project execution"
                loading="lazy"
                className="h-[460px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy/70 via-transparent to-transparent" />
              <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/50 bg-white/85 p-4 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-energy/14 text-primary">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-display text-sm font-bold">Safety-First Execution</div>
                    <div className="text-xs text-muted-foreground">HSE embedded in every scope — zero compromise</div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─── SAFETY ──────────────────────────────────────────────────────────────── */

function SafetySection() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-navy py-24">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="absolute -top-32 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-radial from-energy/14 to-transparent blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal className="mb-12 text-center">
          <Eyebrow light>HSE &amp; Quality</Eyebrow>
          <h2 className="mt-5 text-4xl font-extrabold leading-[1.06] text-white md:text-5xl">
            Safety is not a deliverable.
            <br />
            <span className="text-energy">It is our culture.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/55">
            Every Nexora industrial service is planned, executed and handed over under a
            structured HSE framework aligned to Kuwait and GCC operator requirements.
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Shield, title: "Permit-to-Work", desc: "All personnel trained in Kuwait oil sector PTW requirements." },
            { icon: HardHat, title: "PPE Compliance", desc: "Full personal protective equipment provided and enforced." },
            { icon: ClipboardList, title: "Toolbox Talks", desc: "Daily hazard identification and safety briefings on every shift." },
            { icon: Award, title: "Incident Reporting", desc: "Zero-tolerance near-miss reporting and root cause analysis." },
          ].map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="group rounded-2xl border border-white/10 bg-white/6 p-6 backdrop-blur transition hover:border-energy/30 hover:bg-white/10">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-energy/14 text-energy">
                  <item.icon className="h-5 w-5" />
                </div>
                <div className="mt-4 font-display text-sm font-bold text-white">{item.title}</div>
                <p className="mt-2 text-xs leading-relaxed text-white/50">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ─────────────────────────────────────────────────────────────────── */

function ServicesCTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="rounded-[2rem] border border-border bg-white p-8 text-center shadow-elevated md:p-12">
            <Eyebrow>Get In Touch</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold md:text-4xl">
              Ready to discuss your industrial{" "}
              <span className="text-gradient-energy">service requirement?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
              Tell us about your project and we&apos;ll propose a service delivery plan tailored
              to your facility, timeline and workforce requirements.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground transition hover:bg-primary/90 btn-glow-blue"
              >
                Request a Proposal <Send className="h-4 w-4" />
              </Link>
              <Link
                to="/manpower"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-bold text-foreground transition hover:border-energy-soft hover:text-primary"
              >
                View Manpower Solutions <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
