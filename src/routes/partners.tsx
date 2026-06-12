import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Building2,
  CheckCircle2,
  Globe,
  HardHat,
  Network,
  Package,
  Send,
  Settings2,
  Shield,
  Users,
  Wrench,
} from "lucide-react";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import about from "@/assets/about-engineers.jpg";
import pRefinery from "@/assets/project-refinery.jpg";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners | Nexora Energy Solutions" },
      {
        name: "description",
        content:
          "Nexora Energy Solutions partners with energy operators, EPC contractors, equipment manufacturers and technical institutions across the GCC and internationally.",
      },
      { property: "og:title", content: "Partners — Nexora Energy Solutions" },
      {
        property: "og:description",
        content:
          "Strategic partnerships with energy operators, EPC contractors and industrial suppliers across the GCC.",
      },
      { property: "og:url", content: "/partners" },
    ],
    links: [{ rel: "canonical", href: "/partners" }],
  }),
  component: PartnersPage,
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

function PartnersPage() {
  return (
    <Layout>
      <PartnersHero />
      <PartnerTypes />
      <ClientsSection />
      <GCCPresence />
      <PartnerBenefits />
      <PartnershipCTA />
    </Layout>
  );
}

/* ─── HERO ────────────────────────────────────────────────────────────────── */

