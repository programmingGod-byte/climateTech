'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const [displayedText, setDisplayedText] = useState("Predicting the Unpredictable");
  const [isTyping, setIsTyping] = useState(true);

  const titleText = "Predicting the Unpredictable";

  // Typing effect for the headline
  // useEffect(() => {
  //   if (isTyping) {
  //     const timer = setTimeout(() => {
  //       if (displayedText.length < titleText.length) {
  //         setDisplayedText(titleText.slice(0, displayedText.length + 1));
  //       } else {
  //         setIsTyping(false);
  //       }
  //     }, 60);
  //     return () => clearTimeout(timer);
  //   }
  // }, [displayedText, isTyping, titleText]);

  return (
    <section className="relative h-screen w-full overflow-hidden z-0">
      {/* Background image without dark overlay */}
      <div className="absolute inset-0">
        <img 
          src="/images/disaster/cropped-ChatGPT Image Jul 24, 2025, 12_06_07 PM-Photoroom-Photoroom.png"
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 1 }}
        />
      </div>

      {/* Text pinned to bottom left */}
      <div className="absolute bottom-12 left-6 z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-4xl sm:text-6xl md:text-7xl font-sans tracking-wide uppercase drop-shadow-2xl"
        >
          {displayedText}
          {isTyping && <span className="text-cyan-400 animate-pulse">|</span>}
        </motion.h1>
      </div>
    </section>
  );
}