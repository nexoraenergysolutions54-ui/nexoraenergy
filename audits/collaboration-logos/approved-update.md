# Approved logo sourcing update

The user approved logo display and instructed us to find and add official assets. Permission is now recorded as `approved` for all 27 entries. Approval does not resolve which company is intended where the supplied name has multiple possible identities; those questions remain open.

## Implemented

Nine real logos are configured: **QatarEnergy, QatarEnergy LNG, QAFAC, QAFCO, Milaha, Mannai Corporation, ACCIONA, ABB and DOPET**. Home displays seven within its existing first-12 preview; About displays all nine within the complete 27-entry grid. Every other name remains once as a temporary placeholder.

Eight assets were added to `public/images/collaborations/`: `qatarenergy.webp`, `qatarenergy-lng.webp`, `qafac.webp`, `qafco.webp`, `milaha.svg`, `mannai.webp`, `abb.svg`, `dopet.webp`. ACCIONA's existing approved file remains. Updated `src/lib/collaborations.ts` with paths, dimensions, verification status and approval. Updated the shared tile's image box to provide consistent visual sizing with `object-fit: contain`. No routes, page wording, schema, header or footer were changed.

The [source manifest](installed-approved.json) records each newly added asset's exact official URL, dimensions, file size and SHA-256. ACCIONA's original press-kit provenance remains in the [earlier report](README.md). The user's approval supplies the permission basis for these official-site assets; independent trademark licences were not obtained or claimed.

Milaha's SVG contains only groups and paths; ABB's contains paths, a group and a local mask reference. Both were read and visually inspected, and checked for scripts, event handlers, external references and embedded content. Official geometry, viewBox and colours remain intact. Raster conversions preserve artwork and transparency without upscaling or cropping. QatarEnergy's current artwork is verified visually despite the official URL retaining the historical filename `QP logo vertical-big.jpg`.

QatarEnergy LNG's current official header asset is a 110 x 130 JPEG served under a `.png` filename. It supports the roughly 54 x 64 CSS-pixel artwork size at about 2x density; higher-density displays would benefit from a larger client-supplied original. No historic Qatargas artwork is used. Mannai's initially discovered icon was rejected in favour of its official full wordmark.

## Remaining 18 placeholders

- **15 identities need confirmation:** NOC, Saleh Al Hamad Al Mana Co., Mowasalat/Karwa, GWC, Manatec/Manateq, CCC, Technip, L&T, HBK Engineering, Tadmur, Al Darwish, Gulfar, Q-Chem, GDI and GE. See the [identity table](verification.md) for candidate names and official evidence. No candidate was silently substituted.
- **Three asset issues:** Al Balagh's available files are too small or use white lettering that is unsuitable for the neutral slots; QAPCO's official supplier portal points to a logo URL returning 404 and its main site presents a JavaScript challenge; Qatalum's brand downloads remain behind a site challenge. No aggregator image, screenshot or invented logo was substituted.

## Verification and performance

The new collection totals **153,197 bytes (149.6 KiB)** of local logo files, including ACCIONA. Home requests only the seven preview assets; About can reuse those URLs and lazily load the remaining images. The network overhead is measured in the updated browser-results file. There are no external image requests or duplicated marquee tracks.

The existing responsive static layout, semantic lists, accurate logo alt text, reduced-motion behaviour and About anchor are retained. The audit now explicitly asserts that nine logos are configured, all 27 entries have approval, IDs are unique, and actual image counts match the dataset. Screenshots are refreshed after the production build. Earlier Lighthouse reports describe the previous one-logo state and must not be treated as fresh scores for this update.

Final results: production build and TypeScript passed; lint has zero errors and six existing UI Fast Refresh warnings; eight existing unit tests passed. All 16 responsive browser checks passed at 320-1920 px, with seven actual Home images and nine actual About images, no horizontal overflow, zero recorded layout shift, and working reduced-motion/anchor behavior. Encoded logo response bodies measured 120,500 bytes on Home and 150,297 on About (SVG transfer compression accounts for the difference from file sizes). A Windows line-ending issue in the importer was caught during screenshot review and fixed before these final checks.

Reviewed final screenshots: [Home desktop](home-1440.png), [Home mobile](home-390.png), [About desktop](about-1440.png), [About mobile](about-390.png). Local preview: http://127.0.0.1:4180 . Not deployed.
