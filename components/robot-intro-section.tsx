'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function RobotIntroSection() {
  return (
    <section id="robot-intro" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* ✅ Optimized Robot Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl p-8 shadow-2xl">
              <Image
                src="/images/all.webp" // 🔥 convert to webp
                alt="Climmatech AI-powered flood monitoring robot for real-time disaster prediction in India"
                width={480}
                height={320}
                sizes="(max-width: 768px) 100vw, 480px"
                className="rounded-xl object-contain"
              />
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
            <h2 className="text-4xl sm:text-4xl text-foreground leading-tight">
              Transforming{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Flood Management
              </span>{' '}
              with AI-Powered Robots
            </h2>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Climmatech innovates smarter, more efficient flood prevention
              solutions for India’s disaster response system using advanced
              robotics and real-time monitoring.
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
      <p className="text-muted-foreground">{text}</p>
    </div>
  )
}
