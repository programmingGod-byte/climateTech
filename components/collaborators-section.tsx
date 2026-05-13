'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ParticleStars from './particle-stars';

export default function CollaboratorsSection() {
  const collaborators = [
    {
      name: "Indian Institute of Technology Mandi",
      logo: "/images/iitmandi.png",
      description: "for technological innovation"
    },
    {
      name: "C≡DAR Indian Institute of Technology Mandi",
      logo: "/images/cedar.png",
      description: "Driving innovation in environmental sensing and disaster response."
    },
    {
      name: "IIT Mandi iHub",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2YLtRjIjRDH0YiYkZeq3BPTew-msKoB2eHw&s",
      description: "Enabling cutting-edge R&D through strategic technology partnerships."
    },
    {
      name: "IIT Mandi Catalyst",
      logo: "https://www.iitmandicatalyst.in/images/logo-black.png",
      description: "India’s first tech-business incubator in a hill station."
    },
    {
      name: "IIT Ropar Awadh",
      logo: "https://om-bhaiya-testing.s3.ap-south-1.amazonaws.com/c572eb783e46efc8016cf2f7f0d38be62693f26dccdcc3bfbc2e471bc6003d7f.webp",
      description: "Accelerating AI-driven climate resilience in rural India."
    },
    {
      name: "Tbif Iiit Ropar ",
      logo: "https://om-bhaiya-testing.s3.ap-south-1.amazonaws.com/22569af1101bc707163ada9d5476960f5b175078780edbe0d23ee103cd172e07.jpeg",
      description: "Deep tech in IoT, AI, Manufacturing, Healthcare, Energy, and Defense"
    },
    {
      name: "NSRCEL IITM",
      logo: "https://om-bhaiya-testing.s3.ap-south-1.amazonaws.com/6d44368234b2baa8c3566e417b121d8f960579db7afa30bd1cf1998cad3cb0bf.jpeg",
      description: "A leading entity supporting entrepreneurs from idea to scaling through specialized programs."
    },
    {
      name: "IIT STARTUPS",
      logo: "https://om-bhaiya-testing.s3.ap-south-1.amazonaws.com/1aa61749ada6adf082f19a15cd08aff1fc83d8001ec79bece9ffb0143290be7f.jpeg",
      description: "Non-profit startup accelerator founded by alumni of the Indian Institutes of Technology."
    },
    {
      name: "NVIDIA",
      logo: "/images/nvidia.png",
      description: "A global leader in AI and accelerated computing, known for its GPUs and platforms powering innovation in machine learning "
    },
    {
      name: "INDIaI",
      logo: "/images/indiai.png",
      description: "A rapidly growing hub for innovation and technology, fostering startups, research, and advancements across AI"
    },
  ];

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden text-white">
      <motion.div 
        style={{ y }} 
        className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 z-0"
      />
      <ParticleStars />
      <div className="max-w-7xl mx-auto px-6 relative z-10" id="partners">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-sans text-white font-bold" style={{
            fontFamily:"sans-serif"
          }}>
            Trusted Partners
          </h2>
        </motion.div>

        {/* The Container */}
        <div className="flex flex-wrap justify-center gap-6">
          {collaborators.map((collab, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              /* Logic: 
                 - Mobile: 100% (1 per row)
                 - Tablet: calc(50% - gap) (2 per row)
                 - Desktop: calc(25% - gap) (4 per row) 
              */
              className="group w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)] max-w-[300px] flex"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 w-full text-center shadow-md hover:shadow-xl transition-all duration-300 border border-white/10 hover:border-blue-400/50 flex flex-col items-center group-hover:-translate-y-2">
                <div className="mb-6 flex items-center justify-center h-20 w-full bg-white/5 rounded-xl p-4">
                  <img
                    src={collab.logo}
                    alt={collab.name}
                    className="max-h-full max-w-[120px] object-contain rounded-lg transition-transform duration-300 group-hover:scale-110 brightness-110"
                  />
                </div>
                <h3 className="text-base font-bold font-sans text-white mb-3 min-h-[3rem] flex items-center justify-center">
                  {collab.name}
                </h3>
                <p className="text-xs text-white/70 leading-relaxed line-clamp-4">
                  {collab.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}