'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { howItWorks } from '@/config'
import { useInView } from '@/app/hooks/useInView'
import { fadeInUp, slideIn, stagger, containerVariants, itemVariants } from '@/app/utils/animations'

export default function HowItWorks() {
  const { ref: sectionRef, isInView: isSectionInView } = useInView({ threshold: 0.1 })

  return (
    <motion.section 
      ref={sectionRef}
      className="py-12 bg-gray-50" 
      id="how-it-works"
      initial="initial"
      animate={isSectionInView ? "animate" : "initial"}
      variants={containerVariants}
    >
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={stagger}
      >
        <motion.div 
          className="lg:text-center mb-12"
          variants={fadeInUp()}
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            How It Works
          </h2>
        </motion.div>

        <div className="space-y-8">
          {/* First Row - Wide + Thin (2:1) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Wide Block */}
            <motion.div 
              className="lg:col-span-2"
              variants={slideIn('left')}
            >
              <div className="group bg-white rounded-lg shadow-lg overflow-hidden h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-64 lg:h-80 w-full overflow-hidden">
                  <Image
                    src={howItWorks.row1.wide.image}
                    alt={howItWorks.row1.wide.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 relative">
                  <div className="absolute -top-8 left-6 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Step 1
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {howItWorks.row1.wide.title}
                  </h3>
                  <p className="mt-2 text-gray-500">
                    {howItWorks.row1.wide.description}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Thin Block */}
            <motion.div 
              variants={slideIn('right')}
              className="transform transition-all duration-300 hover:-translate-y-1"
            >
              <div className="group bg-white rounded-lg shadow-lg overflow-hidden h-full hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 lg:h-80 w-full overflow-hidden">
                  <Image
                    src={howItWorks.row1.thin.image}
                    alt={howItWorks.row1.thin.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 relative">
                  <div className="absolute -top-8 left-6 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Step 2
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {howItWorks.row1.thin.title}
                  </h3>
                  <p className="mt-2 text-gray-500">
                    {howItWorks.row1.thin.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Second Row - Three Equal Columns (1:1:1) */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={stagger}
          >
            {howItWorks.row2.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                custom={index * 0.2}
                className="transform transition-all duration-300 hover:-translate-y-1"
              >
                <div className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6 relative">
                    <div className="absolute -top-8 left-6 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Step {index + 3}
                    </div>
                    <h3 className="text-xl font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  )
}
