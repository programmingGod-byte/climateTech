'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Monitor, 
  Activity, 
  BarChart3, 
  MapPin, 
  Bell, 
  Wifi, 
  Battery, 
  Droplets,
  ArrowRight,
  ExternalLink,
  Play,
  Pause,
  RefreshCw,
  Zap
} from 'lucide-react';
import { motion } from 'framer-motion';

// Particle Component
const Particle = ({ x, y, size, opacity, color, delay }) => (
  <motion.div
    className={`absolute rounded-full ${color}`}
    style={{
      left: `${x}%`,
      top: `${y}%`,
      width: `${size}px`,
      height: `${size}px`,
    }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0, opacity, 0],
      scale: [0, 1, 0],
      y: [0, -20, -40],
      x: [0, Math.random() * 20 - 10, Math.random() * 40 - 20]
    }}
    transition={{
      duration: 4 + Math.random() * 2,
      repeat: Infinity,
      delay: delay,
      ease: "easeOut"
    }}
  />
);

// Floating Orb Component
const FloatingOrb = ({ x, y, size, color, duration }) => (
  <motion.div
    className={`absolute rounded-full ${color} blur-sm`}
    style={{
      left: `${x}%`,
      top: `${y}%`,
      width: `${size}px`,
      height: `${size}px`,
    }}
    animate={{
      x: [0, 30, -20, 0],
      y: [0, -20, 10, 0],
      scale: [1, 1.2, 0.8, 1],
    }}
    transition={{
      duration: duration,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

// Background Particles Component
const BackgroundParticles = () => {
  const [particles, setParticles] = useState([]);
  const [orbs, setOrbs] = useState([]);

  useEffect(() => {
    // Generate particles
    const newParticles = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      opacity: Math.random() * 0.6 + 0.2,
      color: ['bg-blue-400/30', 'bg-cyan-400/30', 'bg-purple-400/30', 'bg-green-400/30'][Math.floor(Math.random() * 4)],
      delay: Math.random() * 3
    }));

    // Generate floating orbs
    const newOrbs = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 90,
      y: Math.random() * 90,
      size: Math.random() * 80 + 40,
      color: ['bg-blue-500/10', 'bg-cyan-500/10', 'bg-purple-500/10'][Math.floor(Math.random() * 3)],
      duration: Math.random() * 10 + 15
    }));

    setParticles(newParticles);
    setOrbs(newOrbs);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Orbs */}
      {orbs.map((orb) => (
        <FloatingOrb key={orb.id} {...orb} />
      ))}
      
      {/* Particles */}
      {particles.map((particle) => (
        <Particle key={particle.id} {...particle} />
      ))}
      
      {/* Animated Grid Lines */}
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
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-cyan-50/50" />
    </div>
  );
};

