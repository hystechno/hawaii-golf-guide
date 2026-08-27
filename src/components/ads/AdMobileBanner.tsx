'use client'

import { useEffect, useRef, useState } from 'react'

interface AdMobileBannerProps {
  slotId: string
  className?: string
}

/**
 * Mobile Banner Ad Component
 * Size: 320x50
 * Placement: Mobile-only banner ads
 */
export function AdMobileBanner({ slotId, className = '' }: AdMobileBannerProps) {
  const adRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)

    // Lazy loading with IntersectionObserver
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '100px' }
    )

    if (adRef.current) {
      observer.observe(adRef.current)
    }

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  // Load Ezoic ad when visible
  useEffect(() => {
    if (isVisible && typeof window !== 'undefined' && window.ezstandalone) {
      const ez = window.ezstandalone
      ez.cmd.push(() => {
        ez.showAds(slotId)
      })
    }
  }, [isVisible, slotId])

  // Only render on mobile
  if (!isMobile) {
    return null
  }

  return (
    <div
      ref={adRef}
      className={`w-full flex justify-center items-center bg-gray-50 ${className}`}
      style={{ minHeight: '50px' }}
    >
      {isVisible && (
        <div
          id={`ezoic-pub-ad-placeholder-${slotId}`}
          className="ad-container"
          data-ad-slot={slotId}
          style={{
            width: '320px',
            height: '50px',
            maxWidth: '100%',
          }}
        />
      )}
    </div>
  )
}

export default AdMobileBanner
