# BendixKing KCS55A Heading System
**Manufacturer:** BendixKing (Honeywell)
**Category:** Heading Systems
**Price Range:** $2,500 (complete used system) to $7,000+ (overhaul/repair of failed components); glass upgrade path starts at ~$5,000 (GI 275) to ~$14,000 (Aspen EFD1000 Pro)
**STC Coverage:** Found in thousands of Part 23 GA aircraft -- Cessna, Beechcraft, Piper, Mooney, and others. It was the factory-installed heading system on many aircraft produced from the late 1970s through the 1990s.

## What It Is

The KCS55A is an all-electric, slaved horizontal situation indicator (HSI) system. For decades, it was BendixKing's flagship heading system, and it remains one of the most commonly encountered HSI installations in general aviation. "Slaved" means the system automatically corrects for gyro precession using a magnetometer (flux detector) that senses the earth's magnetic field, so the pilot does not need to manually reset heading as they would with a standard directional gyro (DG). In practical terms, the heading always stays accurate without pilot intervention.

The system is a multi-component architecture. There is no single box. The KCS55A is a system name that describes the combination of four interconnected components working together:

- **KI 525A** -- the HSI indicator itself. This is the panel-mounted instrument the pilot reads. It displays heading, course deviation (CDI), and glideslope on a single dial face.
- **KG 102A** -- a remote electric heading gyro. This is the spinning mass that senses aircraft heading. It mounts behind the panel or in a remote location.
- **KA 51B** -- the slaving accessory (slaving amplifier/controller). This unit takes the magnetic heading reference from the flux detector and drives the gyro to match. It is the brains of the slaving loop.
- **KMT 112** -- a flux detector (magnetometer). This is typically mounted in a wingtip or tail section, away from magnetic interference sources. It senses the earth's magnetic field and provides a magnetic heading reference to the slaving system.

If any one of these four components fails, the entire heading system goes down. Understanding which component failed is the first diagnostic step.

## How It Works

The KCS55A operates on a slaved gyro principle. Here is the signal chain:

1. The **KMT 112 flux detector** senses the earth's magnetic field from its remote location (wingtip, tail) and sends a magnetic heading reference signal to the KA 51B slaving accessory.
2. The **KA 51B slaving accessory** compares the magnetic reference against the heading output from the KG 102A gyro. If the gyro has drifted (precession), the slaving accessory sends a correction signal to nudge the gyro back into alignment.
3. The **KG 102A remote gyro** provides the actual heading data to the KI 525A indicator. Because it is electrically driven (not vacuum), it does not depend on the aircraft's vacuum system at all.
4. The **KI 525A HSI indicator** displays the corrected heading, along with VOR/LOC course deviation and glideslope information. The pilot sees a rotating heading card, a course pointer, and a deviation bar all on one instrument face.

The entire system is electrically powered. It does not use the vacuum system. This is a significant advantage over vacuum-driven HSIs like the Century NSD360A, because a vacuum pump failure does not affect heading information.

For a technician coming from a military background, the flux-gate slaved gyro concept is similar in principle to the compass systems on military aircraft, where a remote magnetic sensor automatically corrects a gyro compass. The civilian version is less sophisticated but the underlying concept is the same.

## Installation Considerations

**The wiring harness is the real challenge.** The KCS55A installation involves four separate components connected by a complex wiring harness with numerous junctions and interconnects running throughout the airframe. The flux detector is typically in a wingtip. The gyro may be behind the panel or in a remote bay. The slaving accessory mounts behind the panel. The HSI indicator is in the instrument panel. That is a lot of wire running to a lot of places.

**Troubleshooting wiring faults** is where shops burn the most labor hours on this system. A heading discrepancy, wandering heading, or intermittent failure is often not a component failure at all -- it is a corroded connector, a chafed wire, or a bad solder joint somewhere in the harness. Tracing the fault can require significant time.

**Installing a used system** is a major project even when all four components are known good. You are routing new wiring for the flux detector, mounting the remote gyro, installing the slaving accessory, and terminating everything at the HSI. Budget for serious shop time. This is not a drop-in replacement.

**Compass swing required.** Any installation or replacement of the flux detector requires a compass swing to calibrate the magnetic heading reference.

**Interfaces:** The KI 525A HSI takes VOR/LOC and glideslope inputs from the aircraft's nav receivers. It also provides heading output to autopilot systems. Many KFC 150, KFC 200, and S-TEC autopilot systems depend on heading data from the KCS55A system. If the heading system fails, the autopilot may lose heading mode capability.

**Typical downtime:** For a wiring fault diagnosis and repair, 1-3 days depending on how deep the fault is buried. For a component overhaul swap (KI 525A or KG 102A), add 1-2 days for shipping to/from the overhaul shop plus a day for reinstall and testing. A complete new installation of a used system in an aircraft that did not previously have one is a multi-day project -- plan for a week.

## Flight / Bench Performance

When the KCS55A is working properly, it is an excellent heading system. The slaved HSI provides accurate, drift-free heading that the pilot never needs to manually correct. The KI 525A HSI indicator presents heading, course, and glideslope in a single scan, which is a significant improvement over a DG + separate CDI combination.

The KG 102A electric gyro has a long service life when properly maintained, but it is the most common failure point in the system. Symptoms of a failing gyro include heading wander, slow response to turns, and erratic heading indication. Some earlier serial numbers of the KG 102A have reached the point where parts are no longer available for overhaul, which forces an exchange or salvage replacement.

