import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useRouterState } from "@tanstack/react-router";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";
import { structuredDataForPath } from "@/lib/seo";

function JsonLd({ data }: { data: unknown }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.75, y: 10 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.75, y: 10 }}
          transition={{ duration: reduceMotion ? 0.01 : 0.22, ease: [0.16, 1, 0.3, 1] }}
          onClick={() => window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" })}
          aria-label="Back to top"
          title="Back to top"
          className="fixed bottom-24 right-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-primary text-white shadow-elevated transition duration-200 hover:scale-110 hover:bg-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-energy"
        >
          <ArrowUp className="h-5 w-5" aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  const { location } = useRouterState();
  const structuredData = structuredDataForPath(location.pathname);

  return (
    <div className="relative min-h-screen w-full max-w-full overflow-x-hidden bg-background text-foreground">
      {structuredData.map((data, index) => (
        <JsonLd key={`${location.pathname}-${index}`} data={data} />
      ))}
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
}
