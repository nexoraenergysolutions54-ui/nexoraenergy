import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Anchor,
  ArrowRight,
  ArrowUpRight,
  Award,
  BarChart3,
  Building2,
  CheckCircle2,
  CheckSquare,
  ChevronRight,
  ClipboardList,
  Cpu,
  Factory,
  FileText,
  Flame,
  Globe,
  HardHat,
  Landmark,
  Layers,
  Network,
  Package,
  Settings2,
  Shield,
  Ship,
  Target,
  Timer,
  TrendingUp,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import { Counter } from "@/components/Counter";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import about from "@/assets/about-engineers.jpg";
import hero from "@/assets/hero-refinery.jpg";
import pEng from "@/assets/project-engineering.jpg";
import pMaint from "@/assets/project-maintenance.jpg";
import pPipeline from "@/assets/project-pipeline.jpg";
import pPlant from "@/assets/project-plant.jpg";
import pRefinery from "@/assets/project-refinery.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Nexora Energy Solutions | Technical Manpower & Industrial Solutions — Kuwait & GCC",
      },
      {
        name: "description",
        content:
          "Nexora Energy Solutions delivers technical manpower, industrial services and procurement solutions for energy, LNG, petrochemical, infrastructure and EPC projects across the GCC.",
      },
      { property: "og:title", content: "Nexora Energy Solutions" },
      {
        property: "og:description",
        content:
          "Technical Manpower & Industrial Solutions Partner for energy, LNG, petrochemical and EPC projects across Kuwait and the GCC.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-energy-soft bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-primary backdrop-blur">
      <span className="h-1.5 w-1.5 rounded-full bg-energy" />
      {children}
    </span>
  );
}

function Home() {
  return (
    <Layout>
      <HeroSection />
      <TrustedBySection />
      <CoreSolutionsSection />
      <WorkforceSection />
      <DeploymentProcessSection />
      <IndustriesSection />
      <IndustrialServicesSection />
      <ProductsProcurementSection />
      <WhyNexoraSection />
      <GlobalPartnershipsSection />
      <FinalCTASection />
    </Layout>
  );
}

/* ─── SECTION 1: HERO ─────────────────────────────────────────────────────── */

