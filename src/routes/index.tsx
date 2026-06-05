import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Award,
  Building2,
  CheckCircle2,
  Cpu,
  Factory,
  Gauge,
  HardHat,
  Landmark,
  Network,
  Package,
  Shield,
  Target,
  Wrench,
  Zap,
} from "lucide-react";
import { Counter } from "@/components/Counter";
import { Layout } from "@/components/Layout";
import { Logo } from "@/components/Logo";
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
      { title: "Nexora Energy Solutions | Engineering Tomorrow's Energy Infrastructure" },
      {
        name: "description",
        content:
          "Nexora Energy Solutions delivers integrated engineering, industrial services, procurement, maintenance and operational support for Kuwait's energy sector.",
      },
      { property: "og:title", content: "Nexora Energy Solutions" },
      {
        property: "og:description",
        content:
          "Modern engineering, industrial services, procurement, maintenance and operational support for Kuwait's energy sector.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <Layout>
      <Hero />
      <TrustBar />
      <About />
      <Services />
      <Operations />
      <Industries />
      <Projects />
      <HSE />
      <FinalCTA />
    </Layout>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-32 pb-16 md:pt-40">
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Energy infrastructure and industrial operations in Kuwait"
          className="h-full w-full object-cover opacity-24"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-white/68" />
        <div className="absolute inset-0 grid-bg opacity-70" />
      </div>
      <div className="absolute -top-32 right-0 h-[36rem] w-[36rem] rounded-full gradient-radial-teal blur-3xl" />
      <div className="absolute top-40 left-0 h-[30rem] w-[30rem] rounded-full gradient-radial-blue blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-3 rounded-full border border-energy-soft bg-white/76 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-primary shadow-sm backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-energy" />
            Kuwait Energy Partner
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-8 max-w-5xl text-5xl font-extrabold leading-[1.02] text-foreground md:text-7xl lg:text-[84px]"
          >
            Engineering Tomorrow&apos;s{" "}
            <span className="text-gradient-energy">Energy Infrastructure</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            Nexora Energy Solutions delivers integrated engineering, industrial services,
            procurement, maintenance and operational support for Kuwait&apos;s energy sector.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-bold text-primary-foreground btn-glow-blue transition-all hover:-translate-y-0.5 hover:bg-primary/92"
            >
              Explore capabilities
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-white/72 px-7 py-4 text-sm font-bold text-foreground backdrop-blur transition-all hover:border-energy-soft hover:text-primary"
            >
              Discuss a project
              <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 grid max-w-2xl grid-cols-3 gap-3"
          >
            {[
              { value: "KOC", label: "Ready partner" },
              { value: "KNPC", label: "Aligned delivery" },
              { value: "EPC", label: "Contractor support" },
            ].map((item) => (
              <div
                key={item.value}
                className="rounded-2xl border border-border bg-white/70 p-4 backdrop-blur"
              >
                <div className="font-display text-xl font-bold text-primary">{item.value}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  {item.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.25 }}
          className="lg:col-span-5"
        >
          <OperationsDashboard />
        </motion.div>
      </div>
    </section>
  );
}

function OperationsDashboard() {
  const metrics = [
    { icon: Activity, label: "Asset uptime", value: "99.8%", tone: "text-primary" },
    { icon: Shield, label: "HSE compliance", value: "ISO", tone: "text-energy" },
    { icon: Gauge, label: "Response window", value: "24/7", tone: "text-primary" },
    { icon: Network, label: "Supply visibility", value: "Live", tone: "text-energy" },
  ];

  return (
    <div className="relative mx-auto max-w-md">
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary/18 to-energy/18 blur-2xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/74 p-6 shadow-elevated backdrop-blur-2xl">
        <div className="flex items-center justify-between gap-4">
          <Logo size={34} />
          <span className="rounded-full bg-energy/12 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-primary">
            Operations
          </span>
        </div>

        <div className="mt-8 rounded-3xl bg-navy p-5 text-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-white/60">
                Energy command layer
              </div>
              <div className="mt-2 font-display text-2xl font-bold">Reliability dashboard</div>
            </div>
            <Cpu className="h-8 w-8 text-energy" />
          </div>
          <svg viewBox="0 0 320 120" className="mt-7 h-28 w-full">
            <defs>
              <linearGradient id="energyLine" x1="0" x2="1">
                <stop offset="0%" stopColor="#4BC0A8" />
                <stop offset="100%" stopColor="#1565A8" />
              </linearGradient>
            </defs>
            <path
              d="M0 86 C42 18 66 95 112 48 C158 2 174 82 220 40 C262 4 282 54 320 24"
              fill="none"
              stroke="url(#energyLine)"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <path
              d="M0 86 C42 18 66 95 112 48 C158 2 174 82 220 40 C262 4 282 54 320 24 V120 H0Z"
              fill="url(#energyLine)"
              opacity="0.18"
            />
          </svg>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          {metrics.map((metric) => (
            <motion.div
              key={metric.label}
              whileHover={{ y: -4, scale: 1.02 }}
              className="rounded-2xl border border-border bg-white/78 p-4"
            >
              <metric.icon className={`h-5 w-5 ${metric.tone}`} />
              <div className="mt-4 font-display text-2xl font-bold text-foreground">
                {metric.value}
              </div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TrustBar() {
  const columns = [
    {
      icon: Shield,
      title: "Safety-led execution",
      items: ["HSE discipline", "Zero-harm culture", "Risk-controlled sites", "Permit-ready teams"],
    },
    {
      icon: Package,
      title: "Procurement governance",
      items: [
        "Vendor traceability",
        "Compliant sourcing",
        "Logistics control",
        "Documented handover",
      ],
    },
    {
      icon: Gauge,
      title: "Operational readiness",
      items: ["24/7 response", "Asset uptime", "Field support", "Maintenance planning"],
    },
    {
      icon: Landmark,
      title: "Kuwait energy sector",
      items: ["KOC ready", "KNPC aligned", "EPC partner support", "Local execution"],
    },
  ];

  return (
    <section className="border-y border-border bg-white/72 backdrop-blur">
      <div className="mx-auto grid max-w-7xl gap-px bg-border px-6 md:grid-cols-4">
        {columns.map((column, index) => (
          <div
            key={column.title}
            className="trust-ticker-card group relative overflow-hidden bg-white px-5 py-5"
          >
            <div className="mx-auto flex max-w-64 items-center justify-center gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/8 text-primary ring-1 ring-primary/10">
                <column.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0 text-left">
                <div className="truncate text-sm font-bold text-foreground">{column.title}</div>
                <div className="relative mt-1 h-7 overflow-hidden text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground">
                  <div
                    className="animate-trust-detail-ticker flex flex-col"
                    style={{ animationDelay: `${index * -1.4}s` }}
                  >
                    {[...column.items, column.items[0]].map((item, itemIndex) => (
                      <div key={`${item}-${itemIndex}`} className="grid h-7 content-center">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 scale-x-0 bg-gradient-to-r from-primary to-energy transition-transform duration-500 group-hover:scale-x-100" />
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  const stats = [
    { value: 50, suffix: "+", label: "Projects supported" },
    { value: 100, suffix: "+", label: "Industrial solutions" },
    { value: 99, suffix: "%", label: "Delivery satisfaction" },
    { value: 24, suffix: "/7", label: "Operations support" },
  ];

  return (
    <section className="relative overflow-hidden py-28">
      <div className="absolute right-0 top-24 h-[32rem] w-[32rem] rounded-full gradient-radial-teal blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        <Reveal>
          <SectionEyebrow>Enterprise energy partner</SectionEyebrow>
          <h2 className="mt-5 text-4xl font-extrabold leading-[1.06] md:text-6xl">
            Engineering depth for <span className="text-gradient-energy">critical operations.</span>
          </h2>
          <p className="mt-7 text-lg leading-relaxed text-muted-foreground">
            Nexora combines regional execution capability with international energy-sector
            standards. Our teams support engineering, procurement, industrial maintenance and site
            operations where reliability, safety and documentation discipline matter.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Safety-first project control",
              "Integrated procurement support",
              "Industrial maintenance delivery",
              "Data-led operational visibility",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-border bg-white p-4"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-energy" />
                <span className="text-sm font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/14 to-energy/18 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-elevated">
              <img
                src={about}
                alt="Engineers reviewing industrial operations data"
                loading="lazy"
                className="h-[520px] w-full object-cover"
              />
              <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/60 bg-white/82 p-5 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <Award className="h-6 w-6 text-energy" />
                  <div>
                    <div className="font-display text-lg font-bold">
                      International standards mindset
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Built for KOC, KNPC, EPC and partner expectations.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="relative mx-auto mt-20 grid max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-[2rem] border border-border bg-border px-0 md:grid-cols-4">
        {stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 0.05}>
            <motion.div whileHover={{ y: -4 }} className="h-full bg-white p-7 text-center md:p-9">
              <div className="font-display text-4xl font-extrabold text-primary md:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-energy-soft bg-white/74 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-primary backdrop-blur">
      <span className="h-1.5 w-1.5 rounded-full bg-energy" />
      {children}
    </span>
  );
}

const services = [
  {
    icon: Cpu,
    title: "Engineering Solutions",
    text: "Mechanical, electrical, instrumentation, automation and technical design support.",
  },
  {
    icon: Wrench,
    title: "Industrial Services",
    text: "Shutdown, turnaround, asset integrity and field operations for critical facilities.",
  },
  {
    icon: Package,
    title: "Procurement & Supply",
    text: "Vendor coordination, spare parts sourcing, logistics and compliant documentation.",
  },
  {
    icon: Activity,
    title: "Operations Support",
    text: "Planning, manpower, reporting and continuous improvement for live environments.",
  },
  {
    icon: Building2,
    title: "Infrastructure Delivery",
    text: "Installation, commissioning and project execution for energy assets.",
  },
  {
    icon: Shield,
    title: "HSE & Quality Systems",
    text: "Risk control, audits, training and quality governance embedded into every scope.",
  },
];

function Services() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-surface/70 py-28">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionEyebrow>Integrated capabilities</SectionEyebrow>
            <h2 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.06] md:text-6xl">
              One partner across the{" "}
              <span className="text-gradient-energy">energy asset lifecycle.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/services" className="inline-flex items-center gap-2 font-bold text-primary">
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.05}>
              <motion.article
                whileHover={{ y: -6 }}
                className="group h-full overflow-hidden rounded-[1.75rem] border border-border bg-white p-7 shadow-sm"
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/8 text-primary ring-1 ring-primary/10 transition group-hover:bg-energy/14 group-hover:text-primary">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:text-primary" />
                </div>
                <h3 className="mt-8 font-display text-xl font-bold">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.text}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Operations() {
  const rows = [
    { label: "Asset integrity", value: "87%", color: "bg-primary" },
    { label: "Preventive maintenance", value: "94%", color: "bg-energy" },
    { label: "Procurement traceability", value: "91%", color: "bg-primary" },
  ];

  return (
    <section className="py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] border border-border bg-navy p-6 text-white shadow-elevated">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-white/55">
                  Technology dashboard
                </div>
                <h2 className="mt-2 font-display text-3xl font-bold">Operational control view</h2>
              </div>
              <Zap className="h-8 w-8 text-energy" />
            </div>
            <div className="mt-8 space-y-5">
              {rows.map((row) => (
                <div key={row.label}>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="text-white/72">{row.label}</span>
                    <span className="font-bold">{row.value}</span>
                  </div>
                  <div className="h-3 rounded-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: row.value }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                      className={`h-full rounded-full ${row.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {["Live QA", "HSE", "Logistics"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/8 p-4 text-center"
                >
                  <div className="text-xs font-bold uppercase tracking-[0.14em] text-white/54">
                    {item}
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-energy" />
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <SectionEyebrow>Digital operating model</SectionEyebrow>
          <h2 className="mt-5 text-4xl font-extrabold leading-[1.06] md:text-6xl">
            Visibility for teams working on{" "}
            <span className="text-gradient-energy">high-consequence assets.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Nexora&apos;s experience is designed to feel modern, measurable and partner-ready:
            transparent reporting, clear accountability, disciplined HSE practices and responsive
            operational support.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const industries = [
  { icon: Factory, title: "Refining & Petrochemicals", image: pRefinery },
  { icon: Network, title: "Pipelines & Terminals", image: pPipeline },
  { icon: Zap, title: "Power & Utilities", image: pPlant },
  { icon: Landmark, title: "Government Programs", image: about },
  { icon: HardHat, title: "Industrial Facilities", image: pMaint },
  { icon: Cpu, title: "Automation & Controls", image: pEng },
];

function Industries() {
  return (
    <section className="border-y border-border bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow>Markets served</SectionEyebrow>
            <h2 className="mt-5 text-4xl font-extrabold leading-[1.06] md:text-6xl">
              Built for Kuwait&apos;s{" "}
              <span className="text-gradient-energy">critical energy ecosystem.</span>
            </h2>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <Reveal key={industry.title} delay={index * 0.05}>
              <Link
                to="/industries"
                className="group block overflow-hidden rounded-[1.75rem] border border-border bg-card"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/68 via-navy/10 to-transparent" />
                  <industry.icon className="absolute left-5 top-5 h-8 w-8 text-white" />
                </div>
                <div className="flex items-center justify-between gap-4 p-6">
                  <h3 className="font-display text-xl font-bold">{industry.title}</h3>
                  <ArrowUpRight className="h-5 w-5 text-primary" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    { image: pRefinery, title: "Refinery Turnaround Support", category: "Maintenance" },
    { image: pPipeline, title: "Pipeline Integrity Program", category: "Infrastructure" },
    { image: pEng, title: "Engineering & Controls Upgrade", category: "Automation" },
  ];

  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionEyebrow>Delivery proof</SectionEyebrow>
            <h2 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.06] md:text-6xl">
              Practical execution for{" "}
              <span className="text-gradient-energy">industrial-scale programs.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/projects" className="inline-flex items-center gap-2 font-bold text-primary">
              View portfolio <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.07}>
              <article className="group overflow-hidden rounded-[1.75rem] border border-border bg-white hover-lift">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-5 top-5 rounded-full border border-white/60 bg-white/82 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-primary backdrop-blur">
                    {project.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Structured delivery, documentation control and safety leadership for demanding
                    industrial environments.
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function HSE() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-surface/75 py-28">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <Reveal>
          <SectionEyebrow>Safety and reliability</SectionEyebrow>
          <h2 className="mt-5 text-4xl font-extrabold leading-[1.06] md:text-6xl">
            Trust starts with <span className="text-gradient-energy">disciplined execution.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            HSE, quality assurance and project governance are built into planning, procurement, site
            delivery and handover. Nexora is structured for operators and EPC partners who require
            transparent control.
          </p>
          <Link
            to="/hse"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-bold text-primary-foreground btn-glow-blue"
          >
            View HSE standards <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="grid gap-4">
            {[
              { icon: Shield, title: "Zero-compromise safety culture" },
              { icon: Target, title: "Quality gates and documented controls" },
              { icon: Award, title: "International partner expectations" },
            ].map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 rounded-2xl border border-border bg-white p-5 shadow-sm"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-energy/14 text-primary">
                  <item.icon className="h-6 w-6" />
                </div>
                <div className="font-display text-lg font-bold">{item.title}</div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] bg-navy p-8 text-center text-white md:p-16">
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="absolute -top-40 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full gradient-radial-teal blur-3xl" />
          <Reveal>
            <div className="relative">
              <SectionEyebrow>Partner with Nexora</SectionEyebrow>
              <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold leading-[1.06] md:text-6xl">
                Ready to support your next energy infrastructure program.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
                Bring Nexora into engineering, procurement, maintenance or operations scopes that
                demand trust, speed and operational excellence.
              </p>
              <Link
                to="/contact"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-primary transition hover:bg-energy hover:text-navy"
              >
                Start the conversation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