export default function DashboardShowcaseSection() {
  const [isPlaying, setIsPlaying] = useState(true);

  const dashboardFeatures = [
    {
      icon: <Activity className="h-5 w-5 text-green-500" />,
      title: "Real-Time Monitoring",
      description: "Live sensor data from all deployed devices"
    },
    {
      icon: <BarChart3 className="h-5 w-5 text-blue-500" />,
      title: "Analytics Dashboard",
      description: "Comprehensive flood risk analytics and trends"
    },
    {
      icon: <MapPin className="h-5 w-5 text-purple-500" />,
      title: "Geographic Tracking",
      description: "Interactive maps showing all sensor locations"
    },
    {
      icon: <Bell className="h-5 w-5 text-red-500" />,
      title: "Alert Management",
      description: "Centralized alert system with escalation protocols"
    },
    {
      icon: <Wifi className="h-5 w-5 text-cyan-500" />,
      title: "Connectivity Status",
      description: "Monitor network health and device connectivity"
    },
    {
      icon: <Battery className="h-5 w-5 text-yellow-500" />,
      title: "Power Management",
      description: "Track battery levels and solar charging status"
    }
  ];

  const liveMetrics = [
    { label: "Active Sensors", value: "18", trend: "+2", color: "text-green-600" },
    { label: "Water Level", value: "2.4m", trend: "↑0.3m", color: "text-blue-600" },
    { label: "Rainfall Rate", value: "45mm/h", trend: "↑12mm", color: "text-orange-600" },
    { label: "Alert Status", value: "Normal", trend: " ", color: "text-green-600" }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 overflow-hidden">
      {/* Background Particles */}
      <BackgroundParticles />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Web Dashboard for Complete Control
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Monitor, manage, and analyze your entire flood prevention network from our 
            powerful web dashboard. Real-time insights at your fingertips.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 backdrop-blur-sm">
              {/* Browser Header */}
              <div className="bg-gray-100 px-4 py-3 flex items-center space-x-2 border-b">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex-1 bg-white rounded px-3 py-1 text-sm text-gray-600 mx-4">
                  https://om-bhaiya-veriflow-exvx.vercel.app/
                </div>
                <RefreshCw className="h-4 w-4 text-gray-400" />
              </div>

              {/* Dashboard Screenshot Placeholder */}
              <div className="relative h-96 bg-gradient-to-br from-blue-900 via-slate-800 to-blue-900 overflow-hidden">
                {/* Simulated Dashboard Interface */}
                <div className="absolute inset-0 p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                        <Droplets className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold">VeriFlow Dashboard</h3>
                        <p className="text-blue-200 text-sm">Flood Monitoring System</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <motion.div 
                        className="w-2 h-2 bg-green-400 rounded-full"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <span className="text-green-400 text-sm">Live</span>
                    </div>
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {liveMetrics.map((metric, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20"
                      >
                        <div className="text-white/70 text-xs mb-1">{metric.label}</div>
                        <div className="flex items-center justify-between">
                          <span className="text-white font-bold text-lg">{metric.value}</span>
                          <span className={`text-xs ${metric.color}`}>{metric.trend}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Chart Placeholder */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-4 border border-white/20">
                    <div className="text-white text-sm mb-3">Water Level Trend (24h)</div>
                    <div className="h-16 relative">
                      <svg className="w-full h-full" viewBox="0 0 300 60">
                        <motion.path
                          d="M0,40 Q75,20 150,30 T300,25"
                          stroke="#3b82f6"
                          strokeWidth="2"
                          fill="none"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, ease: "easeInOut" }}
                        />
                        <motion.path
                          d="M0,40 Q75,20 150,30 T300,25 L300,60 L0,60 Z"
                          fill="url(#gradient)"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>

                  {/* Device Status */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                    <div className="text-white text-sm mb-2">Device Status</div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <motion.div 
                          className="w-2 h-2 bg-green-400 rounded-full"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        <span className="text-white/70 text-xs">15 Online</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span className="text-white/70 text-xs">2 Warning</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                        <span className="text-white/70 text-xs">1 Offline</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute top-4 right-4 bg-green-500/20 backdrop-blur-sm rounded-full p-2 border border-green-400/30"
                  animate={{ 
                    y: [0, -5, 0],
                    rotate: [0, 10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Activity className="h-4 w-4 text-green-400" />
                </motion.div>

                <motion.div
                  className="absolute bottom-4 left-4 bg-blue-500/20 backdrop-blur-sm rounded-full p-2 border border-blue-400/30"
                  animate={{ 
                    y: [0, -8, 0],
                    rotate: [0, -15, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <Zap className="h-4 w-4 text-blue-400" />
                </motion.div>

                {/* Dashboard Particles */}
                <div className="absolute inset-0 pointer-events-none">
                  {Array.from({ length: 15 }, (_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                        y: [0, -30],
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                        ease: "easeOut"
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Live Indicator */}
              <div className="absolute top-8 right-8 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-2 shadow-lg">
                <motion.div 
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span>LIVE</span>
              </div>
            </div>

            {/* Floating Action Buttons */}
            <motion.div
              className="absolute -bottom-4 -right-4 flex space-x-2"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <Button
                variant="outline"
                size="sm"
                className="bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all border-white/50"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </Button>
              <Button
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all"
                onClick={() => window.open('https://om-bhaiya-veriflow-exvx.vercel.app/', '_blank')}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                View Live
              </Button>
            </motion.div>
          </motion.div>

          {/* Features Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
                <Monitor className="h-3 w-3 mr-1" />
                Web Dashboard
              </Badge>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Complete System Visibility & Control
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our comprehensive web dashboard provides real-time monitoring, analytics, 
                and control of your entire flood prevention network. Access critical data 
                from anywhere, anytime.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {dashboardFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 p-4 bg-white/70 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-shadow border border-white/50"
                >
                  <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Key Benefits */}
            <div className="bg-gradient-to-r from-blue-50/80 to-cyan-50/80 backdrop-blur-sm rounded-xl p-6 border border-white/50">
              <h4 className="font-bold text-gray-900 mb-4">Key Benefits:</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-700">24/7 remote monitoring and control</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Instant alerts and notifications</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-700">Historical data analysis and reporting</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-700">Multi-user access with role management</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1"
              >
                <Button 
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg group"
                  onClick={() => window.open('https://om-bhaiya-veriflow-exvx.vercel.app/', '_blank')}
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Access Dashboard
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1"
              >
                <Button 
                  variant="outline"
                  className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-6 rounded-lg transition-all backdrop-blur-sm"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Request Demo Access
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Dashboard Performance</h3>
            <p className="text-gray-600">Real-time metrics from our monitoring platform</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
              <p className="text-gray-600">Uptime Reliability</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-3xl font-bold text-green-600 mb-2">&lt;2s</div>
              <p className="text-gray-600">Data Refresh Rate</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <p className="text-gray-600">Monitoring Coverage</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}