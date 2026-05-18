'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Zap, Wifi, Brain, Activity, Cloud } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Dynamically load the heavy Three.js model viewer so it is only loaded on-demand
const ThreeModelViewer = dynamic(() => import('./three-model-viewer'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-64 bg-gray-100 flex items-center justify-center rounded-xl font-sans text-sm text-gray-500">
      Loading 3D Engine...
    </div>
  )
});

// Tab Component
function MediaTabs({ product, index }) {
  const [activeTab, setActiveTab] = useState('image');

  return (
    <div className="space-y-4">
      {/* Tab Navigation */}
      {/* <div className="flex bg-gray-100 rounded-lg p-1">
        <button
          onClick={() => setActiveTab('image')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
            activeTab === 'image'
              ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-sans'
              : 'text-gray-600 hover:text-gray-800 font-sans'
          }`}
        >
          Image View
        </button>
        <button
          onClick={() => setActiveTab('3d')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
            activeTab === '3d'
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          3D Model
        </button>
      </div> */}

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}

      >
        {activeTab === 'image' ? (
          <Image
            width={400}
            height={400}
            src={product.image}
            alt={product.title}
            className="w-full h-64 object-contain rounded-xl"
          />
        ) : (
          <ThreeModelViewer
            modelPath={product.model}
            title={product.title}
          />
        )}

        {/* Floating Badge */}
        <div className=" bottom-1 left-1 text-white  ">
          <Image
            width={50}
            height={50}
            src="/images/a.webp"
            alt="Made in India"
            className="w-20 h-20 object-contain"
          />

        </div>


      </motion.div>
    </div>
  );
}

export default function ProductsSection() {
  const products = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Doordrishti",
      description: "DoorDrishti is a fully integrated, solar-powered, dual-factor flood monitoring sensor that combines advanced image processing (visual data), long-range radar-based measurements, and rain gauge inputs, with key features including:",
      features: ["Wide-area monitoring", "Rain gauge integration", "10-day battery backup for uninterrupted operation even during extreme weather conditions"],
      image: "/images/oao7myog4yvvidtrday6.webp",
      model: "/models/Solar_Alarm_System_0630051501_texture.fbx"
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Pravaah",
      description: "Pravaah is a compact, solar-powered, radar- based river monitoring sensor that focuses on depth and surface velocity calculation with key features including:",
      features: ["Wide-area coverage", "Solar powered", "Real-time data transmission for continuous river flow monitoring and decision support"],
      image: "/images/vamdzjwkr8kcj3u1x6lg.webp",
      model: "/models/Solar_Alarm_System_0630051501_texture.fbx"
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Tarang",
      description: "Tarang is a compact, solar-powered, radar- based river monitoring sensor focused solely on providing accurate depth measurements, with key features including:",
      features: ["Radar-based depth measurement", "Single-parameter focus", "Solar powered"],
      image: "/images/mvl9v9vqlbrxux2dmm8c.webp",
      model: "/models/Solar_Alarm_System_0630051501_texture.fbx"
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "Rakshak",
      description: "Rakshak is a solar-powered, long-range disaster early warning system equipped with sirens for rapid public alerting, with key features including:",
      features: ["High-decibel siren alerts", "Low-latency response", "Ultra-long-range communication"],
      image: "/images/2-removebg-preview.webp",
      model: "/models/Solar_Alarm_System_0630051501_texture.fbx"
    },
  ];

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover blur-[10px]"
        >
          <source src="/models/videomp_.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl sm:text-6xl font-sans text-white mb-4">
            Presenting Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Products</span>
          </h2>

          <p className="text-xl text-white/80 max-w-3xl mx-auto">
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
            >
              <motion.div
                animate={{
                  y: [0, -15, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2
                }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
              >
                {/* Content */}
                <div className={`space-y-6 p-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-3">
                    <h3 className="text-2xl font-sans text-gray-900 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">{product.title}</h3>
                  </div>

                  <p className="text-lg font-sans text-white/90 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="grid grid-cols-1 gap-3">
                    {product.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex font-sans items-center space-x-2 text-sm text-white/80"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                        <p>{feature}</p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6">
                    <a
                      href={`/products/${product.title.toLowerCase()}`}
                      className="inline-flex items-center space-x-2 text-blue-400 font-semibold hover:text-blue-300 transition-colors group"
                    >
                      <span>View Details</span>
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Media Section with Tabs */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <MediaTabs product={product} index={index} />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}