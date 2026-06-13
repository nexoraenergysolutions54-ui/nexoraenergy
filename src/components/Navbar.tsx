import { Link, useRouterState } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronRight,
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Phone,
  Twitter,
  X,
} from "lucide-react";
import { Logo } from "@/components/Logo";

const navLinks = [
  { to: "/" as const, label: "Home" },
  { to: "/about" as const, label: "About" },
  { to: "/manpower" as const, label: "Technical Manpower", primary: true },
  { to: "/industrial-services" as const, label: "Industrial Services" },
  { to: "/products" as const, label: "Products" },
  { to: "/industries" as const, label: "Industries" },
  { to: "/resources" as const, label: "Resources" },
  { to: "/partners" as const, label: "Partners" },
  { to: "/contact" as const, label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const lightHeader = scrolled || mobileOpen;
  const utilityText = lightHeader ? "text-foreground/68" : "text-white/72";
  const utilityHover = lightHeader ? "hover:text-primary" : "hover:text-white";
  const utilityDivider = lightHeader ? "bg-border" : "bg-white/14";
  const utilityIcon = lightHeader ? "text-primary" : "text-energy";

  return (
    <>
      <motion.header
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          lightHeader
            ? "border-border bg-white/94 shadow-[0_18px_50px_-42px_rgba(7,28,44,0.52)] backdrop-blur-xl"
            : "border-white/10 bg-[rgba(2,18,34,0.66)] backdrop-blur-md"
        }`}
      >
        {/* Top contact bar - desktop only */}
        <div
          className={`hidden border-b lg:block ${
            lightHeader ? "border-border/60 bg-white/90" : "border-white/10 bg-navy/45"
          }`}
        >
          <div className="mx-auto flex h-9 max-w-[1400px] items-center justify-between px-5 text-xs lg:px-8">
            <div className="flex items-center">
              <span className={`flex items-center gap-2 font-semibold ${utilityText}`}>
                <MapPin className={`h-3.5 w-3.5 shrink-0 ${utilityIcon}`} />
                <span>Doha, Qatar</span>
              </span>
              <span className={`mx-4 h-3 w-px ${utilityDivider}`} aria-hidden="true" />
              <a
                href="tel:+97400000000"
                className={`flex items-center gap-2 font-semibold transition-colors ${utilityText} ${utilityHover}`}
              >
                <Phone className={`h-3.5 w-3.5 shrink-0 ${utilityIcon}`} />
                <span>+974 0000 0000</span>
              </a>
              <span className={`mx-4 h-3 w-px ${utilityDivider}`} aria-hidden="true" />
              <a
                href="mailto:info@nexora-energy.com"
                className={`flex items-center gap-2 font-semibold transition-colors ${utilityText} ${utilityHover}`}
              >
                <Mail className={`h-3.5 w-3.5 shrink-0 ${utilityIcon}`} />
                <span>info@nexora-energy.com</span>
              </a>
            </div>
            <div className="flex items-center gap-1.5">
              {(
                [
                  { Icon: Linkedin, href: "#", label: "LinkedIn" },
                  { Icon: Twitter, href: "#", label: "Twitter" },
                  { Icon: Facebook, href: "#", label: "Facebook" },
                ] as const
              ).map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`grid h-7 w-7 place-items-center rounded-md transition-colors ${
                    lightHeader
                      ? "text-foreground/55 hover:bg-primary/7 hover:text-primary"
                      : "text-white/58 hover:bg-white/8 hover:text-energy"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto grid max-w-[1400px] grid-cols-[auto_1fr_auto] items-center gap-5 px-5 py-3 lg:px-8">
          <Link
            to="/"
            aria-label="Nexora Energy Solutions - Home"
            className="relative block h-12 w-[172px] overflow-visible rounded-md transition duration-300 hover:opacity-90"
          >
            <Logo
              size={70}
              variant={lightHeader ? "dark" : "light"}
              className="absolute left-0 top-1/2 -translate-y-1/2"
            />
          </Link>

          <nav
            className="hidden items-center justify-center [@media(min-width:1280px)]:flex"
            aria-label="Primary navigation"
          >
            {navLinks.map((link) => {
              const active =
                link.to === "/" ? location.pathname === "/" : location.pathname === link.to;
              const primary = "primary" in link;

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`group relative whitespace-nowrap px-3 py-3 text-sm transition ${
                    active
                      ? lightHeader
                        ? "font-extrabold text-primary"
                        : "font-extrabold text-white"
                      : primary
                        ? lightHeader
                          ? "font-extrabold text-foreground hover:text-primary"
                          : "font-extrabold text-white hover:text-energy"
                        : lightHeader
                          ? "font-bold text-foreground/72 hover:text-foreground"
                          : "font-bold text-white/76 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute inset-x-3 bottom-1 h-0.5 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
                      lightHeader ? "bg-primary/45" : "bg-energy/55"
                    }`}
                  />
                  {active && (
                    <motion.span
                      layoutId="nav-active-line"
                      className={`absolute inset-x-3 bottom-1 h-0.5 ${
                        lightHeader ? "bg-primary" : "bg-energy"
                      }`}
                      transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center justify-end gap-3">
            <Link
              to="/manpower"
              className={`hidden min-h-11 items-center gap-2 rounded-md px-5 py-2.5 text-sm font-extrabold transition sm:inline-flex ${
                lightHeader
                  ? "bg-primary text-white hover:bg-navy"
                  : "bg-energy text-navy hover:bg-white"
              }`}
            >
              Request Manpower
              <ArrowRight className="h-4 w-4" />
            </Link>
            <button
              onClick={() => setMobileOpen((value) => !value)}
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
              className={`grid h-11 w-11 place-items-center rounded-md border transition [@media(min-width:1280px)]:hidden ${
                lightHeader
                  ? "border-border text-foreground hover:border-primary/40 hover:text-primary"
                  : "border-white/35 text-white hover:border-white hover:bg-white/10"
              }`}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      <div
        className={`fixed inset-0 z-40 transition [@media(min-width:1280px)]:hidden ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div
          className={`absolute inset-0 bg-navy/55 transition-opacity ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />

        <div
          className={`absolute inset-x-0 top-0 max-h-[94vh] overflow-y-auto border-b border-border bg-white shadow-2xl transition-transform duration-300 ${
            mobileOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="mx-auto max-w-[1400px] px-5 pb-8 pt-24 lg:pt-26 lg:px-8">
            <Link
              to="/manpower"
              className="mb-4 flex min-h-12 items-center justify-between rounded-md bg-primary px-5 py-3 text-sm font-extrabold text-white transition hover:bg-navy"
            >
              <span>Request Manpower</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <nav className="divide-y divide-border" aria-label="Mobile navigation">
              {navLinks.map((link) => {
                const active =
                  link.to === "/" ? location.pathname === "/" : location.pathname === link.to;
                const primary = "primary" in link;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`flex items-center justify-between py-4 text-sm transition-colors ${
                      active
                        ? "font-extrabold text-primary"
                        : primary
                          ? "font-extrabold text-foreground hover:text-primary"
                          : "font-bold text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight
                      className={`h-4 w-4 shrink-0 ${
                        active ? "text-primary" : "text-muted-foreground/45"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            <div className="mt-6 rounded-md border border-border bg-surface p-4">
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                Qatar Headquarters
              </div>
              <div className="mt-2 text-sm font-bold text-foreground">Doha, Qatar</div>
              <a
                href="tel:+97400000000"
                className="mt-1 block text-sm font-bold text-primary hover:text-navy"
              >
                +974 0000 0000
              </a>
              <a
                href="mailto:info@nexora-energy.com"
                className="mt-0.5 block text-xs text-muted-foreground hover:text-foreground"
              >
                info@nexora-energy.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
