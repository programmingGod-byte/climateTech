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
}

export const products: Product[] = [
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
