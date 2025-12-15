'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { TrendingUp, Users, DollarSign } from 'lucide-react'

export default function ImpactSection() {
  const statistics = [
    {
      icon: <DollarSign className="h-8 w-8 text-white" />,
      value: '₹1.2L Cr',
      label: 'Annual flood damage in India',
      description: 'Climmatech can reduce damages by up to 80%',
      imageUrl: '/images/disaster/impact-1.webp',
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      value: '40 Cr',
      label: 'Indians at flood risk',
      description: 'Early warning saves lives and property',
      imageUrl: '/images/disaster/impact-2.webp',
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-white" />,
      value: '300%',
      label: 'Increase in urban flooding',
      description: 'Climate change demands smart solutions',
      imageUrl: '/images/disaster/impact-3.webp',
    },
    {
      icon: <DollarSign className="h-8 w-8 text-white" />,
      value: '85%',
      label: 'Monsoon flood increase',
      description: 'Urban areas face unprecedented flood risks',
      imageUrl: '/images/disaster/Hindustan.avif',
    },
  ]

  return (
    <section id="impact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-20"
          >
            <h2 className="text-4xl lg:text-5xl font-sans text-foreground mb-6 leading-tight">
              Why{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Flood Prevention
              </span>{' '}
              Matters in India
            </h2>

            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Flooding is India's most devastating natural disaster.
              Climmatech’s AI-powered flood prevention technology transforms
              how Indian cities prepare and respond to climate risks.
            </p>

            <div className="space-y-4 text-muted-foreground">
              <Bullet text="Real-time monitoring saves lives and property" />
              <Bullet text="AI-powered predictions reduce damage by up to 80%" />
              <Bullet text="Early warnings protect citizens and communities" />
            </div>
          </motion.div>

          {/* Right Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="columns-2 gap-4 space-y-4"
          >
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="break-inside-avoid group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src={stat.imageUrl}
                    alt={`${stat.label} – flood impact in India`}
                    width={480}
                    height={320}
                    sizes="(max-width: 768px) 100vw, 480px"
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                  <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                    <div className="mb-3 flex items-center gap-2">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">
                      {stat.value}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {stat.label}
                    </h3>
                    <p className="text-sm text-white/90">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-2xl p-8 lg:p-12 text-center mt-20 shadow-2xl"
        >
          <h3 className="text-2xl lg:text-3xl font-sans mb-4">
            Don’t Wait for the{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Next Flood
            </span>
          </h3>

          <p className="text-lg lg:text-xl opacity-90 mb-6 max-w-2xl mx-auto">
            Every minute counts. Protect your community with India’s most
            advanced flood early warning system.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold"
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth',
              })
            }
          >
            Get Protected Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

function Bullet({ text }: { text: string }) {
  return (
    <p className="flex items-center gap-3">
      <span className="w-2 h-2 bg-cyan-600 rounded-full" />
      {text}
    </p>
  )
}