function HeroSection() {
  const metrics = [
    { value: "500+", label: "Available Workforce" },
    { value: "50+", label: "Technical Disciplines" },
    { value: "24/7", label: "Deployment Support" },
    { value: "GCC", label: "Regional Coverage" },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Industrial energy facility operations"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-linear-to-r from-navy/92 via-navy/80 to-navy/55" />
        <div className="absolute inset-0 bg-linear-to-t from-navy/60 via-transparent to-transparent" />
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-10" />

      {/* Decorative glow */}
      <div className="absolute -top-40 right-0 h-[46rem] w-[46rem] rounded-full bg-radial from-energy/20 to-transparent blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-20 pt-36">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 self-start rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-white backdrop-blur"
        >
          <span className="h-2 w-2 animate-pulse-glow rounded-full bg-energy" />
          Technical Manpower &amp; Industrial Solutions Partner — GCC
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="mt-8 max-w-4xl font-display text-5xl font-extrabold leading-[1.02] text-white md:text-6xl lg:text-[72px]"
        >
          Technical Manpower Solutions{" "}
          <span className="text-energy">For Critical Energy Projects</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="mt-7 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl"
        >
          Delivering skilled technical manpower, industrial support services and procurement
          solutions for energy, LNG, petrochemical, infrastructure and industrial sectors across the
          GCC.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.34 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            to="/manpower"
            className="group inline-flex items-center gap-2 rounded-full bg-energy px-7 py-4 text-sm font-bold text-navy transition-all hover:-translate-y-0.5 hover:bg-energy/90 btn-glow-teal"
          >
            Request Manpower
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur transition-all hover:border-white/50 hover:bg-white/18"
          >
            Request Proposal
            <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </motion.div>

        {/* Metrics row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-2xl border border-white/15 bg-white/8 p-5 text-center backdrop-blur"
            >
              <div className="font-display text-3xl font-extrabold text-white">{m.value}</div>
              <div className="mt-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/55">
                {m.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-background to-transparent" />
    </section>
  );
}

/* ─── SECTION 2: TRUSTED BY ───────────────────────────────────────────────── */

const clients = [
  "QatarEnergy",
  "QatarEnergy LNG",
  "KOC",
  "KNPC",
  "ABB",
  "GE",
  "Technip",
  "L&T",
  "CCC",
  "Milaha",
  "QAFCO",
  "QAPCO",
  "QChem",
  "HBK Engineering",
];

function TrustedBySection() {
  const doubled = [...clients, ...clients];
  return (
    <section className="border-y border-border bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="mb-10 text-center text-xs font-bold uppercase tracking-[0.28em] text-muted-foreground">
            Trusted By Industry Leaders
          </p>
        </Reveal>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee gap-0">
          {doubled.map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex shrink-0 items-center px-8"
            >
              <span className="whitespace-nowrap font-display text-sm font-bold tracking-wide text-foreground/35 transition duration-300 hover:text-foreground/70">
                {name}
              </span>
              <span className="ml-8 h-1 w-1 rounded-full bg-border" />
            </div>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-linear-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-linear-to-l from-white to-transparent" />
      </div>
    </section>
  );
}

/* ─── SECTION 3: CORE SOLUTIONS ──────────────────────────────────────────── */

function CoreSolutionsSection() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-14 text-center">
          <Eyebrow>Our Core Solutions</Eyebrow>
          <h2 className="mt-5 text-4xl font-extrabold leading-[1.06] md:text-6xl">
            Three pillars.{" "}
            <span className="text-gradient-energy">One reliable partner.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Our business is structured to serve every layer of your project — from workforce to
            industrial support to supply chain.
          </p>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-3">
          {/* PRIMARY — Technical Manpower (spans 2 rows visually, full prominence) */}
          <Reveal className="lg:row-span-2">
            <Link
              to="/manpower"
              className="group relative flex h-full min-h-[520px] flex-col overflow-hidden rounded-[2rem] border border-border bg-navy"
            >
              <img
                src={pEng}
                alt="Technical engineers at industrial site"
                className="absolute inset-0 h-full w-full object-cover opacity-40 transition duration-700 group-hover:scale-105 group-hover:opacity-50"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy via-navy/60 to-transparent" />
              <div className="relative flex h-full flex-col justify-end p-8">
                <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-energy/30 bg-energy/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-energy">
                  <span className="h-1.5 w-1.5 rounded-full bg-energy" />
                  Primary Solution · 70%
                </div>
                <div className="mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-energy/20 text-energy ring-1 ring-energy/30">
                  <HardHat className="h-7 w-7" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white md:text-3xl">
                  Technical Manpower Solutions
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65">
                  Qualified engineers, technicians and skilled tradespeople for energy, LNG,
                  petrochemical and infrastructure projects. Rapid deployment. Full compliance.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-energy">
                  Explore Manpower Solutions
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </Reveal>

          {/* SECONDARY — Industrial Services */}
          <Reveal delay={0.08}>
            <Link
              to="/industrial-services"
              className="group relative flex min-h-[245px] flex-col overflow-hidden rounded-[2rem] border border-border bg-card"
            >
              <img
                src={pMaint}
                alt="Industrial maintenance operations"
                className="absolute inset-0 h-full w-full object-cover opacity-25 transition duration-700 group-hover:scale-105 group-hover:opacity-35"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-br from-white/90 to-white/60" />
              <div className="relative flex h-full flex-col justify-between p-7">
                <div>
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/8 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
                    Secondary Solution
                  </div>
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/8 text-primary ring-1 ring-primary/10">
                    <Wrench className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold">Industrial Services</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Shutdown, turnaround, maintenance and project site support for critical
                    industrial facilities.
                  </p>
                </div>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary">
                  View Services
                  <ChevronRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </div>
              </div>
            </Link>
          </Reveal>

          {/* SUPPORTING — Products */}
          <Reveal delay={0.16}>
            <Link
              to="/products"
              className="group relative flex min-h-[245px] flex-col overflow-hidden rounded-[2rem] border border-border bg-card"
            >
              <img
                src={pPlant}
                alt="Industrial plant and procurement"
                className="absolute inset-0 h-full w-full object-cover opacity-20 transition duration-700 group-hover:scale-105 group-hover:opacity-30"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-br from-white/92 to-white/65" />
              <div className="relative flex h-full flex-col justify-between p-7">
                <div>
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                    Supporting Solution
                  </div>
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/8 text-primary ring-1 ring-primary/10">
                    <Package className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold">Products &amp; Procurement</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Industrial valves, instrumentation and electrical products. Capability-driven
                    supply for project needs.
                  </p>
                </div>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary">
                  View Products
                  <ChevronRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 4: WORKFORCE CATEGORIES ────────────────────────────────────── */

const disciplineGroups = [
  {
    id: "engineers",
    label: "Engineers",
    roles: [
      { title: "Mechanical Engineers", icon: Settings2, desc: "Piping, rotating equipment, pressure vessels" },
      { title: "Electrical Engineers", icon: Zap, desc: "HV/LV systems, switchgear, drives" },
      { title: "Instrumentation Engineers", icon: BarChart3, desc: "Field instruments, DCS, safety systems" },
      { title: "Civil Engineers", icon: Building2, desc: "Structural, foundations, civil works" },
      { title: "Project Engineers", icon: ClipboardList, desc: "Coordination, documentation, reporting" },
    ],
  },
  {
    id: "management",
    label: "Management",
    roles: [
      { title: "Project Managers", icon: Target, desc: "Full project lifecycle control" },
      { title: "Site Supervisors", icon: HardHat, desc: "Day-to-day field supervision" },
      { title: "QA/QC Inspectors", icon: CheckSquare, desc: "Quality assurance and documentation" },
      { title: "HSE Officers", icon: Shield, desc: "Safety, health and environmental compliance" },
    ],
  },
  {
    id: "trades",
    label: "Technical Trades",
    roles: [
      { title: "Welders", icon: Flame, desc: "SMAW, GTAW, GMAW certified welders" },
      { title: "Fabricators", icon: Wrench, desc: "Structural and pipe fabrication" },
      { title: "Pipe Fitters", icon: Layers, desc: "Piping installation and alignment" },
      { title: "Riggers", icon: Anchor, desc: "Heavy lift and rigging operations" },
      { title: "Scaffolders", icon: Network, desc: "Access scaffolding erection and dismantling" },
    ],
  },
  {
    id: "operations",
    label: "Operations",
    roles: [
      { title: "Operators", icon: Cpu, desc: "Plant and field operations personnel" },
      { title: "Helpers", icon: Users, desc: "General labor and trade support" },
      { title: "Administrative Staff", icon: FileText, desc: "Site admin, logistics, coordination" },
    ],
  },
];

function WorkforceSection() {
  const [activeGroup, setActiveGroup] = useState("engineers");
  const group = disciplineGroups.find((g) => g.id === activeGroup)!;

  return (
    <section className="border-y border-border bg-surface/60 py-28">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal className="mb-12 text-center">
          <Eyebrow>Technical Manpower Solutions</Eyebrow>
          <h2 className="mt-5 text-4xl font-extrabold leading-[1.06] md:text-6xl">
            50+ disciplines.{" "}
            <span className="text-gradient-energy">One deployment partner.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            From licensed engineers to certified tradespeople — every discipline your project
            requires, available for rapid mobilisation across the GCC.
          </p>
        </Reveal>

        {/* Tab filters */}
        <Reveal>
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {disciplineGroups.map((g) => (
              <button
                key={g.id}
                onClick={() => setActiveGroup(g.id)}
                className={`rounded-full border px-5 py-2.5 text-sm font-bold transition-all ${
                  activeGroup === g.id
                    ? "border-primary bg-primary text-primary-foreground btn-glow-blue"
                    : "border-border bg-white text-muted-foreground hover:border-energy-soft hover:text-primary"
                }`}
              >
                {g.label}
                <span
                  className={`ml-2 rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
                    activeGroup === g.id ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {g.roles.length}
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div
          key={activeGroup}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        >
          {group.roles.map((role, i) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="group rounded-2xl border border-border bg-white p-5 shadow-sm transition hover:border-energy-soft hover:shadow-elevated hover:-translate-y-1"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/8 text-primary ring-1 ring-primary/10 transition group-hover:bg-energy/14 group-hover:text-primary group-hover:ring-energy/20">
                <role.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-sm font-bold leading-snug">{role.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{role.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <Reveal className="mt-10 text-center">
          <Link
            to="/manpower"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground transition hover:bg-primary/90 btn-glow-blue"
          >
            View Full Workforce Capabilities <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── SECTION 5: DEPLOYMENT PROCESS ──────────────────────────────────────── */

const deploymentSteps = [
  {
    num: "01",
    icon: ClipboardList,
    title: "Requirement Analysis",
    desc: "We review your project scope, discipline requirements, site conditions and timeline.",
  },
  {
    num: "02",
    icon: Users,
    title: "Candidate Selection",
    desc: "Our database is matched to your requirements. Shortlisted profiles shared for approval.",
  },
  {
    num: "03",
    icon: CheckCircle2,
    title: "Compliance Verification",
    desc: "All credentials, certifications, medical fitness and visa documentation are verified.",
  },
  {
    num: "04",
    icon: Globe,
    title: "Mobilization",
    desc: "Travel, accommodation, site induction and logistics coordinated end-to-end.",
  },
  {
    num: "05",
    icon: HardHat,
    title: "Project Deployment",
    desc: "Workforce deployed on-site with ongoing support, performance tracking and HSE oversight.",
  },
];

function DeploymentProcessSection() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-16 text-center">
          <Eyebrow>Deployment Process</Eyebrow>
          <h2 className="mt-5 text-4xl font-extrabold leading-[1.06] md:text-6xl">
            From requirement to{" "}
            <span className="text-gradient-energy">project-ready workforce.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            A structured, compliance-driven process designed to minimise your mobilisation timeline
            while maintaining the highest workforce standards.
          </p>
        </Reveal>

        {/* Timeline */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="absolute left-0 right-0 top-9 hidden h-0.5 bg-linear-to-r from-primary/20 via-energy/40 to-primary/20 lg:block" />

          <div className="grid gap-6 lg:grid-cols-5">
            {deploymentSteps.map((step, i) => (
              <Reveal key={step.num} delay={i * 0.08}>
                <div className="group relative flex flex-col items-center text-center lg:px-2">
                  {/* Circle */}
                  <div className="relative z-10 mb-6 grid h-[72px] w-[72px] place-items-center rounded-full border-2 border-border bg-white shadow-sm transition duration-300 group-hover:border-energy group-hover:shadow-elevated">
                    <step.icon className="h-7 w-7 text-primary transition group-hover:text-energy" />
                    <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-primary text-[9px] font-bold text-white">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="font-display text-base font-bold">{step.title}</h3>
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

/* ─── SECTION 6: INDUSTRIES ───────────────────────────────────────────────── */

const industriesList = [
  { icon: Factory, title: "Oil & Gas", image: pRefinery },
  { icon: Flame, title: "LNG", image: hero },
  { icon: Cpu, title: "Petrochemical", image: pPlant },
  { icon: Zap, title: "Power & Utilities", image: pEng },
  { icon: Network, title: "Infrastructure", image: pPipeline },
  { icon: Ship, title: "Marine", image: about },
  { icon: Landmark, title: "Government", image: pMaint },
  { icon: Building2, title: "Manufacturing", image: pRefinery },
];

function IndustriesSection() {
  return (
    <section className="border-y border-border bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-14 text-center">
          <Eyebrow>Industries We Serve</Eyebrow>
          <h2 className="mt-5 text-4xl font-extrabold leading-[1.06] md:text-6xl">
            Built for GCC&apos;s{" "}
            <span className="text-gradient-energy">most demanding sectors.</span>
          </h2>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industriesList.map((industry, i) => (
            <Reveal key={industry.title} delay={i * 0.04}>
              <Link
                to="/industries"
                className="group block overflow-hidden rounded-[1.5rem] border border-border"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-navy/80 via-navy/20 to-transparent" />
                  <industry.icon className="absolute left-4 top-4 h-6 w-6 text-white/80" />
                  <div className="absolute inset-x-4 bottom-4">
                    <div className="font-display text-base font-bold text-white">
                      {industry.title}
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary transition hover:text-primary/80"
          >
            View all industries <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── SECTION 7: INDUSTRIAL SERVICES ─────────────────────────────────────── */

const industrialServices = [
  {
    icon: Timer,
    title: "Shutdown Support",
    desc: "Planned and emergency shutdown execution with certified specialist crews.",
  },
  {
    icon: TrendingUp,
    title: "Turnaround Support",
    desc: "Full turnaround manpower packages — planning through re-commissioning.",
  },
  {
    icon: Wrench,
    title: "Maintenance Support",
    desc: "Corrective, preventive and predictive maintenance services for critical assets.",
  },
  {
    icon: HardHat,
    title: "Project Support",
    desc: "Site execution crews for greenfield, brownfield and capital project delivery.",
  },
  {
    icon: Building2,
    title: "Site Services",
    desc: "Scaffolding, insulation, painting, civil works and general site services.",
  },
  {
    icon: Package,
    title: "Procurement Support",
    desc: "Spare parts sourcing, vendor coordination and documented supply chain control.",
  },
  {
    icon: Settings2,
    title: "Engineering Support",
    desc: "On-site technical engineering, inspections, and documentation services.",
  },
];

function IndustrialServicesSection() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <Eyebrow>Industrial Services</Eyebrow>
            <h2 className="mt-5 max-w-2xl text-4xl font-extrabold leading-[1.06] md:text-6xl">
              Full lifecycle{" "}
              <span className="text-gradient-energy">site support.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <Link
              to="/industrial-services"
              className="inline-flex items-center gap-2 font-bold text-primary"
            >
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industrialServices.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.05}>
              <motion.article
                whileHover={{ y: -5 }}
                className="group h-full rounded-2xl border border-border bg-white p-6 shadow-sm transition hover:border-energy-soft hover:shadow-elevated"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/8 text-primary ring-1 ring-primary/10 transition group-hover:bg-energy/14 group-hover:ring-energy/20">
                  <service.icon className="h-5.5 w-5.5" />
                </div>
                <h3 className="mt-5 font-display text-base font-bold">{service.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{service.desc}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 8: PRODUCTS & PROCUREMENT ──────────────────────────────────── */

const productCategories = [
  { title: "Ball Valves", spec: "API 6D | ASME B16.34 | Class 150–2500" },
  { title: "Butterfly Valves", spec: "API 609 | ASME B16.5 | Wafer, Lug & Flanged" },
  { title: "Gate Valves", spec: "API 600 / API 602 | Full & Reduced Bore" },
  { title: "Globe Valves", spec: "API 623 | ASME B16.10 | Rising Stem" },
  { title: "Control Valves", spec: "ANSI/FCI 70-2 | Pneumatic & Electric Actuators" },
  { title: "Instrumentation", spec: "Pressure, Temperature, Flow & Level instruments" },
  { title: "Electrical Products", spec: "Switchgear, LV/MV panels, cables & accessories" },
];

function ProductsProcurementSection() {
  return (
    <section className="border-y border-border bg-surface/60 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <Eyebrow>Products &amp; Procurement</Eyebrow>
            <h2 className="mt-5 max-w-2xl text-4xl font-extrabold leading-[1.06] md:text-6xl">
              Supply capability for{" "}
              <span className="text-gradient-energy">industrial projects.</span>
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
              Not an ecommerce store — a supply capability built for procurement teams, project
              engineers and EPC contractors requiring compliant industrial products.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 font-bold text-primary"
            >
              View product catalogue <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {productCategories.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.04}>
              <div className="group h-full rounded-2xl border border-border bg-white p-5 shadow-sm transition hover:border-primary/30 hover:shadow-elevated hover:-translate-y-0.5">
                <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-primary/8 text-primary ring-1 ring-primary/10">
                  <Package className="h-5 w-5" />
                </div>
                <div className="font-display text-sm font-bold">{p.title}</div>
                <div className="mt-2 text-xs leading-relaxed text-muted-foreground">{p.spec}</div>
              </div>
            </Reveal>
          ))}
          {/* Enquire card */}
          <Reveal delay={0.28}>
            <Link
              to="/contact"
              className="group flex min-h-[120px] flex-col items-center justify-center rounded-2xl border border-dashed border-primary/30 bg-primary/4 p-5 text-center transition hover:border-primary hover:bg-primary/8"
            >
              <ArrowUpRight className="mb-2 h-6 w-6 text-primary" />
              <div className="font-display text-sm font-bold text-primary">Enquire Supply</div>
              <div className="mt-1 text-xs text-muted-foreground">Request supply specifications</div>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 9: WHY NEXORA ───────────────────────────────────────────────── */

const whyNexora = [
  {
    icon: Timer,
    title: "Fast Mobilization",
    desc: "Rapid deployment within project timelines. Our workforce is pre-screened and document-ready.",
  },
  {
    icon: Award,
    title: "Qualified Workforce",
    desc: "All personnel hold verified certifications, trade tests and industry experience.",
  },
  {
    icon: Shield,
    title: "Industry Compliance",
    desc: "CODO, MOI, health screening and Kuwait/GCC regulatory compliance managed end-to-end.",
  },
  {
    icon: Globe,
    title: "Regional Reach",
    desc: "Active deployment capability across Kuwait, Qatar, Saudi Arabia, UAE, Bahrain and Oman.",
  },
  {
    icon: Network,
    title: "Strategic Partnerships",
    desc: "Global sourcing networks connecting you to international manpower and supply chains.",
  },
  {
    icon: Target,
    title: "Project Reliability",
    desc: "Proven track record supporting KOC, KNPC, EPC contractors and government programs.",
  },
];

function WhyNexoraSection() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-14 text-center">
          <Eyebrow>Why Nexora</Eyebrow>
          <h2 className="mt-5 text-4xl font-extrabold leading-[1.06] md:text-6xl">
            Why project teams choose{" "}
            <span className="text-gradient-energy">Nexora Energy Solutions.</span>
          </h2>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyNexora.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -6 }}
                className="group h-full rounded-[1.75rem] border border-border bg-white p-7 shadow-sm enterprise-card"
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/8 text-primary ring-1 ring-primary/10 transition group-hover:bg-energy/14 group-hover:ring-energy/20">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 10: GLOBAL PARTNERSHIPS ────────────────────────────────────── */

const gccCountries = [
  { code: "KW", name: "Kuwait", note: "Headquarters" },
  { code: "QA", name: "Qatar", note: "QatarEnergy / LNG" },
  { code: "SA", name: "Saudi Arabia", note: "Aramco / SABIC" },
  { code: "AE", name: "UAE", note: "ADNOC / EPC" },
  { code: "BH", name: "Bahrain", note: "BAPCO / GCC Hub" },
  { code: "OM", name: "Oman", note: "PDO / OQ" },
];

function GlobalPartnershipsSection() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-navy py-28">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="absolute -top-40 left-1/2 h-[50rem] w-[50rem] -translate-x-1/2 rounded-full bg-radial from-energy/15 to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal className="mb-14 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-white/70 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-energy" />
            Global Partnerships
          </span>
          <h2 className="mt-5 text-4xl font-extrabold leading-[1.06] text-white md:text-6xl">
            Regional reach.{" "}
            <span className="text-energy">International standards.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/60">
            Nexora sources from international partner networks while maintaining full compliance
            with Kuwait and GCC regulatory requirements.
          </p>
        </Reveal>

        {/* GCC Country Grid */}
        <div className="mb-16 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {gccCountries.map((c, i) => (
            <Reveal key={c.code} delay={i * 0.05}>
              <div className="group rounded-2xl border border-white/10 bg-white/6 p-5 text-center backdrop-blur transition hover:border-energy/30 hover:bg-white/10">
                <div className="font-display text-2xl font-extrabold text-energy">{c.code}</div>
                <div className="mt-1 text-sm font-bold text-white">{c.name}</div>
                <div className="mt-1 text-xs text-white/45">{c.note}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Partnership stats row */}
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-[2rem] border border-white/10 md:grid-cols-4">
          {[
            { v: 500, s: "+", l: "Workforce Pool" },
            { v: 50, s: "+", l: "Technical Disciplines" },
            { v: 6, s: "", l: "GCC Countries" },
            { v: 100, s: "%", l: "Compliance Rate" },
          ].map((stat, i) => (
            <Reveal key={stat.l} delay={i * 0.05}>
              <div className="bg-white/5 p-7 text-center">
                <div className="font-display text-4xl font-extrabold text-white">
                  <Counter value={stat.v} suffix={stat.s} />
                </div>
                <div className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-white/45">
                  {stat.l}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SECTION 11: FINAL CTA ───────────────────────────────────────────────── */

function FinalCTASection() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-navy px-8 py-20 text-center md:px-16">
          <div className="absolute inset-0 grid-bg opacity-15" />
          <div className="absolute -top-32 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-radial from-energy/18 to-transparent blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[24rem] w-[24rem] rounded-full bg-radial from-primary/18 to-transparent blur-3xl" />
          <Reveal>
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-energy" />
                Partner With Nexora
              </span>
              <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-extrabold leading-[1.06] text-white md:text-6xl">
                Ready To Strengthen Your Next Project?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/60">
                Speak to our team about technical manpower, industrial services or procurement
                support for your energy or EPC project.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link
                  to="/manpower"
                  className="inline-flex items-center gap-2 rounded-full bg-energy px-8 py-4 text-sm font-bold text-navy transition hover:bg-energy/90 btn-glow-teal"
                >
                  Request Manpower <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur transition hover:border-white/40 hover:bg-white/18"
                >
                  Contact Nexora <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
