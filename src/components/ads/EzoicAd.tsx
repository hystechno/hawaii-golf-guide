'use client'

import { useEffect, useRef, useState } from 'react'

interface EzoicAdProps {
  placementId: number
  className?: string
}

/**
 * Ezoic Ad Component
 * 
 * Usage:
 * <EzoicAd placementId={101} />
 * 
 * Placeholder IDs (update with actual IDs from Ezoic dashboard):
 * - Homepage top: 101
 * - Homepage mid: 102
 * - Homepage bottom: 103
 * - Course page top: 201
 * - Course page mid-1: 202
 * - Course page mid-2: 203
 * - Course page bottom: 204
 * - Island page top: 301
 * - Island in-feed: 302
 */
export function EzoicAd({ placementId, className = '' }: EzoicAdProps) {
  const adRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
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

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    // Load ad when visible
    if (isVisible && typeof window !== 'undefined' && window.ezstandalone) {
      const ez = window.ezstandalone
      ez.cmd.push(() => {
        ez.showAds(placementId)
      })
    }
  }, [isVisible, placementId])

  return (
    <div
      ref={adRef}
      className={`w-full ${className}`}
      data-ez-placement-id={placementId}
    >
      {isVisible && (
        <div id={`ezoic-pub-ad-placeholder-${placementId}`} />
      )}
    </div>
  )
}

/**
 * Multiple Ezoic Ads Component
 * Optimized for pages with multiple ad placements
 * Reduces server requests by calling showAds() once with all IDs
 */
interface EzoicAdsProps {
  placementIds: number[]
  className?: string
}

export function EzoicAds({ placementIds, className = '' }: EzoicAdsProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '100px' }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible && typeof window !== 'undefined' && window.ezstandalone) {
      const ez = window.ezstandalone
      ez.cmd.push(() => {
        ez.showAds(...placementIds)
      })
    }
  }, [isVisible, placementIds])

  return (
    <div ref={containerRef} className={className}>
      {isVisible && placementIds.map((id) => (
        <div key={id} id={`ezoic-pub-ad-placeholder-${id}`} />
      ))}
    </div>
  )
}

export default EzoicAd
