---
name: Forge
description: A fitted release board for an interactive developer platform showcase.
colors:
  ground: "#dedad3"
  surface: "#ebe8e2"
  surface-deep: "#d3cec6"
  paper: "#f6f4ef"
  ink: "#202522"
  muted: "#50554e"
  accent: "#256f82"
  accent-hover: "#1c5969"
  on-accent: "#fff"
  dark: "#202b29"
  dark-raised: "#2d3835"
  dark-ink: "#f0f2e9"
  dark-muted: "#bac8c2"
  success: "#336c52"
  success-light: "#a5d0b7"
  failure: "#a7372f"
  rule: "#dcded8"
typography:
  display:
    fontFamily: "Switzer, sans-serif"
    fontSize: "clamp(54px, 7.4vw, 108px)"
    fontWeight: 500
    lineHeight: 0.99
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Switzer, sans-serif"
    fontSize: "clamp(34px, 4.3vw, 64px)"
    fontWeight: 500
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Switzer, sans-serif"
    fontSize: "28px"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Switzer, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Switzer, sans-serif"
    fontSize: "13px"
    fontWeight: 400
  code:
    fontFamily: '"Courier New", monospace'
    fontSize: "14px"
    lineHeight: 1.85
rounded:
  square: "0px"
  sheet: "14px"
  sheet-compact: "10px"
  status: "50%"
spacing:
  seam: "8px"
  compact: "12px"
  small: "16px"
  content: "24px"
  panel: "26px"
  frame: "32px"
  gutter: "clamp(18px, 3.4vw, 52px)"
  section: "140px"
components:
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.square}"
    padding: "15px 22px"
  button-dark-hover:
    backgroundColor: "{colors.dark-raised}"
  button-light:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "15px 22px"
  button-light-hover:
    backgroundColor: "{colors.ground}"
  button-teal:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.square}"
    padding: "15px 22px"
  button-teal-hover:
    backgroundColor: "{colors.accent-hover}"
  environment-select:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    padding: "0px 10px"
  environment-label:
    backgroundColor: "{colors.dark-raised}"
    textColor: "{colors.dark-ink}"
    padding: "6px 10px"
  workspace-sheet:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sheet}"
    padding: "25px"
  faq-open:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
---

# Design System: Forge

## Overview

**Creative North Star: "The well-kept release board"**

Forge presents a developer workflow as fitted working cells: warm putty surrounds quiet paper surfaces, charcoal consoles, and purposeful petrol actions. Large plainspoken type gives the page confidence; compact interface details supply the evidence.

The system treats the product demonstration as real interface work. A tinted frame holds an inset application sheet, with readable release records, visible control states, and honest local feedback. Typography and authored SVG carry the identity; no raster imagery is needed.

**Key Characteristics:**
- Warm neutral fields and charcoal working panels.
- Square page cells with narrow seams.
- One self-hosted sans family, with monospace confined to literal code.
- An inset rounded application sheet inside a square frame.
- Visible, keyboard-operable product evidence.

## Colors

The palette combines warm mineral neutrals, green-leaning charcoal, and a restrained petrol accent. Frontmatter values reflect the active cascade in `src/forge.css`, including the final muted-text override.

### Primary
- **Petrol:** `accent` carries deployment actions, selected FAQ panels, the emphasized plan, active application tab rules, and the closing field; `accent-hover` deepens interactive states. `on-accent` provides text on these filled fields.

### Secondary
- **Release green:** `success` identifies readiness on light surfaces; `success-light` supplies status marks and interface focus on charcoal.
- **Failure red:** `failure` marks failed release states, accompanied by a text label.

### Neutral
- **Putty:** `ground` is the continuous page and selected neutral-control field. `surface` forms filled cells, `surface-deep` frames the app, and `paper` is the clean working sheet.
- **Working charcoal:** `dark` holds consoles; `dark-raised` separates toolbars and raised tonal regions. `dark-ink` and `dark-muted` support their text hierarchy.
- **Text and rule:** `ink` carries primary copy, `muted` carries supporting copy, and `rule` separates native application rows and tabs.

**The Working Color Rule.** Accent and status colors identify actions, selected content, or release state; maintain text or icon cues alongside status color.

## Typography

**Display Font:** Switzer, with sans-serif fallback.
**Body Font:** Switzer, self-hosted in regular, medium, and semibold weights.
**Label/Mono Font:** Courier New, with monospace fallback, for literal code and commit fragments.

**Character:** Switzer is compact, direct, and quietly technical. Tight balanced headlines sit above natural sentence-case copy; interface labels remain plain rather than decorative.

### Hierarchy
- **Display:** The frontmatter display role is the desktop hero. It becomes viewport-sized at intermediate widths, then a compact clamp (`40–55px`, line-height `1.02`) at the small breakpoint. Above the wide breakpoint it reaches `116px`.
- **Headline:** The fluid headline role introduces major sections. Tablet intros use `42px`; small intros use `40px`, with the FAQ using `36px`.
- **Title:** The base title role supports components; observed section variants range from `19px` changelog titles to `32px` CLI and plan headings.
- **Body:** Base copy uses the body role. Hero descriptions use `18px` with `1.55` leading and a `43ch` measure; compact copy generally uses `16px`.
- **Label:** The label role supports toolbar, environment, metadata, and disclosure text. Dense application rows use `12px`; mobile code panels use `13px` after the final overrides.
- **Code:** Literal code uses the code role with tabular numerals, preserved line breaks, wrapping, and no horizontal overflow requirement.

