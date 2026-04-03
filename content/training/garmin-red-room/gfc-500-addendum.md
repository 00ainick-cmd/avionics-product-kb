---
title: "GFC 500 Working with the Addendum"
track: garmin-red-room
provider: Garmin
convention_year: 2026
category: oem-technical
difficulty: intermediate
tags: [gfc-500, garmin, autopilot, addendum, wiring, installation, gsa-28, servo, cessna]
related_products: [garmin-gfc-500, garmin-g5, garmin-gi-275]
file_type: pdf
file_url: "/files/training/2026/garmin-red-room-gfc-500-addendum.pdf"
---

# GFC 500: Working with the Addendum

> **Presented by:** Garmin Aviation Training Academy — Red Room  
> **AEA Convention 2026** · March 30, 2026  
> **Difficulty:** Intermediate  
> **Duration:** ~90 minutes (65 slides)

---

## Learning Objectives

After completing this session, you will be able to:

- Understand the structure and purpose of Garmin's GFC 500 Model Specific Addendums (MSAs)
- Navigate the Master Drawing List (MDL) and filter by product version
- Interpret the notes and advisories embedded in each addendum by Garmin's certification SMEs
- Identify and troubleshoot common GFC 500 installation problems, especially reversed trim
- Properly load and synchronize GFC 500 software across G3X Touch, G5, and GI 275 platforms
- Manage the GSA 28 Service Life Extension Program (SLEP) for your shop

---

## Module 1: GSA 28 Service Life Extension Program (SLEP)

### What Is SLEP?

The GSA 28 servo had early reliability concerns. Garmin responded with **Service Bulletin 23024** (Certified) and **SB 23038** (Experimental), offering no-cost exchanges for the improved **Mod 1** version (-20/-21 Mod 1), which began shipping in September 2022.

### Key Facts

| Detail | Info |
|---|---|
| **Program Window** | May 4, 2023 — **May 4, 2028** |
| **Cost** | No cost to customer |
| **Warranty on Replacement** | Greater of: remaining 2-year factory warranty OR 6-month repair/exchange warranty |
| **Labor Reimbursement** | 2.5 hours per servo (Authorized Garmin Dealers only, certified aircraft only) |

### RMA Process

- **Updated RMA form is REQUIRED** — the old "GSA 28 RMA Scheduling Form" is retired
- Submit RMA with **planned install date** so Garmin can schedule servo shipment
- **Return removed servos promptly** — they are upgraded to Mod 1 and re-enter inventory

### Contact Information

| Purpose | Contact |
|---|---|
| RMA Forms | avionicsrma.americas@garmin.com |
| Warranty Claims | warranty@garmin.com |
| SLEP Inquiries & Scheduling | GSAinquiries@Garmin.com |
| Experimental RMA | G3Xpert@garmin.com |
| Customer Support Articles | www.Garmin.com/GSA28Info |

> ⚠️ **Deadline Alert:** SLEP exchanges end **May 4, 2028**. Any GSA 28 servos not exchanged by that date will no longer be eligible for the free Mod 1 upgrade.

---

## Module 2: Pre-Install Checklist — Documentation First

### The Golden Rule

> *"For every 10 minutes you spend reading the notes on the Model Specific Addendum, you'll save an HOUR of troubleshooting your installation."*
> 
> *"We never have time to do it 'right', but we always make time to do it again!"*

### Before You Start: Documentation Checklist

1. **Aircraft Photos** — Document the existing panel and behind-panel condition
2. **Other Modifications** — What else has been done to this aircraft? Look for conflicts
3. **Garmin Documentation Package:**
   - ✅ Approved Models List (AML)
   - ✅ Autopilot Price Catalog
   - ✅ Master Drawing List (MDL) — **Current revision is Rev 99**
   - ✅ Model Specific Addendum (MSA) for your exact airframe
   - ✅ Aircraft Flight Manual Supplement (AFMS)
   - ✅ Installation Documentation
   - ✅ Post-Install Checkout procedures

### Using the Product Version Filter

Garmin's MDL offers a **product version filter** that:
- Simplifies quick reference lookups
- Works across all Garmin STC products (not just GFC 500)
- Focuses searches on only the most recent documents
- **Always check for MDL updates before delivery of the aircraft!**

---

## Module 3: Notas Legere — Read the Notes!

### Why Notes Matter

The notes in each Model Specific Addendum represent **direct lessons learned** from Garmin's certification team during initial STC issuance. They are not filler — they are distilled experience from flight test and field support.

### Case Study: Note Count Evolution

| Airframe | Addendum | Initial Notes | Current Notes |
|---|---|---|---|
| Cessna 172 E/S | 2017 (Initial) | 29 | **31** (Rev 11) |
| Cessna 210-5(A) | 2025 (Newest) | — | **49** (Rev 2) |

### What This Tells You

- The **Cessna 210-5(A)** gained 49 notes from day one — Garmin front-loaded all the lessons learned from years of GFC 500 installations across other Cessna models
- The **172's initial addendum** from 2017 had only 29 notes, but the Gains Addendum was originally included inline (now a separate document)
- Every revision adds knowledge. **Always use the latest revision.**

---

## Module 4: Model Specific Addendums (MSA)

### Cessna 210 K/L/M/N Example

- **Part Number:** 190-02291-13
- **Current Revision:** Rev 16
- **Key Change:** Updated figures and additional installation views for improved accuracy

#### Yaw Servo Bracket — Conformity with the Diagram

