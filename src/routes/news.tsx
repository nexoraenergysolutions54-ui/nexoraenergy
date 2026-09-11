import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/enterprise-content";
import { seoHead } from "@/lib/seo";
import pEng from "@/assets/optimized/project-engineering.webp";
import pMaint from "@/assets/optimized/project-maintenance.webp";
import pPipeline from "@/assets/optimized/project-pipeline.webp";
import pPlant from "@/assets/optimized/project-plant.webp";
import pRefinery from "@/assets/optimized/project-refinery.webp";

export const Route = createFileRoute("/news")({
  head: () => seoHead("/news"),
  component: NewsPage,
});

const articles = [
  {
    image: pRefinery,
    category: "Manpower",
    title: "Planning manpower for a shutdown window",
    body: "Start with the work packages and shift pattern. List each discipline, headcount, supervision requirement and target start date. Confirm site access and required documentation before agreeing a mobilisation plan.",
  },
  {
    image: pEng,
    category: "Documentation",
    title: "Preparing a useful technical personnel brief",
    body: "Specify the role, relevant equipment or process experience, qualifications and reporting line. Ask for evidence relevant to the assignment and agree how missing documents will be resolved before deployment.",
  },
  {
    image: pMaint,
    category: "Operations",
    title: "Defining maintenance support requirements",
    body: "Separate planned work from reactive support. Share the asset list, access constraints, expected duration and responsibilities for tools and materials. Agree reporting and handover requirements with the site team.",
  },
  {
    image: pPipeline,
    category: "Projects",
    title: "Coordinating field teams across project locations",
    body: "A location-by-location brief helps teams plan travel, accommodation, reporting and site access. Identify a contact for each work area and document changes to the schedule so personnel receive consistent instructions.",
  },
  {
    image: pPlant,
    category: "HSE",
    title: "Including site requirements in the supplier brief",
    body: "Ask the site owner which inductions, training records and access approvals apply to the work. Include those requirements in the supplier brief and confirm who checks them. Requirements vary by operator, location and task.",
  },
  {
    image: pEng,
    category: "Procurement",
    title: "What to include in an industrial product enquiry",
    body: "Include a specification or datasheet, quantity, material, dimensions, applicable standards and delivery location. Identify required certification and traceability documents, and state whether alternatives may be proposed for approval.",
  },
];

function NewsPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Industrial Insights"
        title={
          <>
            Practical planning notes and{" "}
            <span className="text-gradient-energy">energy-sector insights.</span>
          </>
        }
        description="Practical notes for planning manpower, maintenance, documentation and industrial procurement requirements."
      />

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <Reveal key={article.title} delay={index * 0.04}>
              <article className="group overflow-hidden rounded-[1.75rem] border border-border bg-white hover-lift">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/58 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/60 bg-white/82 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-primary backdrop-blur">
                    {article.category}
                  </span>
                </div>
                <div className="p-6">
                  <h2 className="mt-3 font-display text-xl font-bold leading-snug transition group-hover:text-primary">
                    {article.title}
                  </h2>
                  <details className="mt-6 text-sm leading-7">
                    <summary className="cursor-pointer font-bold text-primary">
                      Read planning note
                    </summary>
                    <p className="mt-3 text-muted-foreground">{article.body}</p>
                  </details>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </Layout>
  );
}
