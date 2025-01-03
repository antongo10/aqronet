'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { partners } from '@/config'

export default function PartnersSlider() {
  const containerRef = useRef<HTMLDivElement>(null)
  const row1Ref = useRef<HTMLDivElement>(null)
  const row2Ref = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()
  const progressRef = useRef(0)

  useEffect(() => {
    const container = containerRef.current
    const row1 = row1Ref.current
    const row2 = row2Ref.current
    if (!container || !row1 || !row2) return

    const animate = () => {
      const scrollPosition = window.scrollY
      const containerTop = container.offsetTop
      const containerHeight = container.offsetHeight
      const viewportHeight = window.innerHeight

      // Calculate when the container is in view
      if (
        scrollPosition + viewportHeight > containerTop &&
        scrollPosition < containerTop + containerHeight
      ) {
        // Calculate scroll progress (0 to 1)
        const targetProgress = (scrollPosition + viewportHeight - containerTop) / 
          (containerHeight + viewportHeight)
        
        // Smooth lerp (linear interpolation)
        progressRef.current += (targetProgress - progressRef.current) * 0.1

        // Calculate maximum scroll distance
        const maxScroll = (row1.scrollWidth - row1.clientWidth) / 2
        
        // Apply horizontal scroll with different speeds for each row
        row1.style.transform = `translateX(-${progressRef.current * maxScroll}px)`
        row2.style.transform = `translateX(${progressRef.current * maxScroll * 0.7}px)` // Opposite direction, slower speed
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  // Double the partners array for continuous scroll effect
  const displayPartners = [...partners, ...partners, ...partners]

  return (
    <div 
      ref={containerRef} 
      className="bg-gray-100 py-12 overflow-hidden"
      style={{ minHeight: '40vh' }} // Ensure enough scroll space
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-2xl font-semibold text-gray-800 mb-8">
          Trusted by Leaders From
        </h3>
        <div className="space-y-12">
          {/* First Row - Moving Left */}
          <div 
            ref={row1Ref}
            className="flex space-x-12 transition-transform duration-100 ease-out"
            style={{ 
              width: 'fit-content',
              willChange: 'transform'
            }}
          >
            {displayPartners.map((partner, index) => (
              <div 
                key={`row1-${partner.id}-${index}`}
                className="flex-shrink-0 w-40 transform hover:scale-105 transition-transform duration-300"
              >
                <div className="relative h-12 w-40">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Second Row - Moving Right */}
          <div 
            ref={row2Ref}
            className="flex space-x-12 transition-transform duration-100 ease-out"
            style={{ 
              width: 'fit-content',
              willChange: 'transform'
            }}
          >
            {displayPartners.reverse().map((partner, index) => (
              <div 
                key={`row2-${partner.id}-${index}`}
                className="flex-shrink-0 w-40 transform hover:scale-105 transition-transform duration-300"
              >
                <div className="relative h-12 w-40">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