A recurring field issue: installers reference the yaw servo bracket diagram but don't conform to the orientation shown. Even in the **latest revision** (190-02291-13, Page 16, View 15-B), the original orientation reference has been maintained.

**Lesson:** Always cross-reference the addendum diagram with the physical installation. Don't assume a bracket orientation — verify against the drawing.

---

## Module 5: Trim Runs Backwards — Troubleshooting

### The Most Common GFC 500 Field Complaint

> "Pitch Trim on my Cessna 177/172/182/210/206 runs backwards!"

### Root Cause Analysis

**Software and servos are NOT the root cause.** The usual suspects:

1. **Trim switch wiring** — Is the trim switch wired correctly? Check polarity
2. **Trim servo capstan and idler** — Are the capstan and idler wrapped correctly? Wrong wrap direction = reversed operation
3. **Aircraft trim system rigging** — Is the aircraft's own trim system rigged correctly under the pedestal or in the aft fuselage?

### Servo vs. Anti-Servo Trim Tabs

- Ensure your rigging produces the expected outcome
- **Servo tabs** and **anti-servo tabs** produce opposite effects — verify which type your aircraft uses
- Check for OEM Service Documents that may supersede original documentation

### Example: Cessna 195

- **Garmin Service Bulletin 24080** addressed a trim issue on this model
- The **updated Addendum (Rev 2)** now incorporates the SB
- Always check for SBs before starting an installation

---

## Module 6: GFC 500 Software Loading

### The Critical Difference Between Platforms

| EFIS Platform | Software Loading Behavior |
|---|---|
| **G3X Touch** | Automatically pushes software to GFC 500 LRUs. Section 5.3.2.1.1 |
| **G5** | Same as G3X Touch — automatic push. G5 was the first EFIS system for GFC 500 |
| **GI 275** | **CANNOT load software without prior configuration.** Most complex process |

### GI 275 Software Loading — Step by Step

This is where most technicians run into trouble. Follow this sequence exactly:

#### Step 1: Configure Before Loading
- Configure **all GI 275 units** present: `Interfaces > GI 275s Installed`
- Start with **Unit ID GI-1, then GI-2**, and so on — GI 275 is very particular about sequence
- **RESTART REQUIRED** after configuration

#### Step 2: Configure GFC 500 & Servos
- Navigate to `Interfaces > Autopilot > Settings`
- Scroll to bottom and select **"Copy Config from GI 275 to GFC 500"**

#### Step 3: Load Software
- From the **Software Loading** page, select the **GFC 500 packages**
- Hit **"Update Package"** button at the bottom
- **DO NOT INTERRUPT** the software load for any LRU (GEA, GHA, GMC, GSA)

#### Step 4: Manifest Sync
- After all LRUs are updated, navigate to `SW/Config > Config Options > GFC 500 Manifest`
- **Manifest Sync does NOT load software** — it establishes communication between the GI and GFC
- Left column = GI 275 software versions, Right column = GFC 500 software versions
- Mismatches are highlighted in **yellow**

### Important Notes

| Issue | Detail |
|---|---|
| **GSA 28 ships with Software 4.30** | Will need updating |
| **GI 275 won't recognize GSA below 4.80** | Must update GSA first |
| **GI 275 won't auto-push software** | Unlike G3X Touch and G5 |

### Troubleshooting Yellow Question Marks

If you see a **Yellow Question Mark** instead of a **Green Check** after software loading:

1. Go back to Software Loading page and **reselect the GFC packages**
2. If it persists, **Manifest Sync again**
3. Still yellow? **Unplug any LRUs showing Green Check**, then reload the problematic ones individually
4. Repeat until all LRUs display **Green Check**

### Software Update Pitfall

> **Scenario:** Aircraft comes in with a properly functioning autopilot. You perform a software upgrade. Now it's failing PFT (Pre-Flight Test).

**Checklist:**
- What software version did you start at?
- Was the **GSA 28 SLEP** complied with?
- Did you **"Trust but Verify"** configurations?
- Did you **Sync Manifest AND Copy Config to GFC**?
- For older installs: Is the GI a **Mod 1**? Is **Mil-Spec wire** being used?

---

## Module 7: GI 275 / GFC 500 Troubleshooting

### Expansion Board Reset

If GI 275 is showing abnormal autopilot operation or incorrect default sensors:

- Perform an **"Expansion Board Reset"** via the maintenance menu
- This clears cached configuration and forces the GI to re-establish communication with GFC components

---

## Quick Reference Card

### Key Contacts
- **GSA SLEP RMA:** avionicsrma.americas@garmin.com
- **SLEP Inquiries:** GSAinquiries@Garmin.com
- **Experimental Support:** G3Xpert@garmin.com
- **GSA 28 Info:** www.Garmin.com/GSA28Info

### Key Document Numbers
- **Master Drawing List:** Current Rev 99
- **Cessna 210 K/L/M/N MSA:** 190-02291-13, Rev 16
- **GSA 28 SLEP SB:** SB 23024 (Certified), SB 23038 (Experimental)
- **SLEP Deadline:** May 4, 2028

### Software Loading Cheat Sheet
1. Configure GI 275 units (in order: GI-1, GI-2, etc.)
2. Restart
3. Configure GFC 500 autopilot settings
4. Copy Config from GI to GFC
5. Load software packages
6. **DO NOT INTERRUPT**
7. Sync Manifest
8. Verify all Green Checks
