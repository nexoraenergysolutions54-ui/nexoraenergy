# Collaboration logos: implementation and handoff

**Superseded by the [approved logo sourcing update](approved-update.md): nine official logos are now configured and user display approval is recorded.** The one-logo counts, pending-approval statements and Lighthouse scores below document the earlier implementation.

12 September 2026. Local implementation only; not deployed. **1 official logo implemented; 26 temporary name placeholders remain.** The requested all-27-logo collection is not complete. Identity questions were sent to the client; no answers have yet been received. The brief explicitly permits placeholders while confirmation/assets are unavailable.

## Files

- Added `src/components/CollaborationsPreview.tsx`: shared-data Home preview.
- Added `public/images/collaborations/acciona.webp`: official RGB logo optimized from the press-kit PNG.
- Updated `src/lib/collaborations.ts`: 27 stable IDs in supplied order, names, accurate alt text, optional local logo and intrinsic dimensions, verification status, official source, explicit display order, separate permission status.
- Updated `src/components/CollaborationLogoTile.tsx`: fixed slots, original colours, intrinsic image dimensions, eager/lazy loading, quiet name fallback; removed grayscale, hover-to-colour and internal-status tooltip.
- Updated `src/components/CollaborationsGrid.tsx`: complete static responsive About grid.
- Updated only the collaboration import/component in `src/routes/index.tsx`.
- Updated only the collaboration section's scroll margin in `src/routes/about.tsx`, fixing overlap with the desktop sticky header.
- Removed `src/components/CollaborationsMarquee.tsx` after checking its consumers. No third-party asset files were deleted. Existing unused global marquee utilities were left untouched to avoid unrelated stylesheet changes.
- Added this report, the [complete 27-organization verification table](verification.md), reproducible browser/data checks in `verify.mjs`, source review image, screenshots and verification logs under `audits/collaboration-logos/`.

No dependency, header, footer, form, service, route definition, sitemap, canonical or structured-data change was made for this phase. Other workspace changes predate this task and were preserved.

## Names, sources and permission

The verification table records every supplied name, proposed official identity, official source, file availability, type, status and next action. Public display names preserve all 27 client-supplied spellings, including QatarEnergy and QatarEnergy LNG. Unresolved abbreviations/spellings were not expanded or corrected on the site.

