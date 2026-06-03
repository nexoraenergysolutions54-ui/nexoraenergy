import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, Shield, Cpu, Wrench, Package, Building2, Lightbulb,
  Flame, Factory, Zap, Ship, Landmark, HardHat, CheckCircle2, Star, Quote,
  Activity, Award, Target, Sparkles
} from "lucide-react";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import hero from "@/assets/hero-refinery.jpg";
import about from "@/assets/about-engineers.jpg";
import pPipeline from "@/assets/project-pipeline.jpg";
import pRefinery from "@/assets/project-refinery.jpg";
import pPlant from "@/assets/project-plant.jpg";
import pMaint from "@/assets/project-maintenance.jpg";
import pEng from "@/assets/project-engineering.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nexora Energy Solutions — Powering Kuwait's Energy Future" },
      { name: "description", content: "Kuwait-based energy and industrial services company delivering world-class engineering, maintenance, procurement and operational support across the oil, gas and infrastructure sectors." },
      { property: "og:title", content: "Nexora Energy Solutions" },
      { property: "og:description", content: "Engineering The Future Of Energy. Premium oil & gas, engineering and industrial services across Kuwait and the GCC." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700;800&display=swap" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Industries />
      <WhyUs />
      <Projects />
      <HSE />
      <Testimonials />
      <News />
      <FinalCTA />
    </Layout>
  );
}

