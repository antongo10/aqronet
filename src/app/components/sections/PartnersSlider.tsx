'use client'

import Image from 'next/image'
import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { partners } from '@/config'

export default function PartnersSlider() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Create smooth spring animations for the scroll
  const springConfig = { mass: 0.1, stiffness: 100, damping: 20 }
  
  // Transform scrollYProgress to larger values for more noticeable movement
  const row1Position = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  )
  
  const row2Position = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  )
  // Double the partners array for continuous scroll effect
  const displayPartners = [...partners, ...partners]

  return (
    <div 
      ref={containerRef}
      className="bg-gray-50 py-16 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-2xl font-semibold text-gray-800 mb-12">
          Trusted by Leaders From
        </h3>

        {/* First Row - Moving Right */}
        <motion.div 
          className="flex space-x-12 mb-12"
          style={{
            x: row1Position
          }}
        >
          {displayPartners.map((partner, index) => (
            <div 
              key={`row1-${partner.id}-${index}`}
              className="flex-shrink-0 w-48 h-24 relative"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>

        {/* Second Row - Moving Left */}
        <motion.div 
          className="flex space-x-12"
          style={{
            x: row2Position
          }}
        >
          {displayPartners.reverse().map((partner, index) => (
            <div 
              key={`row2-${partner.id}-${index}`}
              className="flex-shrink-0 w-48 h-24 relative"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>

        {/* Gradient Overlays */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-gray-50 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-gray-50 to-transparent z-10" />
      </div>
    </div>
  )
}
