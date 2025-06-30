'use client';

import { motion } from 'framer-motion';

export default function CollaboratorsSection() {
  const collaborators = [
    {
      name: "Indian Institute of Technology Mandi",
      logo: "https://iitmandi.ac.in/images/dora/gallery/campus/campus3.jpeg",
    },
    {
      name: "Indian Institute of Technology Mandi ihub",
      logo: "https://syncubator.in/assets/img_ihub_logo_new_2.png",
    },
    {
      name: "Indian Institute of Technology Mandi catalyst",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs_A4gcXehBB2OS27WHoFut3cn7kGi51vAJw&s",
    },
    {
      name: "Indian Institute of Technology Ropar Awadh",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyj8tSQnyisG4BiXRHASPFdCejgMXX8wO6UONePaxoj20xnEbrJEFtUytDQ87LDwok5bw&usqp=CAU",
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            In Collaboration With
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We work with leading Indian institutions and organizations to deliver 
            cutting-edge flood prevention solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {collaborators.map((collaborator, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 h-full">
                <div className="mb-4">
                  <img
                    src={collaborator.logo}
                    alt={collaborator.name}
                    className="w-16 h-16 rounded-full object-cover mx-auto group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {collaborator.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {collaborator.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partnership CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Join Our Collaboration Network</h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Partner with us to advance flood prevention technology and protect Indian communities 
            from climate disasters through innovative solutions.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Partnership Opportunities
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}