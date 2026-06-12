import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Factory,
  Flame,
  Gauge,
  HardHat,
  Landmark,
  MapPinned,
  Ship,
  ShieldCheck,
  Truck,
  UsersRound,
  Wrench,
  Zap,
} from "lucide-react";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import aboutNexoraTeam from "@/assets/about-nexora-team.png";
import homeHeroBriefing from "@/assets/home-hero-briefing.png";
import homeHeroLng from "@/assets/home-hero-lng.png";
import homeHeroMaintenance from "@/assets/home-hero-maintenance.png";
import homeHeroPlanning from "@/assets/home-hero-planning.png";
import homeHeroProcurement from "@/assets/home-hero-procurement.png";
import heroManpower from "@/assets/hero-manpower-refinery.jpg";
import industrialServicesValveTeam from "@/assets/industrial-services-valve-team.png";
import pMaint from "@/assets/project-maintenance.jpg";
import pPipeline from "@/assets/project-pipeline.jpg";
import pPlant from "@/assets/project-plant.jpg";
import pRefinery from "@/assets/project-refinery.jpg";
import technicalManpowerTeam from "@/assets/technical-manpower-team.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Nexora Energy Solutions | Technical Manpower & Industrial Solutions - Qatar & GCC",
      },
      {
        name: "description",
        content:
          "Nexora Energy Solutions provides qualified technical manpower and industrial services for energy, LNG, petrochemical, infrastructure and industrial projects across Qatar and the GCC.",
      },
      { property: "og:title", content: "Nexora Energy Solutions" },
      {
        property: "og:description",
        content: "Technical Manpower & Industrial Solutions - Qatar & GCC.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <Layout>
      <HeroSection />
      <TrustSection />
      <AboutSection />
      <TechnicalManpowerSection />
      <WorkforceCategoriesSection />
      <IndustrialServicesSection />
      <ProductsSection />
      <IndustriesSection />
      <WhyNexoraSection />
      <FinalCTASection />
    </Layout>
  );
}

function SectionLabel({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className={dark ? "h-px w-9 bg-energy" : "h-px w-9 bg-primary"} />
      <span
        className={
          dark
            ? "text-xs font-bold uppercase tracking-[0.18em] text-energy"
            : "text-xs font-bold uppercase tracking-[0.18em] text-primary"
        }
      >
        {children}
      </span>
    </div>
  );
}

