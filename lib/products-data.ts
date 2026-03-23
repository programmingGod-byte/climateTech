export interface Product {
    slug: string;
    name: string;
    tagline: string;
    description: string;
    features: string[];
    technicalSpecs: {
        [key: string]: string;
    };
    image: string;
    model: string;
    benefits: string[];
    deviceType: string;
    // New fields specifically for CLM-CVDR05
    overviewList?: string[];
    uniqueCapabilitiesList?: string[];
    applicationsList?: string[];
    downloadsSections?: { name: string, url: string }[];
    faqSections?: { q: string, a: string }[];
    detailedSpecsTables?: { category: string, specs: Record<string, string> }[];
    detailedDescriptions?: { title: string, paragraphs: string[], listItems?: string[] }[];
}

export const products: Product[] = [
    {
        slug: 'clm-cvdr05',
        name: 'CLM-CVDR05',
        tagline: 'Radar + Vision Based River Monitoring System',
        description: 'Integrated system for non-contact radar-based monitoring with integrated vision and real-time data systems for critical infrastructure and disaster management.',
        features: [
            '61 GHz radar level sensor',
            '24 GHz velocity sensor',
            'Integrated camera monitoring',
            'Built-in data logger',
            'WiFi + Bluetooth',
            'Multi-network (4G / LoRa / NB-IoT)',
            'Solar powered (15-day backup)',
            'IMU-based calibration'
        ],
        overviewList: [
            'Water level monitoring (radar)',
            'Surface velocity measurement (radar)',
            'Visual monitoring (camera)',
            'On-device data logging',
            'Remote telemetry'
        ],
        uniqueCapabilitiesList: [
            'Radar + camera in single unit',
            'No external data logger required',
            'Real-time visual monitoring',
            'Remote device access',
            'Multi-network failover'
        ],
        applicationsList: [
            'Flood monitoring',
            'River discharge measurement',
            'Dam monitoring',
            'Early warning systems'
        ],
        detailedSpecsTables: [
            {
                category: "Radar specs",
                specs: {
                    "Measurement Principle": "Non-contact radar",
                    "Operating Frequency": "61 GHz FMCW radar",
                    "Measurement Range": "Minimum 0–30 meters",
                    "Accuracy": "±1 mm or better",
                    "Resolution": "≤ 1 mm",
                    "Sampling Frequency": "Configurable up to 1 sample per second",
                    "Mounting": "Bridge / pole / structure mount",
                    "Output Interfaces": "RS-485 / MODBUS / digital interface"
                }
            },
            {
                category: "Velocity specs",
                specs: {
                    "Measurement Principle": "Doppler radar",
                    "Operating Frequency": "24 GHz",
                    "Beam Aperture": "less than 12°x25°",
                    "Velocity Range": "0.02 – 20 m/s",
                    "Accuracy": "±1–2 % of measured value",
                    "Resolution": "≤ 0.01 m/s",
                    "Installation Height": "Up to 20 meters above water surface",
                    "Signal Quality": "Should provide signal quality information"
                }
            },
            {
                category: "Camera specs",
                specs: {
                    "Camera Type": "Industrial monitoring camera",
                    "Resolution": "Minimum Full HD (1080p)",
                    "Lens": "Adjustable / wide-angle lens",
                    "Field of View": "Approx. 100–120° horizontal",
                    "Image Capture": "Automatic image capture at predefined interval (minimum 1 image per hour)",
                    "Housing": "Outdoor weatherproof enclosure integrated with radar unit"
                }
            },
            {
                category: "Data logger",
                specs: {
                    "Processor": "ARM Cortex-M7 core Embedded 64-bit processor based computing unit",
                    "Storage": "Minimum 64 GB onboard storage",
                    "External Storage": "Provision for external storage expansion (USB / SSD)",
                    "Data Backup": "Local buffering in case of network outage",
                    "Sensor Interfaces": "RS-485 / SDI-12 / analog / digital inputs",
                    "Telemetry Protocols": "MQTT / HTTPS / MODBUS",
                    "Time Synchronization": "GPS / NTP support",
                    "Relay Outputs": "Programmable relay outputs for external device control"
                }
            },
            {
                category: "Communication",
                specs: {
                    "Cellular": "4G LTE / GSM; Auto-switch between available networks",
                    "LPWAN": "LoRa / NB-IoT",
                    "Local Connectivity": "Wi-Fi",
                    "Device Configuration": "Bluetooth",
                    "Wired Interface": "RS-485 / Ethernet",
                    "Satellite (Optional)": "Modular integration of VSAT or equivalent"
                }
            },
            {
                category: "Power",
                specs: {
                    "Solar Panel": "Minimum 40–80 W",
                    "Battery": "Lithium Iron Phosphate (LiFePO4)",
                    "Autonomy": "Minimum 15 days backup without solar charging",
                    "Voltage": "12 V DC system",
                    "Power Management": "Intelligent charge controller with low power operation"
                }
            },
            {
                category: "Environmental",
                specs: {
                    "Enclosure Rating": "Minimum IP67",
                    "Operating Temperature": "-25 °C to +70 °C",
                    "Housing Material": "Corrosion-resistant industrial grade material (marine-grade aluminum alloy, anodized aluminum, or UV-stabilized polycarbonate)",
                    "Structural Design": "Suitable for high humidity, heavy rainfall, and cold weather conditions",
                    "Mounting": "Bridge mount / pole mount / riverbank installation"
                }
            }
        ],
        detailedDescriptions: [
            {
                title: "3. Radar Water Level Monitoring",
                paragraphs: [
                    "The water level monitoring system shall meet the following minimum requirements:",
                    "The radar sensor shall provide continuous measurement of river water level without direct contact with water."
                ],
                listItems: [
                    "Measurement Principle: Non-contact radar",
                    "Operating Frequency: Approximately 61 GHz FMCW radar",
                    "Measurement Range: Minimum 0–30 meters",
                    "Accuracy: ±1 mm or better",
                    "Resolution: ≤ 1 mm",
                    "Sampling Frequency: Configurable up to 1 sample per second",
                    "Mounting: Bridge / pole / structure mount",
                    "Output Interfaces: RS-485 / MODBUS / digital interface"
                ]
            },
            {
                title: "4. Surface Flow Velocity Monitoring",
                paragraphs: [
                    "The system shall support radar-based surface flow velocity measurement.",
                    "The velocity sensor shall operate in non-contact mode and shall be capable of operating reliably during turbulent flow conditions."
                ],
                listItems: [
                    "Measurement Principle: Doppler radar",
                    "Operating Frequency: 24 GHz",
                    "Beam Aperture should be less than 12°x25°",
                    "Velocity Range: 0.02 – 20 m/s",
                    "Accuracy: ±1–2 % of measured value",
                    "Resolution: ≤ 0.01 m/s",
                    "Installation Height: Up to 20 meters above water surface",
                    "Should provide signal quality information"
                ]
            },
            {
                title: "5. Optical River Monitoring Module",
                paragraphs: [
                    "Each monitoring station shall include an integrated optical monitoring camera module within the same sensing unit as the radar sensor for continuous visual observation of river conditions.",
                    "The optical monitoring module shall be integrated with the radar monitoring unit as a single device assembly. Additionally, the system should support vision-based river condition assessment such as surface flow pattern observation and discharge estimation support where applicable."
                ],
                listItems: [
                    "Camera Type: Industrial monitoring camera",
                    "Resolution: Minimum Full HD (1080p)",
                    "Lens: Adjustable / wide-angle lens",
                    "Field of View: Approx. 100–120° horizontal",
                    "Image Capture: Automatic image capture at predefined interval (minimum 1 image per hour)",
                    "Housing: Outdoor weatherproof enclosure integrated with radar unit",
                    "Real-time viewing of river conditions through remote access",
                    "Live streaming capability when required by the control center",
                    "Remote camera tilt adjustment for improved monitoring of river cross-section",
                    "Periodic automated image capture and transmission to central server",
                    "Visual documentation of river flow conditions, debris movement, and flood events"
                ]
            },
            {
                title: "6. Integrated Data Logger",
                paragraphs: [
                    "Each monitoring station shall include a built-in industrial data logging unit integrated within the monitoring device.",
                    "The system shall support local data storage on the device itself, allowing operational continuity even when communication links are temporarily unavailable."
                ],
                listItems: [
                    "Processor: ARM Cortex-M7 core Embedded 64-bit processor based computing unit",
                    "Storage: Minimum 64 GB onboard storage",
                    "External Storage: Provision for external storage expansion (USB / SSD)",
                    "Data Backup: Local buffering in case of network outage",
                    "Sensor Interfaces: RS-485 / SDI-12 / analog / digital inputs",
                    "Telemetry Protocols: MQTT / HTTPS / MODBUS",
                    "Time Synchronization: GPS / NTP support",
                    "Relay Outputs: Programmable relay outputs for external device control"
                ]
            },
            {
                title: "7. Communication and Telemetry",
                paragraphs: [
                    "The monitoring station shall support multi-mode communication for reliable data transmission."
                ],
                listItems: [
                    "Cellular: 4G LTE / GSM; The device should be able to connect to any of the available networks. If one network is down, it should be able to switch to other network.",
                    "LPWAN: LoRa / NB-IoT",
                    "Local Connectivity: Wi-Fi",
                    "Device Configuration: Bluetooth",
                    "Wired Interface: RS-485 / Ethernet",
                    "Encrypted telemetry transmission",
                    "Automated data synchronization with central server",
                    "Fail-safe data buffering during communication interruptions"
                ]
            },
            {
                title: "8. Satellite Communication (Optional)",
                paragraphs: [
                    "The system shall support optional satellite communication capability (VSAT or equivalent) for deployments in areas where cellular connectivity is not available.",
                    "The monitoring station shall support modular integration of satellite communication equipment when required."
                ]
            },
            {
                title: "9. Power System",
                paragraphs: [
                    "Each monitoring station shall operate using a solar powered autonomous system suitable for remote field deployments.",
                    "The system shall support continuous long-term unattended operation in remote locations."
                ],
                listItems: [
                    "Solar Panel: Minimum 40–80 W",
                    "Battery: Lithium Iron Phosphate (LiFePO4)",
                    "Autonomy: Minimum 15 days backup without solar charging",
                    "Voltage: 12 V DC system",
                    "Power Management: Intelligent charge controller with low power operation"
                ]
            },
            {
                title: "10. Environmental Protection and Enclosure",
                paragraphs: [
                    "The monitoring system shall be designed for harsh outdoor river environments and cold weather conditions.",
                    "The enclosure material shall be suitable for long-term deployment in cold and mountainous environmental conditions."
                ],
                listItems: [
                    "Enclosure Rating: Minimum IP67",
                    "Operating Temperature: −25 °C to +70 °C",
                    "Housing Material: Corrosion-resistant industrial grade material such as marine-grade aluminum alloy, anodized aluminum, or UV-stabilized polycarbonate",
                    "Structural Design: Suitable for high humidity, heavy rainfall, and cold weather conditions",
                    "Mounting: Bridge mount / pole mount / riverbank installation"
                ]
            },
            {
                title: "11. Additional System Features",
                paragraphs: [
                    "The monitoring system shall support the following operational capabilities:"
                ],
                listItems: [
                    "Integrated radar and optical monitoring unit",
                    "Built-in data logger within the device",
                    "Wi-Fi and Bluetooth connectivity for local device access",
                    "IMU-based tilt sensing for installation alignment and automatic calibration of vibration rejection",
                    "Encrypted telemetry communication",
                    "Automatic hourly image capture and upload on GSM network",
                    "Optional event-triggered image capture during rapid water level change"
                ]
            }
        ],
        downloadsSections: [
            { name: 'Brochure PDF', url: '/downloads/brochure.pdf' },
            { name: 'Technical spec sheet', url: '/downloads/specs.pdf' }
        ],
        faqSections: [
            {
                q: 'What is radar water level sensor?',
                a: 'A non-contact sensor that measures water levels continuously using high-frequency radar without physical contact with the water.'
            },
            {
                q: 'How does non-contact monitoring work?',
                a: 'It uses radar and Doppler technology to determine water level and surface flow velocity remotely from above the surface, functioning safely during heavy floods and turbulent flows.'
            },
            {
                q: 'Can system work in remote areas?',
                a: 'Yes. The system utilizes solar power with a 15-day backup and supports multi-network connectivity including optional Satellite, specifically designed for unattended operation.'
            },
            {
                q: 'How is data transmitted?',
                a: 'Data is transmitted securely through a fail-safe multi-network mode supporting 4G LTE/GSM, LoRa/NB-IoT, or local Wi-Fi, buffering data locally if the network goes down.'
            }
        ],
        technicalSpecs: {
            'Measurement Range': '0-30m',
            'Power': 'Solar 40-80W',
            'Enclosure': 'IP67',
        },
        image: '/images/3.webp',
        model: '/models/Solar_Alarm_System_0630051501_texture.fbx',
        benefits: [
            'Real-time numerical and visual validation',
            'Unattended non-contact reliability',
        ],
        deviceType: 'Integrated System'
    },
    {
        slug: 'drishti',
        name: 'Drishti',
        tagline: 'Advanced Visual & Radar Flood Monitoring',
        description: 'Drishti is Climmatech’s flagship flood monitoring solution. It is a fully integrated, solar-powered unit that combines image processing with radar-based measurements to provide the most accurate flood data possible. Designed for critical river stretches, it acts as the eyes of the flood management system.',
        features: [
            'Visual Image Processing for validation',
            'Radar-based surface velocity measurement',
            'Rain gauge inputs for localized weather data',
            'Solar-powered for autonomous operation',
            'Cloud connectivity for real-time alerts'
        ],
        technicalSpecs: {
            'Range': 'Up to 15 meters width',
            'Power Source': 'Solar Panel + Battery Backup',
            'Sensors': 'Radar, Camera, Rain Gauge',
            'Connectivity': '4G/LTE, LoRaWAN',
            'Operating Temp': '-10°C to 60°C'
        },
        image: '/images/3.webp',
        model: '/models/Solar_Alarm_System_0630051501_texture.fbx',
        benefits: [
            'Provides visual confirmation of flood levels',
            'Reduces false alarms through dual-factor authentication',
            'Low maintenance with self-sustaining power',
            'Rapid deployment in remote areas'
        ],
        deviceType: 'Monitoring Sensor'
    },
    {
        slug: 'doordrishti',
        name: 'Doordrishti',
        tagline: 'Long-Range Comprehensive Monitoring',
        description: 'Doordrishti extends the capabilities of standard monitoring to wider areas. It is engineered for major river systems where long-range detection is crucial. With its powerful radar and high-resolution camera, it captures data from a distance, ensuring equipment safety even during high floods.',
        features: [
            'Long-range radar measurement',
            'High-definition visual monitoring',
            'Integrated rain gauge',
            '2-day battery backup',
            'Robust weather-proof enclosure'
        ],
        technicalSpecs: {
            'Range': 'Wide-area monitoring (>20m)',
            'Battery Life': '48 hours backup',
            'Sensors': 'Long-range Radar, HD Camera',
            'Data Interval': 'Configurable (Standard 15 mins)',
            'IP Rating': 'IP67'
        },
        image: '/images/4.webp',
        model: '/models/Solar_Alarm_System_0630051501_texture.fbx',
        benefits: [
            'Covers large river cross-sections',
            'Ensures continuous operation in storms',
            'Provides rich data for hydrological modeling',
            'Remote firmware updates'
        ],
        deviceType: 'Long-Range Sensor'
    },
    {
        slug: 'rakshak',
        name: 'Rakshak',
        tagline: 'The Guardian of Communities',
        description: 'Rakshak is designed to save lives. It is a dedicated early warning system that bridges the gap between data and action. When flood levels breach critical thresholds, Rakshak activates high-decibel sirens to alert downstream communities immediately.',
        features: [
            'High-decibel alert sirens',
            'Ultra-long-range communication',
            'Low-latency activation',
            'Solar-powered operation',
            'remote manual activation'
        ],
        technicalSpecs: {
            'Siren Range': 'Up to 2 km radius',
            'Response Time': '< 30 seconds',
            'Power': 'Solar + Heavy Duty Battery',
            'Communication': 'Satellite / LoRa / GSM',
            'Height': 'Mountable on 10m poles'
        },
        image: '/images/2.webp',
        model: '/models/Solar_Alarm_System_0630051501_texture.fbx',
        benefits: [
            'Immediate public warning system',
            'Works when phone networks are down',
            'Rugged design for disaster zones',
            'Customizable alert tones'
        ],
        deviceType: 'Early Warning System'
    },
    {
        slug: 'tarang',
        name: 'Tarang',
        tagline: 'Precision Depth Sensing',
        description: 'Tarang is a specialized sensor focused on one thing: accurate water depth measurement. Compact and efficient, it uses advanced radar technology to monitor water levels in canals, small rivers, and urban drainage systems without physical contact with the water.',
        features: [
            'Non-contact radar depth measurement',
            'Compact form factor',
            'High precision (mm level accuracy)',
            'Easy installation on bridges/poles',
            'Solar powered'
        ],
        technicalSpecs: {
            'Measurement Range': '0.5m to 20m',
            'Accuracy': '±3mm',
            'Frequency': '60GHz Radar',
            'Power': 'Compact Solar Panel',
            'Weight': '< 2kg'
        },
        image: '/images/1.webp',
        model: '/models/Solar_Alarm_System_0630051501_texture.fbx',
        benefits: [
            'Unaffected by water turbidity or debris',
            'Ideal for urban flood monitoring',
            'Minimal infrastructure required',
            'Cost-effective scalable solution'
        ],
        deviceType: 'Depth Sensor'
    },
    {
        slug: 'pravaah',
        name: 'Pravaah',
        tagline: 'Flow & Velocity Analytics',
        description: 'Pravaah goes beyond just depth to understand the dynamics of the river. It measures surface velocity and depth simultaneously to calculate discharge rates. This data is vital for water resource management and predicting downstream impact.',
        features: [
            'Surface velocity calculation',
            'Depth measurement integration',
            'Real-time data transmission',
            'Wide-area coverage',
            'Analytics-ready data stream'
        ],
        technicalSpecs: {
            'Velocity Range': '0.1 to 15 m/s',
            'Depth Range': 'up to 30m',
            'Technology': 'Doppler Radar',
            'Power': 'Solar + Li-ion',
            'Interface': 'RS485 / Modbus'
        },
        image: '/images/5.webp',
        model: '/models/Solar_Alarm_System_0630051501_texture.fbx',
        benefits: [
            'Essential for discharge volume calculation',
            'Helps in dam release planning',
            'Detects sudden surges in flow',
            'Robust against environmental noise'
        ],
        deviceType: 'Flow Sensor'
    }
];
