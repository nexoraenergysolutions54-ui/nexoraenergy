import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Shield, AlertTriangle, GraduationCap, Leaf, Award, CheckCircle2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/hse")({
  head: () => ({
    meta: [
      { title: "HSE — Nexora Energy Solutions" },
      { name: "description", content: "Health, Safety and Environmental policies at Nexora — embedded in every project we undertake across the GCC." },
      { property: "og:title", content: "HSE Compliance — Nexora" },
      { property: "og:description", content: "Safety is not a priority — it is a core value. Discover Nexora's HSE standards and culture." },
      { property: "og:url", content: "/hse" },
    ],
    links: [{ rel: "canonical", href: "/hse" }],
  }),
  component: HSEPage,
});

function HSEPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Health · Safety · Environment"
        title={<>Safety is not a priority.<br /><span className="text-gradient-red">It's a core value.</span></>}
        description="Health, safety and environmental responsibility are embedded in every Nexora project — from site planning to commissioning."
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { i: AlertTriangle, t: "Risk Management", d: "Proactive identification, analysis and mitigation of operational risks." },
            { i: Shield, t: "Workplace Safety", d: "Zero-harm culture supported by training, audits and reporting." },
            { i: Award, t: "Quality Assurance", d: "ISO-aligned quality systems for every deliverable." },
            { i: Leaf, t: "Environmental Responsibility", d: "Minimizing impact across all operations and supply chains." },
            { i: GraduationCap, t: "Training Standards", d: "Certified training programs for engineers, technicians and contractors." },
            { i: CheckCircle2, t: "International Standards", d: "Compliance with international HSE and industrial regulations." },
          ].map((it, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <article className="h-full rounded-3xl border border-border bg-card p-8 hover-lift">
                <div className="grid place-items-center w-14 h-14 rounded-2xl bg-primary/10 border border-gold-soft text-gold">
                  <it.i className="w-6 h-6" />
                </div>
                <h3 className="mt-6 text-xl font-display font-bold">{it.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{it.d}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 bg-surface/40 border-y border-border">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Our commitment is <span className="text-gradient-gold">unconditional</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
              We invest in our people, processes and technology to ensure that every project
              meets the highest international standards of safety, quality and environmental care.
            </p>
            <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground btn-glow-red">
              Speak to our HSE team <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
