import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, ClipboardCheck, FileCheck2, ShieldCheck } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Reveal } from "@/components/Reveal";
import { industrialImages, markets, site } from "@/lib/enterprise-content";
import { breadcrumbSchema, faqSchema, itemListSchema, webPageSchema } from "@/lib/schema";

function JsonLd({ data }: { data: unknown }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

const pageTitle = "GCC Industrial Manpower and Project Support Guide";
const pageDescription =
  "A practical guide for EPC contractors, energy operators and procurement teams planning technical manpower, industrial services and project support across Qatar and the GCC.";

const guideTopics = [
  "Technical manpower scope definition",
  "Industrial service mobilisation",
  "Documentation and HSE readiness",
  "Procurement support inputs",
  "GCC project coordination",
  "Supplier evaluation",
];

const faqs = [
  {
    question: "What should an EPC contractor define before requesting technical manpower?",
    answer:
      "The contractor should define disciplines, headcount, duration, mobilisation date, site location, shift or rotation pattern, required certifications, HSE requirements and reporting structure.",
  },
  {
    question: "Why does documentation readiness matter for GCC industrial manpower?",
    answer:
      "Documentation readiness reduces mobilisation delays by confirming certificates, training records, medical fitness, visa requirements, site access documents and project-specific HSE expectations before deployment.",
  },
  {
    question: "How does Nexora support GCC project coordination?",
    answer:
      "Nexora coordinates requirements from Doha across Qatar, Saudi Arabia, UAE, Kuwait, Bahrain and Oman, supporting manpower planning, industrial services, procurement follow-up and project communication.",
  },
  {
    question: "What makes a manpower supplier suitable for energy and industrial projects?",
    answer:
      "A suitable supplier understands live-site constraints, permit-driven work, HSE expectations, technical discipline matching, documentation control, mobilisation timing and procurement communication.",
  },
];

export const Route = createFileRoute("/resources/gcc-industrial-manpower-guide")({
  head: () => ({
    meta: [
      { title: `${pageTitle} | Nexora Energy Solutions` },
      { name: "description", content: pageDescription },
      { property: "og:title", content: pageTitle },
      { property: "og:description", content: pageDescription },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${site.url}/resources/gcc-industrial-manpower-guide` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${site.url}/resources/gcc-industrial-manpower-guide` }],
  }),
  component: GccIndustrialManpowerGuide,
});

function GccIndustrialManpowerGuide() {
  return (
    <Layout>
      <JsonLd
        data={webPageSchema({
          name: pageTitle,
          description: pageDescription,
          url: "/resources/gcc-industrial-manpower-guide",
          keywords: guideTopics,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          {
            name: "GCC Industrial Manpower Guide",
            url: "/resources/gcc-industrial-manpower-guide",
          },
        ])}
      />
      <JsonLd
        data={itemListSchema(
          "GCC industrial manpower guide topics",
          guideTopics,
          "/resources/gcc-industrial-manpower-guide",
        )}
      />
      <JsonLd data={faqSchema(faqs)} />

      <section className="relative min-h-[72svh] overflow-hidden bg-dark-navy">
        <img
          src={industrialImages.execution}
          alt="Engineers reviewing project drawings at an industrial facility"
          className="absolute inset-0 h-full w-full object-cover opacity-68"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,17,31,0.94),rgba(4,28,50,0.76)_48%,rgba(4,28,50,0.24))]" />
        <div className="relative mx-auto flex min-h-[72svh] max-w-7xl items-center px-6 pb-16 pt-32 lg:px-8">
          <Reveal className="max-w-4xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-energy" />
              <span className="text-[11px] font-extrabold uppercase tracking-[0.24em] text-energy">
                Buyer Guide
              </span>
            </div>
            <h1 className="text-[38px] font-extrabold leading-[1.06] tracking-display text-white sm:text-5xl lg:text-[70px]">
              GCC Industrial Manpower and Project Support Guide
            </h1>
            <p className="mt-7 max-w-3xl text-base font-medium leading-8 text-white/78 md:text-lg">
              A practical reference for EPC contractors, energy operators and procurement teams
              planning technical manpower, industrial services and project support across Qatar and
              the GCC.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.74fr_0.42fr] lg:px-8">
          <Reveal>
            <div className="space-y-12">
              {[
                {
                  icon: ClipboardCheck,
                  title: "1. Define the manpower requirement before sourcing.",
                  text: "A useful manpower request should include discipline, quantity, seniority, project phase, location, duration, start date, shift pattern, reporting line and any site-specific certifications. This allows suppliers to respond with relevant profiles instead of generic CVs.",
                },
                {
                  icon: ShieldCheck,
                  title: "2. Treat compliance as part of mobilisation, not an afterthought.",
                  text: "Industrial projects across the GCC often require certificates, training records, medical fitness, HSE induction, visa or work authorization inputs and site access documents. Early documentation review protects the mobilisation schedule.",
                },
                {
                  icon: FileCheck2,
                  title: "3. Align procurement, site and project teams.",
                  text: "Manpower and industrial service requests usually involve procurement, project controls, site supervision and HSE teams. A clear supplier brief helps each function understand commercial scope, operational constraints and documentation expectations.",
                },
              ].map((item, index) => (
                <article key={item.title}>
                  <div className="grid h-12 w-12 place-items-center rounded-md bg-primary/5 text-primary">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-6 text-2xl font-extrabold leading-tight text-foreground md:text-4xl">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-base font-medium leading-8 text-muted-foreground">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <aside className="sticky top-28 rounded-lg border border-border bg-light-gray p-6">
              <h2 className="text-xl font-extrabold text-foreground">Quick reference</h2>
              <div className="mt-6 grid gap-3">
                {guideTopics.map((topic) => (
                  <div key={topic} className="flex gap-3 text-sm font-bold text-primary">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-energy" />
                    {topic}
                  </div>
                ))}
              </div>
              <div className="mt-7 rounded-md border border-border bg-white p-4">
                <div className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-muted-foreground">
                  Coverage
                </div>
                <p className="mt-2 text-sm font-bold leading-6 text-primary">
                  {markets.join(", ")}
                </p>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      <section className="bg-light-gray py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="mb-12 max-w-4xl">
            <h2 className="text-3xl font-extrabold leading-tight text-foreground md:text-5xl">
              Questions buyers ask before engaging a manpower partner.
            </h2>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            {faqs.map((item, index) => (
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

      <section className="bg-dark-navy py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal className="grid gap-8 lg:grid-cols-[0.9fr_0.5fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold leading-tight text-white md:text-5xl">
                Turn the guide into a project-ready manpower brief.
              </h2>
              <p className="mt-5 max-w-2xl text-base font-medium leading-7 text-white/70">
                Share the project location, disciplines, headcount, mobilisation date and
                documentation requirements. Nexora will respond with a practical next step.
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
