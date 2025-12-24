'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function HeroSection() {
  const [displayedText] = useState('Predicting the Unpredictable')

  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden"
    >
      {/* ✅ Optimized LCP Background Image */}
      <Image
        src="/images/disaster/cropped-ChatGPT Image Jul 24, 2025, 12_06_07 PM-Photoroom-Photoroom.webp" // 🔥 convert to webp/avif
        alt="Smart energy and robotics technology for climate resilience"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlay (optional for contrast) */}
      <div className="absolute inset-0 bg-black/30 z-[1]" />

      {/* Hero Text */}
      <div className="absolute bottom-12 left-6 z-[2] max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-4xl sm:text-6xl md:text-7xl font-sans tracking-wide uppercase drop-shadow-2xl"
        >
          {displayedText}
        </motion.h1>

        {/* <p className="text-white text-lg sm:text-xl mt-4 drop-shadow-md">
          Innovative smart energy and robotics solutions for homes and businesses.
        </p> */}
      </div>
    </section>
  )
}
