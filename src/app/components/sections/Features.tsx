'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { features } from '@/config'
import { useInView } from '@/app/hooks/useInView'

export default function Features() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section 
      ref={ref}
      className="py-20 bg-white" 
      id="features"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="lg:text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose AQROnet
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Get direct access to experienced CEOs who have built and scaled successful companies
          </p>
        </motion.div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:-translate-y-1">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="relative">
                      <motion.h3 
                        className="text-2xl font-bold mb-2 transform transition-transform duration-300 group-hover:translate-x-2"
                      >
                        {feature.title}
                      </motion.h3>
                      <motion.p 
                        className="text-gray-200 transform transition-transform duration-300 group-hover:translate-x-2"
                      >
                        {feature.description}
                      </motion.p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg transform transition-transform duration-300 group-hover:-translate-y-1">
                  Feature {index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
