import { EnquiryForm } from "@/components/EnquiryForm";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, ClipboardList, FileText, Search, Truck } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { productCategories } from "@/lib/enterprise-content";
import { seoHead } from "@/lib/seo";
import pPlant from "@/assets/optimized/project-plant.webp";
import pEng from "@/assets/optimized/project-engineering.webp";

export const Route = createFileRoute("/products")({
  head: () => seoHead("/products"),
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
      <ProcurementApproach />
      <ProductCategoriesSection />
      <ProcurementProcess />
      <ProductsCTA />
    </Layout>
  );
}

/* --- 1. HERO ------------------------------------------------------------------ */

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
          Industrial Products and <span className="text-energy">Procurement Support</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-white/68 md:text-lg"
        >
          NEXORA coordinates project-specific sourcing enquiries for industrial valves,
          instrumentation and electrical products from its base in Qatar, with a focus on Qatar,
          Saudi Arabia and Kuwait. Product selection is reviewed against the submitted
          specification, quantity, required documentation and delivery location.
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
            Submit an RFQ <ArrowRight className="h-4 w-4" />
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

/* --- 2. PROCUREMENT APPROACH ---------------------------------------------------- */

const approachPoints = [
  {
    icon: Search,
    title: "Specification Review",
    desc: "Submitted product descriptions, standards, quantities and project requirements are reviewed before sourcing begins.",
  },
  {
    icon: ClipboardList,
    title: "Supplier Identification",
    desc: "Potential supply options are evaluated according to the submitted requirement and available manufacturer documentation.",
  },
  {
    icon: FileText,
    title: "Documentation Coordination",
    desc: "Required datasheets, certificates and supporting documents are identified and coordinated where available and applicable.",
  },
  {
    icon: Truck,
    title: "Delivery Coordination",
    desc: "Delivery location, schedule and logistics requirements are reviewed as part of the enquiry.",
  },
];

function ProcurementApproach() {
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        <Reveal>
          <Eyebrow>Procurement Approach</Eyebrow>
          <h2 className="mt-5 text-4xl font-extrabold leading-[1.06] md:text-5xl">
            Procurement Support Built{" "}
            <span className="text-gradient-energy">Around Project Specifications.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            NEXORA reviews industrial supply enquiries against the required product type, technical
            specification, quantity, documentation and delivery conditions before coordinating
            suitable sourcing options.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {approachPoints.map((p) => (
              <div
                key={p.title}
                className="flex items-start gap-3 rounded-xl border border-border bg-white p-3.5"
              >
                <p.icon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div>
                  <div className="text-sm font-bold leading-snug">{p.title}</div>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-white shadow-elevated">
            <img
              src={pEng}
              alt="Engineering and procurement documentation review"
              loading="lazy"
              className="h-[420px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-navy/60 to-transparent" />
            <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/55 bg-white/85 p-4 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/8 text-primary">
                  <FileText className="h-5 w-5" />
                </div>
                <div className="font-display text-sm font-bold">
                  Specification-Led Procurement Support
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --- 3. PRODUCT CATEGORIES -------------------------------------------------------- */

function ProductCategoriesSection() {
  return (
    <section className="border-y border-border bg-surface/60 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-12 text-center">
          <Eyebrow>Product Categories</Eyebrow>
          <h2 className="mt-5 text-4xl font-extrabold leading-[1.06] md:text-5xl">
            Industrial Products Organized{" "}
            <span className="text-gradient-energy">Around Project Requirements.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Product availability, manufacturer, material, rating, certification and supporting
            documentation are confirmed against each individual RFQ.
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {productCategories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 0.06}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-sm">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/8 text-primary ring-1 ring-primary/10">
                  <cat.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold">{cat.title}</h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground">
                  {cat.summary}
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {cat.types.map((type) => (
                    <li
                      key={type}
                      className="rounded-full border border-border bg-surface/60 px-2.5 py-1 text-[11px] font-bold text-foreground"
                    >
                      {type}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mx-auto mt-10 max-w-3xl text-center text-xs leading-relaxed text-muted-foreground">
            Applicable standards, materials, pressure classes, certifications and documentation
            depend on the selected manufacturer and approved project specification.
          </p>
        </Reveal>

        <Reveal delay={0.34} className="mt-8 text-center">
          <a
            href="#enquire"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground transition hover:bg-primary/90 btn-glow-blue"
          >
            Submit Your RFQ <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* --- 4. RFQ-TO-DELIVERY PROCESS -------------------------------------------------- */

const procSteps = [
  {
    icon: FileText,
    title: "RFQ Review",
    desc: "We review the submitted product description, specification, quantity, required documentation and delivery location.",
  },
  {
    icon: Search,
    title: "Supplier Identification",
    desc: "Potential supply options are identified according to the approved enquiry requirements.",
  },
  {
    icon: ClipboardList,
    title: "Technical and Commercial Review",
    desc: "Available technical documentation, commercial terms and delivery conditions are reviewed before confirmation.",
  },
  {
    icon: Truck,
    title: "Delivery Coordination",
    desc: "Confirmed products and available supporting documents are coordinated according to the agreed supply terms.",
  },
];

function ProcurementProcess() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-14 text-center">
          <Eyebrow>Procurement Process</Eyebrow>
          <h2 className="mt-5 text-4xl font-extrabold leading-[1.06] md:text-5xl">
            From RFQ Review to <span className="text-gradient-energy">Delivery Coordination.</span>
          </h2>
        </Reveal>

        <div className="relative">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-linear-to-r from-transparent via-primary/20 to-transparent lg:block" />
          <div className="grid gap-8 lg:grid-cols-4">
            {procSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <div className="flex flex-col items-center text-center">
                  <div className="relative z-10 mb-5 grid h-16 w-16 place-items-center rounded-full border-2 border-border bg-white shadow-sm">
                    <step.icon className="h-6 w-6 text-primary" />
                    <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-primary text-[9px] font-bold text-white">
                      0{i + 1}
                    </span>
                  </div>
                  <div className="font-display text-base font-bold">{step.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- 5. SUPPLY ENQUIRY FORM ------------------------------------------------------- */

function ProductsCTA() {
  return (
    <section id="enquire" className="border-t border-border bg-surface/60 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal className="mb-10 text-center">
          <Eyebrow>Supply Enquiry</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold md:text-4xl">
            Submit Your <span className="text-gradient-energy">Product Requirement.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
            Share the product specification, required quantity, documentation needs and delivery
            details so the Nexora team can review suitable sourcing options.
          </p>
        </Reveal>

        <Reveal>
          <EnquiryForm kind="products" />
        </Reveal>
      </div>
    </section>
  );
}
