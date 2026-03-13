# 406 MHz Emergency Locator Transmitters (ELT) — Overview

**Manufacturers:** Artex (ACR Electronics), Kannad, ACK Technologies
**Category:** ELTs / Safety Equipment
**Price Range:** $450 - $1,600 (unit only); $1,500 - $3,500 (installed)
**Regulatory Basis:** 14 CFR 91.207
**Last Updated:** March 2026

---

## What It Is

An Emergency Locator Transmitter (ELT) is a crash-activated radio beacon that transmits a distress signal to help search-and-rescue teams locate a downed aircraft. Most GA aircraft are required to carry one under 14 CFR 91.207, with limited exceptions for certain training, ferry, and agricultural flights.

The current standard is 406 MHz. These beacons transmit a 5-watt digital signal burst every 50 seconds on 406.028 MHz, picked up by the Cospas-Sarsat satellite constellation. Each beacon is registered with NOAA and carries a unique hex identifier tied to the aircraft and owner — when it goes off, search-and-rescue knows who they are looking for. The older 121.5 MHz analog ELTs are still installed on many aircraft, but satellites stopped monitoring 121.5 MHz in February 2009. A 121.5-only ELT is functionally a homing device for local searchers with handheld receivers — useful, but it will not trigger a satellite alert.

The FAA has not mandated 406 MHz for Part 91 operations (as of this writing), but the practical reality is clear: if you crash in a remote area and your ELT is 121.5-only, nobody is hearing it from orbit. The 406 MHz upgrade is a safety-of-life decision.

GPS-equipped 406 MHz ELTs add aircraft position coordinates to the distress signal. Without GPS, the satellite system can locate a 406 MHz beacon to within roughly one nautical mile. With GPS position encoded in the signal, rescue teams get coordinates accurate to 100 meters or better, and they get them on the first satellite pass. That difference can be measured in hours of search time — and in survivable conditions, hours matter.

For the non-pilot tech: think of it this way. The old 121.5 ELTs were like screaming in a forest and hoping someone nearby heard you. A 406 MHz ELT is like calling 911 — the system knows who you are and roughly where you are. A 406 MHz ELT with GPS is like calling 911 with your phone's location services turned on.

## How It Works

The ELT is a self-contained transmitter with an integrated G-switch (crash sensor). When the aircraft experiences a deceleration event exceeding a threshold (typically around 4-6 G depending on model), the G-switch triggers and the beacon begins transmitting automatically. Most units also have a manual activation switch accessible from the cockpit, and the unit itself has a manual switch on the case.

**The 406 MHz signal:** The beacon transmits a coded digital burst at 406.028 MHz. This burst contains the beacon's unique hex ID, and on GPS-equipped models, the aircraft's last-known position. The signal is picked up by Cospas-Sarsat Medium Earth Orbit Search and Rescue (MEOSAR) satellites, which relay the alert to a ground-based Mission Control Center, which contacts the appropriate Rescue Coordination Center. The whole chain from activation to rescue notification can happen in minutes.

**The 121.5 MHz homing signal:** All 406 MHz ELTs also transmit simultaneously on 121.5 MHz. This low-power analog signal is used by local search-and-rescue teams with direction-finding equipment once they are in the area. It is a close-range homing tool, not a primary alerting frequency.

**GPS integration options:**
- **Internal GPS:** Some models (Kannad Integra, certain Artex models) have a GPS receiver built into the ELT. The GPS antenna is either integrated into the ELT antenna or uses a small separate antenna mounted on the aircraft skin. Internal GPS is self-contained — no wiring to the aircraft's panel GPS.
- **External GPS interface:** Some models connect to the aircraft's existing panel-mount GPS (Garmin, Avidyne, etc.) via RS-232 serial data. This approach avoids adding another GPS antenna but requires a data cable run from the panel GPS to the ELT, which is typically mounted in the aft fuselage. More wiring, more labor.
- **No GPS:** Budget models transmit 406 MHz without position data. The satellite system can still locate the beacon through Doppler positioning, but response times are longer and accuracy is reduced.

**Battery:** ELT batteries are lithium-based and have a shelf life of approximately 5-6 years (varies by model and manufacturer). Battery replacement is required before the expiration date — this is an inspection item. Replacement batteries typically cost $150-$250. Some models use proprietary battery packs; a few use standard lithium D-cells.

**Registration:** Every 406 MHz ELT must be registered with NOAA through the NOAA Beacon Registration Database. Registration is free and ties the beacon's hex code to the aircraft registration, owner contact information, and emergency contacts. If an owner sells the aircraft, the registration must be updated. Unregistered beacons will still trigger an alert, but search-and-rescue has no information about who they are looking for — which defeats much of the purpose.

## Installation Considerations

