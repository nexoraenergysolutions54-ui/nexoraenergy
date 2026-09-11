import { EnquiryForm } from "@/components/EnquiryForm";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  CheckSquare,
  ClipboardList,
  FileText,
  Flame,
  Globe,
  HardHat,
  Settings2,
  Shield,
  Target,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { seoHead } from "@/lib/seo";
import manpowerHeroCrewBriefing from "@/assets/optimized/manpower-hero-crew-briefing.webp";
import technicalManpowerTeam from "@/assets/optimized/technical-manpower-team.webp";
import industrialServicesValveTeam from "@/assets/optimized/industrial-services-valve-team.webp";

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
      <SolutionsOverview />
      <PersonnelCategories />
      <ComplianceReadiness />
      <DeploymentProcess />
      <RequestManpowerForm />
    </Layout>
  );
}

/* --- 1. HERO ---------------------------------------------------------------- */

function ManpowerHero() {
  return (
    <section className="relative min-h-[86vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={manpowerHeroCrewBriefing}
          alt="Industrial workforce attending a technical manpower site briefing"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-linear-to-r from-navy/90 via-navy/70 to-navy/32" />
        <div className="absolute inset-0 bg-linear-to-t from-navy/40 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[86vh] max-w-7xl flex-col justify-center px-6 pb-16 pt-36">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mb-8 self-start"
        >
          <Eyebrow light>Technical Manpower</Eyebrow>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-3xl font-display text-5xl font-extrabold leading-[1.05] text-white md:text-6xl lg:text-[64px]"
        >
          Technical Manpower for <span className="text-energy">Industrial Operations</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="mt-7 max-w-xl text-lg leading-relaxed text-white/72 md:text-xl"
        >
          NEXORA supports industrial workforce requirements from its base in Qatar, providing
          project-focused manpower coordination for organizations operating in Qatar, Saudi Arabia
          and Kuwait. Personnel are matched to the requested discipline, assignment scope and
          project conditions.
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
            Discuss Your Requirement <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* --- 2. SOLUTIONS OVERVIEW --------------------------------------------------- */

const capabilities = [
  {
    icon: Users,
    title: "Short- and Long-Term Workforce Support",
    desc: "Personnel requirements coordinated for defined project periods, ongoing assignments and operational support.",
  },
  {
    icon: HardHat,
    title: "Shutdown and Turnaround Teams",
    desc: "Workforce coordination for planned shutdown, turnaround and maintenance requirements.",
  },
  {
    icon: Wrench,
    title: "Skilled Technical Personnel",
    desc: "Technical trades, technicians, inspectors, supervisors and project-support personnel aligned with the requested scope.",
  },
  {
    icon: ClipboardList,
    title: "Project-Based Workforce Deployment",
    desc: "Workforce planning and mobilization support structured around project location, schedule and assignment requirements.",
  },
];

function SolutionsOverview() {
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-7xl items-start gap-14 px-6 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <Eyebrow>Manpower Solutions</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold leading-[1.1] md:text-4xl">
            Comprehensive Manpower Support{" "}
            <span className="text-gradient-energy">for Industrial Projects.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            NEXORA structures manpower support around the required disciplines, workforce quantity,
            assignment duration, project schedule and site conditions. Requirements are reviewed
            individually rather than offered as a fixed staffing package.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {capabilities.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="flex h-full gap-4 rounded-2xl border border-border bg-white p-5 shadow-sm">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-energy/14 text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display text-sm font-bold leading-snug">{item.title}</div>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- 3. PERSONNEL CATEGORIES ------------------------------------------------- */

const personnelGroups = [
  {
    value: "mechanical",
    group: "Mechanical, Maintenance and Piping",
    icon: Settings2,
    roles: ["Mechanical Engineers", "Pipe Fitters", "Fabricators"],
  },
  {
    value: "electrical",
    group: "Electrical and Instrumentation",
    icon: Zap,
    roles: ["Electrical Engineers", "Instrumentation Engineers"],
  },
  {
    value: "welding",
    group: "Welding, Fabrication and Rigging",
    icon: Flame,
    roles: ["Welders", "Riggers", "Scaffolders"],
  },
  {
    value: "hse",
    group: "HSE, Quality and Inspection",
    icon: Shield,
    roles: ["HSE Officers", "QA/QC Inspectors"],
  },
  {
    value: "project",
    group: "Engineering, Planning and Site Support",
    icon: Target,
    roles: [
      "Project Managers",
      "Site Supervisors",
      "Project Engineers",
      "Civil Engineers",
      "Administrative Staff",
    ],
  },
];

function RoleChips({ roles }: { roles: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {roles.map((role) => (
        <li
          key={role}
          className="rounded-full border border-border bg-white px-3.5 py-1.5 text-xs font-bold text-foreground"
        >
          {role}
        </li>
      ))}
    </ul>
  );
}

function PersonnelCategories() {
  return (
    <section className="border-y border-border bg-surface/60 py-24">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <Reveal>
          <Eyebrow>Personnel Categories</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold leading-[1.1] md:text-4xl">
            Technical Personnel Organized by Discipline
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Explore the technical trades, specialists, supervisors and project-support roles
            available for manpower requirements. Final availability and qualification requirements
            depend on the assignment.
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border shadow-elevated">
            <img
              src={technicalManpowerTeam}
              alt="Technical manpower team on an industrial project site"
              loading="lazy"
              className="h-48 w-full object-cover sm:h-56 lg:h-64"
            />
          </div>
        </Reveal>

        <div>
          {/* Desktop / tablet: every group visible, nothing hidden behind a click */}
          <Reveal delay={0.1} className="hidden lg:grid lg:gap-4">
            {personnelGroups.map((g) => (
              <div
                key={g.value}
                className="rounded-2xl border border-border bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/8 text-primary">
                    <g.icon className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="font-display text-base font-bold text-foreground">{g.group}</h3>
                </div>
                <div className="mt-4">
                  <RoleChips roles={g.roles} />
                </div>
              </div>
            ))}
          </Reveal>

          {/* Mobile / small tablet: accessible accordion, first group open */}
          <Reveal delay={0.1} className="lg:hidden">
            <Accordion
              type="single"
              collapsible
              defaultValue={personnelGroups[0].value}
              className="rounded-2xl border border-border bg-white px-6 shadow-sm"
            >
              {personnelGroups.map((g) => (
                <AccordionItem key={g.value} value={g.value}>
                  <AccordionTrigger className="font-display text-base font-bold text-foreground">
                    <span className="flex items-center gap-3">
                      <g.icon className="h-4 w-4 shrink-0 text-primary" />
                      {g.group}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <RoleChips roles={g.roles} />
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
              Personnel availability, qualifications and deployment requirements are confirmed
              against each project enquiry.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* --- 4. COMPLIANCE & READINESS ----------------------------------------------- */

const readinessItems = [
  {
    icon: CheckSquare,
    title: "Competency and Qualification Review",
    desc: "Candidate experience, trade requirements and supporting credentials are reviewed against the requested role.",
  },
  {
    icon: FileText,
    title: "Documentation Readiness",
    desc: "Required workforce documents are identified and coordinated according to project and regulatory requirements.",
  },
  {
    icon: HardHat,
    title: "HSE Orientation Support",
    desc: "Project-specific safety requirements and orientation needs are coordinated before mobilization where applicable.",
  },
  {
    icon: Globe,
    title: "Mobilization Coordination",
    desc: "Mobilization activities are planned around approved personnel, documentation, location and project schedules.",
  },
];

function ComplianceReadiness() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
          <Reveal>
            <Eyebrow>Workforce Readiness</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold leading-[1.1] md:text-4xl">
              Workforce Preparation Coordinated Around Project Requirements
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {readinessItems.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.06}>
                  <div className="flex h-full gap-3.5 rounded-2xl border border-border bg-white p-5 shadow-sm">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/8 text-primary ring-1 ring-primary/10">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-display text-sm font-bold leading-snug">
                        {item.title}
                      </div>
                      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-[1.75rem] border border-border shadow-elevated">
              <img
                src={industrialServicesValveTeam}
                alt="Technical crew coordinating site work ahead of mobilization"
                loading="lazy"
                className="h-[380px] w-full object-cover lg:h-[520px]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* --- 5. DEPLOYMENT PROCESS --------------------------------------------------- */

const steps = [
  {
    num: "01",
    icon: ClipboardList,
    title: "Requirement Review",
    desc: "We review the required roles, workforce quantity, assignment duration, location, schedule and site conditions.",
  },
  {
    num: "02",
    icon: Users,
    title: "Workforce Identification",
    desc: "Available personnel are evaluated against the requested disciplines and assignment requirements.",
  },
  {
    num: "03",
    icon: FileText,
    title: "Documentation and Onboarding",
    desc: "Required documentation, onboarding steps and project conditions are coordinated for approved personnel.",
  },
  {
    num: "04",
    icon: HardHat,
    title: "Mobilization and Project Coordination",
    desc: "Mobilization is coordinated according to the approved schedule, documentation status and site requirements.",
  },
];

function DeploymentProcess() {
  return (
    <section className="border-y border-border bg-navy py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-16 text-center">
          <Eyebrow light>Deployment Process</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold leading-[1.1] text-white md:text-4xl">
            From Requirement Review to Mobilization
          </h2>
        </Reveal>

        <div className="relative">
          <div className="absolute left-0 right-0 top-9 hidden h-px bg-linear-to-r from-white/5 via-energy/30 to-white/5 lg:block" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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

/* --- 6. REQUEST FORM ---------------------------------------------------------- */

function RequestManpowerForm() {
  return (
    <section id="request-form" className="scroll-mt-32 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal className="mb-12 text-center">
          <Eyebrow>Request Manpower</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold leading-[1.1] md:text-4xl">
            Share Your Workforce Requirement
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
            Provide the project location, required personnel, expected quantity and schedule so the
            Nexora team can review your enquiry.
          </p>
        </Reveal>

        <Reveal>
          <EnquiryForm kind="manpower" />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 flex items-center justify-center gap-2 text-center text-sm text-muted-foreground">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-energy" />
            Prefer to speak directly?{" "}
            <Link to="/contact" className="font-semibold text-primary hover:underline">
              Contact Nexora
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
