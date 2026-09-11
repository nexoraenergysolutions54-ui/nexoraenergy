import { EnquiryForm } from "@/components/EnquiryForm";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Clock, HardHat, Mail, MapPin, Package, Phone, Wrench } from "lucide-react";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/enterprise-content";
import { seoHead } from "@/lib/seo";
import contactHero from "@/assets/optimized/contact-hero-project-conversation.webp";

type EnquiryTypeParam = "manpower" | "industrial-services" | "products" | undefined;

const enquiryTypeBySearch = {
  manpower: "Technical Manpower",
  "industrial-services": "Industrial Services",
  products: "Products & Procurement",
} as const;

export const Route = createFileRoute("/contact")({
  head: () => seoHead("/contact"),
  component: ContactPage,
  validateSearch: (search: Record<string, unknown>): { type?: EnquiryTypeParam } => ({
    type:
      search.type === "manpower" ||
      search.type === "industrial-services" ||
      search.type === "products"
        ? search.type
        : undefined,
  }),
});

const pathways = [
  {
    icon: HardHat,
    label: "Request Manpower",
    desc: "Submit a technical workforce requirement",
    to: "/manpower" as const,
    hash: "request-form",
  },
  {
    icon: Wrench,
    label: "Industrial Services",
    desc: "Discuss an industrial-service requirement",
    to: "/contact" as const,
    search: { type: "industrial-services" as const },
    hash: "enquiry-form",
  },
  {
    icon: Package,
    label: "Products & Procurement",
    desc: "Submit a product or sourcing enquiry",
    to: "/products" as const,
    hash: "enquire",
  },
];

function ContactPage() {
  const { type } = Route.useSearch();
  const defaultEnquiryType = type ? enquiryTypeBySearch[type] : undefined;

  return (
    <Layout>
      {/* 1. Compact hero */}
      <PageHero
        eyebrow="Contact NEXORA"
        title="Let's Discuss Your Requirement"
        description="Contact Nexora regarding technical manpower, industrial services or products and procurement requirements. Our team will review the information provided and respond through the available contact details."
        backgroundImage={contactHero}
        imagePosition="object-center"
        hideTags
        compact
      />

      {/* 2. Enquiry pathways */}
      <section className="border-b border-border bg-surface/60 py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-3 sm:grid-cols-3">
            {pathways.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                {...("search" in item ? { search: item.search } : {})}
                hash={item.hash}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-white p-4 shadow-sm transition hover:border-energy-soft hover:shadow-elevated hover:-translate-y-0.5"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/8 text-primary ring-1 ring-primary/10 transition group-hover:bg-energy/14 group-hover:ring-energy/20">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
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

      {/* 3. Contact information and enquiry form */}
      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-5">
          {/* Contact info */}
          <Reveal className="lg:col-span-2">
            <div className="space-y-4">
              <div className="font-display text-xl font-bold">Qatar Headquarters</div>

              {[
                {
                  icon: MapPin,
                  title: "Location",
                  content: <span>Doha, Qatar</span>,
                  sub: "Headquarters and primary contact location",
                },
                {
                  icon: Phone,
                  title: "Phone / WhatsApp",
                  content: <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>,
                },
                {
                  icon: Mail,
                  title: "Email",
                  content: <a href={`mailto:${site.email}`}>{site.email}</a>,
                  sub: "General enquiries",
                },
                {
                  icon: Clock,
                  title: "Business Hours",
                  content: <span>Sunday-Thursday</span>,
                  sub: "8:00 AM-5:00 PM Qatar time",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5 shadow-sm"
                >
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-energy/12 text-primary">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                      {item.title}
                    </div>
                    <div className="mt-1 font-display text-sm font-bold">{item.content}</div>
                    {item.sub && (
                      <div className="mt-0.5 text-xs text-muted-foreground">{item.sub}</div>
                    )}
                  </div>
                </div>
              ))}

              {/* WhatsApp */}
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Nexora Energy Solutions on WhatsApp (opens in a new tab)"
                className="flex items-center gap-4 rounded-2xl border border-[#25D366]/30 bg-[#25D366]/5 p-5 shadow-sm transition hover:bg-[#25D366]/10 hover:border-[#25D366]/50"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#25D366] text-white">
                  <svg viewBox="0 0 16 16" className="h-6 w-6 fill-current" aria-hidden="true">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326ZM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592Zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.397 2.133 3.383 2.991.473.205.842.327 1.13.418.475.152.904.129 1.246.08.38-.058 1.17-.48 1.337-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232Z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.14em] text-primary">
                    WhatsApp
                  </div>
                  <div className="mt-1 font-display text-sm font-bold">Chat with Nexora</div>
                </div>
                <ArrowUpRight className="ml-auto h-4 w-4 text-[#25D366]" aria-hidden="true" />
              </a>
            </div>
          </Reveal>

          {/* Contact form */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <div id="enquiry-form" className="scroll-mt-24">
              <h2 className="font-display text-xl font-bold">Send an Enquiry</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Provide your contact details and requirement information so the Nexora team can
                review your enquiry.
              </p>
              <div className="mt-6">
                <EnquiryForm
                  key={type ?? "default"}
                  kind="contact"
                  defaultEnquiryType={defaultEnquiryType}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. Location / appointment note */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="rounded-2xl border border-border bg-white p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-energy" aria-hidden="true" />
                <p className="text-sm leading-7 text-muted-foreground">
                  Meetings in Doha are arranged by appointment. Contact the team to confirm the
                  location and timing.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