ELT installations are among the most straightforward avionics projects in the shop. If you are a newer tech looking for a manageable first install, this is a good one.

**Mounting:** The ELT mounts in the aft fuselage, typically on a tray or bracket secured to structure. The mount must withstand 100G in the crash environment — this is not optional. Most manufacturers provide approved mounting hardware. On Cessna singles, the ELT is commonly accessible through a panel in the aft baggage area. On Pipers, it is often behind the baggage compartment bulkhead.

**Antenna:** A dedicated ELT antenna mounts on the top of the fuselage, aft of the cabin. Antenna options include:
- **Whip antenna:** Rod-style, lower cost, adequate for most installations. Some models are speed-limited (typically 225 knots or below).
- **Blade antenna:** Low-profile, higher speed rating, slightly more expensive. Required for faster airframes and pressurized aircraft.
- **Combo antenna (GPS + 406/121.5):** Available on certain models with internal GPS. Reduces the number of antenna holes in the aircraft skin.

**Remote switch:** A panel-mounted remote control switch is required. This allows the pilot to manually activate the ELT and to test the unit. The switch connects to the ELT via a wire run from the panel to the aft fuselage. Most switches include an LED status indicator.

**GPS wiring (if applicable):** If the chosen model uses an external GPS interface, a serial data cable must be run from the panel-mounted GPS to the ELT. This is the only part of the installation that adds meaningful complexity. Route the cable with existing wire bundles, secure it properly, and verify the data connection works during testing.

**Typical downtime:** 1-2 days for a straightforward installation. If you coordinate the install with an annual inspection — which is advisable — the aircraft is already open and the incremental downtime is minimal.

**Weight and balance:** ELTs weigh between 1.5 and 3 pounds depending on model. The mounting location in the aft fuselage means the weight is behind the CG datum, so a weight and balance update is required. The impact is small but must be documented.

**Paperwork:** FAA Form 337 for a major alteration. STC or approved data is required — check the manufacturer's approved model list (AML) to confirm the ELT is approved for the specific aircraft. Most 406 MHz ELTs have broad AMLs covering the majority of Part 23 aircraft.

## Flight / Bench Performance

ELTs are not performance equipment — they sit dormant for the life of the aircraft and (hopefully) never activate in a real emergency. That said, there are practical differences between models worth noting.

**Self-test:** All 406 MHz ELTs have a self-test function accessible through the remote switch. The test verifies internal circuitry and, on GPS-equipped models, confirms GPS acquisition. Self-test does not transmit a full 406 MHz signal (to avoid false alerts to the satellite system). Run the self-test during installation, during annual inspections, and whenever the battery is replaced.

**False activation:** This is the bane of the ELT world. Hard landings, turbulence, taxiing over rough surfaces, and even slamming the baggage door can trigger the G-switch. False activations waste search-and-rescue resources and annoy everyone involved. Modern 406 MHz ELTs have improved G-switch designs that reduce false triggers compared to older 121.5 units, but they still happen. The NOAA registration database allows owners to confirm or deny an activation quickly, which helps.

**GPS acquisition time:** Models with internal GPS need a clear view of the sky (through the antenna) to acquire satellites. In a crash scenario, if the aircraft is inverted or the antenna is buried, GPS acquisition may fail — but the 406 MHz signal will still transmit without position data. External GPS interface models have the advantage of using a panel GPS that likely had a fix before the crash, and some latch the last-known position.

**Battery life:** Manufacturers specify battery shelf life (typically 5-6 years) and operational transmit time (typically 24-48 hours continuous). Both matter, but shelf life is the inspection item. Mark the battery expiration date clearly on the unit and in the aircraft maintenance records.

## Related Products

The 406 MHz ELT market has a handful of players. Here are the main options:

### With Internal GPS (Higher End)

| Model | Approx. Price | GPS | Battery Life | Notes |
|-------|--------------|-----|-------------|-------|
| Kannad AF Integra | ~$1,200-$1,400 | Internal | 6 years | Built-in GPS with internal antenna. Works well in fiberglass and fabric aircraft. Solid reputation. |
| ELT406GPS (various) | ~$1,600 | Internal | Varies | Internal GPS with low-profile blade antenna housing both GPS and 406 MHz elements. Uses replaceable D-cell lithium batteries (~$200). |
| Skyhunter 406 | ~$1,150-$1,500 | Internal | Varies | Internal GPS, USB programming capability. Price depends on antenna type (whip vs. blade). |

### Without Internal GPS (Budget)

