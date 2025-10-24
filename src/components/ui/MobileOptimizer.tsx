'use client'
import { useEffect } from 'react'

export default function MobileOptimizer() {
  useEffect(() => {
    // Prevent zoom on double tap for iOS
    let lastTouchEnd = 0
    const preventZoom = (e: TouchEvent) => {
      const now = new Date().getTime()
      if (now - lastTouchEnd <= 300) {
        e.preventDefault()
      }
      lastTouchEnd = now
    }

    // Add passive event listeners for better scroll performance
    const addPassiveListeners = () => {
      document.addEventListener('touchstart', preventZoom, { passive: false })
      document.addEventListener('touchend', preventZoom, { passive: false })
    }

    // Optimize for mobile devices
    if (typeof window !== 'undefined' && 'ontouchstart' in window) {
      addPassiveListeners()
      
      // Add CSS for better mobile performance
      const style = document.createElement('style')
      style.textContent = `
        * {
          -webkit-overflow-scrolling: touch;
          -webkit-transform: translate3d(0,0,0);
        }
        
        body {
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
          touch-action: manipulation;
        }
        
        @media (max-width: 768px) {
          * {
            -webkit-tap-highlight-color: transparent;
          }
          
          img, video {
            max-width: 100%;
            height: auto;
            transform: translateZ(0);
          }
        }
      `
      document.head.appendChild(style)

      return () => {
        document.removeEventListener('touchstart', preventZoom)
        document.removeEventListener('touchend', preventZoom)
        document.head.removeChild(style)
      }
    }
  }, [])

  return null
}