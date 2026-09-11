import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  ClipboardList,
  Factory,
  FileCheck2,
  Flame,
  FlaskConical,
  Layers,
  MessageSquare,
  Network,
  Settings2,
  Shield,
  Timer,
  UsersRound,
  Wrench,
  Zap,
} from "lucide-react";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { seoHead } from "@/lib/seo";
import pMaint from "@/assets/optimized/project-maintenance.webp";
import pRefinery from "@/assets/optimized/project-refinery.webp";

export const Route = createFileRoute("/industrial-services")({
  head: () => seoHead("/industrial-services"),
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
      <DeliveryApproachSection />
      <EnvironmentsSection />
      <SafetySection />
      <ServicesCTA />
    </Layout>
  );
}

/* --- 1. HERO ------------------------------------------------------------------ */

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
          Industrial Services for <span className="text-energy">Complex Project Requirements</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-white/68 md:text-lg"
        >
          NEXORA coordinates maintenance, engineering and site-support requirements from its base in
          Qatar, with a focus on Qatar, Saudi Arabia and Kuwait. Support is structured around the
          approved scope, schedule, site conditions and required technical disciplines.
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
            Discuss Your Requirement <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/manpower"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur transition hover:border-white/40 hover:bg-white/16"
          >
            View Technical Manpower <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* --- 2. INDUSTRIAL SERVICE LINES ------------------------------------------------ */

const services = [
  {
    icon: Timer,
    title: "Shutdown & Turnaround Support",
    desc: "Coordinated personnel and site support for planned shutdown, turnaround and maintenance windows.",
    to: "/services/shutdown-support" as const,
    linkLabel: "Learn More",
  },
  {
    icon: Wrench,
    title: "Industrial Maintenance Support",
    desc: "Technical support for preventive, corrective and planned maintenance requirements across industrial facilities.",
    to: "/services/maintenance-support" as const,
    linkLabel: "Learn More",
  },
  {
    icon: Settings2,
    title: "Mechanical & Piping Support",
    desc: "Project-focused support for mechanical, piping, equipment and related site requirements.",
    to: "/contact" as const,
    linkLabel: "Discuss This Requirement",
  },
  {
    icon: Zap,
    title: "Electrical & Instrumentation Support",
    desc: "Technical support for electrical, instrumentation and control-related project requirements.",
    to: "/contact" as const,
    linkLabel: "Discuss This Requirement",
  },
  {
    icon: Building2,
    title: "Project & Site Support",
    desc: "Coordinated technical and site support aligned with approved project scope, schedule and operational conditions.",
    to: "/services/project-support" as const,
    linkLabel: "Learn More",
  },
  {
    icon: Layers,
    title: "Engineering & Technical Coordination",
    desc: "Engineering, documentation and technical coordination support for defined industrial requirements.",
    to: "/services/engineering-support" as const,
    linkLabel: "Learn More",
  },
];

