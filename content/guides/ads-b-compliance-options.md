# Core Concept: ADS-B Compliance Options

**Category:** Educational Guide
**Target Audience:** Entry-Level Avionics Technician
**Last Updated:** March 2026

---

## What is ADS-B?

**ADS-B (Automatic Dependent Surveillance-Broadcast)** is the Federal Aviation Administration's (FAA) mandatory replacement for traditional ground-based radar. 

In the old days, a spinning radar dish on the ground sent a radio pulse into the sky, it bounced off the metal of the airplane, and the controller saw a dot on a screen. 

With ADS-B, the airplane determines its *own* precise location via GPS satellites, and then broadcasts (squits) its GPS coordinates down to the air traffic controller exactly once per second. It is significantly more precise than analog radar.

## "Out" is Law. "In" is a Luxury.

As an avionics technician, you must explain the difference between the legal requirement and the pilot's benefit.

### 1. ADS-B "Out" (The Legal Mandate)
Since January 1, 2020, almost every aircraft flying near major cities or above 10,000 feet is *legally required* to have an ADS-B "Out" transmitter. 
* To be compliant, an aircraft requires two things: A highly accurate GPS receiver (usually WAAS), and a transmitter box (a transponder or UAT datalink) that shouts those GPS coordinates to the ground. Let me repeat: **An aircraft cannot meet the ADS-B Out mandate without a WAAS GPS source.**

### 2. ADS-B "In" (The Huge Benefit for Pilots)
If an aircraft simply installs an "Out" transmitter to satisfy the FAA, the pilot literally sees nothing different in the cockpit. 

However, if they spend an extra $1,000 to $2,000 for an ADS-B **"In"** receiver, the aircraft will instantly receive thousands of dollars worth of free data from the FAA:
- **TIS-B (Traffic):** A 360-degree radar view of every other airplane for dozens of miles around them, overlaid on an iPad or panel screen.
- **FIS-B (Weather):** Free, real-time NEXRAD weather radar, METARs, and Temporary Flight Restriction maps (TFRs).

## The Three Paths to ADS-B Compliance

When a customer comes into the shop to "get ADS-B legal," these are the paths you can offer them:

### Path 1: The 1090ES Transponder Swap (The Standard Path)
*Products: Garmin GTX 345, L3 Lynx NGT-9000, Appareo Stratus ESG*
- **The Concept:** You rip out their 40-year-old analog transponder (like a BendixKing KT76A) and slide a completely new, digital 1090ES transponder into the exact same radio stack slot.
- **When to Use It:** This is the default answer for 90% of GA aircraft. It's clean, simple, and the new transponders usually feature built-in Bluetooth to send the free weather and traffic directly to the pilot's ForeFlight iPad.
- **The Critical Detail:** 1090ES (1090 MHz Extended Squitter) is the international standard. If the airplane *ever* flies above 18,000 feet (Class A airspace) or crosses an international border into Canada or Mexico, it *must* have a 1090ES transponder.

### Path 2: The 978 UAT "Universal Access Transceiver" (The Budget Path)
*Products: Garmin GDL 82, uAvionix skyBeacon / tailBeacon*
- **The Concept:** Instead of removing the old transponder, you leave it alone. You install a secondary, invisible "UAT" transmitter box somewhere in the tail or wingtip that broadcasts on a different frequency (978 MHz) strictly to satisfy the FAA ADS-B requirement.
- **When to Use It:** The customer is extremely budget-conscious and strictly flies low and slow (below 18,000 feet) and never leaves the United States. A uAvionix skyBeacon literally bolts onto the wing in place of the navigation light; you can install it in less than an hour.
- **The Critical Detail:** You are relying on a 40-year-old transponder to stay legally compliant. If the old transponder breaks next year, you have to rip it all out anyway.

### Path 3: The GPS Navigator Upgrade
*Products: Garmin GNX 375*
- **The Concept:** The customer has an old, broken GPS and an old, broken analog transponder. You rip them both out and replace them with a single integrated unit that combines a touchscreen WAAS GPS and an ADS-B transponder into one box.
- **When to Use It:** The customer has a tiny panel (like a Cessna 150) with literally no physical space for multiple radios, and they need a GPS upgrade anyway.

## The Technician's Talking Points (For the Customer)

1. **"Do you ever plan to fly into Canada, Mexico, or above 18,000 feet?"**
   - *Translation:* If yes, immediately eliminate the incredibly cheap wingtip uAvionix 978 UAT options. You must bid them a 1090ES transponder like the Garmin GTX 345.
2. **"Does your current panel GPS have WAAS?"**
   - *Translation:* It is legally impossible to broadcast ADS-B if you don't have a highly accurate WAAS GPS receiver in the airplane. If they are flying with a non-WAAS GNS 430, we must either install a completely new GPS antenna on the roof, or buy a transponder with a WAAS GPS chip built directly into it.
3. **"Do not buy an 'Out-Only' system to save $1,000."**
   - *Translation:* Yes, the FAA strictly forces you to pay for the "Out" broadcast. But unlocking the "In" receiver gives you a digital copilot that spots mid-air collisions and thunderstorm cells for free, forever. Do not skip the "In" capability.
