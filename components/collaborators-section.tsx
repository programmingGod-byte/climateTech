'use client';

import { motion } from 'framer-motion';

export default function CollaboratorsSection() {
  const collaborators = [
    {
      name: "Indian Institute of Technology Mandi",
      logo: "/images/iitmandi.png",
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
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6" id="partners">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-sans text-gray-900 dark:text-white">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            In Collaboration With</span>
          </h2>
          <p className="text-lg text-gray-600 font-sans   dark:text-gray-300 mt-4 max-w-3xl mx-auto">
            We're proud to collaborate with India’s leading institutions in building a more resilient future.
          </p>
        </motion.div>

        {/* Logos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {collaborators.map((collab, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 h-full text-center shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="mb-5">
                  <img
                    src={collab.logo}
                    alt={collab.name}
                    className="w-24 h-24 object-contain rounded-xl mx-auto transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-medium font-sans text-gray-900 dark:text-white mb-2">
                  {collab.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {collab.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-24 text-center bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-10 text-white shadow-lg"
        >
          <h3 className="text-3xl font-bold mb-4">Join Our Collaboration Network</h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Partner with us to advance flood prevention technology and protect communities 
            across India through smart climate infrastructure.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Partnership Opportunities
          </motion.button>
        </motion.div> */}
      </div>
    </section>
  );
}
