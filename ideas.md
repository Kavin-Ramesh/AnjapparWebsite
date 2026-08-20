# Anjappar San Diego — Design Direction

## Three stylistic approaches

### Parchment After Dark

**Very Brief Intro:** An editorial fine-dining composition built from warm parchment, midnight food photography, whisper-light display type, and a single saffron point of light. The feeling is intimate, worldly, and measured rather than ornate.

**Probability:** 0.06

### Spice Market Modernism

**Very Brief Intro:** A more graphic, daylight-forward direction using bold regional color blocks and hand-stamped illustration motifs. It would feel lively and contemporary, with an energetic market rhythm.

**Probability:** 0.03

### Coastal Chettinad Studio

**Very Brief Intro:** A sun-faded Californian treatment pairing blue-white ceramics, terracotta, and broad casual photography. It would frame the restaurant as an approachable all-day neighborhood destination.

**Probability:** 0.08

## Chosen approach — Parchment After Dark

### Design Movement

**Contemporary restaurant editorialism**, influenced by restrained fine-dining websites and vintage menu typography. The design uses page-like pacing and tonal shifts in place of app-like panels or conversion-heavy card grids.

### Core Principles

1. **Atmosphere before ornament:** warm, low-key restaurant imagery establishes a sense of place before text explains it.
2. **Typography as the hero:** light uppercase display serif creates the primary visual drama; a precise geometric sans gives utility content confidence.
3. **Printed-surface restraint:** flat color fields, sharp geometry, and one-pixel rules replace rounded containers, drop shadows, and decorative gradients.
4. **Purposeful pathing:** every spread guides a diner toward a relevant next action—menu, order, reservation, event inquiry, or contact—without interrupting the editorial pace.

### Color Philosophy

The predominant **parchment #d8cbb8** makes the content feel tactile, quiet, and hospitable, like a beautifully worn menu stock. **Onyx Warm #2c2c2c** and **Midnight Roast #292622** create the candlelit contrast required for image-led moments. **Saffron Glow #d49653** functions as a spice note: singular, memorable, and intentionally scarce. It will never be treated as an all-purpose CTA color.

### Layout Paradigm

The site is a sequence of **full-bleed editorial spreads**, not a centralized marketing stack. Wide photo moments open and punctuate the experience; parchment sections carry asymmetrical text columns, offset media, and long horizontal rules. The content begins on an image edge, then turns to a quiet page-like rhythm. On smaller screens the same reading order becomes a single, deliberate column without losing its sense of scale.

### Signature Elements

1. A monumental **ANJAPPAR** hero wordmark, paired with precise San Diego and Chettinad metadata.
2. Thin, warm-stone **editorial rules** that divide content like columns in a printed menu.
3. One signature **dish-name marquee**, set as a slow continuous typographic line rather than a decorative carousel.

### Interaction Philosophy

Interaction remains calm and physical: text links underline, outlined actions invert with restraint, photos sharpen gently under a pointer, and navigation shifts from transparent hero overlay to a reliable parchment surface while scrolling. The visual language never turns into a glossy interface layer.

### Animation

Hover and state transitions use 0.4s `cubic-bezier(0.25, 0.46, 0.45, 0.94)` motion, affecting only opacity and transform. The dish marquee moves linearly over 27 seconds. No parallax, bouncing, scrolling reveals, or loading choreography will be used. All decorative motion is reduced or removed for people who select reduced motion.

### Typography System

**Cormorant Garamond** is the web-available display stand-in for TT Ramillas Variable: uppercase, 300 weight, tightly tracked, and reserved for major section titles at 50–115px desktop scale. **Manrope** is the Satoshi stand-in: 500/700 weight, compact letter spacing, and used for labels, body copy, navigation, actions, data, and the singular oversized sans hero wordmark. Body copy remains 14–15px and left-aligned; display headings can become dramatic without becoming difficult to read.

### Brand Essence

**Anjappar San Diego brings the depth and heat of Chettinad cooking to a composed, all-occasion dining table in Mira Mesa.**

**Personality:** assured, intimate, generous.

### Brand Voice

Headlines are concise, sensory, and quietly declarative. Calls to action are specific and invitation-led, never generic. Microcopy favors useful clarity over hype.

> “CHEttinad, set at the table.”

> “Choose your feast. We’ll take care of the rest.”

### Wordmark & Logo

The wordmark will be a custom typographic lockup using the name **ANJAPPAR** in precise, high-contrast sans uppercase lettering with a compact ornamental **A** mark. The logo icon is a simple, text-free pepper-and-flame monogram inside a square frame, designed to remain recognizable at favicon size while retaining the brand’s food heritage.

### Signature Brand Color

**Saffron Glow — #d49653**. A single warm spice-orange used for select active elements, small markers, and rating symbols only.

## Style Decisions

- Apply the supplied parchment, onyx, warm-stone, and saffron tokens exactly across the site; no secondary chromatic accent is permitted.
- Retain sharp 0px content-card corners. Restrict 3px rounding to interactive buttons, tags, inputs, and the mobile menu control.
- Use no box shadows and no CSS gradients. Atmospheric depth comes from tonal shifts and dark photo treatment.
- Existing food photography may be used only in clearly labelled supporting roles. Prominent hero and transition photography must be visually coherent with the candlelit editorial direction.
- Do not fabricate reviews, ratings, prices, current promotions, or events. Any current-source review retained must keep its attribution.
- Compact header and footer lockups use the ornamental pepper-and-flame mark with a high-contrast custom ANJAPPAR wordmark, visually tied to the monumental hero identity rather than set as a generic utility logo.
- Menu, catering, and contact pages each receive a page-specific editorial cue: printed-menu folio numbering, a gathering-side rule, and an arrival-address cue respectively.
