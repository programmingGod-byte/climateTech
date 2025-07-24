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
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background image with dark gradient overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center "
          style={{
            backgroundImage: `url('/images/disaster/ChatGPT Image Jul 24, 2025, 12_06_07 PM-Photoroom.png')`,
            zIndex: 1
          }}
        />
        <div className="absolute inset-0 bg-black/60 z-2" />
      </div>

      {/* Text pinned to bottom left */}
      <div className="absolute bottom-12 left-6 z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-4xl sm:text-6xl md:text-7xl  font-sans tracking-wide uppercase"
        >
          {displayedText}
          {isTyping && <span className="text-cyan-400 animate-pulse">|</span>}
        </motion.h1>
      </div>
    </section>
  );
}
