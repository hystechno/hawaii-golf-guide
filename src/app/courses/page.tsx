'use client'

import { useState, useMemo } from 'react'
import { Search, MapPin } from 'lucide-react'
import coursesData from '@/data/courses.json'
import Link from 'next/link'

const courses = coursesData.courses

const islands = ['All Islands', ...Array.from(new Set(courses.map(c => c.island))).sort()]
const types = ['All Types', ...Array.from(new Set(courses.map(c => c.type))).sort()]
const difficulties = ['All Levels', 'Easy', 'Medium', 'Hard']

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedIsland, setSelectedIsland] = useState('All Islands')
  const [selectedType, setSelectedType] = useState('All Types')
  const [selectedDifficulty, setSelectedDifficulty] = useState('All Levels')

  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      const matchesSearch = 
        searchQuery === '' ||
        course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.island.toLowerCase().includes(searchQuery.toLowerCase())
      
      const matchesIsland = selectedIsland === 'All Islands' || course.island === selectedIsland
      const matchesType = selectedType === 'All Types' || course.type === selectedType
      const matchesDifficulty = selectedDifficulty === 'All Levels' || course.difficulty === selectedDifficulty
      
      return matchesSearch && matchesIsland && matchesType && matchesDifficulty
    })
  }, [searchQuery, selectedIsland, selectedType, selectedDifficulty])

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-emerald-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">All Golf Courses</h1>
          <p className="text-emerald-200">{courses.length} courses across Hawaii</p>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="bg-white border-b px-4 py-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          <div className="flex gap-2">
            <select 
              value={selectedIsland}
              onChange={(e) => setSelectedIsland(e.target.value)}
              className="px-4 py-2 border rounded-lg text-sm"
            >
              {islands.map(island => <option key={island} value={island}>{island}</option>)}
            </select>
            <select 
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2 border rounded-lg text-sm"
            >
              {types.map(type => <option key={type} value={type}>{type}</option>)}
            </select>
            <select 
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-4 py-2 border rounded-lg text-sm"
            >
              {difficulties.map(diff => <option key={diff} value={diff}>{diff}</option>)}
            </select>
          </div>
        </div>
      </section>

      {/* Results Count */}
      <section className="max-w-6xl mx-auto px-4 py-4">
        <p className="text-gray-600 text-sm">
          Showing {filteredCourses.length} of {courses.length} courses
        </p>
      </section>

      {/* Course Grid */}
      <section className="py-8 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <Link
              key={course.id}
              href={`/courses/${course.id}/`}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-100 overflow-hidden transition-all"
            >
              <div className="h-40 bg-gradient-to-br from-emerald-500 to-teal-600 relative">
                {course.image_thumb ? (
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-80"
                    style={{ backgroundImage: `url('${course.image_thumb}')` }}
                  />
                ) : null}
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 px-2.5 py-1 rounded text-xs font-medium text-gray-800">
                    {course.type}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className={`px-2.5 py-1 rounded text-xs font-medium ${
                    course.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                    course.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {course.difficulty}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-1">{course.name}</h3>
                <p className="text-gray-500 text-sm mb-3 flex items-center gap-1">
                  <MapPin size={14} />
                  {course.city}, {course.island}
                </p>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <span>Par {course.par}</span>
                  <span className="text-gray-300">|</span>
                  <span>{course.yardage.toLocaleString()} yds</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No courses match your filters.</p>
            <button 
              onClick={() => {
                setSearchQuery('')
                setSelectedIsland('All Islands')
                setSelectedType('All Types')
                setSelectedDifficulty('All Levels')
              }}
              className="mt-4 text-emerald-600 hover:text-emerald-700 font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}
      </section>
    </main>
  )
}
