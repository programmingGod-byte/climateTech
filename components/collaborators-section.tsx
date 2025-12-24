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
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold">
              In Collaboration With
            </span>
          </h2>
          <p className="text-lg text-gray-600 font-sans dark:text-gray-300 mt-4 max-w-3xl mx-auto">
            We're proud to collaborate with India’s leading institutions in building a more resilient future.
          </p>
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
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 w-full text-center shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-100 dark:hover:border-blue-900 flex flex-col items-center">
                <div className="mb-6 flex items-center justify-center h-20 w-full">
                  <img
                    src={collab.logo}
                    alt={collab.name}
                    className="max-h-full max-w-[120px] object-contain rounded-xl transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-base font-bold font-sans text-gray-900 dark:text-white mb-3 min-h-[3rem] flex items-center justify-center">
                  {collab.name}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-4">
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