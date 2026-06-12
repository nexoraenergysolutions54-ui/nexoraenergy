import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  Briefcase,
  Building2,
  CheckCircle2,
  Globe,
  HardHat,
  MapPin,
  Send,
  Shield,
  TrendingUp,
  Upload,
  Users,
} from "lucide-react";
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
          "Join Nexora Energy Solutions - Qatar's technical manpower and industrial solutions partner. Engineering, technical trades, HSE, procurement and management roles across Qatar and the GCC.",
      },
      { property: "og:title", content: "Careers at Nexora Energy Solutions" },
      {
        property: "og:description",
        content:
          "Engineering, technical and operational careers with Qatar's leading energy manpower partner.",
      },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

const openRoles = [
  {
    title: "Senior Mechanical Engineer",
    department: "Engineering",
    location: "Doha, Qatar",
    type: "Contract",
    duration: "12 months",
    disciplines: ["Pressure vessels", "Rotating equipment", "Piping design", "ASME compliance"],
    requirements: "10+ years O&G experience, B.Eng Mechanical, ASME VIII knowledge",
  },
  {
    title: "Instrumentation Engineer — DCS/ESD",
    department: "Engineering",
    location: "Ras Laffan, Qatar",
    type: "Contract",
    duration: "12–24 months",
    disciplines: ["Yokogawa/Honeywell DCS", "SIS/ESD systems", "HAZOP reviews", "SIL analysis"],
    requirements: "8+ years process instrumentation, functional safety awareness",
  },
  {
    title: "Project Manager — EPC",
    department: "Management",
    location: "Qatar / GCC",
    type: "Full-time",
    duration: "Permanent",
    disciplines: ["EPC execution", "Stakeholder management", "Cost & schedule", "Reporting"],
    requirements: "15+ years GCC EPC project management, PMP preferred",
  },
  {
    title: "HSE Officer — Process Plant",
    department: "Health & Safety",
    location: "Kuwait",
    type: "Contract",
    duration: "6–12 months",
    disciplines: ["PTW management", "Incident investigation", "NEBOSH", "Risk assessment"],
    requirements: "5+ years O&G HSE, NEBOSH IGC, GCC oil sector experience",
  },
  {
    title: "QA/QC Inspector — Welding",
    department: "Quality",
    location: "Kuwait",
    type: "Contract",
    duration: "6 months",
    disciplines: ["AWS CWI", "NDT Level II", "Weld inspection", "ITP compliance"],
    requirements: "AWS CWI certified, API 1104 / ASME IX knowledge, 5+ years",
  },
  {
    title: "Senior Welders — CS/SS/CRA",
    department: "Technical Trades",
    location: "Kuwait / Qatar",
    type: "Contract",
    duration: "3–12 months",
    disciplines: ["SMAW", "GTAW", "GMAW", "ASME IX / API 1104"],
    requirements: "ASME IX or API 1104 qualified, 5+ years process piping experience",
  },
  {
    title: "Electrical Engineer — HV/LV",
    department: "Engineering",
    location: "Kuwait",
    type: "Contract",
    duration: "12 months",
    disciplines: ["HV switchgear", "LV distribution", "Protection relay", "Cable sizing"],
    requirements: "8+ years industrial electrical, HV up to 33kV experience",
  },
  {
    title: "Site Supervisor — Mechanical",
    department: "Supervision",
    location: "Qatar / GCC",
    type: "Contract",
    duration: "6–12 months",
    disciplines: ["Field supervision", "Sub-contractor management", "Daily reporting", "PTW"],
    requirements: "10+ years mechanical site supervision in O&G or petrochemical",
  },
  {
    title: "Pipe Fitters — Process Piping",
    department: "Technical Trades",
    location: "Kuwait",
    type: "Contract",
    duration: "3–6 months",
    disciplines: ["CS/SS piping", "Hydro-testing", "Alignment", "Flange management"],
    requirements: "5+ years process piping in refinery or petrochemical environment",
  },
  {
    title: "Procurement Specialist",
    department: "Procurement",
    location: "Doha, Qatar",
    type: "Full-time",
    duration: "Permanent",
    disciplines: ["Vendor management", "Material sourcing", "Logistics", "Documentation"],
    requirements: "5+ years industrial procurement, GCC market knowledge",
  },
];

