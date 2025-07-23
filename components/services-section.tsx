'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Waves, Droplets, Activity, Camera, MapPin, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import Drone from './drone';

// Animated Water Wave Component
const WaterWave = () => {
  return (
    <div className="relative w-full h-64 bg-gradient-to-b from-blue-400 to-blue-600 rounded-xl overflow-hidden">
      {/* Animated waves */}
      <div className="absolute inset-0">
        <svg
          className="absolute bottom-0 w-full h-32"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,60 C300,120 600,0 900,60 C1050,90 1150,30 1200,60 L1200,120 L0,120 Z"
            fill="rgba(59, 130, 246, 0.8)"
            animate={{
              d: [
                "M0,60 C300,120 600,0 900,60 C1050,90 1150,30 1200,60 L1200,120 L0,120 Z",
                "M0,80 C300,40 600,100 900,80 C1050,60 1150,100 1200,80 L1200,120 L0,120 Z",
                "M0,60 C300,120 600,0 900,60 C1050,90 1150,30 1200,60 L1200,120 L0,120 Z"
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.path
            d="M0,80 C300,40 600,100 900,80 C1050,60 1150,100 1200,80 L1200,120 L0,120 Z"
            fill="rgba(96, 165, 250, 0.6)"
            animate={{
              d: [
                "M0,80 C300,40 600,100 900,80 C1050,60 1150,100 1200,80 L1200,120 L0,120 Z",
                "M0,60 C300,120 600,0 900,60 C1050,90 1150,30 1200,60 L1200,120 L0,120 Z",
                "M0,80 C300,40 600,100 900,80 C1050,60 1150,100 1200,80 L1200,120 L0,120 Z"
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
        </svg>
      </div>
      
      {/* Floating sensors */}
      <motion.div
        className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Activity className="h-6 w-6 text-blue-600" />
      </motion.div>
      
      <motion.div
        className="absolute top-12 right-12 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <Droplets className="h-6 w-6 text-cyan-600" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <Waves className="h-6 w-6 text-blue-700" />
      </motion.div>
      
      {/* Water level indicator */}
      <div className="absolute right-4 top-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
        <div className="text-xs font-medium text-gray-700 mb-1">Water Level</div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-8 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="w-full bg-gradient-to-t from-red-500 via-yellow-500 to-green-500 rounded-full"
              initial={{ height: "30%" }}
              animate={{ height: ["30%", "70%", "30%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <div className="text-sm font-bold text-blue-600">2.4m</div>
        </div>
      </div>
    </div>
  );
};

// Animated Drone Component
const AnimatedDrone = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="relative w-full h-64 bg-gradient-to-br from-slate-100 to-blue-100 rounded-xl overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Sky background with clouds */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-4 left-8 w-16 h-8 bg-white/60 rounded-full"
          animate={{ x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-8 right-12 w-12 h-6 bg-white/40 rounded-full"
          animate={{ x: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute top-12 left-1/3 w-20 h-10 bg-white/50 rounded-full"
          animate={{ x: [0, 25, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>
      
      {/* Drone */}
    <Drone/>


      {/* Flight path indicator */}
      <motion.div
        className="absolute bottom-4 left-4 right-4 h-1 bg-white/30 rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
      
      {/* Altitude indicator */}
      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-2 shadow-lg">
        <div className="text-xs font-medium text-gray-700 mb-1">Altitude</div>
        <div className="flex items-center space-x-1">
          <Zap className="h-3 w-3 text-blue-600" />
          <span className="text-sm font-bold text-blue-600">120m</span>
        </div>
      </div>
      
      {/* Survey area indicator */}
      <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-2 shadow-lg">
        <div className="text-xs font-medium text-gray-700 mb-1">Coverage</div>
        <div className="flex items-center space-x-1">
          <MapPin className="h-3 w-3 text-green-600" />
          <span className="text-sm font-bold text-green-600">2.5km²</span>
        </div>
      </div>
    </div>
  );
};

export default function ServicesSection() {
  const services = [
    {
      title: "Real-Time Flood Monitoring",
      description: "Deploy IoT sensors across rivers and urban areas to track rainfall, water levels, and overflow risk. Our advanced monitoring system provides 24/7 surveillance with instant alerts when flood conditions are detected.",
      features: [
        "Millimeter-precision water level sensors",
        "Real-time rainfall and flow monitoring", 
        "AI-powered flood prediction algorithms",
        "Multi-channel emergency alert system"
      ],
      buttonText: "Learn More",
      buttonAction: () => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' }),
      visual: <WaterWave />,
      gradient: "from-slate-50 to-slate-50",
      iconColor: "text-blue-600"
    },
    {
      title: "Drone Survey Services",
      description: "High-resolution aerial surveys for flood zones, landslides, urban drainage, and emergency response. Our drone technology provides comprehensive disaster management insights from above.",
      features: [
        "4K aerial photography and videography",
        "LiDAR mapping for terrain analysis",
        "Thermal imaging for water detection",
        "Real-time emergency response support"
      ],
      buttonText: "Contact Us for a Quotation",
      buttonAction: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }),
      visual: <AnimatedDrone />,
      gradient: "from-slate-50 to-slate-50",
      iconColor: "text-slate-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-4xl  text-gray-900 mb-4 font-sans">
            Comprehensive Flood Management Solutions
          </h2>
          
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full bg-gradient-to-br  ${service.gradient} border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group`}>
                <CardContent className="p-8">
                  {/* Visual Component */}
                  <motion.div
                    className="mb-8"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.visual}
                  </motion.div>

                  {/* Content */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font text-gray-900 font-sans transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-700 leading-relaxed font-sans">
                      {service.description}
                    </p>
                    
                    {/* Features List */}
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center space-x-3"
                        >
                          
                          <div className={`w-2 h-2 rounded-full ${service.iconColor.replace('text-', 'bg-')} flex-shrink-0`} />
                          <span className="text-gray-700 font-sans text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* CTA Button */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="pt-4"
                    >
                      <Button
                        onClick={service.buttonAction}
                        className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg group"
                      >
                        {service.buttonText}
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-4">
            Ready to Protect Your Community?
          </h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Combine our flood monitoring and drone survey services for complete disaster management coverage. 
            Get a customized solution designed for your specific needs and location.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Custom Quote
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Technology
            </motion.button>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}