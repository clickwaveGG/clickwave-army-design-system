# ClickWave Army — Design System

> **Marketing é guerra.**
> Estratégia implacável, clareza de marca e execução tática para dominar o mercado.

ClickWave is a Brazilian (pt-BR) digital-marketing agency. Its public product is **ClickWave Army** — a marketing operation branded as a military unit. The entire brand sits on a single metaphor and commits to it fully: the team wears "postos" (General, Coronel), the services are an "arsenal", the company motto is *"Marketing é guerra."*

This design system formalizes that voice into tokens, components and screen recreations so any new surface — website, landing page, deck, ad creative — can be built on-brand without re-deriving the rules.

## Sources

Everything here was derived from the ClickWave redesign brief repository:

- **Repo:** `github.com/clickwaveGG/clickwavearmy-redesign` @ `main`
  - `01-brand-extracted.md` — tokens captured from the live site via `getComputedStyle`
  - `02-design-system.md` — formalized design system v1.0 (tokens + components)
  - `03-handoff-para-claude.md` — operational handoff briefing
  - `audit/*.jpeg` — screenshots of the current live site (desktop hero, desktop full, mobile full) — imported into `audit/` in this project
- **Live site referenced:** `clickwavearmy.com`

No production codebase (React/Vite/Tailwind project) was attached — all React component recreations here are modeled from the screenshots + formal tokens documented in the brief, not from source.

## Identity

| Field | Value |
|---|---|
| Nome | ClickWave |
| Produto público | ClickWave Army |
| Tagline | **Marketing é guerra.** |
| Arquétipo | Warrior + Ruler — domínio e autoridade |
| Audiência | Empresas que querem sair da invisibilidade e dominar nicho |
| Língua | pt-BR |
| Tom | Militar, bélico, tático, implacável, decisivo |

### Team ("Exército ClickWave")

| Nome | Posto | Função |
|---|---|---|
| Pedro Dourado | General (Fundador) | Estratégia + Tráfego pago |
| Leonardo | Coronel (Co-fundador) | Web Design + Estratégia |
| João Victor | Videomaker | Edição de vídeo |
| Kauan Cabral | Automações | n8n + sistemas |

### Services ("O Arsenal")

- **Inteligência de Dados**
- **Design de Impacto** — accent purple
- **Tráfego de Elite** — accent orange (featured)
- **Copywriting Bélico**
- **Vídeo & Conteúdo** — accent cyan

---

## Content fundamentals

The brand has one job in every sentence: **sound like a military order, not a marketing pitch.** Soften the voice and the whole system collapses.

### Rules

- **Language:** pt-BR only. Never default to English copy.
- **Pronoun:** "você" (direct, second-person). Never "a gente". The brand addresses the reader as a commander addresses a recruit.
- **Length:** short declarative sentences. Period. Next sentence.
- **Mood:** imperative, indicative. Never subjunctive softeners ("talvez", "quem sabe").
- **Numbers as military metrics:** `V.2.5`, `CAPACIDADE: 100%`, `01/03`, `PROTOCOLO: CLICKWAVE-01`.
- **Casing:** `UPPERCASE` for mono labels, badges, CTAs. Title case for Playfair headlines. Sentence case for body.
- **No emoji.** Ever. Inside product copy.
- **No exclamation marks for enthusiasm** — only for orders (`COMEÇAR AGORA!`).

### Canonical vocabulary (use these — already consolidated)

> Missão · Objetivo primário · Operação · Protocolo · Arsenal · Artilharia · Armas · Exército · Comandantes · General · Coronel · Linha de frente · Incursões · Mobilização · Dominância · Aniquilar · Tráfego de elite · Copywriting bélico · Design de impacto · Inteligência de dados

### Banned vocabulary

> "Vamos juntos" · "Jornada" · "Parceria" (sem peso) · "Acreditamos que…" · "Growth hacking" · Soft talk · Any wellness/feelgood lexicon

### Voice examples (from the live site)

- Headline: *"Marketing é guerra."*
- Sub: `// E NÓS SOMOS A SUA LINHA DE FRENTE. ESTRATÉGIA IMPLACÁVEL, CLAREZA DE MARCA E EXECUÇÃO TÁTICA PARA DOMINAR O SEU MERCADO.`
- Card: *"A Missão — OBJETIVO PRIMÁRIO — Aniquilar a invisibilidade da sua marca e estabelecer dominância absoluta no seu nicho. STATUS DA OPERAÇÃO: Pronto para mobilização imediata."*
- Card: *"O Arsenal — Inteligência de Dados · Design de Impacto · Tráfego de Elite · Copywriting Bélico — ATIVO · ATIVO · ATIVO · ATIVO — CAPACIDADE: 100%"*
- CTA: `COMEÇAR AGORA!`
- Footer marker: `V.2.5` · `PROTOCOLO: CLICKWAVE-01`

The `//` comment-prefix on mono labels is signature — it reads as a code comment or radio transcript. Use it on **one** line per screen, not more.

