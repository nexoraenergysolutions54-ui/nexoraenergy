# Implemented website improvements

11 September 2026. Changes are in the local repository and have not been deployed.

## Results

| Check | Homepage mobile | Contact mobile |
| --- | ---: | ---: |
| Local production Lighthouse performance | 88 | 87 |
| Accessibility | 100 | 100 |
| Best practices | 100 | 100 |
| SEO | 100 | 100 |
| First Contentful Paint | 2.3 s | 2.3 s |
| Largest Contentful Paint | 3.5 s | 3.7 s |
| Total resource weight | 497 KiB | 468 KiB |

These are single Lighthouse mobile lab samples from a gzip-enabled local production preview, using Lighthouse 13.4.1. The earlier published-site audit measured homepage performance 59 and 14,061 KiB, and contact performance 65 and 3,386 KiB. **The environments differ**, so these scores are not a controlled before/after production benchmark. Run the same tests on the deployed version to establish live results. LCP still exceeds the audit's proposed 2.5 s target; this is an improvement, not a claim that every performance target has been met.

Final reports: [homepage](final-home-mobile.report.html), [contact](final-contact-mobile.report.html). JSON reports contain the exact settings. The final contact command encountered a Windows temporary-profile cleanup permission error after writing its reports; the report itself contains completed results. No application error was reported by the browser regression checks.

## What changed

- Converted the photographic/logo asset set from 31.7 MB to 2.6 MB of WebP variants, retaining the original source files. Added a portrait mobile homepage hero to preserve image clarity. `npm run images:optimize` regenerates optimized assets using the locked Sharp dependency.
- Replaced the five-image homepage carousel with one prioritized responsive image. Other pages use optimized assets. Logo dimensions reserve space during loading.
- Locally hosted and preloaded Latin variable fonts, eliminating the external Google Fonts stylesheet and font-host requests.
- Removed initial content hiding from the shared page shell, reveal wrapper and homepage hero; the homepage heading is visible without JavaScript.
- Fixed one canonical URL per page, including all 13 previously affected nested routes. Aligned robots, sitemap and public company summary with `www.nexoraqa.com`.
- Updated email to **sales@nexoraqa.com**, and telephone/WhatsApp to **+974 5546 7325**, as provided by the owner. Removed placeholder/old contact details and updated structured data.
- Replaced four nonfunctional forms with a shared accessible email-draft workflow. It validates required fields, previews the composed request and offers email-app and copy-text options. Editing fields clears a stale draft. CVs/RFQs are attached in the user's email app. Nothing is automatically sent or stored by this form.
- Replaced non-clickable news prompts with expandable practical planning notes. Removed unsupported announcement dates and relabeled recruitment profiles as indicative roles. Labeled project examples as illustrative and removed named clients from those examples. Softened unsupported metric and partner claims; business evidence should still be reviewed before publishing new case studies or client lists.
- Rewrote resources copy around buyer needs. Improved contact-hero and small-text contrast, corrected footer heading levels, made contact details clickable, and replaced the generic embedded map with an explicit area-map link.
- Made the closed mobile navigation inert to keyboard focus and added Escape-to-close support.
- Made Prettier accept repository/platform line endings, excluded generated audit/router artifacts from lint, and resolved formatting errors without reformatting unrelated UI primitives.

## Verification

- Production build passed under **Node 22.23.2**, the declared runtime family, including 27 prerendered routes and OG image injection. See `node22-build.txt`.
- TypeScript `tsc --noEmit` passed.
- `npm run lint` passed with **zero errors and six pre-existing Fast Refresh warnings** in shared UI primitives.
- Browser checks covered all 27 routes: HTTP 200, one correct canonical, one H1, no detected horizontal overflow at 390 px, no old contact details and named/associated form controls.
- All four forms were tested with synthetic data for required validation, correct recipient, draft composition and clearing after an edit. No email or WhatsApp message was sent.
- News expansion, mobile menu open/close, Escape behavior and JavaScript-disabled homepage visibility were checked. Mobile and desktop screenshots were reviewed.

## Handoff

The forms intentionally use the visitor's email app. Direct server-side delivery and CV uploads require a configured transactional-email/storage service; an email address alone is not sufficient to implement reliable delivery. Visitors see this distinction before preparing their draft and receive a copy-text fallback.

The original images remain available for future visual revisions. Business owners should supply verified project evidence, confirmed active vacancies and a precise meeting address when available. Deploy the reviewed code, then repeat Lighthouse on the public URL; no production publishing occurred in this task.
