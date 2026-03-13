# Shop Installation Planning: A Technical Primer

**Category:** Educational Guide
**Target Audience:** Entry-Level Avionics Technician
**Last Updated:** March 2026

---

## Why Installation Planning Matters

Avionics installations are the most labor-intensive projects in general aviation maintenance. We are not swapping brake pads. We are pulling the interior out of a 50-year-old airplane, routing dozens of shielded wires through tight spaces behind instrument panels, cutting metal, mounting antennas on the outside of a pressurized (or unpressurized) fuselage, and then expecting every single system to talk to every other system the first time we flip the master switch.

At shop rates between $130 and $160 per hour, labor is the dominant cost in any avionics retrofit. A multi-component panel overhaul can accumulate $15,000 to $25,000 in installation labor alone -- before you even count the price of the boxes. That reality makes planning the single highest-leverage skill a technician can develop.

Here is the uncomfortable truth: a well-planned avionics project can be completed in two to three weeks. The same project, poorly planned, can drag on for six to eight weeks. The difference is not talent or speed. It is preparation.

Larry Anglisano captured this perfectly in his *Aviation Consumer* editorial "What is Realistic Downtime?" -- a shop that blew a Garmin avionics project into a four-month ordeal on a pressurized piston single, largely because it failed to plan around antenna approvals, parts availability, and customer communication. The aircraft ended up parked on a transient tiedown with holes in the fuselage covered in tape. That is what bad planning looks like from the customer's side of the hangar.

**The bottom line for technicians:** Poor planning leads to blown timelines, cost overruns, aircraft sitting incomplete waiting for parts, frustrated customers, and shops that earn reputations they cannot shake. Good planning is the difference between a profitable project and one that eats your margin.

---

## Pre-Project Assessment

Before you quote a dollar or schedule a hangar slot, you need to do your homework. This phase takes time up front but saves exponentially more time once the aircraft is on jacks.

### Current Panel Survey

Walk out to the aircraft with a clipboard (or a tablet and camera) and document everything:

- **Every installed unit** -- manufacturer, model number, part number, serial number, and physical condition. Photograph each one.
- **Every interface** -- what talks to what? Is the CDI driven by the GPS navigator or the VOR receiver? Does the autopilot take its attitude reference from a vacuum gyro or a digital source? Is the transponder getting altitude from a blind encoder or from the ADAHRS?
- **Every wire you can see** -- note the cable types (coaxial, shielded twisted pair, ribbon cable, CAN bus), their condition, and where they route. Old RG-58 coaxial cable that has been baking behind a panel for 30 years will likely need replacement. Plan for it now, not after you have ripped the panel apart.
- **Panel dimensions** -- measure every cutout, the available vertical stack height, the depth behind the panel, and any structural obstacles (control yokes, throttle quadrants, fuel selectors, structural ribs).

This survey is the foundation of your entire project plan. Skip it, and you will be discovering surprises at $150 per hour.

### Aircraft-Specific STC Research

Every new product you plan to install needs an approved Supplemental Type Certificate (STC) for the specific aircraft make, model, and serial number range. This is not optional -- it is federal regulation.

**Do not assume.** A Garmin GFC 500 autopilot may have an STC for a Cessna 172S but not for a Cessna 172M. The Dynon SkyView Certified HDX may cover a Piper Cherokee PA-28-180 but not a PA-28-151. Serial number ranges matter. Check every single product against the actual aircraft sitting in your hangar.

Contact the manufacturer or check their STC database directly. If the STC does not exist, the installation does not happen -- or you are looking at an FAA field approval, which is a fundamentally different (and far more expensive and time-consuming) process.

### Identify Dependencies

Some products require other products to function. Miss a dependency, and your customer is staring at a half-installed panel waiting for a box you forgot to order.

Common dependency chains:

- **Garmin GFC 500 autopilot** requires a Garmin G5, GI 275, G500 TXi, or G3X Touch as its flight display. No Garmin display, no GFC 500. Period.
- **Garmin GTN 750Xi** requires a compatible GPS antenna (GA 35 or GA 36), and if you are interfacing it with an autopilot, you may need a GAD 43e adapter.
- **Any new WAAS GPS navigator** requires a proper WAAS-capable antenna with a clear sky view. The old fixed-reception GPS antenna bolted to the glareshield may not cut it.
- **Digital autopilot servos** often require specific GAD adapter boxes (GAD 29, GAD 29B, GAD 43e) to bridge communication between the autopilot and legacy instruments or trim systems.

