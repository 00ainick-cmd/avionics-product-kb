# Garmin GFC 500
**Manufacturer:** Garmin
**Category:** Autopilots
**Price Range:** $15,000 – $25,000 (installed)
**STC Coverage:** Cessna 172/182, Piper PA-28 series, Mooney M20 series, Beechcraft 33/35/36, and dozens of other Part 23 single-engine piston airframes

## What It Is

The GFC 500 is Garmin's entry-level digital two-axis retrofit autopilot for light GA piston aircraft. It replaces legacy rate-based autopilots (Century, older S-TEC systems) with an attitude-based architecture that flies smoother, tracks tighter, and supports modern GPS approach coupling. It is the autopilot most shops will be quoting for bread-and-butter Cessna and Piper upgrades.

## How It Works

Unlike the rate-based autopilots it typically replaces, the GFC 500 is attitude-based. It receives a digital pitch and roll reference from a required Garmin attitude source -- a G5, GI 275, or G500/G600 TXi. That is a fundamental change from a turn coordinator signal, and it is why this autopilot flies coupled approaches without the hunting and S-turning common in older systems.

Core components:

- **GMC 507 Mode Controller:** Panel-mounted control head with mode keys, pitch wheel, and annunciation. This is the pilot's primary interface with the autopilot.
- **GSA 28 / GSA 28R Smart Servos:** Brushless DC servos with integrated electronics. The "R" variant is the roll servo; pitch gets a standard GSA 28. These servos have an electronic clutch (no mechanical shear pin) and can be overpowered by the pilot with minimal force when disengaged.
- **Attitude Source (G5, GI 275, or TXi):** Serves as the autopilot's attitude reference, flight director display, and mode annunciator. The GFC 500 does not contain its own internal AHRS -- it depends entirely on the connected Garmin display for attitude data.
- **GAD 29 Adapter (if applicable):** Required when interfacing with a non-Garmin GPS navigator that outputs ARINC 429 steering data. Translates GPS steering commands for the autopilot.

Supported modes include heading, navigation (GPSS steering), altitude hold, vertical speed, indicated airspeed hold, and coupled GPS, VOR/LOC, and ILS approaches with glideslope coupling. The unit also has a dedicated LVL (wings-level) button that commands straight-and-level flight with a single press -- a genuine safety feature for spatial disorientation recovery.

One important clarification: the GFC 500 does not include Electronic Stability and Protection (ESP) or envelope protection. Those features are exclusive to the GFC 600. If a customer asks about ESP, steer the conversation toward the GFC 600 or acknowledge that the GFC 500 relies on the LVL button as its primary safety recovery mode.

## Installation Considerations

**Ecosystem lock-in is real.** The GFC 500 requires a Garmin G5, GI 275, or G500/G600 TXi as its attitude source. If the aircraft does not already have one of those displays, you are adding $2,000 to $5,000 in hardware to the project before you even price the autopilot. Plan the panel holistically -- install the display and autopilot together to avoid paying for overlapping labor twice.

**Removing the legacy autopilot:** Most installs involve pulling out a Century or S-TEC system along with its old servos, controller, and wiring. Some of that wiring can be reused for routing paths, but plan on running new harnesses to the smart servos and display.

**Servo installation:** The GSA 28 servos mount to the airframe structure near the flight control cables. Bracket fabrication or modification is common. Every airframe is different -- the STC kit includes hardware for the specific aircraft, but expect some fitting work. On a Cessna 182, the pitch servo usually goes behind the rear baggage bulkhead; roll servo location varies by airframe.

**Airframe rigging matters:** The autopilot will only fly as well as the aircraft's control system allows. Cable tension, bellcrank condition, and control surface rigging must be inspected and corrected per the maintenance manual before servo installation. Skipping this step is the number one reason for poor autopilot performance after install.

**Optional pitch trim servo:** Garmin offers a GSA 28 pitch trim servo for electric trim integration. It is not required for basic operation, but on aircraft with manual trim, adding it gives the autopilot automatic trim follow-up, which reduces out-of-trim forces on disconnect. Budget approximately $2,000 to $2,500 for the additional servo and installation.

