import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Globe,
  HardHat,
  Network,
  Shield,
  Target,
  Users,
} from "lucide-react";
import { Counter } from "@/components/Counter";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import aboutHero from "@/assets/about-hero-team-refinery.png";
import about from "@/assets/about-engineers.jpg";
import pEng from "@/assets/project-engineering.jpg";
import pRefinery from "@/assets/project-refinery.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Nexora Energy Solutions" },
      {
        name: "description",
        content:
          "Nexora Energy Solutions is a Qatar-based Technical Manpower & Industrial Solutions Partner serving energy, LNG, petrochemical, infrastructure and EPC projects across the GCC.",
      },
      { property: "og:title", content: "About Nexora Energy Solutions" },
      {
        property: "og:description",
        content:
          "Qatar-based technical manpower and industrial solutions partner for the GCC energy sector.",
      },
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
        eyebrow="About Nexora"
        title={
          <>
            The technical partner built for{" "}
            <span className="text-energy">GCC energy projects.</span>
          </>
        }
        description="Nexora Energy Solutions is a Qatar-based Technical Manpower & Industrial Solutions Partner. We deliver qualified workforce, industrial services and procurement support for the region's most demanding energy, LNG and industrial projects."
        backgroundImage={aboutHero}
        imagePosition="object-[64%_center]"
      />

      {/* Company story */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-energy-soft bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-primary backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-energy" />
              Who We Are
            </span>
            <h2 className="mt-5 text-3xl font-extrabold leading-[1.06] md:text-5xl">
              Positioned where Qatar&apos;s{" "}
              <span className="text-gradient-energy">energy projects need us most.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Nexora Energy Solutions was established to fill a specific gap in the Qatar and GCC
              market: a technically capable, compliance-focused manpower and industrial solutions
              partner that understands the real demands of energy, LNG, petrochemical and EPC
              project environments.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              We are not a general labour company. We are a technical partner — deploying qualified
              engineers, certified tradespeople and experienced supervisors who meet the
              documentation, safety and technical standards of Qatar&apos;s major operators and
              international EPC contractors.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "QatarEnergy project aligned",
                "QatarEnergy LNG capable",
                "EPC contractor preferred",
                "GCC compliance managed",
                "24/7 mobilisation support",
                "GCC-wide deployment capability",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-border bg-white p-3"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-energy" />
                  <span className="text-sm font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-4xl bg-linear-to-br from-primary/12 to-energy/16 blur-2xl" />
              <div className="relative overflow-hidden rounded-4xl border border-white/60 bg-white shadow-elevated">
                <img
                  src={about}
                  alt="Nexora engineering team at energy facility"
                  loading="lazy"
                  className="h-120 w-full object-cover"
                />
                <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/50 bg-white/88 p-4 backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-energy/14 text-primary">
                      <Award className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-display text-sm font-bold">
                        Headquartered in Doha, Qatar
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Serving Qatar, Kuwait, Saudi Arabia, UAE, Bahrain &amp; Oman
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-surface/60 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-4xl border border-border bg-border md:grid-cols-4">
            {[
              { v: 500, s: "+", l: "Workforce Pool" },
              { v: 50, s: "+", l: "Technical Disciplines" },
              { v: 6, s: "", l: "GCC Countries" },
              { v: 100, s: "%", l: "Compliance Managed" },
            ].map((stat, i) => (
              <Reveal key={stat.l} delay={i * 0.06}>
                <motion.div whileHover={{ y: -3 }} className="bg-white p-8 text-center">
                  <div className="font-display text-4xl font-extrabold text-primary md:text-5xl">
                    <Counter value={stat.v} suffix={stat.s} />
                  </div>
                  <div className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                    {stat.l}
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-energy-soft bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-primary backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-energy" />
              Our Purpose
            </span>
            <h2 className="mt-5 text-3xl font-extrabold leading-[1.06] md:text-5xl">
              Mission, vision &amp; <span className="text-gradient-energy">core values.</span>
            </h2>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-3">
            <Reveal>
              <div className="rounded-2xl border border-border bg-white p-7 shadow-sm">
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-primary/8 text-primary ring-1 ring-primary/10">
                  <Target className="h-6 w-6" />
                </div>
                <div className="font-display text-lg font-bold">Our Mission</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  To be Qatar and the GCC&apos;s most trusted technical manpower and industrial
                  solutions partner — delivering qualified, compliant and reliable workforce and
                  services for every project phase, every time.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="rounded-2xl border border-border bg-white p-7 shadow-sm">
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-primary/8 text-primary ring-1 ring-primary/10">
                  <Globe className="h-6 w-6" />
                </div>
                <div className="font-display text-lg font-bold">Our Vision</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  To build the GCC&apos;s leading technical manpower and industrial solutions
                  platform — recognised by operators, EPC contractors and government programs as the
                  partner of choice for critical project delivery.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="rounded-2xl border border-border bg-white p-7 shadow-sm">
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-primary/8 text-primary ring-1 ring-primary/10">
                  <Shield className="h-6 w-6" />
                </div>
                <div className="font-display text-lg font-bold">Our Commitment</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Compliance, safety and quality are non-negotiable. Every Nexora deployment,
                  service and supply is executed with the documentation discipline and HSE standards
                  that our clients&apos; facilities demand.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-border bg-surface/60 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-12 text-center">
            <h2 className="text-3xl font-extrabold md:text-4xl">The values we work by.</h2>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Shield,
                title: "Safety First",
                desc: "HSE is embedded in planning, execution and handover — zero compromise on personnel or facility safety.",
              },
              {
                icon: Award,
                title: "Integrity",
                desc: "We say what we deliver and we deliver what we say. Transparent reporting and honest project communication.",
              },
              {
                icon: Users,
                title: "Partnership",
                desc: "Long-term partnerships with clients, employees and suppliers built on trust, performance and mutual benefit.",
              },
              {
                icon: HardHat,
                title: "Technical Excellence",
                desc: "Every person we deploy, every service we deliver meets the technical standard our clients are entitled to expect.",
              },
            ].map((val, i) => (
              <Reveal key={val.title} delay={i * 0.06}>
                <div className="group rounded-2xl border border-border bg-white p-6 shadow-sm transition hover:shadow-elevated hover:-translate-y-0.5">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/8 text-primary ring-1 ring-primary/10 transition group-hover:bg-energy/14 group-hover:ring-energy/20">
                    <val.icon className="h-6 w-6" />
                  </div>
                  <div className="mt-5 font-display text-base font-bold">{val.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{val.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Regional reach */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-energy-soft bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-primary backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-energy" />
                Regional Reach
              </span>
              <h2 className="mt-5 text-3xl font-extrabold leading-[1.06] md:text-5xl">
                Qatar headquarters. <span className="text-gradient-energy">GCC deployment.</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Nexora&apos;s headquarters in Doha, Qatar places us at the heart of the
                region&apos;s energy industry. From here, we support project deployment across all
                six GCC member states — with in-country coordination, visa and compliance support
                managed locally.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  { code: "QA", country: "Qatar - HQ" },
                  { code: "KW", country: "Kuwait" },
                  { code: "SA", country: "Saudi Arabia" },
                  { code: "AE", country: "UAE" },
                  { code: "BH", country: "Bahrain" },
                  { code: "OM", country: "Oman" },
                ].map((c) => (
                  <div
                    key={c.code}
                    className="flex items-center gap-3 rounded-xl border border-border bg-white p-3.5"
                  >
                    <div className="grid h-8 w-10 place-items-center rounded-lg bg-primary/8 font-display text-xs font-bold text-primary">
                      {c.code}
                    </div>
                    <span className="text-sm font-semibold">{c.country}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="grid gap-4">
                <div className="relative overflow-hidden rounded-4xl border border-border bg-white shadow-elevated">
                  <img
                    src={pRefinery}
                    alt="Energy facility in Qatar"
                    loading="lazy"
                    className="h-56 w-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="overflow-hidden rounded-2xl border border-border bg-white">
                    <img
                      src={pEng}
                      alt="Engineering professionals"
                      loading="lazy"
                      className="h-32 w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-navy p-4 text-center">
                    <div className="font-display text-3xl font-extrabold text-energy">
                      <Counter value={6} suffix="" />
                    </div>
                    <div className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-white/55">
                      GCC Countries
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex flex-col items-center gap-5 rounded-4xl border border-border bg-white px-8 py-12 text-center shadow-elevated md:px-16">
              <Network className="h-10 w-10 text-energy" />
              <h2 className="max-w-xl text-3xl font-extrabold md:text-4xl">
                Ready to partner with Nexora?
              </h2>
              <p className="max-w-md text-base leading-relaxed text-muted-foreground">
                Discuss your manpower requirements, industrial service needs or procurement scopes
                with our team.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/manpower"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground transition hover:bg-primary/90 btn-glow-blue"
                >
                  Request Manpower <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-bold transition hover:border-energy-soft hover:text-primary"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
