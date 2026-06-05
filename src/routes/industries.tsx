import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  Building2,
  Cpu,
  Factory,
  HardHat,
  Landmark,
  Network,
  Ship,
  Zap,
} from "lucide-react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries | Nexora Energy Solutions" },
      {
        name: "description",
        content:
          "Nexora serves refining, petrochemical, pipelines, power, infrastructure, government, manufacturing, marine and energy facilities across Kuwait and the GCC.",
      },
      { property: "og:title", content: "Industries Served by Nexora" },
      {
        property: "og:description",
        content: "Critical energy and industrial markets supported by Nexora Energy Solutions.",
      },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

const items = [
  {
    icon: Factory,
    title: "Refining & Petrochemicals",
    text: "Maintenance, reliability and project support for complex process facilities.",
  },
  {
    icon: Network,
    title: "Pipelines & Terminals",
    text: "Integrity, construction support and operational services for transmission assets.",
  },
  {
    icon: Zap,
    title: "Power & Utilities",
    text: "Engineering and uptime programs for utility-scale energy infrastructure.",
  },
  {
    icon: Building2,
    title: "Industrial Infrastructure",
    text: "Site execution, commissioning and lifecycle support for critical facilities.",
  },
  {
    icon: Landmark,
    title: "Government Energy Programs",
    text: "Disciplined delivery for public-sector and sovereign energy initiatives.",
  },
  {
    icon: HardHat,
    title: "Manufacturing",
    text: "Maintenance, safety and operations support for production environments.",
  },
  {
    icon: Ship,
    title: "Marine & Terminals",
    text: "Port, terminal and logistics-adjacent industrial services.",
  },
  {
    icon: Activity,
    title: "Energy Facilities",
    text: "Operational readiness and asset performance support for live facilities.",
  },
  {
    icon: Cpu,
    title: "Automation & Controls",
    text: "Instrumentation, control systems and technology-led operating improvements.",
  },
];

function IndustriesPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Industries"
        title={
          <>
            Trusted across <span className="text-gradient-energy">critical sectors.</span>
          </>
        }
        description="Nexora supports the energy operators, contractors and industrial partners that keep Kuwait's infrastructure moving."
      />

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <article className="group relative h-full overflow-hidden rounded-[1.75rem] border border-border bg-white p-8 hover-lift">
                <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full gradient-radial-teal opacity-0 blur-3xl transition group-hover:opacity-100" />
                <div className="relative">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/8 text-primary">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                  <Link
                    to="/services"
                    className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-primary"
                  >
                    Related services <ArrowRight className="h-3.5 w-3.5" />
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
