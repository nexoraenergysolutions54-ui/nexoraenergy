import { createFileRoute, Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  ArrowRight,
  Award,
  CheckCircle2,
  GraduationCap,
  Leaf,
  Shield,
} from "lucide-react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/enterprise-content";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/hse")({
  head: () => seoHead("/hse"),
  component: HSEPage,
});

function HSEPage() {
  const items = [
    {
      icon: AlertTriangle,
      title: "Risk Management",
      text: "Proactive identification, mitigation and reporting for operational risks.",
    },
    {
      icon: Shield,
      title: "Workplace Safety",
      text: "Zero-harm culture supported by field supervision, training and audits.",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      text: "QA/QC controls and documentation discipline across every deliverable.",
    },
    {
      icon: Leaf,
      title: "Environmental Responsibility",
      text: "Reduced operational impact through planning, handling and compliance controls.",
    },
    {
      icon: GraduationCap,
      title: "Training Standards",
      text: "Structured training for engineers, technicians, supervisors and contractors.",
    },
    {
      icon: CheckCircle2,
      title: "International Standards",
      text: "Processes aligned with recognized HSE and industrial quality expectations.",
    },
  ];

  return (
    <Layout>
      <PageHero
        eyebrow="Health, Safety & Environment"
        title={
          <>
            Safety is a <span className="text-gradient-energy">core operating system.</span>
          </>
        }
        description="Nexora embeds health, safety, environmental responsibility and quality governance from planning through handover."
      />

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <article className="h-full rounded-[1.75rem] border border-border bg-white p-8 hover-lift">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-energy/14 text-primary">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface/70 py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <h2 className="text-3xl font-extrabold leading-tight md:text-5xl">
              Reliability requires{" "}
              <span className="text-gradient-energy">unconditional safety discipline.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              We invest in people, process and technology so every project meets demanding operator
              and EPC expectations for safe, traceable and compliant delivery.
            </p>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-bold text-primary-foreground btn-glow-blue"
            >
              Speak to our HSE team <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