| Model | Approx. Price | GPS | Notes |
|-------|--------------|-----|-------|
| Artex ELT-1000 (ME406 successor) | ~$620 | External interface available | No internal GPS, but can connect to panel GPS. Flexible antenna options. Popular with Garmin-equipped fleets. |
| Artex ELT-345 | ~$550 | External interface available | Whip antenna only. Speed-limited to 225 knots. Budget option for slower aircraft. |
| ACK E-04/R | ~$450 | External interface available | Lowest cost option. Upgrade path available for owners with existing ACK installations. |

All prices are approximate and vary by dealer and configuration.

**The practical choice comes down to this:** If the aircraft already has a panel-mount GPS with a serial output port, a budget ELT with external GPS interface gets you position-encoded distress signals at a lower unit cost — but with more installation wiring. If simplicity is the priority, or the aircraft lacks a panel GPS, an ELT with internal GPS is the cleaner solution. The Kannad Integra and Artex ELT-1000 are the most commonly recommended models across the shop community.

## Price & Value

- **Unit cost (no GPS):** $450 - $620
- **Unit cost (with internal GPS):** $1,150 - $1,600
- **Installation labor:** $500 - $1,500 (highly variable; less if combined with annual inspection)
- **Total installed cost:** $1,500 - $3,500
- **Battery replacement:** $150 - $250 every 5-6 years
- **NOAA registration:** Free

These are approximate prices. Avionics pricing varies by shop and region.

ELTs are required equipment on most GA aircraft, so the question is not whether to have one — it is whether to upgrade from 121.5 to 406 MHz, and whether to add GPS. From a pure cost perspective, a basic 406 MHz ELT without GPS can be installed for under $1,500. Adding GPS capability pushes the project to $2,000-$3,500 installed.

The value proposition of GPS is straightforward: faster rescue. In a survivable crash in remote terrain, the difference between a one-mile position accuracy and a hundred-meter accuracy translates directly into how quickly search-and-rescue finds the aircraft. For roughly $500-$800 more in equipment cost, GPS-equipped ELTs provide meaningfully better outcomes when they are needed.

Is the upgrade from 121.5 to 406 MHz worth it? Satellites do not monitor 121.5 MHz anymore. If the aircraft has a 121.5-only ELT, it is carrying a piece of required equipment that cannot alert anyone beyond local radio range. The upgrade is a safety-of-life decision, and the cost is modest relative to most avionics projects.

## Summary

Every GA aircraft operating under 14 CFR 91.207 is required to carry an ELT. Key characteristics of 406 MHz ELTs:
- 406 MHz beacons transmit to the Cospas-Sarsat satellite constellation. Satellites stopped monitoring 121.5 MHz in 2009 — 121.5-only ELTs cannot trigger satellite alerts.
- GPS-equipped models encode position coordinates in the distress signal, reducing location accuracy from ~1 NM to ~100 meters.
- Internal GPS models simplify installation. External GPS interface models require wiring to an existing panel-mount GPS.
- Battery shelf life is typically 5–6 years. Battery replacement is a scheduled maintenance item.
- NOAA beacon registration is required and free. Without registration, search-and-rescue receives an alert with no aircraft or owner identification.
- Total installed cost: $1,500–$3,500 depending on model and GPS configuration.
- This is a straightforward installation project suitable for technicians building experience.

## Key Technical Facts

- 406 MHz beacons transmit a 5W digital burst every 50 seconds on 406.028 MHz received by Cospas-Sarsat MEOSAR satellites.
- All 406 MHz ELTs also transmit simultaneously on 121.5 MHz for local close-range homing.
- G-switch activation threshold: approximately 4–6 G depending on model. False activations from hard landings or turbulence remain possible.
- GPS-equipped models: internal GPS (Kannad Integra, Skyhunter) or external GPS interface (Artex ELT-1000, ACK E-04/R).
- Battery shelf life 5–6 years. Operational transmit time 24–48 hours continuous. Replacement cost $150–$250.
- Mounting must withstand 100G. FAA Form 337 required for installation.
- NOAA registration ties the beacon's hex code to aircraft registration and owner emergency contacts.

## Deep Dive Resources

For editorial reviews and detailed product comparisons on 406 MHz ELTs:

- [Aviation Consumer: 406 MHz ELT Retrofits — GPS Ups Effort, Cost](https://aviationconsumer.com/accessories/406-mhz-elt-retrofits-gps-ups-effort-cost/) — Larry Anglisano's detailed comparison of GPS-equipped vs. non-GPS ELTs, installation considerations, and model recommendations.
- [NOAA Beacon Registration Database](https://beaconregistration.noaa.gov/) — Free registration portal for all 406 MHz beacons. Registration is required.
- [Cospas-Sarsat System Overview](https://www.sarsat.noaa.gov/) — How the satellite-based search-and-rescue system works.
- [14 CFR 91.207](https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-C/section-91.207) — FAA regulation governing ELT requirements and exceptions.
