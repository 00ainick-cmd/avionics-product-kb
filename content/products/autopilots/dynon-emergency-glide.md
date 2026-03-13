# Dynon Emergency Glide
**Manufacturer:** Dynon Avionics
**Price Range:** Included in Software 17.1 Update for SkyView HDX

Introduced in July 2024 via the Software 17.1 update for SkyView HDX, the "Emergency Glide" feature is a potentially life-saving automation tool designed to drastically reduce pilot workload during critical in-flight emergencies, particularly engine failures.

While Garmin has made headlines with their fully autonomous Autoland system, Dynon takes a different, highly pragmatic approach geared toward the experimental and light sport aircraft (LSA) markets: automated *assistance* to get the aircraft to a safe gliding position.

## How Emergency Glide Works

When a pilot experiences an emergency (such as engine loss) and activates Emergency Glide (typically via a dedicated panel button or on-screen prompt), the SkyView HDX system immediately assumes control of the aircraft's trajectory.

1.  **Pitch and Airspeed:** The autopilot immediately pitches the aircraft to maintain a pre-programmed, optimal best-glide airspeed (Vbg). This prevents a stall and maximizes the glide distance while the pilot assesses the situation.
2.  **Navigation:** The system calculates the aircraft's current altitude, glide ratio, winds aloft, and surrounding terrain to determine the nearest *reachable* airport.
3.  **Routing:** The autopilot then navigates the aircraft directly toward that calculated airport.
4.  **Communications:** The system automatically keys up the nearest airport's communication frequencies (CTAF or Tower) into the standby or active radio slots, allowing the pilot to declare an emergency quickly.
5.  **Arrival:** Upon reaching the airport, if the pilot hasn't taken manual control, the system establishes a banked holding orbit above the field, keeping the aircraft in a safe position until the pilot is ready to execute a dead-stick landing.

## Technician Talking Points

- **Configuration is King:** This feature relies entirely on correct airframe configuration during installation. The technician *must* correctly input the aircraft's specific Vbg (best glide speed) and baseline glide ratio into the SkyView setup menus. If these numbers are incorrect, the system will calculate reachable airports erroneously.
- **Hardware Requirements:** Emergency Glide requires a fully functional Dynon autopilot system (servos installed and calibrated) and a valid GPS position block.
- **It is Not Autoland:** A critical educational point for owners: Emergency Glide will *not* land the airplane. It simply manages the descent profile and navigates to the *vicinity* of an airport. The pilot must disconnect the autopilot and fly the final approach and touchdown manually.

## The Bottom Line

Dynon's Emergency Glide feature is a massive leap forward in safety for the experimental market. It offloads the most critical and stressful tasks (flying the airplane and finding a landing spot) during the first few seconds of an engine failure, giving the pilot precious time to run checklists and attempt a restart.
