import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, ClipboardCheck, FileCheck2, ShieldCheck } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import {
  industryCards,
  markets,
  primaryServices,
  seoLandingContent,
  site,
  type SeoLandingSlug,
} from "@/lib/enterprise-content";
import {
  breadcrumbSchema,
  faqSchema,
  itemListSchema,
  serviceSchema,
  webPageSchema,
} from "@/lib/schema";

function JsonLd({ data }: { data: unknown }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

export function SeoLandingPage({ slug }: { slug: SeoLandingSlug }) {
  const content = seoLandingContent[slug];
  const isService = content.type === "service";
  const path = isService ? `/services/${slug}` : `/industries/${slug}`;
  const schemaDescription = `${content.description} Nexora Energy Solutions supports Qatar, Saudi Arabia, UAE, Kuwait, Bahrain and Oman from its Doha coordination base.`;
  const capabilityItems = isService
    ? [
        content.eyebrow,
        "Technical manpower coordination",
        "Project documentation support",
        "GCC mobilisation planning",
        "Industrial procurement coordination",
      ]
    : [
        `${content.eyebrow} project support`,
        "Technical manpower supply",
        "Shutdown and maintenance support",
        "Engineering support",
        "Procurement coordination",
      ];
  const directAnswers = [
    {
      question: `What does Nexora provide for ${content.eyebrow.toLowerCase()} requirements?`,
      answer: `${content.description} The support model combines requirement review, discipline matching, documentation readiness and mobilisation coordination for Qatar and GCC industrial projects.`,
    },
    {
      question: "Where does Nexora operate?",
      answer:
        "Nexora is headquartered in Doha, Qatar and supports industrial requirements across Qatar, Saudi Arabia, UAE, Kuwait, Bahrain and Oman.",
    },
    {
      question: "Who is this service designed for?",
      answer:
        "The service is designed for energy operators, EPC contractors, procurement teams, maintenance managers and industrial facilities that need reliable manpower or execution support.",
    },
    {
      question: "What makes the engagement procurement-ready?",
      answer:
        "Nexora helps clarify scope, headcount, disciplines, certifications, site requirements, duration, mobilisation date and documentation expectations before deployment.",
    },
  ];
  const faqs = [
    ...directAnswers,
    {
      question: `Does Nexora support ${content.eyebrow.toLowerCase()} projects in Qatar?`,
      answer:
        "Yes. Nexora is headquartered in Doha and supports Qatar-based industrial, energy, EPC, LNG and infrastructure requirements through technical manpower, project support and procurement coordination.",
    },
    {
      question: "Can Nexora coordinate manpower across the GCC?",
      answer:
        "Nexora supports requirements across Qatar, Saudi Arabia, UAE, Kuwait, Bahrain and Oman, with documentation, role matching and mobilisation coordination handled through its Qatar team.",
    },
    {
      question: "What information should a client provide?",
      answer:
        "Clients should share the project location, discipline requirements, headcount, duration, mobilisation date, required certifications and any site-specific HSE or documentation requirements.",
    },
  ];

  return (
    <Layout>
      <JsonLd data={serviceSchema(content.title, schemaDescription, path)} />
      <JsonLd
        data={webPageSchema({
          name: `${content.title} | Nexora Energy Solutions`,
          description: schemaDescription,
          url: path,
          keywords: [content.eyebrow, ...capabilityItems, ...markets],
        })}
      />
      <JsonLd
        data={itemListSchema(`${content.eyebrow} capability signals`, capabilityItems, path)}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          {
            name: isService ? "Services" : "Industries",
            url: isService ? "/services" : "/industries",
          },
          { name: content.eyebrow, url: path },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <section className="relative min-h-[72svh] overflow-hidden bg-dark-navy">
        <img
          src={content.image}
          alt={`${content.eyebrow} industrial project support`}
          className="absolute inset-0 h-full w-full object-cover opacity-62"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,17,31,0.92),rgba(4,28,50,0.7)_48%,rgba(4,28,50,0.22))]" />
        <div className="relative mx-auto flex min-h-[72svh] max-w-7xl items-center px-6 pb-16 pt-32 lg:px-8">
          <Reveal className="max-w-4xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-energy" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-energy">
                {content.eyebrow}
              </span>
            </div>
            <h1 className="text-[38px] font-extrabold leading-[1.06] tracking-display text-white sm:text-5xl lg:text-[72px]">
              {content.title}
            </h1>
            <p className="mt-7 max-w-3xl text-base font-medium leading-8 text-white/78 md:text-lg">
              {content.description} Nexora helps clients turn role requirements, industrial service
              scopes and procurement needs into practical mobilisation plans.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center gap-2 rounded-md bg-energy px-6 py-3 text-sm font-extrabold text-navy transition hover:bg-white"
              >
                Discuss Requirement
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/manpower"
                className="inline-flex min-h-12 items-center gap-2 rounded-md border border-white/25 px-6 py-3 text-sm font-extrabold text-white transition hover:border-energy hover:bg-white/10"
              >
                Request Manpower
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-light-gray py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="mb-12 grid gap-6 lg:grid-cols-[0.72fr_0.48fr] lg:items-end">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-energy" />
                <span className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-primary">
                  Direct Answers
                </span>
              </div>
              <h2 className="text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
                Clear answers for procurement, EPC and project teams.
              </h2>
            </div>
            <p className="text-base font-medium leading-7 text-muted-foreground">
              These short answers are written for buyers and search engines that need a precise
              understanding of Nexora&apos;s role, market coverage and operational fit.
            </p>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            {directAnswers.map((item, index) => (
              <Reveal key={item.question} delay={index * 0.04}>
                <article className="h-full rounded-lg border border-border bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-extrabold leading-snug text-foreground">
                    {item.question}
                  </h3>
                  <p className="mt-4 text-sm font-medium leading-7 text-muted-foreground">
                    {item.answer}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.78fr_0.42fr] lg:px-8">
          <Reveal>
            <div className="prose prose-slate max-w-none">
              <h2 className="text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
                Industrial support built around execution, compliance and schedule pressure.
              </h2>
              <div className="mt-7 space-y-6 text-base font-medium leading-8 text-muted-foreground">
                <p>
                  {content.eyebrow} requirements in Qatar and the GCC are rarely simple personnel
                  requests. Clients are usually working inside live industrial facilities, EPC
                  packages, LNG process areas, petrochemical units, utilities corridors or
                  infrastructure programs where access, permits, documentation and timing shape the
                  entire delivery plan. Nexora approaches these requirements as operational support,
                  not just recruitment. The objective is to understand the site condition, the
                  project phase, the required disciplines and the mobilisation window before
                  presenting manpower or service options.
                </p>
                <p>
                  For energy operators, EPC contractors and industrial facility teams, the cost of a
                  poor deployment is measured in schedule disruption, rework and additional
                  coordination load. Nexora therefore focuses on practical details: role definition,
                  certification needs, HSE expectations, rotation pattern, reporting line, scope
                  duration, tools or materials dependencies and the documentation package required
                  before a person or service team reaches site. This makes the engagement clearer
                  for procurement teams and more useful for project managers.
                </p>
                <p>
                  The company supports clients from a Doha base with regional coverage across Qatar,
                  Saudi Arabia, UAE, Kuwait, Bahrain and Oman. That regional positioning matters for
                  industrial buyers who need one coordination point for urgent manpower, shutdown
                  windows, maintenance support, engineering assistance or procurement follow-up. It
                  also helps contractors plan ahead when a package moves from engineering to
                  mobilisation, from mobilisation to construction, or from construction to
                  commissioning and operations support.
                </p>
                <p>
                  Nexora's role is to make industrial project support easier to specify, coordinate
                  and execute. A client can share the discipline list, headcount, work location,
                  expected duration, required certificates and mobilisation date. Nexora can then
                  respond with a clear path for technical manpower, industrial services,
                  documentation readiness and procurement support. The result is a more disciplined
                  experience for teams working under pressure in controlled project environments.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <aside className="sticky top-28 rounded-lg border border-border bg-light-gray p-6">
              <h3 className="text-xl font-extrabold text-foreground">Capability summary</h3>
              <div className="mt-6 grid gap-4">
                {[
                  ["Market", "Qatar and GCC"],
                  ["Client types", "Operators, EPCs, industrial facilities"],
                  [
                    "Core support",
                    isService ? "Service delivery coordination" : "Sector-specific manpower",
                  ],
                  ["Response", "Manpower, services and procurement"],
                ].map(([label, value]) => (
                  <div key={label} className="border-b border-border pb-4 last:border-b-0">
                    <div className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-muted-foreground">
                      {label}
                    </div>
                    <div className="mt-1 text-sm font-extrabold text-primary">{value}</div>
                  </div>
                ))}
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="grid gap-8 rounded-lg border border-border bg-light-gray p-7 md:p-10 lg:grid-cols-[0.85fr_0.55fr]">
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-energy" />
                <span className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-primary">
                  Entity Summary
                </span>
              </div>
              <h2 className="text-3xl font-extrabold leading-tight text-foreground md:text-4xl">
                Nexora in one operational summary.
              </h2>
              <p className="mt-5 max-w-3xl text-base font-medium leading-8 text-muted-foreground">
                Nexora Energy Solutions W.L.L is a Doha-headquartered industrial services and
                technical manpower company serving energy, LNG, oil and gas, petrochemical,
                manufacturing, infrastructure and EPC project environments across the GCC.
              </p>
            </div>
            <div className="grid gap-3">
              {[
                ["Headquarters", "Doha, Qatar"],
                ["Markets", markets.join(", ")],
                ["Core buyers", "Operators, EPCs, procurement teams"],
                ["Support model", "Manpower, services, procurement, projects"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-md border border-border bg-white px-4 py-3">
                  <div className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-muted-foreground">
                    {label}
                  </div>
                  <div className="mt-1 text-sm font-extrabold text-primary">{value}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-light-gray py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="mb-12 max-w-4xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-energy" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-primary">
                Delivery Framework
              </span>
            </div>
            <h2 className="text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
              How Nexora supports the requirement from enquiry to mobilisation.
            </h2>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                icon: ClipboardCheck,
                title: "Requirement definition",
                text: "Clarify disciplines, duration, certifications, site conditions, reporting line and mobilisation timing.",
              },
              {
                icon: ShieldCheck,
                title: "Documentation readiness",
                text: "Prepare personnel, compliance, HSE and project documentation expectations before site deployment.",
              },
              {
                icon: FileCheck2,
                title: "Deployment coordination",
                text: "Support communication with procurement, site teams and project managers through the mobilisation cycle.",
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 0.04}>
                <div className="h-full rounded-lg border border-border bg-white p-6 shadow-sm">
                  <div className="grid h-12 w-12 place-items-center rounded-md bg-primary/5 text-primary">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-extrabold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm font-medium leading-6 text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="mb-12 max-w-4xl">
            <h2 className="text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
              Related Nexora capabilities
            </h2>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {(isService ? industryCards.slice(0, 4) : primaryServices.slice(0, 4)).map((item) => (
              <a
                key={item.title}
                href={isService ? `/industries/${item.slug}` : `/services/${item.slug}`}
                className="group overflow-hidden rounded-lg border border-border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-elevated"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="p-5">
                  <h3 className="text-base font-extrabold text-foreground">{item.title}</h3>
                  <p className="mt-2 line-clamp-3 text-sm font-medium leading-6 text-muted-foreground">
                    {item.summary}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dark-navy py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="grid gap-8 lg:grid-cols-[0.9fr_0.5fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold leading-tight text-white md:text-5xl">
                Share your {content.eyebrow.toLowerCase()} requirement with Nexora.
              </h2>
              <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-white/70">
                Include project location, scope, headcount, disciplines, start date, duration and
                required documentation. Nexora will respond with a practical next step.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                to="/contact"
                className="inline-flex min-h-12 items-center gap-2 rounded-md bg-energy px-6 py-3 text-sm font-extrabold text-navy transition hover:bg-white"
              >
                Contact Nexora
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
