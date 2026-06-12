import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Clock,
  HardHat,
  Mail,
  MapPin,
  Package,
  Phone,
  Send,
  Wrench,
} from "lucide-react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Nexora Energy Solutions" },
      {
        name: "description",
        content:
          "Contact Nexora Energy Solutions in Doha, Qatar for technical manpower, industrial services and procurement enquiries across the GCC.",
      },
      { property: "og:title", content: "Contact Nexora Energy Solutions" },
      {
        property: "og:description",
        content:
          "Qatar headquarters. Contact Nexora for manpower, industrial services and procurement support.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Start a <span className="text-gradient-energy">project conversation.</span>
          </>
        }
        description="Whether you need technical manpower, industrial services, procurement support or want to discuss a partnership, our team is ready to help."
      />

      {/* Quick links */}
      <section className="border-b border-border bg-surface/60 py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              {
                icon: HardHat,
                label: "Request Manpower",
                to: "/manpower",
                desc: "Submit a workforce requirement",
              },
              {
                icon: Wrench,
                label: "Industrial Services",
                to: "/industrial-services",
                desc: "Discuss a service scope",
              },
              {
                icon: Package,
                label: "Products & Supply",
                to: "/products",
                desc: "Submit a supply enquiry",
              },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-white p-4 shadow-sm transition hover:border-energy-soft hover:shadow-elevated hover:-translate-y-0.5"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/8 text-primary ring-1 ring-primary/10 transition group-hover:bg-energy/14 group-hover:ring-energy/20">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display text-sm font-bold transition group-hover:text-primary">
                    {item.label}
                  </div>
                  <div className="text-xs text-muted-foreground">{item.desc}</div>
                </div>
                <ArrowUpRight className="ml-auto h-4 w-4 text-primary opacity-0 transition group-hover:opacity-100" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Main contact section */}
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-5">
          {/* Contact info */}
          <Reveal className="lg:col-span-2">
            <div className="space-y-4">
              <div className="font-display text-xl font-bold">Qatar Headquarters</div>

              {[
                {
                  icon: MapPin,
                  title: "Address",
                  text: "Doha, Qatar",
                  sub: "GCC energy project coordination",
                },
                { icon: Phone, title: "Phone", text: "+974 0000 0000", sub: "Sun-Thu, 8:00-17:00" },
                {
                  icon: Mail,
                  title: "Email",
                  text: "info@nexora-energy.com",
                  sub: "General enquiries",
                },
                {
                  icon: Clock,
                  title: "Business Hours",
                  text: "Sunday - Thursday",
                  sub: "8:00 AM - 5:00 PM (Qatar time)",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5 shadow-sm"
                >
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-energy/12 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                      {item.title}
                    </div>
                    <div className="mt-1 font-display text-sm font-bold">{item.text}</div>
                    <div className="mt-0.5 text-xs text-muted-foreground">{item.sub}</div>
                  </div>
                </div>
              ))}

              {/* WhatsApp */}
              <a
                href="https://wa.me/97400000000?text=Hello%20Nexora%20Energy%20Solutions%2C%20I%20would%20like%20to%20discuss%20a%20project%20requirement."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-[#25D366]/30 bg-[#25D366]/5 p-5 shadow-sm transition hover:bg-[#25D366]/10 hover:border-[#25D366]/50"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#25D366] text-white">
                  <svg viewBox="0 0 16 16" className="h-6 w-6 fill-current" aria-hidden="true">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326ZM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592Zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.397 2.133 3.383 2.991.473.205.842.327 1.13.418.475.152.904.129 1.246.08.38-.058 1.17-.48 1.337-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232Z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.14em] text-[#25D366]">
                    WhatsApp
                  </div>
                  <div className="mt-1 font-display text-sm font-bold">Chat with Nexora</div>
                  <div className="mt-0.5 text-xs text-muted-foreground">
                    Quick response during business hours
                  </div>
                </div>
                <ArrowUpRight className="ml-auto h-4 w-4 text-[#25D366]" />
              </a>

              {/* Regional offices note */}
              <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
                <div className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                  Regional Coverage
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {["Qatar", "Kuwait", "Saudi Arabia", "UAE", "Bahrain", "Oman"].map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-border bg-surface px-2.5 py-1 text-xs font-semibold text-foreground"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Contact form */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <form className="space-y-5 rounded-4xl border border-border bg-white p-6 shadow-sm md:p-8">
              <div className="font-display text-xl font-bold">Send a Message</div>

              <div className="grid gap-4 sm:grid-cols-2">
                <FormField label="Full Name *" placeholder="Your full name" />
                <FormField label="Company *" placeholder="Company or project name" />
                <FormField label="Designation" placeholder="e.g. Project Manager" />
                <FormField label="Email Address *" type="email" placeholder="name@company.com" />
                <FormField label="Phone" placeholder="+974 or international..." />
                <div>
                  <label className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    Country
                  </label>
                  <select className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-energy-soft focus:ring-4 focus:ring-energy/10">
                    {["Qatar", "Kuwait", "Saudi Arabia", "UAE", "Bahrain", "Oman", "Other"].map(
                      (c) => (
                        <option key={c}>{c}</option>
                      ),
                    )}
                  </select>
                </div>
              </div>

              {/* Service area */}
              <div>
                <label className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                  Area of Enquiry
                </label>
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    "Technical Manpower",
                    "Industrial Services",
                    "Products & Procurement",
                    "Partnership",
                    "Careers",
                    "Other",
                  ].map((area) => (
                    <button
                      key={area}
                      type="button"
                      className="rounded-full border border-border px-4 py-2 text-xs font-bold text-muted-foreground transition hover:border-primary/40 hover:text-primary"
                    >
                      {area}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                  Message *
                </label>
                <textarea
                  rows={5}
                  placeholder="Describe your project requirement, scope, timeline or question..."
                  className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground/60 focus:border-energy-soft focus:ring-4 focus:ring-energy/10"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-bold text-primary-foreground transition hover:bg-primary/90 btn-glow-blue"
              >
                Send Message <Send className="h-4 w-4" />
              </button>

              <p className="text-center text-xs text-muted-foreground">
                We respond to all enquiries within one business day. Enquiries are treated
                confidentially.
              </p>
            </form>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="overflow-hidden rounded-4xl border border-border bg-white shadow-sm">
              <div className="border-b border-border px-6 py-4">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-energy" />
                  <span className="text-sm font-bold">Nexora Energy Solutions - Doha, Qatar</span>
                </div>
              </div>
              <iframe
                title="Nexora Energy Solutions - Doha, Qatar"
                src="https://maps.google.com/maps?q=Doha,%20Qatar&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="h-105 w-full"
                loading="lazy"
              />
            </div>
          </Reveal>
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