**Implemented artwork: ACCIONA**, including its supplied Business as Unusual lockup. Source: [ACCIONA official press-kit page](https://www.acciona.com/updates), linking to [official downloadable ZIP](https://www.acciona.com/content/dam/accionacom/media/q3kag2eh/press-kit-acciona.zip). Archive entry: `Press kit ACCIONA/LOGOS/Logos BAU/Version color/RGB/Logo Acciona RGB.png`.

The source is a 2953 x 1535 transparent RGB PNG, 114,654 bytes. It was visually inspected on white, resized proportionally to 720 x 374 and encoded as lossless WebP (22,932 bytes). Artwork, colours, transparency and margins are preserved; no tracing, cropping, filters, screenshot source or generative process. No SVG was imported, so SVG sanitization is not applicable. No suitable SVG appeared in this kit.

Source PNG SHA-256: `2ddc2c0b73c30cef9419a620b76e7dabe4baa84d46790461aab7f0080be97a39`.
Delivered WebP SHA-256: `0ab2046cb8ea226cf71af94b4a54f9ca76d143add84bbc51860ac28f3574690c`.

`verified` means source/artwork checks passed; it does **not** grant a trademark licence. All entries carry `permission: "awaiting-client-approval"`. ACCIONA is included for local visual review. Before publication, the client must approve its exact asset and confirm permission to display it in this collaboration context, as required by the brief. The same applies to each later supplied asset. No company was contacted and no permission was claimed on the client's behalf.

**Identity confirmation required:** NOC; Saleh Al Hamad Al Mana Co.; Mowasalat/Karwa; GWC; Manatec/Manateq; CCC; Technip; L&T; HBK Engineering; Tadmur; Al Darwish; Gulfar; Q-Chem; GDI; GE. GWC and Q-Chem were additionally flagged because searches exposed unrelated organizations with downloadable logos. None of those unrelated logos was used.

**Identity supported, approved asset still required:** QatarEnergy; QatarEnergy LNG; QAFAC; QAFCO; Milaha; Mannai Corporation; ABB; Al Balagh; QAPCO; Qatalum; DOPET. DOPET's own site confirms Doha Petroleum Construction Co. Ltd. and the uppercase abbreviation. Qatalum has an official brand download centre, but its download access was blocked by a site challenge. ABB's brand portal requires registered access. Other official pages reviewed did not provide a suitable verified downloadable logo; site-header artwork was not scraped. All 26 placeholders need approved files after any relevant identity clarification.

## Layout and accessibility

Home shows the first 12 entries from the shared dataset: two columns on mobile, three on tablet, six on desktop (two desktop rows). A descriptive internal link opens `/about#collaborations`. About renders all 27 once: two mobile, three tablet, four standard-desktop and six wide-desktop columns. Both use the exact approved heading and supporting sentences.

Slots are 96 CSS pixels high, white, with generous spacing and no large card borders. Original artwork uses natural proportions with `object-fit: contain`, maximum width and height. Names remain ordinary readable text while assets are pending. No organization links, badges, descriptions, relationship labels or technical statuses appear in the collection.

Each list contains one semantic copy per displayed organization. Meaningful image alt text is `ACCIONA logo`; placeholders announce the supplied name. No cloned tracks, hidden SEO list, new button roles or hover dependency. The internal collection link has visible focus styling. Both collections remain static regardless of reduced-motion preference; no animation library was added.

## Verification

- All 27 supplied organizations occur once in the dataset, with unique IDs/names and consecutive order; Home/About consume it directly.
- 16 production-browser route checks at 320, 375, 390, 430, 768, 1024, 1440 and 1920 px passed, including natural image dimensions/loading, correct names, column counts, original colours, no duplicates, no horizontal overflow and zero recorded CLS.
- Reduced-motion and the Home-to-About anchor link passed. The viewport-halving/high-density layout used to approximate 200% zoom passed; native browser-toolbar zoom and real mobile hardware were not exercised.
- About anchor clears the actual header: approximately 121-123 px offset versus 73 px header on mobile, and 156 px versus 110 px on desktop. The previous 96 px scroll margin was insufficient on desktop; the new responsive margin fixes it.
- Eight existing splash tests passed. The audit browser script additionally validates dataset integrity and logo rendering; no new application test dependency or package script was introduced.
- TypeScript passed. Lint passed with zero errors and six pre-existing Fast Refresh warnings in UI primitives. Final Node 22 production build and prerender/OG injection passed.
- No collaboration relationship/schema entry, page, sitemap entry, external image URL or footer logo collection was introduced. Existing generic references to clients elsewhere in site content remain outside this collection and outside this task's scope.

Screenshots: [Home mobile](home-390.png), [Home desktop](home-1440.png), [About mobile](about-390.png), [About desktop](about-1440.png). Existing floating site controls may appear in full-section captures; they were not modified.

## Performance

One new local logo URL is reused between Home and About: **22,932 encoded bytes**, approximately **23,232 transferred bytes including local response headers** in the browser measurement. No third-party image request, base64 bundle, duplicate image track, extra font or animation library. The original 23.9 MB media ZIP is not served by the website. Home loads its one logo eagerly; About loads below-fold logos lazily. Fixed slots prevent shifts during loading. Deployment cache headers were not changed, so cache duration follows the existing hosting configuration.

Mobile Lighthouse results are recorded alongside this report. These are single local lab samples, not field measurements or a controlled before/after comparison. The intentional first-entry site splash remains part of the measured page.

| Local mobile page | Performance | Accessibility | Best practices | SEO | LCP | TBT | CLS |
|---|---:|---:|---:|---:|---:|---:|---:|
| [Home](home-mobile.report.html) | 87 | 100 | 100 | 92 | 3.6 s | 0 ms | 0 |
| [About](about-mobile.report.html) | 87 | 100 | 100 | 100 | 3.6 s | 0 ms | 0 |

Home's remaining SEO finding is existing generic link text outside this section. Lighthouse also reports existing unused JavaScript and caching/network opportunities. These were not changed in this focused phase. The About report was successfully written with no report runtime error; the CLI subsequently returned an EPERM error while removing its temporary Chrome profile on Windows. This cleanup error does not represent a website test failure and the saved metrics remain available. No extra permission or licence has been granted by these tests.
