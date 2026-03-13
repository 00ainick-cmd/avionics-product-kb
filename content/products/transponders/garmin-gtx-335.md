# Garmin GTX 335
**Manufacturer:** Garmin
**Category:** Transponders / ADS-B
**Price Range:** $4,500 - $7,000 (installed)
**STC Coverage:** Broad GA fleet coverage under standard Garmin STC for Part 91 aircraft requiring 14 CFR 91.225/91.227 ADS-B Out compliance.
**Last Updated:** March 2026

---

## What It Is

The Garmin GTX 335 is a 1090 MHz Extended Squitter (1090ES) Mode S transponder with ADS-B Out. It is ADS-B Out only -- it does not include an ADS-B In receiver, meaning it will not display traffic or weather on a tablet or panel display. That capability belongs to its more expensive sibling, the GTX 345.

- **For the Entry-Level Tech (Non-Pilot):** Every airplane operating in controlled airspace is now legally required to continuously broadcast its GPS position so that Air Traffic Control can track it. That rule is the ADS-B Out mandate (14 CFR 91.225 and 91.227). The GTX 335 is the box that satisfies that mandate. It replaces the aircraft's old Mode C transponder (the one that only replies when interrogated by radar) with a modern unit that proactively broadcasts the aircraft's position, altitude, velocity, and squawk code on a continuous digital datalink. Think of it as upgrading from a landline phone (only talks when called) to a cell phone that constantly shares its location.
- **Why Pilots Buy It:** Because the FAA says they have to. The GTX 335 is the budget-conscious path to ADS-B compliance. Owners who do not need in-cockpit traffic and weather on their panel -- or who already get those services through a portable Stratus or SkyEcho receiver on their iPad -- save roughly $1,500-$2,000 over the GTX 345 by skipping the ADS-B In hardware they will never use.

## How It Works

The GTX 335 operates on 1090 MHz and transmits Mode S Extended Squitter packets. Unlike legacy Mode A/C transponders that only reply when interrogated by ground radar or TCAS-equipped aircraft, the 335 continuously and autonomously broadcasts (squitters) a digital data packet containing:

- Aircraft ICAO 24-bit address (permanent digital identity)
- Squawk code assigned by ATC
- Pressure altitude from the connected altitude encoder
- GPS-derived latitude, longitude, and geometric altitude
- Ground track and ground speed
- NACp/NACv/SIL integrity parameters (how much the system trusts its own position)

It still responds to traditional Mode A/C/S radar interrogations, so it functions as a normal transponder in addition to its ADS-B broadcast role.

**GPS Source:** The transponder needs a certified WAAS GPS position to build its ADS-B Out broadcast. There are three ways to provide it:

1. **GTX 335R variant** -- has a built-in WAAS GPS receiver. Requires only a small GPS antenna puck mounted on the aircraft's upper fuselage. This is the cleanest installation path.
2. **External GPS 20A receiver** -- Garmin's standalone remote GPS sensor, connected via RS-232 serial. Used when the aircraft has no compatible panel-mount GPS navigator.
3. **Existing Garmin navigator** -- a GNS 430W/530W, GTN 625/635/650/750, or similar WAAS-capable navigator can feed GPS position data to the transponder over RS-232.

## Installation Considerations

The GTX 335 is a direct-swap replacement for legacy transponders occupying a standard 6.25-inch wide, 1.65-inch tall radio stack slot. It drops into the same panel cutout and tray space as the GTX 327, GTX 330, BendixKing KT 76A, or similar legacy units. For shops that have done dozens of KT 76A removals, the form factor is familiar.

**Wiring:** RS-232 serial for GPS position input. Altitude encoder input (gray code or serial, depending on encoder). Coax to a standard bottom-mounted transponder antenna. If upgrading from a Mode A/C transponder, the existing coax run and antenna are typically reusable unless the antenna is old enough to warrant replacement.

**The 335 vs. 335R decision matters at installation time.** If the aircraft has a functioning Garmin GNS 430W or GTN 650/750 already on the panel, the non-R model can pull GPS data from the navigator and save the customer roughly $800 on the box price. But if the aircraft has no compatible WAAS GPS source -- say it is running a legacy KLN 94 or an Apollo GX-series navigator -- the 335R with its built-in GPS is the correct answer. Running new RS-232 wiring from a navigator to the transponder tray is not complex, but it is labor. On aircraft where the nav-comm and transponder are in different rack locations, the 335R eliminates that wiring entirely.

**GPS Antenna (335R only):** Requires a small L-band GPS antenna mounted on the upper fuselage skin. This is a minor drill-and-mount operation, but the antenna placement must have adequate sky view and adequate separation from other L-band antennas (like an existing GPS navigator antenna). Garmin specifies minimum separation distances in the installation manual.

**Typical Downtime:** 1-3 days for a straightforward transponder swap, assuming no surprises behind the panel. If the shop is also replacing the altitude encoder or running new coax, add time accordingly. A clean GTX 327 to GTX 335R swap with an existing good antenna and encoder can be done in a single day by an experienced bench.

