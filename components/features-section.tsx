'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Activity, 
  CloudRain, 
  Bell, 
  Move3DIcon,
  Wrench, 
  Clock, 
  Shield,
  Zap,
  Globe
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function FeaturesSection() {
  const features = [
    {
      icon: <Activity className="h-12 w-12 text-blue-600" />,
      title: "Real-time Water Level Monitoring",
      description: "Continuous tracking of water levels with precision sensors that detect changes within millimeters. Advanced analytics identify potential flooding conditions before they become critical.",
      benefits: ["Millimeter precision", "24/7 monitoring", "Historical data analysis"],
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: <CloudRain className="h-12 w-12 text-purple-600" />,
      title: "AI-Powered Rainfall Prediction",
      description: "Machine learning algorithms analyze weather patterns, atmospheric conditions, and historical data to predict rainfall intensity and flooding probability up to 48 hours in advance.",
      benefits: ["48-hour forecasting", "Weather pattern analysis", "ML-driven insights"],
      color: "bg-blue-50 border-blue-200"
    },
    {
  icon: <Move3DIcon className="h-12 w-12 text-indigo-600" />,
  title: "3D Visualization with Digital Twins",
  description: "Real-time 3D model integration provides a virtual representation of water systems. Digital Twins enable advanced simulation, monitoring, and analysis for better decision-making.",
  benefits: ["Real-time 3D views", "Predictive simulation", "Enhanced situational awareness"],
  color: "bg-blue-50 border-blue-200"
}
,
    {
      icon: <Wrench className="h-12 w-12 text-green-600" />,
      title: "Easy Installation & Maintenance",
      description: "Plug-and-play installation with minimal infrastructure requirements. Self-diagnostic capabilities and remote monitoring reduce maintenance costs and ensure optimal performance.",
      benefits: ["Quick deployment", "Self-diagnostics", "Remote monitoring"],
      color: "bg-blue-50 border-blue-200"
    }
  ];

  const additionalFeatures = [
    { icon: <Clock className="h-6 w-6" />, text: "5-minute early warning system" },
    { icon: <Shield className="h-6 w-6" />, text: "Military-grade security protocols" },
    { icon: <Zap className="h-6 w-6" />, text: "Solar-powered with 30-day backup" },
    { icon: <Globe className="h-6 w-6" />, text: "Global deployment capability" }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-sans text-gray-900 mb-4">
            Advanced <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Features</span> for Complete Protection
          </h2>
          
        </motion.div>

        {/* Main Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full bg-blue-50 border-blue-200 border-2 hover:shadow-xl transition-all duration-300`}>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0"
                    >
                      {feature.icon}
                    </motion.div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl  font-sans text-gray-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {feature.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <Badge 
                            key={benefitIndex} 
                            variant="secondary"
                            className="text-xs bg-white/70 text-gray-700"
                          >
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Features */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Additional Capabilities
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="text-blue-600">{feature.icon}</div>
                <span className="text-gray-700 font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

        {/* Technical Specifications */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Technical Excellence</h3>
            <p className="opacity-90">Industry-leading specifications for maximum reliability</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">±5mm</div>
              <p className="opacity-90">Sensor Accuracy</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">5 minutes</div>
              <p className="opacity-90">Response Time</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">99.99%</div>
              <p className="opacity-90">System Uptime</p>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}