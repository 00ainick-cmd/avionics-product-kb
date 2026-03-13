# Autopilot Buyer's Guide for GA Retrofit

**Category:** Educational Guide
**Target Audience:** Entry-Level Avionics Technician
**Last Updated:** March 2026

---

## Introduction: What a Retrofit Autopilot Does and Why Owners Want One

An autopilot is an electromechanical system that physically moves an aircraft's flight controls (the yoke or stick and the trim wheel) without the pilot's hands on them. Electric motors called **servos** are bolted to the aircraft's control cables or pushrods. A central computer tells those servos when and how much to push or pull, keeping the aircraft on a heading, at an altitude, or tracking a GPS course.

For a pilot flying in smooth weather, an autopilot is a convenience -- it reduces fatigue on a long cross-country flight. But for a pilot who flies in the clouds (under Instrument Flight Rules, or IFR), an autopilot is a legitimate safety system. Spatial disorientation -- losing track of which way is "up" when you cannot see the horizon -- is one of the leading causes of fatal general aviation accidents. A modern autopilot can fly the airplane more precisely than most human pilots, particularly when tracking a GPS approach down to a runway they cannot see.

That is why aircraft owners spend $15,000 to $45,000 on an autopilot retrofit. They are not buying convenience. They are buying a digital safety net.

### The Critical Distinction: Rate-Based vs. Attitude-Based

This is the single most important concept in the retrofit autopilot market. Every autopilot falls into one of two categories, and the difference between them is enormous.

**Rate-Based Autopilots**
- These older systems (the S-TEC 55X is the classic example) use a **turn coordinator** -- a small spinning gyroscope -- to detect *how fast* the aircraft is turning or pitching.
- The computer's logic is reactive: "The gyro says we are turning left at 3 degrees per second. Apply right-roll servo pressure until the turning rate goes to zero."
- The problem is that a rate-based system does not actually know *where the aircraft is* in space. It only knows how fast things are changing. In turbulence, it is constantly chasing corrections, resulting in a rough, "hunting" ride. It works, but it works the way a thermostat works -- always oscillating slightly around the target.

**Attitude-Based Autopilots**
- Modern systems (the Garmin GFC 500/600, the Genesys S-TEC 3100) use an **AHRS** (Attitude and Heading Reference System) -- a solid-state sensor package with accelerometers and gyroscopes -- to know the aircraft's exact orientation in three-dimensional space at all times.
- The computer's logic is direct: "The AHRS says we are banked 5 degrees left of wings-level. Command the servo to roll 5 degrees right."
- Because the system always knows *where the aircraft is* relative to the horizon, corrections are precise and smooth. It does not hunt. It does not oscillate. It simply holds the aircraft exactly where it should be.

**Why this matters practically:** An attitude-based autopilot flies GPS approaches with surgical precision, holds altitude in turbulence without porpoising, and enables safety features like Envelope Protection and a "Level" recovery button that are physically impossible on a rate-based system. A rate-based system cannot level the wings from an unusual attitude because it does not know what "level" is -- it only knows how fast you are rolling.

---

## The Modern Retrofit Options

The following table compares the five autopilot systems currently available for GA piston aircraft retrofit. All prices are approximate and vary by aircraft model, dealer, and region.

| Feature | Garmin GFC 500 | Garmin GFC 600 | Genesys S-TEC 3100 | Dynon SkyView AP | Avidyne DFC90 |
|---|---|---|---|---|---|
| **Architecture** | Attitude-based (AHRS) | Attitude-based (AHRS) | Attitude-based (AHRS) | Rate-based (integrated) | Digital flight controller |
| **Axes** | 2 (roll + pitch) | 2 or 3 (roll, pitch, yaw optional) | 2 (roll + pitch) | 2 (roll + pitch) | 2 (roll + pitch) |
| **ESP (Envelope Protection)** | Yes | Yes | Yes | No | No |
| **LVL Button** | Yes | Yes | Yes | No | No |
| **Required Display** | G5, GI 275, or TXi | GI 275 or TXi | Various (open architecture) | SkyView HDX only | Aspen Evolution PFD |
| **Smart Servos** | Yes (GSA 28, brushless) | Yes (GSA 87, brushless) | No (uses existing servos or optional new) | Integrated | No (uses existing S-TEC servos) |
| **Approx. Box Price** | ~$7,000 | ~$12,000-16,000 | ~$8,000-10,000 | ~$4,000-6,000 (integrated with suite) | ~$6,000 |
| **Approx. Installed Cost** | $15,000-25,000 | $25,000-45,000 | $15,000-25,000 | Included in SkyView suite cost | $12,000-18,000 |
| **STC Coverage** | Cessna 172/182, Piper PA-28 series, expanding | Bonanza A36, Baron B55, Mooney, expanding | Cessna, Beech, Piper (wide coverage) | Cessna 172/182, PA-28, expanding | Cirrus SR20/22, Piper PA-46, others |
| **Best For** | Cessna and Piper singles entering the Garmin ecosystem | High-performance singles and light twins | S-TEC 55X upgrade path, mixed-brand panels | Aircraft going full Dynon SkyView | Aircraft already equipped with Aspen PFDs |

