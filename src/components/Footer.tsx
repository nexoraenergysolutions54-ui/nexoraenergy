import { site } from "@/lib/enterprise-content";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Logo } from "./Logo";

const serviceLinks = [
  { to: "/manpower" as const, label: "Technical Manpower" },
  { to: "/industrial-services" as const, label: "Industrial Services" },
  { to: "/products" as const, label: "Products & Procurement" },
];

const companyLinks = [
  { to: "/about" as const, label: "About Nexora" },
  { to: "/industries" as const, label: "Industries" },
  { to: "/about" as const, hash: "collaborations", label: "Collaborations" },
  { to: "/careers" as const, label: "Careers" },
  { to: "/hse" as const, label: "HSE Standards" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-navy">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-energy/70 to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,180,170,0.1),transparent_34%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.72fr_0.72fr_0.95fr]">
          {/* Brand */}
          <div className="max-w-md sm:col-span-2 lg:col-span-1">
            <Logo size={58} variant="light" />
            <p className="mt-6 text-sm leading-7 text-white/68">
              Qatar-based technical manpower and industrial support for projects across Qatar, Saudi
              Arabia and Kuwait.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.linkedin.com/company/nexora-energy-solutions"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nexora Energy Solutions on LinkedIn (opens in a new tab)"
                className="grid h-11 w-11 place-items-center rounded-md border border-white/15 text-white/62 transition hover:border-energy/50 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-energy"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              </a>
              {site.whatsappUrl && (
                <a
                  href={site.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat with Nexora Energy Solutions on WhatsApp (opens in a new tab)"
                  className="grid h-11 w-11 place-items-center rounded-md border border-white/15 text-white/62 transition hover:border-energy/50 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-energy"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                </a>
              )}
            </div>
          </div>

          {/* Services */}
          <nav aria-label="Footer - Services">
            <h2 className="text-xs font-extrabold uppercase tracking-[0.18em] text-energy">
              Services
            </h2>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm font-semibold text-white/68 transition hover:text-white focus-visible:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-energy"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Footer - Company">
            <h2 className="text-xs font-extrabold uppercase tracking-[0.18em] text-energy">
              Company
            </h2>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    hash={link.hash}
                    className="text-sm font-semibold text-white/68 transition hover:text-white focus-visible:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-energy"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-[0.18em] text-energy">
              Contact
            </h2>
            <ul className="mt-5 space-y-4 text-sm text-white/68">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-energy" aria-hidden="true" />
                <span>Doha, Qatar</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-energy" aria-hidden="true" />
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="text-sm font-semibold transition hover:text-white focus-visible:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-energy"
                >
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-energy" aria-hidden="true" />
                <a
                  href={`mailto:${site.email}`}
                  className="font-semibold transition hover:text-white focus-visible:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-energy"
                >
                  {site.email}
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <Link
                to="/manpower"
                className="inline-flex min-h-11 items-center gap-2 rounded-md bg-energy px-5 py-2.5 text-sm font-extrabold text-navy transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Request Manpower
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-7">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-center text-xs leading-5 text-white/50">
            <p>&copy; {new Date().getFullYear()} Nexora Energy Solutions. All rights reserved.</p>
            <p className="hidden sm:block">
              Qatar-Based Technical Manpower &amp; Industrial Services
            </p>
            <p>
              Developed by{" "}
              <a
                href="https://www.ticodetech.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ticode Technologies (opens in a new tab)"
                className="font-semibold text-white/70 underline decoration-white/25 underline-offset-4 transition hover:text-energy focus-visible:text-energy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-energy"
              >
                Ticode Technologies
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
