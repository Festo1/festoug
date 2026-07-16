---
name: FestoUG
description: Dark, machined portfolio-platform design system — violetDark executed at studio craft level.
colors:
  smoky-black: "#09090B"
  eerie-black-1: "#18181B"
  eerie-black-2: "#161618"
  onyx: "#1F1F23"
  jet: "#27272A"
  violet-signal: "#7F22FE"
  violet-soft: "#A855F7"
  emerald-steady: "#10B981"
  amber-ember: "#F59E0B"
  light-gray: "#D6D6D6"
  white-1: "#FFFFFF"
  vegas-gold: "#CDA254"
typography:
  display:
    fontFamily: "Space Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 5vw, 3.5rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.25
  body:
    fontFamily: "IBM Plex Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.08em"
rounded:
  sm: "6px"
  md: "8px"
  lg: "10px"
  xl: "14px"
  pill: "99px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "40px"
components:
  card:
    backgroundColor: "{colors.eerie-black-1}"
    textColor: "{colors.light-gray}"
    rounded: "{rounded.xl}"
    padding: "20px"
  button-primary:
    backgroundColor: "{colors.violet-signal}"
    textColor: "{colors.white-1}"
    rounded: "{rounded.lg}"
    padding: "8px 16px"
  chip:
    backgroundColor: "{colors.onyx}"
    textColor: "{colors.light-gray}"
    rounded: "{rounded.pill}"
    padding: "4px 12px"
---

# Design System: FestoUG

## 1. Overview

**Creative North Star: "The Engineer's Studio"**

A calm, dark workshop where everything is deliberately placed and precisely machined. The canvas is near-black charcoal, surfaces step up in tone like benches under task lighting, and violet is the single energized tool-light in the room — the color of the thing currently being worked on. The system sells reliability through restraint: a visitor should feel that the person who built this ships polished, dependable product, because the site itself is the work sample.

This system explicitly rejects the unmodified-template look (stock shadcn tokens, system fonts), mismatched sub-surfaces (auth pages in foreign blues), loud SaaS grammar (gradient text, hero metrics, identical icon-card grids, eyebrow labels above every section), and credibility-undermining clichés like self-rated skill percentage bars.

**Key Characteristics:**
- Dark-first tonal canvas with a light theme that mirrors it faithfully
- One violet signal accent; emerald/amber only as categorical support
- Geometric display type (Space Grotesk / Archivo) over quiet IBM Plex body
- Machined, quiet components: crisp 1px borders, restrained radii, instant precise feedback
- Engineered motion: exponential ease-out, no bounce, reduced-motion always honored

## 2. Colors

A committed dark neutral ramp carrying one violet signal, with two supporting accents used categorically, never decoratively.

