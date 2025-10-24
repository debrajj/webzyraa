'use client'
import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface SlideUpAnimationProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

const SlideUpAnimation = ({ children, delay = 0, className = '' }: SlideUpAnimationProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const actualDelay = prefersReducedMotion ? 0 : isMobile ? Math.min(delay, 100) : delay
          setTimeout(() => setIsVisible(true), actualDelay)
        }
      },
      { threshold: isMobile ? 0.05 : 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay, isMobile, prefersReducedMotion])

  const getDuration = () => {
    if (prefersReducedMotion) return 'duration-0'
    if (isMobile) return 'duration-300'
    return 'duration-700'
  }

  const getTransform = () => {
    if (prefersReducedMotion) return isVisible ? 'opacity-100' : 'opacity-0'
    return isVisible ? 'opacity-100 translate-y-0' : `opacity-0 ${isMobile ? 'translate-y-4' : 'translate-y-8'}`
  }

  return (
    <div
      ref={ref}
      className={`transition-all ${getDuration()} ease-out transform-gpu ${getTransform()} ${className}`}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </div>
  )
}

export default SlideUpAnimation