### Reading the Table: Key Takeaways

- **ESP (Electronic Stability and Protection):** This feature monitors pitch and bank angles *even when the autopilot is turned off*. If the pilot accidentally exceeds safe limits, the servos nudge the controls back. It is an always-on safety net. Only the GFC 500, GFC 600, and S-TEC 3100 offer it.

- **LVL (Level) Button:** A dedicated panic button. One press, and the autopilot aggressively rolls wings level and pitches to a safe attitude. This feature has likely prevented fatalities. The Dynon SkyView AP and Avidyne DFC90 do not have it.

- **Smart Servos vs. Legacy Servos:** The Garmin GFC 500 and 600 use new brushless "smart" servos (the GSA 28 and GSA 87) that produce zero friction when the autopilot is off. The DFC90 and S-TEC 3100 can reuse existing analog servos from a legacy S-TEC installation -- which saves installation labor but means the owner is still relying on decades-old mechanical hardware.

---

## Understanding Ecosystem Lock-In

This is one of the most important conversations you will have with a customer, and it comes down to this: **when you choose an autopilot, you are also choosing which family of displays and navigators that aircraft will use for the next 15-20 years.**

### Garmin: The Walled Garden

The GFC 500 requires a Garmin attitude source -- either a G5, GI 275, or G500/G600 TXi display. The GFC 600 requires a GI 275 or TXi. There is no workaround. If the customer wants a Garmin autopilot, they must have Garmin displays.

This is not necessarily a disadvantage. Garmin's ecosystem offers the deepest integration in the industry. The autopilot, displays, navigator (GTN 750Xi/650Xi), transponder, audio panel, and engine monitor all communicate over a shared CAN bus network. Configuration, diagnostics, and database updates are centralized. When everything works together by design, troubleshooting is straightforward.

The trade-off is cost and commitment. Once a customer has $15,000 of Garmin displays in the panel, switching to a competitor's navigator or autopilot later becomes economically impractical. They are in the Garmin ecosystem for the life of the aircraft.

### Genesys S-TEC 3100: The Open Option

The S-TEC 3100 is the most display-agnostic modern autopilot. It interfaces with Garmin G5 and GI 275 displays, Aspen Evolution PFDs, and its own Genesys displays. For a customer who does not want to commit entirely to one manufacturer, or who already has a mixed-brand panel, the 3100 offers the most flexibility.

This matters for future upgrades. If a better display comes along from a competitor five years from now, a customer with an S-TEC 3100 has the option to switch without also replacing the autopilot.

### Avidyne DFC90: The Aspen-Specific Solution

The DFC90 is specifically designed for aircraft equipped with Aspen Evolution PFDs. It is a plug-and-play digital controller that replaces an existing S-TEC 55X computer while reusing the existing wiring and servos. If the aircraft already has an Aspen PFD and S-TEC 55X servos, the DFC90 is the fastest and least disruptive upgrade path.

However, Aspen's long-term market position has been increasingly challenged by Garmin's GI 275 (which fits the same panel cutout). Technicians should be transparent with customers: if the Aspen line were to be discontinued, a DFC90 installation would become an orphan.

### Dynon SkyView: The Closed Suite

The Dynon SkyView autopilot only works within the SkyView HDX display ecosystem. It is not a standalone autopilot -- it is a feature of the SkyView avionics suite. For aircraft undergoing a complete panel replacement with Dynon, the autopilot is part of the package at a fraction of the cost of a standalone system.

