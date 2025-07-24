'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import EarthGlobe from './earth-globe';
import RaindropShader from './raindrop-shader';

export default function HeroSection() {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const titleText = "Smart Flood Prevention for India";

  // Typing effect
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
      {/* Background with gradient and flood prevention image */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800" style={{ zIndex: 1 }} />
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{
          backgroundImage: `url('/images/chris-gallagher-9Jgn8hSYUFc-unsplash.jpg')`,
          zIndex: 1
        }}
      />
      
      {/* Raindrop Shader Effect */}
      <div style={{ zIndex: 2 }}>
        
      </div>
      
      {/* Atmospheric overlay */}
      <div className="absolute inset-0 bg-black/20" style={{ zIndex: 3 }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20" style={{ zIndex: 10 }}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl  text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              style={{fontFamily:"sans-serif"}}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {displayedText}
              <span className="text-cyan-400">
                {isTyping && <span className="animate-pulse">|</span>}
              </span>
            </motion.h1>
            

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 text-lg group shadow-2xl"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-cyan-400">90%</div>
                <div className="text-sm text-white/80">Accuracy</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-green-400">24/7</div>
                <div className="text-sm text-white/80">Monitoring</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-yellow-400">60min</div>
                <div className="text-sm text-white/80">Early Warning</div>
              </div>
            </motion.div>
          </div>

          {/* Right side - 3D Earth Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex justify-center lg:justify-end"
          >
            <EarthGlobe />
          </motion.div>
        </div>
      </div>

      {/* Floating particles for extra atmosphere */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 3 }}>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
}