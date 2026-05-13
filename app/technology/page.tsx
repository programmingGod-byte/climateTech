'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  Waves,
  Eye,
  Cpu,
  Wifi,
  Sun,
  Image as ImageIcon,
  Settings,
  Snowflake,
  Flag,
  Shield
} from 'lucide-react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';

export default function TechnologyPage() {
  const engineeringCapabilities = [
    {
      icon: Waves,
      title: "NON-CONTACT SENSING",
      desc: "Dual-radar (FMCW + Doppler) eliminates in-water vulnerabilities."
    },
    {
      icon: Eye,
      title: "INTEGRATED VISION",
      desc: "Radar + Camera unified in a single, calibrated housing."
    },
    {
      icon: Cpu,
      title: "EDGE PROCESSING",
      desc: "Built-in 64-bit industrial data logger (no external unit required)."
    },
    {
      icon: Wifi,
      title: "TELEMETRY FAILOVER",
      desc: "Multi-network communication (4G / LoRa / Wi-Fi / Bluetooth)."
    },
    {
      icon: Sun,
      title: "AUTONOMOUS POWER",
      desc: "Solar-powered with high-capacity LiFePO4 allowing up to 15 days backup."
    },
    {
      icon: ImageIcon,
      title: "VISUAL TELEMETRY",
      desc: "Automatic hourly high-resolution image capture and transmission."
    },
    {
      icon: Settings,
      title: "REMOTE OPERATIONS",
      desc: "Secure remote monitoring, device access, and control capability."
    },
    {
      icon: Snowflake,
      title: "EXTREME RUGGEDNESS",
      desc: "IP67 design specifically validated for cold, mountainous, and harsh environments."
    }
  ];

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'sans-serif' }}>
      <Navigation />
      
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20 space-y-4">
            <h1 className="text-5xl md:text-6xl tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400' }}>
              Our Technology
            </h1>
            <p className="text-xl text-slate-500 max-w-3xl mx-auto">
              Pushing the boundaries of sensor fusion and edge intelligence to create the world's most resilient climate monitoring systems.
            </p>
          </div>

          {/* Badges Section */}
          <div className="flex flex-wrap justify-center gap-12 mb-20">
            <div className="flex items-center gap-5 p-6 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200">
                <Flag className="w-7 h-7" />
              </div>
              <div>
                <div className="text-lg font-bold text-slate-900" style={{ fontFamily: 'Poppins, sans-serif' }}>Designed for India</div>
                <div className="text-sm text-slate-500">Engineered for local terrain and conditions</div>
              </div>
            </div>
            <div className="flex items-center gap-5 p-6 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200">
                <Shield className="w-7 h-7" />
              </div>
              <div>
                <div className="text-lg font-bold text-slate-900" style={{ fontFamily: 'Poppins, sans-serif' }}>Field-Ready Hardware</div>
                <div className="text-sm text-slate-500">Ultra-low power mission-critical systems</div>
              </div>
            </div>
          </div>

          {/* Core Engineering Capabilities Grid */}
          <div className="space-y-12 mb-32">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400' }}>
                CORE ENGINEERING CAPABILITIES
              </h2>
              <div className="h-1.5 w-24 bg-blue-600 rounded-full mx-auto" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {engineeringCapabilities.map((cap, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="group p-8 bg-white border border-slate-200 rounded-[40px] hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500"
                >
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <cap.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {cap.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-sans">
                    {cap.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* System Architecture Section */}
          <div className="space-y-12 pt-20 border-t border-slate-100">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '400' }}>
                SYSTEM ARCHITECTURE
              </h2>
              <div className="h-1.5 w-24 bg-blue-600 rounded-full mx-auto" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-[16/9] rounded-[40px] overflow-hidden border border-slate-100 shadow-2xl bg-slate-50 flex items-center justify-center"
            >
              <div className="relative w-full h-full p-4 md:p-12">
                <Image
                  src="/images/image copy.png"
                  alt="System Architecture Diagram"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