---

## Visual foundations

### Overall feel

Dark, cinematic, cold — a HUD dropped over a matte-black battlefield. The warmth comes from exactly one place (the orange action color) and nowhere else. Heat is scarce on purpose.

### Color

- **Background is always `#0A0A0A` (brand-black).** No dark grays pretending to be black. No true `#000`.
- **One action color: `#FF3300` orange.** Used for the single primary CTA, the brand logo mark, urgency flags, and protection glows. Never for body text, never for decorative fills at 100%.
- **Three service accents** (`#7C3AED` purple, `#0EA5E9` cyan, `#10B981` green) — used tightly as service-card chips, borders, and the pulsing "ATIVO" status dot. Green **only** means active.
- **Whites are transparencies**, not solid greys: `white/90 · 70 · 60 · 40 · 20 · 10 · 5 · 3`. This keeps the glass surfaces coherent on top of imagery as well as flat black.
- **No gradients as backgrounds** except protection overlays on hero imagery (`from-black/70 via-black/30 to-transparent`) and soft ambient glows around the CTA.

### Type

- **Playfair Display** (serif, weight 400, tight tracking `-1.5px`, line-height `1`) — always for display and headlines, never for body. The italic variant is a signature accent on the word that delivers impact (*"guerra."*, *"Arsenal"*).
- **Inter** (sans, weight 400) — body copy at 14–16px, line-height 1.5–1.6, color `white/70`.
- **JetBrains Mono** (mono, weight 400, `UPPERCASE`, tracking 0.35–1.6px) — every label, every badge, every CTA, every small "01/03" marker. This is the military HUD voice.

The tension is intentional: Playfair (arte, romance) × JetBrains (operação, máquina). Inter is the quiet neutral between them.

### Spacing & layout

- 4px base grid. Section padding `py-12` mobile → `py-24` desktop. Container max `1600px`, horizontal padding `24px` / `32px+`.
- Vertical rhythm between sections: `48px` mobile, `96px` desktop.
- Grid: 12 col desktop, 4 col mobile.
- Touch targets ≥ 44×44px. Body text never below 14px.

### Backgrounds

- Flat `#0A0A0A` for most sections; a `border-top: 1px solid white/5` separates them instead of alternating band colors.
- The **hero only** uses a full-bleed photographic background (current site: a soldier portrait). Use `<picture>` with desktop + mobile sources. A two-stop gradient overlay is required for text legibility: `from-black/70 via-black/30 to-transparent` left→right, plus a second `from-black/80 via-transparent` top→bottom.
- **No illustrations.** No abstract blobs, no SVG doodles, no 3D blender shapes. If you need imagery, it is photographic and cinematic — muted, desaturated, grainy, warm shadows, cold highlights.

### Corner radii

Pick one of three canonical radii — don't interpolate:

- `rounded-md` (16px) — step cards, secondary buttons
- `rounded-[2rem]` (32px) — glass cards
- `rounded-full` — CTAs, nav pill, chips, badges, status dots

No sharp 0px corners. No `rounded-sm` for anything important.

### Cards

- `bg-white/5 · backdrop-blur-xl (24px) · border border-white/10 · rounded-[2rem]` — the canonical "glass" card.
- Hover: `border-white/20 + translateY(-2px)`. 300ms ease-out.
- Featured variant: `border-orange/30 + shadow-cta-ambient + inset 0 1px 0 orange/20`.
- No drop shadows on cards under normal circumstances — elevation comes from the border + blur, not from a shadow. Shadows are reserved for the CTA glow.

### Shadows & glow

There is **one** shadow system and it is the orange CTA:

- Rest: `0 0 40px rgba(255,87,34,0.2)` — soft ambient
- Hover: `0 0 30px rgba(255,51,0,0.35)` — tight, brighter
- Ambient around featured cards: `0 0 60px rgba(255,51,0,0.12)`
- Pulse ring (status dot): `0 0 12px 4px rgba(255,51,0,0.5)`

`shadow-card` (soft black) exists for nav pill elevation only.

### Transparency & blur

`backdrop-blur(24px)` is part of the brand — every glass card uses it, nav pill uses `blur(12px)`. Blur is a material, not a decoration; elements that glass-blur should always sit over something (imagery or noise), never over flat black.

### Motion

Lento e deliberado. Never bouncy, never springy.

- `transition-all 300ms` for every hover.
- `spin 15s linear infinite` — slow decorative rotation (target reticles, orbit markers).
- `pulse 2s ease-in-out infinite` — ATIVO dots, live markers.
- `infinite-scroll 40s linear infinite` — client logo marquee.
- Entrance animations: `fade + translateY(8px) 400ms ease-out stagger 80ms`, triggered via IntersectionObserver.
- `prefers-reduced-motion` is respected site-wide (animations to 0.01ms).

### Hover & press states

