// Browser-only probe imported explicitly by the local verification script.
// It is not a route and is never imported by the application bundle.
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SiteSplash } from "../components/SiteSplash";
import { SPLASH_ATTRIBUTE, SPLASH_BOOTSTRAP, SPLASH_SESSION_KEY } from "../lib/site-splash";

export async function probeStrictMode(earlyUnmount = false) {
  const bodyOverflow = document.body.style.overflow;
  const htmlOverflow = document.documentElement.style.overflowY;
  document.body.style.overflow = "scroll";
  document.documentElement.style.overflowY = "scroll";
  sessionStorage.removeItem(SPLASH_SESSION_KEY);
  const script = document.createElement("script");
  script.textContent = SPLASH_BOOTSTRAP;
  document.head.append(script);
  script.remove();
  const host = document.createElement("div");
  document.body.append(host);
  const root = createRoot(host);
  root.render(
    <StrictMode>
      <SiteSplash />
    </StrictMode>,
  );
  await new Promise((resolve) => setTimeout(resolve, 80));
  const activeAfterReplay = document.documentElement.hasAttribute(SPLASH_ATTRIBUTE);
  if (earlyUnmount) root.unmount();
  await new Promise((resolve) => setTimeout(resolve, earlyUnmount ? 20 : 850));
  const released = !document.documentElement.hasAttribute(SPLASH_ATTRIBUTE);
  const overflowPreserved =
    document.body.style.overflow === "scroll" &&
    document.documentElement.style.overflowY === "scroll";
  if (!earlyUnmount) root.unmount();
  host.remove();
  document.body.style.overflow = bodyOverflow;
  document.documentElement.style.overflowY = htmlOverflow;
  return { activeAfterReplay, released, overflowPreserved };
}
