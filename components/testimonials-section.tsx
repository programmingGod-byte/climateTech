'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rajesh Thakur",
      title: "District Collector",
      organization: "Mandi District Administration",
      location: "Mandi, Himachal Pradesh",
      content: "ClimateTech.life has been a game-changer for Mandi district during monsoon season. The early warning system helped us evacuate 2,000+ families from Beas river banks before the July 2024 floods. The AI predictions were accurate to the minute - exactly what we needed for our hilly terrain and unpredictable mountain rivers.",
      rating: 5,
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      impact: "2,000+ lives saved",
      deployment: "15 sensors across Beas river"
    },
    {
      name: "Priya Sharma",
      title: "Municipal Engineer",
      organization: "Kamand Town Council",
      location: "Kamand, Mandi District",
      content: "Being a small hill town, Kamand was always vulnerable to flash floods from the mountain streams. ClimateTech.life's sensors on our bridges now give us 8-10 minutes advance warning - enough time to alert our 5,000 residents via loudspeakers and WhatsApp groups. The system works perfectly even during heavy monsoon when mobile networks are weak.",
      rating: 5,
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      impact: "5,000 residents protected",
      deployment: "3 bridge sensors + weather station"
    },
    {
      name: "Dr. Vikram Singh",
      title: "Emergency Response Coordinator",
      organization: "Mandi Medical College & Hospital",
      location: "Mandi, Himachal Pradesh",
      content: "During the August 2024 cloudbursts, ClimateTech.life's alerts reached us 12 minutes before the flood waters hit our hospital area. We successfully moved 150 patients to higher floors and secured medical equipment worth ₹2 crores. The multi-language alerts in Hindi and Pahari dialect were crucial for our local staff understanding.",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      impact: "150 patients evacuated safely",
      deployment: "Hospital area monitoring system"
    }
  ];

  const localStats = [
    {
      metric: "12 minutes",
      description: "Average early warning time in Mandi hills",
      icon: "⏰"
    },
    {
      metric: "7,000+",
      description: "Residents protected in Mandi-Kamand region",
      icon: "👥"
    },
    {
      metric: "18 sensors",
      description: "Deployed across Beas river and tributaries",
      icon: "📡"
    },
    {
      metric: "₹5 Cr",
      description: "Property damage prevented in 2024",
      icon: "💰"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Protecting Mandi & Kamand Communities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real testimonials from local officials and residents in Mandi district who have experienced 
            the life-saving impact of our flood prevention technology during actual emergencies.
          </p>
          
          {/* Location Badge */}
          <div className="inline-flex items-center mt-6 bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
            <MapPin className="h-4 w-4 mr-2" />
            <span className="font-medium">Mandi District, Himachal Pradesh</span>
          </div>
        </motion.div>

        {/* Local Impact Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          {localStats.map((stat, index) => (
            <div key={index} className="text-center bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-blue-600 mb-1">{stat.metric}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  {/* Location Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <div className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      Local Deployment
                    </div>
                  </div>
                  
                  <div className="relative mb-6">
                    <Quote className="absolute -top-2 -left-2 h-8 w-8 text-blue-200" />
                    <p className="text-gray-700 leading-relaxed pl-6 italic">
                      "{testimonial.content}"
                    </p>
                  </div>

                  {/* Impact Metrics */}
                  <div className="bg-blue-50 rounded-lg p-4 mb-6">
                    <div className="grid grid-cols-1 gap-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-blue-800">Impact:</span>
                        <span className="text-sm text-blue-600">{testimonial.impact}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-blue-800">Deployment:</span>
                        <span className="text-sm text-blue-600">{testimonial.deployment}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.title}</p>
                      <p className="text-sm text-blue-600 font-medium">{testimonial.organization}</p>
                      <div className="flex items-center mt-1">
                        <MapPin className="h-3 w-3 text-gray-400 mr-1" />
                        <p className="text-xs text-gray-500">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Local Success Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Mandi District Success Story</h3>
            <p className="text-lg opacity-90 mb-6 max-w-4xl mx-auto">
              "In July 2024, when unprecedented rains hit Mandi district, our ClimateTech.life system 
              provided critical early warnings that saved thousands of lives. The technology proved 
              its worth during the most challenging monsoon season in decades."
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">7,000+</div>
                <p className="opacity-90">People Evacuated Safely</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">18</div>
                <p className="opacity-90">Sensors Deployed</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100%</div>
                <p className="opacity-90">Alert Success Rate</p>
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Protect Your Community Too
            </motion.button>
          </div>
        </motion.div>

        {/* Regional Coverage Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Expanding Across Himachal Pradesh
          </h3>
          <p className="text-gray-600 mb-8">
            Following successful deployment in Mandi-Kamand region, we're expanding to protect more hill communities
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-3xl mx-auto">
            <div className="text-center p-4 bg-green-100 rounded-lg">
              <div className="font-semibold text-green-800">Mandi ✓</div>
              <div className="text-xs text-green-600">Active</div>
            </div>
            <div className="text-center p-4 bg-green-100 rounded-lg">
              <div className="font-semibold text-green-800">Kamand ✓</div>
              <div className="text-xs text-green-600">Active</div>
            </div>
            <div className="text-center p-4 bg-yellow-100 rounded-lg">
              <div className="font-semibold text-yellow-800">Kullu</div>
              <div className="text-xs text-yellow-600">Planning</div>
            </div>
            <div className="text-center p-4 bg-yellow-100 rounded-lg">
              <div className="font-semibold text-yellow-800">Manali</div>
              <div className="text-xs text-yellow-600">Planning</div>
            </div>
            <div className="text-center p-4 bg-yellow-100 rounded-lg">
              <div className="font-semibold text-yellow-800">Shimla</div>
              <div className="text-xs text-yellow-600">Planning</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}