Map the entire dependency chain on paper before you quote the project. A missing $800 adapter box discovered mid-installation can stall the entire project for two weeks while you wait for the backorder to ship.

### Check Parts Availability

Call your distributors. Confirm lead times. Do this before you tell the customer "three weeks."

The avionics supply chain is not like ordering auto parts from the local store. New Garmin units can have lead times of days to weeks depending on demand. Used and overhauled equipment is even less predictable -- the used avionics market is volatile, and a used GNS 430W that was available last Tuesday may be sold by Friday.

Antenna kits, connector kits, and installation hardware are the items most commonly forgotten during the ordering phase. A $12 D-sub connector that is out of stock can ground a $40,000 project.

**Order everything before the aircraft comes in.** Stage all parts on a shelf. Verify every box, every connector, every mounting tray. Then -- and only then -- schedule the aircraft.

### Customer Expectations Meeting

Sit down with the aircraft owner before any work begins and be explicit about:

- **Timeline** -- give a realistic range, not a best-case fantasy. "Three to four weeks" is honest. "Should be about a week" is how shops end up on internet forums.
- **Cost range** -- quote a range, not a fixed price. Unexpected wiring issues are common in old aircraft. "Between $28,000 and $34,000 installed" is far better than "$30,000 flat" followed by a $4,000 surprise invoice.
- **What is included and what is not** -- be specific. Does the quote include the functional flight test? New antenna coax? Weight and balance recalculation? Database subscriptions?
- **Communication plan** -- how often will you update them? Weekly calls? Photos at milestones? Some shops send photo updates at each major stage. Customers love this, and it prevents the anxious "what's happening to my airplane?" phone calls.

The shops with the best reputations are the ones that communicate relentlessly. The ones with the worst reputations are the ones that do not return calls.

---

## The Installation Sequence

There is a logical order of operations for a multi-component panel project. Doing things out of sequence creates rework, and rework is unbillable labor that eats your profit.

### Step 1: Remove Old Equipment

Pull the legacy boxes, servos, antennas, and associated wiring. **Label everything before you disconnect it.** Use a label maker or masking tape and a Sharpie. If you are pulling a 40-year-old King KX 175B navcomm and you do not label the 14 wires on the back of its tray, you will spend hours tracing wires later.

Bag and tag removed equipment. Some of it has resale value (a working GNS 430W can fetch around $5,000 on the used market). Some of it is scrap. Either way, the customer paid for it and will want to know what happened to their old gear.

### Step 2: Panel Fabrication

If the new equipment requires different cutout dimensions -- and it almost always does -- now is the time to fabricate. Cut new holes, modify the panel face, fabricate sub-panels or filler plates as needed.

**Key tip:** Do this while waiting for parts if possible. Panel fabrication is bench work. It does not require the aircraft. If you have the panel dimensions from your pre-project survey, you can CNC-cut or hand-cut a new panel overlay while the aircraft is still flying. This alone can shave days off the project timeline.

For shops with CNC capability, design the panel in CAD software and cut it precisely. For shops without CNC, a hand-cut panel with proper deburring and a quality powder-coat finish is perfectly acceptable.

### Step 3: Wire Routing

Run new harnesses before the panel goes back together. Route ARINC 429 data buses, RS-232 serial lines, CAN bus cables, power feeds, and ground wires according to the installation manual.

Wire routing rules that will save you grief:

- **Use proper shielded cable** where the installation manual specifies it. ARINC 429 requires shielded twisted pair. Skipping this creates noise issues that are maddening to troubleshoot.
- **Separate power wires from data wires.** Running a 10-amp power feed alongside an RS-232 serial line is asking for interference.
- **Use proper grounding practices.** Single-point grounding where specified. Shield termination per the manufacturer's wiring diagram, not per your personal preference.
- **Leave service loops.** Give yourself 6 to 12 inches of extra wire at each termination point. Future you (or the next tech who works on this airplane) will be grateful.

Wiring is typically 40 to 60 percent of total installation labor. This is not an exaggeration. It is the most time-consuming, most detail-critical phase of the entire project. Do not shortchange it.

