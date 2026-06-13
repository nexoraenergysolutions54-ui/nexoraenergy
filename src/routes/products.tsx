import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  FileText,
  Globe,
  Package,
  Send,
  Settings2,
  Shield,
  Zap,
} from "lucide-react";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/enterprise-content";
import pPlant from "@/assets/project-plant.jpg";
import pEng from "@/assets/project-engineering.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products & Procurement | Nexora Energy Solutions" },
      {
        name: "description",
        content:
          "Nexora Energy Solutions supplies industrial valves, instrumentation and electrical products for energy, LNG, petrochemical and infrastructure projects across the GCC.",
      },
      { property: "og:title", content: "Products & Procurement - Nexora Energy Solutions" },
      {
        property: "og:description",
        content:
          "Industrial valves, instrumentation and electrical products for GCC energy projects. Capability-driven supply - not ecommerce.",
      },
      { property: "og:url", content: `${site.url}/products` },
    ],
    links: [{ rel: "canonical", href: `${site.url}/products` }],
  }),
  component: ProductsPage,
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

function ProductsPage() {
  return (
    <Layout>
      <ProductsHero />
      <ProductsCapability />
      <ProductCategories />
      <ProcurementProcess />
      <ProductsCTA />
    </Layout>
  );
}

/* --- HERO ------------------------------------------------------------------ */

