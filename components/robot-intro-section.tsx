'use client';

import { motion } from 'framer-motion';

export default function RobotIntroSection() {
  return (
    <section className="py-20 bg-background">
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
                style={{
                  objectFit:"contain"
                }}
                alt="Flood monitoring robot"
                className="w-full h-96 object-cover rounded-xl"
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
            <h2 className="text-4xl sm:text-4xl  text-foreground leading-tight" style={{fontFamily:"sans-serif"}}>
              Transforming <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Flood management</span> through pioneering and advanced technology
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed" style={{fontFamily:"sans-serif"}}>
              We're innovating the next era of smarter, more efficient flood prevention solutions 
              specifically designed for the Indian disaster response system.
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