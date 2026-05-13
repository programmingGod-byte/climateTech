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
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

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
    },
    {
      icon: <Wrench className="h-12 w-12 text-green-600" />,
      title: "Easy Installation & Maintenance",
      description: "Plug-and-play installation with minimal infrastructure requirements. Self-diagnostic capabilities and remote monitoring reduce maintenance costs and ensure optimal performance.",
      benefits: ["Quick deployment", "Self-diagnostics", "Remote monitoring"],
      color: "bg-blue-50 border-blue-200"
    }
  ];

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="features" ref={sectionRef} className="py-20 relative overflow-hidden">
      <motion.div 
        style={{ 
          y,
          backgroundImage: "url('/website/featuresimages.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} 
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[4px] z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-sans text-white mb-4">
            Advanced <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Features</span> for Complete Protection
          </h2>
        </motion.div>

        {/* Main Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full bg-white/10 backdrop-blur-sm border-white/20 border-2 hover:shadow-xl transition-all duration-300`}>
                <CardContent className="p-8 text-white">
                  <div className="flex items-start space-x-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0"
                    >
                      {feature.icon}
                    </motion.div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-sans text-white mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-white/80 mb-4 font-sans leading-relaxed">
                        {feature.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <Badge 
                            key={benefitIndex} 
                            variant="secondary"
                            className="text-xs bg-white/20 font-sans text-white border-white/10"
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
      </div>
    </section>
  );
}