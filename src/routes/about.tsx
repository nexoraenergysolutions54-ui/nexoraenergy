import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Compass, Eye, Heart, Target, Users } from "lucide-react";
import { Counter } from "@/components/Counter";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import about from "@/assets/about-engineers.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Nexora Energy Solutions" },
      {
        name: "description",
        content:
          "Learn how Nexora Energy Solutions supports Kuwait's energy sector with engineering, industrial services, procurement, maintenance and operational excellence.",
      },
      { property: "og:title", content: "About Nexora Energy Solutions" },
      {
        property: "og:description",
        content:
          "A modern Kuwait-based energy partner built for trust, safety and reliable execution.",
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
            Built for <span className="text-gradient-energy">trusted energy partnerships.</span>
          </>
        }
        description="Nexora Energy Solutions brings disciplined engineering, industrial services and operational support to Kuwait's most demanding energy environments."
      />

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/14 to-energy/18 blur-2xl" />
              <img
                src={about}
                alt="Nexora engineers reviewing industrial infrastructure"
                loading="lazy"
                className="relative h-[560px] w-full rounded-[2rem] border border-white/70 object-cover shadow-elevated"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
              Our role
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight md:text-5xl">
              Kuwait-based capability with{" "}
              <span className="text-gradient-energy">international standards.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Nexora was established to support energy operators, EPC contractors and industrial
              partners with practical execution capacity across engineering, maintenance,
              procurement and operations.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Our work is guided by safety, reliability, documentation discipline and measurable
              outcomes, helping clients keep critical infrastructure running with confidence.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-bold text-primary-foreground btn-glow-blue"
            >
              Talk to our team <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-surface/70 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3">
          {[
            {
              icon: Target,
              title: "Mission",
              text: "Deliver integrated services that improve safety, reliability and delivery control for Kuwait's energy sector.",
            },
            {
              icon: Eye,
              title: "Vision",
              text: "Become a preferred regional partner for operators, EPC contractors and international energy companies.",
            },
            {
              icon: Heart,
              title: "Values",
              text: "Safety, integrity, accountability, innovation, operational excellence and respect for people.",
            },
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <article className="h-full rounded-[1.75rem] border border-border bg-white p-8 hover-lift">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-energy/14 text-primary">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
                Leadership focus
              </span>
              <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">
                Experienced teams aligned around{" "}
                <span className="text-gradient-energy">reliable delivery.</span>
              </h2>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {[
              {
                name: "Executive Leadership",
                role: "Strategy and client governance",
                icon: Compass,
              },
              { name: "Engineering", role: "Technical assurance", icon: Award },
              { name: "Operations", role: "Field delivery control", icon: Users },
              { name: "HSE & Quality", role: "Safety and compliance", icon: Heart },
            ].map((person, index) => (
              <Reveal key={person.name} delay={index * 0.05}>
                <div className="rounded-[1.5rem] border border-border bg-white p-6 text-center hover-lift">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-primary/8 text-primary">
                    <person.icon className="h-7 w-7" />
                  </div>
                  <div className="mt-5 font-display text-lg font-bold">{person.name}</div>
                  <div className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    {person.role}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-white py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-[2rem] border border-border bg-border px-0 md:grid-cols-4">
          {[
            { value: 50, suffix: "+", label: "Projects" },
            { value: 100, suffix: "+", label: "Solutions" },
            { value: 12, suffix: "+", label: "Client sectors" },
            { value: 99, suffix: "%", label: "Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white p-8 text-center">
              <div className="font-display text-4xl font-extrabold text-primary">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
