'use client';

import { motion } from 'framer-motion';

export default function CollaboratorsSection() {
  const collaborators = [
    {
      name: "Indian Institute of Technology Delhi",
      logo: "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=200",
      description: "Research collaboration on AI and climate technology"
    },
    {
      name: "Indian Space Research Organisation",
      logo: "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=200",
      description: "Satellite data integration for weather monitoring"
    },
    {
      name: "National Disaster Management Authority",
      logo: "https://images.pexels.com/photos/256559/pexels-photo-256559.jpeg?auto=compress&cs=tinysrgb&w=200",
      description: "Emergency response protocol development"
    },
    {
      name: "India Meteorological Department",
      logo: "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=200",
      description: "Weather data and forecasting partnership"
    },
    {
      name: "Tata Consultancy Services",
      logo: "https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?auto=compress&cs=tinysrgb&w=200",
      description: "Technology development and system integration"
    },
    {
      name: "Reliance Jio",
      logo: "https://images.pexels.com/photos/256318/pexels-photo-256318.jpeg?auto=compress&cs=tinysrgb&w=200",
      description: "5G network infrastructure and IoT connectivity"
    },
    {
      name: "Indian Institute of Science",
      logo: "https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=200",
      description: "Environmental engineering research collaboration"
    },
    {
      name: "Ministry of Earth Sciences",
      logo: "https://images.pexels.com/photos/256453/pexels-photo-256453.jpeg?auto=compress&cs=tinysrgb&w=200",
      description: "Climate monitoring and data sharing partnership"
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