# Avionics Product Knowledge Base — Build Workflow

Step-by-step instructions for building this project from start to finish as an educational database.

---

## Phase 1: Reference Data Collection

### Goal
Collect articles from *Aviation Consumer*, *AVweb*, and *AEA Avionics News* to build a factual library of installation realities, pricing, and system architectures. We use these to extract data, not to copy voice.

### Steps
1. **Gather reference material** — continue fetching articles by industry experts like Larry Anglisano.
2. **Extract factual data** — summarize what the articles say about real-world installation times, common pain points, compatibility matrices, and pricing.
3. **Save to `references/sample-articles/`** with metadata headers linking to the original source.

---

## Phase 2: Educational Formatting

### Goal
Define the educational formatting style to ensure content is accessible to new GA techs and military veterans, bridging the gap between technical jargon and functional application.

### Steps
1. Update `references/educational-style-guide.md` with:
   - Terminology translations (Military to civilian GA)
   - How to structure objective pros and cons
   - Best practices for linking to deep-dive resources like AEA and Aviation Consumer.

2. Create `references/style-comparison.md` — a before/after doc showing:
   - Generic spec-sheet description (bad)
   - Educational, practical "Translator" description (good)

---

## Phase 3: Complete Product Taxonomy

### Goal
Build the definitive list of products the knowledge base will cover.

### Steps
1. Review `references/product-taxonomy.md`.
2. Research and fill in gaps across manufacturers (Garmin, Avidyne, Dynon, Aspen).
3. Ensure products are organized by how a tech would categorize them (Autopilots, Transponders, Navigators).

---

## Phase 4: Content Generation

### Goal
Write product overviews for every product in the taxonomy, prioritizing educational clarity and objective facts.

### Steps
1. **Read the educational style guide** (`references/educational-style-guide.md`).
2. **Work through categories in priority order:**
   - Priority 1 — Most Common Retrofit Products (Garmin GFC 500/600, GTN 750Xi/650Xi, G5, GI 275)
   - Priority 2 — Popular Alternatives & Competitors (Dynon SkyView HDX, Aspen Pro, Avidyne IFD series)
   - Priority 3 — Specialty & Legacy (Traffic, weather radar, ELTs)
3. **Follow the template in CLAUDE.md exactly.** Include the "Tech & Customer Talking Points" section. Complete the page with hyperlinked external references to *Aviation Consumer* or *AVweb* for deep dives.
4. Save to `content/products/[category]/[product-name].md`.

---

## Phase 5: Cross-Cutting Educational Guides

### Goal
Write guides that span multiple products to teach overarching GA concepts to new technicians.

### Steps
Create the following guides in `content/guides/`:
1. **`upgrade-paths-steam-to-glass.md`** — Basic progression from analog to digital for a GA aircraft.
2. **`autopilot-buyers-guide.md`** — Objective comparison of retrofit autopilots.
3. **`garmin-ecosystem-explained.md`** — How Garmin equipment interfaces in the GA environment.
4. **`avidyne-ecosystem-explained.md`** — The Avidyne/third-party integration architecture.
5. **`ads-b-ga-requirements.md`** — GA ADS-B compliance explained simply for military vets.
6. **`shop-installation-planning.md`** — Technical primer on planning complex panel retrofits.

---

## Phase 6: Website Build

### Goal
Build a clean, fast, searchable website that serves the product overviews.

### Steps
1. **Initialize the project:** `npx create-next-app@latest .`
2. **Design requirements:** 
   - Clean, professional, mobile-first
   - Dropdown navigation and full search functionality.
3. **Key pages:** Homepage, category pages, individual product pages, guides listing.
4. **Styling:** Use Ace Avionics Training branding. No login required.
5. **Deployment:** Vercel or Netlify.

---

## File Structure

```
avionics-product-kb/
├── CLAUDE.md                         # Project context
├── WORKFLOW.md                       # Build instructions
├── references/
│   ├── educational-style-guide.md    # Writing voice reference
│   ├── product-taxonomy.md           # Master product list
│   ├── article-catalog.md            # Source article index
│   ├── style-comparison.md           # Good vs bad examples
│   └── sample-articles/              # Factual reference materials
├── content/
│   ├── products/                     # Product overviews by category
│   └── guides/                       # Cross-cutting concepts
└── src/                              # Next.js website source
```
