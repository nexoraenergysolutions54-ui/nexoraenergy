import { Link } from "@tanstack/react-router";
import { ArrowRight, Facebook, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative mt-28 border-t border-border bg-white">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-energy/50 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-20">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <Logo size={44} />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Kuwait-based Technical Manpower &amp; Industrial Solutions Partner delivering qualified
              workforce, industrial services and procurement support across the GCC.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Kuwait", "Qatar", "Saudi Arabia", "UAE", "Bahrain", "Oman"].map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-border px-3 py-1 text-xs font-semibold text-muted-foreground"
                >
                  {c}
                </span>
              ))}
            </div>
            <form className="mt-8 flex max-w-sm overflow-hidden rounded-full border border-border bg-background">
              <input
                type="email"
                placeholder="Corporate email"
                className="flex-1 bg-transparent px-5 py-3 text-sm outline-none placeholder:text-muted-foreground"
              />
              <button
                type="submit"
                className="bg-primary px-5 text-primary-foreground transition hover:bg-primary/90"
                aria-label="Subscribe"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
              Solutions
            </h4>
            <ul className="mt-5 space-y-3">
              {[
                { to: "/manpower", label: "Technical Manpower" },
                { to: "/industrial-services", label: "Industrial Services" },
                { to: "/products", label: "Products & Procurement" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
              Company
            </h4>
            <ul className="mt-5 space-y-3">
              {[
                { to: "/about", label: "About Nexora" },
                { to: "/industries", label: "Industries" },
                { to: "/projects", label: "Projects" },
                { to: "/partners", label: "Partners" },
                { to: "/careers", label: "Careers" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.22em] text-primary">
              Contact
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-energy" />
                <span>Ahmadi, Kuwait</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-energy" />
                <a href="tel:+96500000000" className="transition hover:text-primary">
                  +965 0000 0000
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-energy" />
                <a href="mailto:info@nexora-energy.com" className="transition hover:text-primary">
                  info@nexora-energy.com
                </a>
              </li>
            </ul>
            <div className="mt-6 flex gap-2">
              {[
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
                { Icon: Twitter, href: "#", label: "Twitter" },
                { Icon: Facebook, href: "#", label: "Facebook" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition hover:border-energy-soft hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Nexora Energy Solutions. All rights reserved.</p>
          <p className="text-center">
            Technical Manpower &amp; Industrial Solutions — Kuwait &amp; GCC
          </p>
        </div>
      </div>
    </footer>
  );
}
