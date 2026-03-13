# Garmin GI 275
**Manufacturer:** Garmin
**Category:** EFIS / PFD
**Price Range:** $5,000 - $9,000 per unit installed; $12,000 - $16,000 for a two-unit AI + HSI project (approximate)
**STC Coverage:** Broad AML-STC covering most Part 23 Class I, II, III, and IV single- and multi-engine piston aircraft (over 1,000 models)

## What It Is

The GI 275 is Garmin's multi-function electronic flight instrument that drops into a standard 3-1/8-inch round gauge cutout. It replaces aging mechanical attitude indicators, HSIs, CDIs, and even engine gauges with a single solid-state, touchscreen display. It sits above the G5 in Garmin's lineup, offering a brighter display, synthetic vision capability, and significantly more integration options including engine monitoring and autopilot attitude sourcing.

## How It Works

Internally, the GI 275 contains a solid-state ADAHRS (Air Data, Attitude, and Heading Reference System) that replaces spinning vacuum gyros. It connects to the aircraft's existing pitot-static plumbing for airspeed, altitude, and vertical speed data, and uses MEMS accelerometers and rate gyros for attitude.

The unit can be configured in several distinct modes depending on what the shop enables:

- **Attitude Indicator (AI):** Primary attitude, airspeed tape, altitude tape, vertical speed, slip/skid. Optional Synthetic Vision Technology (SVT) overlay adds 3D terrain, obstacles, and runways for an additional software unlock (~$995).
- **HSI:** Requires a remote GMU 11 magnetometer for heading. Displays course deviation for ILS and GPS approaches with dual bearing pointers and course deviation scaling. Can interface with legacy heading systems like the KCS55A to provide an electronic HSI without replacing the entire heading system.
- **CDI:** Functions as a standalone course deviation indicator when paired with a GPS navigator, serving as a modern replacement for legacy KI 208/KI 209 CDIs.
- **MFD / Engine Indicator:** When connected to a GEA 24 engine sensor processing unit, it displays RPM, manifold pressure, EGT/CHT, fuel flow, oil pressure, and oil temperature. All engine data logs to an SD card for trend monitoring.

Communication interfaces include RS-232 and ARINC 429, giving it substantially more integration flexibility than the G5's more limited serial-only setup. The unit also has built-in Wi-Fi for database updates via Garmin's Database Concierge service, and an internal VFR GPS receiver for backup situational awareness.

A 60-minute backup battery keeps the display running through a complete electrical failure.

## Installation Considerations

**Panel Fitment:** The GI 275 is a true round instrument. It mounts from behind the panel into a standard 3-1/8-inch cutout, which means no panel overlay plates, no filing, and no custom fabrication in most cases. This is a meaningful labor advantage over the G5, which has a square back that sometimes requires panel modification.

**Pitot-Static Plumbing:** Despite being a digital instrument, it still needs physical pneumatic lines from the pitot tube and static ports. Budget time for plumbing, leak checks, and a post-installation pitot-static system certification under 14 CFR 91.411.

**Magnetometer Installation (HSI configuration):** The GMU 11 magnetometer mounts remotely, typically in a wingtip or tail section. Finding a location free from magnetic interference takes time on some airframes. The magnetometer adds roughly $400-$500 to the parts bill.

**Autopilot Sourcing:** The GI 275 can serve as the attitude source for the GFC 500 and GFC 600 digital autopilots, and it can also interface with many legacy autopilot systems (Century, BendixKing KFC 150/200, S-TEC). This makes it a practical replacement path when a KI 256 flight director gyro fails -- drop in a GI 275, keep the existing autopilot running, and the customer gets a modern PFD in the process.

**Wiring:** Expect RS-232 and ARINC 429 harnesses. If replacing a simple vacuum AI, new wiring runs are required. If replacing a KI 256 or similar flight director instrument, some existing wiring may be reusable, but plan for adapter cables and connector changes.

**Typical Downtime:** 2-5 days per unit depending on configuration. A straightforward AI replacement in a well-documented airframe is a 2-day job. An HSI configuration with magnetometer install, or adding engine monitoring, pushes toward 4-5 days.

## Flight / Bench Performance

The display is a 3.125-inch round touchscreen with excellent sunlight readability and noticeably better resolution and brightness than the G5. The touchscreen is responsive, but Garmin included dual concentric knobs as a secondary input method -- important for turbulence when precise tapping becomes difficult.

