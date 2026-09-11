import mobileHero from "@/assets/optimized/manpower-hero-crew-briefing.mobile.webp";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarClock,
  ChevronRight,
  ListChecks,
  MapPin,
  Network,
  Package,
  UsersRound,
  Wrench,
} from "lucide-react";
import type { ReactNode } from "react";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { CollaborationsPreview } from "@/components/CollaborationsPreview";
import { heroSlides, industrialImages, industryCards } from "@/lib/enterprise-content";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => seoHead("/"),
  component: Home,
});

const heroItem = {
  hidden: { opacity: 0, y: 22 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

function Home() {
  return (
    <Layout>
      <HeroSection />
      <CollaborationsSection />
      <CoreServicesSection />
      <WhyNexoraSection />
      <IndustriesGridSection />
      <RegionalFocusSection />
      <FinalCTASection />
    </Layout>
  );
}

function SectionBadge({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <div className="mb-5 inline-flex items-center gap-3 rounded-md border border-primary/10 bg-white px-4 py-2 shadow-sm">
      <span className="h-px w-8 bg-energy" />
      <span
        className={`text-[11px] font-extrabold uppercase tracking-[0.24em] ${dark ? "text-energy" : "text-primary"}`}
      >
        {children}
      </span>
    </div>
  );
}

function PrimaryButton({ to, children }: { to: "/contact" | "/manpower"; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-energy px-6 py-3 text-sm font-extrabold text-navy transition hover:bg-white sm:w-auto"
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
  to: "/about" | "/contact" | "/industrial-services" | "/industries" | "/manpower" | "/services";
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <Link
      to={to}
      className={
        dark
          ? "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-white/25 px-6 py-3 text-sm font-extrabold text-white transition hover:border-energy hover:bg-white/10 sm:w-auto"
          : "inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-primary/20 px-6 py-3 text-sm font-extrabold text-primary transition hover:border-primary hover:bg-primary/5 sm:w-auto"
      }
    >
      {children}
      <ChevronRight className="h-4 w-4" />
    </Link>
  );
}

/* --- 1. HERO ----------------------------------------------------------------- */

function HeroSection() {
  return (
    <section className="relative min-h-[86svh] overflow-hidden bg-dark-navy" aria-label="Nexora">
      <div className="absolute inset-0">
        <picture>
          <source media="(max-width: 767px)" srcSet={mobileHero} />
          <img
            src={heroSlides[0].image}
            alt=""
            aria-hidden="true"
            fetchPriority="high"
            loading="eager"
            width={1600}
            height={900}
            className="h-full w-full object-cover object-[52%_50%]"
          />
        </picture>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,17,31,0.92),rgba(4,28,50,0.74)_42%,rgba(4,28,50,0.32)_78%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,17,31,0.22),transparent_38%,rgba(2,17,31,0.58))]" />
      </div>

      <div className="relative mx-auto flex min-h-[86svh] max-w-7xl items-center px-6 pb-16 pt-32 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={false}
            animate="show"
            custom={0}
            variants={heroItem}
            className="mb-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-extrabold uppercase tracking-[0.2em] text-white/72"
          >
            <span className="h-px w-11 bg-energy" />
            Qatar-Based Technical Manpower &amp; Industrial Support
          </motion.div>
          <motion.h1
            initial={false}
            animate="show"
            custom={1}
            variants={heroItem}
            className="max-w-3xl text-[36px] font-extrabold leading-[1.08] tracking-display text-white sm:text-5xl md:text-6xl lg:text-[62px]"
          >
            Technical Manpower and Industrial Support for Critical Projects
          </motion.h1>
          <motion.p
            initial={false}
            animate="show"
            custom={2}
            variants={heroItem}
            className="mt-7 max-w-2xl text-base font-medium leading-8 text-white/80 md:text-lg"
          >
            NEXORA supports workforce and industrial requirements for organizations operating across
            Qatar, Saudi Arabia and Kuwait.
          </motion.p>
          <motion.div
            initial={false}
            animate="show"
            custom={3}
            variants={heroItem}
            className="mt-9 flex flex-wrap gap-4"
          >
            <PrimaryButton to="/manpower">Request Manpower</PrimaryButton>
            <SecondaryButton to="/industrial-services" dark>
              Explore Services
            </SecondaryButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* --- 2. COLLABORATION LOGOS --------------------------------------------------- */

