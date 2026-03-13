# ADS-B for GA: Requirements Explained Simply

**Category:** Educational Guide
**Target Audience:** Entry-level avionics technicians, military veterans transitioning to GA, aircraft owners researching compliance
**Last Updated:** March 2026

---

## What Is ADS-B?

ADS-B stands for **Automatic Dependent Surveillance-Broadcast**. Every word in that name matters, so here is what each one means:

- **Automatic** -- The system transmits continuously without any pilot action. The moment the transponder powers up, it starts broadcasting. There is no button to push, no switch to flip.
- **Dependent** -- The system depends on GPS satellites for its position data. Unlike traditional ground radar (which bounces a pulse off the airplane's skin to find it), ADS-B requires the aircraft to determine its own position using an onboard GPS receiver.
- **Surveillance** -- Air Traffic Control (ATC) uses the broadcast data to track aircraft. ADS-B is replacing spinning radar dishes at airports across the country.
- **Broadcast** -- The transmission is one-way. The airplane sends its data packet out into the world once per second. It does not wait to be asked. It does not respond to a question. It just talks, constantly.

That data packet contains the aircraft's GPS-derived latitude, longitude, and geometric altitude, along with its ground speed, heading, identification (ICAO address and squawk code), and integrity metrics that tell ATC how much the system trusts its own position fix.

### Military Translation

If you came from a military aviation background, think of ADS-B as an IFF Mode S transponder that has been permanently set to broadcast GPS position data instead of waiting to be interrogated by a ground station. The entire civilian ATC system is moving from "we find you with radar" to "you tell us where you are." The philosophical shift is that same difference between passive radar surveillance and self-reported positional awareness. The aircraft is no longer a blip that the radar paints -- it is a participant that announces itself.

---

## ADS-B Out vs. ADS-B In

This is the single most important distinction to understand, and the one that causes the most confusion among aircraft owners.

### ADS-B Out (Required by Law)

ADS-B Out is YOUR aircraft broadcasting its position, altitude, velocity, and identification to ATC ground stations and to other aircraft. This is the component that is **legally mandated by the FAA**. If your aircraft does not have a functioning ADS-B Out system, it cannot legally operate in certain airspace. Period.

ADS-B Out requires two things inside the aircraft:
1. A certified WAAS GPS receiver to determine the aircraft's position with sufficient accuracy.
2. A transmitter (either a 1090 MHz Extended Squitter transponder or a 978 MHz UAT) that packages that GPS position into a digital broadcast and sends it out once per second.

### ADS-B In (Optional but Valuable)

ADS-B In is YOUR aircraft receiving the broadcasts from other aircraft and from FAA ground stations. This is **completely optional**. No regulation requires it. But it provides enormous situational awareness:

- **TIS-B (Traffic Information Service - Broadcast):** A real-time picture of surrounding air traffic displayed on a panel screen or iPad. Think of it as a 360-degree radar scope showing every ADS-B-equipped airplane within dozens of miles.
- **FIS-B (Flight Information Service - Broadcast):** Free NEXRAD weather radar images, METARs (airport weather reports), TAFs (forecasts), winds aloft data, and Temporary Flight Restriction (TFR) boundaries. All subscription-free. Forever.

**The bottom line:** The FAA mandate only requires ADS-B Out. ADS-B In is a bonus that adds significant safety value, but no inspector will ever ground an aircraft for not having it.

---

## The Regulation: 14 CFR 91.225 and 91.227

These are the two Federal Aviation Regulations that define the ADS-B mandate. Here is the plain-language version.

### When Did It Take Effect?

January 1, 2020. The compliance deadline has already passed. Aircraft that do not meet the requirement are already locked out of the airspace described below.

### Where Is ADS-B Out Required?

An aircraft must have ADS-B Out to operate in:

- **Class A airspace** -- above 18,000 feet MSL (the Flight Levels). This is where airliners fly.
- **Class B airspace** -- the busy terminal areas around the 37 busiest airports in the country (think JFK, LAX, ORD, ATL). This includes the surface area and the airspace directly above it.
- **Class C airspace** -- the terminal areas around mid-tier airports with radar approach control (think regional hubs, military joint-use fields).
- **Above the ceiling of Class B or Class C surface areas** -- even if you are just transiting overhead.
- **Within 30 nautical miles of certain Class B airports** -- this is the "Mode C veil," and it extends from the surface to 10,000 feet MSL. If you are anywhere within 30 NM of a major airport, you need ADS-B Out.
- **Above 10,000 feet MSL** -- anywhere in the country (with an exception for aircraft at or below 2,500 feet AGL).
- **Class E airspace at or above 3,000 feet MSL over the Gulf of Mexico** -- within 12 nautical miles of the coastline.

### Where Is ADS-B Out NOT Required?

- **Class G (uncontrolled) airspace below 10,000 feet MSL.** This covers most rural airports, grass strips, and backcountry operations.
- **Class E airspace below 10,000 feet MSL** (outside the other specific areas listed above).
- Most small, uncontrolled airports that do not sit underneath or near Class B or C airspace.

### The Practical Takeaway

If you fly near any major or mid-size city, if you fly above 10,000 feet, or if you ever talk to approach control, you almost certainly need ADS-B Out. If you exclusively fly a Cub out of a grass strip in rural Montana below 10,000 feet and never go near a controlled airport, you technically do not need it -- but you are in the minority.

---

## Two Frequencies: 1090 MHz vs. 978 MHz (UAT)

The FAA authorized two different radio frequencies for ADS-B Out transmissions. Understanding the difference matters because it dictates what equipment you install.

### 1090 MHz Extended Squitter (1090ES)

This is the international standard. The transmission rides on the same 1090 MHz frequency already used by Mode S transponders worldwide. When a panel-mount transponder like the Garmin GTX 335 or GTX 345 advertises "1090ES," it means the unit is a Mode S transponder that has been enhanced to continuously broadcast (squitter) ADS-B position data on 1090 MHz in addition to performing normal transponder replies.

**Key facts about 1090ES:**
- Works at all altitudes, including above FL180 (Class A).
- **Required** for operations above 18,000 feet.
- Compliant internationally -- Canada, Mexico, Europe, and everywhere else that mandates ADS-B all use 1090 MHz.
- This is what the vast majority of panel-mount transponder upgrades use.

### 978 MHz Universal Access Transceiver (UAT)

This is a U.S.-only alternative frequency. A UAT transmitter broadcasts ADS-B Out data on 978 MHz instead of 1090 MHz. The FAA created this option to reduce congestion on the 1090 MHz frequency and to provide a lower-cost compliance path for aircraft that stay below 18,000 feet.

**Key facts about 978 UAT:**
- **Only valid below 18,000 feet MSL.**
- **Only valid within U.S. domestic airspace.** Not recognized internationally.
- Used by some lower-cost solutions like the Garmin GDL 82 and certain uAvionix products.
- If the aircraft ever needs to fly into Canadian or Mexican airspace, or above FL180, a 978 UAT transmitter will not satisfy the requirement. The aircraft would need a 1090ES transponder.

### Which One Should You Recommend?

For the majority of GA aircraft, **1090ES via a panel-mount Mode S transponder is the standard path.** It covers every altitude, every airspace class, and every country. The only scenario where 978 UAT makes sense is when the aircraft will never leave U.S. airspace, never fly above 18,000 feet, and the owner is prioritizing cost above all else.

---

## What Equipment Do You Need?

To be ADS-B Out compliant, an aircraft needs three things:

1. **A transmitter capable of ADS-B Out** -- either a 1090ES Mode S transponder or a 978 MHz UAT.
2. **A certified WAAS GPS position source** -- either built into the transponder or provided by an external GPS receiver/navigator.
3. **A proper installation** -- performed under an FAA-approved method (STC, field approval, or manufacturer installation instructions), with correct wiring, antenna placement, and altitude encoding.

### Common Compliant Equipment Setups

Here are the most widely installed solutions in the GA fleet, with approximate pricing. All prices are approximate and vary by shop and region.

**Garmin GTX 335R**
- 1090ES transponder with built-in WAAS GPS.
- ADS-B Out only -- no traffic or weather reception.
- Box price: approximately $4,695. Installed: $4,500-$7,000 depending on aircraft complexity.
- The budget-conscious standard. Does exactly what the regulation requires, nothing more.

**Garmin GTX 345**
- Same 1090ES transponder platform as the 335, plus dual-band ADS-B In receiver and Bluetooth.
- Provides free traffic (TIS-B) and weather (FIS-B) on compatible panel displays or tablets.
- Box price: approximately $5,495-$5,795. Installed: $6,000-$8,000.
- The most popular all-in-one ADS-B solution in the GA market.

**uAvionix skyBeacon**
- A wingtip-mounted navigation light that integrates a 1090ES ADS-B Out transmitter with WAAS GPS.
- Replaces the left wingtip position light. Minimal wiring.
- Approximately $1,850 plus installation.
- Simplest install path, but limited: ADS-B Out only, no traditional panel transponder controls, and the old transponder stays in the panel for Mode A/C replies.

**uAvionix tailBeaconX**
- A tail-mounted position light that integrates a full 1090ES Mode S transponder with built-in WAAS GPS.
- Replaces the tail navigation light. Includes a wireless remote control for the panel.
- Approximately $2,999 plus installation.
- More capable than the skyBeacon but still a non-traditional form factor.

**Appareo Stratus ES**
- A 1090ES transponder with internal WAAS GPS.
- Panel-mount form factor, competitive with the GTX 335.
- Historically priced slightly below the Garmin equivalent. Smaller installed base means less shop familiarity with the product.

---

## Performance Verification: The PAPR Report

Installing the equipment is not the end of the process. The ADS-B Out system must be verified in flight.

### How It Works

1. **Fly the aircraft** in ADS-B coverage areas (near ADS-B ground stations) for at least 30 minutes of cumulative flight time.
2. **Check the results** at the FAA's ADS-B Performance Monitor, commonly called the PAPR tool: **papr.faa.gov** (officially: adsbperformance.faa.gov/PAPRRequest.aspx).
3. The FAA system evaluates the aircraft's broadcast and reports pass or fail on several parameters:
   - **NACp (Navigation Accuracy Category - Position):** Must be 9 or better. This confirms the GPS position source is accurate enough.
   - **NIC (Navigation Integrity Category):** Confirms the system's integrity monitoring is working.
   - **SIL (Surveillance Integrity Level):** Confirms the probability of the reported position exceeding the containment radius is sufficiently low.
   - **Latency:** The time between GPS position measurement and ADS-B broadcast. Must be within tolerance.
   - **ICAO Address:** Confirms the correct 24-bit ICAO address is programmed.

### What If It Fails?

Common causes of PAPR failures after installation:

- **GPS antenna placement issues.** The antenna does not have adequate sky view, or it is mounted too close to another L-band antenna on the fuselage.
- **Incorrect ICAO code entry.** The transponder was programmed with the wrong ICAO 24-bit address. This is a configuration error, not a hardware problem.
- **Altitude encoder discrepancies.** A worn-out or miscalibrated altitude encoder feeds incorrect pressure altitude to the transponder, causing the geometric and barometric altitude crosscheck to fail.
- **Wiring problems.** RS-232 data lines between the GPS source and the transponder are crossed, intermittent, or improperly terminated.

Most PAPR failures are installation-related, not equipment defects. A properly installed system from a reputable manufacturer passes on the first attempt.

---

## Common Questions From Customers

These are the questions aircraft owners most frequently ask. Each answer is written so a technician can use it directly in conversation.

**"Do I really need ADS-B?"**
If you fly near any controlled airport, above 10,000 feet, or in Class B, C, or certain Class E airspace -- yes. The mandate has been in effect since January 2020. Without ADS-B Out, you are legally prohibited from operating in those areas.

**"What is the cheapest way to get compliant?"**
The uAvionix skyBeacon at approximately $1,850 installed is the lowest-cost certified ADS-B Out solution. It bolts onto the wingtip in place of the navigation light. But it is limited -- it only does ADS-B Out, and your old transponder stays in the panel. For a more conventional solution, the Garmin GTX 335R with built-in GPS runs approximately $4,500-$7,000 installed and gives you a modern panel-mount transponder.

**"Should I get ADS-B In too?"**
If the budget allows, absolutely. ADS-B In provides free, subscription-free traffic and weather data for the life of the aircraft. The Garmin GTX 345 adds ADS-B In to the Out-only GTX 335 for roughly $1,100-$1,500 more at the box level. Alternatively, a portable ADS-B In receiver like the Stratus 3 or SkyEcho can provide the same traffic and weather data to an iPad for $500-$900 without touching the panel installation.

**"My old transponder works fine. Why do I have to replace it?"**
Your legacy transponder (a KT 76A, GTX 327, or similar Mode A/C unit) only replies when interrogated by ground radar. It does not continuously broadcast GPS position data, which is what ADS-B Out requires. The 2020 mandate demands a transponder capable of Extended Squitter -- a specific digital broadcast format that your old unit was never designed to produce. A working transponder is not the same as a compliant transponder.

**"Can I use my existing GPS to feed the transponder?"**
If your panel GPS is a WAAS-capable Garmin unit (GNS 430W, GNS 530W, GTN 625, GTN 635, GTN 650, GTN 750, or newer), it can provide the certified GPS position data that the transponder needs for ADS-B Out. This means you can buy the non-GPS version of the transponder (like the GTX 335 instead of the GTX 335R) and save approximately $800 on the box. However, this requires RS-232 serial wiring between the navigator and the transponder, which adds labor. If the aircraft has no compatible WAAS GPS navigator, the transponder must have its own built-in GPS receiver.

**"What about portable ADS-B solutions? Can I just use my Stratus?"**
No. Portable ADS-B receivers (Stratus, SkyEcho, Sentry) are ADS-B **In** devices only. They receive traffic and weather and display it on an iPad. They do not transmit anything. ADS-B **Out** requires a certified, permanently installed transmitter connected to a certified GPS source. There is no portable or temporary solution for the Out mandate.

---

## Military Veteran Translation Table

If you are coming from military aviation maintenance or aircrew, this table maps the concepts you already know to their civilian GA equivalents.

| Military Concept | GA / ADS-B Equivalent | Notes |
|---|---|---|
| IFF Mode S | ADS-B Out transponder (1090ES) | Same 1090 MHz frequency. ADS-B adds continuous GPS position broadcast to the Mode S reply capability. |
| Radar surveillance (ground-based) | Being replaced by ADS-B surveillance | Military still relies heavily on primary and secondary radar. Civilian ATC is transitioning to ADS-B as the primary surveillance method. |
| TCAS (Traffic Collision Avoidance System) | ADS-B In provides traffic awareness similar to TCAS I, but with no Resolution Advisories for GA piston aircraft | TCAS II with RAs is an airline/military requirement. GA gets traffic advisories, not evasive commands. |
| Link 16 / SADL | Loosely analogous -- ADS-B is a broadcast position-sharing network | Both are broadcast datalinks that share positional data among participants. ADS-B is simpler, unencrypted, and not tactical. |
| Squawk codes (Mode 3/A) | Still exist in GA | ADS-B transponders still respond to traditional Mode A/C/S interrogations and display assigned squawk codes. ADS-B is an addition, not a replacement, for the squawk system. |
| IFF interrogation (active) | ADS-B does not use interrogation | This is the fundamental shift. IFF waits to be asked "who are you?" ADS-B constantly announces "here I am." The broadcast is autonomous, not triggered. |
| Secure / encrypted modes | Do not exist in GA ADS-B | ADS-B broadcasts are unencrypted and publicly receivable. Anyone with a $20 receiver can see every ADS-B-equipped aircraft. There is no civilian equivalent of Mode 4 or Mode 5 secure IFF. |
| PMEL / calibration cycle | 14 CFR 91.411 and 91.413 | GA transponders and pitot-static systems must be tested and inspected every 24 calendar months. This is the civilian equivalent of scheduled calibration. |

---

## Quick Reference: ADS-B Compliance Checklist

For the technician evaluating a customer aircraft:

- [ ] Does the aircraft operate in Class A, B, or C airspace? If yes, ADS-B Out is required.
- [ ] Does the aircraft fly above 10,000 feet MSL? If yes, ADS-B Out is required.
- [ ] Does the aircraft operate within 30 NM of a Class B airport? If yes, ADS-B Out is required.
- [ ] Does the aircraft have a 1090ES Mode S transponder or 978 UAT transmitter installed?
- [ ] Does the aircraft have a certified WAAS GPS position source (built-in or external)?
- [ ] Has the installation been verified with a passing PAPR report?
- [ ] Does the customer ever plan to fly above FL180 or into Canada/Mexico? If yes, 1090ES is required (978 UAT will not work).

---

## Deep Dive Resources

For editorial reviews, detailed product comparisons, and installation case studies, check out these articles:

- [Aviation Consumer: ADS-B Transponders -- L-3, Garmin Top Picks](https://aviationconsumer.com/aircraftreviews/software/ads-b-transponders-l-3-garmin-top-picks/) by Larry Anglisano
- [Aviation Consumer: Transponder Upgrades Driven By ADS-B](https://aviationconsumer.com/avionics/transponder-upgrades-driven-by-ads-b/) by Larry Anglisano
- [FAA ADS-B FAQ and Regulatory Guidance](https://www.faa.gov/air_traffic/technology/equipadsb)
- [FAA ADS-B Performance Report (PAPR) Tool](https://adsbperformance.faa.gov/PAPRRequest.aspx) -- verify your installation after first flight
- [14 CFR 91.225 -- ADS-B Out Equipment and Use](https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-C/section-91.225)
- [14 CFR 91.227 -- ADS-B Out Equipment Performance Requirements](https://www.ecfr.gov/current/title-14/chapter-I/subchapter-F/part-91/subpart-C/section-91.227)

---

*Related guides in this knowledge base:*
- [ADS-B Compliance Options](/content/guides/ads-b-compliance-options.md) -- detailed comparison of the three compliance paths (1090ES swap, 978 UAT, integrated GPS/transponder)
- [Garmin GTX 345 Product Overview](/content/products/transponders/garmin-gtx-345.md) -- deep dive on the most popular ADS-B In/Out transponder
- [Garmin GTX 335 Product Overview](/content/products/transponders/garmin-gtx-335.md) -- deep dive on the budget ADS-B Out transponder
