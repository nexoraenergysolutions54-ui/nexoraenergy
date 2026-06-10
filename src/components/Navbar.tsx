import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, HardHat, Menu, Package, Wrench, X } from "lucide-react";
import { Logo } from "./Logo";

const solutionLinks = [
  {
    to: "/manpower",
    icon: HardHat,
    label: "Technical Manpower",
    desc: "Engineers, technicians & skilled workforce for GCC projects",
  },
  {
    to: "/industrial-services",
    icon: Wrench,
    label: "Industrial Services",
    desc: "Shutdown, turnaround, maintenance & site support",
  },
  {
    to: "/products",
    icon: Package,
    label: "Products & Procurement",
    desc: "Valves, instrumentation & industrial supply chain",
  },
] as const;

const mainLinks = [
  { to: "/about", label: "About" },
  { to: "/industries", label: "Industries" },
  { to: "/projects", label: "Projects" },
  { to: "/partners", label: "Partners" },
  { to: "/careers", label: "Careers" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const solutionPaths = ["/manpower", "/industrial-services", "/products"];
  const isSolutionsActive = solutionPaths.includes(location.pathname);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6">
        <Link to="/" className="shrink-0">
          <Logo size={46} className="origin-left scale-[1.32]" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-0.5 lg:flex">
          {/* Solutions dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onMouseEnter={() => setDropdownOpen(true)}
              onClick={() => setDropdownOpen((v) => !v)}
              className={`relative inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                isSolutionsActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Solutions
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
              />
              {isSolutionsActive && (
                <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-linear-to-r from-primary to-energy" />
              )}
            </button>

            {dropdownOpen && (
              <div
                onMouseLeave={() => setDropdownOpen(false)}
                className="absolute left-1/2 top-full mt-2 w-80 -translate-x-1/2 overflow-hidden rounded-2xl border border-border bg-white p-2 shadow-elevated"
              >
                <div className="mb-2 px-3 pt-1 text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
                  Our Capabilities
                </div>
                {solutionLinks.map((link) => {
                  const active = location.pathname === link.to;
                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      className={`group flex items-start gap-3 rounded-xl p-3 transition ${
                        active ? "bg-surface" : "hover:bg-surface"
                      }`}
                    >
                      <div
                        className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ring-1 transition ${
                          active
                            ? "bg-energy/14 text-primary ring-energy/20"
                            : "bg-primary/8 text-primary ring-primary/10 group-hover:bg-energy/14 group-hover:ring-energy/20"
                        }`}
                      >
                        <link.icon className="h-4.5 w-4.5" />
                      </div>
                      <div className="min-w-0">
                        <div className={`text-sm font-bold ${active ? "text-primary" : "text-foreground"}`}>
                          {link.label}
                        </div>
                        <div className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                          {link.desc}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {mainLinks.map((l) => {
            const active = location.pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative px-4 py-2 text-sm font-semibold transition-colors ${
                  active ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
                {active && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-linear-to-r from-primary to-energy" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/manpower"
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all btn-glow-blue hover:bg-primary/90 sm:inline-flex"
          >
            Request Manpower <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground transition hover:border-energy-soft lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="mx-4 mt-3 overflow-hidden rounded-2xl glass p-4 lg:hidden">
          <div className="flex flex-col">
            <div className="mb-1 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
              Solutions
            </div>
            {solutionLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="flex items-center gap-3 border-b border-border px-3 py-3 text-sm font-semibold text-muted-foreground transition hover:text-primary"
              >
                <l.icon className="h-4 w-4 shrink-0 text-primary" />
                {l.label}
              </Link>
            ))}
            <div className="mb-1 mt-3 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
              Company
            </div>
            {mainLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="border-b border-border px-3 py-3 text-sm font-semibold text-muted-foreground transition hover:text-primary last:border-0"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              Contact Us <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