function ProductsHero() {
  return (
    <section className="relative min-h-[75vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={pPlant}
          alt="Industrial plant and procurement operations"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-linear-to-r from-navy/90 via-navy/75 to-navy/45" />
        <div className="absolute inset-0 bg-linear-to-t from-navy/55 to-transparent" />
      </div>
      <div className="absolute inset-0 grid-bg opacity-8" />

      <div className="relative mx-auto flex min-h-[75vh] max-w-7xl flex-col justify-center px-6 pb-16 pt-36">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mb-8 self-start"
        >
          <Eyebrow light>Products &amp; Procurement</Eyebrow>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-3xl font-display text-5xl font-extrabold leading-[1.02] text-white md:text-6xl"
        >
          Industrial Supply <span className="text-energy">Capability for Energy Projects</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-white/68 md:text-lg"
        >
          Nexora supplies industrial valves, instrumentation and electrical products to energy, LNG,
          petrochemical and EPC projects across Qatar and the GCC. This is procurement capability -
          not an ecommerce catalogue.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.34 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#enquire"
            className="inline-flex items-center gap-2 rounded-full bg-energy px-7 py-4 text-sm font-bold text-navy transition hover:-translate-y-0.5 hover:bg-energy/90 btn-glow-teal"
          >
            Request Supply <ArrowRight className="h-4 w-4" />
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur transition hover:border-white/40 hover:bg-white/16"
          >
            Contact Procurement Team <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* --- CAPABILITY OVERVIEW --------------------------------------------------- */

function ProductsCapability() {
  const points = [
    "API, ASME and ISO compliant products",
    "OEM and approved vendor sourcing",
    "Material traceability documentation",
    "Inspection and test certificates",
    "Lead time management and expediting",
    "Customs clearance and logistics",
  ];

  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        <Reveal>
          <Eyebrow>Procurement Capability</Eyebrow>
          <h2 className="mt-5 text-4xl font-extrabold leading-[1.06] md:text-5xl">
            Supply chain support for{" "}
            <span className="text-gradient-energy">critical project needs.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Nexora maintains relationships with approved manufacturers and distributors to source
            industrial valves, instrumentation and electrical products that meet your project
            specifications and quality standards. Every supply is documented for full traceability.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {points.map((p) => (
              <div
                key={p}
                className="flex items-center gap-3 rounded-xl border border-border bg-white p-3.5"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-energy" />
                <span className="text-sm font-semibold">{p}</span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-white shadow-elevated">
            <img
              src={pEng}
              alt="Engineering and procurement operations"
              loading="lazy"
              className="h-[420px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-navy/60 to-transparent" />
            <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/55 bg-white/85 p-4 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/8 text-primary">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display text-sm font-bold">API / ASME Compliant Supply</div>
                  <div className="text-xs text-muted-foreground">
                    Full material traceability from mill to site
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

/* --- PRODUCT CATEGORIES ---------------------------------------------------- */

const categories = [
  {
    icon: Settings2,
    title: "Ball Valves",
    standards: "API 6D Â· ASME B16.34",
    sizes: '1/2" - 60"',
    classes: "Class 150 - 2500",
    materials: "Carbon Steel, Stainless Steel, Alloy Steel",
    applications: "Oil & Gas, LNG, Petrochemical, Water",
    desc: "Full bore and reduced bore ball valves for on/off and throttling service in demanding pipeline and process applications.",
  },
  {
    icon: Settings2,
    title: "Butterfly Valves",
    standards: "API 609 Â· ASME B16.5",
    sizes: '2" - 120"',
    classes: "PN 6 - PN 40 / Class 150-300",
    materials: "Ductile Iron, Carbon Steel, Stainless Steel",
    applications: "Water Treatment, Gas, Process",
    desc: "Wafer, lug and double-flanged butterfly valves for flow control and isolation in large-diameter pipeline systems.",
  },
  {
    icon: Settings2,
    title: "Gate Valves",
    standards: "API 600 Â· API 602",
    sizes: '1/2" - 72"',
    classes: "Class 150 - 4500",
    materials: "Cast Carbon Steel, Forged Steel, Alloy",
    applications: "Upstream, Midstream, Refineries",
    desc: "Full port gate valves providing bi-directional zero-leakage isolation for high-pressure hydrocarbon service.",
  },
  {
    icon: Settings2,
    title: "Globe Valves",
    standards: "API 623 Â· ASME B16.10",
    sizes: '1/2" - 24"',
    classes: "Class 150 - 2500",
    materials: "Carbon Steel, Stainless, Duplex SS",
    applications: "Process, Refinery, Petrochemical",
    desc: "Rising stem globe valves for precision flow control in steam, process fluid and high-pressure hydrocarbon service.",
  },
  {
    icon: Settings2,
    title: "Control Valves",
    standards: "ANSI/FCI 70-2 Â· IEC 60534",
    sizes: '1/2" - 36"',
    classes: "Class 150 - 900",
    materials: "Carbon Steel, Stainless, Exotic Alloys",
    applications: "Process Control, DCS Integration",
    desc: "Pneumatic and electric actuated control valves for precise flow regulation in process plant and refinery applications.",
  },
  {
    icon: Zap,
    title: "Instrumentation",
    standards: "IEC Â· ATEX Â· SIL",
    types: "Pressure, Temperature, Flow, Level",
    certifications: "ATEX Zone 0/1/2, IECEx, SIL 2/3",
    brands: "Rosemount, Endress+Hauser, Yokogawa",
    applications: "DCS, ESD, SCADA, Metering",
    desc: "Field instrumentation across pressure, temperature, flow and level measurement for process monitoring and safety systems.",
  },
  {
    icon: Zap,
    title: "Electrical Products",
    standards: "IEC Â· ATEX Â· BS",
    types: "Switchgear, LV/MV Panels, Cables",
    certifications: "ATEX, IECEx, CE Marked",
    brands: "ABB, Schneider, Siemens Compatible",
    applications: "Power Distribution, Instrumentation",
    desc: "LV/MV switchgear, distribution panels, cable management systems and hazardous area electrical accessories for industrial facilities.",
  },
];

function ProductCategories() {
  return (
    <section className="border-y border-border bg-surface/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-12 text-center">
          <Eyebrow>Product Categories</Eyebrow>
          <h2 className="mt-5 text-4xl font-extrabold leading-[1.06] md:text-5xl">
            Valves, instruments &amp;{" "}
            <span className="text-gradient-energy">electrical products.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Specification-driven supply. Not a commodity catalogue - every item is sourced to meet
            your project&apos;s technical, quality and documentation requirements.
          </p>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {categories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -4 }}
                className="group h-full rounded-2xl border border-border bg-white p-6 shadow-sm transition hover:border-primary/30 hover:shadow-elevated"
              >
                {/* Header */}
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/8 text-primary ring-1 ring-primary/10">
                    <Package className="h-5 w-5" />
                  </div>
                  <span className="rounded-full border border-border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    {cat.standards.split("Â·")[0].trim()}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold">{cat.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{cat.desc}</p>

                {/* Specs table */}
                <div className="mt-4 space-y-2 rounded-xl border border-border bg-surface/60 p-3">
                  {cat.standards && <SpecRow label="Standards" value={cat.standards} />}
                  {cat.sizes && <SpecRow label="Size Range" value={cat.sizes} />}
                  {cat.classes && <SpecRow label="Pressure Class" value={cat.classes} />}
                  {cat.materials && <SpecRow label="Materials" value={cat.materials} />}
                  {cat.types && <SpecRow label="Types" value={cat.types} />}
                  {cat.certifications && (
                    <SpecRow label="Certifications" value={cat.certifications} />
                  )}
                  {cat.applications && <SpecRow label="Applications" value={cat.applications} />}
                </div>

                <a
                  href="#enquire"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-primary transition hover:text-primary/80"
                >
                  Request supply <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start gap-2 text-xs">
      <span className="w-24 shrink-0 font-semibold text-muted-foreground">{label}</span>
      <span className="text-foreground">{value}</span>
    </div>
  );
}

/* --- PROCUREMENT PROCESS --------------------------------------------------- */

const procSteps = [
  {
    icon: FileText,
    title: "RFQ Review",
    desc: "Submit your specification, quantity and required delivery date.",
  },
  {
    icon: Globe,
    title: "Vendor Sourcing",
    desc: "Nexora identifies approved manufacturers and distributors.",
  },
  {
    icon: Shield,
    title: "Quality Confirmation",
    desc: "Mill certs, test reports and inspection requirements confirmed.",
  },
  {
    icon: Package,
    title: "Delivery & Handover",
    desc: "Products delivered with full documentation package.",
  },
];

function ProcurementProcess() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-14 text-center">
          <Eyebrow>Procurement Process</Eyebrow>
          <h2 className="mt-5 text-4xl font-extrabold leading-[1.06] md:text-5xl">
            From RFQ to delivery. <span className="text-gradient-energy">Fully documented.</span>
          </h2>
        </Reveal>

        <div className="relative">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-linear-to-r from-transparent via-primary/20 to-transparent lg:block" />
          <div className="grid gap-8 lg:grid-cols-4">
            {procSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <div className="group flex flex-col items-center text-center">
                  <div className="relative z-10 mb-5 grid h-16 w-16 place-items-center rounded-full border-2 border-border bg-white shadow-sm transition group-hover:border-energy group-hover:shadow-elevated">
                    <step.icon className="h-6 w-6 text-primary transition group-hover:text-energy" />
                    <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-primary text-[9px] font-bold text-white">
                      0{i + 1}
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

/* --- CTA / ENQUIRY --------------------------------------------------------- */

function ProductsCTA() {
  return (
    <section id="enquire" className="border-t border-border bg-surface/60 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal className="mb-10 text-center">
          <Eyebrow>Supply Enquiry</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold md:text-4xl">
            Submit your supply <span className="text-gradient-energy">requirement.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
            Provide your specification and our procurement team will respond with vendor options,
            lead times and pricing within two business days.
          </p>
        </Reveal>

        <Reveal>
          <form className="space-y-4 rounded-[2rem] border border-border bg-white p-6 shadow-sm md:p-10">
            <div className="grid gap-4 sm:grid-cols-2">
              <FormField label="Company Name *" placeholder="Project owner or EPC" />
              <FormField label="Contact Name *" placeholder="Full name" />
              <FormField label="Email *" type="email" placeholder="procurement@company.com" />
              <FormField label="Phone / WhatsApp" placeholder="+974 or international..." />
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                Product Category
              </label>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  "Ball Valves",
                  "Butterfly Valves",
                  "Gate Valves",
                  "Globe Valves",
                  "Control Valves",
                  "Instrumentation",
                  "Electrical Products",
                ].map((p) => (
                  <button
                    key={p}
                    type="button"
                    className="rounded-full border border-border px-4 py-1.5 text-xs font-bold text-muted-foreground transition hover:border-primary/40 hover:text-primary"
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                Technical Specification / Requirement
              </label>
              <textarea
                rows={5}
                placeholder="Please provide: product type, size, class/rating, quantity, material, applicable standards, and required delivery date..."
                className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground/60 focus:border-energy-soft focus:ring-4 focus:ring-energy/10"
              />
            </div>

            <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-border bg-surface/60 px-4 py-4 text-sm text-muted-foreground transition hover:border-energy-soft">
              <FileText className="h-5 w-5 shrink-0 text-primary" />
              <span>
                <span className="font-bold text-foreground">Attach RFQ or datasheet</span> - PDF,
                Excel (optional, max 10 MB)
              </span>
              <input type="file" accept=".pdf,.xls,.xlsx,.doc,.docx" className="hidden" />
            </label>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-bold text-primary-foreground transition hover:bg-primary/90 btn-glow-blue"
            >
              Submit Supply Enquiry <Send className="h-4 w-4" />
            </button>
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
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground/60 focus:border-energy-soft focus:ring-4 focus:ring-energy/10"
      />
    </div>
  );
}
