'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Waves, Thermometer, Wind, Gauge, Zap, Wifi,Droplets,CloudRain,Droplet } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SensorsSection() {
  const sensors = [
  {
    icon: <Waves className="h-8 w-8 text-blue-600" />,
    name: "Water Level Sensor",
    description: "Ultrasonic sensors measure water depth with millimeter precision, continuously monitoring river levels beneath bridges.",
    image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=400",
    specs: "Range: 0–20m, Accuracy: ±1mm"
  },
  {
    icon: <Gauge className="h-8 w-8 text-green-600" />,
    name: "Flow Rate Sensor",
    description: "Advanced flow meters detect water velocity and volume changes to predict flood conditions in real-time.",
    image: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400",
    specs: "Range: 0–10 m/s, Response: <1s"
  },
  {
    icon: <Thermometer className="h-8 w-8 text-red-600" />,
    name: "Temperature Sensor",
    description: "Multi-point temperature monitoring for water and ambient conditions, crucial for monsoon prediction algorithms.",
    image: "https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=400",
    specs: "Range: -40°C to +85°C, Accuracy: ±0.1°C"
  },
  {
    icon: <Droplet className="h-8 w-8 text-purple-600" />,
    name: "Rainfall Sensor",
    description: "Tipping bucket rain gauges log real-time precipitation, helping forecast potential flash floods.",
    image: "https://images.pexels.com/photos/459451/pexels-photo-459451.jpeg?auto=compress&cs=tinysrgb&w=400",
    specs: "Resolution: 0.2mm per tip, Response: Instant"
  },
  {
    icon: <CloudRain className="h-8 w-8 text-indigo-600" />,
    name: "Humidity & Pressure Sensor",
    description: "Combined humidity and barometric pressure readings feed into predictive models for storm warnings.",
    image: "https://images.pexels.com/photos/158163/clouds-cloudporn-weather-lookup-158163.jpeg?auto=compress&cs=tinysrgb&w=400",
    specs: "Pressure: 300–1100 hPa, Humidity: 0–100%"
  },
  {
    icon: <Droplets className="h-8 w-8 text-teal-600" />,
    name: "Soil Moisture Sensor",
    description: "Detects ground saturation levels to assess risk of runoff and landslides during heavy rain.",
    image: "https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=400",
    specs: "Output: Analog/Capacitive, Range: Dry–Wet Soil"
  }
];


  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Paired with Advanced Accessories for Enhanced Functionality
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive sensor suite provides complete environmental monitoring 
            for accurate flood prediction and early warning systems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sensors.map((sensor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={sensor.image}
                      alt={sensor.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm rounded-full p-2">
                      {sensor.icon}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {sensor.name}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {sensor.description}
                    </p>
                    <div className="bg-muted/50 rounded-lg p-3">
                      <p className="text-sm font-medium text-foreground">
                        Specifications:
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {sensor.specs}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Technical Excellence */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Technical Excellence</h3>
            <p className="opacity-90">Industry-leading specifications for maximum reliability</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">±1mm</div>
              <p className="opacity-90">Sensor Accuracy</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">0.1s</div>
              <p className="opacity-90">Response Time</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">99.99%</div>
              <p className="opacity-90">System Uptime</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">30 Days</div>
              <p className="opacity-90">Battery Backup</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}