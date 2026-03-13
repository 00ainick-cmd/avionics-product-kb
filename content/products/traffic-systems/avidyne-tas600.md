# Avidyne TAS600 Series Traffic Advisory System
**Manufacturer:** Avidyne
**Category:** Traffic Systems
**Price Range:** $18,000 - $28,000 installed (depending on model and display integration)
**STC Coverage:** Broad coverage for Part 23 single- and multi-engine piston, turboprop, and light jet aircraft

## What It Is

The Avidyne TAS600 series is an active traffic advisory system (TAS) that interrogates the transponders of nearby aircraft to determine their position, altitude, and closure rate. "Active" is the key word. Unlike passive ADS-B In traffic receivers (which only listen for broadcasts from aircraft that have ADS-B Out transmitters), the TAS600 actively sends out interrogation signals on 1030 MHz and listens for transponder replies on 1090 MHz. If an aircraft has a working transponder -- any transponder, Mode A, Mode C, or Mode S -- the TAS600 can see it.

There are two models in the series:

- **TAS600** -- the entry-level system. Provides active traffic surveillance with bearing, relative altitude, and closure rate information. Designed for aircraft operating at and below 18,500 feet (below Class A airspace).
- **TAS610** -- the enhanced model. Adds extended surveillance range and altitude coverage for aircraft that operate above 18,500 feet. This is the model to specify for turboprops, pressurized piston twins, and light jets.

Both models provide traffic advisories (TAs) -- alerting the pilot to potential threats -- but neither provides resolution advisories (RAs). An RA is a command to climb or descend to avoid a collision, which is what airline TCAS II systems provide. The TAS designation means it is advisory only: it tells the pilot where the threat is, but the pilot decides what to do about it. This distinction matters for regulatory and operational purposes.

For a technician with a military background, the active interrogation concept is analogous to IFF (Identification Friend or Foe). Both systems interrogate nearby transponders and process the replies to determine position and identity. The civilian version operates on the same 1030/1090 MHz frequencies but uses ATCRBS (Air Traffic Control Radar Beacon System) and Mode S protocols rather than military IFF modes.

## How It Works

The TAS600 operates on the same fundamental principle as airline TCAS systems, scaled down for general aviation:

1. **Interrogation:** The TAS processor transmits interrogation pulses on 1030 MHz through the system's antennas. These are the same type of interrogations that ATC radar uses, but at lower power and shorter range.
2. **Reply reception:** Nearby transponder-equipped aircraft reply on 1090 MHz, just as they would to an ATC radar interrogation. Mode A transponders reply with a squawk code. Mode C transponders reply with a squawk code plus pressure altitude. Mode S transponders reply with all of the above plus additional data including the aircraft's ICAO 24-bit address and, in some cases, its N-number.
3. **Bearing determination:** The system uses the directional characteristics of its antenna array to determine the bearing of each reply. This gives the pilot a directional indication -- not just "traffic nearby" but "traffic at your 2 o'clock."
4. **Threat assessment:** The processor evaluates range, closure rate, and altitude separation to classify each target. Targets are displayed as either non-threatening traffic (typically shown as an open diamond or circle) or as traffic advisories (shown as a filled/highlighted symbol with an audio alert).
5. **Display:** Traffic data is presented on a compatible display -- either Avidyne's own dedicated 3-inch ATI (Active Traffic Indicator) display, or on existing multifunction displays including Avidyne EX500/EX5000 MFDs, Garmin GNS-series navigators, Garmin MX20/GMX200 MFDs, and BendixKing 250/550/850 MFDs. Mode S-equipped targets can display their squawk code and N-number.
6. **Audio alerts:** The system provides synthesized voice callouts for traffic advisories, such as "Traffic, traffic" with bearing and altitude information.

