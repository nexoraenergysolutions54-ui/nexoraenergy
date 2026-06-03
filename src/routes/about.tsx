import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { Target, Eye, Heart, Users, Calendar, ArrowRight, Award, Compass, Sparkles } from "lucide-react";
import about from "@/assets/about-engineers.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Nexora Energy Solutions" },
      { name: "description", content: "Discover the story, mission and leadership behind Nexora Energy Solutions — a Kuwait-based premium industrial services company." },
      { property: "og:title", content: "About Nexora Energy Solutions" },
      { property: "og:description", content: "Kuwait-based energy and industrial services company. Our story, mission, vision and people." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="About Us"
        title={<>Engineering trust at <span className="text-gradient-gold">industrial scale</span></>}
        description="Nexora Energy Solutions powers critical operations across Kuwait and the GCC with engineering excellence and uncompromising safety."
      />

      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-gold/20 rounded-3xl blur-2xl" />
              <img src={about} alt="Nexora team on-site" loading="lazy" className="relative rounded-3xl border border-border w-full h-[560px] object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-semibold">Our Story</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold leading-tight">
              Built in Kuwait. <br /><span className="text-gradient-gold">Engineered for the world.</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Headquartered in Ahmadi, Nexora was founded on a simple conviction:
              the energy industry deserves a partner that combines world-class engineering
              talent with the agility of a regional specialist.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Today we serve oil & gas operators, petrochemical groups, government entities
              and infrastructure clients across the GCC — delivering safety-first, technology-led
              solutions to the region's most demanding industrial environments.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative py-24 bg-surface/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-3 gap-6">
          {[
            { i: Target, t: "Mission", d: "To deliver world-class engineering, maintenance and procurement services that empower the GCC's energy and industrial sectors." },
            { i: Eye, t: "Vision", d: "To become the most trusted industrial partner in Kuwait and the wider region — known for excellence, integrity and innovation." },
            { i: Heart, t: "Core Values", d: "Safety. Integrity. Excellence. Innovation. Accountability. People. Sustainability." },
          ].map((v, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <article className="h-full rounded-3xl border border-border bg-card p-8 hover-lift">
                <div className="grid place-items-center w-14 h-14 rounded-2xl bg-primary/10 border border-gold-soft text-gold">
                  <v.i className="w-6 h-6" />
                </div>
                <h3 className="mt-6 text-2xl font-display font-bold">{v.t}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{v.d}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="text-center">
              <span className="text-xs uppercase tracking-[0.3em] text-gold font-semibold">Leadership Team</span>
              <h2 className="mt-4 text-3xl md:text-5xl font-extrabold">Guided by <span className="text-gradient-gold">experienced leaders</span></h2>
            </div>
          </Reveal>
          <div className="mt-16 grid md:grid-cols-4 gap-6">
            {[
              { n: "A. Al-Sabah", r: "Chief Executive Officer" },
              { n: "M. Al-Rashid", r: "Chief Operating Officer" },
              { n: "S. Khoury", r: "Head of Engineering" },
              { n: "F. Al-Mutairi", r: "Director of HSE" },
            ].map((p, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="group rounded-3xl border border-border bg-card overflow-hidden hover-lift">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 via-card to-gold/10 grid place-items-center">
                    <Users className="w-16 h-16 text-gold/40" />
                  </div>
                  <div className="p-5 border-t border-border">
                    <div className="font-display font-bold">{p.n}</div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{p.r}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 bg-surface/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase tracking-[0.3em] text-gold font-semibold">Our Journey</span>
              <h2 className="mt-4 text-3xl md:text-5xl font-extrabold">Milestones that <span className="text-gradient-gold">shaped us</span></h2>
            </div>
          </Reveal>
          <div className="mt-16 relative max-w-3xl mx-auto">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-soft to-transparent" />
            {[
              { y: "Founded", t: "Nexora launched in Ahmadi, Kuwait." },
              { y: "Expansion", t: "Engineering & maintenance divisions established." },
              { y: "Certified", t: "Achieved international HSE & quality certifications." },
              { y: "Growth", t: "Expanded operations across the GCC region." },
              { y: "Today", t: "Serving 50+ major projects with 100+ solutions delivered." },
            ].map((m, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className={`relative flex items-start gap-6 md:gap-12 mb-12 ${i % 2 === 1 ? "md:flex-row-reverse md:text-right" : ""}`}>
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 mt-2 w-3 h-3 rounded-full bg-gold ring-4 ring-background" />
                  <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold">
                      <Calendar className="w-3 h-3" /> {m.y}
                    </div>
                    <p className="mt-2 text-lg font-display font-semibold">{m.t}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-4 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {[
            { v: 50, s: "+", l: "Projects" },
            { v: 100, s: "+", l: "Solutions" },
            { v: 12, s: "+", l: "GCC Clients" },
            { v: 99, s: "%", l: "Satisfaction" },
          ].map((s, i) => (
            <div key={i} className="bg-card p-8">
              <div className="text-5xl font-extrabold text-gradient-gold"><Counter value={s.v} suffix={s.s} /></div>
              <div className="mt-3 text-sm uppercase tracking-widest text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Sparkles className="w-8 h-8 text-gold mx-auto" />
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold">Work with us</h2>
          <p className="mt-4 text-muted-foreground text-lg">Discover how Nexora can support your next major industrial project.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground btn-glow-red">
            Talk to our team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