- Buttons: background shifts to `--color-action-hover` + glow tightens + `translateY(-1px)`. Press: `translateY(0)`.
- Ghost buttons: border opacity 0.3 → 0.5 and bg 0.08 → 0.15. Press: `scale(0.98)`.
- Cards: `border-white/10 → white/20 + translateY(-2px)`. No press state.
- Nav links: `white/90 → white`. No underline.
- Logo marquee items: `grayscale(1) opacity-0.6 → grayscale(0) opacity-1`.

### Borders

Every surface is separated by a 1px white-alpha border, not a solid color:

- `border-white/5` — section dividers
- `border-white/10` — default card border
- `border-white/20` — nav pill, strong separators, card:hover
- Service-colored borders at `/30` opacity — ghost buttons, featured cards

### Focus states (mandatory)

`outline: 2px solid #FF3300; outline-offset: 3px;` — on every interactive element. Never `outline: none` without providing a replacement.

---

## Iconography

ClickWave does not have a bespoke icon font. The live site uses a mix of:

1. **The ClickWave mark** — a custom stylized orange glyph (triangular arrow / wave). Used at ~20–24px in the nav pill next to the wordmark and as a faint motif badge on the soldier's shoulder patch. The canonical SVG lives at `assets/clickwave-mark.svg`.
2. **Lucide** (or an equivalent stroke-based icon set) for UI icons: `arrow-right` on the Login button, chevrons, social icons. Lucide is loaded via CDN — `https://unpkg.com/lucide@latest` — at `1.5px` stroke, 20–24px size, `currentColor`.
3. **Geometric HUD markers** — tiny bullet dots (`·`), crosshair reticles, `01/03` counters — these are type, not icons. Built from JetBrains Mono + thin SVG rings (`<circle stroke="currentColor" stroke-width="1">`).

Rules:

- **No emoji** inside product UI. Ever.
- **No hand-drawn illustrations.** Ever.
- **Unicode mid-dot `·`** is the approved inline separator.
- If a needed icon isn't in Lucide and isn't already in the brand asset set, substitute the nearest Lucide match and flag the substitution in review — do not draw a one-off SVG.

Linked/copied in this project:

- `assets/clickwave-mark.svg` — brand mark (orange, 24×24)
- `assets/clickwave-wordmark.svg` — "Clickwave" wordmark in Playfair italic
- `assets/hero-soldier.jpg` — hero photograph (from audit)

> **Substitution flag:** the live site's exact glyph is reconstructed from screenshots — pixel-match with the production SVG is not guaranteed. If you have the real mark file, drop it over `assets/clickwave-mark.svg`.

---

## Index of this design system

```
├── README.md                     ← this file
├── SKILL.md                      ← agent-skill manifest (Claude Code compatible)
├── colors_and_type.css           ← CSS vars + semantic type classes (single source of truth)
├── audit/                        ← live-site reference screenshots
│   ├── 01-desktop-hero.jpeg
│   ├── 02-desktop-fullpage.jpeg
│   └── 03-mobile-fullpage.jpeg
├── assets/                       ← logos, mark, hero photography
│   ├── clickwave-mark.svg
│   ├── clickwave-wordmark.svg
│   └── hero-soldier.jpg
├── preview/                      ← design-system cards (one concept per file)
│   ├── colors-core.html
│   ├── colors-accents.html
│   ├── colors-whites.html
│   ├── type-display.html
│   ├── type-mono.html
│   ├── type-body.html
│   ├── spacing-grid.html
│   ├── radii.html
│   ├── shadows.html
│   ├── motion.html
│   ├── components-buttons.html
│   ├── components-cards.html
│   ├── components-badges.html
│   ├── components-nav.html
│   ├── components-step.html
│   └── brand-logo.html
└── ui_kits/
    └── website/                  ← ClickWave Army marketing site UI kit
        ├── README.md
        ├── index.html
        ├── Hero.jsx
        ├── NavPill.jsx
        ├── Button.jsx
        ├── CardGlass.jsx
        ├── Badge.jsx
        ├── MissionCard.jsx
        ├── ArsenalCard.jsx
        ├── StepCard.jsx
        ├── TeamCard.jsx
        ├── LogoMarquee.jsx
        ├── ServiceCard.jsx
        └── Footer.jsx
```

## Caveats

- **No production codebase was attached.** All UI-kit JSX is reconstructed from the formal tokens in the brief + the three audit screenshots. If the production React/Vite/Tailwind repo is attached later, cross-check component markup against source.
- **Font files:** Playfair Display, Inter, JetBrains Mono are loaded from Google Fonts CDN (the brief's canonical source). No local `.ttf` files were shipped because all three are Google-canonical open-source families.
- **Brand mark SVG:** reconstructed from the audit screenshots — see the iconography substitution flag above.
- **Only 3 audit screenshots exist** (desktop hero, desktop full, mobile full). Sections below the "Nosso Exército" band are partially occluded in the full-page screenshot; their reconstructions lean on the design-system spec rather than pixel evidence.
