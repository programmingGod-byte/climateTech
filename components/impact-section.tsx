'use client';

import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Users, DollarSign, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ImpactSection() {
  const statistics = [
    {
      icon: <DollarSign className="h-8 w-8 text-white" />,
      value: "₹1.2L Cr",
      label: "Annual flood damage in India",
      description: "ClimateTech.life can reduce damages by up to 80%",
      imageUrl: "/images/disaster/1_t9Y-zCbKZ_k7v9yMUkJvpA.png"
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      value: "40 Cr",
      label: "Indians at flood risk",
      description: "Early warning saves lives and property",
      imageUrl: "/images/disaster/forty2.png"
    },
    
    {
      icon: <TrendingUp className="h-8 w-8 text-white" />,
      value: "300%",
      label: "Increase in urban flooding",
      description: "Climate change demands smart solutions",
      imageUrl: "/images/disaster/download.png"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-white" />,
      value: "85%",
      label: "Monsoon flood increase",
      description: "Urban areas face unprecedented flood risks",
      imageUrl: "/images/disaster/Hindustan.avif"
    },
    
  ];

  return (
    <section id="impact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-20"
          >
            <h2 className="text-4xl lg:text-5xl font-sans text-foreground mb-6 leading-tight ">
              Why  <span className='bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>Flood Prevention</span> Matters for India
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Flooding is India's most devastating natural disaster, affecting millions during monsoons. 
              Our technology transforms how Indian cities and communities prepare for and respond to flood risks.
            </p>
            
            {/* Additional compelling text */}
            <div className="space-y-4 text-muted-foreground">
              <p className="flex items-center gap-3">
                <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                Real-time monitoring saves lives and property
              </p>
              <p className="flex items-center gap-3">
                <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                AI-powered predictions reduce damage by 80%
              </p>
              <p className="flex items-center gap-3">
                <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                Early warnings can protect the citizens
              </p>
            </div>
          </motion.div>

          {/* Right Side - Pinterest Style Image Grid */}
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
                  <img
                    src={stat.imageUrl}
                    alt={stat.label}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ display: 'block' }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
                  
                  {/* Hover Text Overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <div className="mb-3 flex items-center gap-2">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <h3 className="text-lg font-semibold text-white mb-2">{stat.label}</h3>
                    <p className="text-sm text-white/90 leading-relaxed">{stat.description}</p>
                  </div>
                  
                  {/* Always visible subtle indicator */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-white/30 rounded-full group-hover:bg-white/60 transition-colors duration-300"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className=" rounded-2xl p-8 lg:p-12 text-black text-center mt-20 shadow-2xl"
        >
          <h3 className="text-2xl lg:text-3xl font-sans mb-4">
            Don't Wait for the <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Next Flood</span>
          </h3>
          <p className="text-lg lg:text-xl opacity-90 mb-6 max-w-2xl mx-auto">
            Every minute counts in flood prevention Protect your community with India's most 
            advanced flood early warning system available today.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Protected Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}