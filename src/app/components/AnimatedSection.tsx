'use client'

import { motion } from 'framer-motion'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
}

export default function AnimatedSection({ children, className }: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  )
} 