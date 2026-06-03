import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ArrowRight, Flame, Cpu, Wrench, Package, Building2, Lightbulb, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Nexora Energy Solutions" },
      { name: "description", content: "Oil & gas, engineering, maintenance, procurement, infrastructure and consultancy services delivered by Nexora across the GCC." },
      { property: "og:title", content: "Nexora Services" },
      { property: "og:description", content: "Full-spectrum industrial services: oil & gas, engineering, maintenance, procurement, infrastructure and consultancy." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  { i: Flame, t: "Oil & Gas Services", d: "Comprehensive upstream, midstream and downstream support tailored to refinery and field operations.", f: ["Pipeline support & integrity", "Shutdown & turnaround support", "Field operations", "Technical manpower"] },
  { i: Cpu, t: "Engineering Solutions", d: "Multidisciplinary engineering services with full lifecycle delivery from concept to commissioning.", f: ["Mechanical engineering", "Electrical systems", "Instrumentation & control", "Process automation"] },
  { i: Wrench, t: "Industrial Maintenance", d: "Preventive and predictive maintenance programs designed for maximum asset uptime.", f: ["Preventive maintenance", "Asset integrity management", "Plant support services", "Rotating equipment overhaul"] },
  { i: Package, t: "Procurement & Supply", d: "End-to-end procurement and logistics aligned with stringent industrial standards.", f: ["Industrial equipment", "Spare parts sourcing", "Global logistics", "Vendor management"] },
  { i: Building2, t: "Infrastructure Projects", d: "Turnkey project delivery from civil works to commissioning of complex industrial facilities.", f: ["Installation services", "Commissioning support", "Project execution", "Site management"] },
  { i: Lightbulb, t: "Technical Consultancy", d: "Strategic advisory rooted in deep operational expertise and compliance knowledge.", f: ["Project planning", "Process optimization", "Regulatory compliance", "Strategy & advisory"] },
];

function ServicesPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Services"
        title={<>Full-spectrum <span className="text-gradient-gold">industrial services</span></>}
        description="A complete portfolio of energy, engineering and maintenance services designed for the most demanding industrial environments."
      />

      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-6 space-y-8">
          {services.map((s, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <article className={`group grid lg:grid-cols-12 gap-8 items-center rounded-3xl border border-border bg-card p-8 md:p-12 hover-lift overflow-hidden relative ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className="lg:col-span-5">
                  <div className="grid place-items-center w-20 h-20 rounded-3xl bg-primary/10 border border-gold-soft text-gold">
                    <s.i className="w-9 h-9" />
                  </div>
                  <div className="mt-6 text-xs uppercase tracking-[0.3em] text-gold font-semibold">0{i + 1} · Service</div>
                  <h2 className="mt-3 text-3xl md:text-4xl font-extrabold leading-tight">{s.t}</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{s.d}</p>
                  <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground btn-glow-red">
                    Request a quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="lg:col-span-7">
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {s.f.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-3 rounded-2xl bg-background/60 border border-border p-4">
                        <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                        <span className="font-medium">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </Layout>
  );
}
