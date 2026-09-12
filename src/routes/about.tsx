import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  ClipboardList,
  FileText,
  HardHat,
  MapPin,
  MessageSquare,
  Network,
  Shield,
  UsersRound,
} from "lucide-react";
import { CollaborationsGrid } from "@/components/CollaborationsGrid";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { seoHead } from "@/lib/seo";
import aboutHero from "@/assets/optimized/about-hero-team-refinery.webp";
import aboutTeam from "@/assets/optimized/about-nexora-team.webp";

export const Route = createFileRoute("/about")({
  head: () => seoHead("/about"),
  component: AboutPage,
});

function SectionEyebrow({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-energy-soft bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-primary backdrop-blur">
      <span className="h-1.5 w-1.5 rounded-full bg-energy" />
      {children}
    </span>
  );
}

function AboutPage() {
  return (
    <Layout>
      {/* 1. Hero */}
      <PageHero
        eyebrow="About NEXORA"
        title="Qatar-Based Technical Expertise for Industry"
        description="NEXORA Energy Solutions provides technical manpower, industrial services and procurement support from its base in Qatar, with a focus on Qatar, Saudi Arabia and Kuwait."
        backgroundImage={aboutHero}
        imagePosition="object-[64%_center]"
        hideTags
      />

      {/* 2. Who We Are */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
          <Reveal>
            <SectionEyebrow>Who We Are</SectionEyebrow>
            <h2 className="mt-5 text-3xl font-extrabold leading-[1.06] md:text-5xl">
              Built in Qatar for{" "}
              <span className="text-gradient-energy">demanding industrial requirements.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              NEXORA Energy Solutions is based in Doha, Qatar, supporting technical manpower,
              industrial-service and procurement requirements for industrial project teams. Our
              approach starts with understanding the scope, discipline, schedule and project
              conditions behind each request.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Qatar is our home market. Saudi Arabia and Kuwait are priority markets we support from
              our Doha base, with every requirement approached on its own project conditions rather
              than a standard package.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: ClipboardList, text: "Requirement-led planning" },
                { icon: UsersRound, text: "Technical workforce coordination" },
                { icon: FileText, text: "Documentation support" },
                { icon: MessageSquare, text: "Project-focused communication" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <item.icon className="h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm font-semibold text-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-4xl bg-linear-to-br from-primary/12 to-energy/16 blur-2xl" />
              <div className="relative overflow-hidden rounded-4xl border border-white/60 bg-white shadow-elevated">
                <img
                  src={aboutTeam}
                  alt="Nexora team members at an industrial site in Qatar"
                  loading="lazy"
                  className="h-120 w-full object-cover"
                />
                <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/50 bg-white/88 p-4 backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-energy/14 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div className="font-display text-sm font-bold">
                      Headquartered in Doha, Qatar
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. Mission and Operating Principles */}
      <section className="border-y border-border bg-surface/60 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-12 text-center">
            <SectionEyebrow>Our Purpose</SectionEyebrow>
            <h2 className="mt-5 text-3xl font-extrabold leading-[1.06] md:text-5xl">
              A Clear Purpose. <span className="text-gradient-energy">Practical Principles.</span>
            </h2>
          </Reveal>

          <Reveal>
            <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-white p-7 text-center shadow-sm md:p-9">
              <p className="text-lg font-medium leading-8 text-foreground">
                To support industrial organizations with responsive technical manpower, coordinated
                services and project-focused procurement from our base in Qatar.
              </p>
            </div>
          </Reveal>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Shield,
                title: "Safety First",
                desc: "Safety considerations guide how requirements, personnel and project support are approached.",
              },
              {
                icon: Award,
                title: "Integrity",
                desc: "We communicate clearly, represent capabilities accurately and avoid promises we cannot support.",
              },
              {
                icon: UsersRound,
                title: "Collaboration",
                desc: "We work closely with clients and relevant stakeholders to understand project requirements.",
              },
              {
                icon: HardHat,
                title: "Technical Discipline",
                desc: "Requirements are approached with attention to scope, documentation and project conditions.",
              },
            ].map((val, i) => (
              <Reveal key={val.title} delay={i * 0.06}>
                <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary/8 text-primary ring-1 ring-primary/10">
                    <val.icon className="h-5 w-5" />
                  </div>
                  <div className="mt-4 font-display text-base font-bold">{val.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{val.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Qatar Base and Priority Markets */}
      <section className="bg-light-gray py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <SectionEyebrow>Regional Focus</SectionEyebrow>
            <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-extrabold leading-[1.06] md:text-5xl">
              Headquartered in Qatar. Focused on Priority Gulf Markets.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              NEXORA coordinates its services from Doha, with Qatar as its headquarters and home
              market and Saudi Arabia and Kuwait as priority markets.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                { code: "QA", country: "Qatar", role: "Headquarters & Home Market", primary: true },
                { code: "SA", country: "Saudi Arabia", role: "Priority Market", primary: false },
                { code: "KW", country: "Kuwait", role: "Priority Market", primary: false },
              ].map((market) => (
                <div
                  key={market.code}
                  className={
                    market.primary
                      ? "rounded-lg border-2 border-energy bg-navy p-6 shadow-elevated"
                      : "rounded-lg border border-border bg-white p-6 shadow-sm"
                  }
                >
                  <div
                    className={
                      market.primary
                        ? "mx-auto grid h-12 w-12 place-items-center rounded-md bg-energy/15 text-energy"
                        : "mx-auto grid h-12 w-12 place-items-center rounded-md bg-primary/8 text-primary"
                    }
                  >
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div
                    className={
                      market.primary
                        ? "mt-4 text-xl font-extrabold text-white"
                        : "mt-4 text-xl font-extrabold text-foreground"
                    }
                  >
                    {market.country}
                  </div>
                  <div
                    className={
                      market.primary
                        ? "mt-1 text-xs font-extrabold uppercase tracking-[0.12em] text-energy"
                        : "mt-1 text-xs font-extrabold uppercase tracking-[0.12em] text-primary"
                    }
                  >
                    {market.role}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. Industry Landscape (logo section) */}
      <section
        id="collaborations"
        className="scroll-mt-32 border-t border-border bg-white py-20 lg:scroll-mt-40"
      >
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            <SectionEyebrow>Industry Landscape</SectionEyebrow>
            <h2 className="mt-5 text-3xl font-extrabold leading-[1.06] md:text-5xl">
              Organizations Across the Regional Industrial Landscape
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              A selection of organizations active across the energy, industrial, infrastructure and
              commercial sectors in Qatar and the wider region.
            </p>
            <p className="mx-auto mt-4 max-w-xl rounded-md border border-border bg-surface/70 px-4 py-2.5 text-sm font-semibold leading-5 text-foreground">
              Logos are shown for industry-context purposes only. No client, partner, supplier,
              endorsement or commercial relationship with NEXORA Energy Solutions is implied.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <CollaborationsGrid />
          </Reveal>
        </div>
      </section>

      {/* 6. Final CTA */}
      <section className="bg-light-gray py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex flex-col items-center gap-5 rounded-4xl border border-border bg-white px-8 py-12 text-center shadow-elevated md:px-16">
              <Network className="h-10 w-10 text-energy" />
              <h2 className="max-w-xl text-3xl font-extrabold md:text-4xl">
                Discuss Your Project Requirements
              </h2>
              <p className="max-w-md text-base leading-relaxed text-muted-foreground">
                Share your manpower, industrial-service or procurement requirement, and our team
                will review the details with you.
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
                  Contact Nexora
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
