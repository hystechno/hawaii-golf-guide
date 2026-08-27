'use client'

import { useState, useMemo } from 'react'
import { Search, X } from 'lucide-react'
import Link from 'next/link'
import coursesData from '@/data/courses.json'

interface Course {
  id: string
  name: string
  city: string
  island: string
  type: string
}

const courses: Course[] = coursesData.courses.map(c => ({
  id: c.id,
  name: c.name,
  city: c.city,
  island: c.island,
  type: c.type
}))

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const results = useMemo(() => {
    if (query.length < 3) return []
    
    const lowerQuery = query.toLowerCase()
    return courses.filter(course => 
      course.name.toLowerCase().includes(lowerQuery) ||
      course.city.toLowerCase().includes(lowerQuery) ||
      course.island.toLowerCase().includes(lowerQuery)
    ).slice(0, 8) // Limit to 8 results
  }, [query])

  const handleClear = () => {
    setQuery('')
    setIsOpen(false)
  }

  const handleSelect = () => {
    setQuery('')
    setIsOpen(false)
  }

  return (
    <div className="max-w-xl mx-auto relative mb-6 md:mb-8 px-2 sm:px-0">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-amber-300/20 blur-xl rounded-full" />
      <div className="relative">
        <div className="flex items-center bg-white/95 backdrop-blur-md rounded-full shadow-2xl overflow-hidden border-2 border-amber-200/50">
          <Search className="ml-3 sm:ml-5 text-amber-600 flex-shrink-0" size={18} />
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setIsOpen(e.target.value.length >= 3)
            }}
            onFocus={() => query.length >= 3 && setIsOpen(true)}
            placeholder="Search courses, cities..."
            className="flex-1 py-3 sm:py-4 px-2 sm:px-3 text-gray-800 bg-transparent focus:outline-none text-sm sm:text-base placeholder:text-gray-400 font-[var(--font-cormorant)]"
          />
          {query && (
            <button 
              onClick={handleClear}
              className="p-2 text-gray-400 hover:text-gray-600"
            >
              <X size={18} />
            </button>
          )}
          <button 
            onClick={() => setIsOpen(query.length >= 3)}
            className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 sm:px-6 py-3 sm:py-4 font-medium hover:from-amber-600 hover:to-amber-700 transition-all text-sm sm:text-base whitespace-nowrap"
          >
            Search
          </button>
        </div>

        {/* Search Results Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50">
            {results.length > 0 ? (
              <div className="max-h-80 overflow-y-auto">
                {results.map((course) => (
                  <Link
                    key={course.id}
                    href={`/courses/${course.id}/`}
                    onClick={handleSelect}
                    className="flex items-center px-4 py-3 hover:bg-amber-50 transition-colors border-b border-gray-50 last:border-0"
                  >
                    <div className="flex-1">
                      <div className="font-medium text-gray-800">{course.name}</div>
                      <div className="text-sm text-gray-500">
                        {course.city}, {course.island} • {course.type}
                      </div>
                    </div>
                    <Search className="text-gray-300" size={16} />
                  </Link>
                ))}
              </div>
            ) : query.length >= 3 ? (
              <div className="px-4 py-6 text-center text-gray-500">
                <Search className="mx-auto mb-2 text-gray-300" size={24} />
                <p>No courses found for &quot;{query}&quot;</p>
                <p className="text-sm text-gray-400 mt-1">Try a different search term</p>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </div>
  )
}
