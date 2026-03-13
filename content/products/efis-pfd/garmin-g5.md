# Garmin G5
**Manufacturer:** Garmin
**Category:** EFIS / PFD
**Price Range:** $3,500 – $5,500 (installed per unit)
**STC Coverage:** AML-STC covering most Part 23 Class I and Class II single- and twin-engine piston aircraft — one of the broadest in the budget EFIS segment.

## What It Is

The Garmin G5 is a compact, solid-state electronic flight instrument designed to replace a single 3-1/8-inch round mechanical gauge. It can be configured as either an attitude indicator (AI) or a horizontal situation indicator (HSI)/directional gyro (DG), giving shops a straightforward path to eliminating vacuum gyros one instrument at a time. At roughly $2,100 to $2,750 for the box alone, it remains the entry point into the Garmin certified glass ecosystem.

## How It Works

The G5 contains an internal MEMS-based ADAHRS — Air Data, Attitude, and Heading Reference System — that replaces the spinning mass gyroscope with solid-state accelerometers and rate sensors. It connects to the aircraft's existing pitot-static plumbing to derive airspeed, altitude, and vertical speed digitally.

In AI configuration, the 3.5-inch LCD presents pitch, roll, slip/skid, airspeed trend, altitude, vertical speed, and ground speed — considerably more data than the mechanical attitude indicator it replaces.

In HSI/DG configuration, the display shows a rotating compass card, course deviation indicator, and glide slope. This mode requires a remote GMU 11 magnetometer (approximately $400) for heading reference and an RS-232 connection to a GPS navigator (GTN, GNS, GPS 175, or similar) to display GPS/VOR/LOC course deviation.

When two G5 units are installed — one as AI, one as HSI — they communicate over Garmin's CAN bus. If the AI unit fails, the HSI can revert to display attitude data, providing meaningful redundancy without the cost of a full standby instrument.

A rechargeable lithium-ion battery provides approximately four hours of attitude data backup during a complete electrical failure — well beyond what any vacuum-driven gyro offers in that scenario.

## Installation Considerations

**Panel fitment:** The G5 is designed for a standard 3-1/8-inch instrument cutout, but the unit itself is square with a round bezel. In practice, shops often need to file or relieve the back of the panel slightly to get flush mounting. It is not a true drop-in like the round-bodied GI 275.

**Pitot-static plumbing:** Despite being a digital instrument, the G5 still requires physical connections to the pitot and static systems. Plan for routing pneumatic lines to the back of the unit if you are replacing an attitude indicator that did not previously have pitot-static connections.

**Wiring:** Power, RS-232 for GPS navigator input (HSI config), and CAN bus (dual G5 setups). If the HSI configuration is used, a GAD 29 adapter box may be required depending on the connected navigator. The GMU 11 magnetometer mounts remotely — typically in a wingtip or tailcone — and requires its own wiring run.

**Autopilot integration:** A single G5 (or a dual pair) serves as the required attitude source for the Garmin GFC 500 autopilot. Installing a G5 now is a prerequisite if the customer has any future interest in a GFC 500. Without a G5 or GI 275 in the panel, the GFC 500 cannot function.

**Typical downtime:** One to three days for a single unit, making this one of the fastest and least disruptive avionics installs on the market. A dual G5 installation (AI + HSI) can usually be completed in two to four days.

**Vacuum system removal:** A dual G5 setup can justify removing the engine-driven vacuum pump entirely, saving weight, eliminating a maintenance item, and removing a common failure point. This is a strong selling point for IFR operators.

## Flight / Bench Performance

The 3.5-inch QVGA LCD is sunlight-readable and provides a clean presentation at reasonable viewing angles. Compared to the GI 275's edge-to-edge high-resolution display, the G5's screen looks dated, but it is entirely functional and a significant improvement over any mechanical gyro.

Attitude initialization after power-up takes roughly 30 seconds. The internal ADAHRS tracks well and shows no meaningful lag during normal maneuvering. Airspeed trend vectors and the altitude bug are useful features that give the pilot more situational awareness than the mechanical instruments they replace.

The four-hour battery backup is a genuine safety advantage. If the alternator quits in IMC, the pilot has hours of reliable attitude, airspeed, and altitude data — compared to a vacuum gyro that stops working the moment the vacuum pump fails and the residual vacuum bleeds off.

One limitation: the G5 does not support synthetic vision. There is no 3D terrain overlay, no obstacle depiction, and no runway environment display. For those features, the customer needs to step up to the GI 275.

## Related Products

**uAvionix AV-30-C (~$2,300 box price):** The lowest-cost certified option. Fits the same 3-inch cutout, provides attitude or DG functionality, and includes a built-in angle-of-attack indicator. Approximately $400-$500 less than a G5 in AI configuration. Does not serve as the attitude source for Garmin autopilots. Navigation interface options are more limited.

**Aspen E5 (~$5,995 box price):** A 6-inch diagonal display replacing both AI and HSI positions in a single unit. Requires cutting the panel between instrument holes. The ACU adapter for autopilot and navigator integration adds cost. Total installed cost approaches $7,000+.

**Garmin GI 275 (~$4,200 box price for ADAHRS version):** A higher-capability round-gauge instrument with touchscreen, synthetic vision, engine monitoring, and ARINC 429 interface. True round form factor requires no panel filing. Approximately $1,500-$2,000 more per unit than the G5.

## Price & Value

All prices are approximate and vary by shop and region.

