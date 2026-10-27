# Forge rebuild verification

Verified on 2026-10-27 against the production build in local Chromium on Windows.

## Results

| Check | Result |
| --- | --- |
| Root-path production build | Passed (`npm run build`) |
| GitHub Pages subpath build | Passed (`PAGES=1`, `/forge-saas-landing/`) |
| Subpath browser load | Passed; no missing scripts, styles, fonts, favicon, or JavaScript exceptions |
| Browser interaction checks | 40 passed |
| Responsive design inspector | 0 FAIL, 6 WARN at 1440, 768, 390px |
| Taste source lint | 0 FAIL, 0 WARN |
| Impeccable mechanical detector | No findings in changed interface sources |
| Runtime dependency audit | 0 production dependency vulnerabilities reported by `npm audit --omit=dev` |
| Diff whitespace check | Passed |

The original rendered page recorded 15 inspector FAIL findings. Its hero used three lines at 390px. The rebuilt hero uses two lines at 1440, 768, and 390px. The final page has no measured horizontal overflow at 320, 375, 390, 768, 1024, 1280, and 1440px.

## Interaction coverage

The browser checks exercised the four-stage deployment, busy/complete states, synchronized environment selection, release selection, correct restore identity, inspecting another release without undoing restoration, failed-release diagnostics, in-progress logs that do not claim success, and a new completed deployment replacing a restored release.

They also covered all six CLI commands, integration language switching, all four API examples, clipboard copying, arrow-key tab activation and focus, plan selection with honest demo feedback, FAQ expansion and single-open behavior, anchor destinations, mobile-menu opening and Escape/focus restoration, self-hosted font loading, and visible content under reduced motion. No uncaught JavaScript exceptions were observed.

## Visual review

Taste direction: **The well-kept board**, seed `1932243523`; Switzer and a putty/charcoal/petrol palette. Impeccable direction reference: `seed:abbef12d355bd626`. Design selection and implementation were explicitly delegated by the user. This was a code-led build, with no approved raster comp or pixel-fidelity claim.

On this page, Forge's commit-to-release journey becomes a fitted release board. Its live interaction is a browser-local deployment, with contextual release inspection rather than fabricated customer proof.

An independent Impeccable reviewer reviewed desktop/mobile/reduced-motion captures and the source, requested two material fixes (release-state coherence and mobile operational type), and subsequently scored both **resolved**, with disposition **ship for those fixes**. This verdict is scoped to the listed fixes, rather than an unqualified audit of every possible defect.

Every final inspector screenshot was opened for visual review. Local evidence is in `.taste-skill/final/` and `.impeccable/review/` (gitignored). The release workspace and code samples remain legible after increasing mobile operational controls to at least 12px and code/title details to 13px.

## Inspector warnings retained deliberately

- Repeated filled rows are plan comparisons and release notes; they contain different real information rather than icon-topped feature cards.
- The warm stone surfaces implement the dealt putty palette; no cream-and-terracotta combination is used.
- The size counter combines the marketing page, dense product interfaces, code, and a large closing wordmark. Each context has a separate, purposeful hierarchy.
- There are no stock photographs or footage. Six meaningful HTML product fragments demonstrate this fictional software more honestly than unrelated photography would.
- Multiple alignment anchors follow the fitted board and inset application surfaces. Each page section still shares equal outer margins.

The source linter's only allowances are documented beside the exact rules: monospace for literal code, a shadow on the floating mobile menu, and quiet borders in the `data-ui` application sheet, tabs, and release table.

## Critique

ROUND 2

Seen in one second: the large code-to-production statement and its working deployment console.

Idea: the commit becomes the organizing unit of a release board.

Live thing: run a deployment, inspect its release context, and restore a historical successful release.

Layout words by section: hero=fitted-board / workflow=growing-tiles / workspace=application-sheet / developers=terminal-and-code / pricing=comparison / FAQ=filled-accordion / close=colour-field / footer=wordmark.

Scores (builder's subjective critique): design 7.5 · usability 8.0 · creativity 7.0 · content 8.0 → overall 7.6. Product-interface fragments satisfy this software brief's imagery role; there is no photography-based quality claim. These are editorial scores, not external ratings.

Top three problems from the first review and their disposition:

1. Release restore state did not follow the selected identity → resolved with separate active/inspected identities and release-specific logs.
2. Mobile operational text was too small → resolved with 12–13px minimums and wrapping.
3. Generic source-lint heuristics classified legitimate code/table/menu rules → exact, documented contextual allowances; rendered inspector has no FAIL findings.

## Content and verification limits

Forge, deployment data, release notes, plan prices ($0/$12/$29), API endpoints, and SDK examples are fictional portfolio content. No customer quotes, client logos, service uptime claims, or commercial benchmarks were added. There are no sourced or generated raster images requiring credits; font sources and license information are in `public/fonts/README.md`.

Checked locally in Chromium; no claim of Safari, Firefox, real assistive-technology testing, or live cloud-service validation. Browser checks are task-local scripts using installed skill tooling, rather than a portable committed test suite. The existing project dependency versions were retained. Production publication remains a separate repository deployment step.
