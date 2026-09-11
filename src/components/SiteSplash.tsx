import { useEffect, useRef, useState } from "react";
import logo from "@/assets/optimized/nexora-logo-new-light.webp";
import logoHighResolution from "@/assets/nexora-logo-new-light.png";
import {
  SPLASH_EXIT_MS,
  SPLASH_FINISHED_EVENT,
  SPLASH_MAXIMUM_MS,
  SPLASH_MINIMUM_MS,
} from "@/lib/site-splash";

export function SiteSplash() {
  const [phase, setPhase] = useState<"visible" | "exiting" | "hidden">("visible");
  const [upgradeLogo, setUpgradeLogo] = useState(false);
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    const controller = window.__nexoraSplash;
    if (!controller || controller.finished) {
      setPhase("hidden");
      return () => {
        mounted.current = false;
      };
    }

    // This commit is the shell-ready signal. No images, fonts or network waits.
    setUpgradeLogo(true);
    const elapsed = performance.now() - controller.startedAt;
    const finish = () => {
      releaseResources();
      if (mounted.current) setPhase("hidden");
    };
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMotionChange = () => {
      if (motion.matches) controller.finish();
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Tab" || event.key === "Escape") controller.finish();
    };
    function releaseResources() {
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
      window.removeEventListener(SPLASH_FINISHED_EVENT, finish);
      window.removeEventListener("keydown", onKeyDown);
      motion.removeEventListener("change", onMotionChange);
    }
    window.addEventListener(SPLASH_FINISHED_EVENT, finish);
    window.addEventListener("keydown", onKeyDown);
    motion.addEventListener("change", onMotionChange);

    const exitAt = Math.min(SPLASH_MINIMUM_MS, SPLASH_MAXIMUM_MS - SPLASH_EXIT_MS);
    const exitTimer = window.setTimeout(
      () => {
        if (mounted.current) setPhase("exiting");
      },
      Math.max(0, exitAt - elapsed),
    );
    const removeTimer = window.setTimeout(
      controller.finish,
      Math.max(0, Math.max(exitAt, elapsed) + SPLASH_EXIT_MS - elapsed),
    );
    onMotionChange();

    return () => {
      mounted.current = false;
      releaseResources();
      // Strict Mode immediately re-subscribes. A real unmount releases the lock
      // without resetting the session or touching any existing overflow styles.
      queueMicrotask(() => {
        if (!mounted.current) controller.finish();
      });
    };
  }, []);

  if (phase === "hidden") return null;

  return (
    <div className="site-splash" data-phase={phase} aria-hidden="true">
      <div className="site-splash__brand">
        <span className="site-splash__ring" />
        <img
          className="site-splash__logo"
          src={logo}
          srcSet={upgradeLogo ? `${logo} 500w, ${logoHighResolution} 1832w` : undefined}
          sizes="(max-width: 857px) 240px, (max-width: 1428px) 28vw, 400px"
          width={1832}
          height={858}
          alt=""
          decoding="async"
          draggable={false}
        />
      </div>
    </div>
  );
}