**The One Reading Voice Rule.** Use Switzer for interface and editorial text; reserve monospace for literal code, commands, and identifiers.

## Layout

The page uses fitted filled cells and an eight-pixel seam. The entry and developer boards use twelve columns; the desktop hero spans seven columns beside a five-column console. The workflow uses a stepped `3fr 4fr 5fr` arrangement. Pricing aligns a label column with three plans; the FAQ pairs a narrow introduction with a broad answer list.

The normative gutter and section spacing are desktop defaults. At `1100px` and below they become `28px` and `110px`; at `800px`, `24px` and `96px`; at `520px`, `18px` and `80px`. Above `1600px`, principal containers cap at `1536px` and center.

At `800px` the hero occupies a full row, the workspace sidebar disappears, developer examples stack, the FAQ becomes one column, and mobile navigation replaces the desktop links. At `520px` the deployment console becomes full width, workflow and pricing become vertical, plan feature names appear inside each plan, and the closing field stacks. Preserve readable interface rows rather than shrinking a desktop screenshot. Mobile application headers and release metadata wrap; release timestamps are hidden below `1100px`.

**The Fitted Field Rule.** Separate page content with filled tonal fields and narrow seams; reserve fine rules for native application data and tabs.

## Elevation & Depth

Depth comes primarily from tonal nesting: putty ground, tinted frame, then paper sheet. Marketing cells and product panels have no resting card shadows. The floating mobile menu alone uses a soft overlay shadow (`0 18px 35px #20252225`).

Content reveals translate twenty-two pixels into place over `0.8s` using the shared easing curve. The entry console has a shutter reveal; command output moves five pixels over `0.3s`. Text stays present while motion runs. Reduced-motion preferences disable CSS animation and transitions and bypass the reveal translation.

**The Tonal Depth Rule.** Build permanent hierarchy with adjacent tones; use a shadow for the floating menu overlay.

## Shapes

Page cells, buttons, plan panels, and code blocks are square. The inset application sheet is the deliberate rounded exception, using the sheet radius, then its compact radius below `800px`. Status dots and pipeline stage markers are circular. The authored Forge mark uses filled rectilinear SVG geometry; functional icons use stroke SVGs.

## Components

### Buttons

Confident square actions pair a short label with an optional SVG arrow. Standard buttons have a `54px` minimum height, medium `15px` text, and a generous label-to-icon gap. Dark, light, and petrol variants are defined in frontmatter. Hover lifts two pixels; active presses down one pixel. Disabled controls reduce opacity to `0.6` and remove the pointer cursor.

Focus uses a three-pixel petrol outline with five-pixel offset. Buttons inside product-interface regions use release-green light outlines. Do not remove visible focus when reproducing the square form.

### Chips

Environment labels are square filled metadata tags. Command selectors are compact plain-text buttons whose selected or hovered state uses a darker charcoal fill and brighter text; selection also has `aria-pressed`.

### Cards / Containers

Marketing cells rely on background fill, with common internal spacing from the content, panel, and frame steps. The workspace nests a paper sheet with a fine native rule border. Release rows use fine separators, neutral hover and selected fills, a commit/branch hierarchy, and text-backed readiness states. Plan selection adds a three-pixel inset ink outline and updates the button label and status message.

### Inputs / Fields

The implemented field is a native environment select in a filled neutral wrapper. Its custom SVG chevron is noninteractive; keyboard and native selection behavior remain available. It wraps with the workspace heading on small screens. No general text-input or validation-error visual has been established.

### Navigation

The desktop header is a spacious single row with compact sentence-case links. Hover uses petrol text. Mobile uses a square menu trigger and a paper floating list with generous rows; Escape closes it and restores trigger focus. Tabs expose selected state and support ArrowLeft, ArrowRight, Home, and End. Workspace tabs use a petrol underline over a fine separator; developer tabs use charcoal tonal selection.

### Deployment console and code panels

The signature console presents four vertically connected stages with circular status markers, durations, and a full-width action. Pending, running, and ready states combine icon, label, color, and local live announcements. A deployment is an explicitly labeled browser-local demonstration.

Code panels use charcoal fields and compact toolbars. Copy controls switch to a check and “Copied”; clipboard failures produce a text fallback. The sample terminal exposes six command outputs through pressed-state selectors. API and integration examples use accessible tabs.

### Questions

Square neutral answer rows become petrol when expanded. A plus/minus SVG accompanies `aria-expanded`; only one answer opens at a time. Answers use generous body leading, with the question remaining an actionable full-width row.

## Do's and Don'ts

### Do:
- **Do** preserve fitted tonal cells, narrow seams, and generous section intervals.
- **Do** use the inset sheet as the rounded application exception.
- **Do** keep status labels, visible focus, keyboard controls, and reduced-motion support.
- **Do** reflow real interface content into readable mobile rows.
- **Do** label illustrative deployments, code, and plans honestly.

### Don't:
- **Don't** introduce a different display family into the established Switzer system.
- **Don't** apply resting shadows or rounded card styling across the square page cells.
- **Don't** replace operative product fragments with decorative raster screenshots.
- **Don't** reuse historical `src/index.css` tokens; `src/main.jsx` imports `src/forge.css`.

Not canonized: unused historical styles and original components are preserved outside the active entry graph; they are not evidence for this system. No craft-floor defect is promoted into a reusable rule.
