import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { MapPin, Briefcase, ArrowUpRight, Upload } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Nexora Energy Solutions" },
      { name: "description", content: "Join Nexora — a Kuwait-based energy and industrial services company. Explore open roles and submit your CV." },
      { property: "og:title", content: "Careers at Nexora" },
      { property: "og:description", content: "Engineering, maintenance, HSE and operations roles across Kuwait and the GCC." },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

const jobs = [
  { t: "Senior Mechanical Engineer", d: "Engineering", l: "Ahmadi, Kuwait", k: "Full-time" },
  { t: "HSE Officer", d: "Health & Safety", l: "Ahmadi, Kuwait", k: "Full-time" },
  { t: "Instrumentation Technician", d: "Maintenance", l: "Kuwait", k: "Contract" },
  { t: "Project Manager — Pipelines", d: "Projects", l: "GCC", k: "Full-time" },
  { t: "Procurement Specialist", d: "Procurement", l: "Ahmadi, Kuwait", k: "Full-time" },
  { t: "Field Operations Supervisor", d: "Operations", l: "Kuwait", k: "Full-time" },
];

function CareersPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Careers"
        title={<>Build your career with <span className="text-gradient-gold">Nexora</span></>}
        description="Join a team that delivers safety, engineering excellence and operational reliability across the GCC."
      />

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6 space-y-4">
          {jobs.map((j, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <article className="group rounded-2xl border border-border bg-card p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8 hover:border-gold-soft transition">
                <div className="grid place-items-center w-12 h-12 rounded-xl bg-primary/10 border border-gold-soft text-gold shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-display font-bold group-hover:text-gold transition">{j.t}</h3>
                  <div className="mt-2 flex flex-wrap gap-4 text-xs uppercase tracking-widest text-muted-foreground">
                    <span>{j.d}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {j.l}</span>
                    <span className="text-gold">{j.k}</span>
                  </div>
                </div>
                <button className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground btn-glow-red">
                  Apply <ArrowUpRight className="w-4 h-4" />
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 bg-surface/40 border-y border-border">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <div className="text-center">
              <span className="text-xs uppercase tracking-[0.3em] text-gold font-semibold">Open Application</span>
              <h2 className="mt-4 text-3xl md:text-5xl font-extrabold">Don't see your role? <span className="text-gradient-gold">Send your CV.</span></h2>
            </div>
          </Reveal>
          <form className="mt-12 grid sm:grid-cols-2 gap-4 rounded-3xl border border-border bg-card p-8">
            <Field label="Full Name" />
            <Field label="Email Address" type="email" />
            <Field label="Phone Number" />
            <Field label="Area of Expertise" />
            <div className="sm:col-span-2">
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Cover Note</label>
              <textarea rows={4} className="mt-2 w-full rounded-xl bg-background border border-border px-4 py-3 text-sm outline-none focus:border-gold-soft transition" />
            </div>
            <label className="sm:col-span-2 flex items-center gap-3 rounded-xl border border-dashed border-border bg-background/50 px-4 py-4 text-sm text-muted-foreground cursor-pointer hover:border-gold-soft transition">
              <Upload className="w-5 h-5 text-gold" />
              Upload CV (PDF, max 5MB)
              <input type="file" accept=".pdf" className="hidden" />
            </label>
            <button className="sm:col-span-2 rounded-full bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground btn-glow-red">
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
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input type={type} className="mt-2 w-full rounded-xl bg-background border border-border px-4 py-3 text-sm outline-none focus:border-gold-soft transition" />
    </div>
  );
}
