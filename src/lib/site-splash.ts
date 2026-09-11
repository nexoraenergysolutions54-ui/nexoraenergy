export const SPLASH_SESSION_KEY = "nexora:splash-seen";
export const SPLASH_ATTRIBUTE = "data-nexora-splash";
export const SPLASH_FINISHED_EVENT = "nexora:splash-finished";
export const SPLASH_MINIMUM_MS = 650;
export const SPLASH_EXIT_MS = 200;
export const SPLASH_MAXIMUM_MS = 1400;

export interface SplashController {
  startedAt: number;
  finished: boolean;
  finish: () => void;
}

declare global {
  interface Window {
    __nexoraSplash?: SplashController;
  }
}

// This browser-only bootstrap runs before body paint. React starts with identical
// server/client markup; only the explicitly suppressed <html> attribute changes.
// The independent deadline also releases the page if hydration never completes.
export const SPLASH_BOOTSTRAP = `(()=>{
  const root=document.documentElement;
  try {
    let seen=false;
    try {
      seen=sessionStorage.getItem(${JSON.stringify(SPLASH_SESSION_KEY)})==="1";
      if(!seen)sessionStorage.setItem(${JSON.stringify(SPLASH_SESSION_KEY)},"1");
    } catch {}
    if(seen||matchMedia("(prefers-reduced-motion: reduce)").matches)return;
    let deadline;
    const controller={startedAt:performance.now(),finished:false,finish(){
      if(controller.finished)return;
      controller.finished=true;
      root.removeAttribute(${JSON.stringify(SPLASH_ATTRIBUTE)});
      clearTimeout(deadline);
      window.removeEventListener("pagehide",controller.finish);
      window.dispatchEvent(new Event(${JSON.stringify(SPLASH_FINISHED_EVENT)}));
    }};
    window.__nexoraSplash=controller;
    deadline=setTimeout(controller.finish,${SPLASH_MAXIMUM_MS});
    window.addEventListener("pagehide",controller.finish);
    root.setAttribute(${JSON.stringify(SPLASH_ATTRIBUTE)},"active");
  } catch {
    root.removeAttribute(${JSON.stringify(SPLASH_ATTRIBUTE)});
  }
})();`;
