import { site } from "@/lib/enterprise-content";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
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
import { cn } from "@/lib/utils";

const solutionsLinks = [
  { to: "/manpower" as const, label: "Technical Manpower" },
  { to: "/industrial-services" as const, label: "Industrial Services" },
  { to: "/products" as const, label: "Products & Procurement" },
];

const industriesLinks = [
  { to: "/industries/oil-and-gas" as const, label: "Oil & Gas" },
  { to: "/industries/lng" as const, label: "LNG" },
  { to: "/industries/petrochemical" as const, label: "Petrochemical" },
  { to: "/industries/infrastructure" as const, label: "Infrastructure" },
  { to: "/industries/manufacturing" as const, label: "Manufacturing" },
  { to: "/industries/epc" as const, label: "EPC" },
];

const trailingLinks = [{ to: "/contact" as const, label: "Contact" }];

function isActive(pathname: string, to: string) {
  return to === "/" ? pathname === "/" : pathname === to || pathname.startsWith(`${to}/`);
}

function NavDropdown({
  label,
  items,
  lightHeader,
  pathname,
  moreLink,
  active,
}: {
  label: string;
  items: { to: string; label: string }[];
  lightHeader: boolean;
  pathname: string;
  moreLink?: { to: string; label: string };
  /** Route-based active state, computed by the caller so it can cover child
   * routes (e.g. /services/*) that aren't in `items` itself. */
  active: boolean;
}) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDocClick(event: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(event) => {
        if (!wrapRef.current?.contains(event.relatedTarget as Node)) {
          setOpen(false);
        }
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setOpen(false);
          (event.currentTarget.querySelector("button") as HTMLButtonElement | null)?.focus();
        }
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((value) => !value)}
        className={`group relative flex items-center gap-1.5 whitespace-nowrap px-3 py-3 text-sm transition ${
          active
            ? lightHeader
              ? "font-extrabold text-primary"
              : "font-extrabold text-white"
            : lightHeader
              ? "font-bold text-foreground/72 hover:text-foreground"
              : "font-bold text-white/76 hover:text-white"
        }`}
      >
        {label}
        <ChevronDown
          className={cn("h-3.5 w-3.5 transition-transform duration-200", open && "rotate-180")}
        />
        <span
          className={`absolute inset-x-3 bottom-1 h-0.5 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
            lightHeader ? "bg-primary/45" : "bg-energy/55"
          } ${active ? "scale-x-100" : ""}`}
        />
      </button>

      <div
        className={cn(
          "absolute left-0 top-full w-64 pt-3 transition duration-150",
          open
            ? "visible translate-y-0 opacity-100"
            : "pointer-events-none invisible -translate-y-1 opacity-0",
        )}
      >
        <div className="rounded-xl border border-border bg-white p-2 shadow-elevated">
          <ul>
            {items.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  tabIndex={open ? 0 : -1}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-lg px-3.5 py-2.5 text-sm font-semibold transition",
                    isActive(pathname, item.to)
                      ? "bg-primary/8 text-primary"
                      : "text-foreground/78 hover:bg-surface hover:text-primary",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {moreLink && (
              <li>
                <Link
                  to={moreLink.to}
                  tabIndex={open ? 0 : -1}
                  onClick={() => setOpen(false)}
                  className="mt-1 block rounded-lg border-t border-border px-3.5 py-2.5 pt-3 text-xs font-extrabold uppercase tracking-[0.1em] text-primary hover:text-navy"
                >
                  {moreLink.label}
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

function TopNavLink({
  to,
  label,
  lightHeader,
  pathname,
}: {
  to: string;
  label: string;
  lightHeader: boolean;
  pathname: string;
}) {
  const active = isActive(pathname, to);
  return (
    <Link
      to={to}
      className={`group relative whitespace-nowrap px-3 py-3 text-sm transition ${
        active
          ? lightHeader
            ? "font-extrabold text-primary"
            : "font-extrabold text-white"
          : lightHeader
            ? "font-bold text-foreground/72 hover:text-foreground"
            : "font-bold text-white/76 hover:text-white"
      }`}
    >
      {label}
      <span
        className={`absolute inset-x-3 bottom-1 h-0.5 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
          lightHeader ? "bg-primary/45" : "bg-energy/55"
        }`}
      />
      {active && (
        <motion.span
          layoutId="nav-active-line"
          className={`absolute inset-x-3 bottom-1 h-0.5 ${lightHeader ? "bg-primary" : "bg-energy"}`}
          transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
        />
      )}
    </Link>
  );
}

function MobileNavGroup({
  label,
  items,
  pathname,
  active,
}: {
  label: string;
  items: { to: string; label: string }[];
  pathname: string;
  active: boolean;
}) {
  const [open, setOpen] = useState(active);

  return (
    <div className="py-1">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className={`flex w-full items-center justify-between py-3 text-sm transition-colors ${
          active ? "font-extrabold text-primary" : "font-bold text-foreground"
        }`}
      >
        <span>{label}</span>
        <ChevronDown
          className={cn("h-4 w-4 shrink-0 transition-transform", open && "rotate-180")}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-200",
          open ? "grid-rows-[1fr] pb-2" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <ul className="space-y-1 pl-3">
            {items.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className={`flex items-center justify-between rounded-md py-2.5 text-sm transition-colors ${
                    isActive(pathname, item.to)
                      ? "font-bold text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground/45" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function MobileTopLink({ to, label, pathname }: { to: string; label: string; pathname: string }) {
  const active = isActive(pathname, to);
  return (
    <Link
      to={to}
      className={`flex items-center justify-between py-4 text-sm transition-colors ${
        active ? "font-extrabold text-primary" : "font-bold text-foreground hover:text-primary"
      }`}
    >
      <span>{label}</span>
      <ChevronRight
        className={`h-4 w-4 shrink-0 ${active ? "text-primary" : "text-muted-foreground/45"}`}
      />
    </Link>
  );
}

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
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

  const lightHeader = scrolled || mobileOpen;
  const utilityText = lightHeader ? "text-foreground/68" : "text-white/72";
  const utilityHover = lightHeader ? "hover:text-primary" : "hover:text-white";
  const utilityDivider = lightHeader ? "bg-border" : "bg-white/14";
  const utilityIcon = lightHeader ? "text-primary" : "text-energy";
  const pathname = location.pathname;

  // Route-based active state - covers child routes (e.g. /services/shutdown-support,
  // /industries/lng) that aren't themselves in the dropdown's visible item list.
  const servicesActive =
    solutionsLinks.some((link) => isActive(pathname, link.to)) || pathname.startsWith("/services/");
  const industriesActive = isActive(pathname, "/industries");

  return (
    <>
      {/*
       * Page chrome z-index hierarchy (see also WhatsAppButton.tsx and Layout.tsx's
       * ScrollToTop, which follow the same tiers):
       *   z-50 - sticky header (always on top of page content)
       *   z-40 - mobile nav drawer (below header, above content and floating controls)
       *   z-30 - floating action controls (WhatsApp, back-to-top)
       * The one-time boot splash (site-splash.css) is a separate, intentionally very
       * high z-index (10000) since it must cover literally everything for a moment at
       * load; it is unmounted from the DOM immediately after, so it never competes
       * with this ongoing hierarchy.
       */}
      <motion.header
        initial={false}
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
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className={`text-xs font-semibold transition-colors ${utilityText} ${utilityHover}`}
              >
                {site.phone}
              </a>
              <span className={`mx-4 h-3 w-px ${utilityDivider}`} aria-hidden="true" />
              <a
                href={`mailto:${site.email}`}
                className={`flex items-center gap-2 font-semibold transition-colors ${utilityText} ${utilityHover}`}
              >
                <Mail className={`h-3.5 w-3.5 shrink-0 ${utilityIcon}`} />
                <span>{site.email}</span>
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

        {/*
         * Below 1280px (the breakpoint where the desktop nav/CTA appear - see the
         * `[@media(min-width:1280px)]` variants on <nav> and the CTA/hamburger below),
         * this must be a plain two-item flex row (logo, right-side group), NOT the
         * desktop three-column grid. The grid's middle "auto" track is sized for the
         * primary nav, which is `display:none` on mobile - but a grid still reserves
         * that column's gaps, pushing the hamburger away from the true right edge
         * instead of letting it sit flush against it. `justify-between` on a two-item
         * flex row has no such reserved-space problem, so it's the correct mobile
         * layout; the grid only takes over once the desktop nav actually renders.
         */}
        <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between gap-4 px-4 py-3 sm:px-5 [@media(min-width:1280px)]:grid [@media(min-width:1280px)]:grid-cols-[1fr_auto_1fr] [@media(min-width:1280px)]:px-8">
          <Link
            to="/"
            aria-label="Nexora Energy Solutions - Home"
            className="relative block h-12 w-[172px] justify-self-start overflow-visible rounded-md transition duration-300 hover:opacity-90"
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
            <TopNavLink to="/" label="Home" lightHeader={lightHeader} pathname={pathname} />
            <TopNavLink to="/about" label="About" lightHeader={lightHeader} pathname={pathname} />

            <NavDropdown
              label="Services"
              items={solutionsLinks}
              lightHeader={lightHeader}
              pathname={pathname}
              active={servicesActive}
            />

            <NavDropdown
              label="Industries"
              items={industriesLinks}
              lightHeader={lightHeader}
              pathname={pathname}
              active={industriesActive}
              moreLink={{ to: "/industries", label: "View all industries" }}
            />

            {trailingLinks.map((link) => (
              <TopNavLink
                key={link.to}
                to={link.to}
                label={link.label}
                lightHeader={lightHeader}
                pathname={pathname}
              />
            ))}
          </nav>

          <div className="flex items-center justify-end gap-3">
            <Link
              to="/manpower"
              hash="request-form"
              className={cn(
                "group hidden min-h-11 items-center gap-2 rounded-md border border-transparent bg-energy px-5 py-2.5 text-sm font-extrabold text-navy transition duration-200 hover:brightness-95 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 sm:inline-flex",
                lightHeader
                  ? "focus-visible:ring-primary focus-visible:ring-offset-white"
                  : "focus-visible:ring-white focus-visible:ring-offset-navy",
              )}
            >
              Request Manpower
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileOpen((value) => !value)}
              aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              className={cn(
                "grid h-11 w-11 shrink-0 place-items-center rounded-xl border transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 [@media(min-width:1280px)]:hidden",
                lightHeader
                  ? "border-border text-foreground hover:border-primary/40 hover:text-primary focus-visible:ring-primary focus-visible:ring-offset-white"
                  : "border-white/35 text-white hover:border-white hover:bg-white/10 focus-visible:ring-white focus-visible:ring-offset-navy",
              )}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      <div
        id="mobile-navigation"
        className={`fixed inset-0 z-40 transition [@media(min-width:1280px)]:hidden ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
        inert={!mobileOpen}
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
              hash="request-form"
              className="group mb-4 flex min-h-12 items-center justify-between rounded-md border border-transparent bg-primary px-5 py-3 text-sm font-extrabold text-white transition duration-200 hover:brightness-95 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              <span>Request Manpower</span>
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>

            <nav className="divide-y divide-border" aria-label="Mobile navigation">
              <MobileTopLink to="/" label="Home" pathname={pathname} />
              <MobileTopLink to="/about" label="About" pathname={pathname} />

              <MobileNavGroup
                label="Services"
                items={solutionsLinks}
                pathname={pathname}
                active={servicesActive}
              />
              <MobileNavGroup
                label="Industries"
                items={[...industriesLinks, { to: "/industries", label: "View all industries" }]}
                pathname={pathname}
                active={industriesActive}
              />

              {trailingLinks.map((link) => (
                <MobileTopLink key={link.to} to={link.to} label={link.label} pathname={pathname} />
              ))}
            </nav>

            <div className="mt-6 rounded-md border border-border bg-surface p-4">
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                Qatar Headquarters
              </div>
              <div className="mt-2 text-sm font-bold text-foreground">Doha, Qatar</div>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="text-sm font-semibold">
                {site.phone}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="mt-0.5 block text-xs text-muted-foreground hover:text-foreground"
              >
                {site.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
