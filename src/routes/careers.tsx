import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Briefcase, MapPin, Upload } from "lucide-react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers | Nexora Energy Solutions" },
      {
        name: "description",
        content:
          "Join Nexora Energy Solutions in engineering, maintenance, HSE, procurement and operations roles across Kuwait and the GCC.",
      },
      { property: "og:title", content: "Careers at Nexora" },
      {
        property: "og:description",
        content: "Build a career in modern energy infrastructure services.",
      },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

const jobs = [
  {
    title: "Senior Mechanical Engineer",
    department: "Engineering",
    location: "Ahmadi, Kuwait",
    kind: "Full-time",
  },
  {
    title: "HSE Officer",
    department: "Health & Safety",
    location: "Ahmadi, Kuwait",
    kind: "Full-time",
  },
  {
    title: "Instrumentation Technician",
    department: "Maintenance",
    location: "Kuwait",
    kind: "Contract",
  },
  {
    title: "Project Manager - Pipelines",
    department: "Projects",
    location: "GCC",
    kind: "Full-time",
  },
  {
    title: "Procurement Specialist",
    department: "Procurement",
    location: "Ahmadi, Kuwait",
    kind: "Full-time",
  },
  {
    title: "Field Operations Supervisor",
    department: "Operations",
    location: "Kuwait",
    kind: "Full-time",
  },
];

function CareersPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Careers"
        title={
          <>
            Build with <span className="text-gradient-energy">Nexora.</span>
          </>
        }
        description="Join a team focused on safety, engineering excellence, operational reliability and the future of Kuwait's energy infrastructure."
      />

      <section className="py-16">
        <div className="mx-auto max-w-5xl space-y-4 px-6">
          {jobs.map((job, index) => (
            <Reveal key={job.title} delay={index * 0.04}>
              <article className="group flex flex-col gap-4 rounded-2xl border border-border bg-white p-6 transition hover:border-energy-soft hover:shadow-elevated md:flex-row md:items-center md:gap-8 md:p-8">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-energy/14 text-primary">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold transition group-hover:text-primary">
                    {job.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-4 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    <span>{job.department}</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> {job.location}
                    </span>
                    <span className="text-primary">{job.kind}</span>
                  </div>
                </div>
                <button className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground btn-glow-blue">
                  Apply <ArrowUpRight className="h-4 w-4" />
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface/70 py-24">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
                Open application
              </span>
              <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">
                Don&apos;t see your role?{" "}
                <span className="text-gradient-energy">Send your CV.</span>
              </h2>
            </div>
          </Reveal>
          <form className="mt-12 grid gap-4 rounded-[2rem] border border-border bg-white p-6 shadow-sm sm:grid-cols-2 md:p-8">
            <Field label="Full Name" />
            <Field label="Email Address" type="email" />
            <Field label="Phone Number" />
            <Field label="Area of Expertise" />
            <div className="sm:col-span-2">
              <label className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                Cover Note
              </label>
              <textarea
                rows={4}
                className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-energy-soft focus:ring-4 focus:ring-energy/10"
              />
            </div>
            <label className="sm:col-span-2 flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-border bg-background/60 px-4 py-4 text-sm text-muted-foreground transition hover:border-energy-soft">
              <Upload className="h-5 w-5 text-primary" />
              Upload CV (PDF, max 5MB)
              <input type="file" accept=".pdf" className="hidden" />
            </label>
            <button className="sm:col-span-2 rounded-full bg-primary px-6 py-4 text-sm font-bold text-primary-foreground btn-glow-blue">
              Submit Application
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}

function Field({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <div>
      <label className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-energy-soft focus:ring-4 focus:ring-energy/10"
      />
    </div>
  );
}
