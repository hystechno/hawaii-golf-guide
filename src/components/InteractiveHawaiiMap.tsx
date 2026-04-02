'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

interface Island {
  id: string
  name: string
  courseCount: number
  lat: number
  long: number  
  width: number
  height: number
}

const islands: Island[] = [
  { id: 'kauai', name: 'Kauai', courseCount: 8, lat: 21.85, long: 158.55, width: 71, height: 59 },
  { id: 'oahu', name: 'Oahu', courseCount: 39, lat: 21.40, long: 157.95, width: 80, height: 66 },
  { id: 'molokai', name: 'Molokai', courseCount: 1, lat: 21.27, long: 157.25, width: 52, height: 43 },
  { id: 'lanai', name: 'Lanai', courseCount: 3, lat: 21.00, long: 157.15, width: 38, height: 32 },
  { id: 'maui', name: 'Maui', courseCount: 15, lat: 20.93, long: 156.58, width: 96, height: 80 },
  { id: 'hawaii', name: 'Big Island', courseCount: 19, lat: 20.45, long: 155.45, width: 223, height: 183 }
]

const LAT_MIN = 19.8
const LAT_MAX = 22.2
const LONG_MIN = 155.0
const LONG_MAX = 159.0

function latToTop(lat: number): number {
  return ((LAT_MAX - lat) / (LAT_MAX - LAT_MIN)) * 100
}

function longToLeft(long: number): number {
  return ((LONG_MAX - long) / (LONG_MAX - LONG_MIN)) * 100
}

export default function InteractiveHawaiiMap() {
  const router = useRouter()
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  const handleClick = (id: string) => {
    router.push(`/island/${id}`)
  }

  return (
    <div className="w-full max-w-[50rem] mx-auto">
      <div 
        className="relative rounded-2xl overflow-visible shadow-2xl aspect-[1.6/1]"
        style={{
          background: 'linear-gradient(135deg, #020617 0%, #082f49 30%, #0c4a6e 50%, #0369a1 70%, #0284c7 85%, #0ea5e9 100%)'
        }}
      >
        <svg className="absolute inset-0 w-full h-full opacity-[0.03] rounded-2xl pointer-events-none" preserveAspectRatio="none">
          <defs>
            <pattern id="gridV8" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gridV8)" />
        </svg>
        
        <div className="relative w-full h-full" style={{ zIndex: 5 }}>
          {islands.map((island) => {
            const isHovered = hoveredId === island.id
            const hoverScale = isHovered ? 1.12 : 1
            const top = latToTop(island.lat)
            const left = longToLeft(island.long)
            
            // Special label positioning for each island
            const isBigIsland = island.id === 'hawaii'
            const isMolokai = island.id === 'molokai'
            const isLanai = island.id === 'lanai'
            
            return (
              <div key={island.id}>
                {/* Island container with hover scale */}
                <div
                  className="absolute"
                  style={{
                    left: `${left}%`,
                    top: `${top}%`,
                    width: `${island.width}px`,
                    height: `${island.height}px`,
                    transform: `translate(-50%, -50%) scale(${hoverScale})`,
                    cursor: 'pointer',
                    transition: 'transform 0.25s ease',
                    zIndex: isHovered ? 30 : 20
                  }}
                  onMouseEnter={() => setHoveredId(island.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => handleClick(island.id)}
                >
                  <Image
                    src={`/islands/clean/${island.id}.svg`}
                    alt={island.name}
                    fill
                    className="object-contain"
                    style={{
                      filter: isHovered 
                        ? 'invert(48%) sepia(95%) saturate(400%) hue-rotate(95deg) brightness(1.15) drop-shadow(0 0 15px rgba(74, 222, 128, 0.6))'
                        : 'invert(48%) sepia(95%) saturate(335%) hue-rotate(100deg) brightness(1.05) drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                    }}
                    unoptimized
                  />
                  
                  {/* Label INSIDE the scaled container - PERFECT positioning */}
                  <div 
                    className="absolute whitespace-nowrap pointer-events-none"
                    style={{
                      left: isBigIsland ? '0%' : isLanai ? '65%' : '50%',
                      top: isBigIsland ? '85%' : isMolokai ? '80%' : isLanai ? '103%' : '103%',
                      transform: isBigIsland ? 'translate(0, -100%)' : 'translate(-50%, 0)',
                      textAlign: 'center',
                      lineHeight: 1.2,
                      zIndex: 35
                    }}
                  >
                    <p 
                      className={`font-bold text-white transition-all ${isHovered ? 'text-sm' : 'text-xs'}`}
                      style={{ textShadow: '2px 2px 6px rgba(0,0,0,0.95)', margin: 0, padding: 0 }}
                    >
                      {island.name}
                    </p>
                    <p 
                      className="text-[10px] text-emerald-300"
                      style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.95)', margin: 0, padding: 0 }}
                    >
                      {island.courseCount} courses
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        
        <div className="absolute bottom-3 left-3 bg-black/40 backdrop-blur-sm text-white px-3 py-1.5 rounded text-xs z-10">
          <span className="text-emerald-300 font-semibold">Click</span> island to explore
        </div>
      </div>
    </div>
  )
}
