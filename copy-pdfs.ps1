$src = "content\training\inbox"
$dst = "website\public\files\training\2026"

# Garmin Blue Room
Copy-Item "$src\Garmin Blue Room - EFIS System Design - AEA2026.pdf" "$dst\garmin-blue-room-efis-system-design.pdf"
Copy-Item "$src\Garmin Blue Room - EFIS Use Cases - AEA2026.pdf" "$dst\garmin-blue-room-efis-use-cases.pdf"
Copy-Item "$src\Garmin Blue Room - FAA Datacom for Your Federated Installation - AEA2026.pdf" "$dst\garmin-blue-room-faa-datacom-federated-installation.pdf"
Copy-Item "$src\Garmin Blue Room - FlyGarmin Administration - AEA2026.pdf" "$dst\garmin-blue-room-flygarmin-administration.pdf"

# Garmin Red Room
Copy-Item "$src\Garmin Red Room - EFIS Configuration - AEA2026.pdf" "$dst\garmin-red-room-efis-configuration.pdf"
Copy-Item "$src\Garmin Red Room - Federated EIS - AEA2026.pdf" "$dst\garmin-red-room-federated-eis.pdf"
Copy-Item "$src\Garmin Red Room - GDL 60 Configuration with Remote Aircraft Status - AEA2026.pdf" "$dst\garmin-red-room-gdl-60-configuration.pdf"
Copy-Item "$src\Garmin Red Room - GFC 500 Working with the Addendum - AEA2026.pdf" "$dst\garmin-red-room-gfc-500-addendum.pdf"
Copy-Item "$src\Garmin Red Room - GFC 600 - AEA2026.pdf" "$dst\garmin-red-room-gfc-600.pdf"
Copy-Item "$src\Garmin Red Room Upgrading G1000 Tech Fundamentals - AEA2026.pdf" "$dst\garmin-red-room-upgrading-g1000-tech-fundamentals.pdf"

# Regulatory
Copy-Item "$src\AEA - Back to Basics Classifying Alterations - AEA2026.pdf" "$dst\aea-classifying-alterations.pdf"
Copy-Item "$src\AEA - Regulatory Rise & Shine - Monday - AEA2026.pdf" "$dst\aea-regulatory-rise-and-shine.pdf"
Copy-Item "$src\AEA - Regulatory Rise & Shine International Regulatory Update - AEA2026.pdf" "$dst\aea-international-regulatory-update.pdf"
Copy-Item "$src\AEA - SMS Coordinator Training - AEA2026.pdf" "$dst\aea-sms-coordinator-training.pdf"

# Business
Copy-Item "$src\AEA - Streamline Your Business Through Quality Management - AEA2026.pdf" "$dst\aea-quality-management.pdf"
Copy-Item "$src\Power Aviation Strategies - Instagram for Aviation Businesses - AEA2026.pdf" "$dst\instagram-for-aviation-businesses.pdf"

# OEM Technical
Copy-Item "$src\ALTO Aviation - Troubleshooting CMS & IFE Networks - AEA2026.pdf" "$dst\alto-cms-ife-networks.pdf"
Copy-Item "$src\Applied Avionics - NEXSYS LYNK Integrated Signal Processor Capabilities and Use Cases - AEA2026.pdf" "$dst\applied-avionics-nexsys-lynk.pdf"
Copy-Item "$src\DMC - Avionics Wire Prep Master Class - AEA2026.pdf" "$dst\dmc-wire-prep-master-class.pdf"
Copy-Item "$src\DMC - EWIS Master Training - AEA2026.pdf" "$dst\dmc-ewis-master-training.pdf"

# Panel Planning
Copy-Item "$src\One Mile Up - Panel Planner Executive Level - AEA2026.pdf" "$dst\one-mile-up-panel-planner.pdf"

# VIAVI
Copy-Item "$src\VIAVI Solutions - AVX-10K Enhanced Comms - AEA2026.pdf" "$dst\viavi-avx-10k-enhanced-comms.pdf"
Copy-Item "$src\VIAVi Solutions - OSPREY GPS Simulator - AEA2026.pdf" "$dst\viavi-osprey-gps-simulator.pdf"

Write-Host "All 23 PDFs copied successfully."
