# Forge — Your code. In production.

An interactive frontend portfolio project for a **fictional developer platform**. A fitted release board connects a Git commit to builds, tests, previews, and deployment diagnostics.

## Run locally

```sh
npm ci
npm run dev
```

Create and inspect the production build:

```sh
npm run build
npm run preview
```

## What you can try

- Run a browser-local deployment and watch four pipeline stages complete.
- Switch between production, staging, and preview environments.
- Inspect release history, failure details, logs, usage, and a restore demonstration.
- Explore six CLI commands with sample output and working clipboard controls.
- Switch between JavaScript, TypeScript, Python, HTTP, JSON, and cURL examples.
- Compare Free / Pro / Team sample plans and select a plan without signing up.
- Navigate FAQ answers, the mobile menu, and code tabs with a keyboard.

Forge is a portfolio concept. It has no hosted deployment service, published CLI or SDK, authentication, billing, or real customer metrics. Reserved `.example` domains make the code samples explicit examples. No demo interaction executes shell commands, sends credentials, or creates a subscription.

## Implementation

React 18, Vite 5, Tailwind CSS 3, Framer Motion, and Lucide icons. Switzer is self-hosted in `public/fonts`; see its source and license links there. The page makes no third-party font or image requests.

Active entry points:

```text
src/App.jsx                       Page shell and deployment state
src/forge.css                     Design tokens and responsive styles
src/components/ForgeUI.jsx         Mark, motion, tabs, clipboard, code panels
src/sections/ReleaseBoard.jsx      Hero and local deployment console
src/sections/Workspace.jsx         Workflow, environments, release history
src/sections/Developers.jsx        CLI, integrations, API, release notes
src/sections/Plans.jsx             Plan comparison and selection
src/sections/Questions.jsx         Accessible FAQ
```

The previous interface source remains in the repository for reference. It is not imported by the application. Tailwind scans only the active interface files, so previous utility classes do not inflate the production stylesheet.

`PRODUCT.md` records the product scope. `DESIGN.md` records the implemented design system. Internal direction notes live in `.impeccable/forge-brief.md` and are never imported into the client.

## Hosting

Vite supports both a domain root and the GitHub Pages repository subpath:

```sh
npm run build                # root path
PAGES=1 npm run build        # /forge-saas-landing/ (POSIX shells)
```

In PowerShell, use `$env:PAGES='1'; npm run build`. The GitHub Pages workflow sets `PAGES=1` automatically. Self-hosted fonts, the favicon, scripts, and styles are rewritten by Vite for the chosen base path.

Cloudflare static assets use the existing `wrangler.json`. No hosting account, environment secret, or production access setting is changed by this rebuild.

## Design and verification

The rebuild combines Taste Skill's well-kept board direction (seed `1932243523`), Impeccable's product and finish-review workflow, and UI UX Pro Max's interaction and accessibility guidance. The palette is putty, charcoal, and petrol teal; real HTML product fragments provide the visual evidence.

See `docs/verification.md` for the final checks and limitations. Screenshots and local inspection output are kept outside the shipping bundle.
