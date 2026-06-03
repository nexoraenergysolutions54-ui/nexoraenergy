import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Nexora Energy Solutions" },
      { name: "description", content: "Get in touch with Nexora Energy Solutions in Ahmadi, Kuwait. Contact form, phone, email and WhatsApp." },
      { property: "og:title", content: "Contact Nexora" },
      { property: "og:description", content: "Headquartered in Ahmadi, Kuwait. Contact our team." },
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
        eyebrow="Get In Touch"
        title={<>Let's start a <span className="text-gradient-gold">conversation</span></>}
        description="Our team responds within one business day. Reach out for project enquiries, partnerships or media requests."
      />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-5 gap-8">
          <Reveal className="lg:col-span-2">
            <div className="space-y-4">
              {[
                { i: MapPin, t: "Headquarters", d: "Ahmadi, Kuwait" },
                { i: Phone, t: "Phone", d: "+965 0000 0000" },
                { i: Mail, t: "Email", d: "info@nexora-energy.com" },
                { i: MessageCircle, t: "WhatsApp", d: "Chat With Nexora" },
                { i: Clock, t: "Business Hours", d: "Sun – Thu · 8:00 – 17:00" },
              ].map((c, i) => (
                <div key={i} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
                  <div className="grid place-items-center w-11 h-11 rounded-xl bg-primary/10 border border-gold-soft text-gold shrink-0">
                    <c.i className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.t}</div>
                    <div className="mt-1 font-display font-bold">{c.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <form className="rounded-3xl border border-border bg-card p-8 grid sm:grid-cols-2 gap-5">
              <Field label="Full Name" />
              <Field label="Company" />
              <Field label="Email" type="email" />
              <Field label="Phone" />
              <div className="sm:col-span-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Subject</label>
                <input className="mt-2 w-full rounded-xl bg-background border border-border px-4 py-3 text-sm outline-none focus:border-gold-soft transition" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
                <textarea rows={5} className="mt-2 w-full rounded-xl bg-background border border-border px-4 py-3 text-sm outline-none focus:border-gold-soft transition" />
              </div>
              <button className="sm:col-span-2 inline-flex justify-center items-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground btn-glow-red">
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-3xl overflow-hidden border border-border h-[420px]">
            <iframe
              title="Nexora Ahmadi Office"
              src="https://maps.google.com/maps?q=Ahmadi,%20Kuwait&t=&z=12&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full grayscale contrast-125 opacity-90"
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
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input type={type} className="mt-2 w-full rounded-xl bg-background border border-border px-4 py-3 text-sm outline-none focus:border-gold-soft transition" />
    </div>
  );
}