Synthetic Vision (when enabled) renders 3D terrain, obstacles, and runway depictions on the attitude display. In practice, this is most useful during nighttime approaches and in mountainous terrain.

Boot-up time is approximately 30-45 seconds from power application to a usable attitude display. The backup battery maintains the display through brief power interruptions without requiring a full re-initialization.

On the bench, the ADAHRS alignment is straightforward. The unit self-aligns after installation, though the initial heading alignment on the HSI configuration requires a compass swing with the GMU 11.

## Related Products

**Garmin G5 (~$2,700-$3,700 installed):** A lower-cost Garmin instrument in the same 3-1/8-inch cutout. Provides attitude and heading reference without touchscreen, synthetic vision, engine monitoring, or ARINC 429. Suitable for owners needing a straightforward vacuum AI replacement.

**Aspen Evolution Pro MAX (~$5,000-$7,000 installed):** Replaces AI and HSI positions with a single tall rectangular screen for a consolidated vertical PFD scan. Requires cutting the panel between the two round cutouts. Aspen has a smaller installed base than Garmin.

**Aspen E5 (~$6,000-$7,000 installed):** Entry-level Aspen with a 6-inch diagonal display. Requires an ACU for autopilot and navigator integration. 1-hour backup battery.

**uAvionix AV-30-C (~$2,500-$3,000 installed):** The lowest-cost certified digital AI/DG replacement at $2,299 box price. Built-in angle-of-attack indicator. Lacks synthetic vision, engine monitoring, and ARINC 429 integration depth.

## Price & Value

Box prices run approximately $3,995 to $4,995 per unit depending on configuration (AI base model on the low end; HSI or MFD configurations on the high end). A two-pack (AI + HSI) typically runs $7,990 to $8,990 for the hardware.

The Synthetic Vision unlock adds ~$995 per unit. The GMU 11 magnetometer for HSI operation adds ~$400-$500.

Installed costs, including labor, wiring, pitot-static work, and configuration, typically land between $5,000 and $9,000 per unit. A complete two-unit project (AI + HSI) runs $12,000 to $16,000 installed. The Panel Planner 101 article for a Cessna 182 retrofit lists two GI 275s (AI + EHSI) at approximately $9,000 in a conservative option, though that figure likely reflects hardware-only or a straightforward swap in a well-prepared airframe.

For context, rebuilding a single mechanical KI 256 flight director gyro costs $2,500 to $3,500 and gives you back the same aging technology. A GI 275 replacement costs more upfront but delivers a modern PFD with no moving parts, a backup battery, and a pathway to future autopilot upgrades. That math favors the GI 275 in almost every scenario.

*All prices are approximate and vary by shop, region, and aircraft type. Get written proposals.*

## Summary

The GI 275 is a multi-function electronic flight instrument that fits a standard 3-1/8-inch round gauge cutout. It can be configured as an AI, HSI, CDI, or engine indicator. Key technical characteristics:
- True round form factor — mounts from behind the panel without custom fabrication in most aircraft.
- 60-minute backup battery for electrical failure scenarios.
- RS-232 and ARINC 429 interfaces enable broad integration with both Garmin and many legacy autopilot systems.
- Can serve as the attitude source for GFC 500 and GFC 600 autopilots, and interfaces with Century, BendixKing KFC 150/200, and S-TEC legacy autopilots.
- Optional Synthetic Vision Technology (SVT) adds 3D terrain and obstacle rendering (~$995 software unlock).
- When configured as an MFD/EIS with a GEA 24, it replaces all mechanical engine instruments.
- Competing products from Aspen, uAvionix, and Garmin's own G5 offer different trade-offs in price, display size, and integration depth.

## Key Technical Facts

- Drops into a standard 3-1/8-inch round gauge cutout with no panel cutting or custom fabrication required.
- Internal solid-state ADAHRS replaces spinning vacuum gyros — no moving parts, no vacuum system dependency.
- 60-minute backup battery maintains attitude and airspeed data through a complete electrical failure.
- When replacing a failed KI 256 flight director gyro, the GI 275 can maintain compatibility with the existing autopilot while providing a digital PFD.
- Engine monitoring configuration (with GEA 24) displays RPM, manifold pressure, EGT/CHT, fuel flow, oil pressure, and oil temperature with SD card logging.
- Synthetic Vision Technology (SVT) renders 3D terrain, obstacles, and runway depictions — useful for night approaches and mountainous terrain.
- Built-in Wi-Fi enables database updates via Database Concierge without pulling SD cards.
- The GMU 11 magnetometer (HSI configuration) mounts remotely and requires a compass swing during installation.