The limitation is absolute: if the customer ever wants to replace the Dynon displays with Garmin or Avidyne, the autopilot goes with them. There is no separating the two.

### What This Means for Future Upgrades

When a customer asks "Which autopilot should I get?", the real question underneath is often "Which ecosystem am I betting on?" Frame the conversation that way. The autopilot is not a standalone purchase. It is the anchor point that determines which displays, navigators, and accessories make sense for the next two decades.

---

## Legacy Systems Still in the Field

As a technician, you will encounter these older autopilots regularly -- on pre-buy inspections, on aircraft arriving for upgrades, and in troubleshooting scenarios. Knowing what you are looking at matters.

### Century III / Century IV
- **Where you will see them:** Piper PA-28, PA-32, and PA-34 aircraft. Century was the Piper OEM autopilot supplier for decades.
- **Architecture:** Rate-based (turn coordinator driven).
- **Current status:** Parts are becoming scarce. The original manufacturer is long gone, and third-party repair support is thinning. Servo overhauls run $2,000-4,000 when parts are available.
- **Tech assessment:** If a customer's Century system is still working, it may be worth maintaining for the near term. But if a major component fails (the amplifier or a servo), the repair cost often approaches or exceeds the cost of a new S-TEC 3100 or GFC 500 installation. That is the conversation to have.

### S-TEC 55X / 60-2
- **Where you will see them:** Widely installed across Cessna, Piper, Beech, and Mooney aircraft. The 55X is arguably the most common retrofit autopilot in the GA fleet.
- **Architecture:** Rate-based (turn coordinator driven), dual-axis.
- **Current status:** The system itself is well understood, but Genesys (the current owner of the S-TEC brand) has limited field service availability, and servos below certain serial number ranges may be beyond economic repair. A major repair on an S-TEC 55X runs approximately $4,000.
- **Tech assessment:** This is the ideal candidate for a plug-and-play upgrade. Both the Avidyne DFC90 and the Genesys S-TEC 3100 are designed as direct replacements for the 55X computer, reusing the existing wiring and servos. If the servos are healthy, a customer with a working 55X has the cheapest path to a modern digital autopilot.

### BendixKing KFC 200 / KFC 225
- **Where you will see them:** Beech Bonanza, Baron, King Air, and various Cessna models. The KFC 200 was a very capable attitude-based system and is still considered serviceable.
- **Architecture:** Attitude-based (uses KI 256 gyro for attitude reference).
- **Current status:** Repairable but expensive. The KI 256 flight director gyro runs approximately $3,600 on exchange. The KFC 225 is the more modern digital version with better long-term support.
- **Tech assessment:** A working KFC 200 in a Bonanza is not a reason to panic. It is an attitude-based system that flies well when maintained. However, when the KI 256 gyro eventually fails (and it will -- it is a spinning mechanical gyroscope), the owner faces a crossroads: spend $3,600+ on a gyro exchange, or invest that money toward a GFC 600 installation.

### BendixKing KAP 140
- **Where you will see them:** Cessna 172S, 182T, and Piper PA-28 models from the late 1990s and early 2000s. It was a Cessna OEM option.
- **Architecture:** Rate-based, two-axis.
- **Current status:** Parts availability is increasingly challenged. The system works adequately but lacks modern features.
- **Tech assessment:** Functional but unexceptional. When it fails, replace rather than repair.

### ARC/Cessna 300/400/800 Series
- **Where you will see them:** Cessna 300 and 400 series piston and turboprop aircraft. These were OEM-installed autopilots specific to Cessna airframes.
- **Architecture:** Varies, generally older analog designs.
- **Current status:** Expensive, complex, and increasingly unsupported. Parts are scarce and repairs are costly.
- **Tech assessment:** Avoid on a pre-buy. If encountered during an inspection, advise the owner to budget for replacement.

### Brittain
- **Where you will see them:** Older Cessna, Piper, and Beech aircraft. Brittain autopilots were a budget option, often pneumatic (vacuum-driven).
- **Architecture:** Pneumatic, rate-based.
- **Current status:** Outdated in every respect. No modern features, limited repair support.
- **Tech assessment:** Treat a Brittain autopilot as non-functional during a pre-buy valuation. Budget for full replacement.

