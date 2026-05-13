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
    slideshow?: string[];
}

export const products: Product[] = [
    {
        slug: 'data-logger',
        name: 'Data Logger',
        tagline: 'CLM-DL01: High-Performance Industrial Data Logger',
        description: 'The CLM-DL01 is a versatile, high-performance industrial data logger designed for real-time monitoring and edge computing. Built on a Raspberry Pi 5 core with secondary Arduino-based IO handling, it provides unparalleled processing power and interface flexibility for mission-critical environmental sensing.',
        features: [
            'Core Compute: Raspberry Pi 5 (Quad-core ARM Cortex-A76) + Arduino (ESP32 option)',
            'Sensor Interfaces: SDI-12 (Master), RS-485 (Modbus RTU), Analog (0-5V/4-20mA)',
            'Multi-Network Comms: 4G LTE, NB-IoT, LoRaWAN, Wi-Fi, GigE Ethernet',
            'Storage: 128 GB Onboard microSD + optional USB SSD expansion',
            'Power Management: DC 9-30V input with integrated solar charge controller',
            'Telemetry: MQTT over TLS, HTTPS/REST, SFTP, Modbus-RTU/TCP support',
            'Programmable Relays (NO/NC) for automated siren/control activation'
        ],
        technicalSpecs: {
            'Model No': 'CLM-DL01',
            'CPU': 'Raspberry Pi 5 (Cortex-A76)',
            'Storage': '128 GB microSD',
            'Interfaces': 'SDI-12, RS-485, Analog',
            'Power': 'DC 9-30V (Solar Ready)',
            'Comms': '4G LTE / LoRaWAN / GigE'
        },
        deviceType: 'Industrial Data Logger',
        image: '/models/image.png',
        model: '/models/Solar_Alarm_System_0630051501_texture.fbx',
        benefits: [
            'High-priority interrupt handling for real-time IO',
            'Galvanic isolation for superior sensor protection',
            'Deep sleep modes for extreme low-power operation',
            'Failsafe I/Os and integrated hardware watchdog'
        ],
        detailedSpecsTables: [
            {
                category: "Computing & Storage",
                specs: {
                    "Core Compute": "Raspberry Pi 5 (64-bit OS) + Arduino (watchdog)",
                    "Custom Electronics": "Custom PCB with galvanic isolation",
                    "Storage": "microSD 128 GB + USB SSD expansion support"
                }
            },
            {
                category: "Interfaces & Comms",
                specs: {
                    "Sensor Interfaces": "SDI-12, RS-485, 4-20mA, UART, I2C, SPI",
                    "Communications": "4G LTE (Primary) + NB-IoT / LoRaWAN / GigE",
                    "Telemetry Protocols": "MQTT over TLS, HTTPS/REST, SFTP, Modbus-RTU/TCP"
                }
            },
            {
                category: "Power & Control",
                specs: {
                    "Power Supply": "DC input 9-30 V; integrated solar controller",
                    "Power Management": "Low-power sleep & deep sleep control",
                    "Relays & Outputs": "Programmable relays (NO/NC) for remote control",
                    "Real-time IO": "High-priority interrupts, pulse counting"
                }
            }
        ]
    },

    {
        slug: 'doordrishti',
        name: 'Doordrishti',
        tagline: 'CLM-CVDR05: Dual-Mode Radar + Vision Monitoring',
        description: 'Doordrishti (CLM-CVDR05) is our flagship integrated system that provides true "Visual Ground Truth" through sensor fusion. It combines millimetre-accurate radar water level sensing, Doppler radar flow velocity tracking, and AI-enabled optical monitoring in a single, solar-powered autonomous unit.',
        features: [
            'Level 1: 61 GHz FMCW Radar for millimetre-accurate water level sensing (+/- 1cm accuracy)',
            'Level 2: 24 GHz Doppler Radar optimized for continuous surface flow velocity tracking',
            'Level 3: 1080p Optical Module providing environmental context and visual ground truth',
            'Level 4: Data Logger Core with ARM Cortex-M7 and 64GB onboard storage',
            'Level 5: Multi-Protocol Comms Hub supporting 4G LTE, LoRa, and VSAT Satellite',
            'Dual-Factor Authentication: Cross-verifying hydrodynamic physics with visual ground truth',
            'Power Architecture: Fully autonomous solar energy system with 10-day battery backup'
        ],
        technicalSpecs: {
            'Water Level Range': '0 – 30 metres',
            'Water Level Accuracy': '±1 mm',
            'Velocity Range': '0.02 – 20 m/s',
            'Velocity Accuracy': '±1-2% of measured value',
            'Camera': 'Full HD (1080p) AI-enabled',
            'Field of View': '100-120° horizontal',
            'Storage': '64 GB Internal (Expandable via USB/SSD)',
            'Communication': '4G LTE / LoRa / VSAT / MQTT',
            'Environmental': 'IP67 Weatherproof, Aluminum Body',
            'Operating Temp': '-20°C to +70°C'
        },
        overviewList: [
            'Millimetre-accurate water level sensing',
            'Continuous surface flow velocity tracking',
            'AI-enabled visual monitoring & ground truth',
            'On-device edge processing & data logging',
            'Multi-network failover capabilities'
        ],
        detailedSpecsTables: [
            {
                category: "Water Level Profile",
                specs: {
                    "Technology": "61 GHz FMCW Radar (Non-contact)",
                    "Range": "0 – 30 metres",
                    "Accuracy": "±1 mm",
                    "Resolution": "≤ 1 mm",
                    "Sampling": "Configurable up to 1 sample/sec"
                }
            },
            {
                category: "Surface Velocity Profile",
                specs: {
                    "Technology": "24 GHz Doppler Radar",
                    "Beam Aperture": "< 12° x 25°",
                    "Range": "0.02 – 20 m/s (up to 20m height)",
                    "Accuracy": "±1-2% of measured value",
                    "Resolution": "≤ 0.01 m/s"
                }
            },
            {
                category: "Optical & Processing",
                specs: {
                    "Camera Resolution": "1080p Full HD Industrial",
                    "Field of View": "100-120° horizontal wide-angle",
                    "Processing Power": "ARM Cortex-M7 embedded 64-bit unit",
                    "Data Vault": "64 GB onboard storage (USB/SSD support)"
                }
            }
        ],
        detailedDescriptions: [
            {
                title: "Visual Ground Truth via Optical Integration",
                paragraphs: [
                    "Technical Insight: This sensor fusion enables true dual-factor authentication. Automated hourly captures, event-triggered images, and live streaming allow control room operators to visually verify flow conditions, bank erosion, and debris blockages in real-time, eliminating reliance on unverified numerical spikes."
                ],
                listItems: [
                    "Automated hourly capture",
                    "Live streaming on demand",
                    "Event-triggered capture during rapid water level changes",
                    "Remote camera tilt adjustment for optimal monitoring"
                ]
            }
        ],
        image: '/images/oao7myog4yvvidtrday6.webp',
        model: '/models/Solar_Alarm_System_0630051501_texture.fbx',
        benefits: [
            'Eliminates reliance on unverified numerical spikes',
            'Visual verification of debris and bank erosion',
            'Uninterrupted operation during extreme weather',
            'Reduced maintenance via non-contact sensing'
        ],
        deviceType: 'Integrated Monitoring System',
        slideshow: [
            '/doordrishti/image.png',
            '/doordrishti/image copy.png',
            '/doordrishti/image copy 2.png',
            '/doordrishti/image copy 3.png'
        ]
    },
    {
        slug: 'rakshak',
        name: 'Rakshak',
        tagline: 'CLM-EWS-01: Community Early Warning System',
        description: 'Rakshak (CLM-EWS-01) is a specialized community-level flood and disaster early warning siren system. It serves as the critical final link in the safety chain, converting real-time sensor data into immediate, actionable public alerts through high-decibel sirens and voice messages.',
        features: [
            'Function: Community-level flood / disaster early warning siren system',
            'Activation Source: Remote wireless trigger from devices / Aagah™ EWS platform / manual trigger',
            'Alert Types: Multi-tone siren + programmable voice message playback',
            'Sound Output Level: 120–130 dB @ 1 m (effective reach up to 500 m radius)',
            'Coverage Range: Up to 50 km network coverage (via LoRa / LTE)',
            'Solar-powered operation for disaster resilience',
            'Low-latency response and remote manual activation'
        ],
        technicalSpecs: {
            'Model No': 'CLM-EWS-01',
            'Sound Output': '120–130 dB @ 1 m',
            'Effective Radius': 'Up to 500 m',
            'Network Coverage': 'Up to 50 km (LoRa/LTE)',
            'Alert Type': 'Multi-tone + Voice Playback',
            'Power': 'Solar + Heavy Duty Battery',
            'Enclosure': 'IP67 Ruggedized'
        },
        benefits: [
            'Immediate public warning system',
            'Works when phone networks are down',
            'Rugged design for disaster zones',
            'Customizable alert tones and voice messages'
        ],
        deviceType: 'Early Warning System',
        image: '/images/2-removebg-preview.png',
        model: '/models/Solar_Alarm_System_0630051501_texture.fbx'
    },
    {
        slug: 'tarang',
        name: 'Tarang',
        tagline: 'CLM-LR05: High-Precision Radar Level Sensor',
        description: 'Tarang (CLM-LR05) is a specialized radar-based level sensor designed for high-precision water level monitoring. Utilizing 61 GHz FMCW technology, it provides millimetre-level accuracy without physical contact, making it ideal for critical infrastructure monitoring in challenging environments.',
        features: [
            'Measuring Principle: 61 GHz FMCW Radar (W-Band) Non-contact',
            'Accuracy: ± 1 mm with 0.5 mm resolution',
            'Range: 0 – 50 m (customizable)',
            'Beam Angle: 8° Azimuth × 8° Elevation',
            'Sampling Frequency: 1 sps (default) / up to 10 sps configurable',
            'Ingress Protection: IP68 fully sealed polycarbonate enclosure',
            'Power Consumption: < 1.5 W active / 0.2 W standby',
            'Material: PVDF sensor housing for chemical and UV resistance'
        ],
        technicalSpecs: {
            'Model No': 'CLM-LR05',
            'Technology': '61 GHz FMCW Radar',
            'Range': '0 – 50 metres',
            'Accuracy': '±1 mm',
            'Resolution': '0.5 mm',
            'Power': '9 – 30 V DC (Solar compatible)',
            'Output': '4-20 mA / RS-485 / RS-232 / SDI-12 / LoRa / MQTT',
            'Operating Temp': '-25°C to +70°C'
        },
        detailedSpecsTables: [
            {
                category: "Radar Specification",
                specs: {
                    "Measuring Principle": "61 GHz FMCW Radar (W-Band) Non-contact",
                    "Range": "0 – 50 m (customizable)",
                    "Accuracy": "± 1 mm",
                    "Resolution": "0.5 mm",
                    "Beam Angle": "8° Azimuth × 8° Elevation",
                    "Sampling Frequency": "1 sps (default) / up to 10 sps configurable"
                }
            },
            {
                category: "Electrical & Enclosure",
                specs: {
                    "Output Signal": "4 – 20 mA / RS-485 / RS-232 / SDI-12 / LoRa / MQTT",
                    "Ingress Protection": "IP68 (fully sealed polycarbonate)",
                    "Operating Voltage": "9 – 30 V DC (solar compatible)",
                    "Power Consumption": "< 1.5 W active / 0.2 W standby",
                    "Material": "PVDF sensor housing"
                }
            },
            {
                category: "Integration",
                specs: {
                    "Temp Range": "-25 °C to +70 °C",
                    "Comms Interface": "LoRa / NB-IoT / Wi-Fi / GSM (optional)",
                    "Mounting": "Top-mount / bridge mount with adjustable bracket",
                    "Data Integration": "Direct sync with ClimMaTech Cloud & Digital Twin"
                }
            }
        ],
        benefits: [
            'Unaffected by water turbidity or debris',
            'Ideal for urban flood monitoring',
            'Minimal infrastructure required',
            'Cost-effective scalable solution'
        ],
        deviceType: 'Depth Sensor',
        image: '/images/mvl9v9vqlbrxux2dmm8c.webp',
        model: '/models/Solar_Alarm_System_0630051501_texture.fbx'
    },
    {
        slug: 'pravaah',
        name: 'Pravaah',
        tagline: 'CLM-LVR05: Radar Surface Velocity Sensor',
        description: 'Pravaah (CLM-LVR05) is an advanced radar surface velocity sensor designed for high-accuracy flow tracking. It utilizes 24 GHz Doppler Radar to monitor velocity from up to 40m away, featuring Edge-AI filtering for noise reduction and automatic self-calibration.',
        features: [
            'Measuring Principle: 24 GHz K-Band Doppler Radar (FMCW)',
            'Velocity Range: 0.02 – 20 m/s with ± 1 % accuracy',
            'Detection Distance: Up to 40 m above water surface',
            'Beam Angle: 12° Azimuth × 30° Elevation',
            'Special Features: Edge-AI filtering for noise reduction, auto self-calibration',
            'Ingress Protection: IP68 Waterproof & dust-proof housing',
            'Material: Aluminum body with PVDF antenna shield',
            'Output Signal: 4 – 20 mA, RS-485, RS-232, LoRa, MQTT'
        ],
        technicalSpecs: {
            'Model No': 'CLM-LVR05',
            'Technology': '24 GHz Doppler Radar',
            'Velocity Range': '0.02 – 20 m/s',
            'Accuracy': '±1 % of measured value',
            'Resolution': '0.01 m/s',
            'Power': '9 – 30 V DC (Solar compatible)',
            'Output': '4-20 mA / RS-485 / LoRa / MQTT',
            'Digital Output': 'Open Collector (50 V / 200 mA)'
        },
        detailedSpecsTables: [
            {
                category: "Velocity Specification",
                specs: {
                    "Measuring Principle": "24 GHz K-Band Doppler Radar (FMCW)",
                    "Detection Distance": "Up to 40 m above surface",
                    "Velocity Range": "0.02 – 20 m/s",
                    "Resolution": "0.01 m/s",
                    "Accuracy": "± 1 % of measured value",
                    "Beam Angle": "12° Azimuth × 30° Elevation"
                }
            },
            {
                category: "System & Integration",
                specs: {
                    "Output Signal": "4 – 20 mA, RS-485, RS-232, LoRa, MQTT",
                    "Ingress Protection": "IP68 (Waterproof & dust-proof)",
                    "Operating Voltage": "9 – 30 V DC (solar/battery compatible)",
                    "Material": "Aluminum body with PVDF antenna shield",
                    "Temp Range": "-30 °C to +70 °C",
                    "Data Integration": "Direct sync with ClimMaTech Dashboard"
                }
            }
        ],
        benefits: [
            'Essential for discharge volume calculation',
            'Helps in dam release planning',
            'Detects sudden surges in flow',
            'Edge-AI filtering for superior accuracy'
        ],
        deviceType: 'Flow Sensor',
        image: '/images/vamdzjwkr8kcj3u1x6lg.webp',
        model: '/models/Solar_Alarm_System_0630051501_texture.fbx'
    }
];
