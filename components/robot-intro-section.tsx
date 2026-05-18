'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { ShieldCheck, Battery, Radio, CloudUpload } from 'lucide-react'
import { useRef } from 'react'

export default function RobotIntroSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section 
      id="robot-intro" 
      ref={sectionRef}
      className="py-20 relative overflow-hidden" 
      style={{ fontFamily: 'sans-serif' }}
    >
      <motion.div 
        style={{ 
          y,
          backgroundImage: "url('/images/bgthird.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} 
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md z-0"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/*  Optimized Robot Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-[32px] overflow-hidden shadow-2xl border border-slate-200 bg-white">
              <Image
              style={{
                paddingTop:"20px"
              }}
                src="/images/Gemini_Generated_Image_pv6vufpv6vufpv6v.webp" //  convert to webp
                alt="Climmatech AI-powered flood monitoring robot for real-time disaster prediction in India"
                width={1200}
                height={750}
                sizes="(max-width: 1024px) 100vw, 800px"
                className="w-full h-auto object-contain"
              />

              {/* Feature Grid Below Image */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 bg-slate-50/50 border-t border-slate-100">
                <div className="flex flex-col items-center text-center space-y-2">
                  <ShieldCheck className="w-6 h-6 text-blue-600" />
                  <div>
                    <h4 className="font-bold text-[14px] text-slate-900 leading-tight">Rugged & Durable</h4>
                    {/* <p className="text-[11px] text-muted-foreground mt-1">Built for extreme conditions.</p> */}
                  </div>
                </div>

                <div className="flex flex-col items-center text-center space-y-2">
                  <Battery className="w-6 h-6 text-blue-600" />
                  <div>
                    <h4 className="font-bold text-[14px] text-slate-900 leading-tight">Solar Powered</h4>
                    {/* <p className="text-[11px] text-muted-foreground mt-1">Works 24/7 remote.</p> */}
                  </div>
                </div>

                <div className="flex flex-col items-center text-center space-y-2">
                  <Radio className="w-6 h-6 text-blue-600" />
                  <div>
                    <h4 className="font-bold text-[14px] text-slate-900 leading-tight">Always Connected</h4>
                    {/* <p className="text-[11px] text-muted-foreground mt-1">Cellular / LoRa / Sat.</p> */}
                  </div>
                </div>

                <div className="flex flex-col items-center text-center space-y-2">
                  <CloudUpload className="w-6 h-6 text-blue-600" />
                  <div>
                    <h4 className="font-bold text-[14px] text-slate-900 leading-tight">Edge Ready</h4>
                    {/* <p className="text-[11px] text-muted-foreground mt-1">Processes data locally.</p> */}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
            style={{ fontFamily: 'sans-serif' }}
          >
            <h2 className="text-4xl sm:text-4xl text-white leading-tight">
              Transforming{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Flood Management
              </span>{' '}
              with AI-Powered MonitoringSystems
            </h2>

            <p className="text-xl text-white/80 leading-relaxed">
              Climmatech innovates smarter, more efficient flood prevention
              solutions for India’s disaster response system using advanced
             real-time monitoring system.
            </p>

            <div className="space-y-4">
              <Feature text="Advanced AI algorithms trained on Indian monsoon patterns for precise flood prediction" />
              <Feature text="Real-time monitoring systems designed for Indian infrastructure and climate conditions" />
              <Feature text="Seamless integration with existing disaster management protocols and emergency services" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Feature({ text }: { text: string }) {
  return (
    <div className="flex items-start space-x-3">
      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
      <p className="text-white/80">{text}</p>
    </div>
  )
}
