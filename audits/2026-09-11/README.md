# Nexora performance and content audit

Date: 11 September 2026. Published site: https://www.nexoraqa.com/.

The site needs attention before it can reliably convert enquiries: four forms have no submission implementation, contact details contain placeholders, and large images slow page loading. The initial local production build failed; after a concurrent workspace edit corrected its invalid JSX quotes, the build passed on recheck. All 27 published routes tested returned HTTP 200.

Artifacts: [homepage mobile report](home-mobile.report.html), [mobile repeat](home-mobile-repeat.report.html), [homepage desktop report](home-desktop.report.html), [contact mobile report](contact-mobile.report.html), [27-page inventory](page-inventory.csv), [machine-readable summary](summary.json).

## Scope and evidence

- Lighthouse 13.4.1 against the **published site**, using headless installed Chrome, default simulated mobile throttling and the desktop preset. See the HTML reports and `summary.json` for exact settings, timestamps and results. These are lab samples from this machine, not real-user Core Web Vitals or guarantees for every visitor. Desktop and mobile use different scoring and throttling settings.
- Browser crawl of all 27 sitemap paths on the published domain at 390 × 844: statuses, titles, canonical tags, H1s, links and forms saved in `content-crawl.json`.
- Visual inspection of mobile screenshots for home, contact, careers and shutdown support. The viewport crawl detected no horizontal overflow; this is not exhaustive responsive or keyboard testing.
- Source review of shared components, content data, metadata and route templates; production build and repository lint checks.
- No forms submitted, messages sent, load/stress traffic generated or application fixes applied. External destination availability, business claims and mailbox/WhatsApp ownership are not verified. Internal page links found by the crawl all resolve to the tested route inventory; fragments and external links were not exhaustively tested.
- The initial mobile run and desktop run partly overlapped the lightweight content crawl. A subsequent mobile repeat ran after the crawl completed and also scored 59; use both mobile samples when assessing variability.

## Measured performance

| Homepage metric | Mobile initial | Desktop |
| --- | ---: | ---: |
| Performance | 59/100 | 61/100 |
| First Contentful Paint | 3.9 s | 2.4 s |
| Largest Contentful Paint | 17.4 s | 4.5 s |
| Total Blocking Time | 0 ms | 0 ms |
| Cumulative Layout Shift | 0 | 0.001 |
| Speed Index | 9.0 s | 3.8 s |
| Transferred resource weight | 13.7 MiB | 16.0 MiB |
| Automated accessibility | 98/100 | 98/100 |
| Automated SEO | 100/100 | 100/100 |
| Best practices | 100/100 | 100/100 |

The homepage SEO and accessibility scores are narrow automated checks. They do not establish that forms work, claims are accurate, or nested pages have correct metadata. Total Blocking Time is a lab measurement; it is not an INP measurement.

The **homepage mobile repeat also scored 59**, with FCP 4.0 s, LCP 16.5 s, TBT 0 ms, CLS 0 and 13.7 MiB of resources. This supports the initial finding; two samples are not a statistical benchmark.

The **contact page scored 65 on mobile**, with FCP 3.0 s, LCP 17.0 s, TBT 0 ms, CLS 0 and 3.3 MiB of resources. Its automated accessibility score was **89**, with failures for an unnamed select, heading order and focusable content inside an aria-hidden region. Inspect the HTML report for the affected nodes, including any embedded map content. Its SEO score was 100; best practices were not included in this contact run. The image audit estimates 2,480 KiB of potential savings and also flags LCP image discovery.

### Performance findings

1. **High: image delivery dominates page weight.** Lighthouse identifies the first hero image (`manpower-hero-crew-briefing`) as the LCP element. The initial mobile image audit estimates 13,359 KiB of potential image savings; this is a tool estimate, not a verified optimized output size. The five source hero images total 11,603,847 bytes (11.1 MiB), with individual files around 2.1–2.5 MiB. Evidence: `src/routes/index.tsx:132`, `src/lib/enterprise-content.ts:48`, Lighthouse image-delivery and LCP details. Convert photographic PNGs to carefully compressed WebP/AVIF, provide responsive sizes and inspect visual quality. Proposed budget: initial mobile hero below 250 KiB and initial total resources below 2 MiB; these are project targets, not web standards.
2. **High: overlapping carousel slides download during initial loading.** All five images occupy the same viewport area. Native `loading="lazy"` on later slides does not prevent their requests in the measured run. Mount or fetch later slides only when needed, or use one static mobile hero. Retain high priority for the first image. Re-measure request order and total bytes after changing this.
3. **Medium: render-blocking resources delay first paint.** Lighthouse estimates 1,070 ms of mobile savings. `src/routes/__root.tsx` loads two Google Fonts families with broad variable weight/italic requests alongside the app stylesheet. Inspect the report's critical request chain, reduce font variants, and consider locally hosted subsets. Do not remove design fonts blindly.
4. **Medium: content visibility depends on animation/hydration.** `src/components/Reveal.tsx` initially hides and blurs content, including page headings in `PageHero` and landing pages. This is a source-level resilience concern; the measured homepage LCP bottleneck is image delivery. Render critical text visible initially and apply optional motion progressively. Test JavaScript-disabled and reduced-motion behavior after remediation.
5. **Low: image sizing, heading order and unused JavaScript.** Lighthouse flags images without intrinsic dimensions and about 75 KiB of unused JavaScript. Measured CLS is already low; images are the first optimization priority. Add appropriate intrinsic dimensions/aspect ratios and review actual bundle consumers before removing dependencies. The homepage heading-order failure points to the footer's `h4` “Solutions” heading.