## Deep Dive Resources

For editorial reviews, flight test observations, and detailed comparison analysis, check out these articles:
- [Aviation Consumer: Entry-Level EFIS - Budget Glass Upgrade Options](https://aviationconsumer.com/avionics/entry-level-efis/) -- Larry Anglisano's comparison of G5, GI 275, AV-30-C, and Aspen E5
- [Aviation Consumer: Panel Planner 101 - Modern IFR Cessna 182](https://aviationconsumer.com/avionics/panel-planner-101-modern-ifr-cessna-182/) -- GI 275 in a real-world IFR retrofit scenario
- [Aviation Consumer: What's the Best Display Upgrade?](https://www.aviationconsumer.com) -- Comparative analysis of display upgrade paths
- [Aviation Consumer: IFR on a Budget - $15K Upgrade Path](https://www.aviationconsumer.com) -- Budget-conscious IFR modernization featuring the GI 275

## Common Squawks & Troubleshooting

### "AHRS ALIGN, KEEP WINGS LEVEL" on Power-Up
- **Symptom:** On power-up, the attitude indicator displays "AHRS ALIGN, KEEP WINGS LEVEL" and a red X may appear over the attitude indicator. Pilots or techs may interpret this as a malfunction.
- **Root Cause:** This is **normal behavior**, not a fault. The ADAHRS needs approximately 30-60 seconds to self-align its accelerometers and rate gyros. A red X appears if valid heading data is not yet received from the GMU 11 magnetometer. The AHRS can complete alignment while taxiing and even in flight.
- **Resolution:** Wait for alignment to complete (typically under 60 seconds). If the red X persists after 2+ minutes on the ground, check the GMU 11 magnetometer wiring and verify the heading source configuration.
- **Source:** Garmin GI 275 Pilot's Guide; Garmin installation documentation

### "ADAHRS + AP Power Fault" Message
- **Symptom:** The unit displays an "ADAHRS + AP Power Fault" message, potentially accompanied by intermittent attitude data loss or autopilot disconnects.
- **Root Cause:** A power supply issue where the GI 275's internal ADAHRS and the connected autopilot system experience voltage irregularities. This can be caused by a shared bus with high-draw accessories, corroded ground connections, or an aging voltage regulator.
- **Resolution:** Addressed in **Garmin Service Bulletin 23096 Rev B**. Verify clean, dedicated power and ground connections to the GI 275. Check the aircraft's voltage regulator output and bus voltage under load. Ensure no high-amperage accessories (landing lights, pitot heat) are sharing the same bus or causing voltage sag.
- **Source:** Garmin SB 23096 Rev B

### AHRS Data Loss on Pitot Input / GPS Failure
- **Symptom:** In flight, simultaneous loss of pitot input (e.g., blocked pitot tube) and GPS data causes the ADAHRS to fail entirely, resulting in complete loss of attitude data. This is more severe than expected for a partial sensor failure.
- **Root Cause:** The ADAHRS algorithm relies on multiple sensor inputs for state estimation. When both pitot pressure and GPS velocity data are lost simultaneously, the system cannot maintain a valid attitude solution and flags the attitude display.
- **Resolution:** This is a known architectural limitation. Maintaining clear pitot tubes (pitot heat) and GPS antenna integrity mitigates the risk. Installing dual GI 275 units provides redundancy — if one unit's ADAHRS fails, the other continues to provide attitude data independently.
- **Source:** Transport Safety Board investigation report; pilot forum discussions

### GPS Approach and Localizer Tracking Errors
- **Symptom:** The CDI needle shows erratic deviation or fails to center properly during GPS approaches or localizer tracking when the GI 275 is acting as the primary CDI source.
- **Root Cause:** Software issue in earlier firmware versions affecting the CDI scaling and approach sequencing logic.
- **Resolution:** Update to **Software Version 3.01 or later** per Garmin Service Bulletin 23086 Rev A.
- **Source:** Garmin SB 23086 Rev A
