'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Shield, Globe, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PartnersSection() {
  const partnerships = [
    {
      type: "Government Partners",
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      partners: [
        { name: "NDMA", description: "National Disaster Management Authority - Certified Disaster Response Partner" },
        { name: "IMD", description: "India Meteorological Department - Official Weather Data Integration" },
        { name: "CPCB", description: "Central Pollution Control Board - Environmental Monitoring Collaboration" },
        { name: "MHA", description: "Ministry of Home Affairs - Security and Emergency Response Certification" }
      ]
    },
    {
      type: "Technology Partners",
      icon: <Zap className="h-8 w-8 text-purple-600" />,
      partners: [
        { name: "Reliance Jio", description: "5G Network Infrastructure & IoT Connectivity Platform" },
        { name: "Bharti Airtel", description: "Telecom Infrastructure & Emergency Alert Systems" },
        { name: "BSNL", description: "Government Network Integration & Rural Connectivity" },
        { name: "TCS", description: "AI Development & System Integration Services" }
      ]
    },
    {
      type: "Research Institutions",
      icon: <Award className="h-8 w-8 text-green-600" />,
      partners: [
        { name: "IIT Delhi", description: "Climate Change Research & AI Algorithm Development" },
        { name: "IISc Bangalore", description: "Environmental Engineering & Sensor Technology" },
        { name: "IITM Pune", description: "Meteorological Research & Weather Prediction Models" },
        { name: "TERI", description: "The Energy and Resources Institute - Sustainability Research" }
      ]
    },
    {
      type: "International Collaborations",
      icon: <Globe className="h-8 w-8 text-orange-600" />,
      partners: [
        { name: "UN Disaster Risk Reduction", description: "International Disaster Management Best Practices" },
        { name: "World Bank", description: "Climate Resilience Infrastructure Development" },
        { name: "ADB", description: "Asian Development Bank - Smart Cities Initiative" },
        { name: "JICA", description: "Japan International Cooperation Agency - Technology Transfer" }
      ]
    }
  ];

  const certifications = [
    "BIS Certification",
    "TRAI Approved",
    "IP68 Monsoon Rating",
    "NDMA Approved Technology",
    "ISI Mark Components",
    "CE International Standard"  
  ];

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted Partners & Collaborations in India
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We work with leading Indian organizations and international partners to deliver 
            the most reliable and effective flood prevention solutions for Indian conditions.
          </p>
        </motion.div>

        {/* Partnership Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {partnerships.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    {category.icon}
                    <h3 className="text-2xl font-bold text-gray-900 ml-3">
                      {category.type}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.partners.map((partner, partnerIndex) => (
                      <div key={partnerIndex} className="border-l-4 border-l-blue-200 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-1">{partner.name}</h4>
                        <p className="text-sm text-gray-600">{partner.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Indian Certifications & Standards
          </h3>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Badge 
                  variant="outline" 
                  className="w-full p-3 text-center bg-white border-gray-200 text-gray-700 font-medium"
                >
                  {cert}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partnership CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Interested in Partnership?</h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Join our network of partners working to protect Indian communities from monsoon floods. 
            Together, we can make a greater impact against climate disasters.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Partnership Team
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}