## Priority content and functionality findings

| Priority | Finding and evidence | Recommended action |
| --- | --- | --- |
| Critical | Contact, manpower, products and careers forms have no action or submit handler. All 36 input/select/textarea controls across these forms lack names; 29 lack associated labels. Required-looking fields are not enforced. Sources: `contact.tsx:177`, `manpower.tsx:757`, `products.tsx:421`, `careers.tsx:287`; corroborated by live form markup. | Implement a real submission destination, server validation, accessible labels, success/error/pending states and attachment checks. Test delivery end to end in a test environment. Until then, remove submission promises or supply a verified working contact route. |
| Critical | Phone is `+974 0000 0000` in shared content/header/footer/contact. Contact WhatsApp points to `97400000000`, while footer/floating chat use `97433110000`. | Obtain the actual approved phone and WhatsApp numbers and centralize them in `site`. Verify ownership and destinations; do not invent replacements. |
| High | Thirteen nested routes emit both their parent's canonical URL and their own. Example: `/services/shutdown-support` has `/services` and `/services/shutdown-support`. | Ensure exactly one canonical for the current leaf page. Check rendered HTML for every nested route, not only the homepage. See `summary.json` for the complete list. |
| High | Published `robots.txt` and all 27 sitemap URLs use `www.nexora-energy.com`, while page canonicals use `www.nexoraqa.com`. | Confirm the intended primary domain, align sitemap and robots with it, and verify redirects from any secondary domain. Copies of the live files are included. No claim is made that the alternate domain is unowned or unavailable. |
| High | `/news` contains six “Read article” prompts rendered as plain `div` elements with no article destinations. | Publish complete articles with working URLs, author/reviewer and actual dates, or remove the prompts and present approved short updates honestly. Verify each announcement with its business owner. |
| High | `/projects` names KNPC facilities and a QatarEnergy affiliate and gives delivery specifics; `/partners` states direct relationships with major operators. Homepage/about/manpower/partners show quantitative claims including 500+ workforce, 50+ partners/disciplines and 100% compliance. | Create an evidence register with owner, source, date and permission for each claim. If scenarios are illustrative, label each clearly. The audit does not establish that the claims are false; proof is absent from the supplied material. |
| High | Project metadata calls these “representative ... scenarios,” while visible copy describes delivery experience, client names and completed scopes. | Decide whether these are verified case studies or illustrative capabilities and align headings, cards and metadata accordingly. |
| Medium | Careers advertises “Current vacancies” without posting/closing dates or requisition IDs and promises review within 3 business days. Enquiry forms promise response within one business day despite no delivery implementation. | Confirm active requisitions and service response commitments. Distinguish active roles from talent-pool recruitment; remove unsupported turnaround promises. |
| Medium | Personal details and CVs are requested without an accessible privacy notice explaining use, storage and a contact for questions. No privacy route is in the inventory or footer. | Add an approved, plain-language applicant/enquiry privacy notice near the forms. This is a content/transparency recommendation, not a jurisdictional legal determination. |
| Medium | Contact location is only Doha; shared data adds Al Muntazah Street, but the map is a general city search. Email uses a different domain from the website. | Confirm the legal company name, physical address, map pin and mailbox. A separate email domain can be valid; verify it rather than automatically changing it. |
| Medium | The contact hero's dark gradient words are difficult to read against the dark photo in the saved mobile screenshot. Careers uses generic commercial service badges in its recruitment hero. | Use a light, legible hero accent on dark images and replace irrelevant badges with recruitment information. Treat screenshot contrast as a visual finding until measured. |

## Editorial audit by page group

