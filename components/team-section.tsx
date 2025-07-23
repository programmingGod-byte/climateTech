'use client';

import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function TeamSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const teamMembers = [
    {
      name: "Dr. Vivek Gupta",
      role: "Mentor",
      expertise: "Mentor",
      description: "Faculty Advisor at Visiflow, Prof. Vivek Gupta provides guidance on technical strategy and research direction. His expertise and mentorship play a vital role in shaping the project's real-world impact and academic rigor.",
      image: "https://pbs.twimg.com/profile_images/1639867545548382208/hx9KZE5z_400x400.jpg",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Dharkan Anand",
      role: "Mentor",
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
      name: 
      "Kunal Mittal",
      role: "Core Member",
      expertise: "IoT & Sensor Technology",
      description: "A core team member at Visiflow, Kunal focuses on building seamless user experiences and scalable backend systems. His work bridges the gap between field data and intuitive digital platforms, helping deliver real-time insights to users.",
      image: "https://om-bhaiya-veriflow-exvx.vercel.app/kunal.jpg",
      linkedin: "#",
      twitter: "#"
    }
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
    <section  className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-sans text-gray-900 dark:text-white mb-4">
            Discover the Expertise Behind Our Innovations
          </h2>
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
                className="group h-80"
              >
                <div className="relative w-full h-full [perspective:1000px]">
                  <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    
                    {/* Front of Card - Only Image and Name */}
                    <Card className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-white dark:bg-gray-800 shadow-lg">
                      <CardContent className="p-0 h-full w-full">
  <div className="relative w-full h-full">
    <img
      src={member.image}
      alt={member.name}
      className="object-cover w-full h-full rounded-lg"
    />
    <div className="absolute bottom-0 w-full  text-white text-center py-2 backdrop-blur-sm">
      <h3 className="text-lg font-semibold">{member.name}</h3>
    </div>
  </div>
</CardContent>
                    </Card>

                    {/* Back of Card - All Other Information */}
                    <Card className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 shadow-lg">
                      <CardContent className="p-6 text-center h-full flex flex-col justify-between">
                        <div>
                          <div className="relative mb-4">
                            <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium inline-block mb-3">
                              {member.expertise}
                            </div>
                          </div>
                          
                          <h3 className="text-xl font-sans text-gray-900 dark:text-white mb-1">
                            {member.name}
                          </h3>
                          <p className="text-blue-600 dark:text-blue-400 font-medium mb-3 text-sm">
                            {member.role}
                          </p>
                          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                            {member.description}
                          </p>
                        </div>
                        
                        <div className="flex justify-center space-x-4 mt-4">
                          {/* <a
                            href={member.linkedin}
                            className="text-gray-400 hover:text-blue-600 transition-colors p-2 bg-white dark:bg-gray-700 rounded-full shadow-md hover:shadow-lg"
                          >
                            <Linkedin className="h-5 w-5" />
                          </a>
                          <a
                            href={member.twitter}
                            className="text-gray-400 hover:text-blue-400 transition-colors p-2 bg-white dark:bg-gray-700 rounded-full shadow-md hover:shadow-lg"
                          >
                            <Twitter className="h-5 w-5" />
                          </a> */}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-full p-3 shadow-lg transition-all hover:scale-110"
              >
                <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-gray-300" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-full p-3 shadow-lg transition-all hover:scale-110"
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
                      ? 'bg-blue-600 scale-125' 
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
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