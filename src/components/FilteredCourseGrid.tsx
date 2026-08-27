'use client'

import { useState, useMemo } from 'react'
import { MapPin, SlidersHorizontal, X } from 'lucide-react'

interface Course {
  id: string
  name: string
  city: string
  island: string
  type: string
  difficulty: string
  par: number
  yardage: number
  description: string
  image_thumb?: string
  rates?: {
    visitor_weekday?: string
    visitor_weekend?: string
    [key: string]: string | undefined
  }
}

interface FilteredCourseGridProps {
  courses: Course[]
  islandColor: string
}

export default function FilteredCourseGrid({ courses, islandColor }: FilteredCourseGridProps) {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([])
  const [selectedCities, setSelectedCities] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState<string>('name')
  const [showFilters, setShowFilters] = useState(false)

  // Extract unique values
  const types = useMemo(() => [...new Set(courses.map(c => c.type))].sort(), [courses])
  const difficulties = useMemo(() => [...new Set(courses.map(c => c.difficulty))].sort(), [courses])
  const cities = useMemo(() => [...new Set(courses.map(c => c.city))].sort(), [courses])

  // Parse price from rate string
  const getPriceValue = (course: Course): number => {
    const rateStr = course.rates?.visitor_weekday || course.rates?.visitor_weekend || ''
    const match = rateStr.match(/\$(\d+)/)
    return match ? parseInt(match[1]) : 0
  }

  // Filter and sort courses
  const filteredCourses = useMemo(() => {
    let result = [...courses]

    // Filter by type
    if (selectedTypes.length > 0) {
      result = result.filter(c => selectedTypes.includes(c.type))
    }

    // Filter by difficulty
    if (selectedDifficulties.length > 0) {
      result = result.filter(c => selectedDifficulties.includes(c.difficulty))
    }

    // Filter by city
    if (selectedCities.length > 0) {
      result = result.filter(c => selectedCities.includes(c.city))
    }

    // Filter by price range
    if (priceRange) {
      result = result.filter(c => {
        const price = getPriceValue(c)
        if (priceRange === '$') return price > 0 && price < 75
        if (priceRange === '$$') return price >= 75 && price <= 150
        if (priceRange === '$$$') return price > 150
        return true
      })
    }

    // Sort
    result.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name)
        case 'price-low':
          return getPriceValue(a) - getPriceValue(b)
        case 'price-high':
          return getPriceValue(b) - getPriceValue(a)
        case 'difficulty':
          const diffOrder = { 'Easy': 1, 'Medium': 2, 'Hard': 3 }
          return (diffOrder[a.difficulty as keyof typeof diffOrder] || 0) - (diffOrder[b.difficulty as keyof typeof diffOrder] || 0)
        case 'city':
          return a.city.localeCompare(b.city)
        default:
          return 0
      }
    })

    return result
  }, [courses, selectedTypes, selectedDifficulties, selectedCities, priceRange, sortBy])

  const toggleType = (type: string) => {
    setSelectedTypes(prev => 
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    )
  }

  const toggleDifficulty = (diff: string) => {
    setSelectedDifficulties(prev => 
      prev.includes(diff) ? prev.filter(d => d !== diff) : [...prev, diff]
    )
  }

  const toggleCity = (city: string) => {
    setSelectedCities(prev => 
      prev.includes(city) ? prev.filter(c => c !== city) : [...prev, city]
    )
  }

  const clearFilters = () => {
    setSelectedTypes([])
    setSelectedDifficulties([])
    setSelectedCities([])
    setPriceRange(null)
    setSortBy('name')
  }

  const activeFiltersCount = selectedTypes.length + selectedDifficulties.length + selectedCities.length + (priceRange ? 1 : 0)

  return (
    <>
      {/* Filter Bar */}
      <section className="bg-white border-b py-4 px-4 sticky top-0 z-30 shadow-sm">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center gap-3">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors"
            >
              <SlidersHorizontal size={16} />
              Filters
              {activeFiltersCount > 0 && (
                <span className="bg-emerald-500 text-white text-xs px-2 py-0.5 rounded-full">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            {/* Desktop Sort */}
            <div className="flex items-center gap-2 ml-auto">
              <span className="text-sm text-gray-600 hidden sm:inline">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="name">Alphabetical</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="difficulty">Difficulty</option>
                <option value="city">City</option>
              </select>
            </div>

            {/* Results Count */}
            <span className="text-sm text-gray-600">
              {filteredCourses.length} of {courses.length} courses
            </span>

            {/* Clear Filters */}
            {activeFiltersCount > 0 && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1 text-sm text-red-600 hover:text-red-700 px-3 py-2"
              >
                <X size={14} />
                Clear all
              </button>
            )}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto flex gap-6 py-6 px-4">
        {/* Sidebar Filters */}
        <aside className={`${showFilters ? 'block' : 'hidden'} lg:block w-full lg:w-64 flex-shrink-0`}>
          <div className="bg-white rounded-lg shadow-sm border p-4 space-y-6">
            {/* Filter by Type */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Course Type</h4>
              <div className="space-y-2">
                {types.map(type => (
                  <label key={type} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1 rounded">
                    <input
                      type="checkbox"
                      checked={selectedTypes.includes(type)}
                      onChange={() => toggleType(type)}
                      className="w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500"
                    />
                    <span className="text-sm text-gray-700">{type}</span>
                    <span className="text-xs text-gray-400 ml-auto">
                      {courses.filter(c => c.type === type).length}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filter by Difficulty */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Difficulty</h4>
              <div className="space-y-2">
                {difficulties.map(diff => (
                  <label key={diff} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1 rounded">
                    <input
                      type="checkbox"
                      checked={selectedDifficulties.includes(diff)}
                      onChange={() => toggleDifficulty(diff)}
                      className="w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500"
                    />
                    <span className={`text-sm px-2 py-0.5 rounded ${
                      diff === 'Easy' ? 'bg-green-100 text-green-800' :
                      diff === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {diff}
                    </span>
                    <span className="text-xs text-gray-400 ml-auto">
                      {courses.filter(c => c.difficulty === diff).length}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filter by City */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">City</h4>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {cities.map(city => (
                  <label key={city} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1 rounded">
                    <input
                      type="checkbox"
                      checked={selectedCities.includes(city)}
                      onChange={() => toggleCity(city)}
                      className="w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500"
                    />
                    <span className="text-sm text-gray-700">{city}</span>
                    <span className="text-xs text-gray-400 ml-auto">
                      {courses.filter(c => c.city === city).length}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filter by Price Range */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Price Range</h4>
              <div className="space-y-2">
                {['$', '$$', '$$$'].map((range, idx) => (
                  <label key={range} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1 rounded">
                    <input
                      type="radio"
                      name="priceRange"
                      checked={priceRange === range}
                      onChange={() => setPriceRange(range)}
                      className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                    />
                    <span className="text-sm text-gray-700">
                      {range} {' '}
                      {idx === 0 && '(Under $75)'}
                      {idx === 1 && '($75-$150)'}
                      {idx === 2 && '($150+)'}
                    </span>
                  </label>
                ))}
                <label className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1 rounded">
                  <input
                    type="radio"
                    name="priceRange"
                    checked={priceRange === null}
                    onChange={() => setPriceRange(null)}
                    className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                  />
                  <span className="text-sm text-gray-700">All Prices</span>
                </label>
              </div>
            </div>
          </div>
        </aside>

        {/* Course Grid */}
        <section className="flex-1">
          {filteredCourses.length === 0 ? (
            <div className="text-center py-12">
              <MapPin className="mx-auto mb-4 text-gray-300" size={48} />
              <h3 className="text-lg font-medium text-gray-700 mb-2">No courses found</h3>
              <p className="text-gray-500 mb-4">Try adjusting your filters</p>
              <button
                onClick={clearFilters}
                className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredCourses.map((course, index) => (
                <>
                  <a 
                    key={course.id} 
                    href={`/courses/${course.id}/`}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border group"
                  >
                    {/* Thumbnail Image */}
                    <div className={`h-48 relative overflow-hidden ${!course.image_thumb ? islandColor : ''}`}>
                      {course.image_thumb ? (
                        <img 
                          src={course.image_thumb}
                          alt={course.name}
                          className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-700"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center opacity-80">
                          <MapPin className="text-white/50" size={48} />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    </div>
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-lg text-gray-800 line-clamp-1">{course.name}</h3>
                      </div>
                      <div className="flex gap-2 mb-3 flex-wrap">
                        <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {course.type}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded ${
                          course.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                          course.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {course.difficulty}
                        </span>
                        <span className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                          {course.city}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                        {course.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                        <span>Par {course.par}</span>
                        <span>{course.yardage.toLocaleString()} yds</span>
                        {course.rates?.visitor_weekday && (
                          <span className="text-emerald-600 font-medium">
                            From {course.rates.visitor_weekday.split(' ')[0]}
                          </span>
                        )}
                      </div>
                      <div className="block w-full text-center bg-emerald-600 group-hover:bg-emerald-700 text-white py-2 rounded-lg font-medium transition-colors">
                        View Details
                      </div>
                    </div>
                  </a>
                </>
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  )
}
