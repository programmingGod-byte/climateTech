'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function HeroSection() {
  const [displayedText] = useState('Predicting the Unpredictable')

  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden"
    >
      {/* ✅ Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/website/home.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay (for contrast) */}
      <div className="absolute inset-0 bg-black/50 z-[1]" />

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