function CollaborationsSection() {
  return (
    <section className="border-b border-border bg-white py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mb-8 text-center">
          <h2 className="text-xl font-extrabold leading-tight text-foreground md:text-2xl">
            Organizations We Have Collaborated With
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm font-medium leading-6 text-muted-foreground">
            Supporting energy, industrial, infrastructure and commercial organizations through
            professional manpower and operational solutions.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <CollaborationsPreview />
        </Reveal>
      </div>
    </section>
  );
}

/* --- 3. CORE SERVICES ---------------------------------------------------------- */

const coreServices = [
  {
    icon: UsersRound,
    title: "Technical Manpower",
    description:
      "Qualified technical personnel aligned with project, maintenance and shutdown requirements.",
    to: "/manpower" as const,
  },
  {
    icon: Wrench,
    title: "Industrial Services",
    description:
      "Coordinated support for maintenance, engineering and industrial project activities.",
    to: "/industrial-services" as const,
  },
  {
    icon: Package,
    title: "Products & Procurement",
    description:
      "Project-focused sourcing and supply support for industrial equipment and materials.",
    to: "/products" as const,
  },
];

function CoreServicesSection() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mb-12 max-w-2xl">
          <SectionBadge>What We Do</SectionBadge>
          <h2 className="text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
            Core services for industrial project teams.
          </h2>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {coreServices.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.06}>
              <div className="flex h-full flex-col rounded-lg border border-border bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-elevated">
                <div className="grid h-12 w-12 place-items-center rounded-md border border-primary/10 bg-primary/5 text-primary">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-extrabold text-foreground">{service.title}</h3>
                <p className="mt-3 flex-1 text-base font-medium leading-7 text-muted-foreground">
                  {service.description}
                </p>
                <Link
                  to={service.to}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-primary hover:text-energy"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- 4. WHY NEXORA -------------------------------------------------------------- */

const whyNexoraPoints = [
  {
    icon: ListChecks,
    title: "Requirement-led planning",
    text: "Work begins with the roles, scope, location, schedule and project conditions.",
  },
  {
    icon: CalendarClock,
    title: "Coordinated mobilization",
    text: "Documentation, onboarding and mobilization requirements are coordinated around the approved project plan.",
  },
  {
    icon: UsersRound,
    title: "Relevant technical personnel",
    text: "Workforce selection is aligned with the requested discipline and assignment requirements.",
  },
  {
    icon: Network,
    title: "One point of coordination",
    text: "Clients receive a clearer path for manpower, industrial support and procurement enquiries.",
  },
];

