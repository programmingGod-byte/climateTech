'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Activity, BarChart3, Bell, Monitor, ArrowRight, ExternalLink, Play, Pause } from 'lucide-react';
import { motion } from 'framer-motion';
import Head from 'next/head';

// Background Particles Component
const BackgroundParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 opacity-20">
      <svg className="w-full h-full">
        <defs>
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-blue-300"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-cyan-50/50" />
  </div>
);

export default function DashboardShowcaseSection() {
  const [isPlaying, setIsPlaying] = useState(true);

  const dashboardFeatures = [
    { icon: <Activity className="h-5 w-5 text-green-500" />, title: "Real-Time Monitoring", description: "Live sensor data from all deployed devices" },
    { icon: <BarChart3 className="h-5 w-5 text-blue-500" />, title: "Analytics Dashboard", description: "Comprehensive flood risk analytics and trends" },
    { icon: <Bell className="h-5 w-5 text-red-500" />, title: "Alert Management", description: "Centralized alert system with escalation protocols" },
  ];

  return (
    <section id="dashboard-showcase" className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 overflow-hidden">
      <Head>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Climmatech's web dashboard provides real-time monitoring, analytics, and alert management for flood prevention. Access critical flood data and insights from anywhere." />
      </Head>

      {/* Background Particles */}
      <BackgroundParticles />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-sans font-medium text-gray-900 mb-4">
            Comprehensive <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Web Dashboard</span> for Flood Prevention
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Monitor, manage, and analyze your entire flood prevention network using Climmatech's powerful web dashboard. Real-time insights at your fingertips help protect communities and reduce flood risk.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Dashboard Preview */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 backdrop-blur-sm">
              <div className="w-full h-80 sm:h-96 flex items-center justify-center p-4">
                <img 
                  src="/images/WhatsApp Image 2025-07-21 at 10.16.07 AM.jpeg" 
                  alt="Climmatech VeriFlow web dashboard preview showing flood prevention analytics"
                  className="w-full h-full object-contain rounded-lg shadow-sm"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
            </div>

            <motion.div className="absolute -bottom-4 -right-4 flex space-x-2" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.8 }} viewport={{ once: true }}>
              <Button variant="outline" size="sm" className="bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all border-white/50" onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </Button>
            </motion.div>
          </motion.div>

          {/* Features & CTA */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className="space-y-8">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
                <Monitor className="h-3 w-3 mr-1" /> Web Dashboard
              </Badge>
              <h3 className="text-3xl font-sans text-gray-900 mb-4">Complete Flood Prevention Control</h3>
              <p className="text-lg text-gray-600 font-sans leading-relaxed">
                Access real-time monitoring, analytics, and alerts from anywhere. Climmatech's dashboard helps communities respond faster and prevent flood damage.
              </p>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-1 gap-4 place-items-center">
              {dashboardFeatures.map((feature, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="w-full flex items-start place-items-center space-x-3 p-4 bg-white/70 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-shadow border border-white/50">
                  <div>
                    <h4 className="font-medium font-sans text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-sm font-sans text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg group" onClick={() => window.open('https://devices.climmatech.com/', '_blank')}>
                  <ExternalLink className="mr-2 h-5 w-5" /> Access Dashboard <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                <Button variant="outline" className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all backdrop-blur-sm" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Request Demo Access
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
