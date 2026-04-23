# ClickWave Army — Website UI Kit

Pixel-directional recreation of `clickwavearmy.com` as a modular React/JSX kit.

**Source of truth:** `audit/*.jpeg` (live-site screenshots) + `02-design-system.md` (formal tokens) from the `clickwaveGG/clickwavearmy-redesign` repo. No production codebase was attached, so component implementations are cosmetic reconstructions, not ports.

## Components

| File | Purpose |
|---|---|
| `NavPill.jsx` | Top glass pill nav with mark + wordmark + links + orange login CTA |
| `Hero.jsx` | Full-bleed photographic hero with overlay stack, H1 Playfair, mono sub, primary CTA, mission + arsenal cards |
| `MissionCard.jsx` | "A Missão" glass card with pulsing orange dot, mono labels |
| `ArsenalCard.jsx` | "O Arsenal" glass card with 4 services + ATIVO badges + capacity footer |
| `Button.jsx` | `variant="primary"` (orange pill CTA) · `"purple"/"cyan"/"orange"` ghost variants |
| `Badge.jsx` | `variant="active"` (pulsing green dot) · `"mono"` · `"warn"` · `"orange"` |
| `CardGlass.jsx` | Canonical `backdrop-blur` card with optional `featured` glow |
| `SectionHead.jsx` | Section kicker + Playfair H2 + `01/04` counter |
| `StepCard.jsx` | "PASSO 01" methodology card with orange connector line |
| `TeamCard.jsx` | Commander portrait card with rank label |
| `ServiceCard.jsx` | Service tile with accent-colored ghost CTA + featured ring |
| `LogoMarquee.jsx` | Infinite-scrolling client logos with edge masks, pauses on hover |
| `Footer.jsx` | Contact · social · protocol grid + legal bar |

## Running

Open `index.html` — it loads React + Babel from UNPKG and all JSX via `<script type="text/babel" src>`. No build step.

## Shared styles

- `../../colors_and_type.css` — all tokens + semantic type classes
- `styles.css` — layout + component-specific styles that go beyond tokens

## Caveats

- Team portraits are placeholder tiles (initials + reticle). Drop real portraits into `assets/team/` and wire them into `TeamCard`.
- The hero imagery is the imported audit screenshot — replace with the production soldier photo for live use.
- Services copy is synthesized from the brand lexicon + screenshots. Replace with the live site's exact body copy when production source is available.