### Bendix M4D
- **Where you will see them:** Older Beech aircraft.
- **Architecture:** Analog, attitude-based.
- **Current status:** Servo overhauls run approximately $9,000 each. Mid-Continent Instruments stopped working on older Bendix M4C/D servo models due to parts extinction.
- **Tech assessment:** This is the most expensive legacy autopilot to maintain in the GA fleet. If a customer's M4D servos fail, the repair bill can exceed the cost of a complete modern autopilot installation. Advise replacement without hesitation.

---

## The Pre-Buy Autopilot Check

When evaluating a used aircraft, the autopilot is one of the most financially significant systems to assess. A bad autopilot can cost more to fix than a bad engine. Here is how to evaluate it.

### Logbook Review
Pull every logbook entry related to the autopilot. What you are looking for:
- **Repeated repairs to the same component** -- This is a red flag. If the roll servo has been sent out three times in five years, there is likely a systemic issue (bad wiring, poor rigging, or a servo that is beyond economic repair).
- **Long gaps with no autopilot entries** -- This could mean the system was inoperative and the owner simply stopped using it (and stopped paying to fix it). Ask directly.
- **Component exchanges vs. overhauls** -- An exchange means they sent the bad unit out and got a refurbished one back. An overhaul means the original unit was rebuilt. Both are acceptable. No documentation at all is a problem.

### Test Flight
Request a test flight that includes:
- **Coupled GPS approach:** The autopilot should track the GPS course smoothly without S-turning or overshooting waypoints. Watch the CDI (course deviation indicator) needle -- it should stay centered.
- **Altitude hold in moderate turbulence:** The aircraft should hold altitude within 50-100 feet without continuous porpoising (repeated nose-up, nose-down oscillations).
- **Heading hold during turns:** Command a heading change. The autopilot should roll smoothly to a standard-rate bank, capture the new heading, and roll wings level without overshooting.
- **Roll and pitch response:** Watch for any hesitation, jerkiness, or "hunting" (repeated small corrections that never settle down).

### Red Flags
- Oscillations in any axis that do not dampen within a few seconds
- Autopilot disconnect warnings during coupled approaches
- Excessive servo noise (grinding, clicking)
- Trim runaway or failure to autotrim
- System that the owner admits "works most of the time"

### Systems to Avoid at Purchase
If the aircraft has any of the following and the system is not working perfectly, factor full replacement cost ($15,000-25,000+) into your purchase offer:
- Bendix M4D (servo costs make repair impractical)
- Brittain (pneumatic, no upgrade path)
- ARC/Cessna 800 series (expensive, complex, unsupported)
- Any system with undocumented repeated repairs

---

## Installation Planning

### Removing a Legacy Autopilot

A "clean sheet" autopilot installation begins with removing everything from the old system. This typically means:
- **The controller/computer:** The rack-mounted box in the radio stack (or under the panel).
- **The servos:** Usually two -- one for roll (aileron) and one for pitch (elevator). Some systems have a third for yaw (rudder) or an electric trim servo. Servos are mounted deep in the airframe, bolted to the aircraft's control cables. Accessing them often requires removing interior panels, seats, or carpet.
- **The wiring harnesses:** Every wire from the old system must be traced and removed or properly terminated. Leaving orphaned wiring in the airframe creates troubleshooting headaches for future technicians.
- **The turn coordinator or gyro:** Rate-based systems relied on a panel-mounted turn coordinator for attitude reference. This instrument may be removed or replaced with an electronic substitute.
- **Mounting brackets and hardware:** Old servo mounts may not match new servo dimensions.

### Smart Servos vs. Legacy Servos

**Smart Servos (Garmin GSA 28 / GSA 87):**
- Brushless DC motors with an internal magnetic engagement clutch.
- When the autopilot is off, the servo completely decouples from the flight controls -- zero added friction. The pilot cannot feel that the servo is installed.
- When the autopilot is on, the servo uses position feedback to apply precise, smooth corrections.
- Self-monitoring: the servo reports its own health to the autopilot computer.