function PartnersHero() {
  return (
    <section className="relative min-h-[75vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={about}
          alt="Engineering professionals in partnership discussion"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-linear-to-r from-navy/92 via-navy/80 to-navy/50" />
        <div className="absolute inset-0 bg-linear-to-t from-navy/55 to-transparent" />
      </div>
      <div className="absolute inset-0 grid-bg opacity-8" />
      <div className="absolute right-0 top-0 h-[38rem] w-[38rem] rounded-full bg-radial from-energy/14 to-transparent blur-3xl" />

      <div className="relative mx-auto flex min-h-[75vh] max-w-7xl flex-col justify-center px-6 pb-16 pt-36">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mb-8 self-start"
        >
          <Eyebrow light>Global Partnerships</Eyebrow>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-3xl font-display text-5xl font-extrabold leading-[1.02] text-white md:text-6xl"
        >
          Built on <span className="text-energy">Trusted Industrial Partnerships</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-white/68 md:text-lg"
        >
          Nexora&apos;s capability is strengthened by strategic relationships with energy operators,
          EPC contractors, equipment manufacturers and international manpower networks — enabling
          rapid, compliant and reliable project support across the GCC.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-14 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {[
            { v: 6, s: "", l: "GCC Countries" },
            { v: 50, s: "+", l: "Active Partners" },
            { v: 15, s: "+", l: "Years Networks" },
            { v: 100, s: "%", l: "Compliant Supply" },
          ].map((stat) => (
            <div
              key={stat.l}
              className="rounded-2xl border border-white/12 bg-white/7 p-4 text-center backdrop-blur"
            >
              <div className="font-display text-2xl font-extrabold text-white">
                <Counter value={stat.v} suffix={stat.s} />
              </div>
              <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/50">
                {stat.l}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ─── PARTNER TYPES ───────────────────────────────────────────────────────── */

const partnerTypes = [
  {
    icon: HardHat,
    title: "Energy Operators",
    desc: "Direct relationships with Kuwait Oil Company (KOC), KNPC, QatarEnergy and GCC state oil companies as primary client partners.",
    examples: ["KOC", "KNPC", "QatarEnergy", "ADNOC", "Saudi Aramco"],
    color: "bg-primary/8 text-primary ring-primary/12",
  },
  {
    icon: Building2,
    title: "EPC Contractors",
    desc: "Trusted subcontractor to major EPC and construction contractors executing capital projects in the energy and industrial sector.",
    examples: ["Technip Energies", "L&T Construction", "CCC", "HBK Engineering"],
    color: "bg-energy/10 text-energy ring-energy/15",
  },
  {
    icon: Settings2,
    title: "OEM & Manufacturers",
    desc: "Authorised or approved distributor relationships with global valve, instrumentation and electrical product manufacturers for compliant supply.",
    examples: ["ABB", "GE", "Emerson", "Rosemount", "Endress+Hauser"],
    color: "bg-navy/8 text-navy ring-navy/12",
  },
  {
    icon: Users,
    title: "Manpower Sourcing Networks",
    desc: "International networks across South Asia, Southeast Asia and the Philippines for sourcing qualified technical manpower to Qatar and GCC standards.",
    examples: ["Philippines", "India", "Sri Lanka", "Nepal"],
    color: "bg-primary/8 text-primary ring-primary/12",
  },
  {
    icon: Award,
    title: "Technical Training Bodies",
    desc: "Partnerships with recognised technical training and certification bodies to ensure workforce qualifications meet international energy-sector standards.",
    examples: ["OPITO", "NEBOSH", "ASME Training", "AWS Certification"],
    color: "bg-energy/10 text-energy ring-energy/15",
  },
  {
    icon: Package,
    title: "Logistics & Freight Partners",
    desc: "Established freight forwarding and customs clearance partners enabling efficient product delivery across Qatar and the GCC.",
    examples: ["Sea freight", "Air freight", "Last-mile delivery", "Customs clearance"],
    color: "bg-navy/8 text-navy ring-navy/12",
  },
];

function PartnerTypes() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-14 text-center">
          <Eyebrow>Partnership Ecosystem</Eyebrow>
          <h2 className="mt-5 text-4xl font-extrabold leading-[1.06] md:text-5xl">
            Six partnership categories.{" "}
            <span className="text-gradient-energy">One integrated network.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Nexora&apos;s value to clients comes from the depth of its partnership ecosystem —
            enabling rapid sourcing, compliant delivery and reliable project execution.
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {partnerTypes.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -5 }}
                className="group h-full rounded-2xl border border-border bg-white p-6 shadow-sm transition hover:shadow-elevated"
              >
                <div
                  className={`grid h-12 w-12 place-items-center rounded-xl ring-1 transition ${p.color}`}
                >
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.examples.map((ex) => (
                    <span
                      key={ex}
                      className="rounded-full border border-border px-2.5 py-1 text-[10px] font-semibold text-muted-foreground"
                    >
                      {ex}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CLIENTS ─────────────────────────────────────────────────────────────── */

const clientGroups = [
  {
    title: "Energy Operators",
    clients: ["QatarEnergy", "QatarEnergy LNG", "KOC", "KNPC", "QAFCO", "QAPCO", "QChem"],
  },
  {
    title: "EPC & Industrial",
    clients: [
      "Technip Energies",
      "L&T Construction",
      "CCC",
      "HBK Engineering",
      "Milaha",
      "ABB",
      "GE",
    ],
  },
  {
    title: "Government & Authorities",
    clients: ["Kuwait Municipality", "Ministry of Oil", "PAAFP", "KISR", "MPW Projects"],
  },
];

function ClientsSection() {
  return (
    <section className="border-y border-border bg-surface/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-12 text-center">
          <Eyebrow>Client Partners</Eyebrow>
          <h2 className="mt-5 text-4xl font-extrabold leading-[1.06] md:text-5xl">
            Supporting the region&apos;s{" "}
            <span className="text-gradient-energy">leading organisations.</span>
          </h2>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {clientGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.07}>
              <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                <div className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  {group.title}
                </div>
                <div className="space-y-2.5">
                  {group.clients.map((client) => (
                    <div
                      key={client}
                      className="flex items-center gap-3 rounded-xl border border-border bg-surface/50 px-4 py-3"
                    >
                      <div className="h-2 w-2 shrink-0 rounded-full bg-energy" />
                      <span className="font-display text-sm font-bold">{client}</span>
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

/* ─── GCC PRESENCE ────────────────────────────────────────────────────────── */

const gccPresence = [
  {
    code: "QA",
    country: "Qatar",
    role: "Headquarters",
    desc: "Primary operations hub. QatarEnergy, QatarEnergy LNG, QAFCO, QAPCO and EPC project support.",
    highlight: true,
  },
  {
    code: "KW",
    country: "Kuwait",
    role: "Active Market",
    desc: "KOC, KNPC and government project delivery.",
    highlight: false,
  },
  {
    code: "SA",
    country: "Saudi Arabia",
    role: "Active Market",
    desc: "Saudi Aramco aligned projects. SABIC and EPC contractor support.",
    highlight: false,
  },
  {
    code: "AE",
    country: "UAE",
    role: "Active Market",
    desc: "ADNOC and Abu Dhabi industrial sector manpower and services.",
    highlight: false,
  },
  {
    code: "BH",
    country: "Bahrain",
    role: "GCC Hub",
    desc: "BAPCO and regional government project support.",
    highlight: false,
  },
  {
    code: "OM",
    country: "Oman",
    role: "Active Market",
    desc: "PDO, OQ and upstream project manpower capability.",
    highlight: false,
  },
];

function GCCPresence() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-14 text-center">
          <Eyebrow>Regional Presence</Eyebrow>
          <h2 className="mt-5 text-4xl font-extrabold leading-[1.06] md:text-5xl">
            Six GCC countries. <span className="text-gradient-energy">One trusted partner.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Nexora maintains active deployment capability and client relationships across all six
            GCC member states, with headquarters in Doha, Qatar.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {gccPresence.map((c, i) => (
            <Reveal key={c.code} delay={i * 0.06}>
              <div
                className={`group h-full rounded-2xl border p-6 transition hover:shadow-elevated ${
                  c.highlight
                    ? "border-primary/25 bg-primary/4 shadow-sm"
                    : "border-border bg-white shadow-sm"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className={`grid h-12 w-12 place-items-center rounded-xl font-display text-lg font-extrabold ${
                      c.highlight ? "bg-primary text-white" : "bg-primary/8 text-primary"
                    }`}
                  >
                    {c.code}
                  </div>
                  <span
                    className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] ${
                      c.highlight
                        ? "bg-primary/12 text-primary"
                        : "border border-border text-muted-foreground"
                    }`}
                  >
                    {c.role}
                  </span>
                </div>
                <div className="mt-4 font-display text-lg font-bold">{c.country}</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PARTNERSHIP BENEFITS ────────────────────────────────────────────────── */

const benefits = [
  {
    icon: Shield,
    title: "Compliance-First",
    desc: "All partnerships structured around GCC regulatory and operator compliance requirements.",
  },
  {
    icon: Globe,
    title: "International Reach",
    desc: "Access to global sourcing networks while maintaining local GCC delivery capability.",
  },
  {
    icon: Network,
    title: "Supply Chain Depth",
    desc: "Multiple approved vendors per product category ensures continuity of supply.",
  },
  {
    icon: Wrench,
    title: "Technical Alignment",
    desc: "Workforce standards and product specifications aligned to operator expectations.",
  },
];

function PartnerBenefits() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-navy py-24">
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="absolute -top-24 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-radial from-energy/12 to-transparent blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <Eyebrow light>Partnership Value</Eyebrow>
            <h2 className="mt-5 text-4xl font-extrabold leading-[1.06] text-white md:text-5xl">
              Why Nexora&apos;s network benefits your project.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/55">
              Every partnership Nexora maintains is built on compliance, technical alignment and
              project delivery track record — so when you engage Nexora, you access a pre-qualified
              network of industrial partners without the procurement overhead.
            </p>
            <div className="mt-8 space-y-4">
              {benefits.map((b, i) => (
                <Reveal key={b.title} delay={i * 0.06}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/6 p-4 backdrop-blur transition hover:border-energy/30"
                  >
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-energy/14 text-energy">
                      <b.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-display text-sm font-bold text-white">{b.title}</div>
                      <p className="mt-1 text-xs leading-relaxed text-white/50">{b.desc}</p>
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
              <img
                src={pRefinery}
                alt="Industrial partnership and project execution"
                loading="lazy"
                className="h-[460px] w-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy/80 via-navy/20 to-transparent" />
              <div className="absolute inset-x-6 bottom-6 space-y-3">
                {[
                  { label: "Operator aligned", checked: true },
                  { label: "EPC contractor trusted", checked: true },
                  { label: "GCC regulatory compliant", checked: true },
                ].map((i) => (
                  <div key={i.label} className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 text-energy" />
                    <span className="text-sm font-bold text-white">{i.label}</span>
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

/* ─── PARTNERSHIP CTA ─────────────────────────────────────────────────────── */

function PartnershipCTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="rounded-[2rem] border border-border bg-white p-8 text-center shadow-elevated md:p-12">
            <Eyebrow>Partner With Us</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold md:text-4xl">
              Interested in a <span className="text-gradient-energy">strategic partnership?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
              Nexora welcomes partnerships with equipment manufacturers, training providers,
              engineering firms and GCC-based industrial companies aligned to our values and quality
              standards.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground transition hover:bg-primary/90 btn-glow-blue"
              >
                Discuss Partnership <Send className="h-4 w-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-bold text-foreground transition hover:border-energy-soft hover:text-primary"
              >
                About Nexora <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
