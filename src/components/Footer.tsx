import { Link } from "@tanstack/react-router";
import { ArrowRight, Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative mt-28 border-t border-border bg-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 via-energy/50 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo size={44} />
            <p className="mt-6 max-w-sm text-sm text-muted-foreground leading-relaxed">
              Kuwait-based energy and industrial services company delivering integrated engineering,
              procurement, maintenance and operational support for critical assets.
            </p>
            <form className="mt-8 flex max-w-sm overflow-hidden rounded-full border border-border bg-background">
              <input
                type="email"
                placeholder="Corporate email"
                className="flex-1 bg-transparent px-5 py-3 text-sm outline-none placeholder:text-muted-foreground"
              />
              <button
                className="bg-primary px-5 text-primary-foreground hover:bg-primary/90 transition"
                aria-label="Subscribe"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          <FooterCol
            title="Company"
            links={[
              { to: "/about", label: "About" },
              { to: "/projects", label: "Projects" },
              { to: "/hse", label: "HSE" },
              { to: "/careers", label: "Careers" },
              { to: "/news", label: "News" },
            ]}
          />

          <FooterCol
            title="Capabilities"
            links={[
              { to: "/services", label: "Engineering" },
              { to: "/services", label: "Industrial Services" },
              { to: "/services", label: "Maintenance" },
              { to: "/services", label: "Procurement" },
              { to: "/services", label: "Operations Support" },
            ]}
          />

          <div>
            <h4 className="text-xs uppercase tracking-[0.22em] text-primary font-bold">Contact</h4>
            <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-energy shrink-0" /> Ahmadi, Kuwait
              </li>
              <li className="flex gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-energy shrink-0" /> +965 0000 0000
              </li>
              <li className="flex gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-energy shrink-0" /> info@nexora-energy.com
              </li>
            </ul>
            <div className="mt-6 flex gap-2">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid place-items-center w-10 h-10 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-energy-soft transition"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-border text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Nexora Energy Solutions. All rights reserved.</p>
          <p>Engineering tomorrow&apos;s energy infrastructure.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { to: string; label: string }[] }) {
  return (
    <div>
      <h4 className="text-xs uppercase tracking-[0.22em] text-primary font-bold">{title}</h4>
      <ul className="mt-5 space-y-3">
        {links.map((l, i) => (
          <li key={i}>
            <Link
              to={l.to}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
