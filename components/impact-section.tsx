'use client';

import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Users, DollarSign, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ImpactSection() {
  const statistics = [
    {
      icon: <DollarSign className="h-8 w-8 text-green-600" />,
      value: "₹1.2L Cr",
      label: "Annual flood damage in India",
      description: "ClimateTech.life can reduce damages by up to 80%"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      value: "40 Cr",
      label: "Indians at flood risk",
      description: "Early warning saves lives and property"
    },
    {
      icon: <MapPin className="h-8 w-8 text-purple-600" />,
      value: "12 Cr",
      label: "Properties in flood zones",
      description: "Smart monitoring protects communities"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-red-600" />,
      value: "300%",
      label: "Increase in urban flooding",
      description: "Climate change demands smart solutions"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Flood Prevention Matters for India
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Flooding is India's most devastating natural disaster, affecting millions during monsoons. 
            Our technology transforms how Indian cities and communities prepare for and respond to flood risks.
          </p>
        </motion.div>

        {/* Statistics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center p-6 h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="mb-4 flex justify-center">{stat.icon}</div>
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-foreground/80 mb-2">{stat.label}</div>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 lg:p-12 text-white text-center"
        >
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Don't Wait for the Next Flood
          </h3>
          <p className="text-lg lg:text-xl opacity-90 mb-6 max-w-2xl mx-auto">
            Every minute counts in flood prevention. Protect your community with India's most 
            advanced flood early warning system available today.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Protected Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}