### Step 4: Mount Remote Equipment

Before the panel goes back in, install the remote-mounted components:

- **ADAHRS modules** (Attitude and Heading Reference Systems) -- these are typically mounted on a rigid shelf behind the panel or in the tailcone. They must be precisely aligned with the aircraft's longitudinal axis. A sloppy ADAHRS mount means inaccurate attitude and heading data.
- **GPS antennas** -- mount on the fuselage top skin with a clear, unobstructed view of the sky. Maintain proper separation from VHF antennas (check the installation manual for minimum distances).
- **Magnetometers** -- mount in the wingtip or tailcone, as far from ferrous metal and electrical interference as possible.
- **Autopilot servos** -- mount per the STC. Rig the bridle cables to the proper tension. This is critical -- improperly rigged servos are the number one cause of autopilot performance complaints after installation.

### Step 5: Install Panel-Mount Units

With the wiring run and remote equipment mounted, drop in the new boxes. Slide units into their trays, connect the wiring harnesses, and secure everything.

Verify mechanical fit before you start connecting wires. Make sure the unit seats properly in the tray, the tray is secured to the panel, and nothing is binding or rubbing against adjacent equipment.

### Step 6: Antenna Work

Install new antennas or modify existing antenna installations as required:

- **GPS antennas** -- WAAS-capable, proper sky view, correct coaxial cable (RG-400, not old RG-58).
- **VHF comm antennas** -- verify VSWR (Voltage Standing Wave Ratio) after installation. A comm antenna with high VSWR will cause poor radio performance that the customer will blame on the new radio.
- **Transponder antennas** -- typically belly-mounted. Verify proper L-band cable routing.
- **ADS-B antennas** -- separate top-mount and bottom-mount antennas for ADS-B In and Out, depending on the installation. Check the STC for specific antenna requirements.
- **Marker beacon, DME, and VHF nav antennas** -- if applicable to the installation.

Antenna placement is frequently where shops run into trouble. A new GPS antenna needs clear sky view and adequate separation from VHF antennas. Plan placement carefully during the pre-project assessment, not when you are standing on a ladder with a hole saw.

### Step 7: Power Up and Configure

Initial power-on. Load software, configure system settings, load navigation databases, set up frequency presets, configure autopilot parameters, and establish data bus communication between all installed units.

This is where you find out if all your wiring is correct. Expect to troubleshoot at least a few interface issues on a complex installation. That is normal. What is not normal is discovering that you ran the wrong cable type or forgot an entire wire run.

### Step 8: Ground Test

Before the aircraft flies, verify every function on the ground:

- All displays power up and show correct data
- GPS acquires satellites
- VHF radios transmit and receive on all frequencies
- Transponder replies correctly (ramp test)
- Autopilot servos engage and disengage, flight control movement is correct direction and proper authority
- Audio panel routes audio correctly to all stations
- Intercom functions in all modes
- ADS-B Out is transmitting correct data (verify with FAA compliance tool or ADS-B ground station)

### Step 9: Functional Flight Test

Take it flying. Test everything in the air:

- Autopilot tracking, coupled approaches, altitude hold, vertical speed modes
- GPS navigation accuracy, approach sequencing, missed approach procedures
- VHF comm clarity at range
- Transponder altitude reporting accuracy
- Traffic and weather display (if equipped)
- ADS-B In performance

This flight test is not optional, and it is not a quick lap around the pattern. A thorough functional flight test on a multi-component installation takes one to two hours of flight time. Budget for it in the quote.

### Step 10: Paperwork

Complete all required documentation:

- **FAA Form 337** -- every major alteration requires it. This is the legal document that makes the installation airworthy. It is not optional and it is not something you "get around to later."
- **Aircraft logbook entries** -- document every component installed, every component removed, STC numbers, software versions, and serial numbers.
- **Weight and balance update** -- removing old equipment and adding new equipment changes the aircraft's weight and balance. Always recalculate and provide an updated W&B sheet.
- **Customer handoff package** -- compiled documentation including copies of 337s, updated W&B, equipment manuals, warranty information, and database subscription details.

---

## Common Pitfalls

These are the mistakes that trip up even experienced shops. Know them. Avoid them.

### Underestimating Wiring Time