The system requires two antennas -- one on top of the aircraft and one on the bottom -- to provide surveillance above and below the aircraft. Antenna shadowing (where the aircraft's own structure blocks line-of-sight to a target) is an inherent limitation of any active traffic system. The dual-antenna configuration minimizes this, but it does not eliminate it entirely.

Effective range varies with conditions but is generally up to approximately 30 nautical miles for Mode S targets and shorter for Mode A/C targets. In practice, the system typically acquires threatening traffic at 5-10 miles, which provides adequate time for visual acquisition and avoidance.

## Installation Considerations

**Dual antenna requirement.** The TAS600 requires both a top-mounted and a bottom-mounted antenna. Finding two suitable antenna locations that provide good line-of-sight coverage, avoid interference from other antennas, and meet STC location requirements adds complexity compared to single-antenna systems. Antenna cable routing between the processor and both antennas requires careful planning for cable length and routing.

**Processor mounting.** The TAS processor is a remote-mounted box -- it does not go in the instrument panel. It mounts behind the panel or in an avionics bay. It is a reasonably sized unit, but finding space in a crowded behind-panel area can require creative packaging.

**Display integration.** One of the TAS600 series' strengths is display flexibility. It can output to Avidyne's own dedicated ATI display (a small 3-inch round panel-mount indicator) or to a wide range of existing displays via serial data connections. If the aircraft already has a compatible MFD or GPS navigator, the traffic data can overlay on the moving map -- no dedicated display required. If the aircraft does not have a compatible display, budget for the ATI indicator and a panel cutout.

**No external heading input required.** Unlike some competing systems (L-3 Skywatch, BendixKing KTA-870), the Avidyne TAS series does not require a heading input from the aircraft's HSI system. This simplifies installation and means the traffic system operates independently of the heading system's health.

**Wiring:** RS-232 serial connections to displays. Power wiring. Antenna coaxial cables. The wiring is not trivial but is generally less complex than competing active systems.

**Typical downtime:** 3-5 days for a complete installation, including antenna drilling, cable routing, processor mounting, display integration, and flight testing. If a compatible display is already installed and no dedicated ATI is needed, the project can be shorter.

## Flight / Bench Performance

In practice, the TAS600 series sees the vast majority of transponder-equipped traffic in sufficient time for the pilot to visually acquire the target and take appropriate action. No active traffic system is perfect -- antenna shadowing during turns and certain aircraft aspects can cause brief dropouts and reacquisitions. This is a physics limitation of the technology, not a defect specific to Avidyne. All active systems exhibit similar behavior.

The audio callouts are clear and informative. When the system identifies a threat, the voice alert directs the pilot's attention to the correct quadrant. In a busy terminal environment, the display can get cluttered with non-threatening targets, but the system's threat logic does a reasonable job of highlighting the ones that matter.

Target lag is minimal compared to ground-based TIS (Traffic Information Service) systems. Because the TAS600 is doing its own interrogation and processing, the displayed target position updates in near real-time without the latency inherent in ground-based data relay.

Mode S target identification -- displaying squawk codes and N-numbers -- is a useful feature for identifying specific traffic, particularly when coordinating with ATC.

On the bench, the system requires specialized test equipment to verify interrogation power output, receiver sensitivity, and antenna performance. Initial installation testing should include a flight check to verify antenna coverage patterns and confirm that traffic is being acquired at expected ranges.

## Related Products

**Garmin GTS 800/825 (~$15,000–$22,000+ installed):** Active traffic advisory system. Integrates with Garmin displays (G1000, TXi, GTN series). Comparable performance. Similar price.

**L3Harris Skywatch HP (~$20,000–$30,000 installed):** Active TAS with large installed base in turboprops and light jets. Requires external heading input from bootstrapped HSI. Can share display with WX-1000+ Stormscope.

**BendixKing KTA-870 (~$25,000+ installed):** Dual-antenna active TAS positioned at the high end. Primarily suited for turboprops and light jets. Requires precise antenna alignment and matched cable lengths.

**ADS-B In traffic (via GTX 345, GDL 52, portables, ~$0–$5,000):** Receives traffic data from FAA ADS-B ground network (TIS-B). Only shows aircraft being tracked by ADS-B ground stations or with ADS-B Out transmitters. Coverage gaps exist, and aircraft without ADS-B Out are invisible to ADS-B In. Active TAS systems see any aircraft with a working transponder regardless of ADS-B equipage.

**Ryan TCAD (~$5,000–$10,000 installed):** Passive system that listens for transponder replies to nearby ATC radar interrogations. Depends on ATC radar coverage. Increasingly obsolete.

## Price & Value

- **TAS600 box price:** ~$12,000-$14,000
- **TAS610 box price:** ~$15,000-$18,000
- **Dedicated ATI display (if needed):** ~$1,500-$2,500
- **Antennas (top and bottom):** ~$500-$1,000 for the pair
- **Installation labor:** ~$4,000-$8,000 depending on aircraft, antenna locations, and display integration
- **Total installed cost:** ~$18,000-$28,000 depending on model and configuration

That is a lot of money for traffic awareness. The value proposition rests on one question: how much is it worth to see traffic that ADS-B In cannot see?

For an aircraft that already has ADS-B In (via a GTX 345 or similar), the incremental benefit of adding an active TAS system is coverage of non-ADS-B-equipped aircraft. In the lower 48 states below 18,000 feet, ADS-B ground coverage is extensive, and TIS-B fills many gaps. The practical benefit of the TAS system narrows in this environment, though it does not disappear.

For aircraft operating at higher altitudes, in remote areas (Alaska, mountainous terrain, offshore), or in environments where military aircraft without ADS-B Out are common, the TAS system provides a meaningful safety margin that ADS-B In alone cannot match.

For turboprops and light jets operating in the flight levels, a TAS system (specifically the TAS610) is a strong recommendation.

*All prices are approximate and vary by shop, region, and aircraft type. Get written proposals.*

## Summary

The TAS600 series is an active traffic advisory system that interrogates all transponder-equipped aircraft, regardless of ADS-B equipage. Key characteristics:
- Active interrogation on 1030 MHz detects any aircraft with a working transponder (Mode A, C, or S) — not limited to ADS-B-equipped traffic.
- TAS600 covers operations below 18,500 ft. TAS610 extends coverage above 18,500 ft for turboprops and light jets.
- Advisory only — provides traffic advisories (TAs) but not resolution advisories (RAs).
- Does not require a heading input from the aircraft's HSI system, simplifying installation compared to some competing systems.
- ADS-B In traffic has reduced the need for active TAS on aircraft flying below 18,000 ft in the lower 48 states. Active TAS provides value in remote areas, at higher altitudes, and where non-ADS-B-equipped aircraft operate.

## Key Technical Facts

- Active interrogation on 1030 MHz, reception on 1090 MHz. Detects Mode A, Mode C, and Mode S transponders.
- Dual antenna (top and bottom) provides surveillance above and below the aircraft. Single-antenna systems have a blind spot on one side.
- No external heading input required — operates independently of the aircraft's heading system health.
- Compatible display outputs: Avidyne ATI dedicated display, Avidyne MFDs, Garmin GNS navigators, and select BendixKing MFDs.
- Mode S targets display squawk codes and N-numbers for traffic identification.
- Effective range approximately 30 NM for Mode S targets. Practical threat acquisition typically at 5–10 NM.
- Typical downtime: 3–5 days for a complete installation.

## Deep Dive Resources

For editorial reviews, flight test results, and competitive comparisons, check out these articles:
- [Aviation Consumer: Panel Mount Traffic -- Avidyne's TAS Prevails](https://aviationconsumer.com/avionics/panel-mount-traffic-avidynes-tas-prevails/) -- Larry Anglisano's roundup of active traffic systems with flight trial data
- [Aviation Consumer: ADS-B Transponders -- L3 and Garmin Top Picks](https://www.aviationconsumer.com) -- Context on how ADS-B In traffic compares to active TAS
- [Aviation Consumer: Transponder Upgrades Driven by ADS-B](https://www.aviationconsumer.com) -- Background on the ADS-B mandate and its impact on traffic system decisions

*Content last updated: March 2026. Prices and availability are approximate.*