### Primary
- **Violet Signal** (#7F22FE): The active element — primary buttons, nav active state, links, focus rings, the AI assistant. Rare enough to always mean "this is live". Light theme uses #7C21F7.

### Secondary
- **Emerald Steady** (#10B981): Success, uptime, infrastructure/server categories.
- **Amber Ember** (#F59E0B): Warm highlights and tertiary category marking. Vegas Gold (#CDA254) survives only in legacy testimonial stars.

### Neutral
- **Smoky Black** (#09090B): The page canvas. Everything sits on this.
- **Eerie Black** (#18181B / #161618): Card and sidebar surfaces — the first tonal step up.
- **Onyx** (#1F1F23): Raised interactive surfaces, chips, input fills.
- **Jet** (#27272A): The 1px border color that draws every machine edge.
- **Light Gray** (#D6D6D6): Body text on dark. **White** (#FFFFFF) for headings only.

### Named Rules
**The Tool-Light Rule.** Violet appears on at most ~10% of any screen. If two unrelated elements glow violet at once, one of them is wrong.
**The No-Foreign-Blue Rule.** No surface — auth, store, dashboard, admin — introduces colors outside this palette. Blue is banned outright.

## 3. Typography

**Display Font:** Space Grotesk (fallback: ui-sans-serif)
**Headline Font:** Archivo (fallback: ui-sans-serif)
**Body Font:** IBM Plex Sans (fallback: ui-sans-serif); Inter serves UI chrome
**Label/Mono Font:** IBM Plex Mono

**Character:** Geometric-technical display over a plainspoken engineering body — the voice of precise documentation, not a marketing deck.

### Hierarchy
- **Display** (600, clamp(2rem, 5vw, 3.5rem), 1.1, -0.02em): Page titles and hero statements only.
- **Headline** (Archivo 700, 1.5rem, 1.25): Section headings.
- **Title** (Archivo 600, 1.125rem, 1.3): Card titles, list items.
- **Body** (IBM Plex Sans 400, 1rem, 1.65): All prose; max 70ch line length. Light-on-dark body keeps the taller 1.65 line-height deliberately.
- **Label** (IBM Plex Mono 500, 0.75rem, +0.08em): Metadata, dates, category tags. Mono is earned here — this is genuinely a technical portfolio.

### Named Rules
**The Two-Voice Rule.** Display/headline speak in Space Grotesk/Archivo; everything else stays IBM Plex. Never a third voice per page.

## 4. Elevation

Depth comes from tonal layering, not shadows: smoky-black canvas → eerie-black surfaces → onyx raised elements, each edge drawn with a 1px jet border. Shadows are near-invisible on the dark canvas and are not load-bearing. The only luminous depth is a rare accent glow (`drop-shadow(0 0 9px currentColor)`) on interactive hover — the tool-light catching an edge. Light theme mirrors the same ramp downward from white and may use its existing whisper-soft ambient shadow (`0 1px 3px rgba(0,0,0,0.08)`).

### Named Rules
**The Flat-At-Rest Rule.** Surfaces are flat at rest. Glow and lift are responses to state (hover, focus), never decoration.

## 5. Components

### Buttons
- **Shape:** Machined corners (10px radius), 1px border, crisp edges.
- **Primary:** Violet Signal fill (#7F22FE), white text, 8px 16px padding.
- **Hover / Focus:** Instant precise feedback — background shifts one tonal step, `focus-visible` ring in violet at 50% alpha. Nothing bounces; everything settles (150–300ms, `cubic-bezier(0.22, 1, 0.36, 1)`).
- **Outline / Ghost:** Jet border on transparent; hover fills to onyx.

### Chips
- **Style:** Onyx fill, light-gray text, pill radius (99px), mono label typography.
- **State:** Selected chips take a violet border + violet text, never a filled violet body.

### Cards / Containers
- **Corner Style:** 14px radius.
- **Background:** Eerie Black (#18181B).
- **Shadow Strategy:** None at rest (see Elevation); border-color shift on hover.
- **Border:** Always 1px Jet (#27272A).
- **Internal Padding:** 20–24px.

### Inputs / Fields
- **Style:** Onyx fill, 1px jet border, 10px radius.
- **Focus:** Border shifts to violet + 3px violet/50 ring; no glow blur.
- **Error:** Destructive red border + ring, message below in body size.

### Navigation
- **Style:** Fixed left profile sidebar (eerie-black surface) + top pill nav; mono labels.
- **States:** Active item = violet text with violet indicator; hover = onyx fill. Mobile collapses to a bottom pill bar with ≥44px targets.

### Skill Flip Cards (signature)
3D flip cards with per-tier back faces (gold/emerald/blue glow ramps), 14px radius, staggered deal-in entrance at 100ms intervals.

## 6. Do's and Don'ts

### Do:
- **Do** draw every surface edge with a 1px Jet (#27272A) border on dark; tonal steps carry depth.
- **Do** ease all motion with `cubic-bezier(0.22, 1, 0.36, 1)` (ease-out-quint family), 150–650ms; ship a `prefers-reduced-motion` alternative for every animation.
- **Do** keep body text ≥4.5:1 contrast in both themes (#D6D6D6 on #09090B passes; audit any lighter gray).
- **Do** reserve violet for the single active/interactive signal per view (the Tool-Light Rule).
- **Do** write copy in first person — "I build…", never "Festo brings…".

### Don't:
- **Don't** introduce foreign blues or any off-palette color on auth, store, or admin surfaces — "mismatched sub-surfaces" is a named anti-reference.
- **Don't** ship the unmodified-template look: stock shadcn tokens, system-font stacks, or generic same-sized icon-card grids.
- **Don't** use gradient text, hero-metric blocks, side-stripe borders, or uppercase tracked eyebrows above every section — "loud SaaS landing-page grammar" is banned.
- **Don't** use self-rated percentage bars or rings for skills; show verifiable substance (real projects, categorized skill chips) instead.
- **Don't** let third-party embeds break the dark canvas — every embed gets a themed loading state (no blank map boxes).
- **Don't** bounce, elastic-overshoot, or animate layout properties; transform/opacity (plus purposeful blur/clip-path) only.
