import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  const coverage = ["Qatar", "Kuwait", "Saudi Arabia", "UAE", "Bahrain", "Oman"];
  const proofPoints = [
    "Technical Manpower",
    "Industrial Services",
    "Procurement Support",
    "GCC Coverage",
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-navy">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-energy/70 to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,180,170,0.1),transparent_34%)]" />

      <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-16 lg:px-8">
        <div className="mb-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {proofPoints.map((point) => (
            <div
              key={point}
              className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold text-white"
            >
              <CheckCircle2 className="h-4 w-4 shrink-0 text-energy" />
              <span>{point}</span>
            </div>
          ))}
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.72fr_0.72fr_0.95fr]">
          <div className="max-w-md">
            <Logo size={58} variant="light" />
            <p className="mt-6 text-sm leading-7 text-white/68">
              Qatar-based technical manpower and industrial solutions company supporting energy,
              LNG, petrochemical, infrastructure and EPC projects across the GCC.
            </p>
            <div className="mt-6">
              <div className="text-xs font-extrabold uppercase tracking-[0.16em] text-energy">
                GCC Coverage
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {coverage.map((country) => (
                  <span
                    key={country}
                    className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs font-bold text-white/72"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-[0.18em] text-energy">
              Solutions
            </h4>
            <ul className="mt-5 space-y-3">
              {[
                { to: "/manpower", label: "Technical Manpower" },
                { to: "/industrial-services", label: "Industrial Services" },
                { to: "/products", label: "Products & Procurement" },
                { to: "/resources", label: "Resources" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm font-semibold text-white/68 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-[0.18em] text-energy">
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
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm font-semibold text-white/68 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-[0.18em] text-energy">
              Contact
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-white/68">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-energy" />
                <span>Doha, Qatar</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-energy" />
                <a href="tel:+97400000000" className="font-semibold transition hover:text-white">
                  +974 0000 0000
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-energy" />
                <a
                  href="mailto:info@nexora-energy.com"
                  className="font-semibold transition hover:text-white"
                >
                  info@nexora-energy.com
                </a>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex min-h-11 items-center gap-2 rounded-md bg-energy px-5 py-2.5 text-sm font-extrabold text-navy transition hover:bg-white"
              >
                Request Proposal
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://www.linkedin.com/company/nexora-energy-solutions"
                aria-label="LinkedIn"
                className="grid h-11 w-11 place-items-center rounded-md border border-white/15 text-white/62 transition hover:border-energy/50 hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/97433110000"
                aria-label="WhatsApp"
                className="grid h-11 w-11 place-items-center rounded-md border border-white/15 text-white/62 transition hover:border-energy/50 hover:text-white"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-white/10 pt-7 text-xs leading-5 text-white/50 md:flex-row">
          <p>Copyright {new Date().getFullYear()} Nexora Energy Solutions. All rights reserved.</p>
          <p>Technical Manpower & Industrial Solutions - Qatar & GCC</p>
        </div>
      </div>
    </footer>
  );
}
