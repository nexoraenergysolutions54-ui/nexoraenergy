import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Clock3,
  FileCheck2,
  HardHat,
  ListChecks,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import type { ReactNode } from "react";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import {
  heroSlides,
  industrialImages,
  industryCards,
  primaryServices,
  site,
  trustCards,
} from "@/lib/enterprise-content";
import { organizationSchema } from "@/lib/schema";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Nexora Energy Solutions | Technical Manpower & Industrial Services in Qatar and GCC",
      },
      {
        name: "description",
        content:
          "Nexora Energy Solutions supplies technical manpower, shutdown support, maintenance teams, procurement support and industrial services for Qatar and GCC energy projects.",
      },
      { property: "og:title", content: "Nexora Energy Solutions" },
      {
        property: "og:description",
        content:
          "Qatar-based technical manpower and industrial services for LNG, oil and gas, EPC, petrochemical and infrastructure projects across the GCC.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: site.url },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Nexora Energy Solutions | Technical Manpower & Industrial Services",
      },
    ],
    links: [{ rel: "canonical", href: site.url }],
  }),
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

function JsonLd({ data }: { data: unknown }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

function Home() {
  return (
    <Layout>
      <JsonLd data={organizationSchema()} />
      <HeroSection />
      <TrustMarkersSection />
      <BuyerFitSection />
      <ClientConfidenceSection />
      <ServiceFocusSection />
      <CapabilityMatrixSection />
      <ProjectScenarioSection />
      <IndustriesGridSection />
      <GccCoverageSection />
      <WhyNexoraSection />
      <InsightsSection />
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

function HeroSection() {
  const slideSeconds = 7;

  return (
    <section className="relative min-h-[90svh] overflow-hidden bg-dark-navy" aria-label="Nexora">
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.label}
            className="hero-cinema-frame absolute inset-0"
            style={{ animationDelay: `${index * slideSeconds}s` }}
          >
            <img
              src={slide.image}
              alt=""
              aria-hidden="true"
              fetchPriority={index === 0 ? "high" : undefined}
              loading={index === 0 ? "eager" : "lazy"}
              className={`hero-cinema-image h-full w-full object-cover ${slide.position}`}
              style={{ animationDelay: `${index * slideSeconds}s` }}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,17,31,0.96),rgba(4,28,50,0.82)_42%,rgba(4,28,50,0.28)_76%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,17,31,0.28),transparent_38%,rgba(2,17,31,0.66))]" />
      </div>

      <div className="relative mx-auto flex min-h-[90svh] max-w-7xl items-center px-6 pb-16 pt-32 lg:px-8">
        <div className="max-w-5xl">
          <motion.div
            initial="hidden"
            animate="show"
            custom={0}
            variants={heroItem}
            className="mb-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-extrabold uppercase tracking-[0.2em] text-white/72"
          >
            <span className="h-px w-11 bg-energy" />
            Qatar based. GCC ready. Site focused.
          </motion.div>
          <motion.h1
            initial="hidden"
            animate="show"
            custom={1}
            variants={heroItem}
            className="max-w-4xl text-[40px] font-extrabold leading-[1.04] tracking-display text-white sm:text-5xl md:text-6xl lg:text-[70px]"
          >
            Qualified technical manpower for Qatar and GCC energy projects.
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="show"
            custom={2}
            variants={heroItem}
            className="mt-7 max-w-3xl text-base font-medium leading-8 text-white/78 md:text-lg"
          >
            Nexora supports LNG operators, EPC contractors, petrochemical facilities and industrial
            project teams with qualified personnel, shutdown support, maintenance coordination and
            procurement assistance across Qatar and the GCC.
          </motion.p>
          <motion.div
            initial="hidden"
            animate="show"
            custom={3}
            variants={heroItem}
            className="mt-9 flex flex-wrap gap-4"
          >
            <PrimaryButton to="/manpower">Request manpower support</PrimaryButton>
            <SecondaryButton to="/industrial-services" dark>
              View capabilities
            </SecondaryButton>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="show"
            custom={4}
            variants={heroItem}
            className="mt-10 grid max-w-3xl gap-px overflow-hidden rounded-md border border-white/12 bg-white/12 sm:grid-cols-3"
          >
            {[
              ["500+", "workforce pool"],
              ["24/7", "coordination"],
              ["6", "GCC markets"],
            ].map(([value, label]) => (
              <div key={label} className="bg-dark-navy/62 px-5 py-4">
                <div className="font-display text-2xl font-extrabold text-energy">{value}</div>
                <div className="mt-1 text-sm font-bold text-white/78">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TrustMarkersSection() {
  const markers = [
    {
      icon: ShieldCheck,
      label: "QHSE documentation",
      text: "Personnel records, training, certificates and site requirements prepared before mobilisation.",
    },
    {
      icon: HardHat,
      label: "Shutdown manpower",
      text: "Multi-discipline support for planned maintenance windows and controlled plant access.",
    },
    {
      icon: ClipboardCheck,
      label: "EPC coordination",
      text: "Clear communication across procurement, project controls, supervision and site teams.",
    },
    {
      icon: CalendarClock,
      label: "GCC mobilisation",
      text: "Doha-based coordination for Qatar, Saudi Arabia, UAE, Kuwait, Bahrain and Oman.",
    },
  ];

  return (
    <section className="border-b border-border bg-white py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {markers.map((item) => (
            <div
              key={item.label}
              className="relative overflow-hidden rounded-lg border border-border bg-light-gray p-6 shadow-sm"
            >
              <span className="absolute inset-x-0 top-0 h-1 bg-energy" />
              <div className="grid h-14 w-14 place-items-center rounded-md border border-primary/10 bg-white text-primary shadow-sm">
                <item.icon className="h-7 w-7" />
              </div>
              <div className="mt-5 text-base font-extrabold uppercase tracking-[0.11em] text-primary">
                {item.label}
              </div>
              <p className="mt-3 text-base font-medium leading-7 text-muted-foreground">
                {item.text}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function ClientConfidenceSection() {
  const confidence = [
    {
      label: "Industries served",
      value: "LNG, oil and gas, EPC, petrochemical, infrastructure and manufacturing.",
    },
    {
      label: "Typical roles",
      value: "Engineers, supervisors, QA/QC, HSE, technicians, welders, fitters and project staff.",
    },
    {
      label: "Documents checked",
      value: "Certificates, training records, medicals, project forms and site-specific HSE needs.",
    },
    {
      label: "Project types",
      value:
        "Shutdowns, maintenance campaigns, brownfield works, EPC packages and procurement scopes.",
    },
  ];
  const buyerOutputs = [
    "A clarified role and discipline list",
    "Mobilisation assumptions and timing",
    "Required documentation checklist",
    "Next-step response for manpower or service scope",
  ];

  return (
    <section className="border-y border-border bg-light-gray py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.78fr_0.52fr] lg:px-8">
        <Reveal>
          <SectionBadge>Client Confidence</SectionBadge>
          <h2 className="max-w-4xl text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
            A procurement-ready capability statement, not a generic staffing pitch.
          </h2>
          <div className="mt-8 overflow-hidden rounded-lg border border-border bg-white">
            {confidence.map((item) => (
              <div
                key={item.label}
                className="grid gap-3 border-b border-border p-5 md:grid-cols-[12rem_1fr] md:p-6 last:border-b-0"
              >
                <div className="text-sm font-extrabold uppercase tracking-[0.14em] text-primary">
                  {item.label}
                </div>
                <p className="text-base font-medium leading-7 text-muted-foreground">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <aside className="h-full rounded-lg border border-primary/10 bg-dark-navy p-7 text-white shadow-elevated">
            <div className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-energy">
              What clients receive
            </div>
            <h3 className="mt-5 text-3xl font-extrabold leading-tight">
              A clearer requirement before anyone reaches site.
            </h3>
            <div className="mt-7 grid gap-4">
              {buyerOutputs.map((item) => (
                <div key={item} className="flex gap-3 text-base font-bold leading-7 text-white/78">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-energy" />
                  {item}
                </div>
              ))}
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}

function BuyerFitSection() {
  const buyers = [
    "Energy operators planning controlled maintenance windows",
    "EPC contractors that need qualified site disciplines quickly",
    "Procurement teams coordinating industrial materials and documentation",
    "Project managers balancing headcount, certifications and schedule pressure",
  ];

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.82fr_0.78fr] lg:items-center lg:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-lg border border-border bg-dark-navy shadow-elevated">
            <img
              src={industrialImages.briefing}
              alt="Industrial project team receiving a field briefing"
              loading="lazy"
              className="h-130 w-full object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div>
            <SectionBadge>Who Nexora Supports</SectionBadge>
            <h2 className="max-w-3xl text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
              Built for buyers who cannot afford vague manpower promises.
            </h2>
            <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-muted-foreground">
              Nexora is positioned for project teams that need clear scope definition, site-ready
              personnel, document control and fast coordination across controlled industrial
              environments.
            </p>
            <div className="mt-8 grid gap-3">
              {buyers.map((buyer) => (
                <div
                  key={buyer}
                  className="flex gap-3 border-b border-border pb-4 text-base font-bold leading-7 text-primary last:border-b-0"
                >
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-energy" />
                  {buyer}
                </div>
              ))}
            </div>
            <div className="mt-9 flex flex-wrap gap-4">
              <SecondaryButton to="/industries">View sectors</SecondaryButton>
              <SecondaryButton to="/contact">Discuss requirement</SecondaryButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ServiceFocusSection() {
  const points = [
    "Engineers, supervisors, technicians and skilled trades",
    "Project, shutdown, maintenance and engineering support roles",
    "Documentation, certification and mobilisation coordination",
    "Personnel planning for Qatar and GCC industrial environments",
  ];

  return (
    <section className="bg-dark-navy py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <div className="overflow-hidden rounded-lg border border-white/10">
              <img
                src={industrialImages.manpower}
                alt="Engineers reviewing plans at an active industrial facility"
                loading="lazy"
                className="h-140 w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-energy" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-energy">
                Technical Manpower
              </span>
            </div>
            <h2 className="max-w-2xl text-3xl font-extrabold leading-tight text-white md:text-5xl">
              Workforce support planned around industrial project realities.
            </h2>
            <p className="mt-6 text-base font-medium leading-8 text-white/70">
              Nexora helps project teams secure the right disciplines for the right phase, from
              mobilisation and permit readiness to execution support and close-out.
            </p>
            <div className="mt-8 grid gap-4">
              {points.map((point) => (
                <div key={point} className="flex gap-3 text-sm font-bold leading-6 text-white/76">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-energy" />
                  {point}
                </div>
              ))}
            </div>
            <div className="mt-9 flex flex-wrap gap-4">
              <PrimaryButton to="/manpower">Request Manpower</PrimaryButton>
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

function ProjectScenarioSection() {
  const scenario = [
    ["Scope", "Controlled plant shutdown support with multi-discipline technical manpower."],
    ["Disciplines", "Supervisors, technicians, HSE support, QA/QC and document coordination."],
    ["Mobilisation", "Role matching, certificate review, site paperwork and deployment timing."],
    ["Close-out", "Project communication, replacement coordination and documentation follow-up."],
  ];

  return (
    <section className="relative overflow-hidden bg-dark-navy py-20 md:py-24">
      <img
        src={industrialImages.maintenance}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,17,31,0.96),rgba(2,17,31,0.78)_50%,rgba(2,17,31,0.92))]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.82fr_0.78fr] lg:items-center lg:px-8">
        <Reveal>
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-energy" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-energy">
              Project Scenario
            </span>
          </div>
          <h2 className="max-w-3xl text-3xl font-extrabold leading-tight text-white md:text-5xl">
            Shutdown manpower for a controlled plant maintenance window.
          </h2>
          <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-white/72">
            A realistic client request is rarely just a headcount. Nexora frames the scope around
            disciplines, documents, site conditions and timing so procurement and project teams can
            move without ambiguity.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <PrimaryButton to="/manpower">Send a shutdown requirement</PrimaryButton>
            <SecondaryButton to="/industrial-services" dark>
              View service support
            </SecondaryButton>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="overflow-hidden rounded-lg border border-white/12 bg-white/[0.07] shadow-elevated backdrop-blur">
            {scenario.map(([label, value]) => (
              <div
                key={label}
                className="grid gap-3 border-b border-white/10 p-5 md:grid-cols-[8rem_1fr] last:border-b-0"
              >
                <div className="text-sm font-extrabold uppercase tracking-[0.16em] text-energy">
                  {label}
                </div>
                <p className="text-base font-medium leading-7 text-white/78">{value}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CapabilityMatrixSection() {
  const capabilityRows = primaryServices.map((service, index) => ({
    ...service,
    stage: ["Manpower", "Shutdown", "Maintenance", "Procurement", "Project", "Engineering"][index],
  }));

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mb-12 grid gap-6 lg:grid-cols-[0.78fr_0.52fr] lg:items-end">
          <div>
            <SectionBadge>Industrial Services</SectionBadge>
            <h2 className="max-w-4xl text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
              One coordination model for manpower, maintenance, engineering and procurement.
            </h2>
          </div>
          <p className="max-w-xl text-base font-medium leading-7 text-muted-foreground">
            The offer is intentionally practical: define the scope, match the discipline, prepare
            documents, coordinate mobilisation and keep the project team informed.
          </p>
        </Reveal>
        <div className="overflow-hidden rounded-lg border border-border bg-light-gray">
          {capabilityRows.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.04}>
              <a
                href={`/services/${service.slug}`}
                className="group grid gap-5 border-b border-border bg-white p-5 transition hover:bg-light-gray md:grid-cols-[9rem_1fr_auto] md:items-center md:p-6 last:border-b-0"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-md border border-primary/10 bg-primary/5 text-primary">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-extrabold uppercase tracking-[0.12em] text-muted-foreground">
                    {service.stage}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-foreground">{service.title}</h3>
                  <p className="mt-2 text-base font-medium leading-7 text-muted-foreground">
                    {service.summary}
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-extrabold text-primary group-hover:text-energy">
                  View
                  <ArrowRight className="h-4 w-4" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustriesGridSection() {
  return (
    <section className="bg-light-gray py-20 md:py-24">
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
              <a
                href={`/industries/${industry.slug}`}
                className="group relative block h-full min-h-77.5 overflow-hidden rounded-lg border border-white bg-dark-navy shadow-sm"
              >
                <img
                  src={industry.image}
                  alt={`${industry.title} services`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-82 transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-dark-navy via-dark-navy/42 to-transparent" />
                <div className="absolute inset-x-6 bottom-6">
                  <h3 className="text-2xl font-extrabold text-white">{industry.title}</h3>
                  <p className="mt-3 text-sm font-medium leading-6 text-white/76">
                    {industry.summary}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function GccCoverageSection() {
  const coverageNotes = [
    {
      label: "Single coordination base",
      text: "Qatar-led communication for manpower, services and procurement follow-up.",
    },
    {
      label: "Regional deployment planning",
      text: "Support for documentation, timing and mobilisation across GCC project locations.",
    },
    {
      label: "Industrial buyer alignment",
      text: "Built for operators, EPC contractors and controlled facility environments.",
    },
  ];
  const countries = ["Qatar", "Saudi Arabia", "UAE", "Kuwait", "Bahrain", "Oman"];
  const indicators = [
    "24/7 Project Coordination",
    "Technical Manpower Deployment",
    "Industrial Services Support",
  ];

  return (
    <section className="relative overflow-hidden border-y border-border bg-[#f4f6f7] py-20 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:px-8">
        <Reveal>
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-primary">
              REGIONAL REACH
            </span>
          </div>
          <h2 className="max-w-xl text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
            Qatar Headquarters.
            <br />
            GCC Deployment.
          </h2>
          <p className="mt-6 max-w-xl text-base font-medium leading-8 text-muted-foreground">
            From Doha, Nexora coordinates technical manpower, industrial services, procurement
            support and project execution across Qatar, Saudi Arabia, UAE, Kuwait, Bahrain and Oman.
          </p>
          <div className="mt-9 grid gap-3">
            {coverageNotes.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-border bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-elevated"
              >
                <div className="text-base font-extrabold text-primary">{item.label}</div>
                <p className="mt-2 text-sm font-medium leading-6 text-muted-foreground">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="overflow-hidden rounded-lg border border-white bg-dark-navy shadow-elevated">
            <div className="relative h-62 overflow-hidden border-b border-white/10">
              <img
                src={industrialImages.execution}
                alt="Senior engineers and project coordinators reviewing engineering drawings at an industrial facility"
                loading="lazy"
                className="h-full w-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-linear-to-t from-dark-navy via-dark-navy/28 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-energy">
                  Regional operations
                </div>
                <h3 className="mt-2 text-3xl font-extrabold text-white">Qatar HQ to GCC sites</h3>
              </div>
            </div>
            <div className="grid gap-6 p-6">
              <div className="grid gap-2 sm:grid-cols-2">
                {countries.map((country) => (
                  <div
                    key={country}
                    className="flex items-center gap-2 rounded-md border border-white/10 bg-white/7 px-3 py-2 text-sm font-bold text-white/84"
                  >
                    <span className="h-2 w-2 rounded-full bg-energy" />
                    {country}
                  </div>
                ))}
              </div>
              <div className="grid gap-3 border-t border-white/10 pt-5 sm:grid-cols-3">
                {indicators.map((indicator) => (
                  <div key={indicator} className="text-sm font-extrabold leading-6 text-white/76">
                    {indicator}
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

function WhyNexoraSection() {
  const process = [
    {
      icon: ListChecks,
      title: "Requirement intake",
      text: "Clarify work location, disciplines, certifications, duration, rotation, reporting line and mobilisation date.",
    },
    {
      icon: UsersRound,
      title: "Role and team matching",
      text: "Align the request with available engineers, supervisors, technicians, trades or service support teams.",
    },
    {
      icon: ShieldCheck,
      title: "Documentation readiness",
      text: "Check training records, project requirements, HSE expectations and mobilisation documentation before site.",
    },
    {
      icon: CalendarClock,
      title: "Mobilisation tracking",
      text: "Coordinate the practical next steps with procurement, site contacts and project managers through deployment.",
    },
  ];

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_0.55fr] lg:items-end">
          <div>
            <SectionBadge>Why Nexora</SectionBadge>
            <h2 className="max-w-4xl text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
              Credibility comes from operational details, not decoration.
            </h2>
          </div>
          <p className="max-w-xl text-base font-medium leading-7 text-muted-foreground">
            Project teams choose Nexora because they need more than a name on a roster. They need
            personnel who are site-ready, compliant and supported by clear communication from
            request to deployment.
          </p>
        </Reveal>
        <div className="grid gap-10 lg:grid-cols-[0.88fr_0.52fr]">
          <div className="grid gap-0 overflow-hidden rounded-lg border border-border">
            {process.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.04}>
                <div className="grid gap-5 border-b border-border bg-white p-6 sm:grid-cols-[4rem_1fr] last:border-b-0">
                  <div className="flex items-start gap-3">
                    <span className="font-display text-sm font-extrabold text-muted-foreground">
                      0{index + 1}
                    </span>
                    <div className="grid h-11 w-11 place-items-center rounded-md border border-primary/10 bg-primary/5 text-primary">
                      <step.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-base font-medium leading-7 text-muted-foreground">
                      {step.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.08}>
            <aside className="h-full rounded-lg border border-border bg-light-gray p-6">
              <h3 className="text-2xl font-extrabold text-foreground">What gets checked</h3>
              <div className="mt-6 grid gap-4">
                {trustCards.map((card) => (
                  <div key={card.title} className="border-b border-border pb-4 last:border-b-0">
                    <div className="text-base font-extrabold text-primary">{card.title}</div>
                    <p className="mt-1 text-sm font-medium leading-6 text-muted-foreground">
                      {card.text}
                    </p>
                  </div>
                ))}
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InsightsSection() {
  const insights = [
    {
      icon: HardHat,
      category: "Technical Manpower",
      title: "How EPC teams plan manpower for shutdown and maintenance windows",
    },
    {
      icon: ShieldCheck,
      category: "LNG",
      title: "Documentation readiness for controlled LNG facility mobilisation",
    },
    {
      icon: FileCheck2,
      category: "Procurement",
      title: "What project buyers need from industrial materials suppliers",
    },
  ];

  return (
    <section className="border-y border-border bg-light-gray py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <SectionBadge>Insights</SectionBadge>
            <h2 className="max-w-3xl text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
              Practical notes for energy, manpower and industrial project teams.
            </h2>
          </div>
          <Link
            to="/news"
            className="inline-flex min-h-12 items-center gap-2 rounded-md border border-primary/20 px-6 py-3 text-sm font-extrabold text-primary transition hover:bg-primary/5"
          >
            View Insights
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
        <div className="overflow-hidden rounded-lg border border-border bg-white">
          {insights.map((insight, index) => (
            <Reveal key={insight.title} delay={index * 0.04}>
              <article className="grid gap-5 border-b border-border p-6 transition hover:bg-white/70 md:grid-cols-[3.5rem_1fr_auto] md:items-center last:border-b-0">
                <div className="grid h-11 w-11 place-items-center rounded-md bg-primary/5 text-primary">
                  <insight.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-energy">
                    {insight.category}
                  </p>
                  <h3 className="mt-2 text-xl font-extrabold leading-snug text-foreground">
                    {insight.title}
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2 text-sm font-extrabold text-muted-foreground">
                  <Clock3 className="h-4 w-4" />
                  Field note
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  const requestInputs = [
    "Discipline and headcount",
    "Project location and duration",
    "Certificates or HSE requirements",
    "Target mobilisation date",
  ];
  const responseOutputs = [
    "Availability response",
    "Role fit review",
    "Documentation checklist",
    "Mobilisation next step",
  ];

  return (
    <section className="border-t border-white/10 bg-dark-navy py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[0.92fr_0.72fr] lg:items-start">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-energy" />
                <span className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-energy">
                  Request Support
                </span>
              </div>
              <h2 className="max-w-4xl text-4xl font-extrabold leading-tight text-white md:text-6xl">
                Send your manpower requirement with the details project teams actually need.
              </h2>
              <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-white/70">
                Nexora responds around role fit, documentation readiness, timing and the practical
                mobilisation path for manpower, industrial services or procurement support.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <PrimaryButton to="/manpower">Request Manpower</PrimaryButton>
                <SecondaryButton to="/contact" dark>
                  Contact Nexora
                </SecondaryButton>
              </div>
            </div>
            <div className="grid gap-0 overflow-hidden rounded-lg border border-white/12 bg-white/[0.06] shadow-elevated">
              <div className="grid gap-4 border-b border-white/10 p-6 md:grid-cols-[7rem_1fr]">
                <div className="text-sm font-extrabold uppercase tracking-[0.2em] text-energy">
                  Send
                </div>
                <div className="grid gap-3">
                  {requestInputs.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-base font-bold leading-7 text-white/82"
                    >
                      <CheckCircle2 className="h-5 w-5 text-energy" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid gap-4 p-6 md:grid-cols-[7rem_1fr]">
                <div className="text-sm font-extrabold uppercase tracking-[0.2em] text-energy">
                  Receive
                </div>
                <div className="grid gap-3">
                  {responseOutputs.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-base font-bold leading-7 text-white/82"
                    >
                      <ArrowRight className="h-5 w-5 text-energy" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
