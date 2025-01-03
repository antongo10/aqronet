'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/app/hooks/useInView'
import { ReactNode } from 'react'
import { containerVariants } from '@/app/utils/animations'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  id?: string
  threshold?: number
  delay?: number
}

export default function AnimatedSection({
  children,
  className = '',
  id,
  threshold = 0.1,
  delay = 0
}: AnimatedSectionProps) {
  const { ref, isInView } = useInView({ threshold })

  return (
    <motion.section
      id={id}
      ref={ref}
      className={className}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={{
        ...containerVariants,
        animate: {
          ...containerVariants.animate,
          transition: {
            ...containerVariants.animate.transition,
            delayChildren: delay
          }
        }
      }}
    >
      {children}
    </motion.section>
  )
}