Wiring is typically 40 to 60 percent of total installation labor. On a complex panel retrofit -- say, replacing a full steam gauge panel with a Garmin G3X Touch suite including autopilot -- you may spend 60 to 80 hours just on wiring. If your quote only budgeted for 30 hours of wiring labor, you just donated 30 to 50 hours of free labor.

Always estimate wiring time generously. When in doubt, add 20 percent to your initial wiring estimate. You will almost always use it.

### Missing Adapter Boxes

GAD 29, GAD 29B, GAD 43e, GEA 110, and similar Garmin adapter modules are easy to overlook when building a quote. They do not show up in the glamorous marketing photos. They sit behind the panel where nobody sees them. But without them, the system does not work.

Read the installation manual's interconnect wiring diagram before you finalize the quote. Every adapter box, every interface module, every required peripheral needs to be on the parts list.

### Antenna Placement Conflicts

New GPS antennas need a clear sky view and adequate separation from VHF comm and nav antennas. On a typical Cessna or Piper, real estate on the fuselage top skin is limited. If you have a VHF comm antenna, a VHF nav antenna, a GPS antenna, a marker beacon antenna, and an ELT antenna all competing for space on the same stretch of fuselage, you have a placement problem.

Solve it during the planning phase by mapping every existing antenna location and every new antenna requirement on a simple top-down fuselage diagram.

### Weight and Balance Shift

Removing 15 pounds of old vacuum-driven instruments and King radios from the panel, then adding 8 pounds of modern Garmin glass and relocating a GPS antenna to the tail, changes the aircraft's center of gravity. It may not seem like much, but on a light single-engine aircraft, it can shift the CG enough to matter.

Always recalculate weight and balance. Provide the owner with an updated W&B sheet. This is a legal requirement, not a suggestion.

### Database Subscriptions

Garmin, Jeppesen, and other providers charge annual subscription fees for navigation databases, terrain databases, obstacle databases, and electronic chart services. These are ongoing costs that the customer needs to know about before they sign the work order.

A Garmin NavData subscription runs several hundred dollars per year. Jeppesen chart subscriptions can run higher. If the customer does not budget for this, they will have an expensive panel full of expired databases within 28 days of their first flight.

Mention it in the quote. Put it in writing. Do not let the customer discover this six months later and blame your shop.

### Forgetting the 337

Every major alteration to a type-certificated aircraft requires FAA Form 337 (Major Repair and Alteration). This includes virtually every avionics installation that involves new STCs, antenna modifications, or structural changes to the panel or fuselage.

The 337 must be completed, signed by the appropriate authorized person (IA or repair station), and submitted to the FAA. The paperwork is not optional. Failing to file it means the installation is not legally approved, which means the aircraft is technically not airworthy.

---

## Downtime Management

Aircraft downtime is money -- not just for the shop, but for the owner who cannot fly. Managing it well is how good shops build loyal customers.

### Quote Realistic Timelines

Add buffer for the unexpected. If you think the job will take three weeks, quote three to four weeks. If everything goes perfectly, you hand the aircraft back early and the customer is thrilled. If you hit a snag (and you will hit snags), you are still within your quoted window.

The editorial in *Aviation Consumer* made the point clearly: shops that blow timelines destroy customer relationships. The shop in that story quoted "a few weeks" and delivered six months later. The relationship never recovered.

### Stage Parts Before Aircraft Arrival

If possible, have every single part on the shelf before you pull the aircraft into the hangar. This includes the obvious items (the new GPS navigator, the flight displays) and the non-obvious items (antenna gasket kits, connector backshells, heat shrink, tray mounting screws, rack adapters).

A project that stalls for two weeks because you are waiting for a backordered antenna coupler is two weeks of hangar space occupied by an aircraft generating zero revenue.

### Build the Panel Off-Aircraft

For major panel retrofits, consider doing the panel fabrication on the bench. Use your pre-project measurements to build or modify the panel face while the aircraft is still flying. Mount the trays, verify fit, even pre-wire some of the harness on the bench.

The shops known for fast-turn installations achieve their speed through preparation, not by rushing. When the aircraft finally comes in, the new panel is ready to slide in. Removal of old equipment and installation of the new panel can overlap efficiently.

### Communicate Delays Immediately