/* ---------- Particles ---------- */
function Particles({ count = 24 }: { count?: number }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: count }).map((_, i) => {
        const left = (i * 53) % 100;
        const top = (i * 37) % 100;
        const delay = (i % 6) * 0.5;
        const size = 1 + ((i * 7) % 4);
        return (
          <span
            key={i}
            className="absolute rounded-full bg-gold/60 animate-float"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
              animationDelay: `${delay}s`,
              boxShadow: "0 0 8px var(--gold)",
            }}
          />
        );
      })}
    </div>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0">
        <img src={hero} alt="Industrial refinery at night" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </div>
      <Particles count={30} />
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-gold-soft text-xs uppercase tracking-[0.3em] text-gold font-semibold"
          >
            <Sparkles className="w-3.5 h-3.5" /> Ahmadi · Kuwait
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-8 text-5xl md:text-7xl lg:text-[88px] font-extrabold leading-[0.95] tracking-tight"
          >
            POWERING<br />
            <span className="text-gradient-gold">KUWAIT'S</span><br />
            ENERGY FUTURE
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed"
          >
            Delivering innovative oil & gas solutions, industrial engineering services,
            maintenance support and energy infrastructure for a stronger tomorrow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground btn-glow-red hover:translate-y-[-2px] transition-all"
            >
              Explore Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full glass border-gold-soft px-7 py-4 text-sm font-semibold text-foreground hover:bg-gold/10 transition-all"
            >
              Contact Us <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-14 grid grid-cols-3 gap-6 max-w-lg"
          >
            {[
              { v: "ISO", l: "Certified" },
              { v: "24/7", l: "Operations" },
              { v: "GCC", l: "Coverage" },
            ].map((s, i) => (
              <div key={i} className="border-l border-gold-soft pl-4">
                <div className="text-2xl font-display font-bold text-gold">{s.v}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="lg:col-span-5 hidden lg:block relative"
        >
          <Hero3DCard />
        </motion.div>
      </div>
    </section>
  );
}

function Hero3DCard() {
  return (
    <div className="relative aspect-square max-w-md mx-auto">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 via-transparent to-gold/30 blur-3xl animate-pulse" />
      <div className="relative h-full rounded-3xl glass border-gold-soft p-8 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative h-full flex flex-col justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-gold">Live Operations</div>
            <div className="mt-2 text-3xl font-display font-bold">Energy Hub</div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { i: Flame, l: "Refining", v: "98.4%" },
              { i: Activity, l: "Uptime", v: "99.9%" },
              { i: Shield, l: "HSE Score", v: "A+" },
              { i: Zap, l: "Output", v: "+12%" },
            ].map((s, i) => (
              <div key={i} className="rounded-2xl bg-background/40 border border-border p-4 backdrop-blur">
                <s.i className="w-5 h-5 text-gold" />
                <div className="mt-3 text-lg font-bold">{s.v}</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>

          <svg viewBox="0 0 200 40" className="w-full h-12 text-gold/70">
            <path d="M0 30 Q 25 10, 50 25 T 100 20 T 150 28 T 200 15" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M0 30 Q 25 10, 50 25 T 100 20 T 150 28 T 200 15 L 200 40 L 0 40 Z" fill="url(#g)" opacity="0.3" />
            <defs>
              <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="var(--gold)" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  const stats = [
    { v: 50, suffix: "+", l: "Projects Delivered" },
    { v: 100, suffix: "+", l: "Industrial Solutions" },
    { v: 99, suffix: "%", l: "Client Satisfaction" },
    { v: 24, suffix: "/7", l: "Support" },
  ];
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] gradient-radial-red blur-3xl opacity-60" />
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <SectionEyebrow>About Nexora</SectionEyebrow>
          <h2 className="mt-5 text-4xl md:text-6xl font-extrabold leading-[1.05]">
            Engineering Excellence.<br />
            <span className="text-gradient-gold">Industrial Reliability.</span>
          </h2>
          <p className="mt-8 text-muted-foreground text-lg leading-relaxed">
            Nexora Energy Solutions is a Kuwait-based energy and industrial services company
            delivering world-class engineering, maintenance, procurement and operational support
            across the oil, gas and infrastructure sectors.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Our commitment to safety, innovation and operational excellence enables us to support
            critical industrial projects throughout Kuwait and the GCC region.
          </p>
          <Link to="/about" className="mt-10 inline-flex items-center gap-2 text-gold font-semibold group">
            Discover our story
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </Link>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-gold/20 rounded-3xl blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden border border-border">
              <img src={about} alt="Nexora engineers inspecting pipeline" loading="lazy" className="w-full h-[520px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-5 border-gold-soft">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-gold" />
                  <div className="text-sm font-semibold">Certified by international standards</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 mt-24 grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-3xl overflow-hidden border border-border">
        {stats.map((s, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div className="bg-surface/80 p-8 h-full">
              <div className="text-5xl font-display font-extrabold text-gradient-gold">
                <Counter value={s.v} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-sm uppercase tracking-widest text-muted-foreground">{s.l}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-gold-soft text-xs uppercase tracking-[0.3em] text-gold font-semibold">
      <span className="w-1 h-1 rounded-full bg-gold" />
      {children}
    </span>
  );
}

/* ---------- SERVICES ---------- */
const services = [
  { i: Flame, t: "Oil & Gas Services", d: "Pipeline support, field operations, shutdown support and technical manpower." },
  { i: Cpu, t: "Engineering Solutions", d: "Mechanical, electrical, instrumentation and automation engineering." },
  { i: Wrench, t: "Industrial Maintenance", d: "Preventive maintenance, asset integrity and plant support services." },
  { i: Package, t: "Procurement & Supply", d: "Industrial equipment, spare parts and full logistics solutions." },
  { i: Building2, t: "Infrastructure Projects", d: "Installation, commissioning and end-to-end project execution." },
  { i: Lightbulb, t: "Technical Consultancy", d: "Planning, optimization, compliance and strategic engineering advisory." },
];

function Services() {
  return (
    <section className="relative py-32 bg-surface/40 border-y border-border overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <Reveal>
            <SectionEyebrow>Our Services</SectionEyebrow>
            <h2 className="mt-5 text-4xl md:text-6xl font-extrabold leading-[1.05] max-w-2xl">
              Full-spectrum <span className="text-gradient-gold">industrial services</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/services" className="inline-flex items-center gap-2 text-gold font-semibold group">
              View all services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </Link>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <article className="group relative h-full rounded-3xl border border-border bg-card p-8 overflow-hidden hover-lift">
                <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-primary/0 group-hover:bg-primary/20 blur-3xl transition-all duration-700" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent opacity-0 group-hover:opacity-100 transition" />
                <div className="relative">
                  <div className="inline-grid place-items-center w-14 h-14 rounded-2xl bg-primary/10 border border-primary/30 text-gold group-hover:bg-primary/20 transition">
                    <s.i className="w-6 h-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold tracking-tight">{s.t}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                  <div className="mt-8 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold font-semibold">
                    Learn more <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- INDUSTRIES ---------- */
const industries = [
  { i: Flame, t: "Oil & Gas" },
  { i: Factory, t: "Petrochemical" },
  { i: Zap, t: "Power Generation" },
  { i: Building2, t: "Infrastructure" },
  { i: Landmark, t: "Government" },
  { i: HardHat, t: "Manufacturing" },
  { i: Ship, t: "Marine" },
  { i: Activity, t: "Energy Facilities" },
];

function Industries() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <SectionEyebrow>Industries We Serve</SectionEyebrow>
            <h2 className="mt-5 text-4xl md:text-6xl font-extrabold leading-[1.05]">
              Trusted across <span className="text-gradient-gold">critical sectors</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {industries.map((ind, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="group relative bg-card aspect-square p-6 flex flex-col justify-between transition-all hover:bg-primary/5 cursor-pointer overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition gradient-radial-gold" />
                <ind.i className="relative w-8 h-8 text-gold transition-transform group-hover:scale-110" />
                <div className="relative">
                  <div className="text-lg font-display font-bold">{ind.t}</div>
                  <div className="mt-2 flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground group-hover:text-gold transition">
                    Explore <ArrowUpRight className="w-3 h-3" />
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

/* ---------- WHY US ---------- */
const whyUs = [
  { i: Shield, t: "Safety First", d: "Zero-compromise safety culture at every operational level." },
  { i: Award, t: "Industry Expertise", d: "Decades of combined experience across GCC energy projects." },
  { i: Target, t: "Reliable Delivery", d: "On-time, on-budget execution with measurable accountability." },
  { i: Cpu, t: "Advanced Technology", d: "Digital twins, IoT monitoring, automation and predictive analytics." },
  { i: HardHat, t: "Certified Professionals", d: "Internationally accredited engineers and technicians." },
  { i: CheckCircle2, t: "Operational Excellence", d: "Continuous improvement driving world-class performance." },
];

function WhyUs() {
  return (
    <section className="relative py-32 bg-surface/40 border-y border-border overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] gradient-radial-gold blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <SectionEyebrow>Why Choose Nexora</SectionEyebrow>
            <h2 className="mt-5 text-4xl md:text-6xl font-extrabold leading-[1.05]">
              Built on principles<br /><span className="text-gradient-gold">that don't compromise</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-20 relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-soft to-transparent" />
          <div className="grid lg:grid-cols-2 gap-x-20 gap-y-12">
            {whyUs.map((w, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className={`flex gap-5 ${i % 2 === 1 ? "lg:flex-row-reverse lg:text-right" : ""}`}>
                  <div className="shrink-0 grid place-items-center w-14 h-14 rounded-2xl bg-primary/10 border border-gold-soft text-gold">
                    <w.i className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold">{w.t}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- PROJECTS SHOWCASE ---------- */
const projects = [
  { img: pRefinery, t: "Refinery Projects", d: "Distillation column installation & turnaround support." },
  { img: pPipeline, t: "Pipeline Infrastructure", d: "Cross-country pipeline construction & integrity management." },
  { img: pPlant, t: "Industrial Plants", d: "Petrochemical facility expansions & commissioning." },
  { img: pMaint, t: "Maintenance Operations", d: "Rotating equipment overhaul & plant shutdowns." },
  { img: pEng, t: "Engineering Solutions", d: "Detailed engineering, EPC and FEED studies." },
];

function Projects() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <Reveal>
            <SectionEyebrow>Project Showcase</SectionEyebrow>
            <h2 className="mt-5 text-4xl md:text-6xl font-extrabold leading-[1.05] max-w-2xl">
              Delivering at <span className="text-gradient-gold">industrial scale</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/projects" className="inline-flex items-center gap-2 text-gold font-semibold group">
              View portfolio <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </Link>
          </Reveal>
        </div>
      </div>

      <div className="relative">
        <div className="flex gap-6 overflow-x-auto scrollbar-hide px-6 lg:px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] pb-6 snap-x snap-mandatory">
          {projects.map((p, i) => (
            <article
              key={i}
              className="snap-start shrink-0 w-[88vw] md:w-[520px] lg:w-[600px] group"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border">
                <img src={p.img} alt={p.t} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="text-xs uppercase tracking-[0.3em] text-gold">{String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</div>
                  <h3 className="mt-3 text-2xl md:text-3xl font-display font-bold">{p.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground max-w-md">{p.d}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- HSE ---------- */
function HSE() {
  const items = ["Risk Management", "Workplace Safety", "Quality Assurance", "Environmental Responsibility", "International Standards"];
  return (
    <section className="relative py-32 bg-[#0a0a0a] border-y border-border overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] gradient-radial-red blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <SectionEyebrow>HSE Compliance</SectionEyebrow>
          <h2 className="mt-5 text-4xl md:text-6xl font-extrabold leading-[1.05]">
            Safety Is Not<br />A Priority.<br />
            <span className="text-gradient-red">It's A Core Value.</span>
          </h2>
          <p className="mt-8 text-muted-foreground text-lg leading-relaxed max-w-xl">
            At Nexora Energy Solutions, health, safety and environmental responsibility are
            embedded in every project we undertake.
          </p>
          <Link to="/hse" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground btn-glow-red hover:translate-y-[-2px] transition">
            Our HSE policies <ArrowRight className="w-4 h-4" />
          </Link>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="space-y-3">
            {items.map((it, i) => (
              <div key={i} className="group flex items-center justify-between gap-6 rounded-2xl glass border-gold-soft p-5 hover:bg-primary/5 transition">
                <div className="flex items-center gap-4">
                  <div className="grid place-items-center w-10 h-10 rounded-full bg-primary/20 border border-primary/40 text-gold">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="font-display font-semibold text-lg">{it}</span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-gold transition" />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
const testimonials = [
  { q: "Nexora's engineering team delivered our shutdown ahead of schedule with zero safety incidents. World-class execution.", n: "Operations Director", c: "Major Kuwaiti Refinery" },
  { q: "Reliability and technical depth that we trust on every critical maintenance window. A true partner.", n: "Plant Manager", c: "GCC Petrochemical Group" },
  { q: "From procurement to commissioning, Nexora's professionalism is unmatched in the region.", n: "Project Lead", c: "Government Energy Authority" },
];

function Testimonials() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <SectionEyebrow>Trusted Partners</SectionEyebrow>
            <h2 className="mt-5 text-4xl md:text-6xl font-extrabold leading-[1.05]">
              What our <span className="text-gradient-gold">clients say</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <figure className="relative h-full rounded-3xl border border-border bg-card p-8 hover-lift overflow-hidden">
                <Quote className="absolute -top-2 -left-2 w-32 h-32 text-primary/5" />
                <div className="relative">
                  <div className="flex gap-1 text-gold">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-6 text-lg leading-relaxed text-foreground/90">
                    "{t.q}"
                  </blockquote>
                  <figcaption className="mt-8 pt-6 border-t border-border">
                    <div className="font-semibold">{t.n}</div>
                    <div className="text-sm text-muted-foreground">{t.c}</div>
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- NEWS ---------- */
const news = [
  { t: "Nexora awarded major shutdown contract in Ahmadi", d: "Industry · Sept 2026", img: pRefinery },
  { t: "Investing in digital asset integrity monitoring", d: "Technology · Aug 2026", img: pEng },
  { t: "Expanding maintenance operations across GCC", d: "Company · July 2026", img: pMaint },
];

function News() {
  return (
    <section className="relative py-32 bg-surface/40 border-y border-border overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <Reveal>
            <SectionEyebrow>Latest News</SectionEyebrow>
            <h2 className="mt-5 text-4xl md:text-6xl font-extrabold leading-[1.05]">
              Industry <span className="text-gradient-gold">insights</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/news" className="inline-flex items-center gap-2 text-gold font-semibold group">
              All news <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </Link>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {news.map((n, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <article className="group h-full rounded-3xl overflow-hidden border border-border bg-card hover-lift">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={n.img} alt={n.t} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-widest text-gold">{n.d}</div>
                  <h3 className="mt-3 text-xl font-display font-bold leading-snug group-hover:text-gold transition">{n.t}</h3>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground group-hover:text-foreground transition">
                    Read article <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FINAL CTA ---------- */
function FinalCTA() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="relative rounded-[2.5rem] overflow-hidden border border-gold-soft bg-gradient-to-br from-[#1a0a0a] via-[#0a0a0a] to-[#1a1408] p-12 md:p-20 text-center">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <Particles count={20} />
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] gradient-radial-red blur-3xl" />

          <svg className="absolute inset-0 w-full h-full opacity-30" preserveAspectRatio="none" viewBox="0 0 1000 500">
            <path d="M0 250 Q 250 100, 500 250 T 1000 250" stroke="var(--gold)" strokeWidth="1" fill="none" />
            <path d="M0 280 Q 250 130, 500 280 T 1000 280" stroke="var(--primary)" strokeWidth="1" fill="none" opacity="0.6" />
            <path d="M0 220 Q 250 70, 500 220 T 1000 220" stroke="var(--gold)" strokeWidth="0.5" fill="none" opacity="0.5" />
          </svg>

          <Reveal>
            <div className="relative">
              <SectionEyebrow>Get In Touch</SectionEyebrow>
              <h2 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] max-w-4xl mx-auto">
                Let's Build The Future Of <span className="text-gradient-gold">Energy Together</span>
              </h2>
              <p className="mt-6 max-w-2xl mx-auto text-muted-foreground text-lg">
                Partner with Nexora for engineering excellence, operational reliability and uncompromising safety.
              </p>
              <Link
                to="/contact"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground btn-glow-red hover:translate-y-[-2px] transition-all"
              >
                Contact Nexora <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
