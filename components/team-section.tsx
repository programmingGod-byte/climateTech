'use client';

import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function TeamSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const teamMembers = [
    {
      name: "Dharkan Anand",
      role: "Chief Technology Officer",
      expertise: "Mentor",
      description: "Dharkan leads the vision and core development of the system. With a strong foundation in engineering, he focuses on turning complex river data into actionable insights for early flood detection.",
      image: "https://om-bhaiya-veriflow-exvx.vercel.app/dharkanBhaiya.jpg",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Om maheshwari",
      role: "Head of Product Development",
      expertise: "IoT & Sensor Technology",
      description: "Om brings a sharp technical mindset and a practical approach to problem-solving. He plays a key role in developing robust systems and ensuring the reliability of our flood monitoring technology in real-world conditions.",
      image: "https://om-bhaiya-veriflow-exvx.vercel.app/omBhaiya.jpg",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Kunal Mittal",
      role: "Core Member",
      expertise: "IoT & Sensor Technology",
      description: "A core team member at Visiflow, Kunal focuses on building seamless user experiences and scalable backend systems. His work bridges the gap between field data and intuitive digital platforms, helping deliver real-time insights to users.",
      image: "https://om-bhaiya-veriflow-exvx.vercel.app/kunal.jpg",
      linkedin: "#",
      twitter: "#"
    },
    
  ];

  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(teamMembers.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentMembers = () => {
    const start = currentSlide * itemsPerSlide;
    return teamMembers.slice(start, start + itemsPerSlide);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Discover the Expertise Behind Our Innovations
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our team is dedicated to advancing flood prevention with exceptional skills and unwavering commitment.
          </p>
        </motion.div>

        {/* Team Slider */}
        <div className="relative">
          <div className="grid lg:grid-cols-3 gap-8">
            {getCurrentMembers().map((member, index) => (
              <motion.div
                key={`${currentSlide}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 dark:bg-gray-800">
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-6">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-blue-100 dark:border-blue-900"
                      />
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {member.expertise}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                      {member.description}
                    </p>
                    
                    <div className="flex justify-center space-x-3">
                      <a
                        href={member.linkedin}
                        className="text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a
                        href={member.twitter}
                        className="text-gray-400 hover:text-blue-400 transition-colors"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-full p-3 shadow-lg transition-all"
              >
                <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-gray-300" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-full p-3 shadow-lg transition-all"
              >
                <ChevronRight className="h-6 w-6 text-gray-600 dark:text-gray-300" />
              </button>
            </>
          )}

          {/* Slide Indicators */}
          {totalSlides > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide 
                      ? 'bg-blue-600' 
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}