'use client';

import { motion } from 'framer-motion';
import { Shield, Zap, Wifi, Brain, Activity, Cloud } from 'lucide-react';

export default function ProductsSection() {
  const products = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "FloodGuard Pro",
      description: "Our flagship flood monitoring system with AI-powered prediction capabilities. Features real-time water level monitoring, weather integration, and instant alert systems designed specifically for Indian monsoon conditions.",
      features: ["AI Flood Prediction", "Real-time Monitoring", "Multi-channel Alerts", "Weather Integration"],
      image: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <Activity className="h-8 w-8 text-green-600" />,
      title: "SensorNet Advanced",
      description: "Comprehensive sensor network solution with ultrasonic water level sensors, flow meters, and environmental monitoring. Built to withstand harsh Indian weather conditions with IP68 rating.",
      features: ["Ultrasonic Sensors", "Flow Monitoring", "Environmental Data", "Weather Resistant"],
      image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <Brain className="h-8 w-8 text-purple-600" />,
      title: "AI Analytics Engine",
      description: "Machine learning platform trained on Indian weather patterns and flood data. Provides accurate flood predictions up to 48 hours in advance with continuous learning capabilities.",
      features: ["Machine Learning", "Pattern Recognition", "Predictive Analytics", "Continuous Learning"],
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <Wifi className="h-8 w-8 text-indigo-600" />,
      title: "ConnectHub 5G",
      description: "Multi-network communication hub supporting 4G/5G, WiFi, and satellite connectivity. Ensures reliable data transmission even during extreme weather conditions and network congestion.",
      features: ["5G Connectivity", "Multi-network Support", "Satellite Backup", "Edge Computing"],
      image: "https://images.pexels.com/photos/1108098/pexels-photo-1108098.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: "PowerMax Solar",
      description: "Hybrid power management system with solar panels and battery backup. Provides 30-day autonomous operation during power outages, perfect for remote locations and monsoon seasons.",
      features: ["Solar Power", "Battery Backup", "30-day Autonomy", "Smart Power Management"],
      image: "https://images.pexels.com/photos/1108096/pexels-photo-1108096.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      icon: <Cloud className="h-8 w-8 text-cyan-600" />,
      title: "CloudCommand Center",
      description: "Centralized monitoring and control platform with real-time dashboards, alert management, and integration with NDMA protocols. Accessible via web and mobile applications.",
      features: ["Real-time Dashboard", "Alert Management", "NDMA Integration", "Mobile Access"],
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Presenting Our Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive flood prevention solutions designed specifically for Indian conditions, 
            from advanced sensors to AI-powered analytics and cloud-based monitoring systems.
          </p>
        </motion.div>

        <div className="space-y-16">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    {product.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{product.title}</h3>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="grid grid-cols-2 gap-3">
                  {product.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-2 text-sm text-gray-700"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                </motion.button>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <div className="relative bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-64 object-cover rounded-xl"
                    />
                    
                    {/* Floating Badge */}
                    <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Made in India
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}