**Downtime:** Plan for 2 to 4 weeks, depending on the shop's backlog, the aircraft's current state, and whether interior removal is needed for servo access and cable routing. Aircraft that already have a Garmin display installed will be toward the shorter end.

## Flight / Bench Performance

In the air, the GFC 500 is a marked improvement over the rate-based systems it replaces. Heading tracking is tight, altitude hold does not wander, and coupled GPS approaches are smooth and predictable. The transition from attitude-based control versus rate-based control is immediately apparent -- no more oscillation or lag during turns or altitude changes.

The GPSS steering mode is particularly well-executed. The autopilot rolls onto GPS course intercepts and tracks curved flight paths (like holds and procedure turns) without the overshoot and correction cycles common in older wing-leveler-style autopilots.

ILS coupling is solid. The autopilot captures and tracks both localizer and glideslope without the S-turning that plague aging rate-based systems. Pilots consistently report that coupled approaches are smoother than what they could fly by hand.

On the bench, the GSA 28 servos are clean units. No brushes to wear out, no mechanical shear pins to replace. The electronic clutch fully disconnects when the autopilot is off, meaning zero drag or friction on the controls during hand-flying -- a common complaint with older servo designs.

## Related Products

**Genesys Aerosystems S-TEC 3100:** An attitude-based digital autopilot that can reuse existing S-TEC servos on aircraft already equipped with an S-TEC 55X, significantly reducing installation labor. Those legacy servos are mechanical with brushes and shear pins. The S-TEC 3100 does not require a Garmin display, making it compatible with non-Garmin panels.

**Avidyne DFC90:** A plug-and-play digital autopilot controller that replaces the S-TEC 55X computer while reusing the installed servos. It provides attitude-based control when paired with an Aspen display. Designed for aircraft already wired for S-TEC systems.

**Dynon SkyView autopilot:** Integrated within the Dynon SkyView certified ecosystem. The autopilot servos receive commands directly from the SkyView HDX display with no separate autopilot computer. Requires the full Dynon display suite.

**Garmin GFC 600:** Garmin's autopilot for heavier singles and light twins. Includes its own internal AHRS (independent of an external display for attitude data), has Electronic Stability and Protection (ESP) envelope protection, and is TSO'd. Designed for Bonanzas, Barons, and similar high-performance airframes.

## Price & Value

Approximate pricing (all figures will vary by shop and region):

- **GFC 500 autopilot unit (GMC 507 controller):** ~$6,995
- **GSA 28 roll servo:** ~$2,000 to $2,500
- **GSA 28 pitch servo:** ~$2,000 to $2,500
- **GSA 28 pitch trim servo (optional):** ~$2,000 to $2,500
- **GAD 29 adapter (if needed):** ~$1,000
- **Installation labor:** $4,000 to $8,000 depending on aircraft and complexity
- **Garmin G5 or GI 275 (if not already installed):** $2,000 to $5,000

**Total project cost, all-in:** $15,000 to $25,000 for a typical single-engine piston, depending on what is already in the panel and how much interior work the airframe requires for servo access.

The value proposition is straightforward: for an aircraft with a tired Century or old S-TEC autopilot that flies poorly and eats maintenance dollars, the GFC 500 transforms the airplane. The cost of continuing to repair a 30-year-old autopilot adds up quickly, and the performance difference is not subtle. For IFR flying, a well-functioning modern autopilot is arguably the single highest-value upgrade an owner can make.

## Summary

The GFC 500 is a two-axis, attitude-based digital autopilot designed for Part 23 single-engine piston retrofits. It requires a Garmin G5, GI 275, or TXi display as its attitude source — an ecosystem dependency that affects panel planning. STC coverage is broad across Cessna, Piper, Mooney, and Beechcraft airframes.

Key considerations when evaluating this autopilot against alternatives:
- Aircraft that already have an S-TEC 55X with functional servos may see lower total install costs with the S-TEC 3100 or Avidyne DFC90, which reuse the existing servo hardware.
- Aircraft requiring ESP / envelope protection need the GFC 600, which includes that capability.
- Non-Garmin panels may find the S-TEC 3100 more practical since it does not require a Garmin display.
- The Dynon SkyView autopilot offers an integrated ecosystem alternative for aircraft pursuing a full Dynon panel conversion.

