# CLAUDE.md — Avionics Product Knowledge Base

## Project Overview

This is an avionics product knowledge base website where technicians can select equipment from a dropdown menu and get a comprehensive, educational debrief and overview of the product. The goal is to help avionics techs:

1. **Learn products deeply** — understand what equipment does, how it works, and what the install looks like.
2. **Translate effectively** — articulate product value and functionality to aircraft owners and pilots in terms they care about.
3. **Compare intelligently** — know the competitive landscape and objective trade-offs without marketing fluff.

## Who This Is For

**Primary audience:** New aviation technicians straight out of A&P school, and military veterans transitioning to General Aviation (GA). They understand basic electronics, turning wrenches, and military systems (e.g., radar, UHF, TACAN), but have no idea what a standard GA product (like a Garmin GTN 750Xi) is or why a Cessna owner wants one.

**Secondary audience:** Aircraft owners researching upgrades. They're less technical but motivated buyers.

## Writing Voice

All product content is written in the style of an "Avionics Educator." See `references/educational-style-guide.md` for the complete guide.

**Key principles:**
- **Factual & Educational:** Clear, concise explanations of what the box does and how it interfaces with the airframe.
- **The "Translator":** Bridge the gap between engineering specs and practical application. Make connections that military veterans will understand.
- **Objective & Neutral:** Offer unbiased analysis of pros and cons, installation realities, and market competitors. Do not mimic specific journalists' opinions or voices to avoid copyright infringement.
- **Provide Deep Dives:** Always curate and hyperlink to authoritative sources like Larry Anglisano's *Aviation Consumer* articles or *AEA Avionics News* for users who want to read editorial reviews or deep dives.

## Project Structure

```
/
├── CLAUDE.md                    # This file — project context
├── references/
│   ├── educational-style-guide.md # Writing style for educational content
│   ├── product-taxonomy.md      # Master list of product categories & equipment
│   ├── article-catalog.md       # Index of articles (source material)
│   ├── style-comparison.md      # Good versus bad writing examples
│   └── sample-articles/         # Full text of articles for factual extraction
├── content/
│   ├── products/                # Generated product overviews (by category)
│   │   ├── autopilots/
│   │   ├── efis-pfd/
│   │   ├── gps-nav/
│   │   ├── transponders/
│   │   ├── audio-panels/
│   │   ├── traffic-systems/
│   │   ├── weather-radar/
│   │   ├── comm-radios/
│   │   └── ...
│   └── guides/                  # Cross-cutting guides (upgrade paths, etc.)
├── src/                         # Website source (Next.js or similar)
└── public/
```

## Content Generation Rules

1. **Always check `references/product-taxonomy.md`** before writing about a product — use correct model numbers, prices, and specs.
2. **Follow the educational style guide** — every product overview should match the objective, translation-focused tone found in `references/educational-style-guide.md`.
3. **Include a "Tech & Customer Talking Points" section** — bullet points a tech can use when explaining the product to a customer or a pilot.
4. **Include installation notes** — what does the shop need to know?
5. **Include competitive context** — objectively, what are the alternatives and what are the trade-offs?
6. **Include external deep dives** — provide hyperlinked references to *Aviation Consumer*, *AEA*, or *AVweb* for editorial/opinion pieces.
7. **Never fabricate specs or prices** — if you don't know, say so and flag it for research.

## Product Overview Template

Every product overview follows this structure:

```markdown
# [Product Name]
**Manufacturer:** [Company]
**Category:** [From taxonomy]
**Price Range:** $X,XXX – $XX,XXX (installed)
**STC Coverage:** [Aircraft types]

## What It Is (The Translation)
[2-3 sentences: what this product does, why it exists in the GA market, and a quick analogy if helpful for a military vet]

## How It Works
[Factual, technical overview at tech level — not engineer level, not pilot level]

## Installation Considerations
[What the shop needs to know — wiring, antenna, panel mods, STC requirements, typical downtime]

## Objective Performance & Specs
[Factual breakdown of its capabilities, interfaces, and limitations]

## Competitive Landscape
[What else is in this space? How does this objectively compare in features or price?]

## Tech & Customer Talking Points
- [Bullet point explaining a key value prop to a pilot]
- [Another talking point]
- [And another]

## Deep Dive Resources
- [Link to Aviation Consumer deep-dive review by Larry Anglisano]
- [Link to AEA Avionics News article]
```

## Website Requirements (Phase 5)

- Clean, fast, mobile-friendly
- Dropdown/search to find products by category, manufacturer, or name
- Each product gets its own page following the template above
- Cross-linking between related products and competing products
- No login required — open access
- Could be hosted on Vercel, Netlify, or similar

## Important Notes

- This is an **Ace Avionics Training** project (Nick Brown's business), NOT an AEA project
- Content MUST extract factual information and installation realities without plagiarizing or mimicking external authors' copyrighted editorial voices.
- All prices are approximate and should be noted as such.
- Products evolve — note the date content was last updated on each page.