| Item | Approximate Cost |
|------|-----------------|
| G5 box (AI configuration) | $2,149 |
| G5 box (HSI configuration with GAD 29) | $2,749 |
| GMU 11 magnetometer (HSI config) | $412 |
| Typical installation labor (single unit) | $1,000 – $2,500 |
| **Single G5 installed (AI)** | **$3,500 – $5,000** |
| **Dual G5 installed (AI + HSI)** | **$6,000 – $10,000** |

A dual G5 installation at $6,000-$10,000 is the most affordable way to get a full glass attitude and HSI display with battery backup, vacuum system elimination, and GFC 500 autopilot compatibility. No other certified solution matches that value at that price point.

The G5 does not grow into a full PFD the way the GI 275 can — it cannot display engine data, synthetic vision, or moving maps. It is a single-purpose instrument replacement, and that is exactly what keeps the price down.

## Summary

The G5 is a compact, solid-state electronic flight instrument in a 3-1/8-inch form factor that replaces mechanical vacuum gyros. Key characteristics:
- Available in AI or HSI/DG configuration. A dual G5 setup (AI + HSI) provides cross-unit redundancy via CAN bus.
- 4-hour backup battery exceeds the endurance of any vacuum-driven gyro in an electrical failure scenario.
- Serves as the required attitude source for the Garmin GFC 500 autopilot.
- Does not support synthetic vision, engine monitoring, or touchscreen input. For those capabilities, the GI 275 is the Garmin alternative.
- Competing products from uAvionix (AV-30-C) and Aspen (E5) offer different trade-offs in price, display format, and ecosystem integration.
- A dual G5 installation eliminates vacuum system dependency, removing the engine-driven vacuum pump from the maintenance cycle.

## Key Technical Facts

- Internal MEMS-based ADAHRS replaces spinning vacuum gyros with solid-state accelerometers and rate sensors. No moving parts.
- 4-hour lithium-ion backup battery maintains attitude, airspeed, and altitude data through a complete electrical failure.
- A dual G5 installation (AI + HSI) can justify removing the engine-driven vacuum pump entirely, saving weight and eliminating a maintenance item.
- The G5 has a square back with a round bezel — panel filing may be needed for flush mounting. This differs from the GI 275's true round form factor.
- In HSI/DG configuration, requires a remote GMU 11 magnetometer (~$400) and an RS-232 connection to a GPS navigator.
- Serves as the required attitude source for the Garmin GFC 500 autopilot. Without a G5 or GI 275, the GFC 500 cannot operate.

## Deep Dive Resources

- [Aviation Consumer: Garmin G5 EFIS — Standalone, Integrated](https://aviationconsumer.com/avionics/garmin-g5-efis-standalone-integrated/) — Original review covering standalone and integrated configurations.
- [Aviation Consumer: Entry-Level EFIS — Budget Glass Upgrade Options](https://aviationconsumer.com/avionics/entry-level-efis/) — Side-by-side comparison of G5, GI 275, AV-30-C, and Aspen E5.
- [Garmin G5 Product Page](https://www.garmin.com/en-US/p/570665) — Official specs, STC list, and installation manual downloads.

## Common Squawks & Troubleshooting

### ⚠️ Backup Battery Discharge When Aircraft Unpowered (Mandatory SB)
- **Symptom:** The G5's internal backup battery drains completely if the aircraft sits unpowered for extended periods (weeks). On next power-up, the backup battery may not charge properly or may show a failure indication.
- **Root Cause:** Earlier software versions did not properly manage the lithium-ion battery's trickle discharge and state-of-charge monitoring during prolonged storage.
- **Resolution:** **Garmin Service Bulletin 22013 Rev A (Mandatory)**. Update to **Software Version 8.0 or later**, which improved battery discharge detection and failure indication. Garmin covered removal, reinstallation, and repair costs through the compliance deadline (February 28, 2023). Units not updated by the deadline may incur owner costs.
- **Source:** Garmin SB 22013 Rev A; Aviation Consumer reporting

### Magnetic Heading 20-30° Off From Compass
- **Symptom:** In HSI mode, the G5's magnetic heading reads consistently 20-30° off compared to the aircraft's wet compass. The error persists after in-cockpit compass swing calibration.
- **Root Cause:** The remote GMU 11 magnetometer is being influenced by ferrous materials or electromagnetic interference (EMI) near its mounting location. Common culprits include:
  - Ferrous screws or brackets near the magnetometer
  - Proximity to electric trim motors, actuators, or wiring bundles
  - A bent or shifted mounting bracket changing the magnetometer's orientation relative to the aircraft's longitudinal axis
- **Resolution:** Verify the GMU 11 mounting location is free from ferrous materials within 12 inches. Check that the mounting bracket is straight and securely fastened. Perform a fresh compass swing (both ground and airborne calibration). If the error persists, relocate the magnetometer to a different position (alternate wingtip, tailcone, or vertical stabilizer) further from interference sources.
- **Source:** Multiple pilot reports (Reddit, MooneySpace forums); Garmin installation manual guidance

### GSA 28 Servo Intermittent Engagement (GFC 500 Systems)
- **Symptom:** When the G5 is serving as the attitude source for a GFC 500 autopilot, the autopilot intermittently fails to engage on the first attempt.
- **Root Cause:** Shared issue with the GSA 28 servo firmware timing described in the GFC 500 squawks above.
- **Resolution:** Update GSA 28 servo software to **Version 5.46** per Garmin SB 24009 Rev A.
- **Source:** Garmin SB 24009 Rev A