The KI 525A indicator is mechanically complex (it has a rotating card, course deviation mechanism, and glideslope display all in one instrument), and overhaul costs reflect that complexity. An overhaul or exchange on the KI 525A runs approximately $3,600 and up.

On the bench, testing the system requires a heading system test set to simulate flux detector signals and verify gyro slaving. Bench testing the KI 525A requires a VOR/LOC/GS signal generator to verify all CDI and glideslope functions.

## Related Products

No manufacturer is producing new all-electric slaved analog HSI systems. The comparison is between repair/maintenance and electronic upgrades.

**Garmin GI 275 in HSI mode (~$5,000–$9,000 installed):** Drops into the same 3-1/8-inch panel cutout. Can interface with the existing KG 102A gyro and flux detector or use its own GMU 11 magnetometer.

**Aspen EFD1000 Pro (~$14,000 installed):** Complete glass PFD replacing the HSI with a full electronic flight display (attitude, heading, course deviation, airspeed). Requires its own magnetometer and ADAHRS — independent of KCS55A components.

**Sandel SN3500 EHSI (~$17,000+ with AHRS):** Electronic HSI with reversionary attitude function. Can interface with existing KCS55A remote gyro and flux detector.

**Century NSD360A:** Vacuum-driven, non-slaved, self-contained analog HSI. Overhaul approximately $3,000. Simpler and cheaper, but requires vacuum system and manual heading correction.

## Price & Value

The economics of the KCS55A come down to one question: how much is left in the system, and what broke?

- **KI 525A overhaul/exchange:** ~$3,600+
- **KG 102A overhaul/exchange:** ~$2,500-$4,000 (some early serial numbers are beyond economical repair due to parts obsolescence)
- **Complete used KCS55A system:** ~$2,500 (but installation labor is significant -- easily $3,000-$5,000 in shop time)
- **Wiring fault diagnosis and repair:** Highly variable -- could be $500 for an obvious connector issue or $2,000+ for a buried harness fault
- **Total repair cost for a typical failure:** $3,000-$7,000 depending on what failed and how deep the problem is

For comparison, a Garmin GI 275 in HSI configuration runs approximately $5,000-$9,000 installed. That gets you a solid-state instrument with no spinning parts, a backup battery, and a pathway to a future GFC 500 autopilot. The math increasingly favors the GI 275, especially when the KG 102A gyro is the failed component.

The case for repairing the KCS55A is strongest when the failure is minor (wiring fault, slaving accessory issue) and the KI 525A and KG 102A are still healthy. Spending $1,000-$2,000 on a wiring repair to get several more years out of a working system is reasonable.

The case for upgrading is strongest when a major component (KI 525A or KG 102A) has failed and the customer is facing a $3,500+ repair bill for 30-year-old technology.

*All prices are approximate and vary by shop, region, and component condition. Get written proposals.*

## Summary

The KCS55A is a four-component all-electric slaved HSI system found in thousands of GA aircraft. Key characteristics:
- All-electric — does not depend on the vacuum system. Vacuum pump failure does not affect heading.
- Four-component architecture (KI 525A indicator, KG 102A gyro, KA 51B slaving accessory, KMT 112 flux detector). Failure of any component takes down the heading system.
- The KG 102A gyro is the most common failure point. Some early serial numbers face parts obsolescence.
- Wiring faults account for a significant portion of troubleshooting labor — corroded connectors and chafed wires can mimic component failures.
- When facing component overhaul costs exceeding $3,500, an electronic HSI replacement (GI 275, Aspen EFD1000 Pro) enters the same cost range.
- Autopilot heading mode depends on this system — heading system failure can disable autopilot heading functions.

## Key Technical Facts

- Four-component system: KI 525A (panel HSI indicator), KG 102A (remote electric gyro), KA 51B (slaving amplifier), KMT 112 (flux detector/magnetometer).
- All-electric operation — no vacuum system dependency.
- Slaved operation automatically corrects for gyro precession using the flux detector's magnetic reference.
- KI 525A overhaul/exchange: approximately $3,600+. KG 102A overhaul/exchange: approximately $2,500–$4,000.
- Flux detector replacement or relocation requires a compass swing.
- The heading output interfaces with KFC 150, KFC 200, and S-TEC autopilot systems.
- Common failure symptoms: heading wander, slow turn response, erratic heading indication — may indicate gyro failure or wiring fault.

## Deep Dive Resources

For editorial reviews, repair analysis, and upgrade path comparisons, check out these articles:
- [Aviation Consumer: When Analog HSIs Die -- Repair May Be Best](https://aviationconsumer.com/avionics/when-analog-hsis-die-repair-may-be-best/) -- Larry Anglisano's detailed analysis of repair vs. replacement economics for the KCS55A and NSD360A
- [Aviation Consumer: Entry-Level EFIS -- Budget Glass Upgrade Options](https://aviationconsumer.com/avionics/entry-level-efis/) -- Comparison of GI 275, G5, Aspen E5, and other display upgrades that may replace an aging HSI
- [Aviation Consumer: What's the Best Display Upgrade?](https://www.aviationconsumer.com) -- Comparative analysis of display upgrade paths including HSI replacements

*Content last updated: March 2026. Prices and availability are approximate.*