## Key Technical Facts

- The GFC 500 is attitude-based, not rate-based. It receives a digital pitch and roll reference from its required Garmin display, eliminating the hunt and S-turn behavior common in legacy rate-based systems.
- The GSA 28 servos are brushless DC with electronic clutches — no mechanical shear pins to inspect or replace. When the autopilot is disengaged, the clutch fully disconnects, resulting in zero drag on the flight controls.
- The dedicated LVL (wings-level) button commands straight-and-level flight with a single press, serving as an emergency recovery tool during spatial disorientation.
- Supported modes include heading, navigation (GPSS), altitude hold, vertical speed, indicated airspeed hold, and coupled GPS/VOR/LOC/ILS approaches with glideslope.
- The GFC 500 requires a Garmin G5, GI 275, or TXi as its attitude source. This means panel planning must account for the display requirement as part of the total project.
- This autopilot does **not** include Electronic Stability and Protection (ESP). That feature is exclusive to the GFC 600.

## Deep Dive Resources

- [Aviation Consumer: Garmin's New Autopilots: Flawless Performers](https://www.aviationconsumer.com/avionics/garmin-autopilots-flawless-performers/) by Larry Anglisano
- [Aviation Consumer: Autopilot Installs: Downtime, Rigging](https://www.aviationconsumer.com/avionics/autopilot-installs-downtime-rigging/) by Larry Anglisano
- [Garmin GFC 500 Product Page](https://www.garmin.com/en-US/p/573498)
- [Garmin GFC 500 STC List](https://www.garmin.com/en-US/p/573498/pn/010-01716-40#stc)

## Common Squawks & Troubleshooting

### ⚠️ Uncommanded Pitch Trim Runaway on Autopilot Engagement
- **Symptom:** When the autopilot is first engaged, the pitch trim servo runs uncommanded — nose up or nose down — without pilot input. This can result in a rapid, unexpected pitch excursion.
- **Root Cause:** Autopilot software does not properly handle certain hardware failures of the primary GSA 28 pitch servo. A failed or degraded pitch servo can cause the pitch trim servo to run away.
- **Resolution:** **FAA Airworthiness Directive 2024-14-03** (effective August 20, 2024) mandates updating the associated Garmin display software. Minimum required versions: **G5 SW v8.01+**, **G3X Touch SW v9.01+**, **GI 275 SW v2.59+**. Compliance is required within 12 months of the AD effective date. Earlier software versions are prohibited from installation. Reference Garmin Mandatory STC Service Bulletin 22123, Revision A.
- **Applicability:** GFC 500 autopilots installed under STC SA01866WI with the optional GSA 28 pitch trim servo. **Cirrus SR20/SR22 installations are NOT affected.**
- **Source:** FAA AD 2024-14-03; Garmin SB 22123 Rev A; Garmin Service Alert 22109

### GSA 28 Servo Intermittent Engagement Failure
- **Symptom:** The autopilot intermittently fails to engage, or the pilot presses AP and the servos do not respond. On re-attempts, the system may engage normally.
- **Root Cause:** A software issue in the GSA 28 servo firmware can prevent the servo from responding to engagement commands under specific timing conditions.
- **Resolution:** Update GSA 28 servo software to **version 5.46** per Garmin Service Bulletin 24009 Rev A. Compliance recommended at next maintenance interval. Warranty reimbursable through August 30, 2024.
- **Source:** Garmin SB 24009 Rev A

### Rigging-Related Poor Autopilot Performance
- **Symptom:** Autopilot oscillates, hunts, or flies poorly on coupled approaches despite clean software and servo condition.
- **Root Cause:** This is almost always an airframe problem, not an autopilot problem. Improper flight control cable tension, worn bellcranks, binding flight controls, or out-of-rig control surfaces cause the autopilot to fight the airframe.
- **Resolution:** Verify and correct airframe rigging per the aircraft maintenance manual before blaming the autopilot. This is the **number one cause** of post-install performance complaints.
- **Source:** Garmin installation manual; widespread shop experience