If something goes wrong -- a part is backordered, you discovered corroded wiring that needs replacement, the STC requires an engineering disposition -- tell the customer immediately. Do not wait. Do not hope the problem resolves itself.

Customers handle bad news far better than they handle surprises. An honest phone call saying "we found corroded wire bundles behind the panel that need replacement, which adds two days and about $800 to the project" is infinitely better than radio silence followed by an unexplained three-week delay and an inflated invoice.

---

## Quoting and Pricing

Pricing avionics work is part science, part experience, and part honest risk assessment.

### Break the Quote Into Clear Categories

A professional quote should itemize:

- **Equipment cost** -- every box, every tray, every antenna, every adapter, every connector kit. List the manufacturer part number and the unit price.
- **Installation labor** -- quoted as either a flat number of hours or a time range (e.g., "60-80 hours at $150/hour"). Be specific about what labor covers.
- **Miscellaneous hardware** -- connectors, cable, wire, heat shrink, tie wraps, mounting hardware, antenna gaskets, filler plates. This is typically 3 to 5 percent of the equipment cost but can surprise you if you do not budget for it.
- **FAA paperwork** -- Form 337 preparation, logbook entries, weight and balance recalculation. Some shops include this in labor; others break it out separately.
- **Functional flight test** -- fuel and flight time for the test flight. If the shop provides the test pilot, note that cost.

### Always Quote a Range

Unexpected wiring issues are the norm, not the exception, in aircraft older than 20 years. A 1975 Cessna 182 may have had three different shops working on it over five decades, each with their own wiring practices (or lack thereof). You will find splices held together by electrical tape. You will find unshielded wire run next to coaxial cable. You will find wires that go nowhere, connected to nothing.

A range quote ("$28,000 to $34,000 installed") protects the shop from eating unexpected labor while still giving the customer a realistic budget number.

### Account for Trade-In Value

When you pull old equipment, some of it has real market value. A working Garmin GNS 430W trades in the $4,000 to $6,000 range. A serviceable King KX 155 navcomm can bring $500 to $1,000. Even old King KT 76A transponders have some residual value.

Factor this into the customer's total project cost. "Your new panel costs $35,000 installed, but you will recoup approximately $5,000 to $7,000 from the sale of your existing Garmin GNS 430W and King radios" makes the project more palatable.

### Flat-Rate vs. Time-and-Materials

- **Flat-rate pricing** gives the customer certainty. They know the total cost before work begins. But it exposes the shop to risk on complex aircraft where hidden wiring problems can consume hours of unbillable labor.
- **Time-and-materials pricing** protects the shop but makes customers nervous. They have no ceiling on cost.
- **A hybrid approach** works well for many shops: flat-rate on equipment and standard installation tasks, time-and-materials for "discovery" work (tracing old wiring, addressing corrosion, resolving unforeseen integration issues) with a not-to-exceed cap.

---

## Tools and Checklists

The shops that run efficient installation projects are the ones that use checklists. Create these for every project and keep them in the aircraft's job folder.

### Pre-Installation Checklist

- [ ] All parts received and verified against the order
- [ ] All STCs verified for this specific aircraft make/model/serial number
- [ ] Installation manuals on hand for every product
- [ ] Customer sign-off on work order and cost estimate
- [ ] Hangar time scheduled and confirmed
- [ ] Panel fabrication completed (if applicable)
- [ ] Wiring harnesses pre-built (if applicable)
- [ ] Special tools available (crimp tools, coax prep tools, torque wrenches for antenna installations)

### Wiring Schematic

Even a hand-drawn diagram showing what connects to what is better than working from memory. For complex installations, create a proper interconnect diagram showing:

- Every unit and its connector pinouts
- Every data bus (ARINC 429, RS-232, CAN bus) with wire routing
- Power distribution (which circuit breaker feeds which unit, wire gauge, fuse values)
- Antenna connections (cable type, connector type, routing path)
- Ground connections (single-point ground bus locations)

### Configuration Sheet

Document every configurable setting:

- Comm frequency presets
- Nav database revision and expiration date
- Transponder code and altitude source configuration
- Autopilot parameters (heading gain, pitch trim speed, altitude capture sensitivity)
- ADS-B configuration (ICAO address, aircraft type designator, registration)
- Audio panel defaults (intercom mode, sidetone levels, marker sensitivity)

### Functional Test Checklist