function PrimaryButton({
  to,
  children,
  dark = false,
}: {
  to: "/manpower" | "/contact" | "/industrial-services" | "/products";
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <Link
      to={to}
      className={
        dark
          ? "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-energy px-6 py-3 text-sm font-bold text-navy transition hover:bg-white sm:w-auto"
          : "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-bold text-white transition hover:bg-navy sm:w-auto"
      }
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}

function SecondaryButton({
  to,
  children,
  dark = false,
}: {
  to: "/contact" | "/about" | "/manpower" | "/industries" | "/products" | "/industrial-services";
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <Link
      to={to}
      className={
        dark
          ? "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:border-white hover:bg-white/10 sm:w-auto"
          : "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-primary/25 px-6 py-3 text-sm font-bold text-primary transition hover:border-primary hover:bg-primary/5 sm:w-auto"
      }
    >
      {children}
      <ChevronRight className="h-4 w-4" />
    </Link>
  );
}

const heroItem = {
  hidden: { opacity: 0, y: 22 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: i * 0.13, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

function HeroSection() {
  const slideSeconds = 7;
  const heroImages = [
    {
      image: homeHeroPlanning,
      label: "Plan The Work",
      caption: "Engineering teams align drawings, roles and mobilisation before site execution.",
      position: "object-[54%_50%]",
    },
    {
      image: homeHeroBriefing,
      label: "Brief The Crew",
      caption: "Supervisors bring the field team together around safety, permits and sequencing.",
      position: "object-[50%_50%]",
    },
    {
      image: homeHeroMaintenance,
      label: "Execute On Site",
      caption:
        "Qualified technicians carry out maintenance support in controlled plant conditions.",
      position: "object-[54%_50%]",
    },
    {
      image: homeHeroLng,
      label: "Oversee Critical Assets",
      caption: "Project leads track LNG and industrial assets with practical site visibility.",
      position: "object-[52%_50%]",
    },
    {
      image: homeHeroProcurement,
      label: "Inspect And Supply",
      caption:
        "Procurement and QA teams verify equipment, spares and documentation before delivery.",
      position: "object-[54%_50%]",
    },
  ];

  return (
    <section className="relative min-h-[92svh] overflow-hidden bg-navy" aria-label="Nexora hero">
      <div className="absolute inset-0">
        {heroImages.map((item, index) => (
          <div
            key={item.label}
            className="hero-cinema-frame absolute inset-0"
            style={{ animationDelay: `${index * slideSeconds}s` }}
          >
            <img
              src={item.image}
              alt=""
              aria-hidden="true"
              className={`hero-cinema-image h-full w-full object-cover ${item.position}`}
              fetchPriority={index === 0 ? "high" : undefined}
              loading={index === 0 ? "eager" : "lazy"}
              style={{ animationDelay: `${index * slideSeconds}s` }}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,18,34,0.86),rgba(2,18,34,0.56)_46%,rgba(2,18,34,0.18))]" />
        <div className="absolute inset-0 bg-linear-to-b from-navy/14 via-transparent to-navy/30" />
      </div>

      <div className="relative mx-auto flex min-h-[92svh] max-w-7xl items-center px-6 pb-16 pt-32 lg:px-8">
        <div className="w-full max-w-[21.5rem] sm:max-w-[58rem]">
          <motion.div
            initial="hidden"
            animate="show"
            custom={0}
            variants={heroItem}
            className="mb-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-bold uppercase tracking-[0.18em] text-white/70"
          >
            <span className="h-px w-10 bg-energy" />
            <span>GCC Energy & Industrial Project Support</span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="show"
            custom={1}
            variants={heroItem}
            className="max-w-4xl text-[34px] font-extrabold leading-[1.08] tracking-display text-white sm:text-4xl md:text-5xl lg:text-[58px]"
          >
            Technical Manpower & Industrial Solutions For Critical Energy Projects
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            custom={2}
            variants={heroItem}
            className="mt-7 max-w-3xl text-base leading-8 text-white/82 md:text-lg"
          >
            Providing qualified engineers, technicians, supervisors and industrial personnel for
            energy, LNG, petrochemical, infrastructure and industrial projects across Qatar and the
            GCC.
          </motion.p>

          <div className="mt-7 h-20 overflow-hidden text-white sm:h-[4.5rem]" aria-hidden="true">
            <div className="relative h-full">
              {heroImages.map((item, index) => (
                <div
                  key={item.label}
                  className="hero-cinema-label absolute inset-0 block"
                  style={{ animationDelay: `${index * slideSeconds}s` }}
                >
                  <span className="block text-xs font-bold uppercase tracking-[0.16em] text-energy">
                    {item.label}
                  </span>
                  <span className="mt-2 block max-w-xl text-sm leading-6 text-white/72">
                    {item.caption}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <motion.div
            initial="hidden"
            animate="show"
            custom={3}
            variants={heroItem}
            className="mt-6 flex max-w-xl gap-2"
            aria-hidden="true"
          >
            {heroImages.map((item, index) => (
              <span key={item.label} className="h-px flex-1 overflow-hidden bg-white/22">
                <span
                  className="hero-cinema-progress block h-full origin-left bg-energy"
                  style={{ animationDelay: `${index * slideSeconds}s` }}
                />
              </span>
            ))}
          </motion.div>
          <span className="sr-only">
            Plan the work, brief the crew, execute on site, oversee critical assets, inspect and
            supply
          </span>

          <motion.div
            initial="hidden"
            animate="show"
            custom={4}
            variants={heroItem}
            className="mt-9 flex flex-wrap gap-4"
          >
            <PrimaryButton to="/manpower" dark>
              Request Manpower
            </PrimaryButton>
            <SecondaryButton to="/contact" dark>
              Request Proposal
            </SecondaryButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  const supportCards = [
    {
      icon: Factory,
      title: "Energy Operators",
      desc: "Site-ready manpower and support for upstream, downstream and utility operations.",
      className: "md:col-span-2 lg:col-span-6",
      variant: "feature",
      tags: ["Site-ready manpower", "Utility operations", "Field supervision"],
    },
    {
      icon: Flame,
      title: "LNG Facilities",
      desc: "Qualified personnel for controlled LNG environments, shutdowns and maintenance.",
      className: "md:col-span-1 lg:col-span-3",
      variant: "accent",
    },
    {
      icon: Building2,
      title: "Petrochemical Plants",
      desc: "Technical teams for process facilities, plant upgrades and routine execution.",
      className: "md:col-span-1 lg:col-span-3",
      variant: "light",
    },
    {
      icon: HardHat,
      title: "EPC Contractors",
      desc: "Flexible engineering, supervision and trades support for project delivery teams.",
      className: "md:col-span-1 lg:col-span-4",
      variant: "light",
    },
    {
      icon: ShieldCheck,
      title: "OEM & Vendor Teams",
      desc: "Documented site support for specialist vendor scopes and commissioning activity.",
      className: "md:col-span-1 lg:col-span-4",
      variant: "light",
    },
    {
      icon: MapPinned,
      title: "Infrastructure Projects",
      desc: "Practical manpower and coordination for industrial infrastructure programs.",
      className: "md:col-span-2 lg:col-span-4",
      variant: "accent",
    },
  ];

  return (
    <section className="border-b border-border bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mb-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <SectionLabel>Who We Support</SectionLabel>
            <h2 className="max-w-3xl text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
              Trusted Across Energy, LNG & Industrial Projects
            </h2>
          </div>
          <div className="lg:flex lg:justify-end">
            <p className="max-w-2xl text-base leading-7 text-muted-foreground lg:max-w-xl">
              Supporting operators, EPC contractors, industrial facilities and infrastructure
              projects with qualified manpower and practical industrial services.
            </p>
          </div>
        </Reveal>

        <div className="grid auto-rows-fr gap-4 md:grid-cols-2 lg:grid-cols-12">
          {supportCards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.04} className={card.className}>
              <div
                className={
                  card.variant === "feature"
                    ? "group relative flex h-full min-h-57.5 flex-col justify-between overflow-hidden rounded-lg border border-primary/20 bg-navy p-7 shadow-elevated transition duration-300 hover:-translate-y-1"
                    : card.variant === "accent"
                      ? "group flex h-full min-h-52.5 flex-col justify-between rounded-lg border border-energy/25 bg-[linear-gradient(135deg,rgb(55_181_159/0.1),rgb(255_255_255/0.98)_58%)] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-energy/45 hover:shadow-elevated"
                      : "group flex h-full min-h-52.5 flex-col justify-between rounded-lg border border-border bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/22 hover:shadow-elevated"
                }
              >
                {card.variant === "feature" ? (
                  <div className="absolute inset-y-0 right-0 w-1/2 bg-[linear-gradient(135deg,transparent,rgb(55_181_159/0.18))]" />
                ) : null}

                <div className="relative">
                  <div
                    className={
                      card.variant === "feature"
                        ? "grid h-12 w-12 place-items-center rounded-md border border-white/15 bg-white/10 text-energy"
                        : "grid h-12 w-12 place-items-center rounded-md border border-primary/10 bg-primary/6 text-primary transition group-hover:border-energy/28 group-hover:bg-energy/12"
                    }
                  >
                    <card.icon className="h-6 w-6" />
                  </div>
                  <h3
                    className={
                      card.variant === "feature"
                        ? "mt-7 max-w-md text-2xl font-extrabold leading-tight text-white md:text-[28px]"
                        : "mt-6 text-base font-extrabold text-foreground"
                    }
                  >
                    {card.title}
                  </h3>
                  <p
                    className={
                      card.variant === "feature"
                        ? "mt-4 max-w-lg text-sm leading-7 text-white/72"
                        : "mt-3 text-sm leading-6 text-muted-foreground"
                    }
                  >
                    {card.desc}
                  </p>
                </div>

                {card.tags ? (
                  <div className="relative mt-8 flex flex-wrap gap-2">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-white/14 bg-white/8 px-3 py-2 text-xs font-bold text-white/86"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="bg-background py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <Reveal>
            <SectionLabel>About Nexora</SectionLabel>
            <h2 className="max-w-3xl text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
              A Qatar-based company focused on technical manpower and industrial project support.
            </h2>
            <div className="mt-6 max-w-2xl space-y-4 text-base leading-7 text-muted-foreground">
              <p>
                Nexora Energy Solutions supplies qualified technical personnel and practical
                industrial services for energy, LNG, petrochemical, infrastructure and industrial
                projects across Qatar and the GCC.
              </p>
              <p>
                Our core work is manpower: engineers, technicians, supervisors, tradespeople and
                site support staff with the documentation and compliance needed for controlled
                industrial environments.
              </p>
              <p>
                We are building the company around dependable response, clear communication and
                disciplined mobilisation rather than inflated claims.
              </p>
            </div>
            <div className="mt-8">
              <SecondaryButton to="/about">Learn More About Nexora</SecondaryButton>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="overflow-hidden rounded-lg border border-border bg-white shadow-elevated">
              <img
                src={aboutNexoraTeam}
                alt="Technical personnel reviewing site documentation at an industrial facility"
                loading="lazy"
                className="h-110 w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function TechnicalManpowerSection() {
  const points = [
    "Engineers, technicians, supervisors, tradespeople and site support staff",
    "Documentation, qualification checks and project-specific onboarding",
    "Personnel packages for short-term shutdowns, maintenance and project execution",
    "Qatar-based coordination with GCC deployment capability",
  ];

  return (
    <section className="bg-navy py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-lg border border-white/10">
              <img
                src={technicalManpowerTeam}
                alt="Technical manpower team reviewing project drawings at an industrial facility"
                loading="lazy"
                className="w-full object-cover object-center"
              />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <SectionLabel dark>Primary Service</SectionLabel>
            <h2 className="max-w-2xl text-3xl font-extrabold leading-tight text-white md:text-5xl">
              Technical Manpower Solutions
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70">
              We provide qualified manpower for the project realities of energy and industrial work:
              urgent mobilisation, safety-controlled sites, discipline matching, documentation and
              clear communication with procurement and project teams.
            </p>
            <div className="mt-8 grid gap-4">
              {points.map((point) => (
                <div key={point} className="flex gap-3 text-sm leading-6 text-white/72">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-energy" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
            <div className="mt-9 flex flex-wrap gap-4">
              <PrimaryButton to="/manpower" dark>
                Request Manpower
              </PrimaryButton>
              <SecondaryButton to="/manpower" dark>
                View Disciplines
              </SecondaryButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const workforceGroups = [
  {
    icon: Gauge,
    title: "Engineering",
    label: "Engineering Roles",
    roles: [
      "Mechanical Engineers",
      "Electrical Engineers",
      "Instrumentation Engineers",
      "Civil Engineers",
      "Project Engineers",
    ],
  },
  {
    icon: UsersRound,
    title: "Management & Site Control",
    label: "Site Control",
    roles: ["Project Managers", "Site Supervisors", "QA/QC Inspectors", "HSE Officers"],
  },
  {
    icon: Wrench,
    title: "Skilled Trades",
    label: "Trade Crews",
    roles: ["Welders", "Fabricators", "Pipe Fitters", "Riggers", "Scaffolders"],
  },
  {
    icon: ShieldCheck,
    title: "Operations & Support",
    label: "Site Support",
    roles: ["Operators", "Helpers", "Administrative Staff"],
  },
];

function WorkforceCategoriesSection() {
  return (
    <section className="border-b border-border bg-background py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 grid gap-10 lg:grid-cols-[0.95fr_0.75fr] lg:items-end">
          <Reveal className="max-w-3xl">
            <SectionLabel>Workforce Categories</SectionLabel>
            <h2 className="text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
              Qualified workforce across every site function.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
              Engineers, supervisors, trades and support staff matched to project scope, site
              conditions and mobilisation timelines.
            </p>
            <div className="mt-7">
              <SecondaryButton to="/manpower">View Manpower Solutions</SecondaryButton>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="relative overflow-hidden rounded-lg border border-border bg-white shadow-elevated">
              <img
                src={technicalManpowerTeam}
                alt="Qualified technical manpower team preparing for industrial site work"
                loading="lazy"
                className="h-72.5 w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy/78 via-navy/8 to-transparent" />
              <div className="absolute inset-x-5 bottom-5">
                <div className="max-w-sm text-sm font-bold leading-6 text-white">
                  Crew planning, documentation and site-readiness support for controlled industrial
                  environments.
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {workforceGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.04}>
              <div className="group flex h-full min-h-67.5 flex-col rounded-lg border border-border bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-energy/35 hover:shadow-elevated">
                <div className="flex items-start justify-between gap-5">
                  <div className="grid h-12 w-12 place-items-center rounded-md border border-primary/10 bg-primary/6 text-primary transition group-hover:border-energy/30 group-hover:bg-energy/12">
                    <group.icon className="h-6 w-6" />
                  </div>
                  <span className="pt-1 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground/70">
                    {group.label}
                  </span>
                </div>
                <h3 className="mt-6 text-base font-extrabold text-foreground">{group.title}</h3>
                <div className="mt-5 space-y-3">
                  {group.roles.map((role) => (
                    <div key={role} className="flex items-start gap-3 text-sm text-foreground/75">
                      <span className="mt-2 h-px w-4 shrink-0 bg-energy" />
                      <span>{role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const industrialServices = [
  {
    icon: Wrench,
    title: "Shutdown Support",
    label: "Planned outages",
    desc: "Manpower and site crews for planned shutdown windows, urgent work packs and close-out support.",
  },
  {
    icon: Gauge,
    title: "Turnaround Support",
    label: "Multi-discipline crews",
    desc: "Multi-discipline labour coordination for refinery, LNG and petrochemical turnaround activity.",
  },
  {
    icon: ClipboardCheck,
    title: "Maintenance Support",
    label: "Asset uptime",
    desc: "Personnel and practical support for preventive, corrective and routine plant maintenance work.",
  },
  {
    icon: HardHat,
    title: "Project Support",
    label: "Execution teams",
    desc: "Site personnel for greenfield, brownfield and infrastructure project execution.",
  },
  {
    icon: ShieldCheck,
    title: "Engineering Support",
    label: "Technical control",
    desc: "Discipline engineers, inspectors and documentation support for controlled project environments.",
  },
  {
    icon: Truck,
    title: "Procurement Support",
    label: "Material readiness",
    desc: "Sourcing and supply coordination for documented industrial materials and project requirements.",
  },
];

const serviceCapabilities = [
  "Planning Support",
  "Site Coordination",
  "Technical Personnel",
  "Procurement Assistance",
];

function IndustrialServicesSection() {
  return (
    <section className="bg-surface py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <Reveal>
            <SectionLabel>Industrial Services</SectionLabel>
            <h2 className="text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
              Industrial support for critical plant work.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
              Nexora supports shutdowns, turnarounds, maintenance and project execution with
              qualified teams, practical coordination and site-ready industrial services.
            </p>
            <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-white shadow-elevated">
              <div className="relative">
                <img
                  src={industrialServicesValveTeam}
                  alt="Nexora technicians supporting industrial plant maintenance"
                  loading="lazy"
                  className="h-97.5 w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-linear-to-t from-navy/82 via-navy/10 to-transparent" />
                <div className="absolute inset-x-5 bottom-5">
                  <p className="max-w-sm text-sm font-bold leading-6 text-white">
                    Field crews, supervisors and technical teams aligned around safe, controlled
                    execution.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <div>
            <div className="grid gap-4 sm:grid-cols-2">
              {industrialServices.map((service, index) => (
                <Reveal key={service.title} delay={index * 0.04}>
                  <Link
                    to="/industrial-services"
                    className="group flex h-full min-h-52.5 flex-col rounded-2xl border border-border bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-energy/45 hover:shadow-elevated"
                  >
                    <div className="flex items-start justify-between gap-5">
                      <div className="grid h-11 w-11 place-items-center rounded-lg border border-primary/10 bg-primary/6 text-primary transition group-hover:border-energy/35 group-hover:bg-energy/12">
                        <service.icon className="h-5.5 w-5.5" />
                      </div>
                      <span className="max-w-36 pt-1 text-right text-[11px] font-bold uppercase tracking-[0.13em] text-muted-foreground/70">
                        {service.label}
                      </span>
                    </div>
                    <h3 className="mt-5 text-base font-extrabold text-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{service.desc}</p>
                    <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold text-primary transition group-hover:text-energy">
                      Learn More
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <div className="mt-5 rounded-2xl border border-primary/10 bg-white p-4 shadow-sm">
                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  {serviceCapabilities.map((capability) => (
                    <div
                      key={capability}
                      className="flex items-center gap-3 rounded-lg bg-surface px-4 py-3 text-sm font-bold text-foreground"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-energy" />
                      <span>{capability}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-7">
                <SecondaryButton to="/industrial-services">View All Service Lines</SecondaryButton>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  const procurementCards = [
    {
      icon: Factory,
      title: "Industrial Materials",
      desc: "Valves, piping items, mechanical spares, consumables and site support supplies.",
    },
    {
      icon: Zap,
      title: "Electrical & Instrumentation",
      desc: "Field instruments, electrical products and documented technical items.",
    },
    {
      icon: ClipboardCheck,
      title: "Vendor & Project Coordination",
      desc: "Supplier coordination, documentation follow-up and project procurement support.",
    },
  ];
  const procurementFlow = ["Source", "Verify", "Coordinate", "Deliver"];

  return (
    <section className="border-y border-border bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <Reveal>
            <SectionLabel>Products & Procurement</SectionLabel>
            <h2 className="text-3xl font-extrabold leading-tight text-foreground md:text-4xl">
              Procurement support for industrial project requirements.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
              Nexora helps project teams source, coordinate and document industrial materials,
              valves, instrumentation, electrical items and site support supplies.
            </p>
            <div className="mt-8">
              <SecondaryButton to="/products">View Procurement Support</SecondaryButton>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
                <div className="relative h-full min-h-82.5">
                  <img
                    src={homeHeroProcurement}
                    alt="Industrial procurement team inspecting valves and technical equipment"
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-navy/80 via-navy/12 to-transparent" />
                  <div className="absolute inset-x-5 bottom-5">
                    <p className="max-w-xs text-sm font-bold leading-6 text-white">
                      Product sourcing with documentation control for industrial and EPC
                      requirements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4">
                {procurementCards.map((card, index) => (
                  <div
                    key={card.title}
                    className="group rounded-2xl border border-border bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-energy/45 hover:shadow-elevated"
                  >
                    <div className="flex items-start gap-4">
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-primary/10 bg-primary/6 text-primary transition group-hover:border-energy/35 group-hover:bg-energy/12">
                        <card.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground/70">
                          0{index + 1}
                        </div>
                        <h3 className="mt-1 text-base font-extrabold text-foreground">
                          {card.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">{card.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-primary/10 bg-surface p-4">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {procurementFlow.map((step, index) => (
                  <div
                    key={step}
                    className="flex items-center gap-3 rounded-lg bg-white px-4 py-3 text-sm font-bold text-foreground shadow-sm"
                  >
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-primary text-xs text-white">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const industries = [
  {
    icon: Factory,
    title: "Oil & Gas",
    summary: "Field-ready manpower and services for upstream and downstream assets.",
    image: pRefinery,
    className: "lg:col-span-2",
  },
  {
    icon: Flame,
    title: "LNG",
    summary: "Support for process facilities, terminals and critical maintenance windows.",
    image: homeHeroLng,
  },
  {
    icon: Building2,
    title: "Petrochemical",
    summary: "Specialist teams for plant operations, shutdowns and brownfield scopes.",
    image: pPlant,
  },
  {
    icon: Zap,
    title: "Power & Utilities",
    summary: "Industrial support for generation, transmission and utility corridors.",
    image: pPipeline,
  },
  {
    icon: MapPinned,
    title: "Infrastructure",
    summary: "Project manpower for pipeline, civil and industrial infrastructure sites.",
    image: homeHeroPlanning,
  },
  {
    icon: Ship,
    title: "Marine",
    summary: "Qualified site crews for port, marine and offshore-adjacent operations.",
    image: heroManpower,
  },
  {
    icon: Landmark,
    title: "Government",
    summary: "Compliance-led support for public and strategic industrial programs.",
    image: pMaint,
  },
  {
    icon: Factory,
    title: "Manufacturing",
    summary: "Technical resources for production facilities and plant maintenance.",
    image: industrialServicesValveTeam,
  },
];

function IndustriesSection() {
  return (
    <section className="bg-background py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mb-12 grid gap-6 lg:grid-cols-[minmax(0,0.78fr)_minmax(280px,0.22fr)] lg:items-end">
          <div className="max-w-4xl">
            <SectionLabel>Industries Served</SectionLabel>
            <h2 className="text-3xl font-extrabold leading-tight text-foreground md:text-5xl lg:text-[3.35rem]">
              Built for energy, infrastructure and industrial operations.
            </h2>
          </div>
          <div className="flex flex-col gap-4 lg:items-start">
            <p className="max-w-sm text-sm font-medium leading-6 text-muted-foreground">
              Sector-specific teams for controlled sites, urgent mobilisation and long-cycle
              industrial programs across Qatar and the GCC.
            </p>
            <SecondaryButton to="/industries">View Industries</SecondaryButton>
          </div>
        </Reveal>

        <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <Reveal
                key={industry.title}
                delay={index * 0.03}
                className={industry.className ?? ""}
              >
                <Link
                  to="/industries"
                  className="group block h-full overflow-hidden rounded-lg border border-white/70 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-elevated"
                >
                  <div className="relative min-h-[220px] overflow-hidden sm:aspect-4/3 lg:h-full">
                    <img
                      src={industry.image}
                      alt={`${industry.title} project environment`}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-navy/92 via-navy/28 to-transparent" />
                    <div className="absolute inset-0 bg-linear-to-br from-primary/24 via-transparent to-energy/12 opacity-70 transition group-hover:opacity-95" />
                    <div className="absolute left-4 top-4 grid h-9 w-9 place-items-center rounded-md border border-white/22 bg-white/10 text-white shadow-sm backdrop-blur-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="absolute inset-x-4 bottom-4">
                      <div className="text-lg font-extrabold text-white">{industry.title}</div>
                      <p className="mt-2 line-clamp-2 max-w-md text-sm font-medium leading-5 text-white/78">
                        {industry.summary}
                      </p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const whyNexora = [
  {
    icon: UsersRound,
    title: "Qualified Workforce",
    desc: "Screened engineers, supervisors, technicians and site personnel matched to project requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Ready",
    desc: "Support for HSE, certification, permits, client documentation and controlled site requirements.",
  },
  {
    icon: Truck,
    title: "Rapid Mobilisation",
    desc: "Responsive coordination for shutdowns, maintenance windows and urgent project starts.",
  },
  {
    icon: MapPinned,
    title: "GCC Project Support",
    desc: "Qatar-based coordination with capability to support industrial requirements across the GCC.",
  },
];

const trustSignals = ["Energy & LNG", "Shutdown Support", "HSE Documentation", "GCC Coverage"];

function WhyNexoraSection() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-navy py-20 md:py-24">
      <div className="absolute inset-y-0 right-0 hidden w-[44%] lg:block">
        <img
          src={homeHeroLng}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-r from-navy via-navy/72 to-navy/10" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,180,170,0.08),transparent_38%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.95fr_0.65fr] lg:items-end">
          <Reveal className="max-w-3xl">
            <SectionLabel dark>Why Nexora</SectionLabel>
            <h2 className="text-3xl font-extrabold leading-tight text-white md:text-5xl">
              Why project teams choose Nexora.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/70">
              Because industrial projects need more than people on site. They need qualified
              personnel, documentation control, fast mobilisation and practical coordination.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-elevated backdrop-blur">
              <div className="text-xs font-bold uppercase tracking-[0.16em] text-energy">
                Project Reliability
              </div>
              <p className="mt-3 text-sm leading-6 text-white/72">
                Built for controlled industrial environments where readiness, documentation and site
                coordination directly affect delivery.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyNexora.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.04}>
              <div className="group h-full rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-energy/45 hover:bg-white/8 hover:shadow-elevated">
                <div className="grid h-12 w-12 place-items-center rounded-lg border border-white/10 bg-white/8 text-energy transition group-hover:border-energy/35 group-hover:bg-energy/12">
                  <card.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-base font-extrabold text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/64">{card.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {trustSignals.map((signal) => (
                <div
                  key={signal}
                  className="flex items-center gap-3 rounded-lg bg-white/10 px-4 py-3 text-sm font-bold text-white"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-energy" />
                  <span>{signal}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FinalCTASection() {
  const contactReasons = ["Manpower Request", "Project Support", "Procurement Inquiry"];

  return (
    <section className="border-t border-border bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.95fr_0.75fr] lg:items-center">
            <div>
              <SectionLabel>Contact Nexora</SectionLabel>
              <h2 className="max-w-3xl text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
                Discuss your manpower, site support or procurement requirement.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">
                Share the discipline, duration, location and mobilisation timeline. Our team will
                respond with a practical next step.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-surface p-5 shadow-elevated">
              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {contactReasons.map((reason) => (
                  <div
                    key={reason}
                    className="flex items-center gap-3 rounded-lg bg-white px-4 py-3 text-sm font-bold text-foreground shadow-sm"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-energy" />
                    <span>{reason}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <PrimaryButton to="/manpower">Request Manpower</PrimaryButton>
                <SecondaryButton to="/contact">Request Proposal</SecondaryButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
