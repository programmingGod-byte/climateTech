'use client';

import { motion } from 'framer-motion';
import Head from 'next/head';

export default function RobotIntroSection() {
  return (
    <section id="robot-intro" className="py-20 bg-background">
      {/* Optional SEO meta for this section */}
      <Head>
        <meta
          name="robots"
          content="index, follow"
        />
        <meta
          name="description"
          content="Climmatech transforms flood management in India using AI-powered robots and real-time monitoring systems for precise flood prediction and disaster response."
        />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Robot Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl p-8 shadow-2xl">
              <img
                src="/images/all.png"
                alt="Climmatech flood monitoring robot with AI algorithms for precise flood prediction"
                className="w-full h-96 object-cover rounded-xl"
                style={{ objectFit: "contain" }}
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
          >
            <h2 className="text-4xl sm:text-4xl text-foreground leading-tight" style={{fontFamily:"sans-serif"}}>
              Transforming <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Flood Management</span> with AI-Powered Robots
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed" style={{fontFamily:"sans-serif"}}>
              Climmatech innovates smarter, more efficient flood prevention solutions for India’s disaster response system using advanced robotics and real-time monitoring.
            </p>
            
            <div className="space-y-4" style={{fontFamily:"sans-serif"}}>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  Advanced AI algorithms trained on Indian monsoon patterns for precise flood prediction
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  Real-time monitoring system designed for Indian infrastructure and climate conditions
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                <p className="text-muted-foreground">
                  Seamless integration with existing disaster management protocols and emergency services
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
