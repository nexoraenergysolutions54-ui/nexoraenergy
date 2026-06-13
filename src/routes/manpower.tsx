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
  Send,
  Settings2,
  Shield,
  Ship,
  Target,
  Timer,
  Upload,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { site } from "@/lib/enterprise-content";
import { seoHead } from "@/lib/seo";
import about from "@/assets/about-engineers.jpg";
import manpowerHeroCrewBriefing from "@/assets/manpower-hero-crew-briefing.png";
import pEng from "@/assets/project-engineering.jpg";
import pMaint from "@/assets/project-maintenance.jpg";
import pPipeline from "@/assets/project-pipeline.jpg";
import pPlant from "@/assets/project-plant.jpg";
import pRefinery from "@/assets/project-refinery.jpg";

export const Route = createFileRoute("/manpower")({
  head: () => seoHead("/manpower"),
  component: ManpowerPage,
});

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  if (light) {
    return (
      <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-white/70 backdrop-blur">
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

function ManpowerPage() {
  return (
    <Layout>
      <ManpowerHero />
      <ManpowerOverview />
      <WorkforceCategories />
      <ComplianceSection />
      <DeploymentProcess />
      <IndustriesSupported />
      <ProjectSupport />
      <RequestManpowerForm />
    </Layout>
  );
}

/* --- HERO ------------------------------------------------------------------ */

function ManpowerHero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={manpowerHeroCrewBriefing}
          alt="Industrial workforce attending a technical manpower site briefing"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-linear-to-r from-navy/88 via-navy/68 to-navy/28" />
        <div className="absolute inset-0 bg-linear-to-t from-navy/38 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-6 pb-16 pt-36">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mb-8 self-start"
        >
          <Eyebrow light>Technical Manpower Solutions - GCC</Eyebrow>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-4xl font-display text-5xl font-extrabold leading-[1.02] text-white md:text-6xl lg:text-[70px]"
        >
          Expert Technical Manpower{" "}
          <span className="text-energy">For Energy, LNG &amp; Industrial Projects</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="mt-7 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl"
        >
          Nexora delivers pre-qualified engineers, skilled technicians and certified tradespeople
          for energy, LNG, petrochemical, infrastructure and EPC projects across Qatar and the GCC.
          Rapid mobilisation. Full compliance. Proven delivery.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.34 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#request-form"
            className="inline-flex items-center gap-2 rounded-full bg-energy px-7 py-4 text-sm font-bold text-navy transition-all hover:-translate-y-0.5 hover:bg-energy/90 btn-glow-teal"
          >
            Request Manpower <ArrowRight className="h-4 w-4" />
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur transition hover:border-white/40 hover:bg-white/16"
          >
            Discuss a Project <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {[
            { v: 500, s: "+", l: "Workforce Pool" },
            { v: 50, s: "+", l: "Technical Disciplines" },
            { v: 6, s: "", l: "GCC Countries" },
            { v: 100, s: "%", l: "Compliance Verified" },
          ].map((stat) => (
            <div
              key={stat.l}
              className="rounded-2xl border border-white/12 bg-white/7 p-5 text-center backdrop-blur"
            >
              <div className="font-display text-3xl font-extrabold text-white">
                <Counter value={stat.v} suffix={stat.s} />
              </div>
              <div className="mt-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white/50">
                {stat.l}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* --- OVERVIEW -------------------------------------------------------------- */

function ManpowerOverview() {
  const highlights = [
    "Pre-screened, document-ready workforce",
    "Rapid mobilisation within project timelines",
    "Full Qatar and GCC visa compliance",
    "24/7 deployment support and coordination",
    "On-site HSE monitoring and oversight",
    "Performance tracking and reporting",
  ];

  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        <Reveal>
          <Eyebrow>Why Nexora Manpower</Eyebrow>
          <h2 className="mt-5 text-4xl font-extrabold leading-[1.06] md:text-5xl">
            The manpower partner trusted by{" "}
            <span className="text-gradient-energy">Qatar and GCC energy clients.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Nexora maintains an active pool of pre-qualified technical personnel available for rapid
            deployment across Qatar, Kuwait, Saudi Arabia, UAE, Bahrain and Oman. Every candidate is
            skills-assessed, document-verified and HSE briefed before mobilisation.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((h) => (
              <div
                key={h}
                className="flex items-center gap-3 rounded-xl border border-border bg-white p-3.5"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-energy" />
                <span className="text-sm font-semibold">{h}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-linear-to-br from-primary/14 to-energy/18 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-elevated">
              <img
                src={about}
                alt="Engineers reviewing technical plans on site"
                loading="lazy"
                className="h-[480px] w-full object-cover"
              />
              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/60 bg-white/85 p-4 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-energy/14 text-primary">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-display text-sm font-bold">
                      QatarEnergy &amp; GCC Operator Aligned
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Workforce standards matched to operator requirements
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --- WORKFORCE CATEGORIES -------------------------------------------------- */

const allCategories = [
  {
    group: "Engineering Disciplines",
    color: "text-primary",
    bg: "bg-primary/8",
    ring: "ring-primary/12",
    roles: [
      {
        icon: Settings2,
        title: "Mechanical Engineers",
        spec: "ASME, PED, Rotating Equipment, Static Plant",
      },
      {
        icon: Zap,
        title: "Electrical Engineers",
        spec: "HV/LV, Protection, Power Distribution, Drives",
      },
      {
        icon: BarChart3,
        title: "Instrumentation Engineers",
        spec: "DCS, ESD, SIS, SCADA, Field Instruments",
      },
      {
        icon: Building2,
        title: "Civil Engineers",
        spec: "Structural, Foundations, Civil Infrastructure",
      },
      {
        icon: ClipboardList,
        title: "Project Engineers",
        spec: "Scope Control, Coordination, Documentation",
      },
    ],
  },
  {
    group: "Management & Supervision",
    color: "text-navy",
    bg: "bg-navy/8",
    ring: "ring-navy/12",
    roles: [
      {
        icon: Target,
        title: "Project Managers",
        spec: "Full Lifecycle, Stakeholder, Cost & Schedule",
      },
      {
        icon: HardHat,
        title: "Site Supervisors",
        spec: "Day-to-Day Execution, Sub-Contractor Management",
      },
      {
        icon: CheckSquare,
        title: "QA/QC Inspectors",
        spec: "NDT, Weld Inspection, Pressure Testing, ITP",
      },
      {
        icon: Shield,
        title: "HSE Officers",
        spec: "PTW, Incident Investigation, Toolbox Talks, Audits",
      },
    ],
  },
  {
    group: "Technical Trades",
    color: "text-energy",
    bg: "bg-energy/8",
    ring: "ring-energy/12",
    roles: [
      { icon: Flame, title: "Welders", spec: "SMAW, GTAW, GMAW - ASME IX / AWS / API 1104" },
      {
        icon: Wrench,
        title: "Fabricators",
        spec: "Structural Steel, Piping Spools, Pressure Parts",
      },
      { icon: Layers, title: "Pipe Fitters", spec: "CS, SS, Alloy - Hydro-tested, Alignment" },
      { icon: Anchor, title: "Riggers", spec: "Heavy Lift, Crane Operations, Slinging" },
      { icon: Network, title: "Scaffolders", spec: "CISRS / OPITO Certified, Inspection Ready" },
    ],
  },
  {
    group: "Operations & Support",
    color: "text-muted-foreground",
    bg: "bg-muted/50",
    ring: "ring-border",
    roles: [
      { icon: Cpu, title: "Operators", spec: "Plant Operations, DCS Operations, Panel Operators" },
      { icon: Users, title: "Helpers", spec: "General Labour, Trade Support, Material Handling" },
      {
        icon: FileText,
        title: "Administrative Staff",
        spec: "Site Admin, Document Control, Logistics Coord.",
      },
    ],
  },
];

function WorkforceCategories() {
  const [activeGroup, setActiveGroup] = useState(0);
  const current = allCategories[activeGroup];

  return (
    <section className="border-y border-border bg-surface/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-12 text-center">
          <Eyebrow>Workforce Categories</Eyebrow>
          <h2 className="mt-5 text-4xl font-extrabold leading-[1.06] md:text-5xl">
            Every discipline your project needs.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Our workforce spans 17 core categories across engineering, management, technical trades
            and operations - all available for short-term, long-term or project-based deployment.
          </p>
        </Reveal>

        {/* Group tabs */}
        <Reveal>
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {allCategories.map((g, i) => (
              <button
                key={g.group}
                onClick={() => setActiveGroup(i)}
                className={`rounded-full border px-5 py-2.5 text-sm font-bold transition-all ${
                  activeGroup === i
                    ? "border-primary bg-primary text-primary-foreground btn-glow-blue"
                    : "border-border bg-white text-muted-foreground hover:border-energy-soft hover:text-primary"
                }`}
              >
                {g.group}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div
          key={activeGroup}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        >
          {current.roles.map((role, i) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              className="group rounded-2xl border border-border bg-white p-5 shadow-sm transition hover:border-energy-soft hover:shadow-elevated hover:-translate-y-0.5"
            >
              <div
                className={`grid h-11 w-11 place-items-center rounded-xl ring-1 transition ${current.bg} ${current.color} ${current.ring} group-hover:bg-energy/12 group-hover:ring-energy/20 group-hover:text-primary`}
              >
                <role.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-sm font-bold leading-snug">{role.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{role.spec}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* --- COMPLIANCE ------------------------------------------------------------ */

const complianceItems = [
  {
    icon: Shield,
    title: "CODO Compliance",
    desc: "All manpower processed through relevant Qatar and GCC operator compliance requirements.",
  },
  {
    icon: FileText,
    title: "MOI Visa Processing",
    desc: "Ministry of Interior compliant visa applications, renewals and cancellations managed.",
  },
  {
    icon: CheckSquare,
    title: "Medical Fitness",
    desc: "Health screening, fitness-for-work certificates and vaccination records handled.",
  },
  {
    icon: Award,
    title: "Skills Verification",
    desc: "Trade tests, certification validation and experience review before deployment.",
  },
  {
    icon: HardHat,
    title: "HSE Induction",
    desc: "Site-specific HSE briefings, PPE provision and permit-to-work training completed.",
  },
  {
    icon: Globe,
    title: "GCC Mobility",
    desc: "Multi-country deployment capability across Kuwait, Qatar, Saudi Arabia, UAE, Bahrain and Oman.",
  },
];

function ComplianceSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-12 text-center">
          <Eyebrow>Compliance &amp; Standards</Eyebrow>
          <h2 className="mt-5 text-4xl font-extrabold leading-[1.06] md:text-5xl">
            Every worker. Every document.{" "}
            <span className="text-gradient-energy">Fully verified.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Nexora manages the complete compliance lifecycle - from initial documentation through to
            on-site mobilisation - eliminating administrative burden for your project team.
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {complianceItems.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -5 }}
                className="group flex gap-4 rounded-2xl border border-border bg-white p-6 shadow-sm transition hover:border-energy-soft hover:shadow-elevated"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/8 text-primary ring-1 ring-primary/10 transition group-hover:bg-energy/14 group-hover:ring-energy/20">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- DEPLOYMENT PROCESS ---------------------------------------------------- */

const steps = [
  {
    num: "01",
    icon: ClipboardList,
    title: "Requirement Analysis",
    desc: "We review scope, discipline mix, certifications, site conditions and your mobilisation schedule.",
  },
  {
    num: "02",
    icon: Users,
    title: "Candidate Selection",
    desc: "Profiles matched from active pool. Shortlist with CVs, certificates and site experience shared.",
  },
  {
    num: "03",
    icon: CheckCircle2,
    title: "Compliance Verification",
    desc: "All documents, trade tests, medical fitness and visa eligibility confirmed before approval.",
  },
  {
    num: "04",
    icon: Globe,
    title: "Mobilization",
    desc: "Travel, accommodation, site access, induction and logistics coordinated by Nexora team.",
  },
  {
    num: "05",
    icon: HardHat,
    title: "Project Deployment",
    desc: "Workforce deployed with ongoing support, performance monitoring and HSE oversight.",
  },
];

function DeploymentProcess() {
  return (
    <section className="border-y border-border bg-navy py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-16 text-center">
          <Eyebrow light>Deployment Process</Eyebrow>
          <h2 className="mt-5 text-4xl font-extrabold leading-[1.06] text-white md:text-5xl">
            From brief to boots on ground.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/55">
            A structured five-step process that minimises your mobilisation timeline while
            maintaining the highest standards of workforce quality and compliance.
          </p>
        </Reveal>

        <div className="relative">
          <div className="absolute left-0 right-0 top-9 hidden h-px bg-linear-to-r from-white/5 via-energy/30 to-white/5 lg:block" />
          <div className="grid gap-8 lg:grid-cols-5">
            {steps.map((step, i) => (
              <Reveal key={step.num} delay={i * 0.08}>
                <div className="group relative flex flex-col items-center text-center lg:px-2">
                  <div className="relative z-10 mb-6 grid h-[70px] w-[70px] place-items-center rounded-full border border-white/15 bg-white/8 backdrop-blur transition group-hover:border-energy/40 group-hover:bg-white/14">
                    <step.icon className="h-7 w-7 text-white/70 transition group-hover:text-energy" />
                    <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-energy text-[9px] font-bold text-navy">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="font-display text-sm font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/50">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- INDUSTRIES SUPPORTED -------------------------------------------------- */

const industries = [
  { icon: Factory, title: "Oil & Gas", image: pRefinery },
  { icon: Flame, title: "LNG & Gas Processing", image: pPlant },
  { icon: Cpu, title: "Petrochemical", image: pPlant },
  { icon: Zap, title: "Power & Utilities", image: pEng },
  { icon: Network, title: "Pipelines & Infrastructure", image: pPipeline },
  { icon: Ship, title: "Marine & Offshore", image: about },
  { icon: Landmark, title: "Government Projects", image: pMaint },
  { icon: Building2, title: "EPC Contractors", image: pRefinery },
];

function IndustriesSupported() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-12 text-center">
          <Eyebrow>Industries Supported</Eyebrow>
          <h2 className="mt-5 text-4xl font-extrabold leading-[1.06] md:text-5xl">
            Workforce deployed across{" "}
            <span className="text-gradient-energy">every major sector.</span>
          </h2>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind, i) => (
            <Reveal key={ind.title} delay={i * 0.04}>
              <div className="group overflow-hidden rounded-2xl border border-border">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={ind.image}
                    alt={ind.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-navy/75 via-navy/20 to-transparent" />
                  <ind.icon className="absolute left-3 top-3 h-5 w-5 text-white/80" />
                  <div className="absolute inset-x-3 bottom-3 font-display text-sm font-bold text-white">
                    {ind.title}
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

/* --- PROJECT SUPPORT ------------------------------------------------------- */

const supportItems = [
  {
    icon: HardHat,
    title: "Shutdown & Turnaround",
    desc: "Specialist crews available on short notice for planned and emergency plant shutdowns.",
  },
  {
    icon: Wrench,
    title: "EPC Project Execution",
    desc: "Multi-discipline teams for greenfield and brownfield capital project delivery.",
  },
  {
    icon: Timer,
    title: "Operations Staffing",
    desc: "Long-term operations and maintenance personnel for running facilities.",
  },
  {
    icon: Package,
    title: "Manpower Augmentation",
    desc: "Supplementary workforce to strengthen your existing site team during peak periods.",
  },
];

function ProjectSupport() {
  return (
    <section className="border-y border-border bg-surface/60 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <Reveal>
          <Eyebrow>Project Support Models</Eyebrow>
          <h2 className="mt-5 text-4xl font-extrabold leading-[1.06] md:text-5xl">
            Flexible engagement for{" "}
            <span className="text-gradient-energy">every project type.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Whether you need a single specialist or a complete multi-discipline crew, Nexora can
            structure a manpower package that fits your project scope, timeline and budget
            requirements.
          </p>
          <div className="mt-8 grid gap-4">
            {supportItems.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 rounded-xl border border-border bg-white p-4 shadow-sm"
                >
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-energy/14 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-display text-sm font-bold">{item.title}</div>
                    <div className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {item.desc}
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-white shadow-elevated">
            <img
              src={pMaint}
              alt="Technical crew at industrial project site"
              loading="lazy"
              className="h-[420px] w-full object-cover"
            />
            <div className="p-6">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Short-term contracts", check: true },
                  { label: "Long-term placements", check: true },
                  { label: "Project-based crews", check: true },
                  { label: "Turnkey manpower packages", check: true },
                ].map((i) => (
                  <div key={i.label} className="flex items-center gap-2 text-sm font-semibold">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-energy" />
                    {i.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --- REQUEST FORM ---------------------------------------------------------- */

const projectTypes = [
  "Shutdown / Turnaround",
  "EPC / Capital Project",
  "Operations & Maintenance",
  "Manpower Augmentation",
  "Other",
];

const requiredDisciplines = [
  "Mechanical Engineers",
  "Electrical Engineers",
  "Instrumentation Engineers",
  "Civil Engineers",
  "Project Managers",
  "Site Supervisors",
  "QA/QC Inspectors",
  "HSE Officers",
  "Welders",
  "Pipe Fitters",
  "Riggers / Scaffolders",
  "Operators",
];

function RequestManpowerForm() {
  const [checked, setChecked] = useState<string[]>([]);
  const toggle = (d: string) =>
    setChecked((prev) => (prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d]));

  return (
    <section id="request-form" className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal className="mb-12 text-center">
          <Eyebrow>Request Manpower</Eyebrow>
          <h2 className="mt-5 text-4xl font-extrabold leading-[1.06] md:text-5xl">
            Submit your manpower requirement.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
            Complete the form below and our team will respond within one business day with
            availability, profiles and a proposed deployment plan.
          </p>
        </Reveal>

        <Reveal>
          <form className="space-y-6 rounded-[2rem] border border-border bg-white p-6 shadow-sm md:p-10">
            {/* Contact info */}
            <div className="grid gap-4 sm:grid-cols-2">
              <FormField label="Company Name *" placeholder="e.g. KOC, Technip, L&T" />
              <FormField label="Contact Person *" placeholder="Full name" />
              <FormField label="Designation" placeholder="e.g. Project Manager" />
              <FormField label="Email Address *" type="email" placeholder="name@company.com" />
              <FormField label="Phone / WhatsApp *" placeholder="+974 or international..." />
              <div>
                <label className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                  Country
                </label>
                <select className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-energy-soft focus:ring-4 focus:ring-energy/10">
                  {["Kuwait", "Qatar", "Saudi Arabia", "UAE", "Bahrain", "Oman", "Other"].map(
                    (c) => (
                      <option key={c}>{c}</option>
                    ),
                  )}
                </select>
              </div>
            </div>

            {/* Project type */}
            <div>
              <label className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                Project Type
              </label>
              <div className="mt-3 flex flex-wrap gap-2">
                {projectTypes.map((pt) => (
                  <button
                    key={pt}
                    type="button"
                    className="rounded-full border border-border px-4 py-2 text-xs font-bold text-muted-foreground transition hover:border-primary/40 hover:text-primary"
                  >
                    {pt}
                  </button>
                ))}
              </div>
            </div>

            {/* Required disciplines */}
            <div>
              <label className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                Required Disciplines (select all that apply)
              </label>
              <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {requiredDisciplines.map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => toggle(d)}
                    className={`flex items-center gap-2 rounded-xl border px-3 py-2.5 text-left text-xs font-semibold transition ${
                      checked.includes(d)
                        ? "border-energy bg-energy/8 text-primary"
                        : "border-border bg-background text-muted-foreground hover:border-energy-soft"
                    }`}
                  >
                    <div
                      className={`grid h-4 w-4 shrink-0 place-items-center rounded border transition ${
                        checked.includes(d) ? "border-energy bg-energy text-white" : "border-border"
                      }`}
                    >
                      {checked.includes(d) && (
                        <svg className="h-2.5 w-2.5 fill-current" viewBox="0 0 12 12">
                          <path
                            d="M1 6l4 4L11 2"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* Workforce size + duration */}
            <div className="grid gap-4 sm:grid-cols-2">
              <FormField label="Estimated Workforce Size" placeholder="e.g. 10-50 personnel" />
              <FormField label="Project Duration" placeholder="e.g. 3 months, 12 months" />
              <div className="sm:col-span-2">
                <FormField
                  label="Project Location / Site"
                  placeholder="e.g. Doha, Qatar / Ras Laffan, Qatar"
                />
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                Additional Notes
              </label>
              <textarea
                rows={4}
                placeholder="Any specific skill requirements, certification standards, start dates or additional information..."
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-energy-soft focus:ring-4 focus:ring-energy/10 resize-none"
              />
            </div>

            {/* CV / attachment */}
            <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-border bg-surface/60 px-4 py-4 text-sm text-muted-foreground transition hover:border-energy-soft">
              <Upload className="h-5 w-5 shrink-0 text-primary" />
              <span>
                <span className="font-bold text-foreground">Attach specification or RFQ</span> -
                PDF, DOC (optional, max 10 MB)
              </span>
              <input type="file" accept=".pdf,.doc,.docx" className="hidden" />
            </label>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-bold text-primary-foreground transition hover:bg-primary/90 btn-glow-blue"
            >
              Submit Manpower Request <Send className="h-4 w-4" />
            </button>

            <p className="text-center text-xs text-muted-foreground">
              Our team responds within 1 business day. All enquiries are treated confidentially.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function FormField({
  label,
  type = "text",
  placeholder,
}: {
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-energy-soft focus:ring-4 focus:ring-energy/10 placeholder:text-muted-foreground/60"
      />
    </div>
  );
}