| Routes | Assessment | Concrete editorial improvement |
| --- | --- | --- |
| `/` | Clear sector, audience and geographic positioning, but many sections repeat discipline matching, documentation and mobilisation. Several headings discuss the site's own credibility. | Keep a direct service proposition, a concise process and verified proof. Replace “A procurement-ready capability statement, not a generic staffing pitch” with “What to include in your manpower request.” Combine repetitive trust sections. |
| `/about` | Company description and operational process are useful, but quantitative and operator-alignment claims need substantiation. | Add approved company background, leadership, registration details and dated evidence for metrics. |
| `/manpower` | Detailed disciplines and request inputs are useful. The conversion form is broken; the country field defaults to Kuwait despite Qatar-led positioning. | Fix submission, choose a neutral country placeholder or confirmed default, clarify mobilisation dependencies and make discipline selections accessible and included in submitted data. |
| `/industrial-services`, `/services` | Overlapping service hubs describe different levels of responsibility: broad design/execution promises versus coordination/support. | Define the scope Nexora directly delivers, what it coordinates and what partners perform. Give each hub a distinct purpose or consolidate with a deliberate redirect strategy. |
| `/products` | Useful category overview, but broad API/ASME/ISO statements do not identify product-specific evidence. | Define sourcing scope, manufacturer/brand availability, applicable documentation and RFQ requirements. Repair the enquiry form. |
| `/industries` and six industry detail pages | Sector navigation is clear; detail pages inherit repeated FAQs and generic capability text from `SeoLandingPage`. | Add sector-specific constraints, disciplines, deliverables and an approved worked example. Avoid simply swapping industry nouns in common copy. |
| Six `/services/*` pages | Clear topic-specific titles and CTAs, but shared FAQs repeat substantially. | Add service-specific inclusions, exclusions, client inputs, deliverables and qualification assumptions; retain only relevant FAQs. Fix duplicate canonicals. |
| `/projects`, `/partners` | Strong potential proof pages, but scenario/experience ambiguity and named relationships need owner verification. | Publish evidence-backed, approved case studies or clearly labeled examples. Distinguish clients, suppliers, recruitment partners and target sectors. |
| `/hse` | Clear themes but high-level statements about systems and standards. | Add a policy owner, review date, practical process details and any verified certification scope/expiry. Do not imply certification merely from alignment language. |
| `/careers` | Detailed role descriptions are useful; application flow and freshness information are missing. | Add active/talent-pool status, role IDs/dates, eligibility and a working private application path. Explain unfamiliar acronyms such as “CODO” or remove them if inappropriate. |
| `/contact` | Relevant enquiry intent and business hours, but conflicting numbers, generic location and broken form undermine trust. | Make verified contact channels prominent and route request buttons to the relevant working form instead of another informational page when possible. |
| `/news` | Six headlines and dates without article bodies/destinations. | Publish substantive verified updates or remove this section until ready. |
| `/resources` | Useful buyer-guide link, but copy exposes SEO strategy: “Linkable operational resources” and references to answer engines citing the site. | Suggested heading: “Plan your next manpower requirement.” Suggested body: “Use our guide to define disciplines, headcount, documentation and mobilisation dates before requesting a proposal.” |
| `/resources/gcc-industrial-manpower-guide` | Practical checklist topics and FAQs, but little authorship/freshness context and a duplicate canonical. | Add a subject-matter reviewer, reviewed date and a worked request example or downloadable checklist. Clearly separate general planning advice from site-specific requirements. |

## Build and lint

- **Build now passes:** The initial run failed because `src/routes/__root.tsx:137` used curly quotes as JSX attribute delimiters on the `og:image:alt` tag. A concurrent edit corrected these delimiters during the audit; the auditor preserved this edit and reran the build successfully, including prerendering and the OG injection step. The original failure log remains in `build.txt`; the successful subsequent run is in `build-recheck.txt`.
- **Initial lint failed:** 13,117 errors and 6 warnings. The report marks 13,116 errors potentially fixable; line-ending/Prettier complaints dominate. The original parse failure was the now-corrected root metadata tag. These are not 13,117 distinct business defects. Normalize line-ending policy and formatting deliberately, then rerun lint and inspect remaining warnings. The recorded count precedes the concurrent JSX fix and added audit scripts.
- **Environment:** Node 24.19.0 is installed, while the package requires Node 22.x. Repeat release validation on Node 22. Dependencies were installed from the lockfile; the install-generated lockfile change was restored. A concurrent application edit was preserved.
- Raw outputs: `build.txt` and `lint.txt`. Initial sandbox resolution failures were retried outside the sandbox before recording the application build failure.

## Recommended order and acceptance criteria

1. Keep the corrected JSX tag, validate the passing build on the declared Node 22 runtime, and resolve formatting policy and lint failures.
2. Restore working enquiry/application paths and verified contact details. Test valid/invalid submissions, attachments, delivery failure and successful receipt; require meaningful labels and actual required validation.
3. Optimize the first hero and defer later slides, then optimize other photographic assets. Repeat Lighthouse with the same settings on home/contact and key service routes. Proposed targets: performance at least 90, LCP at most 2.5 s, CLS at most 0.1 and TBT at most 200 ms in the agreed lab profile. Also establish real-user monitoring; lab TBT cannot replace field INP.
4. Ensure one canonical per page and consistent primary-domain sitemap/robots references; repeat the 27-page crawl.
5. Resolve news destinations, project/client evidence, recruitment freshness and privacy copy with their business owners.
6. Simplify repeated copy, improve dark-image text contrast and retest keyboard/mobile journeys.

For interpretation of the measured score and its variability, see [Chrome's Lighthouse scoring documentation](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring). No SEO ranking or performance improvement is guaranteed by the estimates in this audit.