- [ ] All displays power on and pass self-test
- [ ] GPS acquires satellites within specification
- [ ] All VHF comm frequencies transmit and receive (ramp check with handheld or ground station)
- [ ] Transponder replies to ramp tester on all modes
- [ ] Autopilot engages in all modes; verify correct servo direction and authority
- [ ] CDI/HSI deflection matches GPS/NAV source
- [ ] Audio panel routes all audio sources correctly
- [ ] Intercom operates in all modes (ISO, ALL, CREW)
- [ ] ADS-B Out verified (FAA PAPR tool or ground station verification)
- [ ] ADS-B In displays traffic and weather (if equipped)
- [ ] Functional flight test completed and signed off

### Post-Installation Documentation Package

Compile and deliver to the customer:

- [ ] Completed FAA Form 337 (signed by IA or repair station)
- [ ] Aircraft logbook entries for all work performed
- [ ] Updated weight and balance sheet
- [ ] Copies of all applicable STCs
- [ ] Equipment serial numbers and warranty information
- [ ] Database subscription information and renewal dates
- [ ] System operating quick-reference guide (if applicable)

---

## When to Refer Out

Not every shop should attempt every installation. Knowing your limits is not a weakness -- it is professionalism.

### Know Your Experience Level

If you have never installed a particular autopilot system, get factory training first or partner with a shop that has done it. Autopilot installations require specific knowledge of flight control rigging, servo mounting, bridle cable tensioning, and system integration that you cannot pick up from the installation manual alone.

As Larry Anglisano noted in his autopilot installation coverage: shops that do not properly rig flight control cables after an autopilot installation create systems that perform poorly, leading to expensive troubleshooting cycles that often end up at a second (or third) shop. Do not be the shop that creates that problem.

### Complex Aircraft Require Specialized Experience

Pressurized twins, turboprops, and cabin-class aircraft are fundamentally different installation environments than a Cessna 172. Pressurized aircraft require approved modifications to the pressure vessel for antenna installations. Multi-engine aircraft have more complex electrical systems and redundancy requirements. Turbine aircraft often have different avionics bus architectures.

If your shop's experience is primarily in single-engine piston aircraft, be honest about that. Refer the pressurized Baron or the King Air to a shop that specializes in those platforms.

### Dealer Authorization Requirements

Some manufacturers require specific dealer authorization to install their products. Garmin's dealer network is the most prominent example -- certain Garmin products can only be installed by authorized Garmin dealers who have completed factory training and maintain current certification.

If you are not an authorized dealer for the system the customer wants, you have two choices: become one (which requires investment in training and tooling) or refer the customer to a shop that already is.

### Reputation Over Revenue

Referring a customer to a better-qualified shop for a particular installation costs you that project's revenue. Botching an installation you were not qualified to perform costs you your reputation and potentially exposes you to liability.

The math is simple. A referred customer respects your honesty and will come back for the work you are qualified to do. A customer with a botched installation will never return and will make sure everyone at the airport knows about it.

---

## Deep Dive Resources

For editorial reviews, real-world shop stories, and deeper technical context on installation planning, check out these articles:

- [Aviation Consumer: What is Realistic Downtime?](https://aviationconsumer.com/industry-news/first-word-what-is-realistic-downtime/) by Larry Anglisano -- essential reading on managing customer expectations and shop communication
- [Aviation Consumer: Autopilot Installs -- Downtime, Rigging](https://aviationconsumer.com/avionics/autopilot-installs-downtime-rigging/) by Larry Anglisano -- shop-level guidance on the most complex avionics retrofit: autopilots
- [Aviation Consumer: Panel Planner 101 -- Modern IFR Cessna 182](https://aviationconsumer.com/avionics/panel-planner-101-modern-ifr-cessna-182/) by Larry Anglisano -- a practical case study in planning a multi-component upgrade with realistic budget and downtime considerations
- [FAA Advisory Circular AC 43.13-2B](https://www.faa.gov/regulations_policies/advisory_circulars/index.cfm/go/document.information/documentID/99861) -- Acceptable Methods, Techniques, and Practices for Aircraft Alterations
- [FAA Form 337 Instructions](https://www.faa.gov/forms/index.cfm/go/document.information/documentID/185675) -- Major Repair and Alteration form requirements
