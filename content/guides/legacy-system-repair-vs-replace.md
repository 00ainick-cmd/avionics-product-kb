# Core Concept: Legacy Systems — Repair vs. Replace

**Category:** Educational Guide
**Target Audience:** Entry-Level Avionics Technician
**Last Updated:** March 2026

---

## The Dilemma

Every week, an aircraft owner will walk into your avionics shop holding a dead mechanical instrument (like a spinning vacuum attitude gyro, a BendixKing KI-256 flight director indicator, or an ancient S-TEC 55X autopilot computer). 

They will ask the inevitable question: **"Can you just bench-repair this so I don't have to buy a new glass screen?"**

As a technician, you must learn to navigate the harsh reality of "Parts Obsolescence." Your job is to calculate when the "cheap" repair is actually a financial trap compared to the "expensive" digital upgrade.

## The Problem With Repairing Legacy Gear

### 1. Parts Obsolescence (The Death Spiral)
Companies like BendixKing, Century, and ARC built these analog autopilots and gyros 40 to 50 years ago. Today, the specialized integrated circuits, mechanical gears, and custom servos inside those boxes *are no longer manufactured anywhere on Earth*. When you send a 40-year-old autopilot computer to an overhaul shop, they don't buy new parts—they cannibalize dead units to find a working semiconductor to transplant into your customer's unit. 

### 2. The Vacuum Pump
Mechanical attitude and heading gyros rely on a physical engine-driven vacuum pump to spin a heavy brass rotor inside the instrument at 20,000 RPM. These vacuum pumps fail constantly (often shredding their carbon vanes mid-flight, leaving the pilot flying completely blind in the clouds). Repairing the gyro does not fix the fact that the vacuum pump remains the single most dangerous point of failure in a light aircraft.

### 3. The "Whack-A-Mole" Autopilot 
Analog autopilots (like a King KFC 200 or an S-TEC 55) require four things to function perfectly in synchronization: 
1. The mechanical attitude gyro 
2. The mechanical directional gyro (HSI)
3. The analog computer box
4. The physical analog servos bolted to the flight control cables.

If the pitch servo burns out, you might charge the customer $2,500 to overhaul it. Three months later, the roll servo burns out ($2,500). Six months after that, the bearing inside the attitude gyro seizes, causing the healthy servos to drive the airplane into the ground because they were fed bad data ($3,000). **A repaired legacy autopilot is a bottomless money pit.**

## When to RECOMMEND Repairing

You should only recommend repairing a legacy analog piece of equipment when **all** of these bullet points are true:
- It is an isolated failure (meaning the rest of the avionics stack is perfectly healthy).
- It is a non-flight-critical secondary system (like a backup communication radio or a basic audio panel).
- The customer is trying to sell the airplane within the next 12 months, and purely needs a "serviceable tag" to pass a pre-buy inspection for the new buyer.
- Specifically for **S-TEC autopilots**: If the S-TEC computer dies but the analog servos are recently overhauled and perfectly healthy, you can recommend sliding an Avidyne DFC90 digital computer into the tray to command the existing healthy servos.

## When to DEMAND Replacing (Upgrading to Digital)

You must advocate for a digital upgrade (like a Garmin GI 275 or GFC 500) when:
- **It is a primary flight instrument.** If a vacuum attitude gyro dies, DO NOT quote a $1,200 mechanical overhaul. Quote a $3,000 solid-state Garmin GI 275. It fundamentally removes the vacuum pump failure point from the aircraft forever, vastly increasing the physical safety of the pilot.
- **The HSI or Flight Director dies.** A mechanical BendixKing KI-256 flight director famously costs $4,000+ to overhaul because of its immense complexity. A solid-state digital screen costs less, does more, and never requires an overhaul.
- **Autopilot Servos start failing.** Once analog servos start failing, the autopilot architecture is dead. Quote a digital system with brand-new, brushless "smart servos" (like the Garmin GFC 500).

## The Technician's Talking Points (For the Customer)

1. **"I can overhaul this analog gyro for you, but we are effectively repairing a typewriter in the age of iPads."**
   - *Translation:* If you spend $2,500 overhauling this BendixKing HSI, you still have a 40-year-old mechanical failure point that relies on a spinning brass wheel and an unreliable vacuum pump. If you spend $4,000 on a digital screen, you gain synthetic 3D vision, battery backups, and you never have to overhaul a gyro again.
2. **"Autopilot overhauls are a game of whack-a-mole."**
   - *Translation:* If we repair your pitch servo today for $3,000, your 45-year-old altitude computer will inevitably fail next summer. We are putting expensive band-aids on a dying patient. Save that $3,000 and put it toward a $16,000 completely modern digital autopilot that actually flies the airplane safely.
3. **"Replacing this gauge with a digital GI 275 saves weight and panel space."**
   - *Translation:* When we replace the mechanical gyro, we rip out three pounds of heavy vacuum pumps, oily hoses, and filters. We make the airplane lighter, cleaner, and vastly more reliable.
