# Nexora splash implementation

12 September 2026. Implemented locally; not deployed.

## Files and mount

Added application files:

- `src/components/SiteSplash.tsx`: root-level decorative overlay and explicit visible/exiting/hidden lifecycle.
- `src/components/site-splash.css`: critical scoped visual styles, responsive sizing, scroll lock and animation fallback.
- `src/lib/site-splash.ts`: centralized session key/timings and guarded browser bootstrap.

Added verification files:

- `src/__tests__/site-splash.test.ts`: eight native Node tests for session, storage, reduced motion, deadlines and cleanup.
- `src/__tests__/site-splash.harness.tsx`: explicitly invoked development-only Strict Mode/unmount probe; not a public route or application import.
- Browser scripts, screenshots and reports in `audits/splash/`.

Changed existing files for this enhancement:

- `src/routes/__root.tsx`: mount `SiteSplash` once inside `RootShell`, immediately before existing page content; include critical CSS and the guarded first-paint bootstrap in the head.
- `package.json`: add `npm run test:splash`. No animation library or other package was added.

Existing unrelated workspace changes were preserved. The broader content/navigation work is outside this splash implementation.

## Logo and appearance

Uses the existing `src/assets/optimized/nexora-logo-new-light.webp` and, when necessary on first entry at high pixel density, the unchanged original `src/assets/nexora-logo-new-light.png` through responsive `srcSet`. The original PNG's Git content hash remains `b6b1cf5ae7ae20fa97dd45fb17ea60850427fba7`, matching the index. No logo asset was cropped, regenerated, recolored or edited.

The file box scales from 240 to 400 CSS pixels; allowing for its existing transparent margins, the visible mark is approximately 206–344 pixels wide. The logo fades in over 180 ms with a restrained 96%→100% scale and never rotates. Only the single thin turquoise ring rotates. Navy comes from the existing `--dark-navy` token, with the same `#02111f` fallback before the app stylesheet loads. A faint radial background adds depth without a strong glow.

## Timing and session behavior

- Normal duration: 650 ms minimum presentation + 200 ms exit = **850 ms**.
- The root component's effect is the shell-ready signal. No fonts, images, data fetching or external resources are awaited.
- If hydration is late, the effect exits as soon as it commits; an independent bootstrap deadline always releases the page at a nominal **1,400 ms**.
- Measured final normal durations across seven widths: **851–863 ms**. With application scripts deliberately blocked, measured release was **1,408.5 ms**, below the requested 1,500 ms maximum.
- `sessionStorage["nexora:splash-seen"] = "1"` is set on first entry. Internal navigation, Home return and refresh do not replay it. A fresh tab/session can display it.
- Storage access is wrapped in `try/catch`; unavailable storage may replay on a full refresh, but never causes an internal-route replay or a trapped page. Permanent local storage is not used.

## Accessibility, scrolling and failure behavior

- The complete overlay is `aria-hidden="true"`, with empty logo alt text, no live region, fake progress or focusable control. Underlying page content remains available to assistive technology.
- Reduced-motion preference skips the splash entirely. A preference change during display dismisses it; Tab or Escape also dismisses it without moving focus or preventing the normal keyboard action.
- A temporary root attribute activates the pointer shield and CSS overflow lock. Inline body/root overflow settings are never overwritten by the splash. Removing the attribute restores the existing cascade and any other component's scroll state.
- Stable scrollbar space avoids a dismissal shift. The navy root background covers the reserved gutter while the overlay is active. No fixed-body positioning or scroll-position reset is used.
- All effect timers/listeners are released on dismissal and unmount. Strict Mode cleanup/re-subscription is handled without resetting the session or prematurely ending the overlay.
- The independent timeout still runs if React fails to initialize. A CSS fade/visibility fallback also ends the visual animation. If JavaScript is disabled entirely, the overlay stays hidden and the page works as server-rendered HTML. If hydration is blocked, the decorative server node may remain hidden until hydration occurs; it cannot intercept input.
- A small browser-only inline bootstrap is necessary to check session storage before first paint. The targeted `<html suppressHydrationWarning>` accounts for its intentional root attribute change; overlay markup starts identically on server and client. No browser globals are evaluated during server rendering.

## Verification

- Responsive Chrome checks: **320, 375, 390, 430, 768, 1440 and 1920 px**; 390 px also checked at DPR 3. Dynamic viewport units and safe-area inset padding are included. Real iOS browser chrome/notch hardware was not available.
- Screenshots reviewed: [mobile](splash-390.png), [desktop](splash-1440.png). Viewport-edge pixel checks confirm navy at the far-right edge, including the scrollbar gutter.
- No horizontal overflow or recorded layout shifts during the normal splash cases.
- First session, new tab, internal navigation, Home return, refresh, reduced motion, blocked storage, blocked app scripts, JavaScript disabled and keyboard dismissal all passed.
- Real React Strict Mode replay and early unmount passed; deliberate pre-existing body and root overflow values were preserved in the isolated mount probe. The existing navigation component independently owns its own overflow behavior; it was not modified.
- Eight unit tests passed with `npm run test:splash`.
- TypeScript `tsc --noEmit` passed.
- Lint: **zero errors, six existing Fast Refresh warnings** in shared UI primitives.
- Production build passed with the declared Node 22 runtime family, including prerendering and OG image injection.
- Initial production HTML retains the page H1, canonical URL and JSON-LD. The splash adds no metadata, structured-data claims, H1, route, redirect or meaningful indexable text. Existing SEO declarations were preserved.

## Performance and review

The bootstrap is approximately **951 bytes** and critical CSS approximately **1.9 KB** before transfer compression; together approximately **1.1 KB gzip**. These figures exclude the small React component added to the existing app bundle. The optimized logo is already used by the header; the optional original PNG is about 171 KiB and is requested only for an active high-density splash. No video, GIF, extra font, animation package or network-loading gate was introduced.

The intentional first-entry presentation lasts about 850 ms and can influence first-visit paint metrics. Session returns skip it. The [local production mobile Lighthouse report](lighthouse-mobile.report.html) recorded **89 performance, 100 accessibility, 100 best practices, LCP 3.5 s, TBT 0 ms and CLS 0**, with approximately **505 KiB** of total resources. This is a lab sample, not a production or field-performance guarantee, and concurrent content changes mean it is not a controlled before/after splash comparison.

The current homepage's SEO score is **92** because three links to `/manpower`, `/industrial-services` and `/products` use the generic text “Learn more.” These links are unrelated to the splash (which contains no links) and were deliberately left unchanged. This is the remaining content issue for a separate review; no splash-specific failure remains.

The implementation is ready for visual review. No page redesign or publishing was performed as part of this enhancement.
