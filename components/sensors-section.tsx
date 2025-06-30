'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Waves, Thermometer, Wind, Gauge, Zap, Wifi } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SensorsSection() {
  const sensors = [
    {
      icon: <Waves className="h-8 w-8 text-blue-600" />,
      name: "Water Level Sensor",
      description: "Ultrasonic sensors measure water depth with millimeter precision, continuously monitoring river levels beneath bridges.",
      image: "/images/C8j7fVG-.jpeg",
      specs: "Range: 0-20m, Accuracy: ±1mm"
    },
    {
      icon: <Gauge className="h-8 w-8 text-green-600" />,
      name: "Flow Rate Sensor",
      description: "Advanced flow meters detect water velocity and volume changes to predict flood conditions in real-time.",
      image: "/images/autez5-o.jpeg",
      specs: "Range: 0-10 m/s, Response: <1s"
    },
    {
      icon: <Thermometer className="h-8 w-8 text-red-600" />,
      name: "Temperature Sensor",
      description: "Multi-point temperature monitoring for water and ambient conditions, crucial for monsoon prediction algorithms.",
      image: "/images/7Y7T6xoa.jpeg",
      specs: "Range: -40°C to +85°C, Accuracy: ±0.1°C"
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

      </div>
    </section>
  );
}