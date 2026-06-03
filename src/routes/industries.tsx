import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Flame, Factory, Zap, Building2, Landmark, HardHat, Ship, Activity, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries — Nexora Energy Solutions" },
      { name: "description", content: "Nexora serves oil & gas, petrochemical, power, infrastructure, government, manufacturing, marine and energy facilities across the GCC." },
      { property: "og:title", content: "Industries — Nexora" },
      { property: "og:description", content: "Industries we serve across the GCC: oil & gas, petrochemical, power, infrastructure, government, manufacturing, marine and energy." },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

const items = [
  { i: Flame, t: "Oil & Gas", d: "Upstream, midstream and downstream operations support." },
  { i: Factory, t: "Petrochemical", d: "Complex plant maintenance and engineering services." },
  { i: Zap, t: "Power Generation", d: "Reliability solutions for utility-scale power assets." },
  { i: Building2, t: "Infrastructure", d: "Civil and industrial infrastructure project execution." },
  { i: Landmark, t: "Government", d: "Trusted partner for government energy initiatives." },
  { i: HardHat, t: "Manufacturing", d: "Industrial maintenance and uptime engineering." },
  { i: Ship, t: "Marine", d: "Port, terminal and marine asset support." },
  { i: Activity, t: "Energy Facilities", d: "Critical facility services and operational excellence." },
];

function IndustriesPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Industries"
        title={<>Trusted across <span className="text-gradient-gold">critical sectors</span></>}
        description="From sovereign energy programs to high-stakes industrial facilities, Nexora delivers services calibrated to each sector's standards."
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <article className="group h-full rounded-3xl border border-border bg-card p-8 hover-lift overflow-hidden relative">
                <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-primary/0 group-hover:bg-gold/10 blur-3xl transition" />
                <div className="relative">
                  <div className="grid place-items-center w-14 h-14 rounded-2xl bg-primary/10 border border-gold-soft text-gold">
                    <it.i className="w-6 h-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-display font-bold">{it.t}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{it.d}</p>
                  <Link to="/services" className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold font-semibold">
                    Related services <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </Layout>
  );
}
