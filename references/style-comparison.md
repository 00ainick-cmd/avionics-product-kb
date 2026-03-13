# Avionics Writing: Style Comparison

This document provides a before-and-after comparison showing how to transform a generic manufacturer spec-sheet into the highly educational, "Translator" format required for our database.

---

## Example 1: Explaining a Product's Purpose

### ❌ Manufacturer Spec-Sheet (Bad)
The Garmin GTN 750Xi is a premier GPS/NAV/COMM/MFD equipped with a high-resolution touchscreen display, faster processing power, and Advanced Glide Range Ring integration. It supports LP, LPV, LNAV/VNAV, LNAV+V, and LNAV approach types.

**Why it fails:** It assumes the reader already knows what all these acronyms mean and why this specific box matters. A new tech or a transitioning military veteran has no context for why a pilot would spend $18,000 to get this installed.

### ✅ The "Translator" Style (Good)
The Garmin GTN 750Xi serves as the central command hub for the General Aviation cockpit. It combines a VHF radio, VOR/ILS navigation, and WAAS GPS all into a single, high-resolution touchscreen. 
- **For the Military Vet:** Think of it as a comprehensive tactical display and mission computer for civilian flying—it brings weather, traffic, and navigation onto one screen.
- **Why Pilots Want It:** The massive screen allows pilots to easily view approach plates (instrument procedures) natively on the unit, reducing reliance on external iPads and heavily clearing up panel clutter.

**Why it works:** It breaks down the acronyms, uses a relatable military analogy, and immediately identifies the practical value to the customer.

---

## Example 2: Installation Considerations

### ❌ Generic Manual (Bad)
Mount the tray assembly onto the avionics rack. Ensure proper grounding and wire ARINC 429 channels. Refer to the STC for approved airframes.

**Why it fails:** This is an instruction manual, not educational context. It doesn't tell the tech what the overall effort or risk profile of the project looks like.

### ✅ The "Translator" Style (Good)
**Installation Considerations:**
Installing this unit requires significant panel fabrication. Because of the unit's large 6-inch height, shops frequently have to relocate existing audio panels or transponders to create enough space in the center radio stack. The wiring integration is complex, requiring interfacing with the aircraft's autopilot, transponder, and audio panel via RS-232 and ARINC 429. Plan for extensive downtime.

**Why it works:** It prepares the technician for the real-world shop realities: panel cutting, equipment relocation, and databus integration.

---

## Example 3: Customer Talking Points (Sales Enablement)

### ❌ Generic (Bad)
Tell the customer it has a dual-core processor and is compatible with the Flight Stream 510.

**Why it fails:** An aircraft owner likely doesn't care about dual-core processors. They care about what the processor *gets* them. 

### ✅ The "Translator" Style (Good)
**Tech & Customer Talking Points:**
- "The faster processor in the Xi series means no more map-panning lag. When you drag the map, it moves instantly, just like your smartphone."
- "If we add the Flight Stream 510 card, you can wirelessly push your flight plan from your iPad directly into the panel before you even start the engine."

**Why it works:** The technician can read these bullet points verbatim to a pilot. It translates a technical feature (processor speed, Flight Stream compatibility) into a tangible pilot benefit (no map lag, wireless flight plan transfers).
