'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Waves, Brain, Smartphone, Cpu, Wifi, Battery } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  const features = [
    {
      icon: <Waves className="h-8 w-8 text-blue-600" />,
      title: "Flood Water Level Sensors",
      description: "Ultra-precise sensors designed for Indian flood conditions, monitoring water levels with millimeter accuracy"
    },
    {
      icon: <Brain className="h-8 w-8 text-purple-600" />,
      title: "AI Flood Prediction",
      description: "Machine learning algorithms trained on Indian weather patterns to predict flooding 5+ minutes in advance"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-green-600" />,
      title: "Multi-language Alerts",
      description: "Instant SMS, app, and voice alerts in Hindi, English, and regional languages to authorities and residents"
    },
    {
      icon: <Wifi className="h-8 w-8 text-indigo-600" />,
      title: "4G/5G Connectivity",
      description: "Seamless integration with Indian telecom infrastructure via Jio, Airtel, and BSNL networks"
    },
    
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How ClimateTech.life Works for Flood Prevention
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our comprehensive flood prevention system is specifically designed for Indian flood conditions, 
            urban flooding challenges, and infrastructure conditions across cities and rural areas.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800">
                <CardContent className="p-6">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}