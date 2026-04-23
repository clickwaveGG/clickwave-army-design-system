---
name: clickwave-army-design
description: Use this skill to generate well-branded interfaces and assets for ClickWave Army, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

Key files:
- `README.md` — brand context, content fundamentals, visual foundations, iconography, manifest
- `colors_and_type.css` — single source of truth for CSS vars + semantic type classes
- `assets/` — brand mark, wordmark, hero photography
- `preview/` — one card per concept (colors, type, spacing, components) for reference
- `ui_kits/website/` — JSX recreation of the marketing site (Hero, NavPill, MissionCard, ArsenalCard, StepCard, TeamCard, ServiceCard, LogoMarquee, Footer, Button, Badge, CardGlass)
- `audit/` — live-site reference screenshots

The brand metaphor is military. The voice is pt-BR, imperative, decisive. Dark background `#0A0A0A`, single action color `#FF3300` orange, three service accents (purple/cyan/green). Playfair Display (display) + JetBrains Mono (labels, CTA, HUD) + Inter (body). No emoji, no gradients (except hero overlays and CTA ambient glow), no hand-drawn illustrations.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
