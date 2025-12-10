'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';

export default function HeroSection() {
  const [displayedText, setDisplayedText] = useState("Predicting the Unpredictable");
  const [isTyping, setIsTyping] = useState(true);

  const titleText = "Predicting the Unpredictable";

  // Typing effect
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
    <section id="hero" className="relative h-screen w-full overflow-hidden z-0">
      {/* SEO Meta for Hero Section */}
      <Head>
        <title>Climmatech | Predicting the Unpredictable in Smart Energy & Robotics</title>
        <meta
          name="description"
          content="Climmatech provides smart energy and robotics solutions, helping homes and businesses predict and manage unpredictable energy challenges with advanced devices and dashboards."
        />
      </Head>

      {/* Background image with descriptive alt text */}
      <div className="absolute inset-0">
        <img 
          src="/images/disaster/cropped-ChatGPT Image Jul 24, 2025, 12_06_07 PM-Photoroom-Photoroom.png"
          alt="Smart energy and robotics technology concept"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 1 }}
        />
      </div>

      {/* Hero Text */}
      <div className="absolute bottom-12 left-6 z-10 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-4xl sm:text-6xl md:text-7xl font-sans tracking-wide uppercase drop-shadow-2xl"
        >
          {displayedText}
          {isTyping && <span className="text-cyan-400 animate-pulse">|</span>}
        </motion.h1>
        <p className="text-white text-lg sm:text-xl mt-4 drop-shadow-md">
          Innovative smart energy and robotics solutions for homes and businesses.
        </p>
      </div>
    </section>
  );
}
