'use client'
import React, { useEffect, useState } from 'react'
import { motion, MotionProps } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface MobileAnimationWrapperProps extends MotionProps {
  children: React.ReactNode
  fallback?: string
}

const MobileAnimationWrapper = ({ 
  children, 
  fallback = 'div',
  ...motionProps 
}: MobileAnimationWrapperProps) => {
  const [isMobile, setIsMobile] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (prefersReducedMotion || isMobile) {
    return React.createElement(fallback, null, children)
  }

  return <motion.div {...motionProps}>{children}</motion.div>
}

export default MobileAnimationWrapper