function ServicesGrid() {
  return (
    <section className="bg-background py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-12 max-w-3xl">
          <Eyebrow>Our Services</Eyebrow>
          <h2 className="mt-5 text-4xl font-extrabold leading-[1.06] text-foreground md:text-5xl">
            Coordinated Support Across Industrial Requirements
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
            NEXORA supports defined industrial scopes through technical coordination, relevant
            personnel and project-focused service delivery.
          </p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.055}>
              <article className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-energy/35 hover:shadow-elevated">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-primary/10 bg-primary/6 text-primary">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-extrabold leading-tight text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">
                  {service.desc}
                </p>
                <div className="mt-6 border-t border-border pt-5">
                  <Link
                    to={service.to}
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary transition hover:text-energy"
                  >
                    {service.linkLabel}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-10 text-sm leading-6 text-muted-foreground">
            Looking for industrial products or supply support?{" "}
            <Link to="/products" className="font-bold text-primary hover:text-energy">
              View Products &amp; Procurement
            </Link>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* --- 3. DELIVERY APPROACH -------------------------------------------------------- */

const approach = [
  {
    num: "01",
    icon: ClipboardList,
    title: "Requirement Review",
    desc: "We review the approved scope, disciplines, schedule, location and site requirements.",
  },
  {
    num: "02",
    icon: UsersRound,
    title: "Team and Resource Planning",
    desc: "Required personnel, technical support and relevant resources are coordinated around the agreed scope.",
  },
  {
    num: "03",
    icon: Settings2,
    title: "Site Execution and Coordination",
    desc: "Service activities are coordinated with the client's site, schedule, reporting and HSE requirements.",
  },
  {
    num: "04",
    icon: FileCheck2,
    title: "Handover and Closeout",
    desc: "Relevant records, status updates and agreed deliverables are coordinated at completion.",
  },
];

function DeliveryApproachSection() {
  return (
    <section className="border-y border-border bg-surface/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-14 text-center">
          <Eyebrow>Our Approach</Eyebrow>
          <h2 className="mt-5 text-4xl font-extrabold leading-[1.06] md:text-5xl">
            Structured Delivery. <span className="text-gradient-energy">Clear Coordination.</span>
          </h2>
        </Reveal>

        <div className="relative">
          <div className="absolute left-0 right-0 top-9 hidden h-px bg-linear-to-r from-transparent via-primary/20 to-transparent lg:block" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((step, i) => (
              <Reveal key={step.num} delay={i * 0.08}>
                <div className="flex flex-col items-center text-center lg:px-2">
                  <div className="relative z-10 mb-5 grid h-[68px] w-[68px] place-items-center rounded-full border-2 border-border bg-white shadow-sm">
                    <step.icon className="h-6 w-6 text-primary" />
                    <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-primary text-[9px] font-bold text-white">
                      {step.num}
                    </span>
                  </div>
                  <div className="font-display text-base font-bold">{step.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.3}>
          <p className="mx-auto mt-12 max-w-2xl text-center text-sm leading-6 text-muted-foreground">
            Safety and site requirements are considered throughout each applicable stage, not as a
            single isolated step.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* --- 4. INDUSTRIAL ENVIRONMENTS -------------------------------------------------- */

const environments = [
  { icon: Factory, title: "Refineries & Process Plants" },
  { icon: Flame, title: "LNG & Gas Facilities" },
  { icon: FlaskConical, title: "Petrochemical Facilities" },
  { icon: Network, title: "Pipelines & Terminals" },
];

function EnvironmentsSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Industrial Environments</Eyebrow>
            <h2 className="mt-5 text-4xl font-extrabold leading-[1.06] md:text-5xl">
              Support Across <span className="text-gradient-energy">Relevant Environments.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Service requirements vary by facility, project phase and operating conditions. NEXORA
              coordinates support around the specific environment and approved scope.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {environments.map((env) => (
                <div
                  key={env.title}
                  className="flex items-center gap-3 rounded-xl border border-border bg-white p-3.5 shadow-sm"
                >
                  <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary/8 text-primary">
                    <env.icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-semibold">{env.title}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-[2rem] border border-border bg-white shadow-elevated">
              <img
                src={pRefinery}
                alt="Industrial process facility"
                loading="lazy"
                className="h-[460px] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* --- 5. SAFETY INTEGRATION -------------------------------------------------------- */

const safetyPrinciples = [
  {
    icon: Shield,
    title: "Site-Requirement Review",
    desc: "Relevant site rules, work conditions and HSE expectations are identified during requirement review.",
  },
  {
    icon: UsersRound,
    title: "Personnel Readiness",
    desc: "Required briefings, documentation and role-specific requirements are coordinated before applicable site activities.",
  },
  {
    icon: ClipboardList,
    title: "Project-Specific HSE Coordination",
    desc: "Service activities are aligned with the client's approved site procedures and responsible project stakeholders.",
  },
  {
    icon: MessageSquare,
    title: "Clear Reporting and Communication",
    desc: "Relevant observations, status updates and coordination needs are communicated through the agreed project channels.",
  },
];

function SafetySection() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-navy py-24">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="absolute -top-32 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-radial from-energy/14 to-transparent blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal className="mb-12 text-center">
          <Eyebrow light>Safety and Coordination</Eyebrow>
          <h2 className="mt-5 text-4xl font-extrabold leading-[1.06] text-white md:text-5xl">
            Safety Integrated Into <span className="text-energy">Service Delivery.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/60">
            Applicable project, site and HSE requirements are considered during planning, personnel
            coordination and service execution.
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {safetyPrinciples.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="rounded-2xl border border-white/10 bg-white/6 p-6 backdrop-blur">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-energy/14 text-energy">
                  <item.icon className="h-5 w-5" />
                </div>
                <div className="mt-4 font-display text-sm font-bold text-white">{item.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- 6. FINAL CTA ------------------------------------------------------------------ */

function ServicesCTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="rounded-[2rem] border border-border bg-white p-8 text-center shadow-elevated md:p-12">
            <Eyebrow>Get In Touch</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold md:text-4xl">
              Discuss Your Industrial{" "}
              <span className="text-gradient-energy">Service Requirement</span>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
              Share your project scope, location and schedule so the Nexora team can review the
              required industrial support.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground transition hover:bg-primary/90 btn-glow-blue"
              >
                Discuss Your Requirement <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/manpower"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-bold text-foreground transition hover:border-energy-soft hover:text-primary"
              >
                View Technical Manpower <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
