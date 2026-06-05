import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
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
          "Contact Nexora Energy Solutions in Ahmadi, Kuwait for engineering, procurement, maintenance and energy-sector operational support.",
      },
      { property: "og:title", content: "Contact Nexora Energy Solutions" },
      {
        property: "og:description",
        content: "Headquartered in Ahmadi, Kuwait. Contact the Nexora team.",
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
            Start a <span className="text-gradient-energy">partner conversation.</span>
          </>
        }
        description="Reach out for project enquiries, procurement support, maintenance scopes, partnerships or media requests."
      />

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="space-y-4">
              {[
                { icon: MapPin, title: "Headquarters", text: "Ahmadi, Kuwait" },
                { icon: Phone, title: "Phone", text: "+965 0000 0000" },
                { icon: Mail, title: "Email", text: "info@nexora-energy.com" },
                { icon: MessageCircle, title: "WhatsApp", text: "Chat with Nexora" },
                { icon: Clock, title: "Business Hours", text: "Sun - Thu, 8:00 - 17:00" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5"
                >
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-energy/14 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                      {item.title}
                    </div>
                    <div className="mt-1 font-display font-bold">{item.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <form className="grid gap-5 rounded-[2rem] border border-border bg-white p-6 shadow-sm sm:grid-cols-2 md:p-8">
              <Field label="Full Name" />
              <Field label="Company" />
              <Field label="Email" type="email" />
              <Field label="Phone" />
              <div className="sm:col-span-2">
                <label className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                  Subject
                </label>
                <input className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-energy-soft focus:ring-4 focus:ring-energy/10" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-energy-soft focus:ring-4 focus:ring-energy/10"
                />
              </div>
              <button className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-bold text-primary-foreground btn-glow-blue">
                Send Message <Send className="h-4 w-4" />
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-[420px] overflow-hidden rounded-[2rem] border border-border bg-white">
            <iframe
              title="Nexora Ahmadi Office"
              src="https://maps.google.com/maps?q=Ahmadi,%20Kuwait&t=&z=12&ie=UTF8&iwloc=&output=embed"
              className="h-full w-full grayscale-[0.35]"
              loading="lazy"
            />
          </div>
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
