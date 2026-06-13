import { Outlet, createFileRoute, Link, useRouterState } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Cpu,
  Lightbulb,
  Package,
  Shield,
  Wrench,
} from "lucide-react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/enterprise-content";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Nexora Energy Solutions" },
      {
        name: "description",
        content:
          "Integrated engineering, industrial services, procurement, maintenance, infrastructure delivery and operational support for Qatar and GCC energy sectors.",
      },
      { property: "og:title", content: "Nexora Energy Services" },
      {
        property: "og:description",
        content:
          "Enterprise-grade engineering and industrial service capabilities for energy partners.",
      },
      { property: "og:url", content: `${site.url}/services` },
    ],
    links: [{ rel: "canonical", href: `${site.url}/services` }],
  }),
  component: ServicesRouteComponent,
});

const services = [
  {
    icon: Cpu,
    title: "Engineering Solutions",
    text: "Multidisciplinary design, field engineering and technical assurance from concept through commissioning.",
    features: [
      "Mechanical and electrical design",
      "Instrumentation and controls",
      "Automation support",
      "Technical documentation",
    ],
  },
  {
    icon: Wrench,
    title: "Industrial Services",
    text: "Execution teams for shutdowns, turnarounds, maintenance scopes and plant reliability programs.",
    features: [
      "Shutdown support",
      "Preventive maintenance",
      "Asset integrity",
      "Rotating equipment",
    ],
  },
  {
    icon: Package,
    title: "Procurement & Supply",
    text: "Compliant sourcing and logistics support for industrial materials, spares and engineered equipment.",
    features: [
      "Vendor coordination",
      "Spare parts sourcing",
      "Logistics control",
      "Traceable documentation",
    ],
  },
  {
    icon: Building2,
    title: "Infrastructure Delivery",
    text: "Installation, commissioning and site management for energy infrastructure and industrial facilities.",
    features: [
      "Project execution",
      "Commissioning support",
      "Site supervision",
      "Handover packages",
    ],
  },
  {
    icon: Shield,
    title: "HSE & Quality",
    text: "Risk management, audit readiness and quality gates embedded into every delivery workflow.",
    features: ["Risk assessment", "Permit-to-work support", "QA/QC controls", "Training programs"],
  },
  {
    icon: Lightbulb,
    title: "Operational Advisory",
    text: "Planning, optimization and continuous-improvement support for teams managing critical energy assets.",
    features: [
      "Project planning",
      "Process improvement",
      "Compliance advisory",
      "Performance reporting",
    ],
  },
];

function ServicesRouteComponent() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const normalizedPath = pathname.replace(/\/+$/, "") || "/";

  if (normalizedPath !== "/services") {
    return <Outlet />;
  }

  return <ServicesPage />;
}

function ServicesPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Integrated services for{" "}
            <span className="text-gradient-energy">energy infrastructure.</span>
          </>
        }
        description="A complete portfolio of engineering, industrial services, procurement, maintenance and operational support for high-stakes environments."
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl space-y-8 px-6">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.04}>
              <article className="group relative grid items-center gap-8 overflow-hidden rounded-[2rem] border border-border bg-white p-8 shadow-sm hover-lift md:p-12 lg:grid-cols-12">
                <div className="absolute -right-28 -top-28 h-64 w-64 rounded-full gradient-radial-teal blur-3xl opacity-0 transition group-hover:opacity-100" />
                <div className="relative lg:col-span-5">
                  <div className="grid h-20 w-20 place-items-center rounded-3xl bg-primary/8 text-primary ring-1 ring-primary/12">
                    <service.icon className="h-9 w-9" />
                  </div>
                  <div className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-primary">
                    0{index + 1} / Capability
                  </div>
                  <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-4xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{service.text}</p>
                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground btn-glow-blue"
                  >
                    Request capability brief <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="relative lg:col-span-7">
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 rounded-2xl border border-border bg-background/70 p-4"
                      >
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-energy" />
                        <span className="font-semibold">{feature}</span>
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
