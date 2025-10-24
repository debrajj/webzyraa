'use client'
import { useEffect } from 'react'

interface LayoutShift extends PerformanceEntry {
  value: number
  hadRecentInput: boolean
}

export default function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime)
          }
          if (entry.entryType === 'first-input') {
            console.log('FID:', (entry as PerformanceEventTiming).processingStart - entry.startTime)
          }
          if (entry.entryType === 'layout-shift') {
            const layoutShift = entry as LayoutShift
            if (!layoutShift.hadRecentInput) {
              console.log('CLS:', layoutShift.value)
            }
          }
        }
      })

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })

      return () => observer.disconnect()
    }
  }, [])

  return null
}