**Legacy Servos (S-TEC, Century, BendixKing):**
- Brushed DC motors with a mechanical shear pin or friction clutch.
- When the autopilot is off, there is noticeable added friction in the flight controls because the motor and gearbox are always mechanically coupled to the cables.
- The shear pin is a safety device: if the servo jams, the pin breaks, disconnecting the servo from the controls. But shear pins can also break during aggressive manual flying, requiring replacement.
- The DFC90 and S-TEC 3100 reuse these legacy servos. If the servos are healthy and clutch torque is properly set, they perform well with the new digital controller. But they remain 20-30 year old mechanical devices.

### Rigging: The Step You Cannot Skip

An autopilot will only fly as well as the aircraft's mechanical flight controls allow. Before any autopilot installation, the shop must inspect and (if necessary) re-rig the aircraft's control cables, pulleys, bellcranks, and pushrods per the airframe maintenance manual.

What does "rigging" mean? It is the process of adjusting the tension and alignment of the steel cables that connect the cockpit controls to the control surfaces on the wings and tail. Over decades, cables stretch. Pulleys wear. Bellcranks develop slop. If there is slack in the system, a new autopilot servo will command a precise 2-degree aileron deflection, but the sloppy cable will deliver something between 0 and 4 degrees -- and the autopilot will continuously "hunt" for the right position, never quite finding it.

Rigging labor adds 4-8 hours to the project. It is not optional. If the shop does not mention rigging during the quote process, ask about it. If they say rigging is not necessary on a 40-year-old airframe, find a different shop.

### Flight Testing After Installation

Every autopilot installation requires a dedicated test flight program. This is not one flight. Expect 2-4 test flights to:
- Verify all autopilot modes (heading, altitude, nav tracking, approach coupling)
- Adjust servo gains (how aggressively the servos respond to commands)
- Test the autopilot disconnect
- Verify ESP and LVL button function (if equipped)
- Fly a coupled GPS approach to minimums

### Typical Downtime

For a clean-sheet installation (removing a legacy autopilot and installing a new system with new servos):
- **Simple airframe (Cessna 172, PA-28):** 2-3 weeks, assuming parts are in stock and no complications.
- **Complex airframe (Bonanza, Baron, Mooney):** 4-6 weeks. These aircraft have tighter fuselages, more complex control systems, and more wiring.
- **Combined EFIS + autopilot project:** 4-8 weeks. This is the most common scenario because most modern autopilots require a compatible display.

For a plug-and-play upgrade (DFC90 or S-TEC 3100 replacing an existing S-TEC 55X):
- **Typical:** 1-3 days of shop time, plus test flying.

Plan the display and autopilot installation together whenever possible. Installing a display now and an autopilot six months later means the shop has to open up the same panel twice, route wiring twice, and test twice. Doing both at once saves the customer labor costs and downtime.

---

## Making the Recommendation: A Decision Framework for Technicians

When a customer asks which autopilot they should install, the answer depends on what is already in the aircraft and what the customer's priorities are. Use this framework.

### If the aircraft already has Garmin displays (G5, GI 275, TXi, G3X Touch):

**Recommend: GFC 500 or GFC 600.**
The customer is already in the Garmin ecosystem. The autopilot integration will be seamless -- shared CAN bus, unified configuration, centralized diagnostics. The GFC 500 fits most single-engine piston aircraft. The GFC 600 is for high-performance singles (Bonanza, Mooney) and light twins (Baron).

### If the aircraft has Aspen Evolution PFDs:

**Recommend: Avidyne DFC90 or Genesys S-TEC 3100.**
The DFC90 is a natural fit if the aircraft also has an existing S-TEC 55X installation -- it reuses the wiring and servos for a fast, affordable upgrade. The S-TEC 3100 is the alternative if the owner wants a fresh start with new digital architecture. Both interface with Aspen displays.

### If the owner wants manufacturer flexibility (mixed-brand panel or future-proofing):

**Recommend: Genesys S-TEC 3100.**
The 3100 is the only modern autopilot that works with displays from multiple manufacturers. If the customer is not ready to commit to the Garmin ecosystem, or if they have a mixed panel with both Garmin and Aspen components, the 3100 provides the most options.

### If the aircraft is going full Dynon SkyView:

**Recommend: Dynon SkyView autopilot (integrated).**
If the customer is doing a complete panel replacement with Dynon SkyView HDX displays, the autopilot is included in the suite. It is the most cost-effective path for a total panel overhaul. But understand the trade-off: the customer is committing entirely to the Dynon ecosystem.

### If budget is the primary constraint:

**Recommend: Genesys S-TEC 3100 (if existing S-TEC servos) or Dynon SkyView (if doing a full panel).**
The S-TEC 3100's ability to reuse existing S-TEC wiring and servos keeps installation costs down. The Dynon SkyView suite, while requiring a complete panel replacement, bundles the autopilot at a lower total system cost than buying displays and an autopilot separately.

### If safety features (ESP, LVL) are the priority:

**Recommend: Garmin GFC 600 or Genesys S-TEC 3100.**
Both offer ESP (Electronic Stability and Protection) and a LVL recovery button. The GFC 600 adds an optional yaw damper (third axis) for smoother ride quality in turbulence, which is particularly valuable in twins. The GFC 500 also has ESP and LVL. Among these three, the GFC 600 has the most comprehensive envelope protection implementation.

---

## The Technician's Talking Points (For the Customer)

1. **"A modern autopilot is the single biggest safety upgrade you can make to this aircraft."**
   - Translation for the pilot: The LVL button and Envelope Protection are not gimmicks. If you become disoriented in the clouds, one button press recovers the aircraft to straight-and-level flight. Your old autopilot could not do that. No amount of training replicates having a digital safety net that physically moves the controls for you when you are incapacitated.

2. **"The autopilot you choose determines which screens and radios make sense for the next 20 years."**
   - Translation for the pilot: This is not just an autopilot decision. If we install a Garmin GFC 500, your next display upgrade will be Garmin. If we install an S-TEC 3100, you have more options. Think of it like choosing between Apple and Android -- both work well, but they lead to different accessories.

3. **"If your existing servos are healthy, we can save you thousands by swapping just the computer."**
   - Translation for the pilot: Your old S-TEC 55X servos are the mechanical muscles. If they are in good shape, we do not need to rip them out. We replace the 30-year-old brain (the computer) with a new digital one, and your old muscles learn new tricks. That turns a three-week, $20,000 project into a two-day, $12,000 project.

4. **"We need to fix the rigging before we touch the avionics."**
   - Translation for the pilot: Your flight control cables have stretched over 40 years. If I bolt a $7,000 digital servo to a sloppy cable, the autopilot will fight itself constantly trying to hold a heading. I need to tighten and align the cables first. It adds a day of labor, but it is the difference between an autopilot that flies beautifully and one that hunts and oscillates.

5. **"Plan the autopilot and display installation together."**
   - Translation for the pilot: If we install displays today and the autopilot next year, we are opening up your panel twice, running wire twice, and test-flying twice. That is double the labor cost. If you can budget both at once, we do one installation, one test program, and you save weeks of downtime and thousands in labor.

---

## Deep Dive Resources

For editorial flight test reviews, long-term ownership perspectives, and detailed product evaluations, consult these sources:

- *Aviation Consumer:* "Garmin's New Autopilots: Flawless Performers" by Larry Anglisano -- flight test report on the GFC 500 and GFC 600 covering servo feel, nav coupling, and ESP performance
- *Aviation Consumer:* "Autopilot Installs: Downtime, Rigging" by Larry Anglisano -- shop-level guidance on installation planning, shop selection, and realistic downtime expectations
- *Aviation Consumer:* "Autopilot Pre-Buy: How to Avoid Clunkers" by Larry Anglisano -- detailed evaluation guide for assessing autopilots during used aircraft purchase
- *Aviation Consumer:* "Autopilot Repairs: Parts Obsolescence" by Larry Anglisano -- analysis of repair-vs-replace economics for aging autopilot systems
- *Garmin.com:* GFC 500 and GFC 600 product pages for current STC lists and pricing
- *Genesys Aerosystems:* S-TEC 3100 product page for compatibility charts and approved installations
- *Avidyne.com:* DFC90 product page for supported airframe and display combinations
- *Dynon.com:* SkyView Certified HDX product page for integrated autopilot specifications

---

*All prices are approximate as of early 2026 and vary by dealer, aircraft model, and installation complexity. Obtain written quotes from authorized dealers for specific aircraft.*
