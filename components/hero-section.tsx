'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, Clock, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import EarthGlobe from './earth-globe';

export default function HeroSection() {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const titleText = "Smart Flood Prevention for India";

  // Typing effect for the main headline
  useEffect(() => {
    if (isTyping) {
      const timer = setTimeout(() => {
        if (displayedText.length < titleText.length) {
          setDisplayedText(titleText.slice(0, displayedText.length + 1));
        } else {
          setIsTyping(false);
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [displayedText, isTyping, titleText]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Layer 1: Background Gradient & Image */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800" style={{ zIndex: 1 }} />
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{
          backgroundImage: `url('/images/chris-gallagher-9Jgn8hSYUFc-unsplash.jpg')`,
          zIndex: 1
        }}
      />
      
      {/* Layer 2: Raindrop Shader Effect (Now active) */}
      
      
      {/* Layer 3: Atmospheric Overlay */}
      <div className="absolute inset-0 bg-black/30" style={{ zIndex: 3 }} />

      {/* Layer 4: Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" style={{ zIndex: 10 }}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            <motion.h1 
              className="text-4xl   text-white mb-4 leading-tight font-sans"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {displayedText}
              <span className="text-cyan-400">
                {isTyping && <span className="animate-pulse">|</span>}
              </span>
            </motion.h1>

            {/* --- NEW: Subheading --- */}
            <motion.p
              className="text-lg sm:text-xl text-white/80 mb-8 max-w-xl mx-auto lg:mx-0 font-sans"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Predicting the unpredictable. Our AI-powered platform provides crucial, life-saving early warnings.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 text-lg group shadow-2xl transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              {/* --- NEW: Secondary "Learn More" Button --- */}
              <Button 
                size="lg" 
                variant="outline"
                className="bg-transparent border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300 px-8 py-4 text-lg transition-colors duration-300"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </motion.div>

            {/* --- IMPROVED: Stats Section with Icons --- */}
            <motion.div 
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <Target className="w-8 h-8 text-cyan-400" />
                <div>
                  <div className="text-2xl font-bold text-white">90%</div>
                  <div className="text-sm text-white/70">Accuracy</div>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <Clock className="w-8 h-8 text-green-400" />
                <div>
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-sm text-white/70">Monitoring</div>
                </div>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <ShieldCheck className="w-8 h-8 text-yellow-400" />
                <div>
                  <div className="text-2xl font-bold text-white">60min</div>
                  <div className="text-sm text-white/70">Early Warning</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right side - 3D Earth Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.5 }}
            className="flex justify-center lg:justify-end min-h-[300px] lg:min-h-[500px]"
          >
            <EarthGlobe />
          </motion.div>
        </div>
      </div>

      {/* Layer 5: Floating particles for extra atmosphere */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 4 }}>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20 + Math.random() * -30, 0],
              x: [0, 10 + Math.random() * 20, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
    </section>
  );
}