const perks = [
  {
    icon: Globe,
    title: "GCC Deployment",
    desc: "Work on major projects across Kuwait, Qatar, Saudi Arabia, UAE, Bahrain and Oman.",
  },
  {
    icon: Award,
    title: "Competitive Compensation",
    desc: "Market-competitive salaries, per diem, accommodation and transport where applicable.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    desc: "Access to senior roles, increased responsibility and long-term placement opportunities.",
  },
  {
    icon: Shield,
    title: "Compliance Support",
    desc: "Full visa, CODO, medical and mobilisation support managed by Nexora.",
  },
  {
    icon: HardHat,
    title: "Safety Culture",
    desc: "Work in environments where safety is non-negotiable and every person matters.",
  },
  {
    icon: Users,
    title: "Strong Network",
    desc: "Join a community of experienced GCC energy professionals.",
  },
];

function CareersPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Careers"
        title={
          <>
            Join Nexora. <span className="text-gradient-energy">Build something real.</span>
          </>
        }
        description="Nexora deploys experienced technical professionals to Qatar and the GCC's most demanding energy, LNG, petrochemical and industrial projects. If you have the credentials and the drive, we want to hear from you."
      />

      {/* Why join */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-energy-soft bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-primary backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-energy" />
              Why Nexora
            </span>
            <h2 className="mt-5 text-3xl font-extrabold md:text-4xl">
              What you get when you <span className="text-gradient-energy">work with Nexora.</span>
            </h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {perks.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05}>
                <div className="group flex gap-4 rounded-2xl border border-border bg-white p-5 shadow-sm transition hover:shadow-elevated hover:-translate-y-0.5">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/8 text-primary ring-1 ring-primary/10 transition group-hover:bg-energy/14 group-hover:ring-energy/20">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-display text-sm font-bold">{p.title}</div>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="border-y border-border bg-surface/60 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal className="mb-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-energy-soft bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-primary backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-energy" />
              Open Positions
            </span>
            <h2 className="mt-5 text-3xl font-extrabold md:text-4xl">Current vacancies.</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              All positions are subject to project availability. Additional roles are added
              regularly — submit your CV if you don&apos;t see your discipline listed.
            </p>
          </Reveal>

          <div className="space-y-4">
            {openRoles.map((role, i) => (
              <Reveal key={role.title} delay={i * 0.03}>
                <motion.article
                  whileHover={{ y: -2 }}
                  className="group rounded-2xl border border-border bg-white p-5 shadow-sm transition hover:border-energy-soft hover:shadow-elevated"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/8 text-primary ring-1 ring-primary/10 transition group-hover:bg-energy/14">
                        <Briefcase className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-base font-bold transition group-hover:text-primary">
                          {role.title}
                        </h3>
                        <div className="mt-1.5 flex flex-wrap gap-3 text-xs font-semibold text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Building2 className="h-3 w-3" /> {role.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" /> {role.location}
                          </span>
                          <span className="rounded-full border border-border px-2 py-0.5 text-[10px]">
                            {role.type}
                          </span>
                          <span className="text-primary">{role.duration}</span>
                        </div>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {role.disciplines.map((d) => (
                            <span
                              key={d}
                              className="rounded-full bg-surface px-2.5 py-0.5 text-[10px] font-semibold text-muted-foreground border border-border"
                            >
                              {d}
                            </span>
                          ))}
                        </div>
                        <p className="mt-2 text-xs text-muted-foreground">{role.requirements}</p>
                      </div>
                    </div>
                    <a
                      href="#apply"
                      className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-bold text-primary-foreground transition hover:bg-primary/90 sm:self-start btn-glow-blue"
                    >
                      Apply <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open application */}
      <section id="apply" className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal className="mb-10 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-energy-soft bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-primary backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-energy" />
              Apply Now
            </span>
            <h2 className="mt-5 text-3xl font-extrabold md:text-4xl">
              Don&apos;t see your role?{" "}
              <span className="text-gradient-energy">Submit your CV.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
              We regularly place professionals across 50+ technical disciplines. Send your profile
              and we&apos;ll match you to suitable upcoming opportunities.
            </p>
          </Reveal>

          <Reveal>
            <form className="space-y-4 rounded-4xl border border-border bg-white p-6 shadow-sm md:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <FormField label="Full Name *" placeholder="Your full name" />
                <FormField label="Email Address *" type="email" placeholder="name@email.com" />
                <FormField label="Phone / WhatsApp *" placeholder="+974 or international..." />
                <FormField label="Current Location" placeholder="City, Country" />
                <FormField
                  label="Area of Expertise *"
                  placeholder="e.g. Mechanical Engineering, Welding"
                />
                <FormField label="Years of Experience" placeholder="e.g. 8 years" />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                  Industry Experience
                </label>
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    "Oil & Gas",
                    "LNG",
                    "Petrochemical",
                    "Power",
                    "Infrastructure",
                    "Marine",
                    "EPC",
                  ].map((ind) => (
                    <button
                      key={ind}
                      type="button"
                      className="rounded-full border border-border px-4 py-1.5 text-xs font-bold text-muted-foreground transition hover:border-primary/40 hover:text-primary"
                    >
                      {ind}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                  Cover Note
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your experience, certifications, project history and availability..."
                  className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground/60 focus:border-energy-soft focus:ring-4 focus:ring-energy/10"
                />
              </div>

              <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-border bg-surface/60 px-4 py-4 text-sm text-muted-foreground transition hover:border-energy-soft">
                <Upload className="h-5 w-5 shrink-0 text-primary" />
                <span>
                  <span className="font-bold text-foreground">Upload your CV</span> — PDF or DOC
                  (max 5 MB)
                </span>
                <input type="file" accept=".pdf,.doc,.docx" className="hidden" />
              </label>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Available for immediate deployment",
                  "Hold valid Qatar/GCC residency",
                  "OPITO / safety certifications",
                  "Available for GCC-wide projects",
                ].map((item) => (
                  <label
                    key={item}
                    className="flex cursor-pointer items-center gap-2.5 text-xs font-semibold"
                  >
                    <input type="checkbox" className="rounded border-border text-primary" />
                    {item}
                  </label>
                ))}
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-bold text-primary-foreground transition hover:bg-primary/90 btn-glow-blue"
              >
                Submit Application <Send className="h-4 w-4" />
              </button>

              <p className="text-center text-xs text-muted-foreground">
                All applications are reviewed by our recruitment team within 3 business days.
              </p>
            </form>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-border bg-surface/60 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal className="mb-10 text-center">
            <h2 className="text-2xl font-extrabold">Our application process.</h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", icon: Send, t: "Submit CV", d: "Apply via this form or email directly." },
              {
                n: "02",
                icon: Users,
                t: "Initial Review",
                d: "Our team reviews your profile and experience.",
              },
              {
                n: "03",
                icon: CheckCircle2,
                t: "Shortlisting",
                d: "Matched to active or upcoming opportunities.",
              },
              {
                n: "04",
                icon: HardHat,
                t: "Deployment",
                d: "Compliance, visa and mobilisation coordinated.",
              },
            ].map((step, i) => (
              <Reveal key={step.n} delay={i * 0.07}>
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-4 grid h-14 w-14 place-items-center rounded-full border-2 border-border bg-white shadow-sm">
                    <step.icon className="h-5 w-5 text-primary" />
                    <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-primary text-[9px] font-bold text-white">
                      {step.n}
                    </span>
                  </div>
                  <div className="font-display text-sm font-bold">{step.t}</div>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{step.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

function FormField({
  label,
  type = "text",
  placeholder,
}: {
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground/60 focus:border-energy-soft focus:ring-4 focus:ring-energy/10"
      />
    </div>
  );
}
