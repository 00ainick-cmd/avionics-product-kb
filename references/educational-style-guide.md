# Educational Writing Style Guide for Avionics Products

**Purpose:** This guide defines the voice and informational structure for the Avionics Product Knowledge Base.
**Audience:** Entry-level avionics technicians (who may have zero flight experience) and transitioning military veterans evaluating civilian avionics.

---

## The "Educator / Translator" Voice

The primary objective is to teach and empower the reader, bridging the gap between dry technical specifications and practical application on the shop floor or in the cockpit. 

### Key Principles

1. **Be Factual and Objective:**
   - State what the product does, how it connects to other systems, and its physical constraints.
   - Summarize the pros and cons logically without taking a personal side. Leave editorializing to the journalists.

2. **Translate Aviation Concepts for Non-Pilots:**
   - Assume the reader has zero flight hours. Explain what a system does physically, structurally, and functionally in layman's terms.
   - Clarify GA acronyms and pilot-specific terms immediately (e.g., explain what "IFR" means, or that an approach is how you land in the clouds).
   - Clarify GA acronyms and regulations immediately (e.g., "STC" or "Part 23").

3. **Empower the Technician (Talking Points):**
   - Provide clear, layman-friendly bullet points that a technician can use when talking to a pilot or aircraft owner. 
   - A good talking point translates a technical feature into a pilot benefit. (e.g. *Technical:* "Has internal ADAHRS." -> *Talking Point for Pilot:* "This gives you a full suite of backup flight instruments if your primary vacuum system fails.")

4. **Curate Editorial Deep Dives:**
   - Whenever discussing a product, supply outbound hyperlinks to *Aviation Consumer*, *AVweb*, or *AEA Avionics News* articles that review the product. Present these as "Deep Dive Resources" for users wanting editorial opinions and advanced reading.

---

## Military-to-Civilian GA Terminology Translations

Many new avionics technicians come from military aviation backgrounds. Use these translations to bridge the gap.

| Military Term | GA / Civilian Equivalent | Notes |
|---------------|--------------------------|-------|
| TACAN | VOR/DME | TACAN is military; civilian side uses VOR and DME separately or colocated |
| IFF (Identification Friend or Foe) | Transponder (Mode A/C/S) | Same concept — reply to interrogation — but GA uses Mode A/C/S, not military modes |
| TCAS (military context) | TAS / TCAS I / TCAS II | GA piston aircraft use TAS (Traffic Advisory System); TCAS II is airline-grade |
| INS (Inertial Navigation) | GPS / WAAS | Military still uses INS; GA has moved almost entirely to GPS/WAAS |
| HUD | Rare in GA | HUD exists in Garmin's GHD 2100 for business aviation; virtually nonexistent in piston GA |
| MFD (military context) | MFD / PFD | Same acronym, but GA MFDs are simpler — typically mapping/engine/weather, not tactical |
| CDU (Control Display Unit) | GPS navigator / FMS | Military CDU is analogous to a Garmin GTN or FMS in GA |
| FLIR | N/A in GA | Forward-Looking IR doesn't exist in typical GA |
| UHF Comm | VHF Comm only | GA uses VHF exclusively (118.000–136.975 MHz); no UHF |
| ILS (military) | ILS / LPV / RNAV | Same ILS exists in GA, but GPS approaches (LPV, LNAV) are increasingly preferred |
| STC | STC (Supplemental Type Certificate) | Military doesn't use STCs; explain that every GA retrofit needs FAA-approved installation authority |
| TOLD card | POH / Performance charts | Military TOLD = Takeoff and Landing Data; GA uses Pilot's Operating Handbook |
| Crew station | Cockpit / Panel | GA calls it the cockpit or panel, not crew station |
| Avionics bay | Radio stack / Behind-panel area | GA aircraft typically have a center radio stack, not a separate avionics bay |
| Line Replaceable Unit (LRU) | Box / Unit | Same concept but GA techs say "the box" or "the unit" |
| TO (Technical Order) | STC, SB, AD, ICA | Military TOs map to STCs, Service Bulletins, Airworthiness Directives, and Instructions for Continued Airworthiness |
| PMEL (calibration) | Calibration / Pitot-static check | GA uses 14 CFR 91.411/413 for transponder and pitot-static recertification |

### Key Regulatory Differences to Explain
- **Part 23 vs. Part 25:** GA piston aircraft are Part 23; airlines are Part 25. Military has its own MIL-SPEC world.
- **337 Form:** Major alterations in GA require FAA Form 337 — no military equivalent.
- **Annual / 100-Hour Inspections:** GA aircraft must be inspected annually (or every 100 hours for hire). Military uses phase or calendar inspections.
- **A&P / IA:** GA maintenance requires an A&P (Airframe & Powerplant) mechanic certificate; avionics work often requires a Repairman Certificate or shop authorization.

---

## Sentence Structure & Formatting

- **Short, digestible paragraphs.** Break down dense technical information into lists or bullet points.
- **Use analogies.** Where possible, compare the system to something universally understood (e.g., "Think of the audio panel as the network switch for the entire cockpit").
- **Clarity over prose.** Do not use colorful metaphors unless they directly aid understanding. 

## Writing "Pros and Cons" Objectively

**Avoid:** "This is by far the best transponder on the market, hands down. We love it." (Too editorial/opinionated)
**Do:** "The GTX 345 is widely adopted because it provides an all-in-one ADS-B In/Out solution that interfaces seamlessly with existing Garmin displays. However, its installed price point is higher than budget alternatives like the uAvionix skyBeacon."

## Structuring the "Deep Dive Resources"

Always end the product page with a section linking out to the experts. This respects copyright while providing immense value to the reader.

```markdown
## Deep Dive Resources
For an editorial review, flight test observations, and long-term ownership perspectives, check out these articles:
- [Aviation Consumer: Garmin's New Autopilots: Flawless Performers](https://www.aviationconsumer.com/...) by Larry Anglisano
- [AVweb: Video Overview of the Dynon HDX](https://www.avweb.com/...)
```

## Summary Checklist for Formatting a Product Page

- [ ] Is the primary explanation clear to someone who has never flown an airplane?
- [ ] Are the interfaces (ARINC 429, RS-232, composite video) listed clearly?
- [ ] Are the installation considerations practical (e.g., "Requires plumbing to the pitot-static system")?
- [ ] Are the customer talking points written so a tech can read them directly to a pilot?
- [ ] Are there links to external journalists/magazines for deep dives?