function WhyNexoraSection() {
  return (
    <section className="border-y border-border bg-light-gray py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.62fr_0.9fr] lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-lg border border-border shadow-elevated">
              <img
                src={industrialImages.briefing}
                alt="Industrial project team receiving a field briefing"
                loading="lazy"
                className="h-72 w-full object-cover md:h-100"
              />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <SectionBadge>Why Nexora</SectionBadge>
            <h2 className="max-w-2xl text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
              Project support built around real requirements.
            </h2>
            <p className="mt-5 max-w-xl text-base font-medium leading-7 text-muted-foreground">
              Nexora structures manpower and industrial support around what a project actually
              needs, not a fixed package.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {whyNexoraPoints.map((point) => (
                <div key={point.title} className="flex gap-3.5">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md border border-primary/10 bg-white text-primary">
                    <point.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-foreground">{point.title}</div>
                    <p className="mt-1 text-sm font-medium leading-6 text-muted-foreground">
                      {point.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <SecondaryButton to="/manpower">View Technical Manpower</SecondaryButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* --- 5. INDUSTRIES SERVED -------------------------------------------------------- */

const industryHref = {
  "oil-and-gas": "/industries/oil-and-gas",
  lng: "/industries/lng",
  petrochemical: "/industries/petrochemical",
  infrastructure: "/industries/infrastructure",
  manufacturing: "/industries/manufacturing",
  epc: "/industries/epc",
} as const;

function IndustriesGridSection() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mb-12 max-w-4xl">
          <SectionBadge>Industries We Serve</SectionBadge>
          <h2 className="text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
            Sector-specific support for controlled industrial environments.
          </h2>
        </Reveal>
        <div className="grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industryCards.map((industry, index) => (
            <Reveal key={industry.title} delay={index * 0.04}>
              <Link
                to={industryHref[industry.slug as keyof typeof industryHref]}
                className="group relative block h-full min-h-77.5 overflow-hidden rounded-lg border border-white bg-dark-navy shadow-sm"
              >
                <img
                  src={industry.image}
                  alt={`${industry.title} industrial site`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-82 transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-dark-navy via-dark-navy/48 to-transparent" />
                <div className="absolute inset-x-6 bottom-6">
                  <h3 className="text-2xl font-extrabold text-white">{industry.title}</h3>
                  <p className="mt-3 text-sm font-medium leading-6 text-white/82">
                    {industry.summary}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- 6. REGIONAL FOCUS ------------------------------------------------------------ */

const priorityMarkets = [
  { code: "QA", country: "Qatar", role: "Headquarters & Home Market", primary: true },
  { code: "SA", country: "Saudi Arabia", role: "Priority Market", primary: false },
  { code: "KW", country: "Kuwait", role: "Priority Market", primary: false },
];

function RegionalFocusSection() {
  return (
    <section className="bg-light-gray py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
        <Reveal>
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-primary">
              Regional Focus
            </span>
            <span className="h-px w-10 bg-primary" />
          </div>
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
            Headquartered in Qatar. Supporting Priority Gulf Markets.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-8 text-muted-foreground">
            NEXORA coordinates its services from Qatar, with Qatar as its home market and Saudi
            Arabia and Kuwait as priority markets.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {priorityMarkets.map((market) => (
              <div
                key={market.code}
                className={
                  market.primary
                    ? "rounded-lg border-2 border-energy bg-dark-navy p-6 shadow-elevated"
                    : "rounded-lg border border-border bg-white p-6 shadow-sm"
                }
              >
                <div
                  className={
                    market.primary
                      ? "mx-auto grid h-12 w-12 place-items-center rounded-md bg-energy/15 text-energy"
                      : "mx-auto grid h-12 w-12 place-items-center rounded-md bg-primary/8 text-primary"
                  }
                >
                  <MapPin className="h-6 w-6" />
                </div>
                <div
                  className={
                    market.primary
                      ? "mt-4 text-xl font-extrabold text-white"
                      : "mt-4 text-xl font-extrabold text-foreground"
                  }
                >
                  {market.country}
                </div>
                <div
                  className={
                    market.primary
                      ? "mt-1 text-xs font-extrabold uppercase tracking-[0.12em] text-energy"
                      : "mt-1 text-xs font-extrabold uppercase tracking-[0.12em] text-primary"
                  }
                >
                  {market.role}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --- 7. FINAL ENQUIRY CTA ---------------------------------------------------------- */

function FinalCTASection() {
  return (
    <section className="border-t border-white/10 bg-dark-navy py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <Reveal>
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-energy" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-energy">
              Request Support
            </span>
            <span className="h-px w-10 bg-energy" />
          </div>
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight text-white md:text-5xl">
            Tell Us What Your Project Requires
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base font-medium leading-7 text-white/72">
            Share your workforce, industrial-service or procurement requirement, and our team will
            review the details with you.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <PrimaryButton to="/manpower">Request Manpower</PrimaryButton>
            <SecondaryButton to="/contact" dark>
              Contact Nexora
            </SecondaryButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