**Post-Installation:** The aircraft requires a transponder/altimeter system certification per 14 CFR 91.413 after installation. The ADS-B Out broadcast must be verified using the FAA's Public ADS-B Performance Report (PAPR) tool after a flight in ADS-B airspace. Common issues caught by PAPR: incorrect ICAO code entry, NACp values below threshold due to GPS antenna placement, or altitude discrepancies from a worn-out encoder.

## Flight / Bench Performance

On the bench, the GTX 335 is a straightforward unit to configure. Squawk code, flight ID, altitude source, and GPS source are set through the front panel interface. The display is basic but functional -- it shows squawk code, pressure altitude, and a reply indicator. No touchscreen, no color graphics. This is a working transponder, not an infotainment system.

In flight, owners report that the unit simply works. It broadcasts, ATC sees it, and the PAPR reports come back clean. The 1090ES signal is solid, and Mode S replies are consistent. There are no traffic or weather displays to evaluate because there is no ADS-B In receiver -- the front panel shows exactly what you need for transponder operation and nothing more.

The built-in WAAS GPS in the 335R variant acquires satellites quickly and maintains a stable, high-integrity position solution. NACp values of 9 or better (required for ADS-B compliance) are typical in normal flight conditions.

## Related Products

**Garmin GTX 345:** Same transponder architecture with dual-band ADS-B In (978 + 1090 MHz), Bluetooth Connext for wireless traffic/weather to tablets, and internal AHRS for backup attitude. Approximately $1,100 more at the box level.

**uAvionix tailBeaconX:** Rear-mounted position light integrating a 1090ES ADS-B Out transponder with built-in WAAS GPS. Approximately $2,999. Simpler installation but lacks panel-mounted display and has limited Mode S functionality compared to conventional panel units.

**Appareo Stratus ES:** Budget ADS-B Out transponder with internal WAAS GPS. Competitively priced with a smaller installed base.

**L3Harris NGT-9000:** Full-featured unit with color touchscreen display, dual-band ADS-B In/Out, and built-in WAAS GPS. Starting at approximately $5,490. More comparable to the GTX 345 than the 335.

## Price & Value

- **GTX 335 (no internal GPS):** Approximately $3,895 box price
- **GTX 335R (with built-in WAAS GPS):** Approximately $4,695 box price
- **Installation labor:** $600-$2,000 depending on aircraft complexity and whether the shop is also replacing the antenna, encoder, or running new wiring
- **Total installed:** $4,500-$7,000 for a typical GA single-engine installation

The value proposition is straightforward: the GTX 335 is the minimum viable ADS-B Out solution from a tier-one manufacturer with industry-leading support infrastructure. Owners who are treating ADS-B compliance as a cost of doing business -- not as an opportunity to add cockpit capabilities -- will appreciate that the 335 does exactly what the regulation requires and nothing more.

The price gap between the 335R and a GTX 345 with GPS is roughly $1,100 at the box level. That is the cost of ADS-B In capability. Whether that premium is worth it depends entirely on whether the owner values in-cockpit traffic and weather enough to pay for it in the transponder rather than getting it from a $500 portable receiver.

## Summary

The GTX 335 is a 1090ES Mode S transponder providing ADS-B Out compliance without ADS-B In traffic/weather reception. Key characteristics:
- ADS-B Out only — no in-cockpit traffic or weather display. Owners needing those features use the GTX 345 or a portable ADS-B In receiver.
- Available in standard (335) and GPS-integrated (335R) variants. The 335R simplifies installation by eliminating the GPS wiring dependency on a panel navigator.
- 1090ES satisfies Class A airspace, Canadian, and international compliance requirements — unlike 978 UAT units.
- The uAvionix tailBeaconX provides an alternate form factor for simpler installations on VFR aircraft.
- Post-installation PAPR verification flight required.

## Key Technical Facts

- 1090 MHz Extended Squitter Mode S transponder. Responds to traditional Mode A/C/S radar interrogations in addition to autonomous ADS-B broadcasts.
- GTX 335R variant includes built-in WAAS GPS with small L-band antenna puck. GPS antenna placement requires adequate sky view and minimum separation from other L-band antennas.
- Non-R variant requires external WAAS GPS position via RS-232 from a compatible navigator (GNS 430W/530W, GTN series) or GPS 20A remote sensor.
- Standard 6.25" × 1.65" radio stack slot. Direct-swap for GTX 327, GTX 330, BendixKing KT 76A.
- Post-install transponder/altimeter certification required per 14 CFR 91.413. PAPR verification after first flight in ADS-B airspace.
- Common PAPR issues: incorrect ICAO code entry, NACp below threshold from GPS antenna placement, altitude discrepancies from worn encoder.
- Typical downtime: 1–3 days.

## Deep Dive Resources

For editorial reviews, competitive comparisons, and installation insights, check out these articles:
- [Aviation Consumer: ADS-B Transponders -- L-3, Garmin Top Picks](https://aviationconsumer.com/aircraftreviews/software/ads-b-transponders-l-3-garmin-top-picks/) by Larry Anglisano
- [Aviation Consumer: Transponder Upgrades Driven By ADS-B](https://aviationconsumer.com/avionics/transponder-upgrades-driven-by-ads-b/) by Larry Anglisano
- [FAA ADS-B Performance Report (PAPR) Tool](https://adsbperformance.faa.gov/PAPRRequest.aspx) -- verify your installation after first flight
